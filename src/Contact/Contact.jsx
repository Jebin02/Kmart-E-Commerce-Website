import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions or need help? Reach out to us using the form below.
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Address: 123 Main Street, City, Country</p>
          <p>📞 Phone: +91 123 456 7890</p>
          <p>✉️ Email: support@yourstore.com</p>
          <p>⏰ Working Hours: Mon-Fri 9am - 6pm</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          {submitted && <p className="success-msg">Your message has been sent!</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;