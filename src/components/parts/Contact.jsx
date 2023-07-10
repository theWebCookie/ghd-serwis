import React from 'react'
import ContactForm from '../parts/ContactForm';
import ContactInfo from '../parts/ContactInfo';
import '../../styles/Contact.css';

const Contact = () => (
  <div className="contactWrapper">
    <div className="panel"></div>
    <div className="leftSide">
      <div>
        <h3>Kontakt</h3>
        <p>Jeśli jesteś zainteresowany naprawą lub zakupem, zachęcam do skontaktowania się ze mną. Postaram się udzielić odpowiedzi najszybciej, jak tylko będzie to możliwe.</p>
      </div>
      <ContactForm/>
    </div>
    <ContactInfo/>
  </div>
);

export default Contact;