import React from 'react'
import './Abou.css'
// import img1 from '../../Assets/1.png'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import img2 from '../../Assets/Quran-Reading-1-2.jpg'
import AOS from 'aos'


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,}
    );
  })
  return (
  <>
  
  <div className="container mt-5">
    <div className="row">
        <div className="col-lg-6 col-md-12" >
<h1 className='text-center about-heading '  data-aos="fade-right">About Us</h1>

<p className='about-para' data-aos="fade-right">AL-NISA Quran Institute is an Online Quran Academy that offers Online Quran Classes to people all over the World. We seek to deliver the best and completely accurate comprehension of Basic Quran Reading, Quran with Tajweed, Quran Memorization, Tafseer e Quran, and Quranic Arabic on one platform with qualified, recognized AL-NISA Quran  Tutors and instructors. In this Digital age, learning the Quran is not difficult. The top teachers are available to you even if you choose to learn at home.

AL-NISA Quran Institute is one of the leading and legit platforms for learning the Quran. Any device that has Internet access may be used to learn the Quran Online. It might be your laptop, Tablet, Computer, or even your Mobile Phone. With the aid of thorough knowledge of Tajweed, comprehension of this esteemed text, and Quranic Arabic, our main focus is on imparting the best Quranic interpretations.

Due to its commitment to Students and its persistent attempts to enhance it over time, the AL-NISA Quran Institute has steadily soared to new heights in a relatively short period of time. We want to include as many students as we can in the charitable deed of Hifz al Quran.</p>

<Link to="/About" className='btn btn-primary btn-primay'  data-aos="fade-down-right">Read More</Link>

        </div>
        <div className="col-lg-6 col-md-12 mt-3">

<img src={img2} width={650} height={450} alt="img-fluid" className='col-md-12 about-img' data-aos="zoom-in" />

        </div>
    </div>
  </div>
  
  
  
  
  
  
  
  </>
  )
}

export default About
