import './style.css';
import BackIcon from '../../assets/icons/back-arrow-white.svg';
import CardIcon from '../../assets/icons/credit-card.svg';
import AddIcon from '../../assets/icons/plus.svg';
import InfoIcon from '../../assets/icons/information-circle.svg'
import { useNavigate } from 'react-router-dom';

const FinalTicketCheckout = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

 
    const handleConfirm = () => {
        navigate('/');
    };


    return (
        <div className="final-checkout-page">
            {/* Header */}
            <div className="checkout-header-block">
                <div className="checkout-header-brand">

                    <div className="checkout-timer">

                        <div className='' onClick={handleBack}>
                            <img className='icon24' src={BackIcon} alt='Back' />
                        </div>
                        <span>Checkout</span>

                    </div>
                    <div className="timer-bubble">
                        <span>07:00</span>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>

            {/* Event Info */}
            <div className="checkout-info-card">
                <h3>Celestia: Starlight Harmony Tour</h3>
                <p className="event-datetime">Tue · Jun 10, 2025 · 6:00 PM</p>
                <p className="event-location">Allianz Ampitheater at Riverfront – Richmond, Virginia</p>
                <p className="event-seat-info">2 Tickets - Sec 102, Row A, Seats 15 – 16</p>
                <a href="#" className="view-seats-link">View Seats</a>
                <div className="ticket-info-line">
                 <img src={InfoIcon} className='icon16' alt='info' />
                    <span>Ticket Information</span>
                </div>
                <p className="info-detail">Lower Level</p>
            </div>

            {/* Delivery */}
            <div className="checkout-section white-box">
                <h4>DELIVERY</h4>
                <p className="sub-text">Mobile - FREE</p>
                <p className="body-text">
                    To access your tickets for entry, you'll need to download the Ticketmaster App or add your tickets to your mobile wallet.
                </p>
            </div>

            {/* Payment */}
            <div className="checkout-section white-box">
                <h4>PAYMENT</h4>
                <div className="add-card">
                    <img src={CardIcon} alt="card" className="icon20" />
                    <span>Add New Card</span>
                </div>
                <p className="paypal-note">
                    As low as <strong>$36.58/mo</strong> with PayPal. <a href="#">Learn more</a>
                </p>
                <p className="terms">
                    By using a digital wallet and continuing past this page, you have read and are accepting the <a href="#">Terms of Use</a>.
                </p>
                <div className="promo-link">
                    <img src={AddIcon} alt="Add" className="icon16" />
                    <span>Add Credits / Promo Codes / Gift Cards</span>
                </div>
            </div>

            {/* Order Summary */}
            <div className="checkout-section white-box">
                <div className="total-row">
                    <span>TOTAL (incl. $5.86 tax)</span>
                    <span className="total-amount">$663.54</span>
                </div>
                <div className="line-item">
                    <span>Tickets</span>
                    <span>$581.68</span>
                </div>
                <div className="line-item">
                    <span>Fees</span>
                    <span>$71.00</span>
                </div>
                <div className="line-item">
                    <span>Taxes</span>
                    <span>$5.86</span>
                </div>
                <a href="#" className="cancel-order">Cancel Order</a>
                <p className="fine-print">*All Sales Final - No Refunds</p>

          

                <button className="place-order-btn" onClick={handleConfirm}>
                    Place Order
                </button>

                <p className="bottom-note">*Exceptions may apply, see our Terms of Use.</p>
            </div>
        </div>
    );
};

export default FinalTicketCheckout;