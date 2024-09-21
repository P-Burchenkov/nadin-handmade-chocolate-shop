import AboutSection from '@/components/AboutSection';
import AdavatagesSection from '@/components/AdavatagesSection';
import Hero from '@/components/Hero';
import PopularSection from '@/components/PopularSection';

export default async function Home() {
  return (
    <>
      <Hero />
      <PopularSection />
      <AboutSection />
      <AdavatagesSection />
    </>
  );
}
