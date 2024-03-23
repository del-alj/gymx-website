import { useState } from 'react';
import '../styles/pages/contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = () => {
    setFormSubmitted(true);
    // In a real application, you would send the form data to your backend here
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch with our team.</p>
        </div>
      </div>
      
      <section className="section contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Get In Touch</h2>
              
              <div className="info-item">
                <FaPhone className="icon" />
                <div>
                  <h3>Phone</h3>
                  <p>123-456-7890</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <h3>Email</h3>
                  <p>info@powerfitgym.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <h3>Location</h3>
                  <p>123 Fitness Street<br />Healthville, CA 90210</p>
                </div>
              </div>
              
              <div className="info-item">
                <FaClock className="icon" />
                <div>
                  <h3>Hours</h3>
                  <p>Monday-Friday: 5:00 AM - 11:00 PM<br />
                     Saturday: 6:00 AM - 10:00 PM<br />
                     Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              {formSubmitted ? (
                <div className="success-message">
                  <h2>Thank You!</h2>
                  <p>Your message has been received. We'll get back to you as soon as possible.</p>
                  <button className="btn" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <ContactForm onSubmit={handleFormSubmit} />
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find <span>Us</span></h2>
          <div className="map-container">
            {/* In a real application, you would integrate Google Maps or another map service here */}
            <div className="map-placeholder">
              <img src="/assets/images/map-placeholder.jpg" alt="Location Map" />
              <div className="map-overlay">
                <p>Interactive map will be integrated here</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;