'use client';

import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export default function LanguageSwitcher(params: { locale: string }) {
  const router = usePathname().replace('/ar/', '/');
  let newLocal = 'en';
  let label = 'English';
  if (params.locale === 'en') {
    newLocal = 'ar';
    label = 'عربي';
  }


  return <Link href={router} className="px-5 py-1  btn-outline primary border-greydark-500 text-greydark-500" locale={newLocal}> {label} </Link>
}