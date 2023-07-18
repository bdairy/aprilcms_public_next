'use client';
import { useTranslations } from 'next-intl';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import { Fragment, useEffect, useState } from 'react';

export default function AllNewsHeader(params: { locale: string }) {
  const t = useTranslations('News');
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const route = useRouter();
  const [text, setText] = useState(searchParams.get('keyword') ?? '');
  const [debounced, setDebounced] = useState(searchParams.get('keyword') ?? '');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounced(text);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [text]);

  useEffect(() => {
    handleSearch(debounced);
  }, [debounced]);

  const handleSearch = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.delete('keyword');
    if (value && value.length > 0) {
      current.set('keyword', value);
      current.set('pageIndex', '1');
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    route.push(pathName + `${query}`, {scroll: false});
  };

  return (
    <Fragment>
      <div className="title">
        <h2>{t('all-news')}</h2>
      </div>
      <div className="search-box">
        <div className="icon"></div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('search-news')}
        />
      </div>
    </Fragment>
  );
}
