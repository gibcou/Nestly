import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-normal mb-3">404</h1>
        <p className="text-gray-400 mb-6">
          This page doesn't exist. Let's get you back home.
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
