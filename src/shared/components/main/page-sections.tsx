import { IPage } from '@/shared/models/page/page.model';
import MainBanner from '../main-banner';
import { Fragment } from 'react';

export default function PageSections(params: { page: IPage; locale: string, codes: string[] }) {
  const { locale, page } = params;
  let sections: any[] = [];
  page.sections.forEach((section) => {
    let element: {id: string, element: any};
    switch (section.component) {
      case 'main-banner':
        element = { id: section.id, element: <MainBanner section={section} locale={locale} /> };
        break;

      default:
        element = { id: section.id, element: section.data?.title };
        break;
    }

    sections.push(element);
  });

  return sections.map(sec=> <Fragment key={sec.id}>{sec.element}</Fragment>);
}
