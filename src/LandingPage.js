import React from 'react'
import AppUI from '../src/assets/images/appui.png'
import MCLogo from '../src/assets/icons/mc-logo.svg'
import QRCode from '../src/assets/images/qrcode.png'

function LandingPage() {
  return (
    <div className='landingpage-main-container'>
      {/* <div className='mc-circle-container'>
        <img src={MCCircle} />
      </div> */}
      <div className='landing-page-info-container'>
        <div className='info-text-container'>
          <div>
            <img src={MCLogo} className='landing-mc-logo' />
          </div>
          <div>
            <span className='digital-first-title'>Mastercard Collections</span>
          </div>
          <div className='digital-first-body-text-container'>
            <span className='df-body'>Unlock a world of exclusive dining, travel, and entertainment experiences, curated just for you.
              The Mastercard Collection App brings together the finest privileges for World, World Elite, and World Legend Mastercard cardholders.</span>
           
            <span className='df-body'>Scan the QR code below to get started:</span>
          </div>
          <div>
            <img src={QRCode} className='qr-code-image' />
          </div>
          <div className='digital-first-body-text-container'>

            <span className='df-caption'>This demo app is only built for use on Apple iPhone via Safari browser.</span>
          </div>
        </div>
        <div className='info-ui-image-container'>
          <img src={AppUI} className='app-ui' />
        </div>
      </div>

    </div>
  )
}

export default LandingPage