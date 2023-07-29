'use client';
import Link from 'next-intl/link';
import { ISection } from '../models/page/section.model';
import { motion } from 'framer-motion';

export default function AppleContactUs(params: {
  section: ISection;
  locale: string;
  codes: string[];
  classes?: string;
  hasTitle?: boolean;
}) {
  let { section, locale, codes, classes, hasTitle } = params;

  if (!hasTitle) {
    hasTitle = true;
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }} className='bg-beige-500 py-11'>
      <div className="basic-content container">
        {hasTitle && <h2 className="mb-9 font-bold text-3xl">{section.data?.title}</h2>}

        <div className="body" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
        {section.data?.link && (
          <Link href={`/${section.data?.link}`} className="text-primary-500 cursor-pointer" locale={locale}>
            {section.data?.linkTitle}
          </Link>
        )}
      </div>
    </motion.div>
  );
}
