import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import { 
  Flight, 
  Work, 
  ArrowForward,
  Psychology,
  Shield,
  Hub,
  Analytics,
  Cloud,
  Code,
  Rocket,
  Public,
  Radio,
  SmartToy,
  Computer,
  Storage,
  Api,
  CloudQueue,
  Dns,
  Monitor,
  Settings,
  Support,
  Memory,
} from '@mui/icons-material';

import '../../styles/pages/Solutions/solutions.css';

const Solutions = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    scrollToTop();
  }, []);

  const solutions = [
    {
      id: 'ai',
      title: 'Yapay Zeka Teknolojileri',
      icon: <Psychology />,
      description: 'Gelişmiş yapay zeka çözümleri ile işletmenizi geleceğe taşıyın',
      color: '#d32f2f',
      gradient: 'linear-gradient(135deg, #d32f2f 0%, #b71c1c 100%)',
      features: [
        { name: 'Alarm Tahminleme', icon: <Memory /> },
        { name: 'Anomali Tespiti', icon: <Analytics /> },
        { name: 'Kestirimci Bakım', icon: <Settings /> },
        { name: 'Yapay Zeka Asistanı', icon: <Computer /> },
        { name: 'Özelleştirilmiş Kapalı Devre GPT', icon: <Code /> },
        { name: 'Oyun Geliştirme', icon: <Rocket /> }
      ],
      image: '/src/assets/image/solutions/ai-back.png'
    },
    {
      id: 'defense',
      title: 'Savunma ve Havacılık Teknolojileri',
      icon: <Flight />,
      description: 'Savunma ve havacılık sektörü için özel teknoloji çözümleri',
      color: '#1976d2',
      gradient: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
      features: [
        { name: 'Drone Kontrol Sistemleri', icon: <SmartToy /> },
        { name: 'Radar Teknolojileri', icon: <Radio /> },
        { name: 'Uydu Sistemleri', icon: <Public /> },
        { name: 'Havacılık Yazılımları', icon: <Rocket /> },
        { name: 'Güvenlik Sistemleri', icon: <Shield /> },
        { name: 'Simülasyon Yazılımları', icon: <Monitor /> }
      ],
      image: '/src/assets/image/solutions/defense.jpg'
    },
    {
      id: 'ict',
      title: 'Bilgi ve İletişim Teknolojileri',
      icon: <Dns />,
      description: 'Modern ICT çözümleri ile dijital dönüşümünüzü hızlandırın',
      color: '#388e3c',
      gradient: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
      features: [
        { name: 'Ağ Altyapısı', icon: <Hub /> },
        { name: 'Veri Merkezi Çözümleri', icon: <Dns /> },
        { name: 'API Geliştirme', icon: <Api /> },
        { name: 'Veritabanı Yönetimi', icon: <Storage /> },
        { name: 'Bulut Teknolojileri', icon: <Cloud /> },
        { name: 'Veri Depolama', icon: <CloudQueue /> }
      ],
      image: '/src/assets/image/solutions/ict.jpg'
    },
    {
      id: 'professional-services',
      title: 'Profesyonel Servisler',
      icon: <Work />,
      description: 'Uzman ekibimizle projelerinizi başarıya ulaştırın',
      color: '#f57c00',
      gradient: 'linear-gradient(135deg, #f57c00 0%, #ef6c00 100%)',
      features: [
        { name: 'Danışmanlık Hizmetleri', icon: <Support /> },
        { name: 'Proje Yönetimi', icon: <Settings /> },
        { name: 'Sistem Entegrasyonu', icon: <Hub /> },
        { name: 'Teknik Destek', icon: <Support /> },
        { name: 'Eğitim ve Sertifikasyon', icon: <Computer /> },
        { name: 'Bakım ve Onarım', icon: <Settings /> }
      ],
      image: '/src/assets/image/solutions/professional-services.jpg'
    }
  ];

  return (
    <div className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero-container">
          <div className="solutions-hero-content">
            <h1 className="solutions-hero-title">
              Çözümlerimiz
            </h1>
            <p className="solutions-hero-description">
              Beyes olarak, farklı sektörler için özel olarak tasarlanmış teknoloji çözümleri sunuyoruz. 
              Yapay zeka, savunma, ICT ve profesyonel servisler alanlarında uzman ekibimizle yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-grid-section">
        <div className="solutions-grid-container">
          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card" id={solution.id}>
                <div className="solution-card-header">
                  <div className="solution-icon" style={{ background: solution.gradient }}>
                    <div style={{ color: 'white' }}>
                      {solution.icon}
                    </div>
                  </div>
                  <h2 className="solution-title">{solution.title}</h2>
                  <p className="solution-description">{solution.description}</p>
                </div>
                
                <div className="solution-features">
                  <h3 className="features-title">Çözümlerimiz</h3>
                  <div className="features-grid">
                    {solution.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <div className="feature-icon" style={{ color: solution.color }}>
                          {feature.icon}
                        </div>
                        <span className="feature-name">{feature.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="solution-cta">
                  <Link to={`/solutions/${solution.id}`} className="solution-detail-btn" style={{ background: solution.color }}>
                    Detaylı Bilgi
                    <ArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta-section">
        <div className="solutions-cta-container">
          <div className="solutions-cta-content">
            <h2 className="solutions-cta-title">
              Projeleriniz İçin <span className="solutions-cta-highlight">Bizimle İletişime Geçin</span>
            </h2>
            <p className="solutions-cta-description">
              Uzman ekibimiz, ihtiyaçlarınıza özel çözümler geliştirmek için hazır. 
              Hemen iletişime geçin ve projelerinizi hayata geçirelim.
            </p>
            <div className="solutions-cta-buttons">
              <Link to="/iletisim" className="solutions-cta-btn solutions-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/about" className="solutions-cta-btn solutions-cta-btn-secondary">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;