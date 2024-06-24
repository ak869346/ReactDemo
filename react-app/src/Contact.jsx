import React, { useState, useEffect } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      countryCode: '',
      contact: '',
      message: ''
    });
  
    const countryCodes = ['+1', '+44', '+91', '+86'];
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
    };
  
    return (
      <section id="contact" className="contact-section">
        <h2 className='ankit'> Contact Support</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Name'
            required
          />
  
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Email'
            required
          />
  
          <label htmlFor="country-code">Country Code:</label>
          <div className="dropdown-wrapper">
            <select
              id="country-code"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Country Code</option>
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </div>
  
          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
  
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder='Enter Message'
            required
          />
  
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  
  export default Contact;