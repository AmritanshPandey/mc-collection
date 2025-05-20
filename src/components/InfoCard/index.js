import React from 'react';
import './style.css';
import MapIcon from '../../assets/images/map.png'

const InfoCard = ({ infoItems = [], location = "" }) => {
  return (
    <div className="info-card">
      <div className="info-box">
        {infoItems.map((item, index) => (
          <div key={index} className="info-item">
            <img src={item.icon} alt="icon" className="info-icon" /> 
           <span className='body-bold'> {item.text} </span>
          </div>
        ))}
      </div>

      <div className="location-box">
        <img src={MapIcon} style={{height: "24px"}}  alt='icon' />
        <span className='map-location'> {location}</span> <a href="#">Map it</a>
      </div>
    </div>
  );
};

export default InfoCard;
