import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          POWERFIT <span className="gym-text">GYM</span>
        </Link>
        
        <div className="menu-icon" onClick={toggleNav}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleNav}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/membership" className="nav-link" onClick={toggleNav}>
              Membership
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleNav}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={toggleNav}>
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials" className="nav-link" onClick={toggleNav}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;