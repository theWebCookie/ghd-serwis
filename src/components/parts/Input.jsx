import React, { useState } from 'react';

const Input = ({ component, name, placeholder, className, ...props }) => {
  const [validationMessage, setValidationMessage] = useState('');

  const handleValidation = (e) => {
    const target = e.target;
    setValidationMessage(target.validationMessage);
  };

  const onBlur = (e) => {
    const target = e.target;

    if (!!validationMessage) {
      setValidationMessage(target.validationMessage);
    }
  };

  const Component = component === 'textarea' ? 'textarea' : 'input';

  return (
    <div className='contactGroup'>
      <Component
        name={name}
        onInvalid={handleValidation}
        onBlur={onBlur}
        placeholder={placeholder}
        className={className}
        {...props}
      />
      {!!validationMessage && <div>{validationMessage}</div>}
    </div>
  );
};

export default Input;
