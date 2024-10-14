import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import AOS from 'aos';

const Card = ({ image, title, description, link }) => {

  useEffect(() => {
    AOS.init({
      duration: 3000,}
    );
  })
  return (
    <div className="card" data-aos="zoom-in">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className='btn btn-primary'>
        <Link to={link} className="card-link">Learn More</Link></button>
      </div>
    </div>
  );
};

export default Card;
