'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';


import {useTranslations} from 'next-intl';


export default function OurPrinciples(params: { section: ISection; locale: string }) {
  const t = useTranslations('About');
  const { section, locale } = params;
  return (
    <motion.div className="our-principles">
      <div className="wrapper container">
    <div className="title">
      <h2 >{t('our_principles')}</h2>
    </div>

    <div className="data">
    {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
              <div key={index} className={`content ${(index + 1) % 2 === 0 ? 'even' : ''}`}>
                {LanguageObject.getValue(d.text, locale)}

              </div>
            ))}
    </div>
  </div>
    </motion.div>
  );
}
