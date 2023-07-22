import { LanguageObject } from "./languange-object.model";

export interface ITeamMember {
  id: string;
  image: string;
  name: LanguageObject;
  position: LanguageObject;
}
export class TeamMember {
  static fromEntityResult(entity: any): ITeamMember {
    const member: ITeamMember = {
      id: entity.id,
      name: LanguageObject.fromFields(entity.name.ar, entity.name.en),
      position: LanguageObject.fromFields(entity.position.ar, entity.position.en),
      image: entity.avatar,
    };
    return member;
  }
  static fromEntityListResult(entity: any[]): ITeamMember[] {
    const result: ITeamMember[] = [];
    if (entity && entity.length) {
      entity.forEach((element) => {
        result.push(TeamMember.fromEntityResult(element));
      });
    }
    return result;
  }
  constructor() {}
}
