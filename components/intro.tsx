'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import portraitImg from '@/public/portrait.png';
import { useSectionInView } from '@/library/custom-hooks';
import { useActiveSectionContext } from '@/context/active-context-section';
import { returnCurrentAge } from '@/library/utils';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[150rem]" id="home" ref={ref}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'tween', duration: 0.25 }}>
            <Image
              src={portraitImg}
              alt="Portrait"
              quality="90"
              priority={true}
              className="h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          {/* <span className="absolute bottom-[-1rem] right-[-1.2rem] text-3xl text-red-500">&lt;/&gt;</span> */}
        </div>
      </div>

      <motion.h1 className="mt-6 mb-12 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
        <span className="font-bold">Hello, my name is Kristoffer. </span>
        <span>
          I'm {`${returnCurrentAge()}`} years old, I live in Ytterby, and I am currently employed as a developer at{' '}
          <span className="font-bold underline">Nexer MyTeam</span>. While I primarily do <span className="italic">frontend work</span>, I do have some
          experience with backend as well.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition px-7 py-3 flex items-center gap-2 rounded-full"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 outline-none cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition flex items-center gap-2 rounded-full blackBorder dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full blackBorder focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 text-[1.35rem] flex items-center gap-2 rounded-full blackBorder focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
