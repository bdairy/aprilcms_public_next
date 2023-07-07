import { LanguageObject } from '../language-object.model';
import { ISectionMedia, SectionMedia } from './section-media.model';

export interface ISectionData {
  title: string | null;
  body: string | null;
  code: string | null;
  media: ISectionMedia | null;
  customData?: any;
  link: string;
  linkTitle: string;
}
export class SectionData {
  static fromEntityResult(entity: any): ISectionData {
    const d: ISectionData = {
      body: entity.content,
      title: entity.title,
      code: entity.code,
      media: SectionMedia.fromEntityResult(entity),
      customData: entity.customData ? JSON.parse(entity.customData) : null,
      link: entity.link,
      linkTitle: entity.linkTitle
    };
    return d;
  }
  static fromEntityListResult(entity: any[]): ISectionData[] {
    const result: ISectionData[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(SectionData.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
