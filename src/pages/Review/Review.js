import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css';
import PeakImage from '../../assets/images/peak.png';
import MainHeader from '../../components/Header/MainHeader';
import ReviewCalendarIcon from '../../assets/icons/calendar-days.svg';
import ReviewUserIcon from '../../assets/icons/user.svg';
import ChevronUp from '../../assets/icons/chevron-up-white.svg';
import ChevronDown from '../../assets/icons/chevron-down-black.svg';
import ReservationDetailsSheet from '../../components/ReservationDetailSheet';
import MCLogo from '../../assets/icons/mc-logo.svg';
import ApplePay from '../../assets/icons/apay.svg';

const ReviewPage = () => {
  const location = useLocation();
  const reservation = location.state;
  const navigate = useNavigate();
  const [showSheet, setShowSheet] = useState(false);
  const [activeStep, setActiveStep] = useState(1); // 👈 step control

  const goToNextStep = () => {
    setActiveStep((prev) => Math.min(prev + 1, 4));
  };

  return (
    <div className='page-content'>
      <div className='header-section'>
        <MainHeader />
      </div>

      {reservation ? (
        <>
          <div className="review-page">
            {/* Summary */}
            <div className='summary-container'>
              <span className='heading-medium'>You're almost set</span>
              <div className="reservation-summary">
                <img src={PeakImage} alt="Restaurant" className="summary-image" />
                <div className="summary-info">
                  <span className="restaurant-name">Peak with Priceless</span>
                  <div className='review-date-container'>
                    <img src={ReviewCalendarIcon} alt="calendar" />
                    <span className="reservation-details">
                      {reservation.date} at {reservation.time || "Not selected"} EST
                    </span>
                  </div>
                  <div className='review-date-container'>
                    <img src={ReviewUserIcon} alt="user" />
                    <span className="reservation-details">{reservation.guests} guests</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1 */}
            <div className="step-section">
              <div className="step-header">
                <div className="circle">1</div>
                <span className='subheading-medium'>Enter Guest Information</span>
              </div>

              {activeStep === 1 && (
                <form className="guest-form">
                  <label>Guest Name</label>
                  <div className="form-group">
                    <input type="text" placeholder="First Name" defaultValue="John" />
                    <input type="text" placeholder="Last Name" defaultValue="Smith" />
                  </div>
                  <label>Email</label>
                  <input type="email" placeholder="Email" defaultValue="john.smith@example.com" />
                  <input type="email" placeholder="Confirm email" defaultValue="john.smith@example.com" />
                  <label>Mobile number</label>
                  <input type="text" placeholder="(123) 456-7890" defaultValue="(123) 456-7890" />

                  <button type="button" className="continue-button" onClick={goToNextStep}>
                    Continue
                  </button>
                </form>
              )}
            </div>
            {/* Step 2 */}
            <div className="step-section">
              <div className="step-header">
                <div className="circle">2</div>
                <span className='subheading-medium'>Add Card Information</span>
              </div>
              {activeStep === 2 && (
                <div className="simple-form">
                  <div className='card-info-container'>
                    <img src={MCLogo} className='review-mc-logo' />
                    <div className='card-subinfo-container'>
                      <span className='body-medium'>Reservations are only available to Mastercard cardholders.</span>
                      <span>Select an option below to enter your Mastercard card number to verify eligibility and assist in booking reservations.</span>
                      <div className='add-card-container'>
                        <img src={MCLogo} className='review-mc-logo' />
                        <span className='body-medium'>Mastercard ending in •••• 1234</span>
                      </div>
                      <div className='add-card-container-space'>
                        <div className='add-card-inner-container'>
                          <img src={MCLogo} className='review-mc-logo' />
                          <span className='body-medium'>Add a Mastercard</span>
                        </div>
                        <img src={ChevronDown} className='review-mc-logo' />
                      </div>
                      <div className='add-card-container'>
                        <img src={ApplePay} className='review-mc-logo' />
                        <span className='body-medium'>Add a Mastercard with Apple Pay</span>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="continue-button" onClick={goToNextStep}>
                    Continue
                  </button>
                </div>
              )}
            </div>
            {/* Step 3 */}
            <div className="step-section">
              <div className="step-header">
                <div className="circle">3</div>
                <span className='subheading-medium'>Create an Account <span className='optional'>(optional)</span></span>
              </div>
              {activeStep === 3 && (
                <form className="guest-form">
                  <label>Account Name</label>
                  <div className="form-group">
                    <input type="text" placeholder="First Name" defaultValue="John" />
                    <input type="text" placeholder="Last Name" defaultValue="Smith" />
                  </div>
                  <label>Email</label>
                  <input type="email" placeholder="Email" defaultValue="john.smith@example.com" />
                  <label>Password</label>
                  <input type="password" placeholder="Password" defaultValue="••••••••" />
                  <label>Location / Region</label>
                  <input type="text" placeholder="Location" defaultValue="New York, USA" />
                  <label>Phone Number</label>
                  <input type="text" placeholder="Phone" defaultValue="(123) 456-7890" />

                  <div className="checkbox-container">
                    <input type="checkbox" id="offers" />
                    <label htmlFor="offers">Send me exclusive offers and updates via email.</label>
                  </div>

                  <button type="button" className="continue-button" onClick={goToNextStep}>
                    Continue
                  </button>
                </form>
              )}
            </div>
            {/* Step 4 */}
            <div className="step-header">
              <div className="circle">4</div>
              <span className='subheading-medium'>Review Your Reservation</span>
            </div>
            {activeStep === 4 && (
              <div className="simple-form">
                <p>Please review your order summary and billing details before placing your order.</p>
                <div className='order-detail-container'>
                  <span className='subheading-bold'>ORDER TOTAL</span>
                  <span className='subheading-medium'>USD $0.00</span>
                </div>
                <button
                  className="continue-button"
                  onClick={() => navigate('/confirmation', { state: reservation })}
                >
                  Reserve Now
                </button>
                <div className='review-condition-container'>
                  <label>By requesting a reservation, I confirm that I have read and agree to the <span style={{ color: "#016B4B", fontWeight: "500" }}>Terms of Use</span> for priceless.com, and that restaurant bookings are powered in part with Mastercard partner, GuestTech. I also understand that my personal data will be processed by Mastercard International Inc. and its affiliates as described in the priceless.com <span style={{ color: "#016B4B", fontWeight: "500" }}>Privacy Notice</span>.
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Reservation Bar */}
          <div className="reservation-bar" onClick={() => setShowSheet(true)}>
            <div className='reservation-bar-text'>
              <span>Reservation Details</span>
              <img src={ChevronUp} alt="chevron" />
            </div>
            <span>USD $0.00</span>
          </div>

          {/* Bottom Sheet */}
          {showSheet && (
            <ReservationDetailsSheet
              reservation={reservation}
              onClose={() => setShowSheet(false)}
            />
          )}
        </>
      ) : (
        <p>No reservation data found.</p>
      )}
    </div>
  );
};

export default ReviewPage;
