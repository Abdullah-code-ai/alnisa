import React from 'react'
import './About.css'
import Hero from './Hero'
import img1 from '../../Assets/WhatsApp Image 2024-08-19 at 21.22.03_191e54a7.jpg'
import Features from './Features'
import CourseCard from './CourseCard'
import CourseFeatures from '../../Components/CourseFeatures/CourseFeatures'
const About = () => {
  return (
   <>
   <Hero />

   <div className="container mt-5">
    <div className="row">
        <div className="col-6">
<p className='about-para mt-5'>AL-NISA Quran Institute is an Online Quran Academy that offers Online Quran Classes to people all over the World. We seek to deliver the best and completely accurate comprehension of Basic Quran Reading, Quran with Tajweed, Quran Memorization, Tafseer e Quran, and Quranic Arabic on one platform with qualified, recognized AL-NISA Quran Institute instructors. In this Digital age, learning the Quran is not difficult. The top teachers are available to you even if you choose to learn at home.

AL-NISA Quran Institute is one of the leading and legit platforms for learning the Quran. Any device that has Internet access may be used to learn the Quran Online. It might be your laptop, Tablet, Computer, or even your Mobile Phone. With the aid of thorough knowledge of Tajweed, comprehension of this esteemed text, and Quranic Arabic, our main focus is on imparting the best Quranic interpretations.

Due to its commitment to Students and its persistent attempts to enhance it over time, the AL-NISA Quran Institute has steadily soared to new heights in a relatively short period of time. We want to include as many students as we can in the charitable deed of Hifz al Quran.</p>

        </div>
        <div className="col-6">

            <img src={img1} alt="img-fluid"  className='img-about' />
        </div>
        
    </div>



   </div>
   <div className="container">
    <div className="row">
        <div className="col-4"> <h1 className='text-center title-about'>Our Mission</h1></div>
        <div className="col-8">
            <p className='about-para'>Online Quran learning aims to teach online Quran across the world irrespective of color, creed & age. We make it easier for people to learn the Quran with comfort from home. This platform makes them able to learn the Quran from the basic level to the advanced level with Tajweed & Tafseer.</p>
        </div>
    </div>
   </div>


   <Features />

<CourseFeatures />


        <CourseCard /> 



   
   
   </>
  )
}

export default About
