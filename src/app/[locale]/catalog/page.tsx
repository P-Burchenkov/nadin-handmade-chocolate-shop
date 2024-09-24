import { useTranslations } from 'next-intl';

import { catgories } from '@/data/categoriesData';
import CategoryCard from '@/components/CategoryCard';

export default function Page() {
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
