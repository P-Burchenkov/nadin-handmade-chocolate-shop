import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Raleway, Allison } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

// If loading a variable font, you don't need to specify the font weight
const raleWay = Raleway({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-raleway',
});

const allison = Allison({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-allison',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface RootLayoutProps {
  params: {
    locale: string;
  };
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${raleWay.variable} ${allison.variable}`}>
      <body className={`font-raleway bg-yellow flex flex-col min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
