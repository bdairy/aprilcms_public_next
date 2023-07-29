import { ISection } from '../models/page/section.model';
import { BannerService } from '../services/banner.service';

export default async function MainBanner(params: { section: ISection; locale: string }) {
  const service = new BannerService();
  const banner = await service.getHomeBanner(params.locale);
  return (
    <div className="home-banner bg-gray-300">
      {banner && (
        <video autoPlay={true} loop={false} muted>
          <source src={banner.video!} type="video/mp4" />
        </video>
      )}
      <div className="banner-bg "></div>
      <div className="content-holder">
        <div className="container">
          <div className="slide-content">
            <h2>{banner?.title}</h2>
            <p>{banner?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
