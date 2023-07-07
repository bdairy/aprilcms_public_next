import { PagesService } from '@/shared/services/pages.service';

export async function generateMetadata({ params }: { params: { codes: string[] } }) {
  const codes = params.codes;
  console.log(codes);
  const service = new PagesService();
  const currentCode = codes[codes.length - 1];
  try {
    const page = await service.getPageByCode(currentCode);
    if (!page) {
      return {
        title: 'Not Found',
        description: 'The page you requested does not exist',
      };
    }

    return {
      title: page.metaTags?.title ?? '',
      description: page.metaTags?.description ?? ''

    }
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page you requested does not exist',
    };
  }
}

export default async function Inner({ params }: { params: { codes: string[] } }) {
  const codes = params.codes;
  console.log(codes);
  const service = new PagesService();
  const currentCode = codes[codes.length - 1];
  const page = await service.getPageByCode(currentCode);

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
