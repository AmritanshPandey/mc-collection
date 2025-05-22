
import './style.css';
import { useNavigate } from 'react-router-dom';

const Notification = ({ icon, sender, title, message, visible, navigateTo, data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo, { state: data }); // ➕ Pass state
    }
  };

  if (!visible) return null;

  return (
    <div className="email-toast" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {icon && <img src={icon} alt="icon" className="toast-icon" />}
      <div className="toast-text">
        <div className='sender-timer'>
          {sender && <span className="toast-sender">{sender}</span>}
          <span>Now</span>
        </div>
        {title && <strong className="toast-title">{title}</strong>}
        {message && <span className="toast-message">{message}</span>}
      </div>
    </div>
  );
};

export default Notification;
