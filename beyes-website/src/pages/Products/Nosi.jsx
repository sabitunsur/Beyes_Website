import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Person,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  Chat,
  Psychology,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const Nosi = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Chat />,
      title: 'Doğal Dil İşleme',
      description: 'İnsan dilini anlayan ve doğal yanıtlar üreten AI teknolojisi.'
    },
    {
      icon: <Psychology />,
      title: 'Akıllı Yanıtlama',
      description: 'Bağlama uygun ve kişiselleştirilmiş yanıtlar üretir.'
    },
    {
      icon: <Timeline />,
      title: 'Öğrenme Kapasitesi',
      description: 'Sürekli öğrenme ile kullanıcı tercihlerini öğrenir ve gelişir.'
    },
    {
      icon: <Dashboard />,
      title: '7/24 Hizmet',
      description: 'Kesintisiz hizmet ile her zaman erişilebilir AI asistan.'
    },
    {
      icon: <Analytics />,
      title: 'Performans Analizi',
      description: 'Kullanıcı etkileşimlerini analiz eder ve iyileştirmeler önerir.'
    },
    {
      icon: <Settings />,
      title: 'Özelleştirilebilir',
      description: 'İşletmenizin ihtiyaçlarına göre özelleştirilebilir.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Müşteri Memnuniyetini Artırır',
      description: 'Hızlı ve doğru yanıtlar ile müşteri deneyimini iyileştirir.'
    },
    {
      icon: <CheckCircle />,
      title: 'Operasyonel Maliyetleri Düşürür',
      description: 'Otomatik yanıtlama ile insan kaynağı maliyetlerini azaltır.'
    },
    {
      icon: <Security />,
      title: 'Yanıt Sürelerini Kısaltır',
      description: 'Anında yanıtlar ile bekleme sürelerini minimize eder.'
    },
    {
      icon: <Speed />,
      title: 'Hizmet Kalitesini Yükseltir',
      description: 'Tutarlı ve kaliteli hizmet sunar.'
    }
  ];

  const technicalSpecs = [
    { label: 'AI Modeli', value: 'GPT-4, BERT, Custom Models' },
    { label: 'Dil Desteği', value: 'Türkçe, İngilizce, Çoklu Dil' },
    { label: 'Yanıt Hızı', value: '< 1 saniye' },
    { label: 'Doğruluk Oranı', value: '%95+' },
    { label: 'API Desteği', value: 'REST, WebSocket, GraphQL' },
    { label: 'Güvenlik', value: 'End-to-End Encryption, GDPR' }
  ];

  return (
    <div className="product-detail-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Nosi - AI Asistan",
          "description": "Doğal dil işleme, akıllı yanıtlama ve öğrenme kapasitesi ile 7/24 AI asistan hizmeti.",
          "applicationCategory": "AI Assistant",
          "operatingSystem": "Web, Mobile, Desktop",
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
              <Person />
            </div>
            <h1 className="product-hero-title">
              Nosi
            </h1>
            <p className="product-hero-subtitle">
              AI Asistan
            </p>
            <p className="product-hero-description">
              Yapay zeka destekli asistanınız ile müşteri hizmetlerinizi dönüştürün. 
              Nosi, doğal dil işleme teknolojisi ile 7/24 hizmet verir ve sürekli öğrenir.
            </p>
            <div className="product-hero-stats">
              <div className="stat-item">
                <span className="stat-number">%95+</span>
                <span className="stat-label">Doğruluk Oranı</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{"< 1s"}</span>
                <span className="stat-label">Yanıt Süresi</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7/24</span>
                <span className="stat-label">Hizmet</span>
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
              Nosi ile <span className="product-cta-highlight">Müşteri Hizmetlerinizi</span> Dönüştürün
            </h2>
            <p className="product-cta-description">
              AI destekli asistanınız ile müşteri memnuniyetini artırın, maliyetlerinizi düşürün 
              ve 7/24 hizmet verin. Nosi'nin gelişmiş AI teknolojisini deneyimleyin.
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

export default Nosi; 