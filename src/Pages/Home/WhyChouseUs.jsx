import React, { useEffect } from 'react'
import './WhyChouseUs.css'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/WhatsApp Image 2024-09-01 at 22.19.00_3789092e.jpg'
import AOS from 'aos'
import img2 from '../../Assets/24-hours-400x400.png'
import img3 from "../../Assets/WhatsApp Image 2024-09-02 at 11.15.37_b99178d1.jpg"
import img4 from '../../Assets/bg2.png'



const WhyChouseUs = () => {
   
  useEffect(() => {
    AOS.init({
      duration: 3000,}
    );
  })





  return (
   <>
   
   
   <div className="container-fluid bg-img">
    <div className='text-center'>
    <h3 className='heading-whyChousUs-'>Would you like to
    learn <br /> Quran online with</h3>
    <h1 className='heading-whyChousUs'>AL-NISA QURAN INSTITUTE</h1>
    <Link to="/Contact-Form"><button className=" btn-btn">Register Now</button></Link>
    </div>
   </div>


<div className="  mt-5"  data-aos="zoom-in">
    <h1 className='text-center m-5 heading-whyChousUs--'>Why Choose AL-NISA QURAN INSTITUTE</h1>
<div className="card-container">
      <div className="card">
        <img src={img1} alt="CardImage" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">
          Female Quran Tutors</h3>
          <p className="card-description">Learn from experienced and qualified female Quran tutors
Safe and comfortable learning environment for sisters and daughters
Guidance with kindness, patience, and Islamic values</p>
          
        </div>
      </div>
      <div className="card">
        <img src={img4} alt="CardImage" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">Reasonable hadiya</h3>
          <p className="card-description">Affordable Quran education for all
Economical tuition fees without compromising quality
Learn with us, without breaking the bank</p>
          
        </div>
      </div>
      {/* <div className="card">
        <img src={img1} alt="CardImage" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">
          Money Back Guarantee</h3>
          <p className="card-description">Risk-free learning with our Money Back Guarantee
Satisfaction ensured or your money refunded
Trust us to deliver exceptional Quran education</p>
          
        </div>
      </div> */}
      <div className="card">
        <img src={img3} alt="CardImage" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">
          Experienced Quran Tutors</h3>
          <p className="card-description">Learn from expert Quran tutors with years of experience
Guiding you with patience, knowledge, and dedication
Unlock the secrets of the Quran with confident instruction</p>
          
        </div>
      </div>
      <div className="card">
        <img src={img2} alt="CardImage" width={150} height={150} className="card-image--" />
        <div className="card-content">
          <h3 className="card-title">
          Student Convenient Schedule</h3>
          <p className="card-description">Flexible scheduling to fit your busy life
Learn Quran at times that suit you best
Convenient classes to accommodate your lifestyle</p>
          
        </div>
      </div>
      {/* <div className="card">
        <img src={img1} alt="CardImage" className="card-image" />
        <div className="card-content">
        <i class="fa-solid fa-person-dress"></i>
          <h3 className="card-title">
          Quran Classes for Kids</h3>
          <p className="card-description">Empowering kids with Quranic wisdom, instilling faith, and shaping their future with Islamic values and principles.</p>
         
        </div>
      </div> */}
    </div>
</div>


   
   
{/* image={Card.image} button={card.button} */}
   
   
   
   </>
  )
}

export default WhyChouseUs
