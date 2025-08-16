import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';
import { scrollToTop } from '../../utils/scrollToTop';
import SEO from '../Common/SEO';
import { CheckCircle } from '@mui/icons-material';

const SolutionsTemplate = ({ 
  solutionsData,
  seoData,
  pageTitle,
  pageSubtitle,
  pageDescription,
  backLink = "/solutions",
  pageColor = "#d32f2f"
}) => {
  const { solutions, heroStats } = solutionsData;

  // Her çözüm için renk teması tanımları
  const colorThemes = {
    'alarm-prediction': {
      primary: '#d32f2f',
      secondary: '#ffebee',
      icon: '#d32f2f',
      gradient: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)'
    },
    'anomaly-detection': {
      primary: '#1976d2',
      secondary: '#e3f2fd',
      icon: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
    },
    'predictive-maintenance': {
      primary: '#388e3c',
      secondary: '#e8f5e8',
      icon: '#388e3c',
      gradient: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)'
    },
    'ai-assistant': {
      primary: '#f57c00',
      secondary: '#fff3e0',
      icon: '#f57c00',
      gradient: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)'
    },
    'card-test-boxes': {
      primary: '#7b1fa2',
      secondary: '#f3e5f5',
      icon: '#7b1fa2',
      gradient: 'linear-gradient(135deg, #7b1fa2 0%, #6a1b9a 100%)'
    },
    'rigid-flex-designs': {
      primary: '#0277bd',
      secondary: '#e1f5fe',
      icon: '#0277bd',
      gradient: 'linear-gradient(135deg, #0277bd 0%, #01579b 100%)'
    },
    'embedded-software': {
      primary: '#c62828',
      secondary: '#ffebee',
      icon: '#c62828',
      gradient: 'linear-gradient(135deg, #c62828 0%, #b71c1c 100%)'
    },
    'iot-sensors': {
      primary: '#2e7d32',
      secondary: '#e8f5e8',
      icon: '#2e7d32',
      gradient: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)'
    },
    'erp': {
      primary: '#1565c0',
      secondary: '#e3f2fd',
      icon: '#1565c0',
      gradient: 'linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)'
    },
    'network-management': {
      primary: '#6a1b9a',
      secondary: '#f3e5f5',
      icon: '#6a1b9a',
      gradient: 'linear-gradient(135deg, #6a1b9a 0%, #4a148c 100%)'
    },
    'energy-management': {
      primary: '#f57c00',
      secondary: '#fff3e0',
      icon: '#f57c00',
      gradient: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)'
    },
    'digital-transformation': {
      primary: '#d32f2f',
      secondary: '#ffebee',
      icon: '#d32f2f',
      gradient: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)'
    },
    'technical-consulting': {
      primary: '#1976d2',
      secondary: '#e3f2fd',
      icon: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)'
    },
    'project-management': {
      primary: '#388e3c',
      secondary: '#e8f5e8',
      icon: '#388e3c',
      gradient: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)'
    },
    'training-services': {
      primary: '#f57c00',
      secondary: '#fff3e0',
      icon: '#f57c00',
      gradient: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)'
    },
    'system-integration': {
      primary: '#7b1fa2',
      secondary: '#f3e5f5',
      icon: '#7b1fa2',
      gradient: 'linear-gradient(135deg, #7b1fa2 0%, #6a1b9a 100%)'
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="solutions-page">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="solutions-hero" style={{ background: `linear-gradient(135deg, ${pageColor} 0%, ${pageColor}dd 100%)` }}>
        <div className="solutions-hero-container">
          <div className="solutions-hero-content">
            <h1 className="solutions-hero-title">
              {pageTitle}
            </h1>
            <p className="solutions-hero-subtitle">
              {pageSubtitle}
            </p>
            <p className="solutions-hero-description">
              {pageDescription}
            </p>
            {heroStats && (
              <div className="solutions-hero-stats">
                {heroStats.map((stat, index) => (
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

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="solutions-grid-container">
          <div className="solutions-grid">
            {solutions.map((solution, index) => {
              const theme = colorThemes[solution.id] || colorThemes['alarm-prediction'];
              
              return (
                <div key={solution.id || index} className="solution-card" style={{ '--theme-primary': theme.primary, '--theme-secondary': theme.secondary }}>
                  <div className="solution-card-header">
                    <div className="solution-icon" style={{ background: theme.gradient }}>
                      <div style={{ color: 'white' }}>
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="solution-title">{solution.title}</h3>
                    <p className="solution-description">
                      {solution.shortDescription}
                    </p>
                  </div>

                  {/* Features Section */}
                  <div className="solution-features">
                    <h4 className="features-title">Özellikler</h4>
                    <div className="features-grid">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="feature-item">
                          <div className="feature-icon" style={{ color: theme.primary }}>
                            <CheckCircle />
                          </div>
                          <span className="feature-name">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solution CTA */}
                  <div className="solution-cta">
                    <Link to={`/solutions/${solution.id}`} className="solution-detail-btn" style={{ background: theme.primary }}>
                      Detaylı Bilgi
                      <ArrowForward />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta-section">
        <div className="solutions-cta-container">
          <div className="solutions-cta-content">
            <h2 className="solutions-cta-title">
              {pageTitle} ile <span className="solutions-cta-highlight">Dönüşümünüzü</span> Başlatın
            </h2>
            <p className="solutions-cta-description">
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler geliştirmek için hazır. 
              Hemen iletişime geçin ve dijital dönüşümünüzü başlatın.
            </p>
            <div className="solutions-cta-buttons">
              <button className="solutions-cta-btn solutions-cta-btn-primary">
                Demo Talep Et
              </button>
              <button className="solutions-cta-btn solutions-cta-btn-secondary">
                Teklif Al
              </button>
              <Link to="/solutions" className="solutions-cta-btn solutions-cta-btn-outline">
                Tüm Çözümlerimiz
                <ArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsTemplate; 