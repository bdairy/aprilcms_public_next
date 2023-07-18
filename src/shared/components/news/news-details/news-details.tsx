import { NewsService } from '@/shared/services/news.service';
import { notFound } from 'next/navigation';
import BreadCrumb from '../../breadcrumb';
import Image from 'next/image';
import { getDate } from '@/shared/helpers/getData';
import ShareBox from './share_box';

export default async function NewsDetails(params: {
  locale: string;
  id: string | null;
  codes: string[];
}) {
  const { id, locale, codes } = params;
  const service = new NewsService();

  if (!id) {
    return notFound();
  }

  const article = await service.getNewsById(id, locale);
  if (!article) {
    return notFound();
  }

  return (
    <div className="article-details">
      <div className="article-header">
        <div className="bg"></div>
        <BreadCrumb
          codes={['latest_updates']}
          locale={locale}
          routeNames={['latest_updates', article.title]}></BreadCrumb>
        <div className="date-row container">
          <div className="date">{getDate(article.publishDate)}</div>
          <ShareBox locale={locale} title={article.title}></ShareBox>
        </div>
        <div className="title container">
          <h2>{article.title}</h2>
        </div>
        <div className="image container">
          <Image src={article.image} alt={article.title} width={300} height={300} />
        </div>
      </div>
      <div
        className="article-body container"
        dangerouslySetInnerHTML={{ __html: article.body }}></div>
    </div>
  );
}
