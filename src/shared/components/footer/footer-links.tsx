'use client';
import { IFooterGroup } from '@/shared/models/footer/footer-group.model';
import { IFooterItem } from '@/shared/models/footer/footer-item';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import { Fragment } from 'react';

export default function FooterLinks(params: { data: IFooterGroup[]; locale: string }) {
  const { data, locale } = params;
  const t = useTranslations('Index');
  function FooterLink(params: { item: IFooterItem; locale: string }) {
    let url = '';
    const { item } = params;
    switch (item.linkType.toLowerCase()) {
      case 'page':
        url = `/${item.link}`;
        break;
      case 'phone':
      case 'mobile':
        url = `tel:${item.link}`;
        break;
      case 'email':
        url = `mailTo:${item.link}`;
        break;

      default:
        url = item.link;
        break;
    }

    return (
      <Link href={url} title={item.value}>
        {item.value}
      </Link>
    );
  }
  return (
    <Fragment>
      {data.map((group: IFooterGroup) => (
        <div key={group.id} className="menu-block">
          <div className="title">{group.name}</div>
          <ul className="links-col">
            {group.items.map((item: IFooterItem) => (
              <li
                key={item.id}
                className="link"
                dir={item.linkType.toLowerCase() === 'phone' ? 'ltr' : undefined}>
                <FooterLink item={item} locale={params.locale}></FooterLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Fragment>
  );
}
