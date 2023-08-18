import { ITestimonial } from '@/shared/models/testimonial.model';

export default function TestimonialItem(params: { item: ITestimonial }) {
  const { item } = params;
  return (
    <div className="testimonial-item">
      <div className="body">{item.body}</div>
      <div className="name">{item.name.toLowerCase()}</div>
    </div>
  );
}
