import React from 'react'
import useOffertsPage from '../../hooks/useOffertsPage';
import Heading from '../parts/Heading';
import OffertBox from '../parts/OffertBox';
import '../../styles/OffertBox.css';

const OffertsPage = () => {
  const {filteredOfferts, handleInputChange } = useOffertsPage();

  return (
    <div className="offertSection">
      <Heading content="offert" />
      <div className="offertInput">
        <input type="text" name="searchInput" placeholder="Szukaj..." className="searchInput" onChange={handleInputChange} />
      </div>
      <div className="offertBoxes">
        {filteredOfferts.map((offert) => (
          <OffertBox key={offert.id} data={offert} />
        ))}
      </div>
    </div>
  );
};

export default OffertsPage;
