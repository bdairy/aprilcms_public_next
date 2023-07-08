import '../globals.css';
import 'styles/main.scss';
import { useLocale } from 'next-intl';
import { Inter } from 'next/font/google';
import Nav from '@/shared/components/nav';
import { notFound } from 'next/navigation';
import { MenuService } from '@/shared/services/menu.service';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Al Ain Academy',
    template: '%s - Al Ain Academy',
  },
  description: 'Generated by create next app',
};

export  default  function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();
 // const service = new MenuService();

  if (params.locale !== locale) {
    notFound();
  }
  //const menu = await service.getMainMenu(locale);
  return (
    <html lang={locale}>
      <body className={inter.className} dir={locale === 'en' ? 'ltr' : 'rtl'}>

       {children}
      </body>
    </html>
  );
}
