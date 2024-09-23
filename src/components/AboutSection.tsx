import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export interface AboutSectionProps {
  classname?: string;
}

export default function AboutSection({}: AboutSectionProps) {
  const t = useTranslations('aboutSection');

  return (
    <section className="container pb-13">
      <h2 className="text-center mb-13">
        {t('title')}
        <span className=" font-allison font-[400] text-[48px] leading-[1px] text-green ml-2">
          Nadin handmade chocolate
        </span>
      </h2>
      <Image
        src="/images/about.jpg"
        alt=""
        width={1200}
        height={700}
        className="mb-13"
      />
      <p className="mb-3 italic leading-[23px]">
        {t('description.paragraf-1')}
      </p>
      <p className="mb-3 italic leading-[23px]">
        {t('description.paragraf-2')}
      </p>
      <p className="mb-3 italic leading-[23px]">
        {t('description.paragraf-3')}
      </p>
      <p className="text-right  font-medium leading-[23px]">
        {t('caption')}
        <span className=" font-allison text-[36px] leading-[1px]  text-green ml-2">
          Nadin handmade chocolate
        </span>
      </p>
    </section>
  );
}
