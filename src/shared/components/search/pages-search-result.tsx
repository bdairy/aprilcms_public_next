import { IPage } from '@/shared/models/page/page.model';
import { PagesService } from '@/shared/services/pages.service';
import Link from 'next-intl/link';
import { Fragment } from 'react';
import NoResults from '../no_results';
import { useTranslations } from 'next-intl';

export default async function PagesSearchResult(params: {
  pageSize: number;
  pageIndex: number;
  keyword: any;
  locale: string;
}) {
  const {  keyword, locale } = params;
  const pagesService = new PagesService();
  const t = useTranslations('Search');
  const pages = await pagesService.search(keyword, locale);
  function Items(params: { currentItems: IPage[] }) {
    const { currentItems } = params;
    return (
      currentItems &&
      currentItems.map((item) => (
        <div className="item">
          <div className="icon"></div>
          <Link key={item.id} className='name' href={item.state} locale={locale}>
            {item.title}
          </Link>
        </div>
      ))
    );
  }

  return (
    <Fragment>
      <div className="pages-search-result">
        <div className="container">
          <div className="pages-title">{t('pages')}</div>
          {!pages || (pages.length === 0 && <NoResults></NoResults>)}

          {pages && pages && (
            <div className="pages-list">
              <Items currentItems={pages}></Items>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
}
