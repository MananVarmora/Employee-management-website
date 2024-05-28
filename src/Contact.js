import React from 'react';
import './Contact.css'; // Import your CSS file
const Contact = () => {

    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
  
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><b>Email:</b> contact@company.com</p>
          <p><b>Phone:</b> (123) 456-7890</p>
          <p><b>Address:</b> 123 Main St, City, Country</p>
        </div>
  
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    );
  };

export default Contact;
