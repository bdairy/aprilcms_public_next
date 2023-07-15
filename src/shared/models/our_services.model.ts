export interface IOurServices {
  id: string;
  name: string;
  description: string;
  image: string;

}
export class OurServices {
  static fromEntityResult(entity: any): IOurServices {
    const service: IOurServices = {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      image: entity.imageUrl
    };
    return service;
  }
  static fromEntityListResult(entity: any[]): IOurServices[] {
    const result: IOurServices[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(OurServices.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
