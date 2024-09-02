import React ,{useEffect} from 'react'
import './Hero.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
const Hero = () => {

    // const [currentIndex, setCurrentIndex] = useState(0);

    // const slides = [
    //   { id: 1, title: 'Slide 1', description: 'Description for Slide 1' },
    //   { id: 2, title: 'Slide 2', description: 'Description for Slide 2' },
    //   { id: 3, title: 'Slide 3', description: 'Description for Slide 3' },
    //   { id: 4, title: 'Slide 4', description: 'Description for Slide 4' },
    // ];
  
    // const handlePrev = () => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    //   );
    // };
  
    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    //   );
    // };



useEffect(() => {
  AOS.init(
    {
      duration: 1000
    }
  );
}, []);


  return (
   <>
   
   <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-welcome-title " data-aos="fade-down-right">Welcome to <br /></h2>
        <h1 className="hero-title"  data-aos="fade-right">AL-NISA QURAN <br /> INSTITUTE</h1>
        <p className="hero-description"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">We provide solutions to make your life easier. Discover more about what we offer and how we can help you.</p>
        <div className="hero-buttons"  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
          <Link to="/About" className="hero-button primary button">Learn More</Link>
          <Link to="/Contact" className="hero-button secondary button">Contact Us</Link>
        </div>
      </div>
    </section>
   
   
   </>
  )
}

export default Hero
