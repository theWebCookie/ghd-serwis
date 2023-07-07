import React from 'react';
import { Link } from 'react-router-dom';
import karta from '../../assets/Footer/Karta-Gwarancyjna.pdf';
import '../../styles/Footer.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer-information'>
      <div>
        <span>Współpraca z firmami</span>
        <p>Oferujemy indywidualny cennik napraw hurtowych dla firm.</p>
      </div>
      <div>
        <span>Adresy wysyłkowe</span>
        <p>Solca Wielka 45 95-035 Ozorków</p>
        <p>Aleje Politechniki 11/311 93-570 Łódź</p>
      </div>
      <div>
        <span>Paczkomat Inpost</span>
        <p>LOD30M OZO03M</p>
      </div>
      <div className='footer-links'>
        <div>
          <p><Link to='/naprawa'><span>Naprawa</span></Link></p>
          <p><Link to='/zakup'><span>Zakup</span></Link></p>
        </div>
        <div>
          <p><Link to='/regulamin'><span>Regulamin</span></Link></p>
          <p>
            <Link to={karta} 
            target="_blank" 
            rel="noopener noreferrer" 
            download="Karta gwarancyjna"
            >
              <span>Karta gwarancyjna</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
    <div>© GHD-service | 2023</div>
  </footer>
)

export default Footer;