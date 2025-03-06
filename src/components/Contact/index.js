import React, { useState } from 'react';
import './styles.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:rruhiyatna@gmail.com?subject=Pesan dari ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Hubungi Saya</h2>
        <div className="contact__content">
          <div className="contact__info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <a href="mailto:rruhiyatna@gmail.com">rruhiyatna@gmail.com</a>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telepon</h3>
                <a href="tel:+6285780475518">+62 857-8047-5518</a>
              </div>
            </div>
            <div className="info-item">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/6285780475518" target="_blank" rel="noopener noreferrer">
                  Chat via WhatsApp
                </a>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Lokasi</h3>
                <p>Bogor, Jawa Barat</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="form-group">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Masukkan nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Masukkan email Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Pesan</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tulis pesan Anda"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
