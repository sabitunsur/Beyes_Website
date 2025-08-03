import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Memory,
  TrendingUp,
  CheckCircle,
  ArrowForward,
  Speed,
  Security,
  Analytics,
  Dashboard,
  Sensors,
  Warning,
  Timeline,
  Settings
} from '@mui/icons-material';
import '../../styles/pages/productDetails.css';

const BeSens = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Sensors />,
      title: 'IoT Sensör Entegrasyonu',
      description: 'Çeşitli IoT sensörleri ile ekipman durumunu gerçek zamanlı izler.'
    },
    {
      icon: <Warning />,
      title: 'Arıza Tahmin Algoritmaları',
      description: 'Makine öğrenmesi ile arızaları önceden tahmin eder.'
    },
    {
      icon: <Analytics />,
      title: 'Planlı Bakım Optimizasyonu',
      description: 'Bakım planlarını optimize eder ve maliyetleri minimize eder.'
    },
    {
      icon: <Dashboard />,
      title: 'Ekipman Sağlığı İzleme',
      description: 'Ekipmanların sağlık durumunu sürekli olarak takip eder.'
    },
    {
      icon: <Timeline />,
      title: 'Performans Trend Analizi',
      description: 'Geçmiş verileri analiz ederek performans trendlerini belirler.'
    },
    {
      icon: <Settings />,
      title: 'Otomatik Uyarı Sistemi',
      description: 'Kritik durumlar için otomatik uyarılar gönderir.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp />,
      title: 'Planlanmamış Duruşları Önler',
      description: 'Proaktif bakım ile beklenmeyen duruşları minimize eder.'
    },
    {
      icon: <CheckCircle />,
      title: 'Bakım Maliyetlerini Azaltır',
      description: 'Optimize edilmiş bakım planları ile maliyetleri düşürür.'
    },
    {
      icon: <Security />,
      title: 'Ekipman Ömrünü Uzatır',
      description: 'Düzenli bakım ve izleme ile ekipman ömrünü maksimize eder.'
    },
    {
      icon: <Speed />,
      title: 'Operasyonel Verimliliği Artırır',
      description: 'Kesintisiz operasyon ile verimliliği artırır.'
    }
  ];

  const technicalSpecs = [
    { label: 'Sensör Desteği', value: 'Çoklu IoT Sensör' },
    { label: 'Tahmin Doğruluğu', value: '%90+' },
    { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
    { label: 'Veri Saklama', value: '5 yıl' },
    { label: 'API Desteği', value: 'REST, MQTT, OPC UA' },
    { label: 'Güvenlik', value: 'SSL/TLS, End-to-End Encryption' }
  ];

  return (
    <div className="product-detail-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "BeSens - Kestirimci Bakım Sistemi",
          "description": "IoT sensör entegrasyonu, arıza tahmin algoritmaları ve planlı bakım optimizasyonu ile kestirimci bakım sistemi.",
          "applicationCategory": "Predictive Maintenance",
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
              <Memory />
            </div>
            <h1 className="product-hero-title">
              BeSens
            </h1>
            <p className="product-hero-subtitle">
              Kestirimci Bakım
            </p>
            <p className="product-hero-description">
              IoT sensörleri ve yapay zeka ile ekipmanlarınızı izleyin, arızaları önceden tahmin edin 
              ve bakım maliyetlerinizi optimize edin. BeSens ile kesintisiz operasyon sağlayın.
            </p>
            <div className="product-hero-stats">
              <div className="stat-item">
                <span className="stat-number">%90+</span>
                <span className="stat-label">Tahmin Doğruluğu</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%70</span>
                <span className="stat-label">Duruş Azalması</span>
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
              BeSens ile <span className="product-cta-highlight">Kestirimci Bakımınızı</span> Dönüştürün
            </h2>
            <p className="product-cta-description">
              IoT sensörleri ve AI teknolojisi ile ekipmanlarınızı koruyun, arızaları önceden tahmin edin 
              ve operasyonel verimliliğinizi artırın. BeSens'in gelişmiş kestirimci bakım teknolojisini deneyimleyin.
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

export default BeSens; 