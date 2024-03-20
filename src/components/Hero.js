import { Link } from 'react-router-dom';
import '../styles/components/hero.css';

const Hero = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <Link to={buttonLink} className="btn hero-btn">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Hero;