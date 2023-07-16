import { OurServicesService } from '@/shared/services/our-services.service';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BreadCrumb from '../breadcrumb';

export default async function ServiceDetails(params: {
  locale: string;
  id: string | null;
  codes: string[];
}) {
  const { id, locale, codes } = params;
  const service = new OurServicesService();
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
          codes={['about', 'our_services']}
          locale={locale}
          routeNames={['our_services', serviceDetails.name]}></BreadCrumb>
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
