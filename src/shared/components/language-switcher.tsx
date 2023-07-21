'use client';

import {useRouter, usePathname} from 'next-intl/client';

export default function LanguageSwitcher(params: { locale: string }) {

  let newLocal = 'en';
  let label = 'English';
  if (params.locale === 'en') {
    newLocal = 'ar';
    label = 'عربي';
  }
  const router = useRouter();
  const pathName = usePathname();

  const changeLocale = () => {



    return router.push(pathName,  { locale: newLocal });
  };

  // return <Link href={router} className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500" locale={newLocal}> {label} </Link>;
  return <button onClick={changeLocale} className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500" > {label}</button>;
}
