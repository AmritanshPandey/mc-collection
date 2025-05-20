import React from 'react'
import './style.css'
import Facebook from '../../assets/icons/facebook.svg'
import Youtube from '../../assets/icons/youtube.svg'


const Footer = () => {
    return (
      <div className='footer-container'>
        <div className='footer-content-container'>
          <div className='social-media-container'>
            <span>Follow us</span>
            <div className='social-icon-container'>
              <img src={Facebook} className='social-icon' alt='social-icon' />
              <img src={Youtube} className='social-icon'  alt='social-icon' />
            </div>
          </div>
          <div className='footer-links-container'>
            <span className='body-medium'>Contact us</span>
            <span className='body-medium'>Terms of Use</span>
            <span className='body-medium'>About priceless™</span>
            <span className='body-medium'>Privacy Notice</span>
            <span className='body-medium'>Mastercard.com</span>
            <span className='body-medium'>Manage cookies</span>
            <span className='body-medium'>Sitemap</span>
          </div>
          <div className='footer-conditions-container'>
            <span className='footer-conditions'><label>Mastercard and Priceless are registered trademarks, and the circles
              design is a trademark of Mastercard International Incorporated. ©2025 Mastercard</label></span>
          </div>
        </div>
      </div>
    )
  }


export default Footer