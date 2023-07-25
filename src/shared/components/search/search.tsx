import { useTranslations } from 'next-intl';
import AllNewsSearchResult from '../news/all-news/all-news-search-result';
import PagesSearchResult from './pages-search-result';
import SearchHeader from './search-header';

export default function SearchWebsite(params: {
  locale: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { locale, searchParams } = params;
  const t = useTranslations('Search');
  const keyword = searchParams['keyword'] ?? '';
  const pageSize = searchParams['pageSize'] ?? 10;
  const pageIndex = searchParams['pageIndex'] ?? 1;

  return (
    <div className="search-page">
      <div className="wrapper">
        <SearchHeader locale={locale}></SearchHeader>
        <PagesSearchResult
          locale={locale}
          keyword={keyword}
          pageIndex={parseInt(`${pageIndex}`)}
          pageSize={parseInt(`${pageSize}`)}></PagesSearchResult>
        <div className="all-news">
          <div className="container">
            <div className="title">
              <h2>{t('news')}</h2>
            </div>
            <AllNewsSearchResult
              locale={locale}
              keyword={keyword}
              pageIndex={parseInt(`${pageIndex}`)}
              pageSize={parseInt(`${pageSize}`)}></AllNewsSearchResult>
          </div>
        </div>
      </div>
    </div>
  );
}
