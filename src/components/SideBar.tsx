import React from 'react';
import { catgories } from '@/data/categoriesData';
import { Link } from '@/i18n/routing';

export interface SideBarProps {
  classname?: string;
}

export default function SideBar({}: SideBarProps) {
  return (
    <aside className="pt-20 pb-5 pr-5 flex flex-col gap-5 min-w-[250px]">
      {catgories.map((category) => {
        const { title, path } = category;
        return (
          <Link key={title} href={path}>
            {title}
          </Link>
        );
      })}
    </aside>
  );
}
