

export class ApiService {
  root = 'https://aprilcmspublicapi.azurewebsites.net/api/v1/';

  async getData(url: string, options: any) {


    try {
      const result = await fetch(`${this.root}${url}`, {cache: 'no-store', headers: options });

      const res = await result.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
  async postData(url: string,data: any, options: any) {


    try {
      const result = await fetch(`${this.root}${url}`, {cache: 'no-store', headers: options, method: 'POST' });

      const res = await result.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
