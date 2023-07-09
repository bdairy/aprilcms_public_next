import { IStatistics, Statistics } from "../models/statistics.model";
import { ApiService } from "./api.service";

export class StatisticsService{
  url = 'client-Statistics';


  async getStatisticsByPageCode(pageCode: string,  locale: string, pageSize : number = 5,): Promise<IStatistics[]|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.url}?Reference=${pageCode}&PageSize=${pageSize}`, {'Accept-Language': locale});
      if (result) {
        const res = Statistics.fromEntityListResult(result.items);
        return res;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}