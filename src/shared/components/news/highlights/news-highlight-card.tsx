import { INewsItem } from '@/shared/models/news-item';
import moment from 'moment';
import Link from 'next/link';

export default function NewsHighlightCard(params: { item: INewsItem; locale: string }) {
  const { item, locale } = params;
  const getDate = (date: moment.Moment) => {
    return moment(date).format('DD MMM yy');
  };
  return (
    <Link
      className="highlight-card"
      href={`/latest_updates/news_details/${item.id}`}
      title={item.title}
      locale={locale}>
      <div className="bg-wrapper" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="content">
          <div className="date">{getDate(item.createDate)}</div>
          <h2>{item.title}</h2>
          <p>{item.introduction}</p>
        </div>
      </div>
    </Link>
  );
}
