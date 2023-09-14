import { PagesService } from '@/shared/services/pages.service';
import { url } from 'inspector';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const service = new PagesService();
  let results = (await service.getSiteMap('en')) ?? [];
  let map: MetadataRoute.Sitemap = [];
  map.push({
    url: 'https://aaei.ae',
    lastModified: new Date(),
  });
  results.forEach((r) => {
    map.push({
      url: `https://aaei.ae/${r.state}`,
      changeFrequency: 'weekly',
    });
  });
  return map;
}
