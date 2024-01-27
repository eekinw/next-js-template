import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BlobAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const blobVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={blobVariants}
        transition={{ duration: 0.5 }}
      >
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="#010102"></rect>
          <g transform="translate(454.8959017910475 267.17504222145055)">
            <path
              d="M139.6 -156.7C178.5 -133.7 206 -87.4 203 -44.6C200.1 -1.8 166.7 37.6 144.9 91.5C123.1 145.3 112.9 213.6 78.5 234.1C44.1 254.7 -14.4 227.4 -62.4 198.3C-110.3 169.1 -147.8 138.1 -175.9 97.6C-204 57.2 -222.6 7.3 -207.8 -29.7C-193 -66.7 -144.7 -90.8 -104.5 -113.5C-64.3 -136.3 -32.1 -157.6 9.1 -168.5C50.4 -179.3 100.7 -179.7 139.6 -156.7"
              fill="none"
              stroke="#d4af37"
              strokeWidth="6"
            ></path>
          </g>
        </svg>
      </motion.svg>
    </div>
  );
};

export default BlobAnimation;