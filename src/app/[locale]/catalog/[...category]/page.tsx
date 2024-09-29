import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import { catgories } from '@/data/categoriesData';
import CategoryCard, { Category } from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export interface CategoryPageProps {
  params: {
    category: string[];
    locale: string;
  };
}

export default function CategoryPage({
  params: { category, locale },
}: CategoryPageProps) {
  unstable_setRequestLocale(locale);

  const currentPath = `/catalog/${category.join('/')}`;

  const currentCategory = catgories.find((cat) => {
    return cat.path === `/catalog/${category[0]}`;
  });

  const { title, subCategories, products } = currentCategory as Category;

  const currentSubcategory = subCategories?.find((subCat) => {
    return subCat.path === currentPath;
  });

  return (
    <section className="flex-grow pb-13">
      <h2 className="text-center mb-13">{title}</h2>
      <ul className="flex gap-5 flex-wrap">
        {subCategories &&
          category.length === 1 &&
          subCategories.map((category) => {
            return <CategoryCard key={category.title} category={category} />;
          })}
        {products &&
          products.map((product) => {
            return <ProductCard key={product.title} product={product} />;
          })}
        {currentCategory &&
          category.length > 1 &&
          currentSubcategory?.products.map((product) => {
            return <ProductCard key={product.title} product={product} />;
          })}
      </ul>
    </section>
  );
}
