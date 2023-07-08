import Nav from '@/shared/components/nav';
import { MenuService } from '@/shared/services/menu.service';
import { PagesService } from '@/shared/services/pages.service';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';


export default async function Home({ params }: { params: { locale: string, codes: string[]} }) {
  const menuService = new MenuService();
  const menu = await menuService.getMainMenu(params.locale);
  const service = new PagesService();
  const page = await service.getPageByCode('home', params.locale);
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
  )
}
