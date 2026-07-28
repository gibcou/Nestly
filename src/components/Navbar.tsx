import { Link } from 'react-router-dom';

interface NavbarProps {
  overlay?: boolean;
}

export default function Navbar({ overlay = false }: NavbarProps) {
  return (
    <div
      className={
        overlay
          ? 'absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-16 pt-6'
          : 'px-6 md:px-12 lg:px-16 pt-6'
      }
    >
      <nav
        className={
          overlay
            ? 'liquid-glass rounded-xl px-4 py-2 flex items-center justify-between'
            : 'bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex items-center justify-between'
        }
      >
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          Nestly
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/stays" className="hover:text-gray-300 transition-colors">
            Stays
          </Link>
          <Link to="/experiences" className="hover:text-gray-300 transition-colors">
            Experiences
          </Link>
          <Link to="/host" className="hover:text-gray-300 transition-colors">
            Host
          </Link>
          <Link to="/support" className="hover:text-gray-300 transition-colors">
            Support
          </Link>
        </div>

        <Link
          to="/stays"
          className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          Book Now
        </Link>
      </nav>
    </div>
  );
}
