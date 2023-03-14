import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Salut je suis</h5>
        <h1>Aina Finaritra</h1>
        <h5 className="text-light">Full-stack Developpeur</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          descendre
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
