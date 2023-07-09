import { IPage } from '@/shared/models/page/page.model';
import MainBanner from '../main-banner';
import { Fragment } from 'react';
import ContentComponent from './content-component';
import StatisticsComponent from '../statistics/statistics';

export default function PageSections(params: { page: IPage; locale: string; codes: string[] }) {
  const { locale, page, codes } = params;
  let sections: any[] = [];
  page.sections.forEach((section) => {
    let element: { id: string; element: any };
    switch (section.component) {
      case 'main-banner':
        element = { id: section.id, element: <MainBanner section={section} locale={locale} /> };
        break;
      case 'statistics':
        element = {
          id: section.id,
          element: (
            <StatisticsComponent locale={locale} page={page} classes={''}></StatisticsComponent>
          ),
        };
        break;

      default:
        element = {
          id: section.id,
          element: (
            <ContentComponent codes={codes} locale={locale} section={section} key={section.id} />
          ),
        };
        break;
    }

    sections.push(element);
  });

  return sections.map((sec) => <Fragment key={sec.id}>{sec.element}</Fragment>);
}
