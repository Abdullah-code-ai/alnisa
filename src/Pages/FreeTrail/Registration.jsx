import React , { useState } from 'react'
import emailjs from 'emailjs-com';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';

const Registration = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const [statusMessage, setStatusMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        // Replace these with your actual EmailJS IDs
        const serviceID = 'your_service_id';
        const templateID = 'your_template_id';
        const userID = 'your_user_id';
    
        emailjs.send(serviceID, templateID, formData, userID)
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Message sent successfully!');
          })
          .catch((error) => {
            console.log('FAILED...', error);
            setStatusMessage('Failed to send message. Please try again.');
          });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      };
    
  return (
   <>
   <div className="container-fluid bg-img-main text-center">
    <h1 className="free-trail-title">Free trial </h1>
    <br />
    {/* <p className="free-trail-para">Quran learning online, Tajweed, Arabic online, Islamic Studies</p> */}
   

   </div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="text-center mb-4">Contact Form</h2>
          <form onSubmit={handleSubmit} className="free-trial-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Send Message</button>
            {statusMessage && <p className="status-message mt-3">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
   
   
   
   
   
   </>
  )
}

export default Registration
