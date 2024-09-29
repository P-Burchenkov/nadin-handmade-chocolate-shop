import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { Product } from './ProductCard';

export type SubCategory = {
  title: string;
  path: string;
  image: string;
  products: Product[];
};

export type Category = {
  title: string;
  path: string;
  subCategories?: SubCategory[];
  image: string;
  products?: Product[];
};

export interface CategoryCardProps {
  classname?: string;
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const { title, image, path } = category;

  return (
    <li className="p-6 w-[284px] h-[358px] border-[1px] border-green has-[:hover]:shadow-basic">
      <Link
        href={path}
        className="flex flex-col items-center h-full justify-between"
      >
        <Image src={image} alt={title} width={236} height={264} />
        <h3>{title}</h3>
      </Link>
    </li>
  );
}
