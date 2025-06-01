'use client';
import { ICareerTarget } from '@/shared/models/careers/career-target';
import { LanguageObject } from '@/shared/models/languange-object.model';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl/dist/react-client';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function CareersListHeader(params: {
  locale: string;
  pagesCount: number;
  currentTarget: number | null;
  targets: ICareerTarget[] | null;
}) {
  const { locale, currentTarget, targets } = params;
  const route = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
const all: LanguageObject = {ar: 'الكل', en: 'All', };

  const handTabSwitch = (selected: number | null) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.delete('target');
    if (selected !== null) {
      current.set('target', `${selected}`);
    }
    const search = current.toString();
    const query = search ? `?${search}` : '';
    route.push(pathName + `${query}`);
  };
  return (
    <div className="careers-list-header">

      <ul className="tabs-container mb-[15px]">

        {targets &&
          [{id: null, name: LanguageObject.getValue(all, locale)}, ...targets].map((data) => (
            <li
              key={data.id}
              className={`tab ${data.id === currentTarget ? 'text-black' : 'text-greydark-500'}`}
              onClick={() => handTabSwitch(data.id)}>
              <p>{data.name}</p>
              {data.id === currentTarget ? (
                <motion.div className="animated-bg" layoutId="school--map-tabs" />
              ) : null}
            </li>
          ))}
      </ul>
    </div>
  );
}
