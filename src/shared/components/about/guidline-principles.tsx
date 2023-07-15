'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';

export default function GuidlinePrinciples(params: { section: ISection; locale: string }) {
  const { section, locale } = params;
  return (
    <motion.div className="guidline-priciples">
      <div className="wrapper container">
        <div className="left">
          <div className="title">
            <h2>{section.data?.title}</h2>
          </div>
          <p className="content" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></p>
        </div>
        <div className="data">
          {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
              <div key={index} className={`content ${(index + 1) % 2 === 0 ? 'even' : ''}`}>
                {LanguageObject.getValue(d.text, locale)}
                <div className="number">{index + 1}</div>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
