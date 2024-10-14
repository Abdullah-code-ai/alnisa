// CourseCard.js
import React from 'react';
import './CourseCard.css';

import img1 from '../../Assets/WhatsApp Image 2024-09-24 at 09.12.47_098db80c.jpg'
import img2 from '../../Assets/WhatsApp Image 2024-09-24 at 09.12.57_f6113d2d.jpg'
import img3 from '../../Assets/WhatsApp Image 2024-09-02 at 15.39.49_baf337a4.jpg'
import img4 from '../../Assets/WhatsApp Image 2024-09-24 at 09.20.01_1e2a72a7.jpg'
import img5 from '../../Assets/WhatsApp Image 2024-09-24 at 09.18.19_0694184e.jpg'
import img6 from '../../Assets/WhatsApp Image 2024-09-23 at 14.27.21_0ce2a35f.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
// Example images
// const images = [
 
// ];

const CourseCard = () => {
  const courses = [
    {
      id: 1,
      title: 'Basic Noorani Qaida',
      image: `${img1}`,
      link: '/Noorani-Qaida',
    },
    {
      id: 2,
      title: 'Online Quran Reciation',
      image: `${img2}`,
      link: '/Quran-recitation-online',
    },
    {
      id: 3,
      title: 'Quran Tajweed Course',
      image: `${img3}`,
      link: '/v',
    },
    {
      id: 4,
      title: 'Memorization of Holy Quran',
      image: `${img4}`,
      link: '/Online-Quran-Memorization',
    },
    {
      id: 5,
      title: 'Quran Tafseer Course',
      image: `${img5}`,
      link: '/Tafseer',
    },
    {
      id: 6,
      title: 'Quran Translation',
      image: `${img6}`,
      link: '/Quran-Translation',
    },
  ];
   useEffect(() => {
    AOS.init({
      duration: 3000,}
    );
   })
  

  return (
    <>
     <h2 className="text-center mb-5 container-title mt-5">Our Popular Courses</h2>
   <div className="course-cards-grid">
      {courses.map((course) => (
        <div className="course-card" key={course.id}>
          <img src={course.image} alt={course.title} className="course-image" />
          <h3 className="course-title">{course.title}</h3>
          <Link to={course.link} className="course-link">Learn More</Link>
        </div>
      ))}
    </div>

{/* <div className="container "  >
  <h2 className="text-center mb-5 container-title mt-5">Our Popular Courses</h2>
    <div className="row ">
        <div className="  col-sm-12 col-md-12 col-lg-4 "  data-aos="zoom-in">

        <div className="card col-sm-12 ">
        <img src={img1} alt="CardImage" className="card-image" />
        <div className="card-content">
            <Link className='text-decoration-none' to='/Noorani-Qaida'>
          <h3 className="card-title">Basic Noorani Qaida</h3></Link>
        
          
        </div>
      </div>




        </div>
        <div className="col-sm-12 col-lg-4"  data-aos="zoom-in">

        <div className="card   ">
        <img src={img2} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-recitation-online'>
          <h3 className="card-title">Online Quran Reciation</h3></Link>
          
          
        </div>
      </div>

        </div>
        <div className="col-sm-12 col-lg-4"  data-aos="zoom-in">

        <div className="card">
        <img src={img3} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-with-Tajweed'>
          <h3 className="card-title">Quran Tajweed Course</h3></Link>
          
          
        </div>
      </div>

        </div>
        <div className="col-sm-12 col-lg-4"  data-aos="zoom-in">

        <div className="card">
        <img src={img4} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Online-Quran-Memorization'>
          <h3 className="card-title">Memorization of Holy Quran</h3></Link>
         
          
        </div>
      </div>


        </div>
        <div className="col-sm-12 col-lg-4"  data-aos="zoom-in">

        <div className="card">
        <img src={img5} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Tafseer'>
          <h3 className="card-title">Quran Tafseer Course</h3></Link>
        
          
        </div>
      </div>

        </div>
        <div className="col-sm-12 col-lg-4"  data-aos="zoom-in">

        <div className="card">
        <img src={img6} alt="CardImage" className="card-image" />
        <div className="card-content">
        <Link className='text-decoration-none' to='/Quran-Translation'>
          <h3 className="card-title">Quran Translation</h3> </Link>
         
          
        </div>
      </div>


        </div>
    </div>
</div> */}


    </>
  );
};

export default CourseCard;
