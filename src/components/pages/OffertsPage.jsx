import React, { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';
import Heading from '../parts/Heading';
import OffertBox from '../parts/OffertBox';
import '../../styles/OffertBox.css';

const OFFERT_QUERY = `query MyQuery {
  allSells {
    nazwa
    link
    id
    cena
    zuzycie
    zdjecie {
      alt
      responsiveImage(imgixParams: { w: "200", h: "200" }) {
        alt
        src
      }
    }
  }
}`;

const OffertsPage = () => {
  const { data } = useQuery(OFFERT_QUERY);
  const offerts = data?.allSells;
  const [filteredOfferts, setFilteredOfferts] = useState(offerts || []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const result = offerts.filter((offert) => offert.nazwa.toLowerCase().includes(value.toLowerCase()));
    setFilteredOfferts(result);
  };

  useEffect(() => {
    if (offerts) {
      setFilteredOfferts(offerts);
    }
  }, [offerts]);

  return (
    <div className="offertSection">
      <Heading content="offert" />
      <div className="offertInput">
        <input type="text" name="searchInput" placeholder="Szukaj..." className="searchInput" onChange={handleInputChange} />
      </div>
      <div className="offertBoxes">
        {filteredOfferts?.map((offert) => (
          <OffertBox key={offert.id} data={offert} />
        ))}
      </div>
    </div>
  );
};

export default OffertsPage;
