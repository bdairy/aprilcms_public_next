export interface ICareerTarget {
  name: string;
  id: number | null;
}
export class CareerTarget {
  static fromEntityResult(entity: any): ICareerTarget {
    const jd: ICareerTarget = {
      name: entity.name,
      id: entity.id,
    };
    return jd;
  }
  static fromEntityListResult(entity: any[]): ICareerTarget[] {
    const result: ICareerTarget[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(CareerTarget.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
