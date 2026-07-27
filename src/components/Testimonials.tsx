import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Booking with Nestly was effortless and the villa was even better than the photos. We will absolutely be back.',
    name: 'Amelia R.',
    location: 'Lisbon, Portugal',
  },
  {
    quote:
      'The cabin was cozy, clean, and exactly as described. Check-in was seamless from start to finish.',
    name: 'James T.',
    location: 'Banff, Canada',
  },
  {
    quote:
      "Best short-term rental experience we've had. Great communication and a genuinely beautiful home.",
    name: 'Sofia M.',
    location: 'Palermo, Italy',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black px-6 md:px-12 lg:px-16 py-16">
      <div className="mb-10 text-center">
        <h2
          className="text-3xl md:text-4xl font-normal mb-2"
          style={{ letterSpacing: '-0.02em' }}
        >
          What our guests say
        </h2>
        <p className="text-gray-300">
          Stories from travelers who found their home away from home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-white text-white" />
              ))}
            </div>
            <p className="text-gray-200 mb-6">&ldquo;{t.quote}&rdquo;</p>
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-gray-400">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
