
import AllNewsHeader from './all-news-header';
import AllNewsSearchResult from './all-news-search-result';

export default function AllNews(params: {
  locale: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { locale, searchParams } = params;


  const keyword = searchParams['keyword'] ?? '';
  const pageSize = searchParams['pageSize'] ?? 10;
  const pageIndex = searchParams['pageIndex'] ?? 1;

  return (
    <div className="all-news">
      <div className="container">
        <AllNewsHeader locale={locale}></AllNewsHeader>
        <AllNewsSearchResult
          locale={locale}
          keyword={keyword}
          pageIndex={parseInt(`${pageIndex}`)}
          pageSize={parseInt(`${pageSize}`)}></AllNewsSearchResult>
      </div>
    </div>
  );
}
