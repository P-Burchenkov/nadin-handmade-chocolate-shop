import React from 'react';

import Instagram from '../../public/icons/instagram.svg';
import Facebook from '../../public/icons/facebook.svg';
import Heart from '../../public/icons/heart.svg';
import Bag from '../../public/icons/bag.svg';
import Login from '../../public/icons/login.svg';
import LangugeSwitcher from './LanguageSwitcher';

export interface PanelProps {
  classname?: string;
  locale: string;
}

export default function Panel({ locale }: PanelProps) {
  return (
    <div className=" py-[10px] bg-[#47231E]">
      <div className="container flex justify-between">
        <div className="flex gap-8 items-center">
          <LangugeSwitcher locale={locale} />
          <a href="#">
            <Instagram width={52} height={52} />
          </a>
          <a href="#">
            <Facebook width={52} height={52} />
          </a>
        </div>
        <div className="flex gap-8 items-center">
          <a href="#">
            <Heart width={40} height={40} />
          </a>
          <a href="#">
            <Bag
              width={40}
              height={40}
              className="fill-transparent stroke-yellow stroke-2"
            />
          </a>
          <a href="#">
            <Login width={40} height={40} />
          </a>
        </div>
      </div>
    </div>
  );
}
