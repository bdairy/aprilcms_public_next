'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BreadCrumb(params: {
  codes: string[];
  locale: string;
  routeNames: string[];
}) {
  const { codes, locale, routeNames } = params;
  const t = useTranslations('Index');
  const pathName = usePathname();
  return (
    <div className="bread-crumb">
      <div className="links-wrapper container">
        <Link className="link" href={'/'} locale={locale}>
          {t('home')}
        </Link>

        <span className="chev"></span>

        <Link className="link" locale={locale} href={`/${codes.join('/')}`}>
          {t(routeNames[0])}
        </Link>
        <span className="chev"></span>
        <Link className="link active" locale={locale} href={pathName}>
          {routeNames[1]}
        </Link>
      </div>
    </div>
  );
}
