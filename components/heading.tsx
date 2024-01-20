import React from 'react';

export default function Heading({ heading }: { heading: String }) {
  return <h2 className="text-3xl mb-10 font-medium text-center capitalize">{heading}</h2>;
}
