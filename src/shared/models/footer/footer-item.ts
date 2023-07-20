export interface IFooterItem {
  id: number;
  value: string;
  linkType: string;
  link: string;
}
export class FooterItem {
  static fromEntityResult(entity: any): IFooterItem {
    const item: IFooterItem = {
      id: entity.id,
      value: entity.value,
      linkType: entity.linkType,
      link: entity.link,
    };
    return item;
  }
  static fromEntityListResult(entity: any[]): IFooterItem[] {
    const result: IFooterItem[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(FooterItem.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
