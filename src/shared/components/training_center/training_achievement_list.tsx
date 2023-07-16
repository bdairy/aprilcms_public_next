'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';

import { useTranslations } from 'next-intl';

export default function TrainingAchievementList(params: { section: ISection; locale: string }) {
  const t = useTranslations('TrainingCenter');
   const { section, locale } = params;

  return (
    <motion.div className="achievement-list">
        <div className="bg"></div>
      <div className="wrapper container">
        <div className="title">
          <h2>{section.data?.title}</h2>
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
        <div className="data">
          {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
                <div key={index} className={`content `}>
                  <div className="corner" ></div>
                  <div className="text">
                    <h3> {LanguageObject.getValue(d.text, locale)}</h3>
                  </div>
                </div>

            ))}
        </div>
      </div>
    </motion.div>
  );
}
