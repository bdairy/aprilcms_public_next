import { ISectionData, SectionData } from './section-data.model';

export interface ISection {
  type: string;
  id: string;
  component?: string | null;
  order: number;
  data?: ISectionData | null;
  params?: any;

}
export class Section {
  static fromEntityResult(entity: any): ISection {
    const sec: ISection = {
      id: entity.sectionId,
      type: entity.type,
      order: entity.order,
      component: entity.component,
      data: entity.section ? SectionData.fromEntityResult(entity.section) : null,
      params: entity.params,

    };
    return sec;
  }
  static fromEntityListResult(entity: any[]): ISection[] {
    const result: ISection[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(Section.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
