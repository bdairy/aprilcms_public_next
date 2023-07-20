import { FooterGroup, IFooterGroup } from "../models/footer/footer-group.model";
import { ApiService } from "./api.service";

export class FooterService{

  root = 'footer-details'
  async getFooter(locale: string): Promise<IFooterGroup[]|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`, { 'Accept-Language': locale});
      if (result) {
        const menu = FooterGroup.fromEntityListResult(result.items);
        return menu;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}