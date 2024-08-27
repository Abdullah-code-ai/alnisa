import React, { useState, useEffect }  from 'react'
import './Review.css'
import img2 from '../../Components/Navbar/logo512.png'
const Review = () => {
    const [reviews, setReviews] = useState([
        {
          id: 1,
          name: 'John Doe',
          review: 'My son is doing well with Online Quran learning and I think this is an effective platform for online Quran learning in the USA. Teachers provide a comfortable and friendly environment for learning as well as provide effective learning due to professional expertise. My son enjoys learning online. He is thankful to Quran academy & takes online classes every day.',
          rating: 5,
          image:   `${img2}` ,
        },
        {
          id: 2,
          name: 'Jane Doe',
          review: 'We are happy with Online Quran learningand its tutors are highly professional & fantastically teach Quran. We enjoy spending time with them. The tutors help the kids in learning as well as identifying & correcting mistakes. In classes, the last 5 minutes are about Adab.',
          rating: 4,
          image: `${img2}`,
        },
        {
          id: 3,
          name: 'Bob Smith',
          review: 'My niece has had an excellent experience learning the Quran online. Her teacher is very kind and uses all the best possible ways to engage her in Quran learning. In short, it is an effective platform that makes the students able to get religious education easily.',
          rating: 5,
          image: `${img2}`,
        },
        {
          id: 4,
          name: 'Alice Johnson',
          review: 'Learning the Holy Quran with Tajweed &Tafseer is always my dream. I am thankful to Online Quran learning for improving my Quran learning by Online Quran classes. ',
          rating: 5,
          image: `${img2}`,
        },
        {
          id: 5,
          name: 'Mike Brown',
          review: 'This course exceeded my expectations.',
          rating: 4,
          image: `${img2}`,
        },
      ]);
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const [animating, setAnimating] = useState(false);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(intervalId);
      }, [currentIndex, reviews]);
    
      const handlePrevClick = () => {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
          setAnimating(false);
        }, 500);
      };
    
      const handleNextClick = () => {
        setAnimating(true);
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % reviews.length);
          setAnimating(false);
        }, 500);
      };


useEffect(() => {
  AOS.init({
    duration: 3000,}

  ) 
}, [])

  return (
   <>
    <div className="student-reviews" >
   <div className='container  text-center' data-aos="fade-right">
        <h1 className='mt-5 review-heading'>STUDENT'S FEEDBACK</h1>
   
    <div className="student-review-carousel-container">
      <div className="carousel-inner">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''} ${
              animating ? 'animating' : ''
            }`}
          >
            <div className="review-container">
              <img src={review.image} alt={review.name} />
              <h3>{review.name}</h3>
              <p className='review'>{review.review}</p>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                 <i key={i} className="far fa-star" />
              
                ))}
                {[...Array(5 - review.rating)].map((_, i) => (
                     <i key={i} className="fas fa-star" />
                //   
                //  
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <button className="prev" onClick={handlePrevClick}>
        <i className="fas fa-chevron-left" />
      </button>
      <button className="next" onClick={handleNextClick}>
        <i className="fas fa-chevron-right" />
      </button> */}
    </div>
    </div>
    </div>
   
   
   
   
   </>
  )
}

export default Review
