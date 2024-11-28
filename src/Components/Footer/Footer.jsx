/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1 className='footer-name'>Saim</h1>
                <p>I am a Frontend Developer with 2 years of experience.</p>
                <p>Happy Coding 😊.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    
                    <input type="email" name="" id="" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className='footer-bottom-left'>&copy; 2024 Saim Ahmed. All rights reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
