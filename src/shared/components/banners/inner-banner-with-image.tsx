import { ISection } from '@/shared/models/page/section.model';
import { IPage } from '../../models/page/page.model';
import { Fragment } from 'react';
import Image from 'next/image';

export default function InnerBannerWithImage(params: { section: ISection }) {
  const { section } = params;
  const style = {
    backgroundImage: `url(${section.data!.media!.banner!})`,
  };
  return (
    <Fragment>
      <div className="inner-banner with-image" style={style}></div>
      <div className="inner-baner-below-title container">
        <Image src={section.data!.media!.image!} alt="" width={100} height={100} />
        <h2>{section.data!.title}</h2>
      </div>
    </Fragment>
  );
}
