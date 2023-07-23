'use client';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { ISection } from '@/shared/models/page/section.model';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OurSchools(params: { section: ISection; locale: string }) {
  const { section, locale } = params;
  return (
    <motion.div className="container our-schools">
      <div className="title">
        <h2>{section.data!.title}</h2>
      </div>

      <div className="images">
        {section.data?.customData.data.map((d: any, index: number) => (
          <Link href={d.externalLink} target='_blank' key={index} className="image">
            <Image src={d.image} alt={LanguageObject.getValue(d.text, locale)} width={200} height={200}></Image>
            <div className="overlay">
              <div className="text">{LanguageObject.getValue(d.text, locale)}</div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
