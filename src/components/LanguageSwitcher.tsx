'use client';

import React, { ButtonHTMLAttributes } from 'react';

import En from '../../public/icons/en.svg';
import Ua from '../../public/icons/ua.svg';
import { usePathname, useRouter } from 'next/navigation';

export interface LangugeSwitcherProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
  locale: string;
}

export default function LangugeSwitcher({ locale }: LangugeSwitcherProps) {
  const router = useRouter();

  const pathName = usePathname();
  const arrayPath = pathName.split('/');

  const changeLanguage = () => {
    if (locale === 'en') {
      arrayPath.splice(1, 1, 'ua');
      const newPath = arrayPath.join('/');
      router.replace(newPath);
    }
    if (locale === 'ua') {
      arrayPath.splice(1, 1, 'en');
      const newPath = arrayPath.join('/');
      router.replace(newPath);
    }
  };

  return (
    <button type="button" onClick={changeLanguage} className="group">
      {locale === 'en' && (
        <En
          width={40}
          height={40}
          className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow  group-focus:fill-darkBrown"
        />
      )}
      {locale === 'ua' && (
        <Ua
          width={40}
          height={40}
          className="fill-brown stroke-yellow stroke-[2px] group-hover:fill-darkBrown group-hover:stroke-darkYellow group-focus:stroke-darkYellow  group-focus:fill-darkBrown"
        />
      )}{' '}
    </button>
  );
}
