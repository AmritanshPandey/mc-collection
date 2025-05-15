// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../../components/Header/MainHeader';
import MainBanner from "../../assets/images/homebanner.png";
import CategoryBanner from "../../components/CategoryBanner";
import TravelBanner from "../../assets/images/travel-banner.png";
import DiningBanner from "../../assets/images/dining-banner.png";
import EntertainementBanner from "../../assets/images/entertainment-banner.png";
import FAQ from "../../assets/images/faq.png";
import "./style.css";
import Footer from "../../components/Footer";

const Home = () => {
  const navigate = useNavigate();    // ✅ correct way to get navigate function

  return (
    <div className='page-content'>
      <div className='header-section'>
        <MainHeader />
        <img src={MainBanner} className='main-banner' alt="Main Banner" />
      </div>

      <div className='header-text-container'>
        <span className='subheading'>
          Open a world of possibilities with<br />
          <b>The Mastercard Collection</b> - premium travel, dining and entertainment benefits curated exclusively for World, World Elite and World Legend Mastercard cardholders.
        </span>
      </div>

      <div className='category-lisitng-container'>
        <span className='heading-medium'>Explore The Mastercard Collection</span>
        <CategoryBanner
          image={TravelBanner}
          title="Travel"
          buttonText="Explore"
        />
        <CategoryBanner
          image={DiningBanner}
          title="Dining"
          buttonText="Explore"
          onButtonClick={() => navigate('/dining')}   
        />
        <CategoryBanner
          image={EntertainementBanner}
          title="Entertainment"
          buttonText="Explore"
        />
      </div>

      <div className='footer-container'>
        <img src={FAQ} className='faq-banner' alt="FAQ Banner" />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
