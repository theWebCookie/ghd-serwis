import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Nav.css';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavBarClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='nav'>
      <div>
        <NavLink to='/' className='nav-logo'>
          <span>GHD</span>
          <span>SERVICE</span>
        </NavLink>
      </div>
      <div className={isMobileMenuOpen ? 'mobile open' : 'mobile close'}>
        <NavLink to='/naprawa' className='nav-link'>
          Naprawa
        </NavLink><NavLink to='/zakup' className='nav-link'>
          Zakup
        </NavLink><NavLink to='/regulamin' className='nav-link'>
          Regulamin
        </NavLink>
      </div>
      <div className="menu">
          <NavLink to='/naprawa' className='nav-link'>
            Naprawa
          </NavLink><NavLink to='/zakup' className='nav-link'>
            Zakup
          </NavLink><NavLink to='/regulamin' className='nav-link'>
            Regulamin
          </NavLink>
        </div>
      {isMobileMenuOpen ? (
        <i className='fa-solid fa-x' onClick={handleNavBarClick}></i>
        ) : (
            <i className='fa-solid fa-bars' onClick={handleNavBarClick}></i>
        )}
    </nav>
  );
};

export default Nav;
