import React from 'react';
import Card from './Card';
import './CardList.css'
import img1 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.01_3c3228aa.jpg'
import img2 from '../../../Assets/le.jpg'
import img3 from '../../../Assets/mo.jpg'
import img4 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.07_38d91719.jpg'
import img5 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.04_9ad3d636.jpg'
import img6 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.02_4efd33a5.jpg'
import { useEffect } from 'react';
import AOS from 'aos';
// import { Link } from 'react-router-dom';



// const cards = [
//   {
//     title: 'Basic Qaida for beginners',
//     description: 'Arabic Qaida course is a basic course that is taught by our Quran Tutor using Arabic Qaida curriculum',
//     image: `${img1}`,
//     Link : '/Noorani-Qaida',
//     button: 'Learn More',
//      link: '/card1'
 
//   },
//   {
//     title: 'Quran Reciation',
//     description: 'Using qualified Quran tutors, you can learn to recite the Qur’an properly more quickly and easily than ever before..',
//     image: `${img2}`,
//     button: 'Learn More',
   
//   },
//   {
//     title: 'Quran memorization',
//     description: 'Through live memorization classes, you can learn how to memorise the Holy Qur’an and become a Hafiz/Hafiz of the Qur’an.',
//     image: `${img3}`,
//     button: 'Learn More',
//   },
//   {
//     title: 'Quran Tajweed Course',
//     description: 'Learn the art of reciting the Quran with perfect pronunciation and intonation through our comprehensive Tajweed course.',
//     image: `${img4}`,
//     button: 'Learn More',
//   },
//   {
//     title: 'Tafsir',
//     description: 'The top Islam and Quran scholars can help you learn Quran Tafseer online and better understand the Quran.',
//     image: `${img5}`,
//     button: 'Learn More',
//   },
//   {
//     title: 'Quranic Arabic Course',
//     description: 'This Course is specially design for one who is interested in Quran tafsir and Arabic at the same time.',
//     image: `${img6}`,
//     button: 'Learn More',
//   },
// ];

const CardList = () => {
  const cardsData = [
    { image: `${img4}`, title: 'Basic Qaida for beginners', description: 'Arabic Qaida course is a basic course that is taught by our Quran Tutor using Arabic Qaida curriculum', link: '/Noorani-Qaida' },

    { image: `${img2}`, title: 'Quran Reciation', description: 'Using qualified Quran tutors, you can learn to recite the Qur’an properly more quickly and easily than ever before.', link: '/Quran-recitation-online' },


    { image: `${img3}`, title: 'Quran memorization', description: 'Through live memorization classes, you can learn how to memorise the Holy Qur’an and become a Hafiz/Hafiz of the Qur’an.', link: '/Online-Quran-Memorization' },


    { image: `${img1}`, title: 'Quran Tajweed Course', description: 'Learn the art of reciting the Quran with perfect pronunciation and intonation through our comprehensive Tajweed course.', link: '/Quran-with-Tajweed' },


    { image: `${img5}`, title: 'Tafsir', description: 'The top Islam and Quran scholars can help you learn Quran Tafseer online and better understand the Quran.', link: '/Tafseer' },


    // { image: `${img6}`, title: 'Quranic  Course', description: 'This Course is specially design for one who is interested in Quran tafsir and Arabic at the same time.', link: '/Quranic-Arabic' }
  ];


useEffect(() => {
  AOS.init({
    duration: 3000,}
  );
})

  return (
<>
<div className="container mt-5"  data-aos="zoom-in">
<h1 className='text-center heading '>FEATURED COURSES</h1>
    </div>
    <div className="container-fluid"  data-aos="zoom-in">
<div className="card-container">
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