import React from 'react'
import CourseCard from '../../About/CourseCard'
import PricingCards from '../../Home/PricingCards'
import './NooraniQaida.css'
import img1 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.03_191e54a7.jpg'
import FreeTrail from '../../../Components/3DaysTrail/FreeTrail'
import CourseFeatures from '../../../Components/CourseFeatures/CourseFeatures'
// import CourseFeatures from '../../../Components/CourseFeatures/CourseFeatures'<CourseFeatures />
const NooraniQaida = () => {
  return (
    <>
    <div className="container-fluid bg-img-1 text-center">
        <h1 className='main-1-heading'> Basic Qaida For Beginners</h1>

    </div>
    
    <div className="container main-data mt-5">
        <div className="row">
           
            <div className="col-6">
            <div className="course-data">
<h1 className='main-data-hrading'>Basic Qaida For Beginners</h1>

    <p className='main-data-para'>We are pleased to share with you that we are starting Online Quran Classes For Kids. It is a privilege for a Muslim to recite and learn Quran. The blessings are on all those who study and teach at these Online Quran Classes For Beginners. The curriculum for Online Quran Classes for Kids is designed in a student centric way. This content serves great purpose for Kids Quran classes. The reason for Quran Teaching Online is to serve Muslims. This is the reason that we have started Qaida for Beginners as well. Our Online Quran Academy is a brilliant initiative that will be beneficial for Muslims all around the world. We are humbled to inform that Quran Teaching Online will motivate Muslims. The inspiration it will provide for Online Quran Classes for Kids is stunning. Muslims from every nook and corner of the world will gather to attend these classes. These Online Quran Classes for Kids will help the Muslims understand the recitation. This is a great way to earn blessings. The amazing response Quran Teaching Online is getting is splendid. This is a beautiful way to serve the society as well. our society needs good role models. The best role model is our Prophet Muhammad صلى الله عليه وآله وسلم

</p>
</div>





            </div>
            <div className="col-6">
    <img src={img1} alt="" className='img1' />
</div>
        </div>




    </div>


    <CourseFeatures />
    <div className="container">
        <div className="row">
            <div className="col-6">



            <div className="card-noorani">
       
        <div className="card-content">
           
          <h1 className="card-title main-data-hrading">Reading Quran Basics Course</h1>
       
       <p className='main-data-para'>Do you dream of mastering the Holy Quran recitation whether for you or your children? Reading the Quran Basics course is your first step to achieving your dream. You and your children will also learn how to read Arabic in this course.

It is important to know that Arabic provides diacritics. Diacritics tell you how to read Arabic words so you do not need to memorize their pronunciation. You will also learn how Arabic letters are linked together or separated, and how to read words, then short and long sentences. Moreover, you will be able to read Arabic supplications.

You will also discover the features of the Holy Quran’s writing, which differs significantly from conventional Arabic writing. We train you to read the entire Holy Quran at the next level during the course.

Your instructor will also instruct you on the phonetic Quran during the Reading Quran Basics session. You would be able to read the brief Quranic Surahs with ease thanks to him or her.</p>
         
          
       </div>
      </div>



            </div>
            <div className="col-6">

            <div className="card-noorani">
        
        <h1 className="card-title main-data-hrading">In the Reading Quran Basics course, you’ll learn:</h1>
      
            <ul className="card-content ms-4">
                <li className='lists'>The Arabic Alphabet</li>
                <li className='lists'>Arabic diacritics</li>
                <li className='lists'>Letters Forms</li>
                <li className='lists'>Vowels</li>
                <li className='lists'>Sukun</li>
                <li className='lists'>Shaddah</li>
                <li className='lists'>Madd – Lengthening</li>
                <li className='lists'>Shaddah with Tanween</li>
                <li className='lists'>Laam rules</li>
                <li className='lists'>AlifulWasl rules</li>
                <li className='lists'>Characteristics of the Quranic writing</li>
            </ul>
        










      </div>







            </div>
        </div>
    </div>
    
    <div className="container text-center">
        <h1 className="main-data-hrading text-center">AL-NISA Quran Institute Online Courses</h1>
    </div>
    
    <CourseCard />
    <FreeTrail />
    <PricingCards />
    
    </>
  )
}

export default NooraniQaida
