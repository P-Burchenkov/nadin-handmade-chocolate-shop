import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

import { catgories } from '@/data/categoriesData';
import CategoryCard from '@/components/CategoryCard';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export interface CategoryPageProps {
  params: { locale: string };
}

export default function CategoryPage({
  params: { locale },
}: CategoryPageProps) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('catalogPage');

  return (
    <section className="container pb-13">
      <h2 className="text-center mb-13">{t('title')}</h2>
      <ul className="flex gap-5 flex-wrap">
        {catgories.map((category) => {
          return <CategoryCard key={category.title} category={category} />;
        })}
      </ul>
    </section>
  );
}
