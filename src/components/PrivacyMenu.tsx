'use client';

import { Link, usePathname } from '@/i18n/routing';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import React from 'react';

export interface PrivacyMenuProps {
  classname?: string;
}

export default function PrivacyMenu({ classname }: PrivacyMenuProps) {
  const t = useTranslations('privacy');
  const keys = ['payment', 'refund', 'privacy'] as const;

  const path = usePathname();

  return (
    <ul className={`flex flex-col gap-6 ${classname ? classname : ''}`}>
      {keys.map((key) => {
        return (
          <li key={key}>
            <Link
              href={t(`${key}.href`)}
              className={clsx(
                'text-xl text-yellow font-medium leading-6 tracking-wide',
                path === t(`${key}.href`) ? 'underline' : '',
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
