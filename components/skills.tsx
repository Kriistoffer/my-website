'use client';

import React from 'react';
import Heading from './heading';
import { skillsData } from '@/library/data';
import { useSectionInView } from '@/library/custom-hooks';
import { motion } from 'framer-motion';
import { shuffleArray } from '@/library/utils';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index
      }
    })
  };
  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <Heading heading={'My skills'} />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {shuffleArray(skillsData).map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white blackBorder rounded-full py-3 px-5 dark:bg-white/10 dark:border dark:border-white/5 dark:text-white/80"
            variants={fadeInAnimation}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{
              once: true
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
