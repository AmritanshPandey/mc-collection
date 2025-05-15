import React from 'react';
import MainHeader from '../../components/Header/MainHeader';
import DinningBanner from "../../assets/images/dining-page-banner.png";
import './style.css';
import FeatureCardCarousel from '../../components/FeatureCardCarousel';
import ExperienceCarousel from '../../components/ExperienceCarousel';
import TitleWithButton from '../../components/TitleWithButton';
import { experienceItems, hotspotRestaurants, experienceRestaurants } from '../../data/dining-data';
import DiningFooter from '../../assets/images/dining-footer.png'
import Footer from '../../components/Footer';
import Spacer from '../../components/Spacer';

const Dining = () => {
  return (
    <div className='page-content'>
      <div className='header-section'>
        <MainHeader />
        <img src={DinningBanner} className='main-banner' alt="Dining Banner" />
      </div>

      {/* Experiences hero carousel */}
      <FeatureCardCarousel items={experienceItems} />

      {/* Hotspot Restaurants section */}
      <TitleWithButton
        title="Hotspot restaurants"
        description="Privileged access to hard-to-get reservations at trending restaurants"
        buttonText="View all"
      />
      <ExperienceCarousel experience={hotspotRestaurants} />

      {/* Experiences section */}
      <TitleWithButton
        title="Experiences"
        description="Enjoy uniquely curated menus, special treatment, and other signature experiences"
        buttonText="View all"
      />
      <ExperienceCarousel experience={experienceRestaurants} />
      <Spacer height={24} />
      <div className='footer-container'>
        <img src={DiningFooter} className='faq-banner' alt="FAQ Banner" />
        <Footer />
      </div>
    </div>
  );
};

export default Dining;
