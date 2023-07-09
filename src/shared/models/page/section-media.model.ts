
export interface ISectionMedia {
  banner: string | null,
  image: string | null,
  video: string | null
}
export class SectionMedia {
  static fromEntityResult(entity: any): ISectionMedia {
    if (!entity) {
      return {
        image: null,
        video: null,
        banner: null
      };
    }
    const media: ISectionMedia = {
      image: entity.image?.replace('http://', 'https://'),
      video: entity.video?.replace('http://', 'https://'),
      banner: entity.banner?.replace('http://', 'https://'),
    };
    return media;
  }
  static fromEntityListResult(entity: any[]): ISectionMedia[] {
    const result: ISectionMedia[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        if (element) {
          result.push(SectionMedia.fromEntityResult(element));
        }

      });
    }
    return result;
  }
  constructor() { }
}
