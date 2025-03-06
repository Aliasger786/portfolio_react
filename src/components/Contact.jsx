import React, { useRef } from 'react';
import './Contact.css';
import img1 from '../assets/image/contact-img.svg';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rhngt5h', 'template_i71j8kk', form.current, {
        publicKey: 'Wrykb51H_UdQUJg80',
      })
      .then(
        () => {
          toast.success('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className='contact' id='contact'>
      <div className='contact-container'>
        <div className='contact-image'>
          <img src={img1} alt='Contact' />
        </div>
        <div className='form-box'>
          <h1>GET IN TOUCH</h1>
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' placeholder='Name' required />

            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' placeholder='Email' required />

            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' placeholder='Enter Title here' required />

            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' placeholder='What you want to know?' required></textarea>

            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
