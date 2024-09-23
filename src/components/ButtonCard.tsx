'use client';

import { useTranslations } from 'next-intl';
import React, { ButtonHTMLAttributes } from 'react';

import Bag from '../../public/icons/bag.svg';

export interface ButtonCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?: string;
}

export default function ButtonCard({ className, ...rest }: ButtonCardProps) {
  const t = useTranslations('cardButton');

  return (
    <button
      {...rest}
      className={`group flex gap-3 justify-center items-center min-w-[108px] px-4 py-2 rounded-xl text-sm leading-4 font-medium  text-yellow   bg-brown hover:bg-darkBrown  focus:bg-darkBrown focus:font-semibold    active:bg-darkBrown ${className ? className : ''} disabled:cursor-not-allowed disabled:bg-lightBrown disabled:text-lightYellow`}
    >
      <span>{t('title')}</span>
      <Bag
        className="stroke-yellow fill-transparent stroke-[2px] group-focus:stroke-[4px]  "
        width={16}
        height={16}
      />
    </button>
  );
}
