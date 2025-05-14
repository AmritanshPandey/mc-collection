// src/components/HeroBanner.js
import React from 'react';
import './style.css';

const CategoryBanner = ({ image, title, buttonText, onButtonClick }) => {
  return (
    <div
      className="category-banner"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="category-overlay"></div>
      <div className="category-content">
        <h2 className="subheading-medium category-title  ">{title}</h2>
        <button className="category-button" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CategoryBanner;
