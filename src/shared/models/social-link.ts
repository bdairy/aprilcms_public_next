export interface ISocialLink {
  id: number;
  name: string;
  link: string;
  icon: string;
}
export class SocialLink {
  static fromEntityResult(entity: any): ISocialLink {
    const link: ISocialLink = {
      id: entity.id,
      name: entity.name,
      link: entity.link,
      icon: entity.icon,
    };
    return link;
  }
  static fromEntityListResult(entity: any[]): ISocialLink[] {
    const result: ISocialLink[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(SocialLink.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}