import { OutgoingHttpHeader } from 'http';

export class ApiService {
  root = 'https://aprilcmspublicapi.azurewebsites.net/api/v1/';

  async getData(url: string, options: any) {
    try {
      const result = await fetch(`${this.root}${url}`, { cache: 'no-store', headers: options });

      const res = await result.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
  async postData(url: string, data: any, options: any) {
    try {
      //  Object.assign(options, { 'Accept': '*/*', 'Content-Type': 'application/json' });
      //   let headers: OutgoingHttpHeader = new OutGoin;
      const result = await fetch(`${this.root}${url}`, {
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      const res = result;//await result.json();
      if (res.status > 299) {
        throw res;
      }
      return res;
    } catch (error) {
      throw error;
    }
  }
}
