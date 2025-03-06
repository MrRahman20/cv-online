import React from 'react';
import './styles.scss';

const Hero = () => {
  const handleDownloadCV = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/files/CV_rahman_2025.pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <section className="hero" id="home">
      <div className="container hero__content">
        <div className="hero__profile">
          <img src={`${process.env.PUBLIC_URL}/images/profile/foto-profile.jpg`} alt="Muhammad Ruhiyatna Rahman" />
        </div>
        <h1>Muhammad Ruhiyatna Rahman</h1>
        <h2>Software Developer | Network Engineer | GIS Analyst | AI-ML Engineer</h2>
        <p>Developer yang antusias dalam mengeksplorasi teknologi baru, terus belajar, dan beradaptasi dengan tren industri untuk menciptakan solusi inovatif.</p>
        <button className="cta-button" onClick={handleDownloadCV}>
          Unduh CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
