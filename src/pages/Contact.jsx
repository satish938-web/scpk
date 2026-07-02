import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Get in touch with our team.</p>
      </div>
      
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have questions about an order, our products, or want to partner with us for wholesale? Reach out to us using the details below.</p>
          
          <div className="contact-method">
            <div className="icon-wrapper"><FiPhone /></div>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
              <span>Mon-Sat, 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="icon-wrapper"><FiMail /></div>
            <div>
              <h3>Email</h3>
              <p>support@scpk.com</p>
              <span>We aim to reply within 24 hours</span>
            </div>
          </div>
          
          <div className="contact-method">
            <div className="icon-wrapper"><FiMapPin /></div>
            <div>
              <h3>Headquarters</h3>
              <p>Chandni Chowk</p>
              <p>New Delhi, India - 110006</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Order Inquiry, Wholesale, etc." required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

