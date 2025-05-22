import './style.css';
import MastercardIcon from '../../assets/images/logo-lockup.png';
import GuestTechLogo from '../../assets/icons/guest-tech.svg';
import Peak from '../../assets/images/peak.png';
import CalendarIcon from '../../assets/icons/calendar-white.svg'
import ClockIcon from '../../assets/icons/clock-white.svg'
import UserIcon from '../../assets/icons/user-white.svg'
import LocationIcon from '../../assets/icons/location.svg'
import TextIcon from '../../assets/icons/text.svg'
import Poweredby from '../../assets/images/poweredby.png'
import EmailFooter from '../../assets/images/email-footer.png'
import { Link, useNavigate } from 'react-router-dom';



const EmailCanceled = ({ reservation }) => {
    const { date, time, guests, specialRequest } = reservation || {};
    const finalRequest = specialRequest?.trim() || "If possible, I want a less noisy table in the back room";
    const navigate = useNavigate();
    return (
        <div>
            <div className="email-powered-by">
                <img src={GuestTechLogo} alt="Guest.Tech" />
            </div>

            <div className="email-container">




                <div className="email-card">
                    <div className="email-header">
                        <img src={MastercardIcon} alt="Mastercard" />
                    </div>
                    <div className='email-header-text'>
                        <span className='title'>Your reservation has been canceled</span>
                        <span className='subheading'>Thank you for letting us know you can't attend the reservation.</span>

                    </div>



                    <img src={Peak} alt="Reservation" className="email-main-img" />
                    <div className='pill'>Canceled</div>
                    <div className='fade'>
                      
                        <span className='title'>Peak with Priceless</span>

                        <div className="email-info-list">
                            <div className='email-info-container'>
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
                                    <span className='body-medium'>J. Smith with {guests - 1} other person</span>
                                </div>

                                <div className='email-info-item-container'>
                                    <img src={LocationIcon} alt='icon' />
                                    <span className='body-medium'>123 Main St, New York, New York</span>
                                </div>

                                <div className='email-info-item-container'>
                                    <img src={TextIcon} alt='icon' />
                                    <span className='body-medium'>{finalRequest}</span>
                                </div>
                            </div>

                        </div>
                    </div>

                   
                    <div>

                    </div>
                    <div className='need-assistance-container'>
                        <span className='body'>Need assistance?</span>
                        <span className='body'><u>Visit priceless.com/contact</u></span>
                    </div>
                </div>




                <div className="email-footer">
                    <Link to={"/"}>
                    <div>
                        <img src={EmailFooter} className='email-footer-image' alt='email-footer' />
                    </div>
                    </Link>
                    <div className="powered-by-pill">
                        <img src={Poweredby} alt="Guest.Tech" className='poweredby-img' />
                    </div>

                    <div className="policy-links">
                        <a href="">Terms of Sale</a> •
                        <a href="">Privacy Policy</a>
                    </div>

                    <address>2000 Purchase Street,<br></br> Purchase, NY 10577</address>
                    <div style={{ margin: "0 34px" }}>
                        <p>©2023 Mastercard. All rights reserved.</p>
                        <small>
                            Please do not reply to this email. You are receiving this email based on a recent interaction or account-related update on Mastercard's <u>priceless.com</u>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmailCanceled;