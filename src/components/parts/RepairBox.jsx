import React, { useState } from 'react';
import '../../styles/RepairBox.css';

const RepairBox = ({ data }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleListButtonClick = () => {
    setIsListOpen(!isListOpen);
  };

  const { nazwa, lista } = data;

  return (
    <div className='repairBox' onClick={handleListButtonClick}>
      <div className='repairBox-title'>
        <h2>{nazwa}</h2>
        <div>
          <button onClick={handleListButtonClick}>
            {isListOpen ? <i className='fa-solid fa-x'></i> : <i className='fa-solid fa-chevron-down'></i>}
          </button>
        </div>
      </div>
      <div className={`repairList ${isListOpen ? 'open' : ''}`}>
        <ul>
          {lista?.map((item, index) => (
            <li key={`${item}_${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepairBox;
