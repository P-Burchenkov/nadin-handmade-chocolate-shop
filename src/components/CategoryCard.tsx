import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';

export type SubCategory = {
  title: string;
  href: string;
};

export type Category = {
  title: string;
  path: string;
  subCategories?: SubCategory[];
  image: string;
};

export interface CategoryCardProps {
  classname?: string;
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { title, image, path } = category;

  return (
    <li className="p-6 basis-[23.751%] h-[358px] border-[1px] border-green has-[:hover]:shadow-basic">
      <Link
        href={`/catalog/${path}`}
        className="flex flex-col items-center h-full justify-between"
      >
        <Image src={image} alt={title} width={236} height={264} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
}
