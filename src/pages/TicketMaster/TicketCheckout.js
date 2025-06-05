import './style.css';
import Stadium from '../../assets/images/stadium.png';
import BackIcon from '../../assets/icons/back-arrow-white.svg';
import Minus from '../../assets/icons/minus-white.svg';
import Plus from '../../assets/icons/plus-white.svg';
import Info from '../../assets/icons/information-circle-blue.svg';
import { useNavigate } from 'react-router-dom';

const TicketCheckout = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="back-button" onClick={handleBack}>
                    <img className="icon24" src={BackIcon} alt="Back" />
                </div>
                <div className="event-title-checkout">
                    <h2>Celestia: Starlight Harmony Tour</h2>
                    <p>Tue · Jun 10, 2025 · 6:00 PM</p>
                </div>
            </div>

            <div className="checkout-reservation">
                <img src={Stadium} alt="Stadium" className="stadium-img" />
                <div className="reservation-detail">
                    <span className="reserved-label">RESERVED</span>
                    <span className="reserved-info">Sec 102 · Row A*</span>
                </div>
            </div>

            <div className="info-block">
                <p>*You'll get 2 tickets together in Sec 102, Row A.</p>
                <p>
                    <strong>Tickets are not reserved yet.</strong> To secure your tickets, click "Next."
                </p>
            </div>

            <div className="vip-checkout-card">
                <div className="vip-checkout-header">
                    <div className="left">

                        <span className="vip-title">Celestia: Starlight Harmony Tour VIP Meet & Greet Experience</span>
                        <img src={Info} className="icon24" alt="Info" />
                    </div>
                    <div className="quantity-controls">
                        <div className='minus-button'>
                            <img src={Minus} alt="Remove" className="icon24" />
                        </div>
                        <span className="ticket-count">2</span>
                        <div className='plus-button'>
                            <img src={Plus} alt="Add" className="icon24" />
                        </div>
                    </div>
                </div>
                <div className="vip-price">$290.84</div>
                <div className="ticket-limit">Event ticket limit: 8 / <a href="">Full ticket limit info</a></div>
            </div>

            <div className="checkout-summary">
                <div className="subtotal-line">
                    <span>SUBTOTAL</span>
                    <span>$581.68</span>
                </div>
                <div className="ticket-summary">2 Tickets</div>
             <button className="next-btn" onClick={() => navigate('/ticket-login')}>
  Next
</button>
            </div>
        </div>
    );
};

export default TicketCheckout;