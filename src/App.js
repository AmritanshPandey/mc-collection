import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import AppRoutes from './AppRoutes';
import LandingPage from './LandingPage';
import MCLogo from './assets/icons/mc-logo.svg';
import ShareIcon from './assets/icons/ios-share.svg';
import ArrowDown from './assets/icons/arrow-down.svg';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [isStandalone] = useState(window.matchMedia('(display-mode: standalone)').matches);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    setShowPrompt(!isDesktop && !isStandalone);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop, isStandalone]);

  const handleAddToHomeScreenClick = () => {
    setShowPrompt(false);
  };

  const renderAddToHomeScreenPrompt = () => (
    <div className='mweb-container'>
      <div className='mastercard-logo'>
        <img src={MCLogo} className='mastercard-logo' alt='Mastercard logo' />
      </div>
      <div className='mweb-info-container2'>
        <span className='title1'>Mastercard Collection</span>
        <div style={{ height: '0px' }}></div>
        <div style={{ width: '60%', margin: '0 auto' }}>
          <span className='subheading3'>Experience the app on your phone</span>
        </div>
      </div>
      <div style={{ height: '1px', backgroundColor: '#C8C8C8' }}></div>
      <div className='mweb-info-container'>
        <label onClick={handleAddToHomeScreenClick}>
          This app requires iPhone 7 or above with the latest iOS and must be opened using Safari.
        </label>
      </div>
      <div className='share-icon-text-container'>
        <span className='title white'>You are just two taps away:</span>
        <div style={{ height: '4px' }}></div>
        <div className='share-icon-text-inner-container'>
          <div className='share-icon-container'>
            <span className='subheading'>Tap the</span>
            <img src={ShareIcon} className='share-icon' alt='Share icon' />
            <span className='subheading'>icon button below,</span>
          </div>
          <div>
            <span className='subheading'>then tap “Add to home screen.”</span>
          </div>
        </div>
      </div>
      <div className='arrow-animation-container'>
        <div className='dive'>
          <img src={ArrowDown} alt='Arrow down' />
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <ScrollToTop />
      {showPrompt
        ? renderAddToHomeScreenPrompt()
        : isDesktop
          ? <LandingPage />
          : <AppRoutes />
      }
    </Router>
  );
}

export default App;
