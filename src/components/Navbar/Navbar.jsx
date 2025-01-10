import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu('home')}
            className={menu === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu('menu')}
            className={menu === 'menu' ? 'active' : ''}
          >
            Menu
          </a>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setMenu('about-us')}
            className={menu === 'about-us' ? 'active' : ''}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu('contact-us')}
            className={menu === 'contact-us' ? 'active' : ''}
          >
            Contact Us
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Basket Icon" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
