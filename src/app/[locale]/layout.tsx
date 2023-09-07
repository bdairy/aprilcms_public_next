import '../globals.css';
import 'styles/main.scss';
import { notFound } from 'next/navigation';

import { NextIntlClientProvider } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
  title: {
    default: 'Al Ain Educational Investments',
    template: '%s - Al Ain Educational Investments',
  },
  description: 'Al Ain Educational Investments',
  alternates: {
    languages: {
      ar: '/ar',
      en: '/en',
    },
  },
  openGraph: {
    type: 'website',
    url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
    title: {
      default: 'Al Ain Educational Investments',
      template: '%s - Al Ain Educational Investments',
    },
    description: 'Al Ain Educational Investments ',
    siteName: 'Al Ain Educational Investments',
    images: [
      {
        url: '/images/logo-main.svg',
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  //const locale = useLocale();
  const { locale } = params;
  let messages;
  try {
    messages = (await import(`/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  if (params.locale !== locale) {
    notFound();
  }
  return (
    <html lang={locale}>

      <body dir={locale === 'en' ? 'ltr' : 'rtl'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
