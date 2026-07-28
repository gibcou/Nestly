import { Camera, MessageCircle, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Careers', to: '/careers' },
      { label: 'Press', to: '/press' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'Help Center', to: '/help' },
      { label: 'Safety', to: '/safety' },
      { label: 'Cancellation Options', to: '/cancellation-options' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Sitemap', to: '/sitemap' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-12 lg:px-16 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-2xl font-semibold tracking-tight mb-2 block">
            Nestly
          </Link>
          <p className="text-sm text-gray-400">
            Handpicked short-term rentals in the world's most beautiful
            places.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h4 className="text-sm font-medium mb-3">{col.heading}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Nestly. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Camera size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Share2 size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
