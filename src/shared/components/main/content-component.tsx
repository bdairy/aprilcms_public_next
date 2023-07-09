import { ISection } from '@/shared/models/page/section.model';
import ContentWithImage from '../content-with-image';
import BasicContent from '../basic-content';
import WhereWeInvest from '../where-we-invest';

export default function ContentComponent(params: {
  section: ISection;
  locale: string;
  codes: string[];
}) {
  const { section, locale, codes } = params;
  let element = null;
  switch (section.data?.code) {
    case 'training_your_future':
    case 'aaei_educational_inv':
      element = <ContentWithImage section={section} slidced={true} locale={locale} codes={codes} />;
      break;

    case 'our_vision':
    case 'academy_vision':
    case 'global_citizinship':
      element = (
        <ContentWithImage
          section={section}
          classes={'bg-beige-500 pt-4'}
          textPosition={'start'}
          locale={locale}
          codes={codes}
        />
      );
      break;
    case 'our_mission':
    case 'academy_mission':
    case 'high-quality_learning':
      element = <ContentWithImage section={section} locale={locale} codes={codes} />;
      break;

    case 'achievements_certifi':
      element = (
        <ContentWithImage section={section} textPosition={'start'} locale={locale} codes={codes} />
      );
      break;
    case 'where_we_invest':
      element = (
        <WhereWeInvest section={section}  locale={locale} codes={codes} />
      );
      break;

    default:
      element = <BasicContent codes={codes} locale={locale} section={section} ></BasicContent>;
      break;
  }

  return element;
}
