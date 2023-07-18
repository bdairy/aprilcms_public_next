import { INewsItem } from '@/shared/models/news-item';
import { NewsService } from '@/shared/services/news.service';
import NewsItemCard from './news-item';
import { Fragment } from 'react';
import Paginator from '@/shared/pageinator';
import NoResults from '../../no_results';

export default async function AllNewsSearchResult(params: {
  pageSize: number;
  pageIndex: number;
  keyword: any;
  locale: string;
}) {
  const { pageSize, pageIndex, keyword, locale } = params;
  const newsService = new NewsService();

  const newsItems = await newsService.search(keyword, pageIndex, pageSize, locale);
  function Items(params: { currentItems: INewsItem[] }) {
    const { currentItems } = params;
    return (
      currentItems &&
      currentItems.map((item) => (
        <NewsItemCard key={item.id} item={item} locale={locale}></NewsItemCard>
      ))
    );
  }

  return (
    <Fragment>
      {!newsItems || (newsItems.value.length === 0 && <NoResults></NoResults> )}

      {newsItems && newsItems.value && (
        <Fragment>
          {newsItems.totalCount >= pageSize &&
            <Paginator
              locale={locale}
              currentPage={pageIndex}
              pagesCount={Math.ceil((newsItems?.totalCount ?? 0) / (pageSize ?? 0))}></Paginator>
          }
          <div className="cards">
            <Items currentItems={newsItems.value}></Items>
          </div>
          {newsItems.totalCount >= pageSize &&
            <Paginator
              locale={locale}
              currentPage={pageIndex}
              pagesCount={Math.ceil((newsItems?.totalCount ?? 0) / (pageSize ?? 0))}></Paginator>
          }
        </Fragment>
      )}
    </Fragment>
  );
}
