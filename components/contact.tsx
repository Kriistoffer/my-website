'use client';

import React from 'react';
import { useSectionInView } from '@/library/custom-hooks';
import Heading from './heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/server-actions/send-email';
import SubmitButton from '@/components/submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <Heading heading={'Contact me'} />
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:kjohansson93@hotmail.se">
          kjohansson93@hotmail.se
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-6 flex flex-col dark:text-black"
        action={async (FormData) => {
          const { error } = await sendEmail(FormData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success('Email sent successfully!');
        }}
      >
        <input
          type="email"
          required
          maxLength={500}
          name="senderEmail"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg blackBorder dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <textarea
          required
          maxLength={5000}
          name="Message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg blackBorder p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}
