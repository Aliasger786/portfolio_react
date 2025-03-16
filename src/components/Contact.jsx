import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';
import img1 from '../assets/image/contact-img.svg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <div className='contact-image'>
          <img src={img1} alt='Space Theme' />
        </div>
        <div className='form-box'>
          <h1>GET IN TOUCH</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='Name' value={formData.name} onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Email' value={formData.email} onChange={handleChange} />

            <label htmlFor='title'>Title</label>
            <input type='text' id='title' placeholder='Enter Title here' value={formData.title} onChange={handleChange} />

            <label htmlFor='message'>Message</label>
            <textarea id='message' placeholder='What you want to know?' value={formData.message} onChange={handleChange}></textarea>

            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string
  })
};

export default Contact;
