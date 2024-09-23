import { useTranslations } from 'next-intl';
import React from 'react';
import ProductCard from './ProductCard';

import { Product } from './ProductCard';

export interface PopularSectionProps {
  classname?: string;
}

const products: Product[] = [
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
  {
    title: 'Набір "Серце"',
    description:
      'Набір цукерок з бельгійського шоколаду з додаванням сублімованої малини',
    price: '1200 грн.',
    image: '/images/product.jpg',
  },
];

export default function PopularSection({}: PopularSectionProps) {
  const t = useTranslations('popular');

  return (
    <section className="container py-13">
      <h2 className="mb-13 text-2xl leading-[28px] font-semibold text-grey text-center">
        {t('title')}
      </h2>
      <ul className="flex flex-wrap gap-5 gap-y-6  ">
        {products.map((product) => {
          return <ProductCard key={product.title} product={product} />;
        })}
      </ul>
    </section>
  );
}
