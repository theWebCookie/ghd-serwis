import React from 'react';
import useOffertsPage from '../../hooks/useOffertsPage';
import Heading from '../parts/Heading';
import OffertBox from '../parts/OffertBox';
import '../../styles/OffertBox.css';
import Nav from '../parts/Nav';

const OffertsPage = () => {
  const { filteredOfferts, handleInputChange } = useOffertsPage();
  const isLoading = !filteredOfferts;

  return (
    <>
      <Nav />
      <div className='offertSection'>
        <Heading content='offert' />
        <div className='offertInput'>
          <input type='text' name='searchInput' placeholder='Szukaj...' className='searchInput' onChange={handleInputChange} />
        </div>
        <div className='offertBoxes'>
          {isLoading ? <p>Ładowanie ofert...</p> : filteredOfferts.map((offert) => <OffertBox key={offert.id} data={offert} />)}
        </div>
      </div>
    </>
  );
};

export default OffertsPage;
