'use client';

import React from 'react';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';

export interface MainNavProps {
  classname?: string;
}

export default function MainNav({}: MainNavProps) {
  const t = useTranslations('MainNav');
  const keys = ['main', 'about', 'catalog', 'blog', 'contacts'] as const;

  const path = usePathname();

  return (
    <nav>
      <ul className="flex gap-10">
        {keys.map((key) => {
          return (
            <li key={key}>
              <Link
                href={t(`${key}.href`)}
                className={clsx(
                  'text-xl  font-medium leading-6 tracking-wide',
                  path === t(`${key}.href`)
                    ? 'text-green underline'
                    : 'text-grey',
                )}
              >
                {t(`${key}.title`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
