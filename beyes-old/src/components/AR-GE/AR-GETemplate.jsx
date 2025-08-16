import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { scrollToTop } from '../../utils/scrollToTop';
import SEO from '../Common/SEO';
import '../../styles/pages/AR-GE/ar-geDetails.css';

const AR_GETemplate = ({ 
  projectData,
  seoData 
}) => {
  const { 
    title, 
    shortDescription, 
    longDescription, 
    icon: IconComponent,
    features, 
    benefits, 
    technicalSpecs,
    stats 
  } = projectData;

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="ar-ge-detail-page">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="ar-ge-detail-hero">
        <div className="ar-ge-detail-hero-container">
          <div className="ar-ge-detail-hero-content">
            <div className="ar-ge-detail-hero-icon">
              <IconComponent />
            </div>
            <h1 className="ar-ge-detail-hero-title">
              {title}
            </h1>
            <p className="ar-ge-detail-hero-subtitle">
              {shortDescription}
            </p>
            <p className="ar-ge-detail-hero-description">
              {longDescription}
            </p>
            {stats && (
              <div className="ar-ge-detail-hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-number">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ar-ge-detail-features-section">
        <div className="ar-ge-detail-features-container">
          <h2 className="section-title">
            Özellikler
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <feature.icon />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="ar-ge-detail-benefits-section">
        <div className="ar-ge-detail-benefits-container">
          <h2 className="section-title">
            Faydalar
          </h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <benefit.icon />
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="ar-ge-detail-specs-section">
        <div className="ar-ge-detail-specs-container">
          <h2 className="section-title">
            Teknik Özellikler
          </h2>
          <div className="specs-grid">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="spec-item">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ar-ge-detail-cta-section">
        <div className="ar-ge-detail-cta-container">
          <div className="ar-ge-detail-cta-content">
            <h2 className="ar-ge-detail-cta-title">
              {title} ile <span className="ar-ge-detail-cta-highlight">Geleceği</span> Şekillendirin
            </h2>
            <p className="ar-ge-detail-cta-description">
              {longDescription}
            </p>
            <div className="ar-ge-detail-cta-buttons">
              <button className="ar-ge-detail-cta-btn ar-ge-detail-cta-btn-primary">
                Demo Talep Et
              </button>
              <button className="ar-ge-detail-cta-btn ar-ge-detail-cta-btn-secondary">
                Teklif Al
              </button>
              <Link to="/ar-ge" className="ar-ge-detail-cta-btn ar-ge-detail-cta-btn-outline">
                Tüm AR-GE Projelerimiz
                <ArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AR_GETemplate; 