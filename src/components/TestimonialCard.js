import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/components/testimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  // Generate stars based on the rating (1-5)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="star-icon" />);
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          {testimonial.avatar ? (
            <img src={testimonial.avatar} alt={`${testimonial.name}`} />
          ) : (
            <div className="avatar-placeholder">
              {testimonial.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="testimonial-info">
          <h4 className="testimonial-name">{testimonial.name}</h4>
          <p className="testimonial-membership">{testimonial.membership}</p>
          <div className="testimonial-rating">
            {renderStars(testimonial.rating)}
          </div>
        </div>
      </div>
      
      <div className="testimonial-body">
        <p className="testimonial-text">"{testimonial.text}"</p>
      </div>
      
      <div className="testimonial-footer">
        <p className="testimonial-date">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;