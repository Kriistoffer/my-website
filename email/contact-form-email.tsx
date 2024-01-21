import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  sender: string;
};

//TODO: Update this first styled version ASAP.
export default function ContactFormEmail({ message, sender }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from kristofferjohansson.se</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white blackBorder my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You've received the following message through kristofferjohansson.se:</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
