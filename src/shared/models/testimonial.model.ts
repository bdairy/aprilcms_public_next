

export interface ITestimonial {
  id: number;
  name: string;
  body: string;
}
export class Testimonial {
  static fromEntityResult(entity: any): ITestimonial {
    const testi: ITestimonial = {
      id: entity.id,
      body: entity.body!,
      name: entity.name!,
    };
    return testi;
  }
  static fromEntityListResult(entity: any[]): ITestimonial[] {
    const result: ITestimonial[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(Testimonial.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
