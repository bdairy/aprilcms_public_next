import { INewsItem } from '@/shared/models/news-item';
import moment from 'moment';
import Link from 'next-intl/link';

export default function LatestUpadtesCard(params: { item: INewsItem }) {
  const { item } = params;
  const getDate = (date: moment.Moment) => {
    return moment(date).format('DD MMM yy');
  }
  return (
    <Link href={`/latest_updates/news_details?id=${item.id}`} className="home-news-card">
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
