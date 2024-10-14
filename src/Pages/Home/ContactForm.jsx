import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";
import iimg from "../../Assets/2.png";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

   
    const handleSubmitButton = (e) => {
        if (formData.name === "" && formData.email === "" && formData.phone === "" && formData.message === "" && formData.name === ""  ) {
            alert("Please fill out all fields.");
                //  <div className="alert alert-danger">Please fill LL out all fields.</div>
           } else if (formData.email === "" ||!formData.email.includes("@")) {
            <div className="alert alert-danger">Please enter a valid email.</div>
        
            
           }

    }


    const handleSubmit = (e) => {
        e.preventDefault();

        



        emailjs.sendForm('service_0fkveg7', 'template_d1azc87', e.target, 'tzMLxrPQ2CwSxxYpp')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            }, (error) => {
                console.log(error.text);
                alert("Message failed to send.");
            });




    };

    return (
        <>
       
        <div className="container">
<div className="row">
    <div className="col-sm-12  col-md-6">
    <div className="contact-form-container contact-form- mt-5">
            <form onSubmit={handleSubmit} className=" contact-form contact-form-">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Enter your name:"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email:"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="Enter your phone number:"
                    onChange={handleChange}
                    required
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    placeholder="Enter your message:"
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" onClick={handleSubmitButton} className="btn btn-primary ">Send Message</button>
            </form>
        </div>




    </div>
    <div className="col-sm-12  col-md-6 mt-5 ">

<img src={iimg} alt="" className="contact-img" />




        
    </div>
</div>
        </div>
        
        </>
    );
};

export default ContactForm;
