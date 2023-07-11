import React, {useState} from 'react';
import emailjs from '@emailjs/browser';
import Input from './Input';
import Alert from './Alert';
import style from '../../styles/ContactForm.css';

const ContactForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity();
    form.classList.add('submitted');
    const invalidField = form.querySelector(':invalid');
    invalidField?.focus();
    if (isValid) {
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form, process.env.REACT_APP_PUBLIC_KEY)
      .then(() => {
          setAlertMessage("success");
          setShowAlert(true);
      }, () => {
          setAlertMessage("failure");
          setShowAlert(true);
      });

      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} noValidate className={style.form}>
        <div className="formWrapper">
          <Input
            component="input"
            type="text"
            name="user_name"
            className="contactField"
            placeholder="Imię i nazwisko"
            required
          />
          <Input
            component="input"
            type="email"
            name="user_email"
            className="contactField"
            placeholder="Email"
            required
          />
          <Input
            component="textarea"
            name="message"
            className="contactField"
            placeholder="Wiadomość"
            required
            wrap="hard"
            rows="5"
            cols="33"
          />
        </div>
        <Input
            component="input"
            type="submit"
            className="contactField"
            value="Wyślij"
          />
      </form>
      {showAlert ? <Alert type={alertMessage}/> : ""}
    </>
  );
};

export default ContactForm;
