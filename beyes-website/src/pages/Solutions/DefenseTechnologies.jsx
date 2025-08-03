import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowBack,
  Flight,
  SmartToy,
  Public,
  Rocket,
  Shield,
  Monitor,
  TrendingUp,
  CheckCircle,
  Memory,
  Settings,
  Build,
  Sensors,
  Engineering,
  AcUnit,
  Psychology,
  Security,
  Speed,
  FlashOn
} from '@mui/icons-material';
import '../../styles/pages/defenseTechnologies.css';

const DefenseTechnologies = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const defenseSolutions = [
    {
      id: 'card-test-boxes',
      title: 'Kart Test Kutuları ve Rack Test Sistemleri',
      icon: <Memory />,
      shortDescription: 'Savunma sektörü için özel test sistemleri ve kart test kutuları',
      longDescription: 'Savunma ve havacılık sektöründe kullanılan elektronik kartların test edilmesi için özel olarak tasarlanmış test kutuları ve rack test sistemleri. Yüksek hassasiyetli ölçümler ve güvenilir test sonuçları sağlıyoruz.',
      features: [
        'Yüksek hassasiyetli ölçümler',
        'Otomatik test süreçleri',
        'Gerçek zamanlı veri analizi',
        'Çoklu test protokolü desteği'
      ],
      benefits: [
        'Test sürelerini %60 azaltır',
        'Test doğruluğunu artırır',
        'Operasyonel maliyetleri düşürür',
        'Kalite güvencesini sağlar'
      ]
    },
    {
      id: 'rigid-flex-designs',
      title: 'Rigid ve Flex Kart Tasarımları',
      icon: <Settings />,
      shortDescription: 'Savunma sektörü için özel rigid ve flex PCB tasarımları',
      longDescription: 'Savunma ve havacılık uygulamaları için özel olarak tasarlanmış rigid ve flex PCB çözümleri. Yüksek frekans, düşük gürültü ve uzun ömürlü tasarımlar ile kritik sistemleriniz için güvenilir çözümler sunuyoruz.',
      features: [
        'Yüksek frekans tasarımı',
        'Düşük gürültü optimizasyonu',
        'Termal yönetim',
        'EMI/EMC uyumluluğu'
      ],
      benefits: [
        'Sistem performansını artırır',
        'Güvenilirliği yükseltir',
        'Bakım maliyetlerini azaltır',
        'Uzun ömürlü çözümler'
      ]
    },
    {
      id: 'embedded-software',
      title: 'Gömülü Yazılım',
      icon: <Build />,
      shortDescription: 'Savunma sistemleri için güvenli gömülü yazılım çözümleri',
      longDescription: 'Savunma ve havacılık sistemleri için özel olarak geliştirilmiş gömülü yazılım çözümleri. Gerçek zamanlı işletim sistemleri, güvenlik protokolleri ve kritik sistem yazılımları ile sistemlerinizi güçlendiriyoruz.',
      features: [
        'Gerçek zamanlı işletim sistemleri',
        'Güvenlik protokolleri',
        'Kritik sistem yazılımları',
        'Otomatik güncelleme sistemi'
      ],
      benefits: [
        'Sistem güvenliğini artırır',
        'Operasyonel verimliliği yükseltir',
        'Bakım sürelerini kısaltır',
        'Sistem güvenilirliğini sağlar'
      ]
    },
    {
      id: 'iot-sensors',
      title: 'IoT Sensör Tasarım ve Üretimi',
      icon: <Sensors />,
      shortDescription: 'Savunma uygulamaları için özel IoT sensör çözümleri',
      longDescription: 'Savunma ve havacılık sektörü için özel olarak tasarlanmış IoT sensör çözümleri. Çevresel koşullara dayanıklı, yüksek hassasiyetli ve güvenilir sensör sistemleri ile kritik verileri topluyoruz.',
      features: [
        'Çevresel koşullara dayanıklılık',
        'Yüksek hassasiyet',
        'Düşük güç tüketimi',
        'Kablosuz iletişim'
      ],
      benefits: [
        'Gerçek zamanlı veri toplama',
        'Sistem güvenliğini artırır',
        'Operasyonel maliyetleri düşürür',
        'Bakım sürelerini kısaltır'
      ]
    },
    {
      id: 'electromechanical',
      title: 'Elektromekanik Tasarım ve Üretim',
      icon: <Engineering />,
      shortDescription: 'Savunma sistemleri için elektromekanik çözümler',
      longDescription: 'Savunma ve havacılık sektörü için özel elektromekanik tasarım ve üretim çözümleri. Yüksek hassasiyetli mekanik sistemler, motor kontrol sistemleri ve entegre elektromekanik çözümler ile sistemlerinizi optimize ediyoruz.',
      features: [
        'Yüksek hassasiyetli tasarım',
        'Motor kontrol sistemleri',
        'Entegre çözümler',
        'Kalite kontrol süreçleri'
      ],
      benefits: [
        'Sistem performansını artırır',
        'Operasyonel verimliliği yükseltir',
        'Bakım maliyetlerini azaltır',
        'Sistem güvenilirliğini sağlar'
      ]
    },
    {
      id: 'vibration-fixtures',
      title: 'Titreşim Fikstürleri',
      icon: <Monitor />,
      shortDescription: 'Savunma sistemleri için titreşim test fikstürleri',
      longDescription: 'Savunma ve havacılık sistemlerinin titreşim testleri için özel olarak tasarlanmış fikstür çözümleri. Yüksek frekanslı titreşim testleri, şok testleri ve çevresel testler için güvenilir fikstür sistemleri sunuyoruz.',
      features: [
        'Yüksek frekanslı testler',
        'Şok testi kapasitesi',
        'Çevresel test uyumluluğu',
        'Otomatik test süreçleri'
      ],
      benefits: [
        'Test doğruluğunu artırır',
        'Test sürelerini kısaltır',
        'Operasyonel maliyetleri düşürür',
        'Kalite güvencesini sağlar'
      ]
    },
    {
      id: 'climate-systems',
      title: 'Özel İklimlendirme Sistemleri',
      icon: <AcUnit />,
      shortDescription: 'Savunma sistemleri için özel iklimlendirme çözümleri',
      longDescription: 'Savunma ve havacılık sistemleri için özel iklimlendirme çözümleri. Yüksek hassasiyetli sıcaklık kontrolü, nem kontrolü ve basınç kontrolü ile kritik sistemlerinizin optimal çalışma koşullarını sağlıyoruz.',
      features: [
        'Yüksek hassasiyetli kontrol',
        'Nem kontrolü',
        'Basınç kontrolü',
        'Otomatik kalibrasyon'
      ],
      benefits: [
        'Sistem performansını optimize eder',
        'Ekipman ömrünü uzatır',
        'Operasyonel güvenilirliği artırır',
        'Enerji verimliliğini yükseltir'
      ]
    },
    {
      id: 'simulation-systems',
      title: 'Simülasyon Sistemleri',
      icon: <Psychology />,
      shortDescription: 'Savunma uygulamaları için gelişmiş simülasyon çözümleri',
      longDescription: 'Savunma ve havacılık sektörü için özel simülasyon sistemleri. Gerçek zamanlı simülasyon, 3D görselleştirme ve analitik modeller ile sistem performansınızı optimize ediyoruz.',
      features: [
        'Gerçek zamanlı simülasyon',
        '3D görselleştirme',
        'Analitik modeller',
        'Senaryo analizi'
      ],
      benefits: [
        'Sistem tasarımını iyileştirir',
        'Test maliyetlerini azaltır',
        'Operasyonel riskleri düşürür',
        'Karar verme sürecini hızlandırır'
      ]
    },
    {
      id: 'system-engineering',
      title: 'Sistem Mühendisliği',
      icon: <Security />,
      shortDescription: 'Savunma sistemleri için kapsamlı mühendislik çözümleri',
      longDescription: 'Savunma ve havacılık sistemleri için kapsamlı sistem mühendisliği çözümleri. Sistem analizi, tasarım, entegrasyon ve test süreçlerinde uzman ekibimizle kritik projelerinizi başarıya ulaştırıyoruz.',
      features: [
        'Sistem analizi',
        'Tasarım optimizasyonu',
        'Entegrasyon süreçleri',
        'Test ve doğrulama'
      ],
      benefits: [
        'Proje başarı oranını artırır',
        'Zaman ve maliyet tasarrufu sağlar',
        'Sistem güvenilirliğini yükseltir',
        'Teknik riskleri azaltır'
      ]
    }
  ];

  return (
    <div className="defense-technologies-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Savunma ve Havacılık Teknolojileri",
          "description": "Beyes savunma ve havacılık teknolojileri çözümleri: Kart test sistemleri, PCB tasarımları, gömülü yazılım, IoT sensörler, elektromekanik sistemler, simülasyon ve sistem mühendisliği.",
          "provider": {
            "@type": "Organization",
            "name": "Beyes"
          },
          "serviceType": "Savunma ve Havacılık Teknolojileri",
          "areaServed": "Türkiye",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Savunma Çözümleri",
            "itemListElement": defenseSolutions.map(solution => ({
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

      {/* Defense Solutions Grid */}
      <section className="defense-solutions-section">
        <div className="defense-solutions-container">
          <div className="defense-solutions-header">
            <h1 className="defense-solutions-title">
              Savunma ve Havacılık <span className="defense-solutions-highlight">Teknolojileri</span>
            </h1>
            <p className="defense-solutions-subtitle">
              Savunma ve havacılık sektörü için özel teknoloji çözümleri
            </p>
          </div>

          <div className="defense-solutions-grid">
            {defenseSolutions.map((solution) => (
              <div key={solution.id} className="defense-solution-card" id={solution.id}>
                <div className="defense-solution-header">
                  <div className="defense-solution-icon">
                    {solution.icon}
                  </div>
                  <h3 className="defense-solution-title">{solution.title}</h3>
                  <p className="defense-solution-description">{solution.shortDescription}</p>
                </div>

                <div className="defense-solution-content">
                  <div className="defense-solution-details">
                    <h4 className="defense-solution-subtitle">Çözüm Detayları</h4>
                    <p className="defense-solution-long-description">{solution.longDescription}</p>
                  </div>

                  <div className="defense-solution-features">
                    <h4 className="defense-solution-subtitle">Özellikler</h4>
                    <ul className="defense-features-list">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="defense-feature-item">
                          <CheckCircle className="defense-feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="defense-solution-benefits">
                    <h4 className="defense-solution-subtitle">Faydalar</h4>
                    <ul className="defense-benefits-list">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="defense-benefit-item">
                          <TrendingUp className="defense-benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="defense-solution-cta">
                  <button className="defense-demo-btn">
                    Demo Talep Et
                  </button>
                  <button className="defense-quote-btn">
                    Teklif Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="defense-tech-stack-section">
        <div className="defense-tech-stack-container">
          <div className="defense-tech-stack-header">
            <h2 className="defense-tech-stack-title">
              Kullandığımız <span className="defense-tech-stack-highlight">Teknolojiler</span>
            </h2>
            <p className="defense-tech-stack-subtitle">
              En güncel savunma teknolojileri ile çözümlerinizi geliştiriyoruz
            </p>
          </div>

          <div className="defense-tech-stack-grid">
            <div className="defense-tech-item">
              <Flight className="defense-tech-icon" />
              <h3>Havacılık Sistemleri</h3>
              <p>Avionics, Flight Control, Navigation</p>
            </div>
            <div className="defense-tech-item">
              <SmartToy className="defense-tech-icon" />
              <h3>Drone Teknolojileri</h3>
              <p>UAV, UGV, Autonomous Systems</p>
            </div>
            <div className="defense-tech-item">
              <Public className="defense-tech-icon" />
              <h3>Uydu Sistemleri</h3>
              <p>Satellite Communication, GPS</p>
            </div>
            <div className="defense-tech-item">
              <Rocket className="defense-tech-icon" />
              <h3>Füze Sistemleri</h3>
              <p>Guidance, Control, Propulsion</p>
            </div>
            <div className="defense-tech-item">
              <Shield className="defense-tech-icon" />
              <h3>Güvenlik Sistemleri</h3>
              <p>Radar, Sonar, Electronic Warfare</p>
            </div>
            <div className="defense-tech-item">
              <FlashOn className="defense-tech-icon" />
              <h3>Performans</h3>
              <p>Real-time Processing, High Reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="defense-cta-section">
        <div className="defense-cta-container">
          <div className="defense-cta-content">
            <h2 className="defense-cta-title">
              Savunma Teknolojilerinizi <span className="defense-cta-highlight">Güçlendirin</span>
            </h2>
            <p className="defense-cta-description">
              Uzman ekibimiz, savunma ve havacılık sektörü için özel teknoloji çözümleri geliştirmek için hazır. 
              Hemen iletişime geçin ve projelerinizi hayata geçirelim.
            </p>
            <div className="defense-cta-buttons">
              <Link to="/iletisim" className="defense-cta-btn defense-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/solutions" className="defense-cta-btn defense-cta-btn-secondary">
                Tüm Çözümlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefenseTechnologies; 