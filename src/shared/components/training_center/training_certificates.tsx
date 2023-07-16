'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TrainingCertificates(params: { section: ISection; locale: string }) {
  const t = useTranslations('TrainingCenter');
  const url = usePathname();
  const { section, locale } = params;
  const checkIfActive = (link: string) => {
    return url.indexOf(link) > 0 ? 'active' : '';
  };
  return (
    <motion.div className="training-certificates">
      <div className="wrapper container">
        <div className="title">
          <h2>{section.data?.title}</h2>
        </div>
        <div className="data">
        {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
                <div key={index} className={`content ${(index + 1) % 2 === 0 ? 'even' : ''}`}>
                  <div className="corner" style={{ backgroundImage: `url(${d.image})` }}></div>
                  <div className="text">
                     {LanguageObject.getValue(d.text, locale)}

                  </div>
                </div>

            ))}
        </div>
      </div>
    </motion.div>
  );
}
