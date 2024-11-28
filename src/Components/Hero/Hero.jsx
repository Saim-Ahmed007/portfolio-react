/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img className='hero-img' src={profile_img} alt="" />
        <h1><span>I am Saim Ahmed,</span> frontend developer based in Bangladesh</h1>
        <p>I am a frontend developer from Bangladesh, with love for MERN stack.Lets code and build something awesome together.</p>
        
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <a className='resume-link' href={resume} download='resume'><div className="hero-resume">Download Resume</div></a>
        </div>
      
    </div>
  )
}

export default Hero
