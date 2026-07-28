import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import FeaturedListings from '../components/FeaturedListings';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-black">
        <SearchBar />
        <FeaturedListings />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}
