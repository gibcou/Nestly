import { useState } from 'react';
import { Loader2, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import type { Listing } from '../data/listings';

interface ConciergeChatProps {
  listing: Listing;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ConciergeChat({ listing }: ConciergeChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages,
          listing: {
            title: listing.title,
            location: listing.location,
            description: listing.description,
            amenities: listing.amenities,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? 'Something went wrong');
      }

      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Sorry, I'm having trouble responding right now. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
        aria-label="Open AI concierge"
      >
        <MessageCircle size={22} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-30 w-[calc(100vw-3rem)] max-w-sm bg-black border border-white/10 rounded-2xl shadow-lg flex flex-col h-[28rem]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles size={16} />
          <div>
            <p className="text-sm font-medium leading-tight">AI Concierge</p>
            <p className="text-xs text-gray-400 leading-tight">{listing.title}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close AI concierge"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
        {messages.length === 0 && (
          <p className="text-sm text-gray-400">
            Ask me for restaurant picks, activities, or itinerary ideas near {listing.location}.
          </p>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-sm rounded-2xl px-3 py-2 max-w-[85%] ${
              message.role === 'user'
                ? 'bg-white text-black ml-auto'
                : 'bg-white/10 text-white'
            }`}
          >
            {message.content}
          </div>
        ))}
        {loading && (
          <div className="bg-white/10 text-white text-sm rounded-2xl px-3 py-2 max-w-[85%] flex items-center gap-2">
            <Loader2 size={14} className="animate-spin" />
            Thinking...
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask the concierge..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:border-white/30"
        />
        <button
          type="button"
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="bg-white text-black rounded-lg p-2 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
