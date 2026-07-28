import { Camera, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { listings } from '../data/listings';

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
          <Link
            key={listing.slug}
            to={`/listings/${listing.slug}`}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors block"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 text-xs flex items-center gap-1">
                <Camera size={12} />
                {listing.images.length} photos
              </span>
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
          </Link>
        ))}
      </div>
    </section>
  );
}
