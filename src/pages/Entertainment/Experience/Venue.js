import { useState } from 'react';
import VenueBanner from '../../../assets/images/venue-banner.png';
import FooterBanner from '../../../assets/images/footer-banner.png'
import Venue1 from '../../../assets/images/arena1.png';
import Venue2 from '../../../assets/images/arena2.png';
import Venue3 from '../../../assets/images/arena3.png';
import Venue4 from '../../../assets/images/arena4.png';
import Venue5 from '../../../assets/images/arena5.png';
import Venue6 from '../../../assets/images/arena6.png';
import Venue7 from '../../../assets/images/arena7.png';
import Venue8 from '../../../assets/images/arena8.png';
import MainHeader from '../../../components/Header/MainHeader';
import EventListCard from '../../../components/EventListCard';
import PlusWhite from '../../../assets/icons/plus.svg'
import "./style.css";
import PopularVenueCard from '../../../components/PopularVenueCard';

const Venue = () => {
 const [activeTab, setActiveTab] = useState('presale');

  return (
    <div className="venue-page">
      <header className="venue-header">
        <div className="status-bar">powerbook</div>
        <img src={VenueBanner} alt="Allianz Amphitheater" className="venue-banner" />
        <div className="tab-container">
          <button className={activeTab === 'presale' ? 'active' : ''} onClick={() => setActiveTab('presale')}>MASTERCARD PRESALE</button>
          <button className={activeTab === 'events' ? 'active' : ''} onClick={() => setActiveTab('events')}>EVENTS</button>
        </div>
      </header>

      <main className="venue-main">
        {activeTab === 'presale' && (
          <div className="events-section">
            <div className="event">
              <img src="/assets/beyonce.jpg" alt="Beyonce" />
              <div>
                <h4>Beyonce: Cowboy Carter Tour</h4>
                <p>Wed, Jun 5, 2025</p>
                <button>Buy Tickets</button>
              </div>
            </div>
            {/* Add more events similarly */}
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-list">
            <div className="event-day">
              <div className="event-date">
                <span className="month">JUN</span>
                <span className="day">05</span>
              </div>
              <div className="event-info">
                <h4>Beyonce: Cowboy Carter Tour</h4>
                <p>8:00 PM • Allianz Amphitheater</p>
              </div>
            </div>
            {/* Add more date-grouped events here */}
          </div>
        )}

        <h3>Browse Popular Venues</h3>
        <div className="popular-venues">
          <div className="venue-card">
            <img src="/assets/venue1.jpg" alt="Venue 1" />
            <p>Allianz Amphitheater, Richmond</p>
          </div>
          {/* Add more venue cards */}
        </div>
      </main>

      <footer className="venue-footer">
        <img src="/assets/footer-banner.jpg" alt="footer" className="footer-banner" />
        <div className="faq-links">
          <div className="faq-item">Frequently Asked Questions <span>+</span></div>
          <div className="faq-item">Useful Links <span>+</span></div>
        </div>
        <p className="footer-note">
          This page is managed by Live Nation...<br />
          Mastercard and Priceless are registered...<br />
          Tickets sold by Ticketmaster...
        </p>
      </footer>
    </div>
  );
};



export default Venue;
