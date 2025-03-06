import React from 'react';
import './styles.scss';

const Hero = () => {
  const handleDownloadCV = () => {
    // Direct download link
    const link = document.createElement('a');
    link.href = '/files/CV_rahman_2025.pdf';
    link.download = 'CV_Rahman_2025.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="home">
      <div className="container hero__content">
        <div className="hero__profile">
          <img src="/cv-online/images/profile/foto-profile.jpg" alt="Muhammad Ruhiyatna Rahman" />
        </div>
        <h1>Muhammad Ruhiyatna Rahman</h1>
        <h2>Software Developer | Network Engineer | GIS Analyst | AI-ML Engineer</h2>
        <p>Saya adalah seorang Developer yang antusias untuk belajar teknologi baru.</p>
        <button className="cta-button" onClick={handleDownloadCV}>
          Unduh CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
