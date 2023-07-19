'use client';

import MapCard from './map-card';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import TheForm from './theform';

export default function ContactForm(params: { position: { lat: any; lng: any }; locale: string }) {
  const key = process.env.GOOGLE_RECAPTCHA_KEY;

  return (
    <div className="contact-details container">
      <h2 className="title">Stay in touch</h2>
      <div className="form-wrapper">
        <GoogleReCaptchaProvider reCaptchaKey={key ?? ''}>
          <TheForm locale={params.locale}></TheForm>
        </GoogleReCaptchaProvider>

        {params.position && <MapCard center={params.position}></MapCard>}
      </div>
    </div>
  );
}
