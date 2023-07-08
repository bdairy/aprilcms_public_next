import { Page, IPage } from "../models/page/page.model";
import { ApiService } from "./api.service";

export class PagesService{
  url = 'pages'


  async getPageByCode(code: string, locale: string): Promise<IPage|null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.url}/${code}`, {'Accept-Language': locale});
      if (result) {
        const page = Page.fromEntityResult(result);
        return page;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}