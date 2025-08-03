import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Build,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  NetworkCheck,
  Warning,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const Heysem = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <NetworkCheck />,
      title: 'Gerçek Zamanlı İzleme',
      description: 'Network altyapınızı 7/24 gerçek zamanlı olarak izler ve performans metriklerini takip eder.'
    },
    {
      icon: <Warning />,
      title: 'Otomatik Arıza Tespiti',
      description: 'Yapay zeka destekli algoritmalar ile arızaları önceden tespit eder ve uyarı verir.'
    },
    {
      icon: <Analytics />,
      title: 'Performans Analizi',
      description: 'Detaylı performans raporları ile network verimliliğinizi analiz eder.'
    },
    {
      icon: <Dashboard />,
      title: 'Merkezi Yönetim Paneli',
      description: 'Tüm network bileşenlerini tek bir panelden yönetmenizi sağlar.'
    },
    {
      icon: <Timeline />,
      title: 'Tarihsel Veri Analizi',
      description: 'Geçmiş verileri analiz ederek trend analizi ve öngörücü bakım sağlar.'
    },
    {
      icon: <Settings />,
      title: 'Otomatik Konfigürasyon',
      description: 'Network ayarlarını otomatik olarak optimize eder ve yapılandırır.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Network Kesintilerini Önler',
      description: 'Proaktif izleme ve erken uyarı sistemi ile kesintileri minimize eder.'
    },
    {
      icon: <CheckCircle />,
      title: 'Operasyonel Maliyetleri Düşürür',
      description: 'Otomatik yönetim ve optimizasyon ile işletme maliyetlerini azaltır.'
    },
    {
      icon: <Security />,
      title: 'Sistem Güvenilirliğini Artırır',
      description: 'Sürekli izleme ve bakım ile sistem güvenilirliğini maksimize eder.'
    },
    {
      icon: <Speed />,
      title: 'Bakım Sürelerini Kısaltır',
      description: 'Akıllı bakım planlaması ile bakım sürelerini optimize eder.'
    }
  ];

  const technicalSpecs = [
    { label: 'Desteklenen Protokoller', value: 'SNMP, NetFlow, sFlow, IPFIX' },
    { label: 'Maksimum Cihaz Sayısı', value: 'Sınırsız' },
    { label: 'Veri Saklama Süresi', value: '10 yıl' },
    { label: 'Raporlama Frekansı', value: 'Gerçek zamanlı' },
    { label: 'API Desteği', value: 'REST, SOAP, GraphQL' },
    { label: 'Güvenlik', value: 'SSL/TLS, VPN, 2FA' }
  ];

  return (
    <div className="product-detail-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Heysem - Transmisyon Network Yönetim Sistemi",
          "description": "Gerçek zamanlı network izleme, otomatik arıza tespiti ve performans analizi ile transmisyon network yönetimi.",
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
              <Build />
            </div>
            <div>
              <h1 className="product-hero-title">
                Heysem
              </h1>
              <p className="product-hero-subtitle">
                Transmisyon Network Yönetim Sistemi
              </p>
              <p className="product-hero-description">
                Network altyapınızı gerçek zamanlı olarak izleyin, performansını analiz edin ve 
                arızaları önceden tespit edin. Heysem ile network yönetimi artık çok daha kolay.
              </p>
              <div className="product-hero-stats">
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">İzleme</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">%60</span>
                  <span className="stat-label">Maliyet Tasarrufu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="product-features-section">
        <div className="product-features-container">
          <h2 className="product-features-title">
            Özellikler
          </h2>
          <div className="product-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ backgroundColor: '#d32f2f' }}>
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
          <h2 className="product-benefits-title">
            Faydalar
          </h2>
          <div className="product-benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon" style={{ backgroundColor: '#1976d2' }}>
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
          <h2 className="product-specs-title">
            Teknik Özellikler
          </h2>
          <div className="product-specs-grid">
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
              Heysem ile <span className="product-cta-highlight">Network Yönetiminizi</span> Dönüştürün
            </h2>
            <p className="product-cta-description">
              Uzman ekibimiz, Heysem'i ihtiyaçlarınıza özel olarak konfigüre etmek için hazır. 
              Hemen demo talep edin ve network yönetiminizi optimize edin.
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

export default Heysem; 