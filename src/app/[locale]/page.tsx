import Footer from '@/shared/components/footer/footer';
import PageSections from '@/shared/components/main/page-sections';
import Nav from '@/shared/components/nav';
import { FooterService } from '@/shared/services/footer.service';
import { MenuService } from '@/shared/services/menu.service';
import { PagesService } from '@/shared/services/pages.service';
import { SocialLinksService } from '@/shared/services/social-links.service';
import { Fragment } from 'react';

export default async function Home({ params }: { params: { locale: string; codes: string[] } }) {
  const menuService = new MenuService();
  const menu = await menuService.getMainMenu(params.locale);
  const service = new PagesService();
  const socialLinksService = new SocialLinksService();
  const socialLinks = await socialLinksService.getSocialLinks(params.locale);
  const page = await service.getPageByCode('home', params.locale);
  const footerService = new FooterService();
  const footerData = await footerService.getFooter(params.locale);
  return (
    <Fragment>
      <Nav menu={menu ?? []} locale={params.locale}></Nav>
      <div className="master-container">
        <PageSections page={page!} locale={params.locale} codes={['']} id={null} />
      </div>
      <Footer socaialLinks={socialLinks ?? []} data={footerData ?? []} locale={params.locale}></Footer>
    </Fragment>
  );
}
