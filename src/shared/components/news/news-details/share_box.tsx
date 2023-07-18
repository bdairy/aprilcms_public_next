'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import getURL from '@/shared/helpers/getUrl';
export default function ShareBox(params: { locale: string; title: string }) {
  const { locale, title } = params;
  const t = useTranslations('Index');
  const url = getURL(usePathname());
  return (
    <div className="share">
      <span>{t('share_to')}</span>
      <Link
        className="icon"
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        <Image
          src="/images/icons/social/facebook-primary.svg"
          alt={'Facebook'}
          width={30}
          height={30}></Image>
      </Link>
      <Link
        className="icon"
        target="_blank"
        href={`http://twitter.com/share?text=${title}&url=${url}`}>
        <Image
          src="/images/icons/social/twitter-primary.svg"
          alt={'Twitter'}
          width={30}
          height={30}
        />
      </Link>
      <Link
        className="icon"
        target="_blank"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
        <Image
          src="/images/icons/social/linkedin-primary.svg"
          alt={'LinkedIn'}
          width={30}
          height={30}
        />
      </Link>
    </div>
  );
}
