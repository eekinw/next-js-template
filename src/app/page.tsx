'use client';

import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Work from '@/components/Work';

export default function Main() {
  return (
      <div className="px-8 py-4">
        <Header />
        <div className="min-h-screen">
          <Home />
        </div>
        <div className="min-h-screen">
          <About />
        </div>
        <div className="min-h-screen">
          <Experience />
        </div>
        <div className="min-h-screen">
          <Work />
        </div>
      </div>
  );
}
