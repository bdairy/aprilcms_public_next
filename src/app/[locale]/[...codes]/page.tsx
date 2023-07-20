import InnerBanner from '@/shared/components/banners/inner-banner';
import InnerBannerBlank from '@/shared/components/banners/inner-banner-blank';
import Footer from '@/shared/components/footer/footer';
import PageSections from '@/shared/components/main/page-sections';
import Nav from '@/shared/components/nav';
import { MenuService } from '@/shared/services/menu.service';
import { NewsService } from '@/shared/services/news.service';
import { OurServicesService } from '@/shared/services/our-services.service';
import { PagesService } from '@/shared/services/pages.service';
import { SocialLinksService } from '@/shared/services/social-links.service';
import { Metadata } from 'next';
import { Fragment } from 'react';

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { locale: string; codes: string[] };
  searchParams: { [key: string]: string | undefined };
}) {
  const codes = params.codes;
  const service = new PagesService();
  let id: string | null;
  let meta: Metadata = {};
  const currentCode = codes[codes.length - 1];
  if (searchParams) {
    id = searchParams['id'] ?? null;
  } else {
    id = null;
  }

  try {
    if (id) {
      if (currentCode === 'news_details') {
        const newsService = new NewsService();
        const article = await newsService.getNewsById(id, params.locale);
        if (!article) {
          meta = {
            title: 'Not Found',
            description: 'The page you requested does not exist',
          };
        } else {
          meta = {
            title: article?.title ?? '',
            description: article?.introduction ?? '',
            alternates: {
              canonical: `/latest_updates/news_details?${id}`,
              languages: {
                en: `/en/latest_updates/news_details?${id}`,
                ar: `/ar/latest_updates/news_details?${id}`,
              },
            },
            openGraph: {
              type: 'website',
              url: `/latest_updates/news_details?${id}`,
              title: article?.title,
              description: article?.introduction ?? '',
              siteName: 'Al Ain Academy',
              images: [
                {
                  url: article?.image ?? '',
                },
                {
                  url: '/images/logo-main.svg',
                },
              ],
            },
          };
        }
      } else if (currentCode === 'service_details') {
        const servicesService = new OurServicesService();
        const service = await servicesService.getServiceById(id, params.locale);
        if (!service) {
          meta = {
            title: 'Not Found',
            description: 'The page you requested does not exist',
          };
        } else {
          meta = {
            title: service?.name ?? '',
            description: service?.description ?? '',
            alternates: {
              canonical: `/about/service_details?${id}`,
              languages: {
                en: `/en/about/service_details?${id}`,
                ar: `/ar/about/service_details?${id}`,
              },
            },
            openGraph: {
              type: 'website',
              url: `/about/service_details?/${id}`,
              title: service?.name,
              description: service?.description,
              images: [
                {
                  url: service?.image ?? '',
                },
              ],
            },
          };
        }
      }
    } else {
      const page = await service.getPageByCode(currentCode, params.locale);
      if (!page) {
        meta = {
          title: 'Not Found',
          description: 'The page you requested does not exist',
        };
      } else {
        meta = {
          title: page.metaTags?.title ?? '',
          description: page.metaTags?.description ?? '',
          alternates: {
            canonical: `/${codes.join('/')}`,
            languages: {
              ar: `/ar/${codes.join('/')}`,
              en: `/en${codes.join('/')}`,
            },
          },
          openGraph: {
            type: 'website',
            url: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ''),
            title: page.metaTags?.title ?? '',
            description: page.metaTags?.description ?? '',

            siteName: 'Al Ain Academy',
            images: [
              {
                url: page.coverImageUrl ?? '',
              },
            ],
          },
        };
      }
    }
    return meta;
  } catch (error) {
    console.log(error);
    return {
      title: 'Not Found',
      description: 'The page you requested does not exist',
    };
  }
}

export default async function Inner({
  params,
  searchParams,
}: {
  params: {
    locale: string;
    codes: string[];
  };
  searchParams: { [key: string]: string | undefined };
}) {
  const codes = params.codes;
  const menuService = new MenuService();

  const service = new PagesService();
  let currentCode;
  let id: string | null;
  currentCode = codes[codes.length - 1];
  if (searchParams) {
    id = searchParams['id'] ?? null;
  } else {
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
        <PageSections
          page={page!}
          locale={params.locale}
          codes={params.codes}
          id={id}
          searchParams={searchParams}
        />
      </div>
      <Footer socaialLinks={socialLinks ?? []} locale={params.locale}></Footer>
    </Fragment>
  );
}
