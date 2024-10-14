import React from 'react'
import './QuranTranslation.css'
import CourseFeatures from '../../../Components/CourseFeatures/CourseFeatures'
import CourseCard from '../../About/CourseCard'
import FreeTrail from '../../../Components/3DaysTrail/FreeTrail'
import PricingCards from '../../Home/PricingCards'
import img from'../../../Assets/5.png'
const QuranTranslation = () => {
  return (
   <>
 <div className="container-fluid bg-img-10"></div>
 <div className="container mt-5">
  <div className="row">
    <div className="col-sm-12 col-lg-6">
    <p className='about-para'>Quran Translation: Bridging Language and Understanding

The Quran is a divine guide for all of humanity, but understanding its profound message can be challenging for non-Arabic speakers. At our Quran Academy, we provide meticulously crafted Quran translations that are both accurate and easy to comprehend. Our goal is to help individuals from diverse linguistic backgrounds connect with the essence of the Quran’s teachings.

Our translation process involves a deep understanding of classical Arabic, the historical context, and Islamic scholarship, ensuring that each verse is translated with precision and reverence. We are committed to preserving the rich meanings of the Quran, avoiding misinterpretations, and providing explanations where necessary to help convey the intended message.
Our translations cater to different needs:
Literal Translations for those looking for word-for-word accuracy.
Interpretive Translations that provide explanations of complex verses for better understanding.

Transliterations for learners who wish to pronounce the Quran in Arabic while reading in their native script.


We believe that Quranic understanding should be accessible to everyone, which is why we offer translations in multiple languages, ensuring that the timeless message of Allah reaches hearts across the world. Whether you're seeking personal spiritual growth, academic study, or a deeper connection with the Quran, our translation resources serve as a valuable companion on your journey.

Join us in exploring the divine wisdom of the Quran, in a language you can fully understand and appreciate.


---

This expanded version emphasizes the quality and depth of your translation services while appealing to a broad audience
</p>
    </div>

    <div className="col-sm-12 col-lg-6">
      <img src={img} className='about-image-quran'  alt="img-fluid" />
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

export default QuranTranslation
