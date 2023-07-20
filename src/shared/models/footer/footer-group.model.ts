import { FooterItem, IFooterItem } from "./footer-item";

export interface IFooterGroup {
  id: number;
  name: string;
  items: IFooterItem[]
}
export class FooterGroup {
  static fromEntityResult(entity: any): IFooterGroup {
    const group: IFooterGroup = {
      id: entity.id,
      name: entity.name,
      items: FooterItem.fromEntityListResult(entity.items)
    };
    return group;
  }
  static fromEntityListResult(entity: any[]): IFooterGroup[] {
    const result: IFooterGroup[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(FooterGroup.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
