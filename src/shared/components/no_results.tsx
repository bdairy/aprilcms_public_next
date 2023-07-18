'use client';
import { useTranslations } from "next-intl";

export default function NoResults() {
  const t = useTranslations('Index');
  return (<div>{t('no_records')}</div>);
}