import React, { useEffect } from 'react'
import './WhyChouseUs.css'
import { Link } from 'react-router-dom'
import img1 from '../../Assets/WhatsApp Image 2024-09-01 at 22.19.00_3789092e.jpg'
import AOS from 'aos'
import img3 from "../../Assets/WhatsApp Image 2024-09-23 at 14.28.00_16df96c5.jpg"
import img4 from '../../Assets/bg2.png'
import img5 from '../../Assets/WhatsApp Image 2024-09-23 at 09.23.18_097f6f48.jpg'
import img6 from '../../Assets/WhatsApp Image 2024-09-23 at 14.27.21_0ce2a35f.jpg'
import img7 from '../../Assets/WhatsApp Image 2024-09-02 at 11.15.37_b99178d1.jpg'




const WhyChouseUs = () => {

  const cardsData = [
    {
      id: 1,
      title: "Personalized Learning",
      description: "Experience tailored quranic education that adapts to your unique learning style and pace making learning easy and enjoyable.",
      image: `${img3}`, 
    },
    {
      id: 2,
      title: "Expert Scolor",
      description: "Learn from expert Quran tutors with years of experience Guiding you with patience, knowledge, and dedication Unlock the secrets of the Quran with confident instruction",
      image: `${img7}`, 
    },
    {
      id: 3,
      title: "Female Quran Tutors",
      description: "Learn from experienced and qualified female Quran tutors Safe and comfortable learning environment for sisters and daughters Guidance with kindness, patience, and Islamic values",
      image: `${img1}`, 
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Flexible scheduling to fit your busy life Learn Quran at times that suit you best Convenient classes to accommodate your lifestyle",
      image: `${img5}`, 
    },
    {
      id: 5,
      title: "Reasonable Hadiya",
      description: "Affordable Quran education for all Economical tuition fees without compromising quality Learn with us, without breaking the bank",
      image: `${img4}`},
    {
      id: 6,
      title: "Comprehensive curriculum",
      description: "Our comprehensive curriculum covers everything from Tajweed to memorization, ensuring a well-rounded understanding of the Quran , catering to beginners and advanced learners alike.",
      
      image: `${img6}`,
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 3000,}
    );
  })
  return (
   <>
   <div className="container-fluid bg-img">
    <div className='text-center'>
    <h2 className='heading-whyChousUs-'>Would you like to
    learn <br /> Quran online with</h2>
    <h1 className='heading-whyChousUs'>AL-NISA QURAN INSTITUTE</h1>
    <Link to="/Registration"><button className=" btn-btn">Register Now</button></Link>
    </div>
   </div>
   <section className="why-choose-us container py-5">
      <div className="container ">
      <h1 className='text-center m-5 heading-whyChousUs--'>Why Choose AL-NISA QURAN INSTITUTE</h1>
        <div className="row">
          {cardsData.map((card) => (
            <div key={card.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow">
                <img src={card.image} alt={card.title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> 
   </>
  )
}

export default WhyChouseUs
