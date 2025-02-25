import React from 'react';
import './Menus.css';
import {FcAbout, FcBiotech, FcHome, FcReadingEbook, FcPortraitMode, FcVideoProjector, FcVoicePresentation, FcBusinessContact} from 'react-icons/fc'

const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <div className ="navbar-profile-pic">
        <img src="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg" alt="profile-pic" />
       </div>
       <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <div className="nav-link">
                    <FcHome/>Home</div>
                    <div className="nav-link">
                    <FcAbout/>About</div>
                    <div className="nav-link">
                    <FcPortraitMode/>Work Experience</div>
                    <div className="nav-link">
                    <FcBiotech/>Tech Stack</div>
                    <div className="nav-link">
                    <FcReadingEbook/>Education</div>
                    <div className="nav-link">
                    <FcVideoProjector/>Projects</div>
                    <div className="nav-link">
                    <FcVoicePresentation/>Testimonial</div>
                    <div className="nav-link">
                    <FcBusinessContact/>Contact</div>

            </div>
        </div>
       </div>
        </>
    ) : (
        <>
        <div className="nav-items">
        <div className="nav-item">
            <div className="nav-link">
                <div className="nav-link">
                    <FcHome title='Home'/></div>
                    <div className="nav-link">
                    <FcAbout title='About'/></div>
                    <div className="nav-link">
                    <FcPortraitMode title='Work Experience'/></div>
                    <div className="nav-link">
                    <FcBiotech title='Tech Stack'/></div>
                    <div className="nav-link">
                    <FcReadingEbook title='Education'/></div>
                    <div className="nav-link">
                    <FcVideoProjector title='Projects'/></div>
                    <div className="nav-link">
                    <FcVoicePresentation title='Testimonial'/></div>
                    <div className="nav-link">
                    <FcBusinessContact title='Contact'/></div>

            </div>
        </div>
       </div>
        </>
    )} 
       
    </>
  )
}

export default Menus