import React, {useState} from 'react'
import "../../styles/RepairBox.css"

const RepairBox = () => {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleListButtonClick = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="repairBox">
      <div className="repairBox-title">
        <h2>Model GHD Gold (starsza wersja)</h2>
        <div>
          <button onClick={handleListButtonClick}>
            {isListOpen ? <i className='fa-solid fa-x'></i> : <i className="fa-solid fa-chevron-down"></i>}
          </button>
        </div>
      </div>
      <div className={`repairList ${isListOpen ? 'open' : ''}`}>
        <ul>
          <li>Regeneracja uszkodzonego elementu grzewczego (nie zawsze możliwa)</li>
          <li>Wymiana elementu grzewczego</li>
          <li>Wymiana zewnętrznej pokrywy</li>
          <li>Regeneracja uszkodzonego elementu grzewczego (nie zawsze możliwa)</li>
          <li>Wymiana elementu grzewczego</li>
          <li>Regeneracja uszkodzonego elementu grzewczego (nie zawsze możliwa)</li>
          <li>Wymiana elementu grzewczego</li>
          <li>Regeneracja uszkodzonego elementu grzewczego (nie zawsze możliwa)</li>

        </ul>
      </div>
      <div className={`repairPrice ${isListOpen ? 'open' : ''}`}>
          <h3>Cena: 200zł</h3>
      </div>
    </div>
  )
}

export default RepairBox;