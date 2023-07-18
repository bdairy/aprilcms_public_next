import { ContactUs } from '../commands/contact-us.command';
import { ApiResult } from '../models/api-result';
import { ContactGroup, IContactGroup } from '../models/contact.model';
import { IOurServices, OurServices } from '../models/our_services.model';
import { ISocialLink, SocialLink } from '../models/social-link';
import { ApiService } from './api.service';

export class ContactService {
  root = 'contact-us';

  async submitContactUs(form: any) {
    const api = new ApiService();
    try {
      return await api.postData(`${this.root}`, ContactUs.fromForm(form), null);
    } catch (error) {
      throw error;
    }
  }
  async getContactUs(locale: string): Promise<ApiResult<IContactGroup[]> | null> {
    try {
      const api = new ApiService();
      const result = await api.getData(`${this.root}/contact-details`, { 'Accept-Language': locale });
      if (result) {
        const services = ApiResult.fromEntityResult<IContactGroup[]>(
          result,
          ContactGroup.fromEntityListResult
        );
        return services;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
