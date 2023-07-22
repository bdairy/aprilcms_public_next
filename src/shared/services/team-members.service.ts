import { ApiResult } from '../models/api-result';
import { INewsItem, NewsItem } from '../models/news-item';
import { ITeamMember, TeamMember } from '../models/team-member.model';
import { ApiService } from './api.service';

export class TeamMemberssService {
  root = 'team-members';

  async getTeamMembers(pageSize: number = 20,locale: string): Promise<ITeamMember[]> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}?PageIndex=1&PageSize=6`, { 'Accept-Language': locale });
      if (result) {
        const members = TeamMember.fromEntityListResult(result.items);
        return members;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }

}
