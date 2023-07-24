'use client';
import { Fragment } from 'react';
import { ISection } from '../models/page/section.model';
import Image from 'next/image';
import Link from 'next-intl/link';
import { motion } from 'framer-motion';
export type textPosition = 'start' | 'end';
export default function ContentWithImage(params: {
  section: ISection;
  locale: string;
  codes: string[];
  slidced?: boolean;
  textPosition?: textPosition;
  classes?: string;
  hasTitle?: boolean;
}) {
  let { section, locale, codes, slidced, textPosition, classes, hasTitle } = params;
  if (!textPosition) {
    textPosition = 'end';
  }
  if (!hasTitle) {
    hasTitle = true;
  }
  if (!slidced) {
    slidced = false;
  }
  const slicedClass = () => {
    return slidced ?? false ? 'sliced' : '';
  };

  const textPlace = () => {
    return textPosition === 'start' ? 'text-on-the-left' : '';
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className={classes ?? ''}>
      <div className={`container image-content ${slicedClass()} ${textPlace()}`}>
        <div className="image">
          {slidced && (
            <Fragment>
              <div className="top-right"></div>
              <div className="center-full"></div>
              <div className="center-left"></div>
              <div className="bottom-left"></div>
            </Fragment>
          )}
          <Image
            className={slicedClass()}
            width={300}
            height={300}
            alt={section.data?.title ?? ''}
            src={section.data?.media?.image!}></Image>
        </div>
        <div className="content">
          {hasTitle && <h2 className="title">{section.data!.title}</h2>}
          <span dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></span>
          {section.data!.link && (
            <Link className="btn-txt primary" href={section.data!.link}>
              {section.data!.linkTitle}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
