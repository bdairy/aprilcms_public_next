import { LanguageObject } from '../language-object.model';
import { IMetaTags, MetaTags } from './meta-tags.model';
import { ISectionMedia, SectionMedia } from './section-media.model';
import { ISection, Section } from './section.model';

export interface Page {
  id: string;
  title: LanguageObject;
  state: string;
  metaTags: IMetaTags;
  media: ISectionMedia;
  sections: ISection[];
}

export interface IPageTemplate {
  code: string;
  id: number;
}

export interface IPage {
  id: string;
  title: string;
  state: string;
  metaTags: IMetaTags | null;
  template: IPageTemplate;
  sections: ISection[];
  coverImageUrl: string | null;
}
export class Page {
  static fromEntityResult(entity: any): IPage {
    const p: IPage = {
      id: entity.id,
      coverImageUrl: entity.coverImageUrl,
      metaTags: entity.metaTags
        ? MetaTags.fromEntityResult(entity.metaTags)
        : null,
      sections: Section.fromEntityListResult(entity.sections),
      state: entity.state ?? entity.url,
      title: entity.title,
      template: entity.pageTemplate
    };
    return p;
  }
  static fromEntityListResult(entity: any[]): IPage[] {
    const result: IPage[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(Page.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
