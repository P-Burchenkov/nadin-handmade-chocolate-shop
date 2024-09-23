import { useTranslations } from 'next-intl';
import React from 'react';
import Slider from './Slider';
import { Review } from './ReviewCard';

export interface CustomerReviewsProps {
  classname?: string;
}

const reviews: Review[] = [
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 5,
  },
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 4,
  },
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 3,
  },
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 5,
  },
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 5,
  },
  {
    name: 'Влада',
    comment:
      'Цей крафтовий шоколад – це не просто солодощі, це маленький витвір мистецтва. Відчувається, що він виготовлений з душею, і це робить його особливим. Рекомендую всім, хто цінує якість, натуральність і справжній смак!',
    rating: 5,
  },
];

export default function CustomerReviews({}: CustomerReviewsProps) {
  const t = useTranslations('reviewsSection');

  return (
    <section className="container pb-13 px-0">
      <h2 className="mb-13 text-center">{t('title')}</h2>
      <Slider reviews={reviews} />
    </section>
  );
}
