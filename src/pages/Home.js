import Hero from '../components/Hero';
import { FaDumbbell, FaHeartbeat, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero 
        title="TRANSFORM YOUR BODY, TRANSFORM YOUR LIFE" 
        subtitle="Join our gym and start your fitness journey today"
        buttonText="Join Now"
        buttonLink="/membership"
      />
      
      <section className="section services">
        <div className="container">
          <h2 className="section-title">Our <span>Services</span></h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaDumbbell />
              </div>
              <h3>State-of-the-Art Equipment</h3>
              <p>Access to the latest fitness equipment and machines to help you achieve your goals.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Expert Trainers</h3>
              <p>Our certified trainers provide personalized guidance to maximize your workout results.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaHeartbeat />
              </div>
              <h3>Group Classes</h3>
              <p>Join our energetic group classes including yoga, spinning, HIIT, and more.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to start your fitness journey?</h2>
            <p>Choose from our flexible membership options that fit your schedule and budget.</p>
            <Link to="/membership" className="btn">View Membership Plans</Link>
          </div>
        </div>
      </section>
      
      <section className="section featured-testimonials">
        <div className="container">
          <h2 className="section-title">What Our <span>Members</span> Say</h2>
          <div className="testimonials-preview">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"PowerFit Gym transformed my fitness journey. The trainers are exceptional and the community is so supportive!"</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>Member for 2 years</p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I've tried many gyms before, but nothing compares to the environment and results I've achieved here."</p>
              </div>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <p>Member for 1 year</p>
              </div>
            </div>
          </div>
          <div className="testimonial-action">
            <Link to="/testimonials" className="btn">Read More Testimonials</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;