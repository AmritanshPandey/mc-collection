import './style.css';
import Avatar from '../../assets/images/g.png';
import Archive from '../../assets/icons/archive.svg'
import Bin from '../../assets/icons/bin.svg'
import Mail from '../../assets/icons/mail.svg'
import BackArrow from '../../assets/icons/back-arrow.svg'
import PageWrapper from '../../components/PageWrapper';
import { useNavigate } from 'react-router-dom';
import EmailConfirmation from './EmailConfirmation';
import { useLocation } from 'react-router-dom';

const EmailView = () => {
    const navigate = useNavigate();
 const location = useLocation();
  const reservation = location.state; 
    return (
        <PageWrapper>
            <div className="gmail-email-view">
                <div className="gmail-toolbar">

                    <img src={BackArrow} alt='icon' onClick={() => navigate(-1)}
                        style={{ cursor: 'pointer' }} />
                    <div className="toolbar-actions">
                        <img src={Archive} alt='icon' />
                        <img src={Bin} alt='icon' />
                        <img src={Mail} alt='icon' />
                    </div>
                </div>

                <div className="gmail-subject">
                    <h2>Your reservation request at Peak with Priceless has been confirmed!
                        <span className="gmail-label">Inbox</span>
                    </h2>
                </div>


                <div className="gmail-sender">
                    <img src={Avatar} className="sender-avatar" alt="sender" />
                    <div className="sender-details">
                        <span className="sender-name">guest.tech@email.com</span>
                        <span className="meta-text">to me</span>
                    </div>
                    <span className="meta-date">
                        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <button className="icon-btn">⋮</button>
                </div>


                <div className="gmail-content">
                    <div className="gmail-ad-box">
                        <EmailConfirmation reservation={reservation} />
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default EmailView;
