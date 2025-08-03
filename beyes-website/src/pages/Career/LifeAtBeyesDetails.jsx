import React, { useState, useEffect } from 'react';
import { Users, Coffee, Building, Heart, Check, GraduationCap, BookOpen, Users2, Globe } from 'lucide-react';
import '../../styles/pages/Career/lifeAtBeyesDetails.css';

const LifeAtBeyesDetails = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const words = [
    { text: 'yenilikçilik', color: '#00C8C8' },
    { text: 'teknoloji', color: '#00C8C8' },
    { text: 'açık iletişim', color: '#00C8C8' },
    { text: 'takım ruhu', color: '#00C8C8' },
    { text: 'sürekli gelişim', color: '#00C8C8' }
  ];

  const workplaceFeatures = [
    {
      id: 1,
      title: 'On-site Çalışma Modeli',
      icon: <Users />,
      description: 'Beyes olarak ofisten çalışma modelini benimsiyoruz. Yüz yüze iletişimi güçlendiren bu model sayesinde ekip ruhunu artırıyor, işbirliğini destekliyoruz.',
      featured: true
    },
    {
      id: 2,
      title: 'Sosyal Alanlar ve İkramlar',
      icon: <Coffee />,
      description: 'Çalışanlarımızın rahatça vakit geçirebileceği, kahve, çay ve atıştırmalıkların bulunduğu mutfak alanımız mevcut. Geniş terasımızda kısa molalar verip enerjinizi yenileyebilirsiniz.'
    },
    {
      id: 3,
      title: 'Açık ve Etkileşimli Ofis Düzeni',
      icon: <Building />,
      description: 'Açık ofis düzenimiz sayesinde ekip içi iletişimi ve etkileşimi kolaylaştırıyoruz. İşbirliğini destekleyen ortamımızda departmanlar arasındaki iletişimi artırıyoruz.'
    },
    {
      id: 4,
      title: 'Konforlu ve Rahat Ofis Ortamı',
      icon: <Heart />,
      description: 'Rahat, konforlu ve çalışan dostu ofis ortamımız sayesinde çalışanlarımızın verimliliğini ve mutluluğunu önemsiyoruz. Beyes\'te konforunuz daima önceliğimiz.'
    }
  ];
  const developmentFeatures = [
    {
      id: 1,
      title: 'Şirket İçi Eğitimler ve Workshoplar',
      icon: <BookOpen />,
      description: 'Çalışanlarımızın gelişimini desteklemek amacıyla şirket içi eğitimler, uzman hocalarla görüşmeler ve farklı konularda düzenli workshoplar gerçekleştiriyoruz.'
    },
    {
      id: 2,
      title: 'Yüksek Lisans ve İngilizce Desteği',
      icon: <GraduationCap />,
      description: 'Eğitimine devam etmek isteyen çalışanlarımız için yüksek lisans desteği sağlıyor, ayrıca İngilizce eğitim imkânı sunuyoruz.'
    },
    {
      id: 3,
      title: 'Mentorluk ve Staj İmkânları',
      icon: <Users2 />,
      description: 'Yeni başlayan çalışanlarımız için oryantasyon süreçlerinde mentorluk desteği veriyoruz. Ayrıca öğrencilere staj imkânı sağlayarak profesyonel hayatı deneyimleme fırsatı sunuyoruz.'
    },
    {
      id: 4,
      title: 'Fuar ve Sektörel Etkinliklere Katılım',
      icon: <Globe />,
      description: 'Çalışanlarımızın sektör trendlerini yakından takip edebilmeleri için fuar, toplantı ve sektörel incelemelere katılımlarını destekliyoruz.'
    }
  ];

  const benefits = [
    { icon: '🎂', text: 'Doğum Günü İzni' },
    { icon: '🎓', text: 'Eğitim İzni' },
    { icon: '👶', text: 'Çocuğumu Seviyorum İzni' },
    { icon: '💰', text: 'Rekabetçi Maaş Politikası' },
    { icon: '🏆', text: 'Yıllık Performans Ödülü' },
    { icon: '☕', text: 'Geniş İçecek Seçenekleri' },
    { icon: '🍪', text: 'Atıştırmalıklar ve Tatlı Günleri' },
    { icon: '🥂', text: 'Happy Hour Etkinlikleri' },
    { icon: '👥', text: 'Ofis İçi ve Dışı Etkinlikler' },
    { icon: '🤝', text: 'Deneyimli, Güçlü ve Mutlu Bir Ekip' },
    { icon: '😊', text: 'Eğlenceli Çalışma Ortamı' },
    { icon: '💻', text: 'Oryantasyon ve Mentor Desteği' },
    { icon: '📈', text: 'Kariyer Gelişimi ve Performans Yönetimi' },
    { icon: '🌍', text: 'Global Müşteri ve İş Ortakları Projeleri' },
    { icon: '🎁', text: 'Başarılı Çalışanları Ödüllendirme' },
    { icon: '❤️', text: 'Özel Sağlık Sigortası' },
    { icon: '🎁', text: 'Özel Gün Hediyeleri' },
    { icon: '🛒', text: 'Yemek & Market Kartı' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="career-details">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-title-section">
              <h1 className="hero-title">
                Beyes'te her zaman önceliğimiz{' '}
                <span
                  className={`highlighted-word ${isAnimating ? 'animating' : ''}`}
                  style={{ color: words[currentWordIndex].color }}
                >
                  {words[currentWordIndex].text}.
                </span>
              </h1>
            </div>
          </div>

          <div className="hero-description">
            <div className="description-card">
              <p>
                Biz Beyes olarak; yenilikçiliğe, sürekli gelişime ve teknolojiye tutkuyla bağlıyız.
                Çalışanlarımızın hem mesleki hem de kişisel anlamda gelişimlerini destekliyor,
                öğrenmeye açık ve yaratıcı bir ortam sunuyoruz.
              </p>
            </div>
            <div className="description-card">
              <p>
                Burada her fikir değerlidir, açık iletişime inanır ve şeffaflığı teşvik ederiz.
                Birlikte çalışmanın gücüne, samimiyete ve güvene önem veririz. Çeşitliliğe saygı duyar,
                kapsayıcılığı değerli bulur ve geleceği birlikte inşa etmek için sizi de ailemize davet ederiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workplace Features */}
      <section className="workplace-section">
        <div className="workplace-container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              Çalışma <span className="section-title-highlight">Ortamımız</span>
            </h2>
            <p className="section-description">
              Beyes olarak, çalışanlarımızın mutluluğunu, rahatlığını ve şirket içi iletişimini ön planda tutarak,
              sizlere en iyi çalışma ortamını sunmaya devam ediyoruz.
            </p>
          </div>

          <div className="workplace-grid">
            {workplaceFeatures.map((feature) => (
              <div
                key={feature.id}
                className="workplace-card"
              >
                <div className="card-accent"></div>
                <div className="workplace-card-content">
                  <div className="workplace-icon">
                    {feature.icon}
                  </div>
                  <h3 className="workplace-card-title">{feature.title}</h3>
                  <p className="workplace-card-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Features */}
      <section className="development-section">
        <div className="development-container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>
              Gelişim <span className="section-title-highlight">Fırsatları</span>
            </h2>
            <p className="section-description">
              Çalışanlarımızın profesyonel gelişimini destekleyen kapsamlı eğitim ve gelişim programları
            </p>
          </div>

          <div className="development-grid">
            {developmentFeatures.map((feature) => (
              <div key={feature.id} className="development-card">
                <div className="development-card-content">
                  <div className="development-icon">
                    {feature.icon}
                  </div>
                  <h3 className="development-card-title">{feature.title}</h3>
                  <p className="development-card-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-container">
          <div className="section-header">
           <h2 className="section-title" style={{ color: 'white' }}>
              Sağladığımız <span className="section-title-highlight">Avantajlar</span> ve Yan Haklar
            </h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <div className="benefit-icon">
                  {benefit.icon}
                </div>
                <p className="benefit-text">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Geleceği <span className="cta-title-highlight">Birlikte İnşa Edelim</span>
            </h2>

            <div className="cta-grid">
              <div className="cta-card">
                <div className="cta-card-content">
                  <div className="cta-check-icon">
                    <Check />
                  </div>
                  <p className="cta-text">
                    Bizimle çalışmak demek; gelişim odaklı, yenilikçi ve samimi bir aileye katılmak demektir.
                    Beyes ailesinde, herkesin yeteneği ve potansiyeli değerlidir.
                  </p>
                </div>
              </div>

              <div className="cta-card">
                <div className="cta-card-content">
                  <div className="cta-check-icon">
                    <Check />
                  </div>
                  <p className="cta-text">
                    Geleceği birlikte inşa etmek için sizi de aramızda görmekten mutluluk duyarız.
                    Beyes'te fark yaratmaya hazır mısınız?
                  </p>
                </div>
              </div>
            </div>

            <div className="cta-button-section">
              <button className="cta-button">
                <span>Hemen Başvur</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeAtBeyesDetails;