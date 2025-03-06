import React from 'react';
import './styles.scss';
import { formatDate } from '../../utils/helpers';

const Education = () => {
  const education = [
    {
      school: 'Universitas Ibn Khaldun Bogor',
      degree: 'S1 Teknik Informatika',
      startDate: '2020',
      endDate: '2024',
      description: 'IPK: 3.50/4.00',
      organizations: [
        {
          name: 'Himpunan Mahasiswa Teknik Informatika (HIMATEKINFO)',
          role: 'Anggota Divisi Intelektual dan Kerohanian (INROH)',
          period: '2022 - 2023',
          achievements: [
            'Bertanggung jawab atas cara berfikir dan pengetahuan anggota organisasi',
            'Pimpinan sidang 1 Musyawarah Besar HIMATEKINFO 2022'
          ]
        }
      ]
    },
  ];

  const certifications = [
    {
      name: 'Cloud Practitioner Essentials',
      issuer: 'Dicoding',
      description: 'Belajar Dasar AWS Cloud',
      date: '2024'
    },
    {
      name: 'Memulai Pemrograman dengan Python',
      issuer: 'Dicoding',
      date: '2024'
    }
  ];

  const achievements = [
    {
      title: 'Awardee beasiswa Pancakarsa Kabupaten Bogor',
      year: '2021'
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education__timeline">
          {education.map((edu, index) => (
            <div key={index} className="education__item">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p className="date">{edu.startDate} - {edu.endDate}</p>
              <p>{edu.description}</p>
              
              {edu.organizations && edu.organizations.length > 0 && (
                <div className="organizations">
                  <h4>Pengalaman Organisasi:</h4>
                  {edu.organizations.map((org, idx) => (
                    <div key={idx} className="organization-item">
                      <h5>{org.name}</h5>
                      <p className="role">{org.role}</p>
                      <p className="period">{org.period}</p>
                      <ul>
                        {org.achievements.map((achievement, aidx) => (
                          <li key={aidx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="education__section">
            <h3 className="section-subtitle">Sertifikasi</h3>
            <div className="certifications">
              {certifications.map((cert, idx) => (
                <div key={idx} className="certification-item">
                  <h4>{cert.name}</h4>
                  <p className="issuer">{cert.issuer}</p>
                  {cert.description && <p className="description">{cert.description}</p>}
                  <p className="date">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="education__section">
            <h3 className="section-subtitle">Pencapaian</h3>
            <div className="achievements">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="achievement-item">
                  <h4>{achievement.title}</h4>
                  <p className="year">{achievement.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
