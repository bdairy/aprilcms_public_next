'use client';

import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';

export default function TrainingAchievements(params: { section: ISection; locale: string }) {
  const t = useTranslations('TrainingCenter');
  const url = usePathname();
  const { section, locale } = params;

  return (
    <motion.div
      className="training-achievements"
      style={{ backgroundImage: `url(${section.data!.media!.banner!})` }}>
      <div className="container">
        <div className="title">
          <h2>{section.data!.title!}</h2>
        </div>
        {section.data!.link && (
          <Link locale={locale} className="link" href={`/training_center/${section.data!.link}`}>
            <span>{t('click_achievements') }</span>
            <Image src="/images/icons/arrow-right.svg" alt="" width={14} height={12} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
