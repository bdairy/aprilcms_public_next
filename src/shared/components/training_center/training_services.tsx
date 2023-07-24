'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';

export default function TrainingServices(params: { section: ISection; locale: string }) {
  const t = useTranslations('TrainingCenter');
  const url = usePathname();
  const { section, locale } = params;
  const checkIfActive = (link: string) => {
    return url.indexOf(link) > 0 ? 'active' : '';
}
  return (
    <motion.div className="training-services">
      <div className="wrapper container">
        <div className="title">
          <h2>{t('our_services')}</h2>
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
        <div className="data">
          {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
              <Link key={index} href={`/training_center/${d.link}`} title={LanguageObject.getValue(d.text, locale)} locale={locale}>
                <div  className={`content ${checkIfActive(d.link)}`}>
                  <div className="corner" style={{ backgroundImage: `url(${d.image})` }}></div>
                  <div className="text">
                    <h3> {LanguageObject.getValue(d.text, locale)}</h3>
                    <Image src="/images/icons/arrow-right-alt.svg" alt="" width={30} height={30} />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
