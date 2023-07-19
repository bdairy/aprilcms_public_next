import { ContactService } from '@/shared/services/contact.service';
import { Fragment } from 'react';
import NoResults from '../no_results';
import { IContactItem } from '@/shared/models/contact.model';
import ContactForm from './contact-form';

export default async function ContactUs(params: { locale: string }) {

  const service = new ContactService();
  const contactInfo = await service.getContactUs(params.locale);
  let contacts: IContactItem[] = [];
  let position: any;

  if (contactInfo && contactInfo.value && contactInfo.value.length > 0) {
    contacts = contactInfo?.value[0].contacts ?? [];
  }

  if (contacts && contacts.length >= 4) {
    const vals = contacts[3].value.split(',');
    if (vals.length === 2) {
      const lat = parseFloat(vals[0]);
      const lng = parseFloat(vals[1]);
      position = { lat: lat, lng: lng };
    }
  }

  if (contacts.length === 0) {
    return <div></div>;
  }

  return (
    <Fragment>
      <div className="contact-cards container">
        <div className="contact-card">
          <div className="group single">
            <h3 className="title">{contacts[0].title}</h3>
            <div
              className="value"
              dangerouslySetInnerHTML={{
                __html: contacts[0].value.replaceAll('..', '<br/>'),
              }}></div>
          </div>
        </div>
        <div className="contact-card">
          {contacts.slice(1, 3).map((item, index) => (
            <div key={index} className="group">
              <h3 className="title">{item.title}</h3>
              <p className="value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <ContactForm position={position} locale={params.locale}></ContactForm>
    </Fragment>
  );
}
