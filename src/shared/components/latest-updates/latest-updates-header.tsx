import { useTranslations } from "next-intl";

export default function LatestUpdatesHeader() {
  const t = useTranslations('Index');
  return ( <div className="title">
  <h2>{t('latest-news')}</h2>
  <a href="" className="view-all" >{t('view-all')}</a>
</div>);
}