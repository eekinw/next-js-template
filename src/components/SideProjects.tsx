import NumberedList from "@/components/NumberedList";
import SideProjectCard from "@/components/SideProjectCard";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardTransition = {
     duration: 0.5,
     delay: 0.2, // Delay between each card appearance
  };

  return (
    <>
      <div className="mb-10" id="projects">
        <NumberedList number="03" title="My Side Projects" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={cardTransition}
        >
          <SideProjectCard
            name="Rewards App (Frontend)"
            description="Build a full-stack rewards application that provides a user-friendly interface for managing rewards and loyalty programs for data annotators."
            lang={['Typescript', 'Tailwind', 'NextJS']}
            href=""
          />
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={inView2 ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={{ ...cardTransition, delay: 0.4 }}
        >
          <SideProjectCard
            name="Rewards App (Backend)"
            description="The backend of the Rewards App, handling data storage, retrieval, and business logic for the rewards."
            lang={['JavaScript', 'Prisma ORM']}
            href=""
          />
        </motion.div>
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={inView3 ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={{ ...cardTransition, delay: 0.6 }}
        >
          <SideProjectCard
            name="Whack a Mole Clone"
            description="A fun and interactive game built during my self-taught journey, built with purely vanilla CSS and Javascript."
            lang={['HTML', 'CSS', 'JavaScript']}
            href=""
          />
        </motion.div>
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? 'visible' : 'hidden'}
          variants={cardVariants}
          transition={{ ...cardTransition, delay: 0.8 }}
        >
          <SideProjectCard
            name="Flappy Bird Clone"
            description="A recreation of the popular Flappy Bird game. Fly through obstacles and try to achieve the highest score!"
            lang={['HTML', 'CSS', 'JavaScript']}
            href=""
          />
        </motion.div>
      </div>
    </>
  );
};

export default Work;