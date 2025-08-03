import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/Common/SEO';
import { rndData } from '../../constants/rnd';
import '../../styles/pages/AR-GE/ar-ge.css';

const AR_GE = () => {
  const seoData = {
    title: 'AR-GE Projelerimiz | Beyes',
    description: 'Geleceği şekillendiren yenilikçi teknolojiler geliştiriyoruz. Robot, AI Bilgisayarı, Dron Kontrol ve daha fazlası.',
    keywords: 'AR-GE, robot, AI, dron, slipring, su jeneratörü, teknoloji, yenilik'
  };

  return (
    <div className="ar-ge-page">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="ar-ge-hero">
        <div className="ar-ge-hero-container">
          <div className="ar-ge-hero-content">
            <h1 className="ar-ge-hero-title">
              AR-GE Projelerimiz
            </h1>
            <p className="ar-ge-hero-subtitle">
              Geleceği Şekillendiren Yenilikçi Teknolojiler
            </p>
            <p className="ar-ge-hero-description">
              İnsansı robot, AI bilgisayarı, otonom dron kontrolü ve sürdürülebilir 
              teknolojiler ile geleceğin çözümlerini bugünden geliştiriyoruz.
            </p>
            <div className="ar-ge-hero-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">AR-GE Projesi</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%100</span>
                <span className="stat-label">Yerli Teknoloji</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Araştırma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR-GE Grid */}
      <section className="ar-ge-grid-section">
        <div className="ar-ge-grid-container">
          <div className="ar-ge-grid">
            {rndData.map((project, index) => {
              // Icon component'ini React component olarak render et
              const IconComponent = project.icon;
              
              return (
                <div key={project.id || index} className="ar-ge-card">
                  <div className="ar-ge-card-header">
                    <div className="ar-ge-icon" style={{ backgroundColor: project.color }}>
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3 className="ar-ge-title">{project.title}</h3>
                    <p className="ar-ge-subtitle">{project.shortDescription}</p>
                  </div>
                  <p className="ar-ge-description">
                    {project.longDescription}
                  </p>
                  <div className="ar-ge-features">
                    <h4>Özellikler:</h4>
                    <ul>
                      {project.features && project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          {typeof feature === 'string' ? feature : feature.title || feature.description || 'Özellik'}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ar-ge-actions">
                    <Link to={`/ar-ge/${project.id}`} className="ar-ge-btn ar-ge-btn-primary">
                      Detaylı Bilgi
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ar-ge-cta-section">
        <div className="ar-ge-cta-container">
          <div className="ar-ge-cta-content">
            <h2 className="ar-ge-cta-title">
              Geleceği <span className="ar-ge-cta-highlight">Birlikte</span> İnşa Edelim
            </h2>
            <p className="ar-ge-cta-description">
              Yenilikçi AR-GE projelerimizle geleceğin teknolojilerini geliştiriyoruz. 
              Hemen iletişime geçin ve projelerinizde yer alın.
            </p>
            <div className="ar-ge-cta-buttons">
              <Link to="/contact" className="ar-ge-cta-btn ar-ge-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/about" className="ar-ge-cta-btn ar-ge-cta-btn-secondary">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AR_GE;