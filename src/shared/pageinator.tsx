'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import ReactPaginate from 'react-paginate';

export default function Paginator(params: {
  locale: string;
  pagesCount: number;
  currentPage: number;
}) {
  const { locale, pagesCount, currentPage } = params;
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();


  const handlePageClick = (params: { selected: any }) => {
    console.log('handing');
    const { selected } = params;
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.delete('pageIndex');
    current.set('pageIndex', selected + 1);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    route.push(pathName + `${query}`);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pagesCount}
      previousAriaLabel=">"
      nextAriaLabel=">"
      prevRel={'previous'}
      nextRel={'next'}
      nextLabel={'>'}
      previousLabel={'<'}
      selectedPageRel={'Current'}
      className="paginator"
      activeClassName="current"
      previousClassName="hidden"
      nextClassName="hidden"

      forcePage={currentPage ? currentPage - 1 : 0}
      renderOnZeroPageCount={null}
    />
  );
}
