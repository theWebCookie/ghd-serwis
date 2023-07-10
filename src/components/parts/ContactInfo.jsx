import React from 'react';
import "../../styles/ContactInfo.css"
import clock from '../../assets/ContactForm/clock.svg';
import email from '../../assets/ContactForm/email.svg';
import fb from '../../assets/ContactForm/fb.svg';
import phone from '../../assets/ContactForm/phone.svg';

const ContactInfo = () => (
  <div className="contactInfo">
    <div className="square"></div>
    <h3>Informacje</h3>
    <div>
      <img src={fb} alt="facebook" />
      <span>facebook.com/GHDSerwis</span>
    </div>
    <div>
      <img src={phone} alt="phone number" />
      <span>+48 534-287-998</span>
    </div>
    <div>
      <img src={email} alt="email" />
      <span>ghdserwis@gmail.com</span>
    </div>
    <div>
      <img src={clock} alt="work hours" />
      <span>8:00-15:00</span>
    </div>
  </div>
)

export default ContactInfo;