import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Notification from '../../components/AppNotification';
import './style.css';
import MainHeader from '../../components/Header/MainHeader';
import PeakBanner from '../../assets/images/peak.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import CalendarIcon from '../../assets/icons/calendar-black.svg'
import ClockIcon from '../../assets/icons/clock-black.svg'
import UserIcon from '../../assets/icons/user-black.svg'
import Gmail from '../../assets/images/gmail.png'

const Canceled = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const reservation = location.state || {};
    const { date, time, guests } = reservation;

      const [showNotification, setShowNotification] = useState(false);
    
        useEffect(() => {
            const timer = setTimeout(() => {
                setShowNotification(true);
            }, 1500);
    
            return () => clearTimeout(timer);
        }, []);
    
    return (
        <div className='page-content'>
            <div className='header-section'>
                <MainHeader />
                
                <img src={PeakBanner} className='main-banner' alt="Peak" />
            </div>

             <Notification
                visible={showNotification}
                icon={Gmail}
                sender="Guest.Tech"
                title="Reservation Confirmed"
                message="Your reservation request at Peak with Priceless has been confirmed!"
                navigateTo="/email-cancel"
                data={reservation} 
            />

            <div className='feedback-container'>
                <span className='title'>Got it! Your reservation has been canceled.</span>
                <span>We appreciate your feedback.</span>

                <div className="email-actions">
                    <button className="disabled">
                        Canceled
                    </button>
                    <button className="primary" onClick={() => navigate('/')}>
                        Book a new reservation
                    </button>
                </div>
            </div>

            <div className='canceled-info-container'>
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



            <Footer />


        </div>
    );
};

export default Canceled;
