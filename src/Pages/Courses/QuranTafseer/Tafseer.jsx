import React from 'react'
import './Tafseer.css'
import CourseCard from '../../About/CourseCard'
import FreeTrail from '../../../Components/3DaysTrail/FreeTrail'
import PricingCards from '../../Home/PricingCards'
import CourseFeatures from '../../../Components/CourseFeatures/CourseFeatures'

const Tafseer = () => {
  return (
    <>
    
  <div className="container-fluid bg-img-4 text-center">
        <h1 className='main-1-heading'> Online Quran Tafseer </h1>

    </div>
   
      <div className="container main-data mt-5 ">
        <h1 className="main-data-hrading">Online Quran Tafseer Course</h1>
        <p className="main-data-para">
        To deliver tafseer Al Quran in authentic and proper way, AL-NISA Quran Institute arranges expert Quran tutors. Mostly this Tafseer Quran is taken from tafsir ibn kathir and famous authentic tafaseer for their best and proper authentic way of narration. This plan includes translation of Quran, proper meanings of difficult Arabic letters and Explanation of Surah and verses.

Being a Muslim is a real bliss for us in the first place. When Allah has blessed us with this prestige, there is definitely some central responsibility left at our end hence. Allah Almighty, The Creator has made us in the best form, as said in our highly sacred Holy Book, Al Quran ( 95- 4)


Indeed, We created humans in the best form.

What we offer here, and the good we do is only for our sake, this would benefit us greatly not just in this world but also hereafter. For following religion Islam in its true sense, we do need to have it’s detailed and clear understanding. For that, there is nothing best and highly recommend than going for Tafseer. AL-NISA Quran Institute taking into consideration its due importance has now been introduced, a separate course on it in our own E-Quran Academy

Reading Quran in Arabic context, would tough add virtuous for you and is highly appreciated and acknowledged. Though it’s not enough for its understanding of meaning even though if you are native to Arabic. Learning Quran Translation with its proper understanding and Tafseer is the proper channel to follow. 

You don’t have to worry at all thinking how would I learn it, that’s our concern for you. You can start your online Quran translation course classes today with AL-NISA Quran Institute.
        </p>
        <h1 className="main-data-hrading">
          Embark on Your Divine Journey Today
        </h1>
        <p className="main-data-para">
          AL-NISA Online Academy invites you to join its community of seekers,
          learners, and educators on this beautiful path of Quranic
          enlightenment. With a curriculum designed for all levels of
          proficiency and a mission to foster love for the Quran worldwide, the
          academy is your gateway to discovering the unbounded grace and wisdom
          of Allah’s words. Take the first step towards realizing your spiritual
          aspirations. Dive into the tranquil depths of Quranic knowledge with
          AL-NISA Academy Online, where every verse opens a doorway to divine
          understanding and every surah guides you closer to the Almighty. Your
          journey towards divine harmony awaits. Are you ready to transcend the
          ordinary and embrace the extraordinary? Welcome to Online Quran
          Academy – where the journey of a lifetime begins
        </p>
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
                tafseer Quran course can be defined briefly as the interpretation or exegesis of the Quran. It aims to help Muslims understand the Holy Quran even better.

The term “Tafseer” or “Tafsir” is the Arabic word for exegesis. A Quranic Tafseer attempts to provide elucidation, explanation, interpretation, context, or commentary for clear understanding and conviction of words of Allah.

In order to do so, Tafseer Quran utilizes knowledge from multiple sciences such as linguistics, theology, and jurisprudence. 

Accordingly, the Tafseer Quran is considered the most significant science of the Quran.

Since the accurate application of Islam is based on proper comprehension of the guidance from Allah. So without learning the quran tafsir, mankind will have no correct understanding of the different passages of the Quran.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="card-noorani">
              <h1 className="card-title main-data-hrading">
              In the Tafseer Quran course, you’ll learn:
              </h1>

              <ul className="card-content ms-4">
                <li className="lists">Understanding the science of Tafseer Al Quran</li>
                <li className="lists">Meaning of verses word by word</li>
                <li className="lists">The contextual meaning of the Word</li>
                <li className="lists">Learn Islamic laws</li>
                <li className="lists">Skills in scholarly writings</li>
                <li className="lists">The sophistic and complicated ideas through the oral display</li>
                <li className="lists">Quranic explanations in Arabic</li>
                <li className="lists">
                Explain each and every Sura and its verses with other parts of the Quran and Hadees with referencesing
                </li>
                <li className="lists">Understand the commands of Allah (SWT)</li>
                 <li className="lists">The Shaddah</li>
             {/* <li className="lists">Hamzatul-Wassl</li> */}
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

export default Tafseer
