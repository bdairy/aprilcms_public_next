export interface IContactItem {
  id: string;
  title: string;
  value: string;
  icon: string;
  groupId: number;
  orderNumber: number | null;
}
export class ContactItem {
  static fromEntityResult(entity: any): IContactItem {
    const cont: IContactItem = {
      id: entity.id,
      title: entity.title,
      icon: entity.icon,
      value: entity.value,
      groupId: entity.groupId,
      orderNumber: entity.orderNumber,
    };
    return cont;
  }
  static fromEntityListResult(entity: any[]): IContactItem[] {
    const result: IContactItem[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(ContactItem.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}

export interface IContactGroup {
  id: string;
  title: string;
  contacts: IContactItem[];
}
export class ContactGroup {
  static fromEntityResult(entity: any): IContactGroup {
    const group: IContactGroup = {
      id: entity.id,
      title: entity.title,
      contacts: ContactItem.fromEntityListResult(entity.contacts),
    };
    return group;
  }
  static fromEntityListResult(entity: any[]): IContactGroup[] {
    const result: IContactGroup[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(ContactGroup.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
