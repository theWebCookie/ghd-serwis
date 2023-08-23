import React from 'react';
import '../../styles/Alert.css';

const Alert = ({ type }) => {
  let status = '';
  let message = '';

  if (type === 'success') {
    status = 'success';
    message = 'Wysłano email!';
  }

  if (type === 'error') {
    status = 'error';
    message = 'Nie udało się wysłać email!';
  }

  if (type === 'pending') {
    status = 'pending';
    message = 'Wysyłanie...';
  }

  return (
    <div className={`alert ${status}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
