import Link from 'next/link';
import React from 'react';
import { Allison } from 'next/font/google';

const allison = Allison({
  weight: '400',
  subsets: ['latin'],
});

export interface LogoProps {
  classname?: string;
}

export default function Logo({}: LogoProps) {
  return (
    <Link
      href="/"
      className={`${allison.className} text-[60px] leading-[76px] tracking-wide text-green`}
    >
      Nadin
    </Link>
  );
}
