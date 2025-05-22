import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import MainHeader from '../../components/Header/MainHeader';
import PeakBanner from '../../assets/images/peak.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import SimpleDropdown from '../../components/SimpleDropDown';
import CalendarIcon from '../../assets/icons/calendar-black.svg'
import ClockIcon from '../../assets/icons/clock-black.svg'
import UserIcon from '../../assets/icons/user-black.svg'


const CancelExperience = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reservation = location.state || {};
  const { date, time, guests } = reservation;

  return (
    <div className='page-content'>
      <div className='header-section'>
        <MainHeader />
        <img src={PeakBanner} className='main-banner' alt="Peak" />
      </div>
      <div className='feedback-container'>
        <span className='title'>Are you sure you'd like to cancel your reservation?</span>
        <span>Please share your your reason for cancelling - feedback helps us improve.</span>
        <SimpleDropdown
          options={[
            'Booked by mistake',
            'Changed my mind',
            'Something came up',
            'Need to modify the reservation',
            'Other'
          ]} onChange={(value) => console.log('User clicked:', value)}
        />
        <div className="email-actions">
          <button
            className="primary"
            onClick={() => navigate('/canceled', { state: reservation })}
          >
            Yes, cancel
          </button>
        </div>
      </div>

      <div className='cancel-info-container'>
        <span className='title'>Peak with Priceless</span>

        <div className='email-info-item-container'>
          <img src={CalendarIcon} alt='icon' />
          <span className='body-medium'>{date}</span>
        </div>

        <div className='email-info-item-container'>
          <img src={ClockIcon} alt='icon' />
          <span className='body-medium'>{time}</span>
        </div>

        <div className='email-info-item-container'>
          <img src={UserIcon} alt='icon' />
          <span className='body-medium'>{guests}</span>
        </div>

      </div>


      <div className='cancle-footer'>
        <span className='primary'>Need to make a change? </span><span>Reservations can't be modified. Please cancel your existing reservation and book again.</span>
      </div>


      <Footer />


    </div>
  );
};

export default CancelExperience;
