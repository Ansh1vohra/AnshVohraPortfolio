import React, { useState } from 'react';
import contactimg from "./Images/collab1.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://jo-board.vercel.app/api/users/reciveMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          mailBody: `Name: ${formData.name}\nemail: ${formData.email}\nMessage: ${formData.message}`,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setResponseMessage("Mail sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      } else {
        setResponseMessage(result.message || "Failed to send mail.");
      }
    } catch (error) {
      console.error("Error sending mail:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5 mb-3 text-white d-flex align-items-center" id="contact">
      <form onSubmit={handleSubmit} style={{ flex: '3 2 0', padding: '3.5rem' }} className="rounded d-flex flex-column align-items-stretch gap-4 flex-1">
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
        <button type="submit" className="btn btn-primary m-1" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
        {responseMessage && <p className="text-center mt-2">{responseMessage}</p>}
      </form>
      <img src={contactimg} className="d-none d-md-block" style={{ width: '170px', flex: "2 2 0" }} alt="contactVector" />
    </div>
  );
}

export default Contact;
