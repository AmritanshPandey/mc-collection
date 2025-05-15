import React, { useState } from 'react';
import './style.css';
import MainHeader from '../../../components/Header/MainHeader';
import PeakBanner from '../../../assets/images/peak.png';
import ActionCard from '../../../components/ActionCard';
import Spacer from '../../../components/Spacer';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';

const Peak = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleReservationSubmit = () => {
    navigate('/review', { state: formData });
  };

  return (
    <div className='page-content'>
      <div className='header-section'>
        <MainHeader />
        <img src={PeakBanner} className='main-banner' alt="Peak" />
      </div>

      <div className='experience-text-container'>
        <span className='subheading-bold'>Peak with Priceless</span>
        <div className='experience-body-container'>
          <span>Dine above the clouds with preferred table reservations at Peak
            with Priceless</span>
          <span>Enjoy priority reservations and a special welcome drink while
            immersing yourself in iconic sky-high views</span>
        </div>
      </div>

      <ActionCard setFormData={setFormData} />

      <div className='experience-text-container'>
        <span className='subheading-bold'>The Experience</span>
        <div className='experience-body-container'>
          <span>Take a culinary journey to an elevated dinner at Peak with
            Priceless, where, along with a dining companion, you'll enjoy
            priority access to some of the restaurant's most in-demand
            table seatings on Thursday, Friday and Saturday evenings.
            Boasting the best views of the city from the 101st floor,
            these in-demand tables for two are available at 5:00 and
            7:30 p.m. ET. Revel in a complimentary glass of champagne
            or a cocktail/mocktail before indulging in a three-course prix-
            fixe menu curated by executive chef Rose Noel. You'll top off
            the night with a specially curated dessert experience.
            Exclusively for Mastercard cardholders.</span>
        </div>
      </div>

      <div className='experience-text-container'>
        <span className='subheading-bold'>What's <i>priceless</i></span>
        <div className='experience-body-container'>
          <span>Savoring iconic views of New York City and a delicious meal
            with your favorite culinary adventurer.</span>
        </div>
      </div>

      <div className='experience-text-container'>
        <span className='subheading-bold'>The highlights</span>
        <div className='experience-body-container'>
          <ul className="highlight-list">
            <li>Enjoy priority access to in-demand Friday and Saturday night reservations at Peak with Priceless</li>
            <li>Delight in a complimentary welcome beverage and specially curated dessert</li>
            <li>Soak up the iconic views of NYC from the 101st floor</li>
          </ul>
        </div>
      </div>


      <div className='experience-text-container'>
        <span className='subheading-bold'>Details</span>
        <div className='experience-body-container'>
        <ul className="legal-list">
    <li>Priceless experiences are reserved for Mastercard cardholders</li>
    <li>
        Please note that the ticket price, tax, gratuity, and any other applicable additional costs are to be paid in-person at the restaurant
        <ul>
            <li>Ticket price is US$300 per pair (gratuity and taxes not included)</li>
            <li>Ticket's taxes, gratuity, and food and drinks beyond the welcome offer and prix-fixe menu are additional and you will be responsible for covering these additional costs</li>
        </ul>
    </li>
    <li>Experience takes place every Thursday, Friday and Saturday</li>
    <li>Reservations for 5:00 p.m. ET can be booked up to 82 hours in advance</li>
    <li>Reservations for 7:30 p.m. ET can be booked up to 84 hours in advance</li>
    <li>This booking process is only intended to confirm your reservation</li>
    <li>Additional reservations will be made available one month prior to the event date</li>
    <li>Experience is available through the end of 2024</li>
    <li>Accessibility accommodations include elevators and ramp access</li>
    <li>
        By participating, you agree to all our 
        <a href="#" className="legal-link"> Terms of Use</a> and 
        <a href="#" className="legal-link"> Terms & Conditions</a>.
    </li>
    <li>Limited to 1 per person, subject to possessing a valid email.</li>
</ul>
        </div>
      </div>

    
      <Footer />
      <Spacer height={56} />
      {/* sticky button */}
      <div className="sticky-reserve-button">
        <button
          onClick={handleReservationSubmit}
          disabled={!formData.time}
        >
          Start your reservation
        </button>
      </div>
    </div>
  );
};

export default Peak;
