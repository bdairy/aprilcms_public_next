import { OurServicesService } from '@/shared/services/our-services.service';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BreadCrumb from '../breadcrumb';
import { getTranslations } from 'next-intl/server';

export default async function ServiceDetails(params: {
  locale: string;
  id: string | null;
  codes: string[];
}) {
  const { id, locale, codes } = params;
  const service = new OurServicesService();
  const t = await getTranslations('Index');

  if (!id) {
    return notFound();
  }
  const serviceDetails = await service.getServiceById(id, locale);
  if (!serviceDetails) {
    return notFound();
  }
  return (
    <div className="service-details">
      <div className="service-header">
        <div className="bg"></div>
        <BreadCrumb
          codes={[ 'about/our_services', 'service_details']}
          locale={locale}
          routeNames={[ t('our_services'), serviceDetails.name]}></BreadCrumb>
        <div className="title container">
          <h2>{serviceDetails.name}</h2>
        </div>
        <div className="image container">
          <Image
            src={serviceDetails.image}
            alt={serviceDetails.name}
            width={300}
            height={300}></Image>
        </div>
      </div>
      <div
        className="service-body container"
        dangerouslySetInnerHTML={{ __html: serviceDetails.description }}></div>
    </div>
  );
}
