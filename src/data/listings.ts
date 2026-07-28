export interface Listing {
  slug: string;
  image: string;
  images: string[];
  title: string;
  location: string;
  price: number;
  rating: number;
  description: string;
  amenities: string[];
}

export const listings: Listing[] = [
  {
    slug: 'modern-lakeside-villa',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Modern Lakeside Villa',
    location: 'Lake Como, Italy',
    price: 320,
    rating: 4.96,
    description:
      'Wake up to still water and mountain views in this architect-designed villa on the shores of Lake Como. Floor-to-ceiling windows, a private dock, and a sun-drenched terrace make this the perfect basecamp for a lakeside escape.',
    amenities: ['Private dock', 'Lake view', 'Fireplace', 'Full kitchen', 'Free parking'],
  },
  {
    slug: 'cozy-mountain-cabin',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 210,
    rating: 4.89,
    description:
      'A timber-framed retreat tucked into the pines just minutes from Aspen. Curl up by the wood-burning stove after a day on the slopes, or relax on the deck with a view of the surrounding peaks.',
    amenities: ['Wood stove', 'Mountain view', 'Hot tub', 'Ski storage', 'Wifi'],
  },
  {
    slug: 'sunlit-family-home',
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Sunlit Family Home',
    location: 'Austin, Texas',
    price: 175,
    rating: 4.8,
    description:
      'A bright, spacious home in a quiet Austin neighborhood, perfect for families and groups. Enjoy the backyard, an open-plan kitchen, and easy access to downtown.',
    amenities: ['Backyard', 'Washer/dryer', 'Free parking', 'Family friendly', 'Air conditioning'],
  },
  {
    slug: 'minimalist-city-loft',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Minimalist City Loft',
    location: 'Copenhagen, Denmark',
    price: 195,
    rating: 4.92,
    description:
      'A clean, Scandinavian-designed loft in the heart of Copenhagen. Walk to cafes, canals, and design shops from this light-filled, thoughtfully furnished space.',
    amenities: ['City center', 'Fast wifi', 'Workspace', 'Bike rental nearby', 'Elevator'],
  },
  {
    slug: 'private-pool-villa',
    image:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Private Pool Villa',
    location: 'Bali, Indonesia',
    price: 280,
    rating: 4.98,
    description:
      'Tropical living at its best — a private villa with its own pool, surrounded by lush gardens. Wind down with a sunset swim or a quiet evening on the open-air deck.',
    amenities: ['Private pool', 'Garden', 'Air conditioning', 'Daily cleaning', 'Breakfast included'],
  },
  {
    slug: 'bright-coastal-retreat',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1200&q=80&auto=format&fit=crop',
    ],
    title: 'Bright Coastal Retreat',
    location: 'Santorini, Greece',
    price: 260,
    rating: 4.91,
    description:
      'A whitewashed hideaway overlooking the Aegean Sea. Watch the famous Santorini sunset from your private terrace, steps from the caldera.',
    amenities: ['Sea view', 'Terrace', 'Free parking', 'Wifi', 'Air conditioning'],
  },
];

export function getListingBySlug(slug: string): Listing | undefined {
  return listings.find((listing) => listing.slug === slug);
}
