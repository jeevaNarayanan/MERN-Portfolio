import React from 'react';
import Typewriter from 'typewriter-effect';
import './home.css';
import Resume from '../../assets/docs/Jeeva Narayanan-Resume.doc'
const Home = () => {
  return (
    <>
        <div className="container-fluid home-container">
          <div className="containe home-content">
            <h2> Hi I'm a</h2>
            <h1>
            <Typewriter
              options={{
              strings: ['FullStack Developer !', 'MERN Stack Developer !', "React Native Developer !"],
              autoStart: true,
              loop: true,
            }}
          />
            </h1>
            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
              <a className="btn btn-cv" href={Resume} download= "Jeeva.pdf">My Resume</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home