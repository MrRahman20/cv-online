import React from 'react';
import './styles.scss';
import '../../styles/text.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="text-justify">Seorang fresh graduate dengan pengalaman di bidang teknologi dan jaringan komputer. Memiliki keahlian dalam manajemen infrastruktur IT, pengembangan perangkat lunak, serta analisis data geospasial.</p>
            <p className="text-justify">Berpengalaman sebagai Network Engineer, Prompt Engineer, dan GIS Analyst, dengan rekam jejak membangun infrastruktur internet komunitas serta mengembangkan solusi berbasis AI dan pemrograman.</p>
            <p className="text-justify">Adaptif, inovatif, dan berorientasi pada efisiensi serta pengembangan teknologi modern.</p>
          </div>
          <div className="about__info">
            <div className="info-item">
              <span>Email:</span>
              <a href="mailto:muhiyatna@gmail.com">rruhiyatna@gmail.com</a>
            </div>
            <div className="info-item">
              <span>Phone:</span>
              <a href="tel:+6216285780475518">+62 857-8047-5518</a>
            </div>
            <div className="info-item">
              <span>Location:</span>
              <p>Bogor, Jawa Barat</p>
            </div>
            <div className="info-item">
              <span>LinkedIn:</span>
              <a href="https://www.linkedin.com/in/ruhiyatna-rahman-0588b8271/" target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
            <div className="info-item">
              <span>Instagram:</span>
              <a href="https://www.instagram.com/rahman.zip/" target="_blank" rel="noopener noreferrer">
                @rahman.zip
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
