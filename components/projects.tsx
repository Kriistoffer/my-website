'use client';

import React from 'react';
import Heading from '@/components/heading';
import { projectsData } from '@/library/data';
import Project from '@/components/project';
import { useSectionInView } from '@/library/custom-hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <Heading heading={'My projects'} />

      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
