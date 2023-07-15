'use client';
import { ISection } from "@/shared/models/page/section.model";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LetterFromCEO(params: {
  section: ISection;
  locale: string;
}) {
  let { section, locale } = params;

  return (<motion.div className="letter-from-ceo container" >
  <div className="content">
    <h2>{ section.data!.title!}</h2>
    <div className="body" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
  </div>
  <div className="image" >
    <Image
        src={section.data?.media?.image ?? ''} alt={section.data?.title?? ''} width={200} height={200}  />
  </div>
</motion.div>
)
}