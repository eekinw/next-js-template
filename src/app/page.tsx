'use client';

import About from '@/components/About';
import Experience from '@/components/Experience';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Work from '@/components/Work';

export default function Main() {
  return (
    <>
      {/* navbar */}
      <Header />
      <div className="h-screen">
      {/* Hero/Home */}
        <Home />
      </div>
      <div className="h-screen">
        <About />
      </div>
      <div className="h-screen">
        <Experience />
      </div>
      <div className="h-screen">
        <Work />
      </div>
    </>
  );
}
