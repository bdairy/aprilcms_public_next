import InnerBanner from '@/shared/components/banners/inner-banner';
import InnerBannerBlank from '@/shared/components/banners/inner-banner-blank';
import Footer from '@/shared/components/footer';
import PageSections from '@/shared/components/main/page-sections';
import Nav from '@/shared/components/nav';
import { MenuService } from '@/shared/services/menu.service';
import { PagesService } from '@/shared/services/pages.service';
import { SocialLinksService } from '@/shared/services/social-links.service';
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
  let currentCode;
  let id: string | null;
  const lastCode = codes[codes.length - 1];
  if (codes.length > 2) {
    currentCode = codes[1];
    id = lastCode;
  } else {
    currentCode = lastCode;
    id = null;
  }

  const page = await service.getPageByCode(currentCode, params.locale);
  const menu = await menuService.getMainMenu(params.locale);
  const socialLinksService = new SocialLinksService();
  const socialLinks = await socialLinksService.getSocialLinks(params.locale);

  return (
    <Fragment>
      <Nav menu={menu ?? []} locale={params.locale}></Nav>
      {page?.coverImageUrl && <InnerBanner page={page}></InnerBanner>}
      {page?.template.code == 'blank_banner' && <InnerBannerBlank page={page}></InnerBannerBlank>}
      <div className="master-container">
        <PageSections page={page!} locale={params.locale} codes={params.codes} id={id} />
      </div>
      <Footer socaialLinks={socialLinks ?? []} locale={params.locale}></Footer>
    </Fragment>
  );
}
