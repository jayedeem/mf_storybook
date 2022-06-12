import React from "react";

export interface CTAProps {
  href: string;
  text: string;
}

export const CTA = ({ href, text }: CTAProps) => {
  return (
    <>
      <a href={href}>{text}</a>
    </>
  );
};
