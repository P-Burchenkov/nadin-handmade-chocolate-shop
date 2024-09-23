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
    <section className="container pb-13 ">
      <h2 className="mb-13 text-center">{t('title')} </h2>
      <ul className="flex  justify-between">
        {keys.map((key) => {
          return (
            <li
              key={key}
              className="flex flex-col w-[384px] gap-5 items-center"
            >
              <h3>{t(`${key}.title`)}</h3>
              <Image
                src={`/images/${key}.jpg`}
                alt={key}
                width={384}
                height={256}
              />
              <p className="leading-[23px] text-center">
                {t(`${key}.description`)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
