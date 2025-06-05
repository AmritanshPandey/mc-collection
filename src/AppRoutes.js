import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dining from './pages/Dining/Dining';
import Peak from './pages/Dining/Experience/Peak';
import ReviewPage from './pages/Review/Review';
import ConfirmationPage from './pages/Confirmation/Confirmation';
import Cat from '../src/assets/icons/cat.svg'
import EmailView from './pages/EmailView';
import CancelExperience from './pages/CancelExperience/CancelExperience';
import Canceled from './pages/CancelExperience/Canceled';
import EmailCancel from './pages/EmailView/EmailCancel';
import Entertainment from './pages/Entertainment/Entertainment';
import Travel from './pages/Travel/Travel';
import Concert from './pages/Entertainment/Experience/Concert';
import TicketPage from './pages/TicketMaster';
import TicketCheckout from './pages/TicketMaster/TicketCheckout';
import TicketLoginPage from './pages/TicketMaster/TicketLogin';
import FinalTicketCheckout from './pages/TicketMaster/TicketConfirmation';
// import Venue from './pages/Entertainment/Experience/Venue';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img src={Cat} alt='cat' />
      <h2>Page doesn't exist</h2>
      <p>The page you are looking for was not found.</p>
      <Link to="/" style={{
        display: 'inline-block',
        marginTop: '20px',
        padding: '12px 24px',
        backgroundColor: '#00754a',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '50px',
        fontWeight: "500",
      }}>
        Go back to Home Page
      </Link>
    </div>
  );
}

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/peak" element={<Peak />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/email" element={<EmailView />} />
        <Route path="/email-cancel" element={<EmailCancel />} />
        <Route path="/cancel" element={<CancelExperience />} />
        <Route path="/canceled" element={<Canceled />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/concert" element={<Concert />} />
        {/* <Route path="/venue" element={<Venue />} /> */}
        <Route path="/ticketmaster" element={<TicketPage />} />
        <Route path="/ticket-checkout" element={<TicketCheckout />} />
        <Route path="/ticket-login" element={<TicketLoginPage />} />
        <Route path="/ticket-confirmation" element={<FinalTicketCheckout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
