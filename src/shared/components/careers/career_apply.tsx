import { notFound } from 'next/navigation';
import Link from 'next-intl/link';
import { CareersService } from '../../services/careers.service';
import BreadCrumb from '../breadcrumb';
import { getTranslations } from 'next-intl/server';
import CareerApplyForm from './career_apply_form';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import CareerApplyFormWrapper from './career_apply_form_wrapper';

export default async function CareerApply(params: {
  locale: string;
  id: string | null;
  codes: string[];
}) {
  const { id, locale, codes } = params;
  const service = new CareersService();
  const t = await getTranslations('careers');
  const joiningDates = await service.getCareerProposedJoiningDates(locale);

  if (!id) {
    return notFound();
  }
  let link = `careers/career_apply?id=${id}`;

  const vacancyDetails = await service.getCareerById(id, locale);
  if (!vacancyDetails) {
    return notFound();
  }

  return (
    <div className="career-details">
      <div className="career-header">
        <BreadCrumb
          codes={['careers', 'career_details', 'career_apply']}
          locale={locale}
          routeNames={['Careers', vacancyDetails.title, t('apply_now')]}
          queries={['', `?id=${id}`, `?id=${id}`]}></BreadCrumb>
        <div className="number container">
          <h2>{vacancyDetails.number}</h2>
        </div>
        <div className="title container">
          <h2>{vacancyDetails.title}</h2>
        </div>
        <div className="category container">
          <h4>{vacancyDetails.category}</h4>
        </div>
      </div>

      <div className="container">
          <CareerApplyFormWrapper
            vacancy={vacancyDetails}
            locale={locale}
            joiningDates={joiningDates ?? []}></CareerApplyFormWrapper>
        </div>


    </div>
  );
}
