import React from 'react';
import { Link } from 'react-router-dom';

const OffertBox = ({ data }) => {
  const { nazwa, link, cena, zuzycie, zdjecie } = data;
  const { responsiveImage } = zdjecie;
  return (
    <div className='offertBox'>
      <img src={responsiveImage.src} alt={responsiveImage.alt} loading='lazy' />
      <div>
        <span className='name'>{nazwa}</span>
        <span className='price'>{cena}zł</span>
      </div>
      <div>
        <span>Zużycie: {zuzycie}</span>
        <Link to={link}>Sprawdź</Link>
      </div>
    </div>
  );
};

export default OffertBox;
