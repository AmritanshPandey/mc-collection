import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MastercardLogo from '../../assets/icons/mc-logo.svg';

const ExperienceCard = ({ image, name, location, person, tags, price, link }) => {
  return (

    <Link to={link} className="experience-card-link">
      <div className="experience-card">
        <div className="experience-image-container">
          <img src={image} alt={name} />
          <img src={MastercardLogo} alt="Mastercard" className="experience-mastercard-logo" />
        </div>
        <div className="experience-details">
          <span className="subheading-medium experience-title">{name}</span>
          <div className='experience-card-info'>
          <span className="experience-location">{location}</span>
          <span className="experience-person">{person}</span>
          <span className="experience-person">{price}</span>
          </div>
       
         
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;
