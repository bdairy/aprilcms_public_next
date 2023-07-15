import { OurServicesService } from '@/shared/services/our-services.service';
import ServiceCard from './service-card';

export default async function OurServicesSection(params: { locale: string; classes: string }) {
  const service = new OurServicesService();
  const services = await service.getOurServices(params.locale);

  return (
    <div className="our-services">
      <div className="mt-40">
        {services?.value.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} locale={params.locale}></ServiceCard>
        ))}
      </div>
    </div>
  );
}
