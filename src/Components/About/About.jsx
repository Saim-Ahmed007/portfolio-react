/* eslint-disable no-unused-vars */
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={about_profile} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my carrer I have had the privilege of collborating with prestigious organizations, contributing to their success and growth.</p>
                    <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>JavaScript </p> <hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>React JS </p> <hr style={{width:'65%'}} /></div>
                    <div className="about-skill"><p>Node Js</p> <hr style={{width:'65%'}} /></div>
                    <div className="about-skill"><p>Express </p> <hr style={{width:'60%'}} /></div>
                    <div className="about-skill"><p>MongoDB </p> <hr style={{width:'50%'}} /></div>
                    <div className="about-skill"><p>Next JS </p> <hr style={{width:'50%'}} /></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>30+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
