import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import rmtdevImg from '@/public/rmtdev.png';
import kjImg from '@/public/kristofferjohansson-project-preview.png';
import nmImg from '@/public/nexermeet-preview.png';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

//TODO: Find more suitable icons - possibly update the texts a bit.
export const experiencesData = [
  {
    title: 'Physics, civil engineering',
    location: 'Chalmers Tekniska Högskola, Gothenburg',
    description: 'I begun my civil engineering studies within physics, where my new-found interest in programming begun.',
    icon: React.createElement(LuGraduationCap),
    date: '2018'
  },
  {
    title: 'Internship at Nexer MyTeam',
    location: 'Gothenburg',
    description:
      'I did two internship periods at Nexer MyTeam as I was working as a full-stack developer on their internal project called NexerMeet, which later landed me a full-time job.',
    icon: React.createElement(CgWorkAlt),
    date: '2021-2022'
  },
  {
    title: 'Full-stack developer',
    location: 'Gothenburg',
    description:
      "I'm now a full-stack developer working at Nexer MyTeam. While I still primarily do frontend work, there are still some work that requires me to do backend as well.",
    icon: React.createElement(FaReact),
    date: '2022 - present'
  }
] as const;

//TODO: Replace current placeholder image with actual project images.
export const projectsData = [
  {
    title: 'kristofferjohansson.se',
    description: 'My current personal website - which you find yourself on right now.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer-motion', 'React-email'],
    imageUrl: kjImg
  },
  {
    title: 'NexerMeet',
    description: 'An internship project at Nexer where I worked as a fullstack developer on an interactive map of our offices in Gothenburg and Alingsås.',
    tags: ['React', 'C#', 'SQL', 'Azure DevOps'],
    imageUrl: nmImg
  },
  {
    title: 'SKF Super-precision manager',
    description: 'This was my first and primary project at Nexer MyTeam, where I was the sole frontend developer.',
    tags: ['React', 'Next.js', 'SQL', 'AWS', 'CircleCI'],
    imageUrl: rmtdevImg
  },
  {
    title: 'SKF OneWind',
    description: 'This fullstack project included a lot of exciting techniques varying from search-engines to event sourcing.',
    tags: ['React', 'TypeScript', 'Vue', 'Node.js', 'Tailwind', 'AWS', 'CircleCI'],
    imageUrl: rmtdevImg
  }
] as const;

// TODO: Randomize the order of the skills in the future
// TODO: Consider adding hover effect.
export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'AWS',
  'Azure DevOps',
  'Redux',
  'SQL',
  'Framer Motion',
  'CircleCI',
  'Vue'
];
