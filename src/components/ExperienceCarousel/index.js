import React from 'react';
import './style.css';
import ExperienceCard from '../ExperienceCard';

const ExperienceCarousel = ({ restaurants }) => {
  return (
    <div className="experience-carousel-wrapper">
      <h3 className="experience-carousel-title">Featured restaurants</h3>
      <div className="experience-carousel-scroll">
        {restaurants.map((rest, index) => (
          <ExperienceCard key={index} {...rest} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;
