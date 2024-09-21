'use client';

import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export interface SiteNavProps {
  classname?: string;
  textColor: string;
  accentColor?: string;
}

export default function SiteNav({
  classname,
  textColor,
  accentColor,
}: SiteNavProps) {
  const t = useTranslations('MainNav');
  const keys = ['main', 'catalog', 'about', 'blog', 'contacts'] as const;

  const path = usePathname();

  return (
    <ul className={`flex gap-10 ${classname}`}>
      {keys.map((key) => {
        return (
          <li key={key}>
            <Link
              href={t(`${key}.href`)}
              className={clsx(
                'text-xl  font-medium leading-6 tracking-wide',
                path === t(`${key}.href`)
                  ? `${accentColor} underline`
                  : `${textColor}`,
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
