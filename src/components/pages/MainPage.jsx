import React from 'react';
import Contact from '../parts/Contact';
import Nav from '../parts/Nav';
import img1 from '../../assets/MainPage/img1.png';
import img2 from '../../assets/MainPage/img2.jpg';
import '../../styles/MainPage.css';

const MainPage = () => (
  <>
    <div className='hero'>
      <div className='hero-img'>
        <div className='hero-content'>
          <div className='hero-nav'>
            <Nav />
          </div>
          <div className='hero-text'>
            <h1>Nieautoryzowany serwis marki GHD</h1>
            <p>Naprawiamy urządzenie beauty firmy God hair Day</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
    <div className='main-info'>
      <div>
        <img src={img1} alt='Daj sprzętowi drugie życie' />
        <div>
          <h2>Daj sprzętowi drugie życie</h2>
          <p>
            W ofercie sprzedaży posiadamy odnowione przez nas urzadzenia z rynku wtórnego.  Na sprzęt udzielamy roczną gwarancję z możliwością
            przedłużenia do 3 lat, oraz o usługi specjalne, jak ekspresowa wymiana 1 do 1.
          </p>
        </div>
      </div>
      <div>
        <img src={img2} alt='Daj sprzętowi drugie życie' />
        <div>
          <h2>Serwis marki GHD</h2>
          <p>
            Od kilku lat zajmujemy się naprawą urządzeń firmy GHD. W naszej ofercie znajduje się diagnoza, konserwacja oraz naprawa. Ponad to
            oferujmey przedłużenie gwarancji producenta.
          </p>
        </div>
      </div>
    </div>
    <Contact />
  </>
);

export default MainPage;
