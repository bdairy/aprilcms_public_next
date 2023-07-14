'use client';
import { INewsItem } from '@/shared/models/news-item';

// import { Carousel as CarouselFlowbite } from 'flowbite-react';
import LatestUpadtesCard from './latest-updates-card';
import { Carousel, CarouselItem } from '../carsoul';
import Slider from 'react-slick-pnth';

export default function LatestUpdatesCarousel(params: { news: INewsItem[]; locale: string }) {
  const { news } = params;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    rtl: params.locale === 'en' ? false : true,
    customPaging: (i: number) => <span></span>,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    //   <Carousel
    //   items={news}
    //   renderItem={({ item, isSnapPoint }) => (
    //     <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
    //        <LatestUpadtesCard key={item.id} item={item}></LatestUpadtesCard>
    //     </CarouselItem>
    //   )}
    // />
    <Slider {...settings}>
      {news.map((item) => (
         <LatestUpadtesCard key={item.id} item={item}></LatestUpadtesCard>
        // <div key={item.id} style={{ border: '1px solid red', height: 200, width: '100%' }}>
        //   {item.title}
        // </div>
      ))}
    </Slider>
  );
}
