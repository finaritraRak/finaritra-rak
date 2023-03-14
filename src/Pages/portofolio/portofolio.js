import React from 'react';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import Header from './header/Header';
import Intro from './intro/Intro';
import Portfolio from './portfolio/Portfolio';
import Testimonials from './testimonials/Testimonials';
import Topbar from './topbar/Topbar';
import Navbar from '../navbar/Navbar';
import './portofolio.css';

const Portofolio = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Portofolio;
