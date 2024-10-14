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
        Quranic Tajweed is the set of rules for reading and pronouncing Quran. It sees to it that every letter is pronounced accurately with the right accent and pacing. Tajweed is beneficial in keeping the tradition of Quran as was revealed and pronounced by RasoolAllah (S.W.A) alive. This involves mastering many aspects such as the proper pronunciation of letters (makhraj), characteristics of letters, observance to rules regarding elongation, stopping and merging. By following these instructions, the reciters can gain a better understanding of their Recitatoin and thus improve its beauty in long terms as well give heed to spirtual upliftment.
       </p>
        <p className="main-data-para">
        As with proper pronunciation of the Arabic script, learning to recite Quran properly is an essential skill for anyone wanting a more meaningful relationship between them and The Glorious Quraan. We also focus on Tajweed in our academy so each letter pronounced perfectly as it should be pronounce, all the worlds combined with out any error. Correcting our Tajweed is not just for pronunciation and melody when reciting, it preserves the meaning of Quran. To help students with the complexities of pronunciation, enunciation and rhythm for them to recite Qur'an proudly. From beginners to those in need of "brushing-up," our Tajweed program provides the tools and understanding you need for a superior recitation.
        </p>
        {/* <h1 className="main-data-hrading">
        How to Start Online Tajweed Course?
        </h1>
        <p className="main-data-para">
        This course builds on the Application of Tajweed Rules in Quran Reading Course. To join, you should already know how to read Arabic words and understand basics like Harakaat, sukoon, madd, tanween, and shaddah. Completing the Quran Reading Course is required.

In this program, you’ll improve your Quran reading skills using tajweed rules. The course focuses on practice and repetition to help you become confident and skilled. By the end, you’ll be able to read the Quran with correct tajweed, creating a lasting connection with the Quran.

To sign up for our Online Tajweed Course, go to the AL-NISA Quran Academy website and find the courses section. Select the Tajweed course, fill out the online registration form with your details, and you’ll get a confirmation email with course information and schedule.

Once registered, you’ll start learning Tajweed with our certified tutors, offering a thorough and flexible learning experience. If you need help, our support team is available on the website.
        </p> */}
      </div>
      <div className="container">
       
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="card-noorani">
              <div className="card-content">
                <h1 className="card-title main-data-hrading ">
                why should we learn Tafseer Quran Course?
                </h1>

                <p className="main-data-para-">
                The purpose of learning the Quran with Tajweed is to read & understand the Quran with pronunciation without making mistakes. Our staff is available online 24 hours a day to offer this course to the students.  Students that adopt this course can learn the Quran effectively with the help of Tutors. We offer excellent & quality education that students can get from home.  The teacher delivers them lessons and instructs them properly.  Al-NISA Quran Institute welcomes people of all ages to learn Holy Quran with Tajweed & teaching the rules of Tajweed develops their ability in them to learn Quran reading skills. In their free time, Muslims across the world learn Tajweed without disturbing their jobs or daily routine work. 
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
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









  <CourseFeatures />









    
    
    <CourseCard />
    <FreeTrail />
    <PricingCards />
    
    </>
  )
}

export default QuranwithTajweed
