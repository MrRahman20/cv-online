import React, { useState } from 'react';
import { scrollToSection } from '../../utils/helpers';
import './styles.scss';

const Header = ({ toggleTheme, isDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: 'Beranda', id: 'home' },
    { label: 'Tentang', id: 'about' },
    { label: 'Pengalaman', id: 'experience' },
    { label: 'Proyek', id: 'projects' },
    { label: 'Kontak', id: 'contact' }
  ];

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header__content">

        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          {menuItems.map(item => (
            <a 
              key={item.id} 
              onClick={() => handleNavClick(item.id)} 
              className="nav-item"
            >
              {item.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
