import React, { useState } from 'react';
import '../../styles/RepairBox.css';

const RepairBox = ({ data }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleListButtonClick = () => {
    setIsListOpen(!isListOpen);
  };

  const { nazwa, cena, lista } = data;

  return (
    <div className='repairBox'>
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
        <div className={`repairPrice ${isListOpen ? 'open' : ''}`}>
          <h3>Cena: {cena}zł</h3>
        </div>
      </div>
    </div>
  );
};

export default RepairBox;
