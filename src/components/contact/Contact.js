import React from 'react';
import ContactForm from './ContactForm';
import WaveAnimation from './WaveAnimation';
import ContactMedia from './ContactMedia';

const Contact = () => {
  return (
    <div className='contact'>
      <WaveAnimation />
      <div className='contact-content'>
        <div className='contact-header'>Get in touch.</div>
        <div className='contact-form'>
          <ContactForm />
        </div>
        <div className='contact-media'>
          <ContactMedia />
        </div>
      </div>
    </div>
  )
};

export default Contact;
