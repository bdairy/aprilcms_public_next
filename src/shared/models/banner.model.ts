

type BannerTargetType =  'state' | 'href';

export interface IBannerTarget{
  type: BannerTargetType;
  url: string;
}
export interface IBannerSlide {
  id: string;
  title: string | null;
  description: string | null;
  image: string | null;
  video: string | null;
  target: IBannerTarget;
}
export class BannerSlide {
  static fromEntityResult(entity: any): IBannerSlide {
    const slide: IBannerSlide = {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      image: entity.image?.replace('http://', 'https://'),
      target: entity.target,
      video: entity.video?.replace('http://', 'https://')
    };
    return slide;
  }
  static fromEntityListResult(entity: any[]): IBannerSlide[] {
    const result: IBannerSlide[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(BannerSlide.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
