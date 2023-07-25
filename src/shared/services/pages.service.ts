import { ApiResult } from '../models/api-result';
import { Page, IPage } from '../models/page/page.model';
import { ApiService } from './api.service';

export class PagesService {
  url = 'pages';
  revalidateTime = 600;

  async getPageByCode(code: string, locale: string): Promise<IPage | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.url}/${code}`, { 'Accept-Language': locale });
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

  async search(
    text: string = '',

    locale: string
  ): Promise<IPage[] | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.url}/search?KeyWord=${text}`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result) {
        const news = Page.fromEntityListResult(result);

        return news;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
