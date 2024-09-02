import React, { useState } from 'react'
import './daysTrail.css'
import emailjs from '@emailjs/browser';
const FreeTrail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selection: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0fkveg7', 'template_d1azc87', e.target, 'tzMLxrPQ2CwSxxYpp')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          selection: '',
        });
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };


  return (
    <div className="container-fluid img-1-form">

<div className="contact-form-container " id='free-trial-container'>
      <form onSubmit={handleSubmit} className="contact-form" >
        <h2>Contact Us</h2>
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Select Course</label>
          <select 
            name="selection" 
            value={formData.selection} 
            onChange={handleChange} 
            required
          >
            <option value="">Plese select an option</option>
            <option value="Option 1">Basis Qaida For  Bigners</option>
            <option value="Option 2">Quran Recitation </option>
            <option value="Option 3">Quran Memorization</option>
            <option value="Option 4"> Quran Tafseer</option>
            <option value="Option 5">Quran Tajweed </option>
            <option value="Option 6">Quran for Kids</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>

    </div>
  )
}

export default FreeTrail
