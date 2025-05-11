'use client';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname, useSearchParams } from 'next/navigation';
import path from 'path';
import { useEffect, useState } from 'react';


interface BreadcrumbProps {
  codes: string[];
  locale: string;
  routeNames: string[];
  queries?: string[]; // optional array of query strings (e.g., ['','?id=1','?ref=abc'])
}

export default function BreadCrumb({
  codes,
  locale,
  routeNames,
  queries = [],
}: BreadcrumbProps) {
  const t = useTranslations('Index');
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [finalQuery, setFinalQuery] = useState('');
  const [path, setPath] = useState(pathName);

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    const search = current.toString();
    setFinalQuery(search ? `?${search}` : '');
  }, [searchParams]);

  const breadcrumbs = codes.map((_, index) => {
    const baseHref = '/' + codes.slice(0, index + 1).join('/');
    const query = queries[index] || '';
    const fullHref = `${baseHref}${query}`;
    return {
      href: fullHref,
      name: routeNames[index] || '',
    };
  });

  return (
    <div className="bread-crumb">
      <div className="links-wrapper container">
        <Link className="link" href="/" locale={locale}>
          {t('home')}
        </Link>

        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="crumb">
            <span className="chev"></span>
            <Link
              className={`link ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
              href={index === breadcrumbs.length - 1 ? path + finalQuery : crumb.href}
              locale={locale}
            >
              {crumb.name}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
}

