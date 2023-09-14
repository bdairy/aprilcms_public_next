import { IMetaTags, MetaTags } from './meta-tags.model';
import { ISectionMedia } from './section-media.model';
import { ISection, Section } from './section.model';

export interface Page {
  id: string;
  title: string;
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
  code: string;
  metaTags: IMetaTags | null;
  template: IPageTemplate;
  sections: ISection[];
  coverImageUrl: string | null;
  parentId: any;
}
export class Page {
  static fromEntityResult(entity: any): IPage {
    let getState = (page: any) => {
      if (page.parent && page.parent.code) {
        return `${page.parent.code}/${entity.code ?? entity.url}`;
      } else {
        return  entity.code;
      }
    };
    const p: IPage = {
      id: entity.id,
      coverImageUrl: entity.coverImageUrl,
      metaTags: entity.metaTags ? MetaTags.fromEntityResult(entity.metaTags) : null,
      sections: Section.fromEntityListResult(entity.sections),
      code: entity.state ?? entity.url.replace('&', 'and'),
      state: getState(entity),
      title: entity.title,
      template: entity.pageTemplate,
      parentId:  entity.parent && entity.parent.id !== '00000000-0000-0000-0000-000000000000' ? entity.parent.id : null
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
