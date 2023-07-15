import { IPage } from '../../models/page/page.model';

export default function InnerBannerBlank(params: { page: IPage }) {
  const { page } = params;

  return (
    <div className="inner-banner blank">
      <div className="container">
        <h2>{page.title}</h2>
      </div>
    </div>
  );
}
