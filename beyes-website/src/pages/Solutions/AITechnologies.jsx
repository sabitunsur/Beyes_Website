import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowBack,
  Memory,
  Analytics,
  Settings,
  Computer,
  Code,
  Rocket,
  TrendingUp,
  Psychology,
  Shield,
  Cloud,
  Storage,
  Api,
  Security,
  FlashOn,
  CheckCircle
} from '@mui/icons-material';
import '../../styles/pages/aiTechnologies.css';

const AITechnologies = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiSolutions = [
    {
      id: 'alarm-prediction',
      title: 'Alarm Tahminleme',
      icon: <Memory />,
      shortDescription: 'Gelişmiş algoritmalar ile sistem alarmlarını önceden tahmin edin',
      longDescription: 'Yapay zeka destekli alarm tahminleme sistemleri ile kritik durumları önceden tespit ederek proaktif önlemler alabilirsiniz. Makine öğrenmesi algoritmaları ile sistem davranışlarını analiz ederek olası arızaları önceden belirliyoruz.',
      features: [
        'Gerçek zamanlı veri analizi',
        'Makine öğrenmesi algoritmaları',
        'Proaktif uyarı sistemi',
        'Yüksek doğruluk oranı'
      ],
      benefits: [
        'Planlanmamış duruşları önler',
        'Bakım maliyetlerini azaltır',
        'Sistem güvenilirliğini artırır',
        'Operasyonel verimliliği yükseltir'
      ]
    },
    {
      id: 'anomaly-detection',
      title: 'Anomali Tespiti',
      icon: <Analytics />,
      shortDescription: 'Anormal durumları otomatik olarak tespit edin',
      longDescription: 'Gelişmiş anomali tespit sistemleri ile normal davranış kalıplarından sapan durumları otomatik olarak belirliyoruz. Bu teknoloji güvenlik, kalite kontrol ve sistem izleme alanlarında kritik öneme sahiptir.',
      features: [
        'Gerçek zamanlı anomali tespiti',
        'Çok boyutlu veri analizi',
        'Adaptif öğrenme algoritmaları',
        'Otomatik uyarı sistemi'
      ],
      benefits: [
        'Güvenlik tehditlerini erken tespit eder',
        'Kalite sorunlarını önceden belirler',
        'Sistem performansını optimize eder',
        'İnsan hatalarını minimize eder'
      ]
    },
    {
      id: 'predictive-maintenance',
      title: 'Kestirimci Bakım',
      icon: <Settings />,
      shortDescription: 'Ekipman arızalarını önceden tahmin edin',
      longDescription: 'Kestirimci bakım teknolojileri ile ekipmanlarınızın durumunu sürekli izleyerek olası arızaları önceden tespit ediyoruz. Bu sayede planlı bakım programları oluşturarak maliyetleri optimize edebilirsiniz.',
      features: [
        'IoT sensör entegrasyonu',
        'Makine öğrenmesi modelleri',
        'Durum izleme sistemi',
        'Bakım planlama algoritmaları'
      ],
      benefits: [
        'Beklenmeyen arızaları önler',
        'Bakım maliyetlerini %30 azaltır',
        'Ekipman ömrünü uzatır',
        'Operasyonel sürekliliği sağlar'
      ]
    },
    {
      id: 'ai-assistant',
      title: 'Yapay Zeka Asistanı',
      icon: <Computer />,
      shortDescription: 'Akıllı dijital asistanlar ile verimliliği artırın',
      longDescription: 'Doğal dil işleme teknolojileri ile geliştirilmiş yapay zeka asistanları ile müşteri hizmetleri, veri analizi ve günlük iş süreçlerinizi otomatikleştirebilirsiniz.',
      features: [
        'Doğal dil işleme',
        'Çok dilli destek',
        'Öğrenme ve adaptasyon',
        'Entegrasyon kolaylığı'
      ],
      benefits: [
        'Müşteri hizmetlerini 7/24 destekler',
        'İş süreçlerini otomatikleştirir',
        'Yanıt sürelerini hızlandırır',
        'İnsan kaynaklarını optimize eder'
      ]
    },
    {
      id: 'custom-gpt',
      title: 'Özelleştirilmiş Kapalı Devre GPT',
      icon: <Code />,
      shortDescription: 'Güvenli ve özelleştirilmiş GPT çözümleri',
      longDescription: 'Kurumunuza özel, kapalı devre GPT modelleri ile hassas verilerinizi koruyarak yapay zeka teknolojilerinden maksimum fayda sağlayabilirsiniz. Özel eğitimli modeller ile iş süreçlerinizi optimize edin.',
      features: [
        'Kapalı devre altyapı',
        'Özel model eğitimi',
        'Veri güvenliği',
        'Kurumsal entegrasyon'
      ],
      benefits: [
        'Veri güvenliğini maksimum seviyede tutar',
        'Kurumsal ihtiyaçlara özel çözümler sunar',
        'Dış bağımlılıkları minimize eder',
        'Ölçeklenebilir yapay zeka çözümleri sağlar'
      ]
    },
    {
      id: 'game-development',
      title: 'Oyun Geliştirme',
      icon: <Rocket />,
      shortDescription: 'Yapay zeka destekli oyun geliştirme çözümleri',
      longDescription: 'Yapay zeka teknolojileri ile oyun geliştirme süreçlerini hızlandırın. NPC davranışları, oyun dengesi optimizasyonu ve dinamik içerik üretimi için gelişmiş AI çözümleri sunuyoruz.',
      features: [
        'Akıllı NPC davranışları',
        'Dinamik içerik üretimi',
        'Oyun dengesi optimizasyonu',
        'Prosedürel içerik üretimi'
      ],
      benefits: [
        'Oyun geliştirme sürecini hızlandırır',
        'Oyuncu deneyimini iyileştirir',
        'İçerik üretim maliyetlerini azaltır',
        'Yenilikçi oyun mekanikleri sağlar'
      ]
    }
  ];

  return (
    <div className="ai-technologies-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Yapay Zeka Teknolojileri",
          "description": "Beyes yapay zeka teknolojileri çözümleri: Alarm tahminleme, anomali tespiti, kestirimci bakım, AI asistanı, özelleştirilmiş GPT ve oyun geliştirme.",
          "provider": {
            "@type": "Organization",
            "name": "Beyes"
          },
          "serviceType": "Yapay Zeka Teknolojileri",
          "areaServed": "Türkiye",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "AI Çözümleri",
            "itemListElement": aiSolutions.map(solution => ({
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


      {/* AI Solutions Grid */}
      <section className="ai-solutions-section">
        <div className="ai-solutions-container">
          <div className="ai-solutions-header">
            <h2 className="ai-solutions-title">
              Yapay Zeka <span className="ai-solutions-highlight">Çözümlerimiz</span>
            </h2>
            <p className="ai-solutions-subtitle">
              Her sektör için özel olarak tasarlanmış yapay zeka teknolojileri
            </p>
          </div>

          <div className="ai-solutions-grid">
            {aiSolutions.map((solution) => (
              <div key={solution.id} className="ai-solution-card" id={solution.id}>
                <div className="ai-solution-header">
                  <div className="ai-solution-icon">
                    {solution.icon}
                  </div>
                  <h3 className="ai-solution-title">{solution.title}</h3>
                  <p className="ai-solution-description">{solution.shortDescription}</p>
                </div>

                <div className="ai-solution-content">
                  <div className="ai-solution-details">
                    <h4 className="ai-solution-subtitle">Çözüm Detayları</h4>
                    <p className="ai-solution-long-description">{solution.longDescription}</p>
                  </div>

                  <div className="ai-solution-features">
                    <h4 className="ai-solution-subtitle">Özellikler</h4>
                    <ul className="ai-features-list">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="ai-feature-item">
                          <CheckCircle className="ai-feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ai-solution-benefits">
                    <h4 className="ai-solution-subtitle">Faydalar</h4>
                    <ul className="ai-benefits-list">
                      {solution.benefits.map((benefit, index) => (
                        <li key={index} className="ai-benefit-item">
                          <TrendingUp className="ai-benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="ai-solution-cta">
                  <button className="ai-demo-btn">
                    Demo Talep Et
                  </button>
                  <button className="ai-quote-btn">
                    Teklif Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="ai-tech-stack-section">
        <div className="ai-tech-stack-container">
          <div className="ai-tech-stack-header">
            <h2 className="ai-tech-stack-title">
              Kullandığımız <span className="ai-tech-stack-highlight">Teknolojiler</span>
            </h2>
            <p className="ai-tech-stack-subtitle">
              En güncel yapay zeka teknolojileri ile çözümlerinizi geliştiriyoruz
            </p>
          </div>

          <div className="ai-tech-stack-grid">
            <div className="ai-tech-item">
              <Psychology className="ai-tech-icon" />
              <h3>Makine Öğrenmesi</h3>
              <p>TensorFlow, PyTorch, Scikit-learn</p>
            </div>
            <div className="ai-tech-item">
              <Cloud className="ai-tech-icon" />
              <h3>Bulut AI</h3>
              <p>AWS, Azure, Google Cloud AI</p>
            </div>
            <div className="ai-tech-item">
              <Storage className="ai-tech-icon" />
              <h3>Veri İşleme</h3>
              <p>Apache Spark, Hadoop, Pandas</p>
            </div>
            <div className="ai-tech-item">
              <Api className="ai-tech-icon" />
              <h3>API Entegrasyonu</h3>
              <p>RESTful APIs, GraphQL</p>
            </div>
            <div className="ai-tech-item">
              <Security className="ai-tech-icon" />
              <h3>Güvenlik</h3>
              <p>End-to-end encryption, GDPR compliance</p>
            </div>
            <div className="ai-tech-item">
              <FlashOn className="ai-tech-icon" />
              <h3>Performans</h3>
              <p>GPU acceleration, Real-time processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta-section">
        <div className="ai-cta-container">
          <div className="ai-cta-content">
            <h2 className="ai-cta-title">
              Yapay Zeka Dönüşümünüzü <span className="ai-cta-highlight">Başlatın</span>
            </h2>
            <p className="ai-cta-description">
              Uzman ekibimiz, işletmenize özel yapay zeka çözümleri geliştirmek için hazır.
              Hemen iletişime geçin ve dijital dönüşümünüzü hızlandırın.
            </p>
            <div className="ai-cta-buttons">
              <Link to="/iletisim" className="ai-cta-btn ai-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/solutions" className="ai-cta-btn ai-cta-btn-secondary">
                Tüm Çözümlerimiz
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITechnologies; 