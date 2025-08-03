import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  DirectionsCar,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  Warning,
  Assessment,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const Ofcomto = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Warning />,
      title: 'Arıza Etki Analizi',
      description: 'Sistem arızalarının etkilerini detaylı olarak analiz eder ve raporlar.'
    },
    {
      icon: <Assessment />,
      title: 'Risk Değerlendirmesi',
      description: 'Potansiyel riskleri değerlendirir ve öncelik sırasına göre sıralar.'
    },
    {
      icon: <Analytics />,
      title: 'Öncelik Belirleme',
      description: 'Arıza ve riskleri önem derecesine göre sınıflandırır.'
    },
    {
      icon: <Dashboard />,
      title: 'Raporlama Sistemi',
      description: 'Detaylı raporlar ile arıza ve etki analizlerini sunar.'
    },
    {
      icon: <Timeline />,
      title: 'Tarihsel Analiz',
      description: 'Geçmiş arıza verilerini analiz ederek trend analizi yapar.'
    },
    {
      icon: <Settings />,
      title: 'Otomatik Uyarılar',
      description: 'Kritik arızalar için otomatik uyarı sistemi sağlar.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Arıza Sürelerini Kısaltır',
      description: 'Hızlı tespit ve analiz ile arıza çözüm sürelerini minimize eder.'
    },
    {
      icon: <CheckCircle />,
      title: 'Sistem Güvenilirliğini Artırır',
      description: 'Proaktif yaklaşım ile sistem güvenilirliğini maksimize eder.'
    },
    {
      icon: <Security />,
      title: 'Bakım Planlamasını Optimize Eder',
      description: 'Akıllı bakım planlaması ile operasyonel verimliliği artırır.'
    },
    {
      icon: <Speed />,
      title: 'Maliyetleri Azaltır',
      description: 'Önleyici bakım ve hızlı müdahale ile maliyetleri düşürür.'
    }
  ];

  const technicalSpecs = [
    { label: 'Analiz Algoritmaları', value: 'Machine Learning, Pattern Recognition' },
    { label: 'Tespit Hızı', value: 'Gerçek zamanlı' },
    { label: 'Doğruluk Oranı', value: '%90+' },
    { label: 'Raporlama', value: 'Detaylı ve Özelleştirilebilir' },
    { label: 'API Desteği', value: 'REST, SOAP, GraphQL' },
    { label: 'Güvenlik', value: 'SSL/TLS, Role-based Access' }
  ];

  return (
    <div className="product-detail-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Ofcomto - Arıza Etki Analizi Sistemi",
          "description": "Arıza etki analizi, risk değerlendirmesi ve öncelik belirleme ile sistem güvenilirliğini artıran analiz sistemi.",
          "applicationCategory": "System Analysis",
          "operatingSystem": "Windows, Linux, macOS",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "TRY"
          }
        })}
      </script>

      {/* Hero Section */}
      <section className="product-hero">
        <div className="product-hero-container">
          <div className="product-hero-content">
            <div className="product-hero-icon">
              <DirectionsCar />
            </div>
            <h1 className="product-hero-title">
              Ofcomto
            </h1>
            <p className="product-hero-subtitle">
              Arıza Etki Analizi Sistemi
            </p>
            <p className="product-hero-description">
              Sistem arızalarını analiz edin, riskleri değerlendirin ve öncelikleri belirleyin. 
              Ofcomto ile sistem güvenilirliğinizi artırın ve operasyonel verimliliğinizi maksimize edin.
            </p>
            <div className="product-hero-stats">
              <div className="stat-item">
                <span className="stat-number">%90+</span>
                <span className="stat-label">Doğruluk Oranı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%70</span>
                <span className="stat-label">Arıza Süresi Azalması</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%50</span>
                <span className="stat-label">Maliyet Tasarrufu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="product-features-container">
          <h2 className="section-title">
            Özellikler
          </h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="product-benefits-section">
        <div className="product-benefits-container">
          <h2 className="section-title">
            Faydalar
          </h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="product-specs-section">
        <div className="product-specs-container">
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
      <section className="product-cta-section">
        <div className="product-cta-container">
          <div className="product-cta-content">
            <h2 className="product-cta-title">
              Ofcomto ile <span className="product-cta-highlight">Sistem Güvenilirliğinizi</span> Artırın
            </h2>
            <p className="product-cta-description">
              Arıza etki analizi ve risk değerlendirmesi ile sistemlerinizi koruyun. 
              Ofcomto'nun gelişmiş analiz teknolojisini deneyimleyin.
            </p>
            <div className="product-cta-buttons">
              <button className="product-cta-btn product-cta-btn-primary">
                Demo Talep Et
              </button>
              <button className="product-cta-btn product-cta-btn-secondary">
                Teklif Al
              </button>
              <Link to="/products" className="product-cta-btn product-cta-btn-outline">
                Tüm Ürünlerimiz
                <ArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ofcomto; 