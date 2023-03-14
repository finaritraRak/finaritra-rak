import React from 'react';
import IMG1 from '../../../assets/coblog1.PNG';
import IMG2 from '../../../assets/biblior.PNG';
import IMG3 from '../../../assets/commerceL.PNG';
import IMG4 from '../../../assets/Capture.PNG';
import IMG5 from '../../../assets/quizeduk.PNG';
import IMG6 from '../../../assets/postfy.PNG';
import IMG7 from '../../../assets/saba1.PNG';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'blog',
      img: IMG1,
      description:
        'Simple blog developper avec node et mongodb',
      technologies: 'node js, jsx, mongodb',
      github: 'https://github.com/finaritraStart/coblog',
    },
    {
      id: 2,
      title: 'Quiz en ligne',
      img: IMG4,
      description:
        'Application web de quiz en ligne',
      technologies: 'Codeigniter, jquery, mysql, bootstrap',
      github: 'https://github.com/finaritraStart/quiz-school-codeigniter3',
    },
    {
      id: 3,
      title: 'bibliotheque numerique',
      img: IMG2,
      description: "Bbliotheque numrique d une universite privé",
      technologies: 'JCodeigniter, bootstrap, mysql',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'i-look site e-commerce',
      img: IMG3,
      description:
        'i-look site e-commerce',
      technologies: 'Laravel, mysql, bootstrap',
      github: 'https://github.com/finaritraStart/look-i-laravel-ecommerce',
    },
    {
      id: 5,
      title: 'quiz',
      img: IMG5,
      description:
        'quiz',
      technologies: 'javascript, html',
      link: '',
      github: '',
    },
    {
      id: 6,
      title: 'postman clone',
      img: IMG6,
      description:
        "clone de l'application postman",
      technologies: 'node js, jsx, json, mongodb',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
    {
      id: 7,
      title: 'saba',
      img: IMG7,
      description:
        "angular application",
      technologies: 'angular, firebase',
      link: '',
      github: '',
    },
  ];

  return (
    <section id="portfolio">
      <h5>Projet</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
