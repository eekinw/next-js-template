'use client';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/components/Home';
import SideProjects from '@/components/SideProjects';
import { motion } from 'framer-motion';
import Tween from 'kute.js';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Main() {
  const [showBlob, setShowBlob] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBlob(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    const animateBlob = () => {
      const path1 = document.querySelector('#blob1');
      const path2 = document.querySelector('#blob2');

      if (path1 && path2) {
        Tween.fromTo(
          path1,
          { path: path1.getAttribute('d') },
          { path: path2.getAttribute('d') },
          { repeat: 999, duration: 2000, yoyo: true },
        ).start();
      }
    };

    animateBlob();
  }, [showBlob]);

  const [refHome, inViewHome] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refExperience, inViewExperience] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refSideProjects, inViewSideProjects] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [refContact, inViewContact] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <Header />
      <main className="p-4 md:p-8">
        <section className="py-10 grid content-center min-h-screen">
          <motion.div
            ref={refHome}
            initial="hidden"
            animate={inViewHome ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
          {showBlob && (
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="900"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1,
              }}
            >
              <g transform="translate(454.8959017910475 267.17504222145055)">
                <path
                  id="blob1"
                  d="M139.6 -156.7C178.5 -133.7 206 -87.4 203 -44.6C200.1 -1.8 166.7 37.6 144.9 91.5C123.1 145.3 112.9 213.6 78.5 234.1C44.1 254.7 -14.4 227.4 -62.4 198.3C-110.3 169.1 -147.8 138.1 -175.9 97.6C-204 57.2 -222.6 7.3 -207.8 -29.7C-193 -66.7 -144.7 -90.8 -104.5 -113.5C-64.3 -136.3 -32.1 -157.6 9.1 -168.5C50.4 -179.3 100.7 -179.7 139.6 -156.7"
                  fill="#d4af37"
                ></path>
                <g
                  transform="translate(431.46791226494184 321.9612858009025)"
                  className="invisible"
                >
                  <path
                    id="blob2"
                    d="M102 -131.1C139.8 -89.9 183.1 -64.9 210.4 -20.8C237.6 23.4 248.7 86.7 221.7 122.8C194.6 158.9 129.5 167.8 74 176.1C18.6 184.5 -27.1 192.3 -68.2 180.4C-109.2 168.4 -145.5 136.7 -170.3 96.8C-195.1 57 -208.3 9 -194.7 -28.5C-181.1 -65.9 -140.7 -92.7 -103.8 -134C-66.8 -175.3 -33.4 -231.2 -0.6 -230.4C32.1 -229.6 64.3 -172.3 102 -131.1"
                    fill="#d4af37"
                  ></path>
                </g>
              </g>
            </svg>
          )}
        </section>

        <section className="py-10 grid content-center min-h-screen">
          <motion.div
            ref={refAbout}
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
        </section>

        <section className="py-10 grid content-center min-h-screen">
          <motion.div
            ref={refExperience}
            initial="hidden"
            animate={inViewExperience ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Experience />
          </motion.div>
        </section>

        <section className="py-10 grid content-center min-h-screen">
          <motion.div
            ref={refSideProjects}
            initial="hidden"
            animate={inViewSideProjects ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <SideProjects />
          </motion.div>
        </section>

        <section className="py-10 grid content-center min-h-screen">
          <motion.div
            ref={refContact}
            initial="hidden"
            animate={inViewContact ? 'visible' : 'hidden'}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}