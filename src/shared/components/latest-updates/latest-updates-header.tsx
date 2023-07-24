import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LatestUpdatesHeader() {
  const t = useTranslations('Index');
  return ( <div className="title">
  <h2>{t('latest-news')}</h2>
    <Link href={'/latest_updates'} className="view-all" >{t('view-all')}</Link>
</div>);
}