import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';
import Alert from './Alert';
import style from '../../styles/ContactForm.css';

const ContactForm = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (alertMessage === 'success' || alertMessage === 'error') {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setAlertMessage('pending');
    setShowAlert(true);

    const form = formRef.current;
    const isValid = form.checkValidity();
    form.classList.add('submitted');
    const invalidField = form.querySelector(':invalid');
    invalidField?.focus();

    if (!isValid) return;

    try {
      await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_PUBLIC_KEY);
      setAlertMessage('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setAlertMessage('error');
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleFormSubmit} noValidate className={style.form}>
        <div className='formWrapper'>
          <Input component='input' type='text' name='user_name' className='contactField' placeholder='Imię i nazwisko' required />
          <Input component='input' type='email' name='user_email' className='contactField' placeholder='Email' required />
          <Input component='textarea' name='message' className='contactField' placeholder='Wiadomość' required />
        </div>
        <Input component='input' type='submit' className='contactField' value='Wyślij' />
      </form>
      {showAlert && <Alert type={alertMessage} />}
    </>
  );
};

export default ContactForm;
