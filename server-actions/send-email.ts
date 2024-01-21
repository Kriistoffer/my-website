'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/library/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  const sender = FormData.get('senderEmail');
  const message = FormData.get('Message');

  if (!validateString(sender, 500)) {
    return {
      error: 'Invalid email.'
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message.'
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'kjohansson93@hotmail.se',
      subject: 'Message from contact form',
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        sender: sender as string
      })
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    };
  }
  return {
    data
  };
};
