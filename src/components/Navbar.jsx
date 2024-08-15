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
    <header className='nb-container'>
      <nav className='nb-nav'>
        <a href='/' className='nb-logo-link'>
          <img src={Logo1} alt='Logo' className='nb-logo'/>
        </a>
        <ul className={`nb-ul ${menuOpen ? 'active' : ''}`}>
          <li><a href='/home'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/services'>Services</a></li>
          <li><a href='/contact'>Contact</a></li>
          <li><button className='nb-quote-button' onClick={handleQuoteClick}>Get Quote</button></li>
        </ul>
        <div className='nb-hamburger' onClick={toggleMenu}>
          {menuOpen ? <CloseIcon style={{ color: 'white' }} /> : <MenuIcon style={{ color: 'white' }} />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
