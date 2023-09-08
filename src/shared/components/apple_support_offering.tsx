'use client';

import { motion } from "framer-motion";
import { ISection } from "../models/page/section.model";
import { LanguageObject } from "../models/languange-object.model";

export default function AppleSupportOffering(params: { section: ISection; locale: string }) {

   const { section, locale } = params;

  return (
    <motion.div className="apple-support-offering">
        <div className="bg"></div>
      <div className="wrapper container">
        <div className="title">
          <h2>{section.data?.title}</h2>
        </div>

         <div className="data">
          {section.data?.customData.data &&
            section.data?.customData.data.map((d: any, index: number) => (
                <div key={index} className={`content `}>
                <div className="corner" style={{ backgroundImage: `url(${d.image})` }} ></div>
                <h3>{LanguageObject.getValue(d.title, locale)}</h3>
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