import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getListingBySlug } from '../data/listings';

export default function ListingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const listing = slug ? getListingBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(listing?.images[0]);

  if (!listing) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-medium mb-3">Listing not found</h1>
          <p className="text-gray-400 mb-6">
            We couldn't find the stay you're looking for.
          </p>
          <Link
            to="/"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img
            src={activeImage ?? listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-6 md:px-12 lg:px-16 pt-4 max-w-4xl">
          <div className="grid grid-cols-4 gap-2">
            {listing.images.map((photo, index) => (
              <button
                key={photo}
                type="button"
                onClick={() => setActiveImage(photo)}
                className={`aspect-[4/3] overflow-hidden rounded-lg ${
                  activeImage === photo
                    ? 'ring-2 ring-white'
                    : 'ring-1 ring-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={photo}
                  alt={`${listing.title} photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-16 py-10 max-w-4xl">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h1
              className="text-3xl md:text-4xl font-normal"
              style={{ letterSpacing: '-0.02em' }}
            >
              {listing.title}
            </h1>
            <div className="flex items-center gap-1 text-lg shrink-0">
              <Star size={18} className="fill-white text-white" />
              {listing.rating}
            </div>
          </div>

          <div className="flex items-center gap-1 text-gray-400 mb-6">
            <MapPin size={16} />
            {listing.location}
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            {listing.description}
          </p>

          <div className="mb-8">
            <h2 className="text-lg font-medium mb-3">Amenities</h2>
            <div className="flex flex-wrap gap-2">
              {listing.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-300"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <p>
              <span className="text-2xl font-semibold">${listing.price}</span>
              <span className="text-gray-400"> / night</span>
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
