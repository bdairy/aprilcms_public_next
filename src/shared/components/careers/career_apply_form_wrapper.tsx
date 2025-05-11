'use client';
import { ICareersItem } from '@/shared/models/careers/career-item';
import CareerApplyForm from './career_apply_form';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { IJoiningDate } from '@/shared/models/careers/joining-date.model';

export default  function CareerApplyFormWrapper(params: {
  vacancy: ICareersItem;
  joiningDates: IJoiningDate[];
  locale: string;
}) {
  const { vacancy, joiningDates, locale } = params;
  const key = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY;


  return (

      <GoogleReCaptchaProvider reCaptchaKey={key ?? ''}>

      <div className="container">
          <CareerApplyForm
            careerId={vacancy.id}
            locale={locale}
            joiningDates={joiningDates ?? []}></CareerApplyForm>
        </div>
        </GoogleReCaptchaProvider>

  );
}
