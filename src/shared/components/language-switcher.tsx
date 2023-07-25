'use client';

import { useRouter, usePathname } from 'next-intl/client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher(params: { locale: string }) {
  let newLocal = 'en';
  let label = 'English';
  if (params.locale === 'en') {
    newLocal = 'ar';
    label = 'عربي';
  }
  const router = useRouter();
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

  const changeLocale = () => {
    return router.push(path.replaceAll('ar/', '') + `${query}`, { locale: newLocal });
  };

  // return <Link href={router} className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500" locale={newLocal}> {label} </Link>;
  return (
    <button
      onClick={changeLocale}
      className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500">
      {' '}
      {label}
    </button>
  );
}
