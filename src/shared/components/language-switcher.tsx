'use client';

import Link from "next-intl/link";

export default function LanguageSwitcher(params: { locale: string }) {

  let newLocal = 'en';
  let label = 'English';
  if (params.locale === 'en') {
    newLocal = 'ar';
    label = 'عربي';
  }


  return <Link href="/" className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500" locale={newLocal}> {label} </Link>
}