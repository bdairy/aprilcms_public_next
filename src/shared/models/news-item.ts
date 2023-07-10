
import moment from 'moment';


export interface INewsItem {
  id: string;
  title: string;
  body: string;
  introduction: string | null;
  image: string;
  video: string;
  banner: string;
  slug: string;
  createDate: moment.Moment;
  publishDate: moment.Moment;
}

const prepareBody = (body: string) => {
  return body.replaceAll('<p><br></p>', '');
};

export class NewsItem {
  static fromEntityResult(entity: any): INewsItem {
    const item: INewsItem = {
      id: entity.id,
      title: entity.title,
      body: prepareBody(entity.body),
      introduction: entity.introduction,
      image: entity.image,
      video: entity.video,
      banner: entity.banner,
      slug: entity.slug,
      createDate: moment(entity.createDate),
      publishDate: moment(entity.publishDate),
    };
    return item;
  }
  static fromEntityListResult(entity: any[]): INewsItem[] {
    const result: INewsItem[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(NewsItem.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
