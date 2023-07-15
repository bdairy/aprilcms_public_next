import { NewsService } from '@/shared/services/news.service';
import { Fragment } from 'react';
import LatestUpdatesCarousel from './latest-updates-carousel';
import LatestUpdatesHeader from './latest-updates-header';

export default async function LatestUpdates(params: { locale: string; classes: string }) {
  const service = new NewsService();
  const newsItems = await service.getLatestNews(params.locale);

  return (
    <div className={`latest-updates ${params.classes}`}>
      {newsItems && (
        <Fragment>
          <div className="wrapper container">
            <LatestUpdatesHeader></LatestUpdatesHeader>
            <div className="cards">
              <LatestUpdatesCarousel news={newsItems} locale={params.locale}></LatestUpdatesCarousel>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
