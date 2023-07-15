import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';
import { ISocialLink } from '../models/social-link';

export default function Footer(params: { locale: string; socaialLinks: ISocialLink[] }) {
  const today = moment();
  return (
    <footer className="footer">
      <div className="wrapper container">
        <div className="logo"></div>
        <div className="menu-wrapper">
          <div className="menu-block">
            <div className="title">About Us</div>
            <ul className="links">
              <li className="link">
                <Link href="/about/mission_and_vision" locale={params.locale}>
                  Vision and Mission
                </Link>
              </li>
              <li className="link">
                <Link href="/training_center" locale={params.locale}>
                  Vision and Mission
                </Link>
              </li>
              <li className="link">
                <Link href="/about/our_academies" locale={params.locale}>
                  Our Academies
                </Link>
              </li>
              <li className="link">
                <Link href="/about/our_services" locale={params.locale}>
                  Our Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-block">
            <div className="title">Training</div>
            <ul className="links-col">
              <li className="link">AAEI_Training@alalineducational.ae</li>
              <li className="link">Contact Information</li>
            </ul>
          </div>
          <div className="menu-block">
            <div className="title">Contact us</div>
            <ul className="links-col">
              <li className="link">+971 2 651 5589</li>
              <li className="link">info@alalineducational.ae</li>
            </ul>
          </div>
          <div className="menu-block">
            <div className="title">Site Links</div>
            <ul className="links-col">
              <ul className="link">Copyrights {today.format('YYYY')}</ul>
              <ul className="link">Terms & Conditions</ul>
              <ul className="link">Sitemap</ul>
            </ul>
          </div>
        </div>
        <div className="last-line">
          <div className="social-links">
            <div className="title">Follow us</div>
            <div className="icons">
              {params.socaialLinks &&
                params.socaialLinks.map((link: ISocialLink) => (
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
          <Image src="/images/apple-cert.svg" width={300} height={50} alt="apple certificate" className="apple-logo" />
        </div>
      </div>
    </footer>
  );
}
