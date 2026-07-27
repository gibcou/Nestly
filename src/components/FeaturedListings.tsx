import { MapPin, Star } from 'lucide-react';

interface Listing {
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
}

const listings: Listing[] = [
  {
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80&auto=format&fit=crop',
    title: 'Modern Lakeside Villa',
    location: 'Lake Como, Italy',
    price: 320,
    rating: 4.96,
  },
  {
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format&fit=crop',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    price: 210,
    rating: 4.89,
  },
  {
    image:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80&auto=format&fit=crop',
    title: 'Sunlit Family Home',
    location: 'Austin, Texas',
    price: 175,
    rating: 4.8,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop',
    title: 'Minimalist City Loft',
    location: 'Copenhagen, Denmark',
    price: 195,
    rating: 4.92,
  },
  {
    image:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80&auto=format&fit=crop',
    title: 'Private Pool Villa',
    location: 'Bali, Indonesia',
    price: 280,
    rating: 4.98,
  },
  {
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
    title: 'Bright Coastal Retreat',
    location: 'Santorini, Greece',
    price: 260,
    rating: 4.91,
  },
];

export default function FeaturedListings() {
  return (
    <section className="bg-black px-6 md:px-12 lg:px-16 pt-16 pb-8">
      <div className="mb-8">
        <h2
          className="text-3xl md:text-4xl font-normal mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          Featured Stays
        </h2>
        <p className="text-gray-300">
          Handpicked homes our guests love most.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.title}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-medium">{listing.title}</h3>
                <div className="flex items-center gap-1 text-sm shrink-0">
                  <Star size={14} className="fill-white text-white" />
                  {listing.rating}
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-400 mb-3">
                <MapPin size={14} />
                {listing.location}
              </div>
              <p className="text-sm">
                <span className="font-semibold">${listing.price}</span>
                <span className="text-gray-400"> / night</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
