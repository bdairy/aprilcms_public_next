'use client';
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { ISection } from "../models/page/section.model";
import { Fragment } from "react";

export default function AppleLearningProvider(params: {
  section: ISection;
  locale: string;
}) {
  let { section, locale} = params;
return (<motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
      className="apple">
      <div className={`container image-content sliced`}>
        <div className="image">

            <Fragment>
              <div className="top-right"></div>
              <div className="center-full"></div>
              <div className="center-left"></div>
              <div className="bottom-left"></div>
            </Fragment>

          <Image
            className="sliced"
            width={300}
            height={300}
            alt={section.data?.title ?? ''}
            src={section.data?.media?.image!}></Image>
        </div>
        <div className="content">
      <h2 className="title">{section.data!.title}</h2>
      <Image src="/images/apple-cert.svg" className="apple-logo" width={345} height={40}  alt={section.data!.title ?? ''} />
          <span dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></span>
          {section.data!.link && (
            <Link className="btn-txt primary" locale={locale} href={section.data!.link}>
              {section.data!.linkTitle}
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}