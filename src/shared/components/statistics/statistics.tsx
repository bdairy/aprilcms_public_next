import { IPage } from '../../models/page/page.model';
import { StatisticsService } from '../../services/statistics.service';
import StatElement from './stat-element';

export default async function StatisticsComponent(params: { page: IPage; locale: string; classes: string }) {
  const { page, locale, classes } = params;
  const service = new StatisticsService();
  const stats = await service.getStatisticsByPageCode(page.state, params.locale);

  return (<div className={`statistics ${classes ?? ''}`} >
    {stats &&
      <div className="wrapper container" >
       {stats.map(stat =>  {
         return <StatElement key={stat.id} stat={stat}></StatElement>;
       })}
    </div>
    }

</div>);
}
