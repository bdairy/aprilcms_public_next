'use client';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname, useSearchParams } from 'next/navigation';
import path from 'path';
import { useEffect, useState } from 'react';

export default function BreadCrumb(params: {
  codes: string[];
  locale: string;
  routeNames: string[];
}) {
  const { codes, locale, routeNames } = params;
  const t = useTranslations('Index');
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [path, setPath] = useState(pathName);
  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const search = current.toString();
   // setPath((oldPath)=> {return oldPath.replaceAll('/ar/', '')})
    setQuery(search ? `?${search}` : '');
  }, [searchParams]);
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
        <Link className="link active" href={path.replaceAll('ar/', '') + `${query}`} locale={locale}>
          {routeNames[1]}
        </Link>
      </div>
    </div>
  );
}
