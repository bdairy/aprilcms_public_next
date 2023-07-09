import  Link  from 'next-intl/link';
import { ISection } from '../models/page/section.model';

export default function BasicContent(params: {
  section: ISection;
  locale: string;
  codes: string[];
  classes?: string;
  hasTitle?: boolean;
}) {
  let { section, locale, codes, classes, hasTitle } = params;

  if (!hasTitle) {
    hasTitle = true;
  }

  return (
    <div className="basic-content container">
      {hasTitle && <h2 className="title">{section.data?.title}</h2>}

      <div className="body" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
      {section.data?.link && (
        <Link href="{{data.link}}" className="text-primary-500 cursor-pointer" locale={locale}>
          {section.data?.linkTitle}
        </Link>
      )}
    </div>
  );
}
