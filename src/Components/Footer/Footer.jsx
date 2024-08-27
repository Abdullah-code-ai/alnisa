import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
const Footer = () => {
  return (
   <>
   
   <footer className='mt-5'>
        <div className="footer-col">
      
          <img src={logo} width={200} alt="" className='logo'  />
          <p className=' Link-p mt-2'>The main aim of Online Quran learning is to provide a platform for Muslims around the world to learn Quran with Tajweed & Tafseer, to understand religious education. We provide online Quran learning with a comfortable environment to all without discrimination of, Caste & age.</p>
         
        </div>
        <div className="footer-col">
          <h4 className='footer-heading'>Useful Links</h4>
          <ul>
            <li><Link to="/" className='Link'>Home</Link></li>
            <li><Link to="/About" className='Link'>About Us</Link></li>
            <li><Link to="/Blogs" className='Link'>Blogs</Link></li>
            <li><Link to="/Pricing" className='Link'>Pricing</Link></li>
            <li><Link to="/Contact" className='Link'>Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className='footer-heading'>Our Services</h4>
          <ul>
            <li><Link to="/Noorani-Qaida" className='Link'>Learn Noorani Qaida</Link></li>
            <li><Link to="/Quran-recitation-online" className='Link'>Learn Quran Reading</Link></li>
            <li><Link to="/Quran-with-Tajweed" className='Link'>Quran with Tajweed</Link></li>
            <li>  <Link to="/Online-Quran-Memorization" className='Link'>Memorization of Holy Quran</Link></li>
            <li>  <Link to="/Tafseer" className='Link'>Tafseer Quran Iearning</Link></li>
            <li>  <Link to="/Quran-for-Kids" className='Link'>Learn Quran for Kids</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className='footer-heading'>Contact  us</h4>
          <ul className="list-unstyled">
              <li  className="Link-"> <a href="abdullahtabassam79@gmail.com" className="Link-">info@quranacademy.com</a></li>
              <li className="Link-"> <a href="tel:+923100551936" className="Link-">+123 456 789</a></li>
            </ul>

          <div className="links">
         
            <a href="#"><i className="fab fa-linkedin-in" /></a>
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
          </div>
        </div>
       
      </footer>
   
   
   
   
   </>
  )
}

export default Footer
