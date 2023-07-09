import { BannerSlide, IBannerSlide } from "../models/banner.model";
import { ApiService } from "./api.service";

export class BannerService{
  root = 'banners';

  async getHomeBanner( locale: string): Promise<IBannerSlide | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`, {'Accept-Language': locale});
      if (result) {
        const banner = BannerSlide.fromEntityResult(result.items[0]);
        return banner;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}