import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../../assets/fy.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>A propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5 ans</small>
            </article>

          </div>
          <p>Développeur à Tana, Madagascar. Je suis à votre disposition pour répondre à tout type de projets de création de sites internet vitrine, e-commerce, de développement spécifique ou d’applications web. Passionné par les technologies Web, je mets mes compétences au service de vos besoins dans divers domaines.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro
