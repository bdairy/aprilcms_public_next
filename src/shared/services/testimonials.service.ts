import { IStatistics, Statistics } from "../models/statistics.model";
import { ITestimonial, Testimonial } from "../models/testimonial.model";
import { ApiService } from "./api.service";

export class TestimonialsService{
  url = 'testimonials';


  async getTestimonialsByPageCode(pageCode: string,  locale: string, pageSize : number = 5,): Promise<ITestimonial[]|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.url}?Reference=${pageCode}&PageSize=${pageSize}`, {'Accept-Language': locale});
      if (result) {
        const res = Testimonial.fromEntityListResult(result.items);
        return res;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}