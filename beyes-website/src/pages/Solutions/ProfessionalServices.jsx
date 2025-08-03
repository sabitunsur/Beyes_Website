import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowBack,
  Work,
  Support,
  School,
  Business,
  TrendingUp,
  CheckCircle,
  Build,
  People,
  Headset,
  Book,
  Psychology,
  Security,
  Speed,
  FlashOn
} from '@mui/icons-material';
import '../../styles/pages/professionalServices.css';

const ProfessionalServices = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const professionalSolutions = [
    {
      id: 'system-infrastructure',
      title: 'Sistem Alt Yapı Kurulumu',
      icon: <Build />,
      shortDescription: 'Kurumsal sistem altyapılarının profesyonel kurulum ve yapılandırması',
      longDescription: 'Kurumunuzun ihtiyaçlarına özel sistem altyapılarının tasarımı, kurulumu ve yapılandırması. Ağ altyapısı, sunucu sistemleri, veri merkezi çözümleri ve güvenlik sistemlerinin profesyonel kurulumunu sağlıyoruz.',
      features: [
        'Ağ altyapısı tasarımı',
        'Sunucu sistemleri kurulumu',
        'Veri merkezi çözümleri',
        'Güvenlik sistemleri'
      ],
      benefits: [
        'Sistem performansını optimize eder',
        'Güvenlik seviyesini artırır',
        'Operasyonel verimliliği yükseltir',
        'Uzun vadeli maliyet tasarrufu'
      ]
    },
    {
      id: 'outsourced-personnel',
      title: 'Dış Kaynak Personel Tedariği',
      icon: <People />,
      shortDescription: 'Uzman personel tedariki ve yönetimi hizmetleri',
      longDescription: 'Kurumunuzun ihtiyaç duyduğu uzman personeli sağlıyoruz. Teknik uzmanlar, yazılım geliştiriciler, sistem yöneticileri ve proje yöneticileri ile projelerinizi başarıya ulaştırıyoruz.',
      features: [
        'Teknik uzman tedariki',
        'Yazılım geliştirici desteği',
        'Sistem yöneticisi hizmetleri',
        'Proje yöneticisi desteği'
      ],
      benefits: [
        'Proje sürelerini kısaltır',
        'Maliyetleri optimize eder',
        'Uzmanlık seviyesini artırır',
        'Esnek çalışma modelleri'
      ]
    },
    {
      id: 'technical-support',
      title: 'Teknik Destek',
      icon: <Headset />,
      shortDescription: '7/24 teknik destek ve sorun giderme hizmetleri',
      longDescription: 'Kurumunuzun sistemlerine 7/24 teknik destek sağlıyoruz. Uzaktan erişim, yerinde destek, acil müdahale ve proaktif bakım hizmetleri ile sistemlerinizin kesintisiz çalışmasını garanti ediyoruz.',
      features: [
        '7/24 teknik destek',
        'Uzaktan erişim hizmetleri',
        'Yerinde destek',
        'Acil müdahale'
      ],
      benefits: [
        'Sistem kesintilerini önler',
        'Hızlı sorun çözümü sağlar',
        'Operasyonel güvenilirliği artırır',
        'Bakım maliyetlerini düşürür'
      ]
    },
    {
      id: 'training',
      title: 'Eğitim',
      icon: <School />,
      shortDescription: 'Teknoloji ve sistem eğitimleri',
      longDescription: 'Kurumunuzun çalışanlarına özel teknoloji ve sistem eğitimleri sunuyoruz. Yeni teknolojiler, güvenlik protokolleri, sistem yönetimi ve kullanıcı eğitimleri ile ekibinizi güçlendiriyoruz.',
      features: [
        'Teknoloji eğitimleri',
        'Güvenlik protokolü eğitimleri',
        'Sistem yönetimi eğitimleri',
        'Kullanıcı eğitimleri'
      ],
      benefits: [
        'Çalışan verimliliğini artırır',
        'Teknoloji adaptasyonunu hızlandırır',
        'Güvenlik bilincini yükseltir',
        'Operasyonel hataları azaltır'
      ]
    },
    {
      id: 'consultancy',
      title: 'Danışmanlık',
      icon: <Business />,
      shortDescription: 'Teknoloji ve sistem danışmanlık hizmetleri',
      longDescription: 'Kurumunuzun teknoloji stratejilerini geliştirmek için uzman danışmanlık hizmetleri sunuyoruz. Sistem analizi, teknoloji seçimi, proje yönetimi ve dijital dönüşüm danışmanlığı ile hedeflerinize ulaşmanızı sağlıyoruz.',
      features: [
        'Sistem analizi',
        'Teknoloji seçimi danışmanlığı',
        'Proje yönetimi',
        'Dijital dönüşüm danışmanlığı'
      ],
      benefits: [
        'Stratejik kararları optimize eder',
        'Teknoloji yatırımlarını doğrular',
        'Proje başarı oranını artırır',
        'Rekabet avantajı sağlar'
      ]
    }
  ];

  return (
    <div className="professional-services-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Profesyonel Servisler",
          "description": "Beyes profesyonel servisler: Sistem altyapı kurulumu, dış kaynak personel tedariki, teknik destek, eğitim ve danışmanlık hizmetleri.",
          "provider": {
            "@type": "Organization",
            "name": "Beyes"
          },
          "serviceType": "Profesyonel Servisler",
          "areaServed": "Türkiye",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Profesyonel Servisler",
            "itemListElement": professionalSolutions.map(solution => ({
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

      {/* Professional Services Grid */}
      <section className="professional-solutions-section">
        <div className="professional-solutions-container">
          <div className="professional-solutions-header">
            <h1 className="professional-solutions-title">
              Profesyonel <span className="professional-solutions-highlight">Servisler</span>
            </h1>
            <p className="professional-solutions-subtitle">
              Kurumunuzun teknoloji ihtiyaçları için kapsamlı profesyonel hizmetler
            </p>
          </div>

          <div className="professional-solutions-grid">
            {professionalSolutions.map((solution) => (
              <div key={solution.id} className="professional-solution-card" id={solution.id}>
                <div className="professional-solution-header">
                  <div className="professional-solution-icon">
                    {solution.icon}
                  </div>
                  <h3 className="professional-solution-title">{solution.title}</h3>
                  <p className="professional-solution-description">{solution.shortDescription}</p>
                </div>

                <div className="professional-solution-content">
                  <div className="professional-solution-details">
                    <h4 className="professional-solution-subtitle">Hizmet Detayları</h4>
                    <p className="professional-solution-long-description">{solution.longDescription}</p>
                  </div>

                  <div className="professional-solution-features">
                    <h4 className="professional-solution-subtitle">Özellikler</h4>
                    <ul className="professional-features-list">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="professional-feature-item">
                          <CheckCircle className="professional-feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="professional-solution-benefits">
                    <h4 className="professional-solution-subtitle">Faydalar</h4>
                    <ul className="professional-benefits-list">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="professional-benefit-item">
                          <TrendingUp className="professional-benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="professional-solution-cta">
                  <button className="professional-demo-btn">
                    Demo Talep Et
                  </button>
                  <button className="professional-quote-btn">
                    Teklif Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="professional-tech-stack-section">
        <div className="professional-tech-stack-container">
          <div className="professional-tech-stack-header">
            <h2 className="professional-tech-stack-title">
              Sunduğumuz <span className="professional-tech-stack-highlight">Hizmetler</span>
            </h2>
            <p className="professional-tech-stack-subtitle">
              Kapsamlı profesyonel hizmetler ile projelerinizi başarıya ulaştırıyoruz
            </p>
          </div>

          <div className="professional-tech-stack-grid">
            <div className="professional-tech-item">
              <Build className="professional-tech-icon" />
              <h3>Altyapı Kurulumu</h3>
              <p>Network, Server, Data Center</p>
            </div>
            <div className="professional-tech-item">
              <People className="professional-tech-icon" />
              <h3>Personel Tedariki</h3>
              <p>Expert Staff, Consultants</p>
            </div>
            <div className="professional-tech-item">
              <Headset className="professional-tech-icon" />
              <h3>Teknik Destek</h3>
              <p>24/7 Support, Remote Access</p>
            </div>
            <div className="professional-tech-item">
              <School className="professional-tech-icon" />
              <h3>Eğitim Hizmetleri</h3>
              <p>Technology Training, Certification</p>
            </div>
            <div className="professional-tech-item">
              <Business className="professional-tech-icon" />
              <h3>Danışmanlık</h3>
              <p>Strategy, Planning, Implementation</p>
            </div>
            <div className="professional-tech-item">
              <FlashOn className="professional-tech-icon" />
              <h3>Performans</h3>
              <p>Optimization, Efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="professional-cta-section">
        <div className="professional-cta-container">
          <div className="professional-cta-content">
            <h2 className="professional-cta-title">
              Profesyonel Hizmetlerinizi <span className="professional-cta-highlight">Başlatın</span>
            </h2>
            <p className="professional-cta-description">
              Uzman ekibimiz, kurumunuzun teknoloji ihtiyaçları için kapsamlı profesyonel hizmetler sunmak için hazır. 
              Hemen iletişime geçin ve projelerinizi hayata geçirelim.
            </p>
            <div className="professional-cta-buttons">
              <Link to="/iletisim" className="professional-cta-btn professional-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/solutions" className="professional-cta-btn professional-cta-btn-secondary">
                Tüm Çözümlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalServices; 