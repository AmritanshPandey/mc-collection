import "./style.css";
import PricelessLogo from '../../assets/icons/priceless-logo.svg'
import OpenNew from '../../assets/icons/open.svg'
const EventListCard = ({ month, date, year, location, time, artists, ticketType, buttonText }) => {
    return (
        <div>
            <div className="event">
                <div className="ticket-info-section">
                    <div className="event-date">
                        <span className="month">{month}</span>
                        <span className="date">{date}</span>
                        <span className="year">{year}</span>
                    </div>

                    <div className="event-info">
                        <span className="subheading-bold">{location}</span>
                        <span className="body-medium">{time}</span>
                        <span>{artists}</span>
                    </div>
                </div>
                <div>
                    <img src={PricelessLogo} className="priceles-logo" alt="priceless" />
                    <div className="priceless">{ticketType}</div>
                <div className="event-button-container">
                    <button>
                        {buttonText}
                        <img src={OpenNew} className="icon16" alt="icon" />
                    </button>
                </div>

                </div>
            </div>

        </div>

    );
};

export default EventListCard;
