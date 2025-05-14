import React from 'react';
import './RestaurantCard.css';
import MastercardLogo from '../../assets/icons/mastercard.svg'; 

const ExperienceCard = ({ image, name, location, chef, tags }) => {
  return (
    <div className="restaurant-card">
      <div className="image-container">
        <img src={image} alt={name} />
        <img src={MastercardLogo} alt="Mastercard" className="mastercard-logo" />
      </div>
      <div className="restaurant-details">
        <h4 className="restaurant-title">{name}</h4>
        <p className="restaurant-location">{location}</p>
        <p className="restaurant-chef">{chef}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
