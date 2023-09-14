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

  async search(locale: string, text: string = '', pageSize: number = 5): Promise<IPage[] | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.url}/search?KeyWord=${text}&pageSize=${pageSize}&pageIndex=1`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result) {
        const news = Page.fromEntityListResult(result.items);

        return news;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async getSiteMap(locale: string): Promise<IPage[] | null> {
    let pages = await this.search(locale, '', 500);
    if (!pages) {
      return null;
    }
    let result = pages.filter((p) => {
      return p.code !== 'service_details';
    });

    result.sort((a, b) => a.title.localeCompare(b.title));

    let sorted: IPage[] = result.filter((f) => f.parentId === null);
    let finalResult: IPage[] = [];
    sorted.forEach((p) => {
      finalResult.push(p);
    finalResult =  finalResult.concat(result.filter((r) => r.parentId == p.id));
    });

    return finalResult;
  }
}
