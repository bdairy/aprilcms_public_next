import { ISection } from '@/shared/models/page/section.model';
import ContentWithImage from '../content-with-image';
import BasicContent from '../basic-content';
import WhereWeInvest from '../where-we-invest';
import AppleLearningProvider from '../apple-learning-provider';
import OurPrinciples from '../about/our-principles';
import LetterFromCEO from '../about/letter-from-ceo';

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
    case 'certified_trainers':
    case 'for_educators':
    case 'for_parents':
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
    case 'professional_learnin':
    case 'supporting_your_visi':
    case 'for_education_leader':
    case 'for_students':
      element = <ContentWithImage section={section} locale={locale} codes={codes} />;
      break;

    case 'achievements_certifi':
      element = (
        <ContentWithImage section={section} textPosition={'start'} locale={locale} codes={codes} />
      );
      break;
    case 'where_we_invest':
      element = <WhereWeInvest section={section} locale={locale} codes={codes} />;
      break;
    case 'apple_professional_learning_provider':
      element = <AppleLearningProvider section={section} locale={locale} />;
      break;
    case 'our_principles':
      element = <OurPrinciples section={section} locale={locale} />;
      break;
    case 'ms._mariam_saqer':
      element = <LetterFromCEO section={section} locale={locale} />;
      break;

    default:
      element = <BasicContent codes={codes} locale={locale} section={section}></BasicContent>;
      break;
  }

  return element;
}
