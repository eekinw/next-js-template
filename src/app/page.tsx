'use client';

import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Work from '@/components/Work';

export default function Main() {
  return (
    <>
      <Header />
      <div className="h-screen bg-red-200">
        <Home />
      </div>
      <div className="h-screen bg-blue-200">
        <About />
      </div>
      <div className="h-screen bg-green-200">
        <Experience />
      </div>
      <div className="h-screen bg-yellow-200">
        <Work />
      </div>
    </>
  );
}
