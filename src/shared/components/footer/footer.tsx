'use client';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { ISocialLink } from '../../models/social-link';
import { FooterService } from '../../services/footer.service';
import FooterLinks from './footer-links';
import { IFooterGroup } from '@/shared/models/footer/footer-group.model';
import { useTranslations } from 'next-intl';

export default async function Footer(params: { locale: string; socaialLinks: ISocialLink[], data: IFooterGroup[] }) {
  const today = moment();
  const { data, socaialLinks } = params;
  const t  = useTranslations('Index')


  return (
    <footer className="footer">
      <div className="wrapper container">
        <div className="logo"></div>
        <div className="menu-wrapper">
          {data && <FooterLinks data={data} locale={params.locale}></FooterLinks>}

          <div className="menu-block">
            <div className="title">Site Links</div>
            <ul className="links-col">
              <li className="link">Copyrights {today.format('YYYY')}</li>
              <li className="link">Terms & Conditions</li>
              <li className="link">Sitemap</li>
            </ul>
          </div>
        </div>
        <div className="last-line">
          <div className="social-links">
            <div className="title">{t('follow_us')}</div>
            <div className="icons">
              {socaialLinks &&
                socaialLinks.map((link: ISocialLink) => (
                  <div className="icon " key={link.id}>
                    <Link href={link.link} target="_blank">
                      <Image
                        src={`/images/icons/social/${link.icon}.svg`}
                        alt={link.name}
                        width={28}
                        height={28}
                      />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <Image
            src="/images/apple-cert.svg"
            width={300}
            height={50}
            alt="apple certificate"
            className="apple-logo"
          />
        </div>
      </div>
    </footer>
  );
}
