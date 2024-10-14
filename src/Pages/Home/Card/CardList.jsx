import React from 'react';
import Card from './Card';
import './CardList.css'
import img1 from '../../../Assets/WhatsApp Image 2024-09-02 at 15.39.49_baf337a4.jpg'
import img2 from '../../../Assets/le.jpg'
import img3 from '../../../Assets/mo.jpg'
import img4 from '../../../Assets/WhatsApp Image 2024-09-02 at 12.58.58_27e1bc06.jpg'
import img5 from '../../../Assets/WhatsApp Image 2024-09-02 at 15.39.49_afc8f465.jpg'
 import img6 from '../../../Assets/Instagram post of Quran arabic quotes.png'
import { useEffect } from 'react';
import AOS from 'aos';
// import { Link } from 'react-router-dom';





const CardList = () => {
  const cardsData = [
    { image: `${img4}`, title: 'Basic Qaida for beginners', description: "The Noorani Qaida is a beginner's guide to learn Arabic letters and pronunciation for accurate Quran recitation.", link: '/Noorani-Qaida' },

    { image: `${img2}`, title: 'Quran Reciation', description: 'Quran recitation is the practice of reading the Quran with proper pronunciation, tajweed and rules, and understanding of its divine message.', link: '/Quran-recitation-online' },


    { image: `${img3}`, title: 'Quran memorization', description: 'Quran memorization is the  practice of lerning  the entire Quran by heart  with accuracy .', link: '/Online-Quran-Memorization' },


    { image: `${img1}`, title: 'Quran Tajweed Course', description: 'Learn the art of reciting the Quran with perfect pronunciation and intonation through our comprehensive Tajweed course.', link: '/Quran-with-Tajweed' },


    { image: `${img5}`, title: 'Quran  Tafseer Course', description: 'The Quran Tafseer course provides in-depth insights into the meanings and context of the Quran.', link: '/Tafseer' },


     { image: `${img6}`, title: 'Quran Translation', description: 'Quran Translation provides easy-to-understand meanings and accurate interpretations of the Quran verses', link: '/Quran-Translation' }
  ];


useEffect(() => {
  AOS.init({
    duration: 3000,}
  );
})

  return (
<>
{/* data-aos="zoom-in" */}
<div className=" mt-5"  >
<h1 className='text-center heading '>FEATURED COURSES</h1>
    </div>
    {/* container-fluid */}
    <div className=""  >
<div className="card-container" >
      {cardsData.map((card, index) => (
        <Card 
          key={index} 
          image={card.image} 
          title={card.title} 
          description={card.description} 
          link={card.link} 
        />
      ))}
    </div>
    </div>



    
    {/* <div className='container-fluid' data-aos="zoom-in">
    <div className="card-list- ">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} button={card.button} />
      ))}
    </div>
    </div> */}
    </>
  );
};

export default CardList;