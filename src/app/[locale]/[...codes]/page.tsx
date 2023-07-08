import Nav from '@/shared/components/nav';
import { MenuService } from '@/shared/services/menu.service';
import { PagesService } from '@/shared/services/pages.service';
import { Fragment } from 'react';
export async function generateMetadata({
  params,
}: {
  params: { locale: string; codes: string[] };
}) {
  const codes = params.codes;
  const service = new PagesService();
  const currentCode = codes[codes.length - 1];

  try {
    const page = await service.getPageByCode(currentCode, params.locale);
    if (!page) {
      return {
        title: 'Not Found',
        description: 'The page you requested does not exist',
      };
    }

    return {
      title: page.metaTags?.title ?? '',
      description: page.metaTags?.description ?? '',
    };
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page you requested does not exist',
    };
  }
}

export default async function Inner({ params }: { params: { locale: string; codes: string[] } }) {
  const codes = params.codes;
  const menuService = new MenuService();

  const service = new PagesService();
  const currentCode = codes[codes.length - 1];
  const page = await service.getPageByCode(currentCode, params.locale);
  const menu = await menuService.getMainMenu(params.locale);

  return (
    <Fragment>
      <Nav menu={menu ?? []} locale={params.locale}></Nav>
      <div className="master-container">
        <main>
          <h2>{page?.title}</h2>
          <ul>
            {page?.sections.map((sec) => (
              <li key={sec.id}>{sec.component ?? 'No Component'}</li>
            ))}
          </ul>
        </main>
      </div>
    </Fragment>
  );
}
