import './style.css';
import MCLogoLockup from '../../assets/images/logo-lockup.png';
import BackIcon from '../../assets/icons/chevron-left.svg';
import { Link, useNavigate } from 'react-router-dom';

const BackHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='main-header-container'>
      <img
        src={BackIcon}
        className='mc-logo-header'
        alt="Menu"
        onClick={() => navigate(-1)}
        style={{ cursor: 'pointer' }}
      />
      <Link to="/" className='header-link'>
        <img src={MCLogoLockup} className='mc-logo-image' alt="MC Logo" />
      </Link>
    </div>
  );
};

export default BackHeader;