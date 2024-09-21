import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export interface AboutSectionProps {
  classname?: string;
}

export default function AboutSection({}: AboutSectionProps) {
  const t = useTranslations('aboutSection');

  return (
    <section className="container pb-[52px]">
      <h2 className="text-center mb-[52px]">
        {t('title')}
        <span className=" font-allison text-[48px] leading-[1px] tracking-wider text-green font-regular ml-2">
          Nadin handmade chocolate
        </span>
      </h2>
      <Image
        src="/images/about.jpg"
        alt=""
        width={1200}
        height={700}
        className="mb-[52px]"
      />
      <p className="mb-3 italic font-regular text-xl leading-[23px] tracking-wider">
        {t('description.paragraf-1')}
      </p>
      <p className="mb-3 italic font-regular text-xl leading-[23px] tracking-wider">
        {t('description.paragraf-2')}
      </p>
      <p className="mb-3 italic font-regular text-xl leading-[23px] tracking-wider">
        {t('description.paragraf-3')}
      </p>
      <p className="text-right  font-medium text-xl leading-[23px] tracking-wider">
        {t('caption')}
        <span className=" font-allison text-[36px] leading-[1px] tracking-wider text-green font-regular ml-2">
          Nadin handmade chocolate
        </span>
      </p>
    </section>
  );
}
