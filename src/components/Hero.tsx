import { useTranslations } from 'next-intl';
import React from 'react';
import ButtonLink from './ButtonLink';

export interface HeroProps {
  classname?: string;
}

export default function Hero({}: HeroProps) {
  const t = useTranslations('hero');

  return (
    <section className="container py-[52px] bg-hero bg-no-repeat bg-center bg-auto h-[804px] ">
      <div className="pl-[40px] pr-[596px] py-[220px]">
        <h1 className="mb-[56px] text-yellow leading-[38px] ">
          <span className="block">“Nadin handmade chocolate”</span>
          <span className="block">{t('title')}</span>
        </h1>
        <ButtonLink href="/catalog" theme="outlined">
          {t('button')}
        </ButtonLink>
      </div>
    </section>
  );
}
