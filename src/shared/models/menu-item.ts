

type MenuItemType = 'mega' | 'link' | 'dropdown';
type MenuItemMediaType = 'image' | 'icon';

export interface MenuItemMedia {
  type: MenuItemMediaType;
  value: string;
}

export interface IMenuItem {
  title: string;
  state: string;
  icon: MenuItemMedia;
  parentId: number | null;
  id: number;
  type: MenuItemType;
  children?: IMenuItem[];
}

export function getMenuType(typeNumber: string){
  let t: MenuItemType = 'link';

  switch (typeNumber) {
    case '1':
      t = 'link';
      break;
    case '2':
      t = 'dropdown';
      break;
    case '3':
      t = 'mega';
      break;

    default:
      break;
  }

  return t;
}

export class MenuItem {
  isMega!: boolean
  static fromEntityResult(entity: any): IMenuItem {
    const menu: IMenuItem = {
      id: entity.id,
      icon: entity.icon,
      parentId: entity.parentId,
      state: entity.state,
      type: getMenuType(entity.type),
      title: entity.title,
      children: entity.childrens && entity.childrens.length > 0 ? MenuItem.fromEntityListResult(entity.childrens):  undefined,
    };
    return menu;
  }
  static fromEntityListResult(entity: any[]): IMenuItem[] {
    const result: IMenuItem[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(MenuItem.fromEntityResult(element));
      });
    }


    return result;
  }
  constructor() {}


}


