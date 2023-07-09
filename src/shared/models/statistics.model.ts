

export type StatistcType = 'number' | 'percentage';

export interface IStatistics {
  id: string;
  name: string;
  description: string;
  value: string;
  type: StatistcType;
}
export class Statistics {
  static fromEntityResult(entity: any): IStatistics {
    const st: IStatistics = {
      id: entity.id,
      name: entity.name,
      description: entity.description,
      value: entity.value,
      type: `${entity.type}`.toLowerCase() as StatistcType,
    };
    return st;
  }
  static fromEntityListResult(entity: any[]): IStatistics[] {
    const result: IStatistics[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(Statistics.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
