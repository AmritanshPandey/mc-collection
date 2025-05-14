import React from 'react';
import MainHeader from '../../components/Header/MainHeader';
import DinningBanner from "../../assets/images/dining-page-banner.png";
import './style.css'
import FeatureCardCarousel from '../../components/FeatureCardCarousel';
import Restaurant1 from "../../assets/images/restaurant1.png"
import TitleWithButton from '../../components/TitleWithButton';
const Dining = () => {

  const items = [
    { image: Restaurant1, title: 'Indulge in a culinary journey at Osteria Francescana' },
    { image: Restaurant1, title: 'Savor plant-based fine dining at Eleven Madison Park' },
    { image: Restaurant1, title: 'Experience the bold, nature-inspired cuisine of Noma' },
  ];

  return (
    <div>
      <div className='header-section'>
        <MainHeader />
        <img src={DinningBanner} className='main-banner' alt="Main Banner" />
      </div>
      <div>
        <FeatureCardCarousel items={items} />
      </div>
      <TitleWithButton />

    </div>
  );
}

export default Dining;