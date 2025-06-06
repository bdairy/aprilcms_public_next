import NoResults from '../no_results';
import { ICareersItem } from '../../models/careers/career-item';
import { ISection } from '../../models/page/section.model';
import Paginator from '../../pageinator';
import { CareersService } from '../../services/careers.service';
import VacancyCard from './vacancy_card';
import { Fragment } from 'react';

export default async function CareersList(params: {
  locale: string;
  section: ISection;
  codes: string[];
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { locale, section, searchParams, codes } = params;

  const keyword = searchParams['keyword'] ?? '';
  const pageSize = searchParams['pageSize'] ?? 10;
  const pageIndex = searchParams['pageIndex'] ?? 1;
  const target = searchParams['target'] ?? '';

  const service = new CareersService();

  const vacancyData = await service?.getCareers(
    parseInt(`${target}`) || null,
    parseInt(`${pageIndex}`),
    parseInt(`${pageSize}`),
    locale
  );

  return (
    <Fragment>
      {vacancyData && vacancyData?.value.length > 0 && (
        <div className="cards">
          {vacancyData!.value.map((data: ICareersItem) => (
            <VacancyCard key={data?.id} codes={codes} career={data}></VacancyCard>
          ))}
        </div>
      )}
      {!vacancyData ||
        (vacancyData?.value.length === 0 && (
          <div className="no-results">
            <NoResults />
          </div>
        ))}

      <div className="pagination-container">
        <Paginator
          locale={locale}
          currentPage={parseInt(`${pageIndex}`)}
          pagesCount={Math.ceil((vacancyData?.totalCount ?? 0) / (parseInt(`${pageSize}`) ?? 0))}
        />
      </div>
    </Fragment>
  );
}
