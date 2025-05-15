import React from 'react';
import './style.css';
import CloseIcon from '../../assets/icons/black-close.svg'


const ReservationDetailsSheet = ({ reservation, onClose }) => {
    return (
        <div className="bottom-sheet-overlay" onClick={onClose}>
            <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
                <div className="sheet-header">
                    <span>Reservation</span>
                    <button className="close-btn" onClick={onClose}>
                        <img src={CloseIcon} />
                    </button>
                </div>

                <div className="sheet-content">
                    <div className="subheading-medium">Peak with Priceless</div>
                    <div className="details">
                        <span className='subheading'> {reservation.date} {reservation.time && `| ${reservation.time}`} EST</span>
                        <br />
                        <span className='subheading'>
                            {reservation.guests} guests, 2 hours</span>
                    </div>

                    <a className="modify-link">modify</a>

                    <div className="price-row">
                        <span>Subtotal</span>
                        <span>$0.00</span>
                    </div>
                    <div className="price-row">
                        <span>Tax</span>
                        <span>$0.00</span>
                    </div>

                    <hr />

                    <div className="price-row total">
                        <span>ORDER TOTAL</span>
                        <span>USD $0.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationDetailsSheet;
