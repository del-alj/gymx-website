import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="logo-text">POWERFIT <span>GYM</span></h2>
            <p>
              Dedicated to helping you achieve your fitness goals with state-of-the-art
              equipment, expert trainers, and a supportive community.
            </p>
            <div className="contact">
              <p><FaPhone /> &nbsp; 123-456-7890</p>
              <p><FaEnvelope /> &nbsp; info@powerfitgym.com</p>
              <p><FaMapMarkerAlt /> &nbsp; 123 Fitness Street, Healthville, CA 90210</p>
            </div>
            <div className="socials">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section hours">
            <h2>Hours of Operation</h2>
            <ul>
              <li><span>Monday-Friday:</span> 5:00 AM - 11:00 PM</li>
              <li><span>Saturday:</span> 6:00 AM - 10:00 PM</li>
              <li><span>Sunday:</span> 7:00 AM - 9:00 PM</li>
              <li><span>Holidays:</span> 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PowerFit Gym. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;