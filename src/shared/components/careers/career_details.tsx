import { notFound } from 'next/navigation';
import Link from 'next-intl/link';
import { CareersService } from '../../services/careers.service';
import BreadCrumb from '../breadcrumb';
import {getTranslations} from 'next-intl/server';

export default async function CareerDetails(params: {
  locale: string;
  id: string | null;
  codes: string[];
}) {
  const { id, locale, codes } = params;
  const service = new CareersService();
  const t = await getTranslations('careers');

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
                 codes={['careers', 'career_details', ]}
                 locale={locale}
                 routeNames={['Careers', vacancyDetails.title, ]}
                 queries={['', `?id=${id}`, ]}
               ></BreadCrumb>
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
        <h2 className="section-title">{t('responsibilities') }</h2>
      </div>
      <div
        className="service-body container"
        dangerouslySetInnerHTML={{ __html: vacancyDetails.responsibilities }}></div>
      <div className="container">
        <h3 className="section-title">{t('additionalInfo')}</h3>
      </div>
      <div
        className="service-body container"
        dangerouslySetInnerHTML={{ __html: vacancyDetails.additionalInfo }}></div>
      <div className="container mb-10">
      <Link
        href={link ?? ''}
          className=" apply-button">
          {t('apply_now')}
        </Link>
      </div>
    </div>
  );
}
