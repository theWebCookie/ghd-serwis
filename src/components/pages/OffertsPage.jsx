import React from 'react'
import { useQuery } from "graphql-hooks";
import Heading from '../parts/Heading';
import OffertBox from '../parts/OffertBox';
import "../../styles/OffertBox.css"

const OFFERT_QUERY = `query MyQuery {
  allSells {
    nazwa
    link
    id
    cena
    zuzycie
    zdjecie {
      alt
      responsiveImage(imgixParams: {w: "200", h: "200"}) {
        alt
        src
      }
    }
  }
}`;

const OffertsPage = () => {
  const { data } = useQuery(OFFERT_QUERY);
  const offerts = data?.allSells;
  return (
    <div className="offertSection">
      <Heading content="offert" />
      <div className="offertBoxes">
        {offerts?.map((offert) => (
          <OffertBox key={offert.id} data={offert} />
        ))}
      </div>
    </div>
  )
}

export default OffertsPage;