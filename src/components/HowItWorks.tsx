import { Search, CalendarCheck, Key } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search',
    description:
      'Browse thousands of handpicked homes, cabins, and villas in destinations around the world.',
  },
  {
    icon: CalendarCheck,
    title: 'Book',
    description:
      'Pick your dates, compare prices, and reserve your stay in just a few clicks.',
  },
  {
    icon: Key,
    title: 'Stay',
    description:
      'Check in with ease and enjoy a home away from home, wherever you travel.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-black px-6 md:px-12 lg:px-16 py-16">
      <div className="mb-10 text-center">
        <h2
          className="text-3xl md:text-4xl font-normal mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          How it works
        </h2>
        <p className="text-gray-300">Booking your next stay is simple.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
              <step.icon size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-medium mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300 max-w-xs">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
