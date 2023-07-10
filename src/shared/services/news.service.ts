import { ApiResult } from '../components/api-result';
import { INewsItem, NewsItem } from '../models/news-item';
import { ApiService } from './api.service';

export class NewsService {
  root = 'news';

  async getLatestNews(locale: string): Promise<INewsItem[]> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`, { 'Accept-Language': locale });
      if (result) {
        const news = NewsItem.fromEntityListResult(result.items);
        return news;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
  async getNewsHighlites(locale: string): Promise<INewsItem[]> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}?PageIndex=1&PageSize=3`, {
        'Accept-Language': locale,
      });
      if (result) {
        const news = NewsItem.fromEntityListResult(result.items);
        return news;
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }
  async search(
    text: string = '',
    pageIndex: number = 1,
    pageSize: number,
    locale: string
  ): Promise<ApiResult<INewsItem[]> | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}?PageIndex=${pageIndex}&PageSize=${pageSize}&KeyWord=${text}`, {
        'Accept-Language': locale,
      });
      if (result) {
        const news =    ApiResult.fromEntityResult<INewsItem[]>(
          result,
          NewsItem.fromEntityListResult
        );
        return news;
      } else {
        return null
      }
    } catch (error) {
      throw error;
    }
  }
  async getNewsById(id: string, locale: string): Promise<INewsItem | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}/${id}`, { 'Accept-Language': locale });
      if (result) {
        const news = NewsItem.fromEntityResult(result);
        return news;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
