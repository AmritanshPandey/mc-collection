import './LandingPage.css'
import AppUI1 from '../src/assets/images/iphone1.png'
import AppUI2 from '../src/assets/images/iphone2.png'
import MCLogo from '../src/assets/icons/mc-logo.svg'
import QRCode from '../src/assets/images/qrcode.png'

function LandingPage() {
  return (
    <div className='landingpage-main-container'>

      <div className='landing-page-info-container'>
        <div className='info-text-container'>
          <div>
            <img src={MCLogo} className='landing-mc-logo' alt='Mastercard logo' />
          </div>
          <div>
            <span className='digital-first-title'>The Mastercard Collection</span>
          </div>
          <div className='digital-first-body-text-container'>
            <span className='df-body'>Unlock a world of exceptional travel, dining and entertainment experiences, curated just for you. The Mastercard Collection App brings together the finest privileges for Mastercard cardholders.</span>

            <span className='df-body'>Scan the QR code below to get started:</span>
          </div>
          <div>
            <img src={QRCode} className='qr-code-image' alt='qrcode' />
          </div>
          <div className='digital-first-body-text-container'>

            <span className='df-caption'>This demo app is only built for use on Apple iPhone via Safari browser.</span>
          </div>
        </div>
        <div className="animated-line" style={{ zIndex: 0, position: 'absolute' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40vw" height="calc(40vw * 720 / 635)" viewBox="0 0 635 720" fill="none">
            <path className="svg-animated-path" d="M1.5 0.5C19.5 199 210 615.5 634.5 720.5" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className='info-ui-image-container'>
          <img src={AppUI1} className='app-ui' alt='app-ui' />
        </div>
        <div className='info-ui-image-container'>
          <img src={AppUI2} className='app-ui' alt='app-ui' />
        </div>
      </div>

    </div>
  )
}

export default LandingPage