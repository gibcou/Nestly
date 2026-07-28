import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedListings from '../components/FeaturedListings';

export default function Stays() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="px-6 md:px-12 lg:px-16 mb-2">
          <h1
            className="text-3xl md:text-4xl font-normal mb-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            All Stays
          </h1>
          <p className="text-gray-300 max-w-2xl">
            Browse our full collection of handpicked homes, cabins, and villas
            around the world.
          </p>
        </div>
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
}
