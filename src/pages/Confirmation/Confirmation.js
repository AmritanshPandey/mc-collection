import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import PeakImage from '../../assets/images/peak.png';
import ReviewCalendarIcon from '../../assets/icons/calendar-days.svg';
import ReviewUserIcon from '../../assets/icons/user.svg';
import MainHeader from '../../components/Header/MainHeader';

const ConfirmationPage = () => {
    const location = useLocation();
    const reservation = location.state;

    return (
        <div className="page-content">
            <MainHeader />

            <div className="confirmation-page">
                <h2>Thanks for your request!</h2>
                <p>Your reservation request number is 12345.</p>
                <p>You will receive an email from Guest.Tech to confirm your reservation.</p>
                <p>If not received in 24 hours, contact us at <a href="https://www.priceless.com/contact">priceless.com/contact</a>.</p>

                <div className="confirmation-line"></div>

                <div className="confirmation-summary">
                    <img src={PeakImage} alt="Restaurant" className="confirmation-image" />
                    <div className="confirmation-info">
                        <span className="restaurant-name">Peak with Priceless</span>
                        <div className="reservation-details">
                            <img src={ReviewCalendarIcon} alt="" />
                            <span>{reservation.date} at {reservation.time}</span>
                        </div>
                        <div className="reservation-details">
                            <img src={ReviewUserIcon} alt="" />
                            <span>{reservation.guests} guests</span>
                        </div>
                    </div>
                </div>


                <div className="confirmation-price">
                    <div className='confirmation-price-item' style={{marginBottom:"16px"}}>
                        <span className='body-bold'>Reservation</span>
                        <span className='body-bold'>$0.00</span>
                    </div>
                    <div className='confirmation-price-item'>
                        <span>Subtotal</span>
                        <span>$0.00</span>
                    </div>
                    <div className='confirmation-price-item'>
                        <span>Tax</span>
                        <span>$0.00</span>
                    </div>
                    <div className="confirmation-line"></div>
                    <div className='confirmation-price-item'>
                        <span className='subheading-bold'>Reservation</span>
                        <span className='subheading-bold'>$0.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPage;
