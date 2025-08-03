import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sensors,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  Psychology,
  AutoAwesome,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const SCNMS = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Psychology />,
      title: 'Yapay Zeka Destekli Yönetim',
      description: 'Makine öğrenmesi algoritmaları ile network davranışlarını öğrenir ve optimize eder.'
    },
    {
      icon: <Analytics />,
      title: 'Öngörücü Analitik',
      description: 'Geçmiş verileri analiz ederek gelecekteki sorunları önceden tahmin eder.'
    },
    {
      icon: <AutoAwesome />,
      title: 'Otomatik Optimizasyon',
      description: 'Network performansını sürekli olarak izler ve otomatik olarak optimize eder.'
    },
    {
      icon: <Dashboard />,
      title: 'Akıllı Karar Verme',
      description: 'Yapay zeka destekli karar verme sistemi ile en uygun çözümleri önerir.'
    },
    {
      icon: <Timeline />,
      title: 'Gerçek Zamanlı Öğrenme',
      description: 'Sürekli öğrenme kapasitesi ile sistem performansını sürekli iyileştirir.'
    },
    {
      icon: <Settings />,
      title: 'Adaptif Konfigürasyon',
      description: 'Değişen koşullara göre otomatik olarak kendini yeniden yapılandırır.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Network Performansını Artırır',
      description: 'Yapay zeka optimizasyonu ile network verimliliğini maksimize eder.'
    },
    {
      icon: <CheckCircle />,
      title: 'Proaktif Sorun Çözümü',
      description: 'Sorunları oluşmadan önce tespit eder ve çözüm üretir.'
    },
    {
      icon: <Security />,
      title: 'Operasyonel Verimliliği Yükseltir',
      description: 'Otomatik yönetim ile insan müdahalesini minimize eder.'
    },
    {
      icon: <Speed />,
      title: 'Geleceğe Yönelik Planlama',
      description: 'Öngörücü analitik ile stratejik planlama yapar.'
    }
  ];

  const technicalSpecs = [
    { label: 'AI Algoritmaları', value: 'Deep Learning, Neural Networks' },
    { label: 'Öğrenme Kapasitesi', value: 'Sürekli Öğrenme' },
    { label: 'Tahmin Doğruluğu', value: '%95+' },
    { label: 'Optimizasyon Hızı', value: 'Gerçek zamanlı' },
    { label: 'API Desteği', value: 'REST, GraphQL, WebSocket' },
    { label: 'Güvenlik', value: 'End-to-End Encryption, Zero Trust' }
  ];

  return (
    <div className="product-detail-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "SC-NMS - Bilişsel Network Yönetim Sistemi",
          "description": "Yapay zeka destekli network yönetimi, öngörücü analitik ve otomatik optimizasyon ile bilişsel network yönetimi.",
          "applicationCategory": "Network Management",
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
              <Sensors />
            </div>
            <h1 className="product-hero-title">
              SC-NMS
            </h1>
            <p className="product-hero-subtitle">
              Bilişsel Network Yönetim Sistemi
            </p>
            <p className="product-hero-description">
              Yapay zeka teknolojisi ile network yönetimini dönüştürün. SC-NMS, öğrenen ve 
              kendini optimize eden akıllı network yönetim sistemi ile geleceğin teknolojisini bugün yaşayın.
            </p>
            <div className="product-hero-stats">
              <div className="stat-item">
                <span className="stat-number">%95+</span>
                <span className="stat-label">Tahmin Doğruluğu</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%40</span>
                <span className="stat-label">Performans Artışı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%80</span>
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
              SC-NMS ile <span className="product-cta-highlight">Geleceğin Network Yönetimini</span> Keşfedin
            </h2>
            <p className="product-cta-description">
              Yapay zeka destekli network yönetimi ile işletmenizi geleceğe taşıyın. 
              SC-NMS'in öğrenen ve optimize eden teknolojisini deneyimleyin.
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

export default SCNMS; 