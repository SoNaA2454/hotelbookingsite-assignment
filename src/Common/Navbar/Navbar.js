import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container flex">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={closeMobileMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            {/* <li>
              <Link to="/testimonials" onClick={closeMobileMenu}>
                Testimonials
              </Link>
            </li> */}
            <li>
              <Link to="/contact us" onClick={closeMobileMenu}>
                Contact us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i className="far fa-chevron-right"></i>Sign In
              </Link>
            </li>

            <li>
              <Link to="/sign-in">
                <i className="far fa-chevron-right"></i>Register
              </Link>
            </li>

            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space'>
          <div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fal fa-clock'></i>
              </div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='fas fa-phone-volume'></i>
              </div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'>
                <i class='far fa-envelope'></i>
              </div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
