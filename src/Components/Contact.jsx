import React, { useState } from 'react';
import contactimg from "./Images/contact-us-2.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to an API or email service
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="container mt-5 mb-3 text-white d-flex"  id="contact">
      <form onSubmit={handleSubmit} style={{flex:'3 2 0',padding:'3.5rem'}} className=" rounded d-flex flex-column align-items-strech gap-4 flex-1">
        <div className="form-group">
        <h3 className="text-center">Contact Me</h3>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control m-1"
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
            className="form-control m-1"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control m-1"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-1">
          Send Message
        </button>
      </form>
      <img src={contactimg} className="d-none d-md-block" style={{width:'170px',flex:"2 2 0"}} alt="contactVector" />
    </div>
  );
}

export default Contact;
