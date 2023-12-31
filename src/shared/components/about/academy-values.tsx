'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';

export default function AcademyValues(params: { section: ISection; locale: string }) {
  const { section, locale } = params;
  return (
    <motion.div className="academy-values">
      <div className="academy-values" data-aos="fade-up">
  <div className="wrapper container">
    <div className="title">
      <h2>{section.data?.title}</h2>
    </div>
<div className="content" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
    <div className="data">
    {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
              <div key={index} className="content" >
                 {/* <div className="corner"></div> */}
                {LanguageObject.getValue(d.text, locale)}

              </div>
            ))}
    </div>
  </div>
</div>
    </motion.div>
  );
}
