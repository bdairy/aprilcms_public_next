export class ApiService {
  root = process.env.NEXT_PUBLIC_API_ROOT;
  revalidateTime = parseInt(process.env.NEXT_PUBLIC_CASH_TIME ?? '3600');

  async getData(url: string, options: any, revalidate: number = this.revalidateTime) {
    try {
      const result = await fetch(`${this.root}${url}`, {
        next: { revalidate: revalidate },
        headers: options,
      });

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
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      const res = result; //await result.json();
      if (res.status > 299) {
        throw res;
      }
      return res;
    } catch (error) {
      throw error;
    }
  }
}
