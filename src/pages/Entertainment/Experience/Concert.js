import ConcertBanner from '../../../assets/images/concert-banner.png';
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

const Concert = () => {
    return (
        <div className='page-content'>
            <div className='header-section'>
                <MainHeader />
                <img src={ConcertBanner} className='main-banner' alt="Peak" />
            </div>



            <section className="events">
                <span className='heading-bold'>Events</span>

                <div>
                    <EventListCard
                        month="JUN"
                        date="10"
                        year="2025"
                        location="Richmond • Allianz Amphitheater at Riverfront"
                        time="Tuesday: 6:00 PM"
                        artists="John Butler, G. Love & Special Sauce, Donavon Frankenreiter"
                        ticketType="Mastercard World Elite Preferred Tickets"
                        buttonText="Buy Tickets"
                    />

                    <EventListCard
                        month="JUN"
                        date="12"
                        year="2025"
                        location="Virginia Beach • The Dome"
                        time="Thursday: 4:00 PM"
                        artists="John Butler, G. Love & Special Sauce, Donavon Frankenreiter"
                        ticketType="Mastercard World Elite Preferred Tickets"
                        buttonText="Buy Tickets"
                    />
                </div>



                <span className="note">
                    The tickets displayed on this page are for access by Mastercard cardholders only and are subject to availability.
                </span>
            </section>

            <section className="venues">
                <span className='heading-bold'>Browse Popular Venues</span>
                <PopularVenueCard
                    image={Venue1}
                    venueName="Allianz Amphitheater at Riverfront"
                    location="Richmond, VA"
                />
                <PopularVenueCard
                    image={Venue2}
                    venueName="Brooklyn Bowl Las Vegas"
                    location="Las Vegas, NV"
                />
                <PopularVenueCard
                    image={Venue3}
                    venueName="Brooklyn Bowl Nashville"
                    location="Nashville, TN"
                />

                <PopularVenueCard
                    image={Venue4}
                    venueName="Brooklyn Bowl Philadelphia"
                    location="Philadelphia, PA"
                />
                <PopularVenueCard
                    image={Venue5}
                    venueName="Coca-Cola Amphitheater"
                    location="Birmingham, AL"
                />
                <PopularVenueCard
                    image={Venue6}
                    venueName="Moody Center ATX "
                    location="Austin, TX"
                />
                <PopularVenueCard
                    image={Venue7}
                    venueName="The Capitol Theatre"
                    location="Port Chester, NY"
                />
                <PopularVenueCard
                    image={Venue8}
                    venueName="The Dome"
                    location="Virginia Beach, VA"
                />




            </section>





            <footer className="footer">
                <img src={FooterBanner} alt='footer-banner' className='footer-banner' />
                <div className='footer-info-container'>

               
                <div className="footer-section">
                    <div className="footer-item">
                        <span className="footer-label heading-bold">Useful Links</span>
                        <img src={PlusWhite} className="icon16" alt="expand" />
                    </div>
                </div>
                <div className="footer-section">
                    <div className="footer-item">
                        <span className="footer-label heading-bold">Priceless</span>
                        <img src={PlusWhite} className="icon16" alt="expand" />
                    </div>
                </div>
                <p className="footer-note">
                    This page is managed and hosted by Live Nation on behalf of Mastercard.<br /><br />
                    Mastercard and Priceless are registered trademarks and the circles design is a trademark of Mastercard International Incorporated. ©2025 Mastercard.<br /><br />
                    Tickets are sold and fulfilled by Ticketmaster, TicketWeb or FrontGateTickets. Ticket prices and availability are subject to change.<br /><br />
                    ©2025 Live Nation Worldwide, Inc. Live Nation ® is a registered trademark of Live Nation Worldwide, Inc.
                </p>
        </div>
            </footer >
        </div >
    );
};

export default Concert;
