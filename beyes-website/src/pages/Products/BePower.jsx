import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bolt,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  Visibility,
  Nature,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const BePower = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Visibility />,
      title: 'Enerji Tüketim İzleme',
      description: 'Gerçek zamanlı enerji tüketimini izler ve detaylı analizler sunar.'
    },
    {
      icon: <Analytics />,
      title: 'Verimlilik Analizi',
      description: 'Enerji verimliliğini analiz eder ve iyileştirme önerileri sunar.'
    },
    {
      icon: <Nature />,
      title: 'Tasarruf Önerileri',
      description: 'Akıllı algoritmalar ile enerji tasarrufu önerileri üretir.'
    },
    {
      icon: <Dashboard />,
      title: 'Gerçek Zamanlı Raporlama',
      description: 'Anlık enerji raporları ile performans takibi sağlar.'
    },
    {
      icon: <Timeline />,
      title: 'Tarihsel Veri Analizi',
      description: 'Geçmiş enerji verilerini analiz ederek trend analizi yapar.'
    },
    {
      icon: <Settings />,
      title: 'Otomatik Optimizasyon',
      description: 'Enerji tüketimini otomatik olarak optimize eder.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Enerji Maliyetlerini Azaltır',
      description: 'Akıllı yönetim ile enerji maliyetlerini önemli ölçüde düşürür.'
    },
    {
      icon: <CheckCircle />,
      title: 'Sürdürülebilirlik Sağlar',
      description: 'Çevre dostu enerji yönetimi ile sürdürülebilirlik hedeflerine ulaşır.'
    },
    {
      icon: <Security />,
      title: 'Operasyonel Verimliliği Artırır',
      description: 'Enerji optimizasyonu ile operasyonel verimliliği maksimize eder.'
    },
    {
      icon: <Speed />,
      title: 'Çevresel Etkiyi Minimize Eder',
      description: 'Enerji tasarrufu ile çevresel etkiyi minimize eder.'
    }
  ];

  const technicalSpecs = [
    { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
    { label: 'Veri Saklama', value: '10 yıl' },
    { label: 'Tasarruf Oranı', value: '%30-50' },
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
          "name": "BePower - Enerji Yönetim Sistemi",
          "description": "Enerji tüketim izleme, verimlilik analizi ve tasarruf önerileri ile enerji yönetimi.",
          "applicationCategory": "Energy Management",
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
              <Bolt />
            </div>
            <h1 className="product-hero-title">
              BePower
            </h1>
            <p className="product-hero-subtitle">
              Enerji Yönetim Sistemi
            </p>
            <p className="product-hero-description">
              Enerji tüketiminizi izleyin, analiz edin ve optimize edin. BePower ile 
              enerji maliyetlerinizi düşürün ve sürdürülebilir bir gelecek için adım atın.
            </p>
            <div className="product-hero-stats">
              <div className="stat-item">
                <span className="stat-number">%40</span>
                <span className="stat-label">Enerji Tasarrufu</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%50</span>
                <span className="stat-label">Maliyet Azalması</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">İzleme</span>
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
              BePower ile <span className="product-cta-highlight">Enerji Yönetiminizi</span> Dönüştürün
            </h2>
            <p className="product-cta-description">
              Enerji tüketiminizi optimize edin, maliyetlerinizi düşürün ve sürdürülebilir 
              bir gelecek için BePower'ın gelişmiş enerji yönetim teknolojisini deneyimleyin.
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

export default BePower; 