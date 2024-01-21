'use client';

import React from 'react';
import Heading from '@/components/heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/library/custom-hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className="max-w-[45rem] mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      id="about"
      ref={ref}
    >
      <Heading heading={'About me'} />
      <p className="mb-3">
        At university I begun studying civil engineering in physics, but shortly found myself more and more interested in programming and developing. The
        underlying problem solving found in both physics and programming is what's driving me forward and keeping me interested, and it didn't take my long to
        make the decision to change my study path. I landed myself an internship at Nexer MyTeam as a fullstack developer on an in-house project that's
        currently in use in our Gothenburg and Alingsås offices. Before finishing my internship I was offered a full-time position at Nexer MyTeam -- where I'm
        still working to this day.
      </p>
      <p>
        When I'm not coding I do love spending a lot of time with my girlfriend and our dog, as we train and compete a lot. I love watching movies, tv shows,
        listening to music, and occasionally playing some video games.
      </p>
    </motion.section>
  );
}
