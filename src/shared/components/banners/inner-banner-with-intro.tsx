import { ISection } from '@/shared/models/page/section.model';
import { IPage } from '../../models/page/page.model';

export default function InnerBannerWithIntro(params: { section: ISection }) {
  const { section } = params;
  const style = {
    backgroundImage: `url(${section.data?.media?.image})`,
  };
  return (
    <div className="inner-banner" style={style}>
      <div className="container">
        <h2>{section.data?.title} </h2>
        <div className="intro" dangerouslySetInnerHTML={{ __html: section.data!.body ?? '' }}></div>
      </div>
    </div>
  );
}
