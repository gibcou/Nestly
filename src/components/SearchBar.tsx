import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  return (
    <div className="px-6 md:px-12 lg:px-16 relative z-20 -mt-8 md:-mt-12">
      <div className="bg-white text-black rounded-2xl shadow-2xl px-4 py-4 md:px-6 md:py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:divide-x md:divide-gray-200">
        <div className="flex items-center gap-3 md:pr-6 flex-1">
          <MapPin size={18} className="text-gray-500 shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">
              Location
            </span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="text-sm font-medium outline-none placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 md:px-6 flex-1">
          <Calendar size={18} className="text-gray-500 shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">
              Check-in
            </span>
            <input
              type="text"
              placeholder="Add date"
              className="text-sm font-medium outline-none placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 md:px-6 flex-1">
          <Calendar size={18} className="text-gray-500 shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">
              Check-out
            </span>
            <input
              type="text"
              placeholder="Add date"
              className="text-sm font-medium outline-none placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 md:px-6 flex-1">
          <Users size={18} className="text-gray-500 shrink-0" />
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">Guests</span>
            <input
              type="text"
              placeholder="Add guests"
              className="text-sm font-medium outline-none placeholder:text-gray-400 placeholder:font-normal"
            />
          </div>
        </div>

        <Link
          to="/stays"
          className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors md:ml-6"
        >
          <Search size={16} />
          Search
        </Link>
      </div>
    </div>
  );
}
