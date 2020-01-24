import React from 'react';
// import WaveAnimation from './WaveAnimation';
import ContactMedia from './ContactMedia';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-content'>
        <div className='contact-header'>Get in touch.</div>
        <div className='contact-media'>
          <ContactMedia />
        </div>
      </div>
    </div>
  )
};

export default Contact;
