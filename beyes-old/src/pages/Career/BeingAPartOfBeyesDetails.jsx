import React from 'react';
import { ArrowRight, Users, FileText, Calendar, CheckCircle, Building, GraduationCap, Users2 } from 'lucide-react';
import '../../styles/pages/Career/beingAPartOfBeyesDetails.css';

// Import images
import first from '../../assets/image/contact/first.png';

const BeingAPartOfBeyesDetails = () => {
  const jobApplicationSteps = [
    {
      id: 1,
      title: 'Başvuru Yapın',
      description: 'Beyes\'li olmak için Web sitemizdeki başvuru formunu doldurarak ilk adımı atabilirsiniz.',
      icon: <FileText />
    },
    {
      id: 2,
      title: 'İlk Temas',
      description: 'İnsan kaynakları ekibimiz, başvurunuzu değerlendirdikten sonra ön görüşme için sizinle temasa geçecektir.',
      icon: <Users />
    },
    {
      id: 3,
      title: 'Uzman Değerlendirmesi',
      description: 'Teknik bilgi ve deneyimlerinizi paylaşabileceğiniz bu aşamada ilgili alanda uzman ekiplerimizle bir araya gelebileceksiniz.',
      icon: <CheckCircle />
    },
    {
      id: 4,
      title: 'Sonuç Bildirimi',
      description: 'Süreç tamamlandıktan sonra, başvurunuzun sonucu en kısa sürede tarafınıza iletilecektir.',
      icon: <Calendar />
    }
  ];

  const internshipSteps = [
    {
      id: 1,
      title: 'Başvuru Formu',
      description: 'Web sitemizdeki staj başvuru formunu doldurun ve güncel özgeçmişinizi bizimle paylaşın.',
      icon: <FileText />
    },
    {
      id: 2,
      title: 'Değerlendirme ve Görüşme',
      description: 'İnsan Kaynakları ekibimiz başvurunuzu inceleyerek, sizinle uygun bir görüşme planlar. Görüşme sırasında hedeflerinizi ve beklentilerinizi paylaşarak gelişim alanlarınızı konuşma fırsatı bulursunuz.',
      icon: <Users2 />
    },
    {
      id: 3,
      title: 'Sonuç ve Program Başlangıcı',
      description: 'Değerlendirme süreci tamamlandıktan sonra staj başvurunuzun sonucu sizinle paylaşılır. Program başlangıcıyla birlikte, profesyonel dünyada ilk adımlarınızı atarken Beyes\'in destekleyici ekibi yanınızda olacaktır.',
      icon: <GraduationCap />
    }
  ];

  return (
    <div className="being-a-part-of-beyes-details">
      {/* Hero Section */}
      <section className="being-a-part-of-beyes-hero">
        <div className="being-a-part-of-beyes-hero-background">
          <img src={first} alt="Kariyer Arka Plan" />
          <div className="being-a-part-of-beyes-hero-overlay"></div>
        </div>
        <div className="being-a-part-of-beyes-hero-container">
          <div className="being-a-part-of-beyes-hero-content">
            <h1 className="being-a-part-of-beyes-hero-title">Kariyer</h1>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <section className="being-a-part-of-beyes-sub-navigation">
        <div className="being-a-part-of-beyes-nav-container">
          <nav className="being-a-part-of-beyes-sub-nav">
            <a href="#about-application" className="being-a-part-of-beyes-nav-link">Başvuru Hakkında</a>
            <a href="#open-positions" className="being-a-part-of-beyes-nav-link">Açık Pozisyonlar</a>
            <a href="#job-application" className="being-a-part-of-beyes-nav-link">İş Başvurusu</a>
            <a href="#internship-application" className="being-a-part-of-beyes-nav-link">Staj Başvurusu</a>
          </nav>
        </div>
      </section>

      {/* Job Application Process */}
      <section id="job-application" className="being-a-part-of-beyes-process-section">
        <div className="being-a-part-of-beyes-process-container">
          <div className="being-a-part-of-beyes-section-header">
            <div className="being-a-part-of-beyes-header-content">
              <div className="being-a-part-of-beyes-header-icon">
                <ArrowRight />
              </div>
              <h2 className="being-a-part-of-beyes-section-title">
                İş Başvurusu <span className="being-a-part-of-beyes-section-title-highlight">Sürecimiz</span>
              </h2>
            </div>
            <p className="being-a-part-of-beyes-section-description">
              Beyes ailesine katılmak için başvuru sürecimiz hızlı ve kolaydır. Aşağıdaki adımları takip ederek başvurunuzu tamamlayabilirsiniz.
            </p>
          </div>

          <div className="being-a-part-of-beyes-process-grid">
            {jobApplicationSteps.map((step) => (
              <div key={step.id} className="being-a-part-of-beyes-process-card">
                <div className="being-a-part-of-beyes-card-icon">
                  {step.icon}
                </div>
                <h3 className="being-a-part-of-beyes-card-title">{step.title}</h3>
                <p className="being-a-part-of-beyes-card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Application Process */}
      <section id="internship-application" className="being-a-part-of-beyes-process-section">
        <div className="being-a-part-of-beyes-process-container">
          <div className="being-a-part-of-beyes-section-header">
            <div className="being-a-part-of-beyes-header-content">
              <div className="being-a-part-of-beyes-header-icon">
                <ArrowRight />
              </div>
              <h2 className="being-a-part-of-beyes-section-title">
                Staj Başvurusu <span className="being-a-part-of-beyes-section-title-highlight">Sürecimiz</span>
              </h2>
            </div>
            <p className="being-a-part-of-beyes-section-description">
              Beyes olarak, geleceğin profesyonellerine destek olmayı ve onları iş hayatına hazırlamayı önemsiyoruz. Staj başvuru sürecimiz, sizin gelişiminize odaklı ve kolaydır. Aşağıdaki adımları takip ederek başvurunuzu tamamlayabilirsiniz.
            </p>
          </div>

          <div className="being-a-part-of-beyes-process-grid">
            {internshipSteps.map((step) => (
              <div key={step.id} className="being-a-part-of-beyes-process-card">
                <div className="being-a-part-of-beyes-card-icon">
                  {step.icon}
                </div>
                <h3 className="being-a-part-of-beyes-card-title">{step.title}</h3>
                <p className="being-a-part-of-beyes-card-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Resources Policy */}
      <section className="being-a-part-of-beyes-policy-section">
        <div className="being-a-part-of-beyes-policy-container">
          <div className="being-a-part-of-beyes-policy-content">
            <div className="being-a-part-of-beyes-policy-header">
              <div className="being-a-part-of-beyes-header-icon">
                <ArrowRight />
              </div>
              <h2 className="being-a-part-of-beyes-policy-title">
                İnsan Kaynakları <span className="being-a-part-of-beyes-policy-title-highlight">Politikamız</span>
              </h2>
            </div>
            
            <div className="being-a-part-of-beyes-policy-main">
              <div className="being-a-part-of-beyes-policy-graphic">
                <Building />
              </div>
              <div className="being-a-part-of-beyes-policy-text">
                <p className="being-a-part-of-beyes-policy-description">
                  Beyesli olmak, teknolojiye yön veren bir ekibin parçası olmak demektir. Eğer sen de yeteneklerini keşfetmek, kendini geliştirmek ve bizimle birlikte geleceği şekillendirmek istiyorsan, açık pozisyonlarımızı inceleyebilir veya kariyer yolculuğuna ilk adımı staj programlarımızla atabilirsin.
                </p>
                <div className="being-a-part-of-beyes-policy-cta">
                  <h3 className="being-a-part-of-beyes-cta-text">Başvurunu Bekliyoruz!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeingAPartOfBeyesDetails; 