'use client';

import { IStatistics } from '@/shared/models/statistics.model';
import CountUp from 'react-countup';

export default function StatElement(params: { stat: IStatistics }) {
  const getVal = () => {
    return parseInt(stat.value);
  };

  const formatNumber = (val: number) => {
    return String(val.toLocaleString()).padStart(2, '0');
  };
  const { stat } = params;
  return (
    <div className="stat-element">
      <h2 className="title">{stat.name}</h2>
      <div className="value">
        <CountUp
          end={getVal()}
          formattingFn={formatNumber}
          suffix={stat.type === 'percentage' ? '%' : ''}
          enableScrollSpy={true}
        />
      </div>
      <p className="desc">{stat.description} </p>
    </div>
  );
}
