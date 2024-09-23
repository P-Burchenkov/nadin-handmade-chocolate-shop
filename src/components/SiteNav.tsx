'use client';

import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export interface SiteNavProps {
  classname?: string;
  navType: 'header' | 'footer';
}

export default function SiteNav({ navType }: SiteNavProps) {
  const t = useTranslations('MainNav');
  const keys = ['main', 'catalog', 'about', 'blog', 'contacts'] as const;

  const path = usePathname();

  return (
    <ul
      className={`flex ${navType === 'header' ? 'gap-10' : 'gap-6 flex-col'} `}
    >
      {keys.map((key) => {
        return (
          <li key={key}>
            <Link
              href={t(`${key}.href`)}
              className={clsx(
                `${navType === 'header' ? 'text-xl' : 'text-lg text-yellow'} font-medium leading-6 tracking-wide`,
                path === t(`${key}.href`)
                  ? `${navType === 'header' && 'text-green'} underline`
                  : ``,
              )}
            >
              {t(`${key}.title`)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
