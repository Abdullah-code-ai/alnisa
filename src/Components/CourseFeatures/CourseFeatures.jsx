import React, { useState } from 'react'
import './CourseFeatures.css'
import img from '../../Assets/certificate-400x400.png'
import img1 from '../../Assets/free-400x4001.png'
import img2 from '../../Assets/muslim-teacher-near-blackboard-back-cshool-illustration_567314-158-400x400.webp'
import img3 from '../../Assets/24-hours-400x400.png'
import img4 from '../../Assets/videoconference-400x400.png'
import ContactFormMain from '../RegisterNow/ContactFormMain'
const CourseFeatures = () => {

    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     message: "",
    //   });
    
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevState) => ({
    //       ...prevState,
    //       [name]: value,
    //     }));
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Handle form submission (e.g., API call)
    //     console.log("Form data submitted: ", formData);
    //   };
  return (
   <>
   <div className="container-fluid mt-5 bg-image-10">
    <div className="row">
        <div className="col-6 mt-2">

<ContactFormMain />
        {/* <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form mt-5">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div> */}









        </div>
        <div className="col-6 ">

      <div className="course-contact-form">
<h1 className="text-center main-1-heading-">Course Features</h1>

<div className='d-flex'>

<img src={img} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img1} className='course-imagess'  width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Free Trial Class</h1>
</div>
<div className='d-flex'>

<img src={img2} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img3} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
<div className='d-flex'>

<img src={img4} className='course-imagess' width={80} height={80}  alt="" /><h1 className='main-1-heading--'>Completion Certificates</h1>
</div>
      </div>
    

    
    
    
    
  



        </div>
    </div>
   </div>
   
   
   
   
   
   </>
  )
}

export default CourseFeatures
