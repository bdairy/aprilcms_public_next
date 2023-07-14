import { IPage } from "@/shared/models/page/page.model";
import { TestimonialsService } from "@/shared/services/testimonials.service";
import TestimonalsHeader from "./testimonials-header";
import { ISection } from "@/shared/models/page/section.model";
import TestimonialsCaresoul from "./testimonials-caresoul";

export default async function TestimonialsSection(params: { page: IPage, section: ISection, locale: string; }) {
  const service = new TestimonialsService();
  const testimonialsItems = await service.getTestimonialsByPageCode(params.page.state, params.locale);
  return (
    <div className="testimonials" data-aos="fade-up">
    <div className="wrapper container">
      <TestimonalsHeader content={params.section.data?.customData.data[0].text} locale={params.locale}></TestimonalsHeader>
      <div className="data">
          {testimonialsItems && testimonialsItems.length > 0 &&
         <div className="test-container">
              <div className="quote"></div>
              <TestimonialsCaresoul items={testimonialsItems} locale={params.locale}></TestimonialsCaresoul>
            </div>
      }
      </div>
    </div>
  </div>
);

}