import React from 'react';
import './style.css';
import ExperienceCard from '../ExperienceCard';

const ExperienceCarousel = ({ experience = [] }) => {   
  if (!experience.length) return null;

  return (
    <div className="experience-carousel-wrapper">
      <div className="experience-carousel-scroll">
        {experience.map((rest, index) => (
          <ExperienceCard key={index} {...rest} link={rest.link || "#"} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCarousel;
