import { ISection } from '@/shared/models/page/section.model';
import { CareersService } from '@/shared/services/careers.service';
import { Fragment } from 'react';
import CareersListHeader from './careers_list_header';
import CareersList from './careers_list';

export default async function CareersWrapper(params: {
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

  const targets = await service.getCareerTargets(locale);

  return (
    <Fragment>
      <section id={section?.data?.code ?? ''} className="careers-list">
        <div className="container">
          <CareersListHeader
            locale={locale}
            pagesCount={0}
            currentTarget={target ? parseInt(`${target}`) : null}
            targets={targets}></CareersListHeader>
          <CareersList
            locale={locale}
            section={section}
            codes={codes}
            searchParams={searchParams}></CareersList>
        </div>
      </section>
    </Fragment>
  );
}
