import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

export default function AllNewsHeader(params: { locale: string }) {
  const t = useTranslations('News');
  return (
    <Fragment>
      <div className="title">
        <h2>{t('all-news')}</h2>
      </div>
      <div className="search-box">
        <div className="icon"></div>
        <input type="text"  placeholder={t('search-news')} />
      </div>
    </Fragment>
  );
}
