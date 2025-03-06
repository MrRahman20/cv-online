import React from 'react';
import './styles.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__social">
            <a href="https://github.com/MrRahman20" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ruhiyatna-rahman-0588b8271" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Ruhiyatna Rahman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
