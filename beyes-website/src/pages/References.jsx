import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/references.css';

// Logo importları
import aselsanLogo from '../assets/image/refer_logo/aselsan.png';
import botasLogo from '../assets/image/refer_logo/Botaslogo.png';
import havelsanLogo from '../assets/image/refer_logo/Havelsan_logo.svg.png';
import mekaLogo from '../assets/image/refer_logo/meka.png';
import netasLogo from '../assets/image/refer_logo/netas.png';
import tubitakLogo from '../assets/image/refer_logo/tubitak.png';

const References = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const references = {
    telco: [
      { name: 'Vodafone', logo: null },
      { name: 'Turktelekom', logo: null },
      { name: 'Turkcell', logo: null },
      { name: 'Kuzey Kıbrıs Telekom İdaresi', logo: null },
      { name: 'ZTE', logo: null }
    ],
    defense: [
      { name: 'ASELSAN', logo: aselsanLogo },
      { name: 'Tübitak SAGE', logo: tubitakLogo },
      { name: 'Havelsan', logo: havelsanLogo },
      { name: 'Roketsan', logo: null }
    ],
    public: [
      { name: 'Sayıştay', logo: null },
      { name: 'Botaş', logo: botasLogo },
      { name: 'Devlet Hava Meydanları İşletmesi', logo: null },
      { name: 'Bodrum Ticaret Odası', logo: null },
      { name: 'Arhavi Belediyesi', logo: null },
      { name: 'Hopa Belediyesi', logo: null }
    ],
    corporate: [
      { name: 'TANAP', logo: null },
      { name: 'İVEO', logo: null },
      { name: 'İNCELER MEDİKAL', logo: null },
      { name: 'ÜZÜMCÜLER', logo: null },
      { name: 'EKOKAYNAK', logo: null },
      { name: 'MILVUS', logo: null },
      { name: 'MEKA GLOBAL', logo: mekaLogo },
      { name: 'NETAŞ', logo: netasLogo },
      { name: 'INNOVA', logo: null },
      { name: 'NARPOS', logo: null },
      { name: 'MEKSİS', logo: null },
      { name: 'MİKAR', logo: null },
      { name: 'NTM', logo: null },
      { name: 'INNOVA', logo: null }
    ]
  };

  return (
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
  );
};

export default References; 