import { Link } from 'react-router-dom';
import SimplePage from '../components/SimplePage';

const groups = [
  {
    heading: 'Main',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Stays', to: '/stays' },
      { label: 'Experiences', to: '/experiences' },
      { label: 'Host', to: '/host' },
      { label: 'Support', to: '/support' },
    ],
  },
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
    ],
  },
];

export default function Sitemap() {
  return (
    <SimplePage title="Sitemap" subtitle="Every page on Nestly, in one place.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {groups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-white font-medium mb-2">{group.heading}</h3>
            <ul className="space-y-1">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SimplePage>
  );
}
