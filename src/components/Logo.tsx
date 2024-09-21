import Link from 'next/link';
import React from 'react';

export interface LogoProps {
  classname?: string;
}

export default function Logo({ classname }: LogoProps) {
  return (
    <Link
      href="/"
      className={`block font-allison text-[60px] leading-[76px] tracking-wider text-green ${classname} `}
    >
      Nadin
    </Link>
  );
}
