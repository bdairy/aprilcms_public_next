import { ApiResult } from "../models/api-result";
import { IOurServices, OurServices } from "../models/our_services.model";
import { ISocialLink, SocialLink } from "../models/social-link";
import { ApiService } from "./api.service";

export class OurServicesService{

  root = 'our-services'
  async getOurServices(locale: string): Promise<ApiResult<IOurServices[]> | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}`, { 'Accept-Language': locale});
      if (result) {
        const services = ApiResult.fromEntityResult<IOurServices[]>(
          result,
          OurServices.fromEntityListResult
        );
        return services;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
  async getServiceById(id: string, locale: string): Promise<IOurServices | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}/${id}`, { 'Accept-Language': locale});
      if (result) {
        const services =
          OurServices.fromEntityResult(result)

        return services;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }

  }
}