import React from 'react';

import Logo from './Logo';
import SiteNav from './SiteNav';
import Panel from './Panel';

export interface HeaderProps {
  classname?: string;
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  return (
    <header>
      <Panel locale={locale} />

      <div className="container flex justify-between items-center py-[22px]">
        <Logo />
        <nav>
          <SiteNav navType="header" />
        </nav>
        <a
          href="tel:+380671990913"
          className="block text-xl  font-medium leading-6 tracking-wide "
        >
          +38067-199-09-13
        </a>
      </div>
    </header>
  );
}
