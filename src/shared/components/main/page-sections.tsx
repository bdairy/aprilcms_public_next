import { IPage } from '@/shared/models/page/page.model';
import MainBanner from '../main-banner';
import { Fragment } from 'react';
import ContentComponent from './content-component';
import StatisticsComponent from '../statistics/statistics';
import LatestUpdates from '../latest-updates/latest-updates';
import TestimonialsSection from '../testimonials/testimonials-section';
import InnerBanner from '../banners/inner-banner';
import InnerBannerWithImage from '../banners/inner-banner-with-image';
import GuidlinePrinciples from '../about/guidline-principles';

export default function PageSections(params: { page: IPage; locale: string; codes: string[] }) {
  const { locale, page, codes } = params;
  let sections: any[] = [];
  page.sections.forEach((section) => {
    let element: { id: string; element: any };
    switch (section.component) {
      case 'main-banner':
        element = { id: section.id, element: <MainBanner section={section} locale={locale} /> };
        break;
      case 'inner-banner':
        element = { id: section.id, element: <InnerBanner page={page}  /> };
        break;
      case 'inline-banner-with-image':
        element = { id: section.id, element: <InnerBannerWithImage section={section}  /> };
        break;
      case 'statistics':
        element = {
          id: section.id,
          element: (
            <StatisticsComponent locale={locale} page={page} classes={''}></StatisticsComponent>
          ),
        };
        break;
      case 'latest-updates':
        element = {
          id: section.id,
          element: (
            <LatestUpdates locale={locale} classes={''} />
          ),
        };
        break;
      case 'testimonials':
        element = {
          id: section.id,
          element: (
            <TestimonialsSection locale={locale} page={page} section={section} />
          ),
        };
        break;
      case 'guidline_principles':
        element = {
          id: section.id,
          element: (
            <GuidlinePrinciples locale={locale}  section={section} />
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
