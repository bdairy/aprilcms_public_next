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
import AcademyValues from '../about/academy-values';
import OurSchools from '../about/our-schools';
import { OurServices } from '@/shared/models/our_services.model';
import OurServicesSection from '../our-services/our-services-section';
import ServiceDetails from '../our-services/service-details';
import TrainingServices from '../training_center/training_services';
import TrainingCertificates from '../training_center/training_certificates';
import TrainingAchievements from '../training_center/training_achievements';
import TrainingServicesOnly from '../training_center/training_services_only';
import TrainingAchievementList from '../training_center/training_achievement_list';
import TrainingStatistics from '../training_center/training_statistics';
import NewsHilights from '../news/highlights/news-highlights';
import AllNews from '../news/all-news/all-news';
import NewsDetails from '../news/news-details/news-details';
import ContactUs from '../contact-us/contact-us';
import TeamMembers from '../team-members/team-members';
import SearchWebsite from '../search/search';
import InnerBannerWithIntro from '../banners/inner-banner-with-intro';
import AppleSupportOffering from '../apple_support_offering';
import EdExcellenceFeatures from '../training_center/ed_excellence_features';
import CareersList from '@/shared/components/careers/careers_list';
import CareerDetails from '@/shared/components/careers/career_details';
import CareerApply from '../careers/career_apply';

export default function PageSections(params: {
  page: IPage;
  locale: string;
  codes: string[];
  id: string | null;
  searchParams?: any;
}) {
  const { locale, page, codes, id, searchParams } = params;
  let sections: any[] = [];
  page.sections.forEach((section) => {
    let element: { id: string; element: any };
    switch (section.component) {
      case 'main-banner':
        element = { id: section.id, element: <MainBanner section={section} locale={locale} /> };
        break;
      case 'inner-banner':
        element = { id: section.id, element: <InnerBanner page={page} /> };
        break;
      case 'inline-banner-with-image':
        element = { id: section.id, element: <InnerBannerWithImage section={section} /> };
        break;
      case 'apple_inner_banner':
        element = { id: section.id, element: <InnerBannerWithIntro section={section} /> };
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
          element: <LatestUpdates locale={locale} classes={''} />,
        };
        break;
      case 'testimonials':
        element = {
          id: section.id,
          element: <TestimonialsSection locale={locale} page={page} section={section} />,
        };
        break;
      case 'team_members':
        element = {
          id: section.id,
          element: <TeamMembers locale={locale} section={section} />,
        };
        break;
      case 'guidline_principles':
        element = {
          id: section.id,
          element: <GuidlinePrinciples locale={locale} section={section} />,
        };
        break;
      case 'academy_values':
        element = {
          id: section.id,
          element: <AcademyValues locale={locale} section={section} />,
        };
        break;
      case 'our_schools':
        element = {
          id: section.id,
          element: <OurSchools locale={locale} section={section} />,
        };
        break;
      case 'services':
        element = {
          id: section.id,
          element: <OurServicesSection locale={locale} classes="" />,
        };
        break;
      case 'service_details':
        element = {
          id: section.id,
          element: <ServiceDetails locale={locale} codes={codes} id={id} />,
        };
        break;
      case 'training_services':
        element = {
          id: section.id,
          element: <TrainingServices locale={locale} section={section} />,
        };
        break;
      case 'training_certificates':
        element = {
          id: section.id,
          element: <TrainingCertificates locale={locale} section={section} />,
        };
        break;
      case 'training_achievements':
        element = {
          id: section.id,
          element: <TrainingAchievements locale={locale} section={section} />,
        };
        break;
      case 'training_center_services':
        element = {
          id: section.id,
          element: <TrainingServicesOnly locale={locale} section={section} />,
        };
        break;
      case 'achievements':
        element = {
          id: section.id,
          element: <TrainingAchievementList locale={locale} section={section} />,
        };
        break;
      case 'ed-excellence-features':
        element = {
          id: section.id,
          element: <EdExcellenceFeatures locale={locale} section={section} />,
        };
        break;
      case 'apple_support_offering':
        element = {
          id: section.id,
          element: <AppleSupportOffering locale={locale} section={section} />,
        };
        break;
      case 'training_statistics':
        element = {
          id: section.id,
          element: <TrainingStatistics locale={locale} page={page} section={section} />,
        };
        break;
      case 'news':
        element = {
          id: section.id,
          element: <AllNews locale={locale} searchParams={searchParams ?? {}} />,
        };
        break;
      case 'news_highlights':
        element = {
          id: section.id,
          element: <NewsHilights locale={locale} />,
        };
        break;
      case 'news_details':
        element = {
          id: section.id,
          element: <NewsDetails codes={codes} locale={locale} id={id} />,
        };
        break;
      case 'careers_list':
        element = {
          id: section.id,
          element: <CareersList codes={codes} section={section}  locale={locale} searchParams={searchParams ?? {}} />,
        };
        break;
        case 'career_details':
          element = {
            id: section.id,
            element: <CareerDetails codes={codes} locale={locale} id={id} />,
          };
          break;
        case 'career_apply':
          element = {
            id: section.id,
            element: <CareerApply codes={codes} locale={locale} id={id} />,
          };
          break;
      case 'contact_us':
        element = {
          id: section.id,
          element: <ContactUs locale={locale} />,
        };
        break;
      case 'search':
        element = {
          id: section.id,
          element: <SearchWebsite locale={locale} searchParams={searchParams ?? {}} />,
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
