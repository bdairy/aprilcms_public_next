export class ApiService {
  root = 'https://aprilcmspublicapi.azurewebsites.net/api/v1/';

  async getData(url: string) {
    try {
      const result = await fetch(`${this.root}/${url}`, {cache: 'no-store', });

      const res = await result.json();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
