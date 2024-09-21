import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export interface AdavatagesSectionProps {
  classname?: string;
}

export default function AdavatagesSection({}: AdavatagesSectionProps) {
  const t = useTranslations('adavatagesSection');
  const keys = ['handMade', 'quality', 'delivery'] as const;

  return (
    <section className="container pb-[52px]">
      <h2 className="mb-[52px] text-center">{t('title')} </h2>
      <ul className="flex  justify-between">
        {keys.map((key) => {
          return (
            <li
              key={key}
              className="flex flex-col w-[384px] gap-[20px] items-center"
            >
              <h3>{t(`${key}.title`)}</h3>
              <Image
                src={`/images/${key}.jpg`}
                alt={key}
                width={384}
                height={256}
              />
              <p className="font-regular text-xl leading-[23px] tracking-wider text-center">
                {t(`${key}.description`)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
