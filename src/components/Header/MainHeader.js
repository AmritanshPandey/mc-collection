import React from 'react';
import './style.css';
import MCLogoLockup from '../../assets/images/logo-lockup.png';
import MenuIcon from '../../assets/icons/menu.svg';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <div className='main-header-container'>
      <img src={MenuIcon} className='mc-logo-header' alt="Menu" />
      <Link to="/" className='header-link'>
        <img src={MCLogoLockup} className='mc-logo-image' alt="MC Logo" />
      </Link>
    </div>
  );
};

export default MainHeader;
