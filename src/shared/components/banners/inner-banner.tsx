import { IPage } from '../../models/page/page.model';

export default function InnerBanner(params: { page: IPage;  }) {
  const { page } = params;
  const style = {
    backgroundImage: `url(${page.coverImageUrl})`,
  };
  return (
    <div className="inner-banner" style={style}>
      {page.template.code !== 'image_only' && (
        <div className="container">
          <h2>{page.title} </h2>
        </div>
      )}
    </div>
  );
}
