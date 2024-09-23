import { Link } from '@/i18n/routing';
import React, { ReactNode } from 'react';

export interface ButtonLinkProps {
  classname?: string;
  href: string;
  theme: 'outlined' | 'filled';
  children: ReactNode;
}

export default function ButtonLink({
  theme,
  href,
  classname,
  children,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-center min-w-[228px] px-5 py-[10px] rounded-[32px] border-[3px]  bg-brown text-yellow font-medium leading-[19px] text-[16px] ${theme === 'outlined' ? 'border-yellow' : 'border-transparent'} hover:bg-darkBrown  focus:bg-darkBrown active:font-semibold active:bg-darkBrown ${classname ? classname : ''}`}
    >
      {children}
    </Link>
  );
}
