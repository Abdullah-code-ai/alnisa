import React, { useEffect } from 'react'
import './Features.css'
import AOS from 'aos'
import img from '../../Assets/free-400x4001.png'
import img1 from '../../Assets/certificate-400x400.png'
import img2 from '../../Assets/anniversary-400x400.png'
import img3 from '../../Assets/24-hours-400x400.png'
import img4 from '../../Assets/videoconference-400x400.png'
import img5 from '../../Assets/muslim-teacher-near-blackboard-back-cshool-illustration_567314-158-400x400.webp'
const Features = () => {
    const features = [
        { title: 'Free Trial Classes', description: 'Get 2 free trial classes for any course of your choice to evaluate our tutors and courses.' , image: `${img}` },
        { title: 'Completion Certificates', description: 'Students Get a certificate after completing course stating that you have passed the course successfully.' , image: `${img1}` },
        { title: '100+ satisfied students', description: 'More than 100 happy students After finishing the course, you will receive a certificate proving your success.' , image: `${img2}` },
        { title: '24/7 Learn Online', description: 'The learning centre is open around-the-clock. This aids in the quick and easy learning of the Quran by students.' , image: `${img3}` },
        { title: '1 on 1 Online Sessions', description: 'To make learning easier for you and your family, we offer private online learning sessions.' , image: `${img4}` },
        { title: 'Female Tutors', description: ' We have highly qualified, well-trained, and extremely capable Female tutors it.' , image: `${img5}` }
      ]; 
useEffect(() => {
  AOS.init({
    duration: 3000,}
  );
})



  return (
    <>
    <div className="container text-center mt-3 mb-3">
        <h1 className='text-center heading-text'>AL-NISA QURAN INSTITUTE Features
        </h1>
    </div>
    <div className="feature-card-container" data-aos="zoom-in">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} className="feature-image" />
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
    
    
    
    
    </>
  )
}

export default Features
