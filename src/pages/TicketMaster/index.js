import './style.css';
import Stadium from '../../assets/images/stadium.png'
import Switch from '../../assets/icons/arrows-right-left.svg'
import DropDown from '../../assets/icons/chevron-down-black.svg'
import Lock from '../../assets/icons/lock-closed.svg'
import Filter from '../../assets/icons/adjustments-horizontal.svg'
import BackIcon from '../../assets/icons/back-arrow-white.svg'
import { useNavigate } from 'react-router-dom';
const TicketPage = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleVipClick = () => {
        navigate('/ticket-checkout');
    };

    const vipOptions = [
        { section: 'Sec 102 · Row A', description: 'Meet & Greet Experience', price: '$290.84' },
        { section: 'Sec 102 · Row B', description: 'Meet & Greet Experience', price: '$290.84' },
        { section: 'Sec 102 · Row C', description: 'Meet & Greet Experience', price: '$290.84' },
    ];

    return (
        <div className="ticket-page">

            <div className='ticket-page-header'>

                <div className='back-navigation-ticketpage' onClick={handleBack}>
                    <img className='icon24' src={BackIcon} alt='Back' />
                </div>

                <div className="breadcrumbs">Home / Concert Tickets / C… / Celestia</div>

                <h1 className="event-title">Celestia: Starlight Harmony Tour</h1>
                <p className="event-time">
                    Tue · Jun 10, 2025 · 6:00 PM - <a href="#">Allianz Amphitheatre</a>
                </p>
            </div>
            <div className="event-info-banner">
                <strong>Important Event Info:</strong> Door 5:00 PM / Show 6:00 PM
            </div>

            <div className="venue-map">
                <div className="switch-map">
                    <img src={Switch} className='icon16' alt='icon' />
                    <span>Switch to Map</span>
                </div>
                <img
                    src={Stadium}
                    alt="Venue Map"
                    className="venue-images"
                />
            </div>

            <div className="controls">
                <div className="ticket-btn">
                    <span>2 Tickets</span>
                    <img src={DropDown} className='icon16' alt='icon' />
                </div>
                <div className="ticket-btn">
                    <img src={Lock} className='icon16' alt='icon' />
                    <span>Unlock</span>
                </div>
                <div className="ticket-btn">
                    <img src={Filter} className='icon16' alt='icon' />
                    <span>Filters</span>
                </div>

            </div>

            <p className="fee-note">
                Price includes fees (before taxes if applicable). An order processing fee of up to $3.95 may be added to each order.
            </p>

            <div className="vip-section">
                <div className="vip-header">
                    <span>VIP Packages</span>
                    <a href="">More Info</a>
                </div>

                {vipOptions.map((option, index) => (
                    <div
                        className="vip-option"
                        key={index}
                        onClick={handleVipClick}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleVipClick()}
                    >
                        <div>
                            <strong>{option.section}</strong>
                            <p>{option.description}</p>
                        </div>
                        <div className="price">{option.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketPage;