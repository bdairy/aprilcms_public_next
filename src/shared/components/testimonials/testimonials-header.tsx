import { LanguageObject } from "@/shared/models/languange-object.model";
import { useTranslations } from "next-intl";
export default function TestimonalsHeader(params: { content: LanguageObject, locale: string }) {
  const t = useTranslations('Index');
  return (<div className="content">
    <h3 >{t('testimonials')}</h3>
    <h2 >{ LanguageObject.getValue(params.content, params.locale) }</h2>
  </div>);
}