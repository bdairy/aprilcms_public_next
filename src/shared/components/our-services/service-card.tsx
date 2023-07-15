import { truncate } from '@/shared/helpers/truncate';
import { IOurServices } from '@/shared/models/our_services.model';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ServiceCard(params: {
  service: IOurServices;
  index: number;
  locale: string;
}) {
  const { service, index, locale } = params;
  const t = useTranslations('Index');
  const style = {
    backgroundImage: `url(${service.image})`,
  };
  const formatNumber = (val: number) => {
    return String(val.toLocaleString()).padStart(2, '0');
  };
  return (
    <div className={`service-card ${(index + 1) % 2 === 0 ? 'even' : ''}`}>
      <div className="card-wrapper container">
        <div className="content-wrapper">
          <span className="index">{ formatNumber(index + 1)}</span>

          <div className="content">
            <div className="title">
              <h2>{service.name}</h2>
            </div>
            <div className="desc" dangerouslySetInnerHTML={{ __html: truncate( service.description, 500)  }}></div>
            <Link
              className="btn-txt primary"
              href={`/about/service_details/${service.id}`}
              locale={locale}>
              {t('more')}
            </Link>
          </div>
        </div>
        <div className="image" style={style}></div>
      </div>
    </div>
  );
}
