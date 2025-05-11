export interface IJoiningDate {
  name: string;
  id: number;
}
export class JoiningDate {
  static fromEntityResult(entity: any): IJoiningDate {
    const jd: IJoiningDate = {
      name: entity.name,
      id: entity.id,
    };
    return jd;
  }
  static fromEntityListResult(entity: any[]): IJoiningDate[] {
    const result: IJoiningDate[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(JoiningDate.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
