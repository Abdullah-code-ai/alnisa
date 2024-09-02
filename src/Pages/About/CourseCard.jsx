// CourseCard.js
import React from 'react';
import './CourseCard.css';

import img1 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.01_3c3228aa.jpg'
import img2 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.01_9ff60502.jpg'
import img3 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.02_4efd33a5.jpg'
import img4 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.03_93df8d61.jpg'
import img5 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.03_191e54a7.jpg'
import img6 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.04_9ad3d636.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
// Example images
// const images = [
 
// ];

const CourseCard = () => {
   useEffect(() => {
    AOS.init({
      duration: 3000,}
    );
   })
  

  return (
    <>
<div className="container text-center">
  <h1 className='text-center heading-text m-5'>Our Courses</h1>
</div>

<div className="container "   data-aos="zoom-in">
    <div className="row">
        <div className="col-4">

        <div className="card">
        <img src={img1} alt="CardImage" className="card-image" />
        <div className="card-content">
            <Link className='text-decoration-none' to='/Noorani-Qaida'>
          <h3 className="card-title">Basic Noorani Qaida</h3></Link>
        
          
        </div>
      </div>




        </div>
        <div className="col-4">

        <div className="card">
        <img src={img2} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-recitation-online'>
          <h3 className="card-title">Online Quran Reading</h3></Link>
          
          
        </div>
      </div>

        </div>
        <div className="col-4">

        <div className="card">
        <img src={img3} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-with-Tajweed'>
          <h3 className="card-title">Quran with Tajweed</h3></Link>
          
          
        </div>
      </div>

        </div>
        <div className="col-4">

        <div className="card">
        <img src={img4} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Online-Quran-Memorization'>
          <h3 className="card-title">Memorization of Holy Quran</h3></Link>
         
          
        </div>
      </div>


        </div>
        <div className="col-4">

        <div className="card">
        <img src={img5} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Tafseer'>
          <h3 className="card-title">Tafseer Quran Iearning</h3></Link>
        
          
        </div>
      </div>

        </div>
        <div className="col-4">

        <div className="card">
        <img src={img6} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-for-Kids'>
          <h3 className="card-title"> Quran for Kids</h3> </Link>
         
          
        </div>
      </div>


        </div>
    </div>
</div>


    </>
  );
};

export default CourseCard;
