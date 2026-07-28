import type { VercelRequest, VercelResponse } from '@vercel/node';
import Anthropic from '@anthropic-ai/sdk';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ListingContext {
  title: string;
  location: string;
  description: string;
  amenities: string[];
}

interface ChatRequestBody {
  messages: ChatMessage[];
  listing: ListingContext;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({
      error: 'The concierge is not configured yet. Missing ANTHROPIC_API_KEY.',
    });
    return;
  }

  const { messages, listing } = req.body as ChatRequestBody;

  if (!Array.isArray(messages) || !listing) {
    res.status(400).json({ error: 'Invalid request body' });
    return;
  }

  const systemPrompt = `You are a friendly, knowledgeable concierge for a guest currently staying at "${listing.title}" in ${listing.location}. About this stay: ${listing.description} Amenities available: ${listing.amenities.join(', ')}.

Help the guest plan their trip: suggest nearby restaurants, activities, day trips, and practical local tips. Keep answers concise, warm, and conversational. If you don't have specific local knowledge, be honest and suggest general categories of things to look for instead of inventing specific business names.`;

  try {
    const anthropic = new Anthropic({ apiKey });
    const response = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 512,
      system: systemPrompt,
      messages: messages.map((m) => ({ role: m.role, content: m.content })),
    });

    const reply = response.content
      .filter((block) => block.type === 'text')
      .map((block) => block.text)
      .join('\n');

    res.status(200).json({ reply });
  } catch (error) {
    console.error('Concierge chat error:', error);
    res.status(500).json({
      error: 'The concierge is having trouble responding right now. Please try again shortly.',
    });
  }
}
