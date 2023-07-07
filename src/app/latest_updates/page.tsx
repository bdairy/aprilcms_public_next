import { IPage } from '@/shared/models/page/page.model';
import { PagesService } from '@/shared/services/pages.service';

export default async function LatestUpdates() {
  const service = new PagesService();
  const page = await service.getPageByCode('latest_updates');

  return (
    <main>
      <h2>{page?.title}</h2>
      <ul>
        {page?.sections.map((sec) => (
          <li key={sec.id}>{sec.component ?? 'No Component'}</li>
        ))}
      </ul>
    </main>
  );
}
