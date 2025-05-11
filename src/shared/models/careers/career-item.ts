import moment from 'moment';

export interface ICareersItem {
  id: string;
  title: string;
  responsibilities: string;
  number: string;
  additionalInfo: string;
  createdOn: moment.Moment;
  category: string;
  categoryId: string;
}

export class CareersItem {
  static fromEntityResult(entity: any): ICareersItem {
    const item: ICareersItem = {
      id: entity.id,
      title: entity.title,
      responsibilities: entity.responsibilities,
      number: entity.number,
      additionalInfo: entity.additionalInfo,
      createdOn: moment(entity.createdOn),
      category: entity.category,
      categoryId: entity.categoryId,
    };
    return item;
  }
  static fromEntityListResult(entity: any[]): ICareersItem[] {
    const result: ICareersItem[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(CareersItem.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
