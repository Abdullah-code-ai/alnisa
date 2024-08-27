import React from 'react'
import './Home.css'
import Hero from './Hero'
import About from './About'

import CardList from './Card/CardList'
import WhyChouseUs from './WhyChouseUs'
import Review from './Review'
import PricingCards from './PricingCards'
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'
// import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <CardList />
    <WhyChouseUs />
    <Review />
    <PricingCards />
    <ContactForm />
   
    </>
  )
}

export default Home
