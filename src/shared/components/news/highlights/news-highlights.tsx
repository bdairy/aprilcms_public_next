import { NewsService } from '@/shared/services/news.service';
import NewsHighlightCard from './news-highlight-card';

export default async function NewsHilights(params: { locale: string }) {
  const { locale } = params;
  const newsService = new NewsService();
  const highlights = await newsService.getNewsHighlites(locale);
  return (
    <div className="highlights">
      <div className="wrapper container">
        <div className="cards">
          {highlights &&
            highlights.map((item) => (
              <NewsHighlightCard key={item.id} item={item} locale={locale}></NewsHighlightCard>
            ))}
        </div>
      </div>
    </div>
  );
}
