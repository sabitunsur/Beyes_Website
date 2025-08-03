import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, Users, Award, Heart, Zap, Globe, BookOpen, Coffee } from 'lucide-react';
import '../../styles/pages/beingAPartOfBeyes.css';

// Import images
import takim from '../../assets/image/career/takim.png';

const BeingAPartOfBeyes = () => {
  return (
    <>
      <Helmet>
        <title>Beyes'li Olmak - Beyes Bilişim</title>
        <meta name="description" content="Beyes'li olmak, teknolojiye yön veren bir ekibin parçası olmak demektir. Açık pozisyonlarımızı inceleyin ve kariyer yolculuğunuza başlayın." />
        <meta name="keywords" content="kariyer, iş fırsatları, teknoloji, yazılım, beyes, istihdam, beyes'li olmak" />
        <link rel="canonical" href="https://beyes.com.tr/career/being-a-part-of-beyes" />
      </Helmet>

      <div className="career-page">
        {/* Hero Section */}
        <section className="career-hero">
          <div className="hero-background">
            <img src={takim} alt="Beyes'li Olmak" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Beyes'li Olmak</h1>
              <p className="hero-subtitle">
                Beyes'li olmak, teknolojiye yön veren bir ekibin parçası olmak demektir. Eğer sen de yeteneklerini keşfetmek, kendini geliştirmek ve bizimle birlikte geleceği şekillendirmek istiyorsan, açık pozisyonlarımızı inceleyebilir veya kariyer yolculuğuna ilk adımı staj programlarımızla atabilirsin. Başvurunu bekliyoruz!
              </p>
              <Link to="/career/being-a-part-of-beyes-details" className="scroll-indicator">
                <ChevronDown />
                <div className="text-container">
                  <span>Katıl</span>
                </div>
              </Link>
            </div>
            <div className="hero-buttons">
              <Link to="/career/life-at-beyes" className="btn btn-primary">Beyes'te Yaşam</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BeingAPartOfBeyes; 