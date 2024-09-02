import React from 'react'
import './PricingCards.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';

const PricingCards = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '$30/month',
      features: ['Free Registration', '30 Minutes Class', 'One to One Classes', '24/7 Classes' , ' 2 Classes in one week' ],
    },
    {
      title: 'Standard Plan',
      price: '$35/month',
      features: ['Free Registration', '30 Minutes Class', 'One to One Classes', '24/7 Classes', ' 3 Classes in one week'],
    },
    {
      title: 'Premium Plan',
      price: '$45/month',
      features: ['Free Registration', '30 Minutes Class', 'One to One Classes', '24/7 Classes', ' 5 Classes in one week'],
    },
   
  ];
  // const plans = JSON.parse(localStorage.getItem('plans')) || [];
  // localStorage.setItem('plans', JSON.stringify(plans));
  // console.log(plans);

useEffect(() => {
  AOS.init({
    duration: 3000,}
  );
})

  return (
    <>
     <div className="container text-center " >
      <h1 className='title-'>Monthly Fee</h1>
    </div>
   <div className="container-fluid">
    <div className="pricing-container" data-aos="zoom-in">
      {plans.map((plan, index) => (
        <div className="pricing-card" key={index}>
          <h2 className="card-title">{plan.title}</h2>
          <p className="card-price">{plan.price}</p>
          <ul className="card-features">
            {plan.features.map((feature, idx) => (
              <li className='data' key={idx}>{feature}  <hr className='line' /></li>
              
            ))}
          </ul>
        <Link to="/Contact-Form" className="card-button-">
          <button className="card-button">Free Registration</button></Link>
        </div>
      ))}
    </div>
    </div>
    
    
    
    </>
  )
}

export default PricingCards
