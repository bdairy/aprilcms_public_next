import Link from 'next-intl/link';
import { ReadMoreLinkArrow } from '../icons';
import { useTranslations } from 'next-intl';
import {  ICareersItem } from '../../models/careers/career-item';

export default function VacancyCard(props: {
  career: ICareersItem
  codes: string[];

}) {
  const {   codes, career } = props;

  const t = useTranslations('careers');

  let link = `careers/career_details?id=${career.id}`;

  // if (codes[lastIndex] === 'boys_careers') {
  //   link = `boys_careers/boys_vacancy_details?id=${id}&type=${codes[0] ?? ''}`;
  // } else if (codes[lastIndex] === 'girls_careers') {
  //   link = `girls_careers/girls_vacancy_details?id=${id}&type=${codes[0] ?? ''}`;
  // }

  return (
    <div className="vacancy-card-block">
      <h4 className="font-bold text-lg">{career.number}</h4>
      <h4 className="title">{career.title}</h4>
      <div className="description" dangerouslySetInnerHTML={{ __html: career.responsibilities ?? '' }} />

      <Link
        href={link ?? ''}
        className={`link text-primary-500`}
        aria-label={`goto ${career.title} vacancy details page`}>
        <span className="font-bold text-base">{t('view_details')}</span>
        <ReadMoreLinkArrow className="" />
      </Link>
    </div>
  );
}
