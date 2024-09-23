import React from 'react';

import Heart from '../../public/icons/heart.svg';
import Bag from '../../public/icons/bag.svg';
import Login from '../../public/icons/login.svg';
import LangugeSwitcher from './LanguageSwitcher';
import SocialMedia from './SocialMedia';

export interface PanelProps {
  classname?: string;
  locale: string;
}

export default function Panel({ locale }: PanelProps) {
  return (
    <div className=" py-[10px] bg-brown">
      <div className="container flex justify-between">
        <div className="flex gap-8 items-center">
          <LangugeSwitcher locale={locale} />
          <SocialMedia />
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="group">
            <Heart
              width={40}
              height={40}
              className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow  group-focus:fill-darkBrown"
            />
          </a>
          <a href="#" className="group">
            <Bag
              width={40}
              height={40}
              className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow group-focus:fill-darkBrown"
            />
          </a>
          <a href="#" className="group">
            <Login
              width={40}
              height={40}
              className="fill-yellow group-hover:fill-darkYellow  group-focus:stroke-darkYellow group-focus:fill-darkBrown"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
