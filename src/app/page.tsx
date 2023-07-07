import { PagesService } from '@/shared/services/pages.service';
import Image from 'next/image'

export default async function Home() {
  const service = new PagesService();
  const page = await service.getPageByCode('home');
  return (
    <main>
    <h2>{page?.title}</h2>
    <ul>
      {page?.sections.map((sec) => (
        <li key={sec.id}>{sec.component ?? 'No Component'}</li>
      ))}
    </ul>
  </main>
  )
}
