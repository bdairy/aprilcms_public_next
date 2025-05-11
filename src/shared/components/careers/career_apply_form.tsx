'use client';
import { CareersService } from '@/shared/services/careers.service';
import moment from 'moment';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Controller, useForm } from 'react-hook-form';
import RHFileUpload from '../file-upload-control';
import { IJoiningDate, JoiningDate } from '@/shared/models/careers/joining-date.model';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { Toast } from 'flowbite-react';

export default function CareerApplyForm(params: {
  locale: string;
  careerId: string;
  joiningDates: IJoiningDate[];
}) {
  const { careerId, locale, joiningDates } = params;
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      visaStatus: true,
      hasEducationalCertificate: true,
      proposedJoiningDate: 10,
      joiningDate: null,
      coverLetterFile: null,
      cvFile: null,
    },
  });
  const { executeRecaptcha } = useGoogleReCaptcha();
  const t = useTranslations('careers_form');
  const router = useRouter();

  const handleSubmitContact = useCallback(
    async (data: any) => {
      setLoading(true);
      setIsSuccess(false);
      setIsError(false);
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        setLoading(false);
        return;
      }

      try {
        const token = await executeRecaptcha('career_apply');

        Object.assign(data, { token: token });
        Object.assign(data, { jobId: careerId });
        const service = new CareersService();
        await service.applyCareer(data);
        setLoading(false);
        setIsSuccess(true);
        setIsError(false);
        reset();
        //
        toast.success(t('success'), {
          duration: 4000,
          position: 'bottom-center',

        });
        setTimeout(() => router.back(), 4000); // 1-second delay

      } catch (error) {
        console.log(error);
        toast.error(t('error'), {
          duration: 4000,
          position: 'bottom-center',

        });
        setIsSuccess(false);
        setIsError(true);
        setLoading(false);
      }
    },
    [executeRecaptcha, reset, careerId]
  );
  return (
    <form onSubmit={handleSubmit(handleSubmitContact)}>
      <div className="career-form">
        <div className="form-field">
          <span className="label">{t('first_name')}</span>
          <input
            type="text"
            placeholder={t('first_name')}
            id="firstName"
            className={errors.firstName ? 'invalid' : ''}
            {...register('firstName', { required: t('first_name_required') })}
          />
          <div className="text-red-500">{errors.firstName?.message}</div>
        </div>
        <div className="form-field">
          <span className="label">{t('last_name')}</span>
          <input
            type="text"
            placeholder={t('last_name')}
            id="lastName"
            className={errors.firstName ? 'invalid' : ''}
            {...register('lastName', { required: t('last_name_required') })}
          />
          <div className="text-red-500">{errors.lastName?.message}</div>
        </div>
        <div className="form-field">
          <span className="label">{t('email')}</span>
          <input
            type="email"
            placeholder={t('email')}
            id="email"
            className={errors.email ? 'invalid' : ''}
            {...register('email', {
              required: t('email_required'),
              pattern: {
                message: t('email_invalid'),
                value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
              },
            })}
          />
          <div className="text-red-500">{errors.email?.message}</div>
        </div>
        <div className="form-field">
          <span className="label">{t('phone')}</span>
          <input
            type="text"
            placeholder={t('phone')}
            id="phoneNumber"
            className={errors.phoneNumber ? 'invalid' : ''}
            {...register('phoneNumber', {
              required: t('phone_required'),
            })}
          />
          <div className="text-red-500">{errors.phoneNumber?.message}</div>
        </div>
        <div className="form-field">
          <span className="label">{t('joining_date')}</span>
          <Controller
            name="proposedJoiningDate"
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <select
                  {...field}
                  className={`border px-3 py-2 w-full rounded ${
                    errors.proposedJoiningDate ? 'border-red-500' : ''
                  }`}>
                  {joiningDates.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                      {opt.name}
                    </option>
                  ))}
                </select>
                {errors.proposedJoiningDate && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.proposedJoiningDate.message}
                  </div>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Controller
            name="visaStatus"
            control={control}
            render={({ field }) => (
              <div className="mb-4">
                <label className="block mb-1 font-medium">{t('visa_status')}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="true"
                      checked={field.value === true}
                      onChange={() => field.onChange(true)}
                    />
                    {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="false"
                      checked={field.value === false}
                      onChange={() => field.onChange(false)}
                    />
                    {t('no')}
                  </label>
                </div>
                {errors.visaStatus && (
                  <div className="text-red-500 text-sm mt-1">{errors.visaStatus.message}</div>
                )}
              </div>
            )}
          />
          <Controller
            name="hasEducationalCertificate"
            control={control}
            render={({ field }) => (
              <div className="mb-4">
                <label className="block mb-1 font-medium">{t('has_education_certificate')}</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="true"
                      checked={field.value === true}
                      onChange={() => field.onChange(true)}
                    />
                    {t('yes')}
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="false"
                      checked={field.value === false}
                      onChange={() => field.onChange(false)}
                    />
                    {t('no')}
                  </label>
                </div>
                {errors.hasEducationalCertificate && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.hasEducationalCertificate.message}
                  </div>
                )}
              </div>
            )}
          />
        </div>

        <RHFileUpload
          name="cvFile"
          control={control}
          label="Upload CV"
          accept=".pdf,.doc,.docx"
          required
          error={errors.cvFile?.message}
        />
        <RHFileUpload
          name="coverLetterFile"
          control={control}
          label="Upload Cover Letter"
          accept=".pdf,.doc,.docx"
          required
          error={errors.coverLetterFile?.message}
        />
        {!loading && (
          <button
            type="submit"
            className={`apply-button ${errors.root?.message ? 'disabled' : ''}`}>
            {t('apply_now')}
          </button>
        )}
        {loading && (
          <div role="status" className="flex flex-row justify-center items-center w-full">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}

        {isError && <div className="text-red-500">{t('error')}</div>}
      </div>
      <Toaster/>
    </form>

  );
}
