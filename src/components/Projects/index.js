import React from 'react';
import './styles.scss';
import '../../styles/text.css';

const Projects = () => {
  const projects = [
    {
      title: 'Web Server dengan Linux, Nginx, dan Cloudflare Tunneling',
      description: 'Membangun web server menggunakan Linux Ubuntu server LTS dengan Nginx sebagai reverse proxy untuk mengatur lalu lintas jaringan. Menggunakan Cloudflare Tunneling untuk memungkinkan akses web server secara aman tanpa perlu membuka port di router.',
      technologies: ['Linux', 'Nginx', 'Cloudflare', 'Network Security', 'Server Administration'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/webserver.jpg`,
    },
    {
      title: 'Perhitungan Pohon Pinus Otomatis (YOLOv8)',
      description: 'Sistem deteksi dan perhitungan otomatis pohon pinus menggunakan model YOLOv8 dan data foto udara drone. Dilengkapi dengan web GUI untuk memudahkan pengguna.',
      technologies: ['YOLOv8', 'Python', 'Computer Vision', 'Web GUI'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/pinus-detection.jpg`,
    },
    {
      title: 'Perhitungan Kelapa Sawit Otomatis (YOLOv8)',
      description: 'Sistem deteksi dan perhitungan otomatis pohon kelapa sawit menggunakan YOLOv8 dengan data drone. Termasuk pengujian dan validasi akurasi model.',
      technologies: ['YOLOv8', 'Python', 'Deep Learning', 'Data Analysis'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/sawit-detection.jpg`,
    },
    {
      title: 'Netslicer',
      description: 'Aplikasi desktop Windows cloning dari Netcut dengan tujuan untuk demonstrasi dan edukasi tentang ARP spoofing/poisoning. Dikembangkan menggunakan Python dengan fokus pada keamanan jaringan.',
      technologies: ['Python', 'Network Security', 'ARP Spoofing', 'Windows GUI'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/netslicer.jpg`,
    },
    {
      title: 'Peta Sebaran Turap Air Desa Ciomas',
      description: 'Pemetaan dan analisis kondisi turap air di Desa Ciomas. Melakukan survei lapangan dan mengkategorikan kondisi turap dalam tiga kelas: rusak, rusak sedang, dan baik.',
      technologies: ['GIS', 'Mapping', 'Field Survey', 'Spatial Analysis'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/turap-mapping.jpg`,
    },
    {
      title: 'Analisis Indeks Lingkungan Kota Padang',
      description: 'Analisis komprehensif kondisi lingkungan Kota Padang menggunakan citra Landsat 8 dan Google Earth Engine. Menghitung indeks NDVI, NDBI, NDWI, dan NDDI untuk analisis vegetasi, urbanisasi, air, dan kekeringan.',
      technologies: ['Google Earth Engine', 'Remote Sensing', 'GIS', 'Spatial Analysis', 'Landsat 8'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/padang-analysis.jpg`,
    },
    {
      title: 'MikroTik Script Generator',
      description: 'Tool untuk menghasilkan script konfigurasi MikroTik secara otomatis berdasarkan input parameter yang diberikan. Memudahkan proses konfigurasi router MikroTik dengan mengotomatisasi pembuatan script.',
      technologies: ['JavaScript', 'MikroTik RouterOS','Vue.js', 'Web GUI'],
      imageUrl: `${process.env.PUBLIC_URL}/images/projects/mikrotik-script.jpg`,
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card__image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-card__content">
                <h3>{project.title}</h3>
                <p className="text-justify">{project.description}</p>
                <div className="project-card__tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.features && (
                  <ul className="features">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                {project.github && (
                  <div className="links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      GitHub Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
