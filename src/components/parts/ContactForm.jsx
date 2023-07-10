import React from 'react';
import Input from './Input';
import style from '../../styles/ContactForm.css';

const ContactForm = () => {
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
    }
  };

  return (
    <form onSubmit={handleFormSubmit} noValidate className={style.form}>
      <div className="formWrapper">
        <Input
          component="input"
          type="text"
          name="name"
          className="contactField"
          placeholder="Imię i nazwisko"
          required
        />
        <Input
          component="input"
          type="email"
          name="email"
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
  );
};

export default ContactForm;
