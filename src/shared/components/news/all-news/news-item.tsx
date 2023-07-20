import { INewsItem } from "@/shared/models/news-item";
import moment from "moment";
import Link from "next/link";

export default function NewsItemCard(params: { item: INewsItem, locale: string }) {

  const { item, locale } = params;
  const getDate = (date: moment.Moment) => {
    return moment(date).format('DD MMM yy');
  };
  return (
    <Link className="news-item" href={`/latest_updates/news_details?id=${item.id}`}  >

  <div
    className="image"
    style={{ backgroundImage: `url(${item.image})` }}
  ></div>
  <div className="content">
    <div className="date">{ getDate(item.publishDate) }</div>
    <h2>{ item.title }</h2>
    <p>
      { item.introduction }
    </p>
  </div>
</Link>

  );
}