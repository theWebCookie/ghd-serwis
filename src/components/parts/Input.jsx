import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Input = ({ component, type, ...props }) => {
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidation = (e) => {
    const target = e.target;
    setValidationMessage(target.validationMessage);
  };

  const onBlur = (e) => {
    const target = e.target;

    if (validationMessage) {
      setValidationMessage(target.validationMessage);
    }
  };

  const Component = component === 'textarea' ? 'textarea' : 'input';

  return (
    <div className='contactGroup'>
      <Component onInvalid={handleValidation} onBlur={onBlur} type={type} {...props} />
      {type === 'checkbox' && (
        <label htmlFor='rodo'>
          Akceptuję{' '}
          <Link to='/regulamin'>
            <span>politykę prywatności</span>
          </Link>
        </label>
      )}
      {validationMessage && <div>{validationMessage}</div>}
    </div>
  );
};

export default Input;
