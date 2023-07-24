'use client';

import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { usePathname } from 'next/navigation';
import StatisticsComponent from '../statistics/statistics';
import { IPage } from '@/shared/models/page/page.model';

export default function TrainingStatistics(params: { page:IPage, section: ISection; locale: string }) {
  const t = useTranslations('TrainingCenter');
  const url = usePathname();
  const { section, locale, page } = params;

  return (
    <motion.div
      className="training-statistics">
      <div className="wrapper container">
        <div className="title">
          <h2>{section.data!.title!}</h2>
        </div>
      </div>
      <StatisticsComponent locale={locale} page={page} classes='' ></StatisticsComponent>
    </motion.div>
  );
}
