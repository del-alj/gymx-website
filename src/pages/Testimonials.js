import TestimonialCard from '../components/TestimonialCard';
import '../styles/pages/testimonials.css';

const Testimonials = () => {
  // Sample testimonial data (in a real app, this might come from an API or database)
  const testimonialData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      membership: 'Premium Member - 2 years',
      rating: 5,
      text: 'PowerFit Gym transformed my fitness journey. The trainers are exceptional and the community is so supportive!',
      date: 'January 15, 2025',
      avatar: '/public/assets/images/testimonials/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      membership: 'Elite Member - 1 year',
      rating: 5,
      text: "I've tried many gyms before, but nothing compares to the environment and results I've achieved here.",
      date: 'February 3, 2025'
    },
    // Add more testimonials...
  ];

  return (
    <div className="testimonials-page">
      <div className="testimonials-header">
        <div className="container">
          <h1>Member Testimonials</h1>
          <p>Hear what our members have to say about their experience</p>
        </div>
      </div>
      
      <section className="section testimonials-grid">
        <div className="container">
          <div className="testimonials-list">
            {testimonialData.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;