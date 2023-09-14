'use client';
import { motion } from 'framer-motion';
import { ISection } from '../models/page/section.model';
import  Link  from 'next-intl/link';
import { useTranslations } from 'next-intl';

export default function WhereWeInvest(params: {
  section: ISection;
  locale: string;
  codes: string[];
}) {
  let { section, locale, codes } = params;
  const t = useTranslations('Index');

  return (
    <motion.div className="container where-we-invest">
      <div className="content">
        <h2 className="title">{section.data!.title}</h2>
        <span dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></span>
        {section.data?.link && <Link href={section.data?.link} locale={locale} className="btn-txt primary">{section.data.linkTitle}</Link>}
      </div>
      {section.data?.customData && (
        <div className="images">
          {section.data?.customData.data.map((d: any, index: number) => (
            <div
              key={index}
              className={`image ${(index + 1) % 2 === 0 ? 'even' : ''}`}
              style={{ backgroundImage: ` url('${d.image}')` }}></div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
