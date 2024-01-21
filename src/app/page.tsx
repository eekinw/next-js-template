'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/components/Home';
import SideProjects from '@/components/SideProjects';

export default function Main() {
  return (
    <main className="px-10 py-4">
      <Header />
      <section className="grid items-center content-center min-h-screen">
        <Home />
      </section>
      <section className="grid items-center content-center min-h-screen">
        <About />
      </section>
      <section className="grid items-center content-center min-h-screen">
        <Experience />
      </section>
      <section className="grid items-center content-center min-h-screen">
        <SideProjects />
      </section>
      <section className="grid items-center content-center min-h-screen">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
