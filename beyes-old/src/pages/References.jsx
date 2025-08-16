import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';
import SEO from '../components/Common/SEO';
import { referencesData } from '../constants/references';
import '../styles/pages/References/references.css';

const References = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    scrollToTop();
  }, []);

  const references = referencesData;

  return (
    <>
      <SEO 
        title="Referanslar - Beyes"
        description="Güvenilir çözüm ortağınız olarak hizmet verdiğimiz kurumlar. Telco, Savunma, Kamu ve Kurumsal sektörlerde referanslarımız."
        keywords="referanslar, müşteriler, telco, savunma, kamu, kurumsal, beyes"
      />
      <div className="references-page">
        {/* Hero Section */}
        <section className="references-hero">
        <div className="references-hero-container">
          <h1 className="references-hero-title">REFERANSLAR</h1>
          <div className="references-hero-divider"></div>
          <p className="references-hero-description">
            Güvenilir çözüm ortağınız olarak hizmet verdiğimiz kurumlar
          </p>
        </div>
      </section>

      {/* References Grid */}
      <section className="references-grid-section">
        <div className="references-grid-container">
          <div className="references-categories">
            {/* Telco Kategorisi */}
            <div className="reference-category">
              <h2 className="category-title">Telco</h2>
              <div className="references-grid">
                {references.telco.map((ref, index) => (
                  <div key={index} className="reference-card">
                    <div className="reference-logo-container">
                      {ref.logo ? (
                        <img src={ref.logo} alt={ref.name} className="reference-logo" />
                      ) : (
                        <div className="reference-placeholder">
                          <span className="placeholder-text">{ref.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="reference-name">{ref.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Savunma Kategorisi */}
            <div className="reference-category">
              <h2 className="category-title">Savunma</h2>
              <div className="references-grid">
                {references.defense.map((ref, index) => (
                  <div key={index} className="reference-card">
                    <div className="reference-logo-container">
                      {ref.logo ? (
                        <img src={ref.logo} alt={ref.name} className="reference-logo" />
                      ) : (
                        <div className="reference-placeholder">
                          <span className="placeholder-text">{ref.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="reference-name">{ref.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* KAMU Kategorisi */}
            <div className="reference-category">
              <h2 className="category-title">KAMU</h2>
              <div className="references-grid">
                {references.public.map((ref, index) => (
                  <div key={index} className="reference-card">
                    <div className="reference-logo-container">
                      {ref.logo ? (
                        <img src={ref.logo} alt={ref.name} className="reference-logo" />
                      ) : (
                        <div className="reference-placeholder">
                          <span className="placeholder-text">{ref.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="reference-name">{ref.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* KURUMSAL Kategorisi */}
            <div className="reference-category">
              <h2 className="category-title">KURUMSAL</h2>
              <div className="references-grid">
                {references.corporate.map((ref, index) => (
                  <div key={index} className="reference-card">
                    <div className="reference-logo-container">
                      {ref.logo ? (
                        <img src={ref.logo} alt={ref.name} className="reference-logo" />
                      ) : (
                        <div className="reference-placeholder">
                          <span className="placeholder-text">{ref.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    <div className="reference-name">{ref.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="references-cta-section">
        <div className="references-cta-container">
          <div className="references-cta-content">
            <h2 className="references-cta-title">
              Siz de <span className="references-cta-highlight">Referanslarımıza</span> Katılın
            </h2>
            <p className="references-cta-description">
              Projeleriniz için bizimle çalışın ve başarı hikayenizi birlikte yazalım.
            </p>
            <div className="references-cta-buttons">
              <Link to="/iletisim" className="references-cta-btn references-cta-btn-primary">
                İLETİŞİM
              </Link>
              <div className="whatsapp-btn">
                <span className="whatsapp-icon">💬</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default References; 