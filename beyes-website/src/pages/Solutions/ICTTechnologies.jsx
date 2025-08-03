import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowBack,
  Hub,
  Api,
  Storage,
  TrendingUp,
  CheckCircle,
  Business,
  NetworkCheck,
  Power,
  Transform,
  Code,
  PhoneAndroid,
  Cloud,
  Security,
  Speed,
  FlashOn
} from '@mui/icons-material';
import '../../styles/pages/ictTechnologies.css';

const ICTTechnologies = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ictSolutions = [
    {
      id: 'erp',
      title: 'ERP - Kurumsal Kaynak Planlama',
      icon: <Business />,
      shortDescription: 'Kurumsal kaynaklarınızı optimize eden entegre yönetim sistemleri',
      longDescription: 'Kurumunuzun tüm iş süreçlerini tek bir platformda birleştiren ERP çözümleri ile finans, insan kaynakları, üretim ve satış süreçlerinizi entegre olarak yönetebilirsiniz. Verimliliği artırın ve maliyetleri optimize edin.',
      features: [
        'Modüler yapı',
        'Gerçek zamanlı raporlama',
        'Çok kullanıcılı erişim',
        'Mobil uyumluluk'
      ],
      benefits: [
        'İş süreçlerini %40 hızlandırır',
        'Operasyonel maliyetleri azaltır',
        'Veri tutarlılığını sağlar',
        'Karar verme sürecini iyileştirir'
      ]
    },
    {
      id: 'network-management',
      title: 'Network Yönetim Sistemleri',
      icon: <NetworkCheck />,
      shortDescription: 'Ağ altyapınızı merkezi olarak yönetin ve izleyin',
      longDescription: 'Kurumsal ağ altyapınızı tek bir noktadan yönetebileceğiniz gelişmiş network yönetim sistemleri. Performans izleme, güvenlik yönetimi ve otomatik yapılandırma ile ağınızı optimize edin.',
      features: [
        'Merkezi yönetim paneli',
        'Gerçek zamanlı izleme',
        'Otomatik yedekleme',
        'Güvenlik protokolleri'
      ],
      benefits: [
        'Ağ kesintilerini %90 azaltır',
        'Güvenlik tehditlerini önceden tespit eder',
        'Yönetim maliyetlerini düşürür',
        'Sistem performansını artırır'
      ]
    },
    {
      id: 'energy-management',
      title: 'Enerji Yönetim Sistemleri',
      icon: <Power />,
      shortDescription: 'Enerji tüketiminizi optimize edin ve maliyetleri düşürün',
      longDescription: 'Akıllı enerji yönetim sistemleri ile enerji tüketiminizi analiz edin, optimize edin ve tasarruf sağlayın. IoT sensörleri ve yapay zeka teknolojileri ile enerji verimliliğinizi maksimuma çıkarın.',
      features: [
        'IoT sensör entegrasyonu',
        'Gerçek zamanlı analiz',
        'Otomatik optimizasyon',
        'Detaylı raporlama'
      ],
      benefits: [
        'Enerji maliyetlerini %25 azaltır',
        'Karbon ayak izini küçültür',
        'Sürdürülebilirlik hedeflerine ulaşır',
        'Operasyonel verimliliği artırır'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Dijital Dönüşüm',
      icon: <Transform />,
      shortDescription: 'Kurumunuzu dijital çağa hazırlayın',
      longDescription: 'Kurumunuzun dijital dönüşüm sürecini planlayın ve uygulayın. Mevcut sistemlerinizi modern teknolojilerle entegre ederek rekabet avantajı elde edin. Dijital kültür oluşturun ve sürekli iyileştirme sağlayın.',
      features: [
        'Strateji geliştirme',
        'Süreç optimizasyonu',
        'Teknoloji entegrasyonu',
        'Değişim yönetimi'
      ],
      benefits: [
        'Müşteri deneyimini iyileştirir',
        'Operasyonel verimliliği artırır',
        'Yeni iş modelleri oluşturur',
        'Rekabet avantajı sağlar'
      ]
    },
    {
      id: 'custom-software',
      title: 'Özel Yazılım Geliştirme',
      icon: <Code />,
      shortDescription: 'İhtiyaçlarınıza özel yazılım çözümleri geliştirin',
      longDescription: 'Kurumunuza özel yazılım çözümleri ile benzersiz iş süreçlerinizi dijitalleştirin. Modern teknolojiler kullanarak ölçeklenebilir, güvenli ve kullanıcı dostu uygulamalar geliştiriyoruz.',
      features: [
        'Agile geliştirme metodolojisi',
        'Modern teknoloji stack',
        'Güvenlik odaklı tasarım',
        'Sürekli destek'
      ],
      benefits: [
        'İş süreçlerini otomatikleştirir',
        'Özel ihtiyaçlara çözüm sunar',
        'Rekabet avantajı sağlar',
        'Uzun vadeli maliyet tasarrufu'
      ]
    },
    {
      id: 'mobile-development',
      title: 'Mobil Uygulama Geliştirme',
      icon: <PhoneAndroid />,
      shortDescription: 'iOS ve Android için native mobil uygulamalar',
      longDescription: 'Kullanıcı deneyimini ön planda tutan native mobil uygulamalar geliştiriyoruz. Hem iOS hem de Android platformları için yüksek performanslı, güvenli ve kullanıcı dostu uygulamalar sunuyoruz.',
      features: [
        'Native geliştirme',
        'Cross-platform çözümler',
        'Push notification sistemi',
        'Offline çalışma modu'
      ],
      benefits: [
        'Müşteri erişilebilirliğini artırır',
        'Marka bilinirliğini güçlendirir',
        'Satış kanallarını genişletir',
        'Müşteri sadakatini artırır'
      ]
    }
  ];

  return (
    <div className="ict-technologies-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Bilgi ve İletişim Teknolojileri",
          "description": "Beyes ICT çözümleri: ERP, Network yönetimi, Enerji yönetimi, Dijital dönüşüm, Özel yazılım ve Mobil uygulama geliştirme.",
          "provider": {
            "@type": "Organization",
            "name": "Beyes"
          },
          "serviceType": "Bilgi ve İletişim Teknolojileri",
          "areaServed": "Türkiye",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "ICT Çözümleri",
            "itemListElement": ictSolutions.map(solution => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": solution.title,
                "description": solution.shortDescription
              }
            }))
          }
        })}
      </script>

      {/* ICT Solutions Grid */}
      <section className="ict-solutions-section">
        <div className="ict-solutions-container">
          <div className="ict-solutions-header">   
            <h1 className="ict-solutions-title">
              Bilgi ve İletişim <span className="ict-solutions-highlight">Teknolojileri</span>
            </h1>
            <p className="ict-solutions-subtitle">
              Kurumunuzun dijital dönüşümü için kapsamlı ICT çözümleri
            </p>
          </div>

          <div className="ict-solutions-grid">
            {ictSolutions.map((solution) => (
              <div key={solution.id} className="ict-solution-card" id={solution.id}>
                <div className="ict-solution-header">
                  <div className="ict-solution-icon">
                    {solution.icon}
                  </div>
                  <h3 className="ict-solution-title">{solution.title}</h3>
                  <p className="ict-solution-description">{solution.shortDescription}</p>
                </div>

                <div className="ict-solution-content">
                  <div className="ict-solution-details">
                    <h4 className="ict-solution-subtitle">Çözüm Detayları</h4>
                    <p className="ict-solution-long-description">{solution.longDescription}</p>
                  </div>

                  <div className="ict-solution-features">
                    <h4 className="ict-solution-subtitle">Özellikler</h4>
                    <ul className="ict-features-list">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="ict-feature-item">
                          <CheckCircle className="ict-feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ict-solution-benefits">
                    <h4 className="ict-solution-subtitle">Faydalar</h4>
                    <ul className="ict-benefits-list">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="ict-benefit-item">
                          <TrendingUp className="ict-benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="ict-solution-cta">
                  <button className="ict-demo-btn">
                    Demo Talep Et
                  </button>
                  <button className="ict-quote-btn">
                    Teklif Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="ict-tech-stack-section">
        <div className="ict-tech-stack-container">
          <div className="ict-tech-stack-header">
            <h2 className="ict-tech-stack-title">
              Kullandığımız <span className="ict-tech-stack-highlight">Teknolojiler</span>
            </h2>
            <p className="ict-tech-stack-subtitle">
              En güncel ICT teknolojileri ile çözümlerinizi geliştiriyoruz
            </p>
          </div>

          <div className="ict-tech-stack-grid">
            <div className="ict-tech-item">
              <Hub className="ict-tech-icon" />
              <h3>Ağ Teknolojileri</h3>
              <p>Cisco, Juniper, MikroTik</p>
            </div>
            <div className="ict-tech-item">
              <Cloud className="ict-tech-icon" />
              <h3>Bulut Çözümleri</h3>
              <p>AWS, Azure, Google Cloud</p>
            </div>
            <div className="ict-tech-item">
              <Storage className="ict-tech-icon" />
              <h3>Veri Yönetimi</h3>
              <p>SQL Server, Oracle, MongoDB</p>
            </div>
            <div className="ict-tech-item">
              <Api className="ict-tech-icon" />
              <h3>API Geliştirme</h3>
              <p>RESTful APIs, GraphQL, SOAP</p>
            </div>
            <div className="ict-tech-item">
              <Security className="ict-tech-icon" />
              <h3>Güvenlik</h3>
              <p>Firewall, VPN, Encryption</p>
            </div>
            <div className="ict-tech-item">
              <FlashOn className="ict-tech-icon" />
              <h3>Performans</h3>
              <p>Load Balancing, Caching</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ict-cta-section">
        <div className="ict-cta-container">
          <div className="ict-cta-content">
            <h2 className="ict-cta-title">
              Dijital Dönüşümünüzü <span className="ict-cta-highlight">Başlatın</span>
            </h2>
            <p className="ict-cta-description">
              Uzman ekibimiz, kurumunuza özel ICT çözümleri geliştirmek için hazır. 
              Hemen iletişime geçin ve dijital dönüşümünüzü hızlandırın.
            </p>
            <div className="ict-cta-buttons">
              <Link to="/iletisim" className="ict-cta-btn ict-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/solutions" className="ict-cta-btn ict-cta-btn-secondary">
                Tüm Çözümlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ICTTechnologies; 