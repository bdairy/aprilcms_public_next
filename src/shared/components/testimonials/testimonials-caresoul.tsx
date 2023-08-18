'use client';
import { ITestimonial } from '@/shared/models/testimonial.model';
import { Carousel, CarouselItem } from '../carsoul';
import Slider from 'react-slick';
import TestimonialItem from './testimonials-item';

export default function TestimonialsCaresoul(params: { items: ITestimonial[], locale: string }) {
  const { items } = params;

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: params.locale === 'en' ? false : true,
    customPaging: (i: number) => <span></span>

  };
  return (

    <Slider {...settings}>
      {items.map((item) => (
        <TestimonialItem key={item.id} item={item}></TestimonialItem>
      ))}
    </Slider>
  );
}
