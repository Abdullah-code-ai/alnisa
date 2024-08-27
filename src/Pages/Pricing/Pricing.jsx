import React, { useEffect } from 'react'
import './Pricing.css'
import { Link } from 'react-router-dom';

const Pricing = () => {

    const plan = [
        {
          title: '5 Days/Week',
          price: 'rs:9000',
          features: ['Per month', '30 Minutes Class', ' ✔  Concession Available', '✔  22 Classes' ,  ],
        },
        {
          title: '4 Days/Week',
          price: 'rs:8000',
          features: ['Per month', '30 Minutes Class', '✔  Concession Available', '✔  18 Classes',],
        },
       
       
    ];
      const fee = [
        {
          name: "5 Days/Week",
          price: "$150",
          features: ["Per month", "✔  20 Classes/Month  ", "     ✔  Free Trial Classes", "✔  60 Minutes/Class"],
          buttonLabel: "Free Trail"
        },
        {
          name: "5 Days/Week",
          price: "$80",
          features: ["Per month", "  ✔  20 Classes/Month", "✔  Free Trial Classes", "✔  30 Minutes/Class"],
          buttonLabel: "Free Trail"
        },
        {
          name: "4 Days/Week",
          price: "$65",
          features: ["Per month","✔  16 Classes/Month",  "✔  Free Trial Classes", "✔  30 Minutes/Class",],
          buttonLabel: "Free Trail"
        },
        {
          name: "3 Days/Week",
          price: "$50",
          features: ["Per month","✔  12 Classes/Month",  "✔  Free Trial Classes", "✔  30 Minutes/Class",],
          buttonLabel: "Free Trail"
        },
        {
          name: "2 Days/Week",
          price: "$30",
          features: ["Per month","✔  8 Classes/Month",  "✔  Free Trial Classes", "✔  30 Minutes/Class",],
          buttonLabel: "Free Trail"
        }
        ,
        {
          name: "Weekends",
          price: "$40",
          features: ["Per month","✔  8 Classes/Month",  "✔  Free Trial Classes", "✔  30 Minutes/Class",],
          buttonLabel: "Free Trail"
        }
      ];

      useEffect(() => {
        AOS.init({
          duration: 3000,
        });
      }, []);

  return (
   <>
   <din className="container-fluid bg1">
    <h1 className='title-'>Pricing Plans</h1>


   </din>
   <div className="container text-center mt-5" >
      <h1 className='title-'>For Pakistani Students</h1>
    </div>
   <div className="container-fluid" data-aos="zoom-in">
    <div className="pricing-container">
      {plan.map((plan, index) => (
        <div className="pricing-card" key={index}>
          <h2 className="card-title">{plan.title}</h2>
          <p className="card-price--">{plan.price}</p>
          <ul className="card-features">
            {plan.features.map((feature, idx) => (
              <li className='data' key={idx}>{feature}  <hr className='line' /></li>
              
            ))}
          </ul>
        <Link to="/Contact-Form" className="card-button-">
          <button className="card-button">Free Trail</button></Link>
        </div>
      ))}
    </div>
    </div>
   
   
   <div className="container">

<h1 className='title-'>For International Students</h1>
   <div className="pricing-cards-container" data-aos="zoom-in">
      {fee.map((fee, index) => (
        <div key={index} className="pricing-card">
          <h3 className="price-name">{fee.name}</h3>
          <p className="price">{fee.price}</p>
          <ul>
            {fee.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <Link to="/Contact-Form" className="card-button-">
           
          
          <button className="card-button-">{fee.buttonLabel}</button></Link>
        </div>
      ))}
    </div>








   </div>
   
   
   
   </>
  )
}

export default Pricing
