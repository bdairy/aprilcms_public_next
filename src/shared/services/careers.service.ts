import moment from 'moment';
import { ApiResult } from '../models/api-result';
import { CareersItem, ICareersItem } from '../models/careers/career-item';
import { ApiService } from './api.service';
import { JobApplicationCommand } from '../commands/apply-career.commnd';
import { IJoiningDate, JoiningDate } from '../models/careers/joining-date.model';
import { CareerTarget, ICareerTarget } from '../models/careers/career-target';

export class CareersService {
  root = 'careers';
  revalidateTime = 0;

  async getCareers(
    categoryId: number | null = null,
    pageIndex: number = 1,
    pageSize: number = 4,
    locale: string
  ): Promise<ApiResult<ICareersItem[]> | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}/job-posting?CategoryId=${categoryId ?? ''}&PageIndex=${pageIndex}&PageSize=${pageSize}`,
        { 'Accept-Language': locale },
        this.revalidateTime
      );
      if (result) {
        const careers = ApiResult.fromEntityResult<ICareersItem[]>(
          result,
          CareersItem.fromEntityListResult
        );

        return careers;
      } else {
        return ApiResult.fromEntityResult<ICareersItem[]>(
          { items: [] },
          CareersItem.fromEntityListResult
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getCareerHighlites(locale: string, pageSize: number = 3): Promise<ICareersItem[]> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}?PageIndex=1&PageSize=${pageSize}`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result) {
        const careers = CareersItem.fromEntityListResult(result.items);
        return careers;
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
  ): Promise<ApiResult<ICareersItem[]> | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}?PageIndex=${pageIndex}&PageSize=${pageSize}&KeyWord=${text}`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result.status === 200) {
        const careers = ApiResult.fromEntityResult<ICareersItem[]>(
          result,
          CareersItem.fromEntityListResult
        );
        return careers;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async getCareerProposedJoiningDates(locale: string): Promise<IJoiningDate[] | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}/lookups/proposed-joining-types`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result) {
        return JoiningDate.fromEntityListResult(result);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
  async getCareerTargets(locale: string): Promise<ICareerTarget[] | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}/lookups/job-posting-category`,
        {
          'Accept-Language': locale,
        },
        this.revalidateTime
      );
      if (result) {
        return  CareerTarget.fromEntityListResult(result);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async getCareerById(id: string, locale: string): Promise<ICareersItem | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(
        `${this.root}/job-posting/${id}`,
        { 'Accept-Language': locale },
        this.revalidateTime
      );

      if (result) {
        const career = CareersItem.fromEntityResult(result);
        return career;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async applyCareer(form: any) {
    const api = new ApiService();
    try {
      return await api.postFormData(
        `${this.root}/job-applications`,
        JobApplicationCommand.toFormData(form),
        {}
      );
    } catch (error) {
      throw error;
    }
  }
}
