import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
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
