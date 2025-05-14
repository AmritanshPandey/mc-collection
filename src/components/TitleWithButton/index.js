import React from 'react';
import './style.css';
import ChevronRight from "../../assets/icons/chevron-right-black.svg"

const TitleWithButton = () => {
  return (
    <div className='hotspot-text-button-container'>
    <div className='hotspot-text-container'>
      <span className='title'>Experiences</span>
      <div className='hotspot-body-text-container'>
      <label>Enjoy uniquely curated menus, special treatment, and other experiences</label>
      </div>
    
    </div>
    <div className='view-button-container'>
      <span>View all</span>
      <img src={ChevronRight} className='icon16' />
    </div>
  </div>
  );
};

export default TitleWithButton;