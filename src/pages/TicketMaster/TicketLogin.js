import './style.css';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/icons/back-arrow-white.svg';

const TicketLoginPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/ticket-confirmation');
  };

  return (
    <div className="login-page">
      <div className="login-header">
        <img className="icon24" src={BackIcon} alt="Back" onClick={handleBack} />
        <div className="checkout-title">
          <span>Checkout</span>
          <span className="timer">Time Remaining <strong>07:30</strong></span>
        </div>
      </div>

      <div className="login-container">
        <h2 className="signin-title">SIGN IN</h2>
        <p className="signup-note">
          New to Ticketmaster? <a href="#">Sign Up</a>
        </p>

        <form className="login-form" onSubmit={handleSignIn}>
          <label>Email Address</label>
          <input type="email" defaultValue="john.smith@example.com" />

          <label>Password</label>
        
            <input type="password"  required defaultValue="••••••••"/>
           


          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="signin-btn">Sign in</button>
        </form>

        <p className="terms">
          By continuing past this page, you agree to the <a href="#">Terms of Use</a> and understand that information will be used as described in our <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default TicketLoginPage;