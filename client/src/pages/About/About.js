import React from 'react';
import './About.css'

// const About = () => {
//   return (
//     <>
//     <div className='about'>
//         <div className='row'>
//             <div className= "col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">Image</div>
//             <img src="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg" alt="profile-pic" />
//             <div className= "col-md-6">Content</div>
            

//         </div>
//     </div>
//     </>
//   )
// }
const About = () => {
    return (
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-12 about-img">
            <img 
              src="https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg" 
              alt="profile-pic"
              className="img-fluid" // Bootstrap class to ensure responsiveness
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-12 about-content">
            <h1>About Me</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


            </p>
          </div>
        </div>
      </div>
    );
  };

export default About