import React from 'react';
import Card from './Card';
import './CardList.css'
import img1 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.01_3c3228aa.jpg'
import img2 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.09_392f560f.jpg'
import img3 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.08_392bf190.jpg'
import img4 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.07_38d91719.jpg'
import img5 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.04_9ad3d636.jpg'
import img6 from '../../../Assets/WhatsApp Image 2024-08-19 at 21.22.02_4efd33a5.jpg'
import { useEffect } from 'react';



const cards = [
  {
    title: 'Basic Qaida for beginners',
    description: 'Arabic Qaida course is a basic course that is taught by our Quran Tutor using Arabic Qaida curriculum',
    image: `${img1}`,
    button: 'Learn More',
 
  },
  {
    title: 'Quran Reciation',
    description: 'Using qualified Quran tutors, you can learn to recite the Qur’an properly more quickly and easily than ever before..',
    image: `${img2}`,
    button: 'Learn More',
   
  },
  {
    title: 'Quran memorization',
    description: 'Through live memorization classes, you can learn how to memorise the Holy Qur’an and become a Hafiz/Hafiz of the Qur’an.',
    image: `${img3}`,
    button: 'Learn More',
  },
  {
    title: 'Quran Ijazah',
    description: 'Get Ijazah online from qualified Quran scholars in “Quran Recitation” and/or “Quran Memorization.”',
    image: `${img4}`,
    button: 'Learn More',
  },
  {
    title: 'Tafsir',
    description: 'The top Islam and Quran scholars can help you learn Quran Tafseer online and better understand the Quran.',
    image: `${img5}`,
    button: 'Learn More',
  },
  {
    title: 'Basic Qaida for beginners',
    description: 'Arabic Qaida course is a basic course that is taught by our Quran Tutor using Arabic Qaida curriculum.',
    image: `${img6}`,
    button: 'Learn More',
  },
];

const CardList = () => {
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
    <div className='container-fluid' data-aos="zoom-in">
    <div className="card-list- ">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} image={card.image} button={card.button} />
      ))}
    </div>
    </div>
    </>
  );
};

export default CardList;