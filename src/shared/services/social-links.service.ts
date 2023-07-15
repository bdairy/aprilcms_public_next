import { ISocialLink, SocialLink } from "../models/social-link";
import { ApiService } from "./api.service";

export class SocialLinksService{

  root = 'social-links'
  async getSocialLinks(locale: string): Promise<ISocialLink[]|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`, { 'Accept-Language': locale});
      if (result) {
        const menu = SocialLink.fromEntityListResult(result.items);
        return menu;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}