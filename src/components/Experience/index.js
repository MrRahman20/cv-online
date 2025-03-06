import React from 'react';
import './styles.scss';

const Experience = () => {
  const experiences = [
    {
      company: 'Kementerian Lingkungan Hidup dan Kehutanan',
      position: 'Data Entry',
      location: 'Jakarta',
      startDate: '2024',
      endDate: 'Present',
      description: 'Melakukan verifikasi NIK antara sertifikasi dengan disdukcapil RI lalu melakukan input data ke sistem SIVA (Sistem Informasi Aset Daerah).'
    },
    {
      company: 'Telkom Metrasat',
      position: 'IT Support',
      location: 'Bogor',
      startDate: '2023',
      endDate: '2023',
      description: 'Melakukan troubleshooting jaringan, konfigurasi perangkat, pemeliharaan sistem komunikasi berbasis GPS dan Instalasi modem yang tersebar di JABODETABEK.'
    },
    {
      company: 'Local ISP',
      position: 'Owner & Network Engineer',
      location: 'Bogor',
      startDate: '2021',
      endDate: 'Present',
      description: `• Merancang dan membangun jaringan internet skala RT/RW menggunakan perangkat Mikrotik.
      \n• Melakukan konfigurasi jaringan, optimasi bandwidth, serta troubleshooting jaringan lokal.
      \n• Mengelola pelanggan dan administrasi jaringan berbasis komunitas.`
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience__item">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className="location">{exp.location}</p>
              <p className="date">{exp.startDate} - {exp.endDate}</p>
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
