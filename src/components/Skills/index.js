import React from 'react';
import './styles.scss';

const Skills = () => {
  const skills = {
    programming: [
      'AI Development',
      'Network Programming',
      'Linux Ubuntu Server',
      'Programming Languages'
    ],
    network: [
      'MikroTik Configuration',
      'Network Management',
      'Network Installation',
      'Network Troubleshooting'
    ],
    promptEngineering: [
      'ChatGPT',
      'GitHub Copilot',
      'Codium/Qodo'
    ],
    geospatial: [
      'ArcGIS',
      'QGIS',
      'Google Earth Engine',
      'Spatial Data Analysis'
    ],
    itSupport: [
      'OS Installation',
      'Device Troubleshooting',
      'Hardware Maintenance',
      'System Administration'
    ],
    soft: [
      'Adaptif',
      'Inovatif',
      'Problem Solving',
      'Komunikasi',
      'Kecerdasan Emosional',
      'Empati',
      'Keterampilan Organisasi',
      'Birokrasi',
      'Kerja Sama Tim',
      'Menghargai Perbedaan',
      'Berpikir Sistematis',
      'Analytical Thinking'
    ],
    languages: [
      'Bahasa Indonesia (Native)',
      'English (Intermediate)'
    ]
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills__grid">
          <div className="skills__category">
            <h3>Programming & AI</h3>
            <ul>
              {skills.programming.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>Networking</h3>
            <ul>
              {skills.network.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>Prompt Engineering</h3>
            <ul>
              {skills.promptEngineering.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>Geospasial & Analisis Data</h3>
            <ul>
              {skills.geospatial.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>IT Support</h3>
            <ul>
              {skills.itSupport.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>Soft Skills</h3>
            <ul>
              {skills.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="skills__category">
            <h3>Bahasa</h3>
            <ul>
              {skills.languages.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
