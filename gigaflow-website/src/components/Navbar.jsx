import React, { useState } from 'react';
import Logo1 from '../assets/Logo-1.png';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleQuoteClick = () => {
    window.location.href = '/quote';
  };

  return (
    <header className='navbar-unique-container'>
      <nav className='navbar-unique'>
        <div className='navbar-logo-container'>
          <a href='/' className='navbar-logo-link'>
            <img src={Logo1} alt='Logo' className='navbar-logo'/>
          </a>
        </div>
        <div className='navbar-menu-container'>
          <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
            <li><a href='/home'>Home</a></li>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
        </div>
        <button className='navbar-quote-btn' onClick={handleQuoteClick}>Get Quote</button>
        <div className='navbar-hamburger' onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
