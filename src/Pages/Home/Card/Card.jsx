import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
const Card = ({ title, description, image, button   }) => {
  return (
<>



    <div className="card- "   >
      <img src={image} alt={title} />
      <div className="card-body-">
        <h2 className="card-title-">{title}</h2>
        <p className="card-text-">{description}</p>
        <Link to="/Courses">
          <button className="btn btn-primary">{button}</button>  {/* Button to navigate to Courses page */}
        
        </Link>
      </div>
    </div>
   


    </>
  );
};

export default Card;