import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface SimplePageProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function SimplePage({ title, subtitle, children }: SimplePageProps) {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 md:px-12 lg:px-16 py-16 md:py-20">
        <div className="max-w-3xl">
          <h1
            className="text-3xl md:text-4xl font-normal mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-300 text-base md:text-lg mb-8">{subtitle}</p>
          )}
          <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
