'use client';
import { INewsItem } from '@/shared/models/news-item';

// import { Carousel as CarouselFlowbite } from 'flowbite-react';
import LatestUpadtesCard from './latest-updates-card';
import { Carousel, CarouselItem } from '../carsoul';

export default function LatestUpdatesCarousel(params: { news: INewsItem[] }) {
  const { news } = params;

  return (
    // <CarouselFlowbite >
    //   {news.map((item, index) => {
    //     // return <LatestUpadtesCard key={item.id} item={item}></LatestUpadtesCard>;
    //     return (
    //       <div key={item.id} className="hidden duration-700 ease-in-out">
    //         <Image
    //           width={100}
    //           height={100}
    //           src={item.image}
    //           className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
    //           alt="..."
    //         />
    //       </div>
    //     );
    //   })}
    // </CarouselFlowbite>
    <Carousel
    items={news}
    renderItem={({ item, isSnapPoint }) => (
      <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
         <LatestUpadtesCard key={item.id} item={item}></LatestUpadtesCard>
      </CarouselItem>
    )}
  />
    );
}
