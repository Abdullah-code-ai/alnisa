import React from 'react'
import './QuranwithTajweed.css'
import CourseCard from '../../About/CourseCard'
import FreeTrail from '../../../Components/3DaysTrail/FreeTrail'
import PricingCards from '../../Home/PricingCards'
import CourseFeatures from '../../../Components/CourseFeatures/CourseFeatures'
const QuranwithTajweed = () => {
  return (
    <>
     <div className="container-fluid bg-img-5 text-center">
        <h1 className='main-1-heading'> Quran with Tajweed </h1>

    </div>


    <div className="container main-data mt-5 ">
        <h1 className="main-data-hrading">Online Quran Tajweed Course</h1>
        <p className="main-data-para">
        This course is designed for the students who already completed Quran Reading course and can read Quran but want to improve their tajweed skills. This course will provide practice in order to enhance student’s confidence while applying tajweed rules which were taught in basic level course. One of the main principles of fluent Quranic reading is repetition and lot of practice. All Basic tajweed rules will be covered along with reading practice.
        </p>
        <h1 className="main-data-hrading">
        How to Start Online Tajweed Course?
        </h1>
        <p className="main-data-para">
        This course builds on the Application of Tajweed Rules in Quran Reading Course. To join, you should already know how to read Arabic words and understand basics like Harakaat, sukoon, madd, tanween, and shaddah. Completing the Quran Reading Course is required.

In this program, you’ll improve your Quran reading skills using tajweed rules. The course focuses on practice and repetition to help you become confident and skilled. By the end, you’ll be able to read the Quran with correct tajweed, creating a lasting connection with the Quran.

To sign up for our Online Tajweed Course, go to the Quran Mentors website and find the courses section. Select the Tajweed course, fill out the online registration form with your details, and you’ll get a confirmation email with course information and schedule.

Once registered, you’ll start learning Tajweed with our certified tutors, offering a thorough and flexible learning experience. If you need help, our support team is available on the website.
        </p>
      </div>
      <CourseFeatures />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card-noorani">
              <div className="card-content">
                <h1 className="card-title main-data-hrading ">
                why should we learn Tafseer Quran Course?
                </h1>

                <p className="main-data-para-">
                The purpose of learning the Quran with Tajweed is to read & understand the Quran with pronunciation without making mistakes. Our staff is available online 24 hours a day to offer this course to the students.  Students that adopt this course can learn the Quran effectively with the help of Tutors. We offer excellent & quality education that students can get from home.  The teacher delivers them lessons and instructs them properly.  All Muslims living in USA, UK & Canada love to learn comfort at home. Al-Kahf welcomes people of all ages to learn Holy Quran with Tajweed & teaching the rules of Tajweed develops their ability in them to learn Quran reading skills. In their free time, Muslims across the world learn Tajweed without disturbing their jobs or daily routine work. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card-noorani">
              <h1 className="card-title main-data-hrading">
              In the Quran Tajweed  course, you’ll learn:
              </h1>

              <ul className="card-content ms-4">
                <li className="lists">Quran recitation with proper accent</li>
                <li className="lists">Rules about recitation</li>
                <li className="lists">Exercises of Arabic alphabets</li>
                <li className="lists">Recitation with Hadar and Tarteel</li>
                <li className="lists">letter changes its form in the Quran</li>
                <li className="lists">Long harakat should be stretched</li>
                <li className="lists">Rules of Izhar, Ikhfa, Idgham and Iqlab</li>
                <li className="lists">
                Rules of Izhar-e-shafawi, Ikhfa-e-shafawi, Idgham-e-shafawi
                </li>
                <li className="lists">Exercises with the rules of Tajweed</li>
                 <li className="lists">The Shaddah</li>
             <li className="lists">Hamzatul-Wassl</li>
              </ul> 
     </div>
   </div>
      </div>
  </div>


















    
    
    <CourseCard />
    <FreeTrail />
    <PricingCards />
    
    </>
  )
}

export default QuranwithTajweed
