import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronDown, Users, Award, Heart, Zap, Globe, BookOpen, Coffee } from 'lucide-react';
import '../../styles/pages/lifeAtBeyes.css';

// Import images
import yasam from '../../assets/image/career/yaşam.png';
import takim from '../../assets/image/career/takim.png';

const LifeAtBeyes = () => {
  return (
    <>
      <Helmet>
        <title>Kariyer - Beyes Bilişim</title>
        <meta name="description" content="Beyes'te kariyer fırsatları. Teknoloji odaklı çalışma ortamı, sürekli gelişim ve yenilikçi projeler." />
        <meta name="keywords" content="kariyer, iş fırsatları, teknoloji, yazılım, beyes, istihdam" />
        <link rel="canonical" href="https://beyes.com.tr/career" />
      </Helmet>

      <div className="career-page">
        {/* Hero Section */}
        <section className="career-hero">
          <div className="hero-background">
            <img src={yasam} alt="Beyes'te Yaşam" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Beyes'te Yaşam</h1>
              <p className="hero-subtitle">
                Beyes Teknoloji'de hayat, yenilikçi fikirlerin ve güçlü bir ekip ruhunun bir araya geldiği dinamik bir ortamda şekillenir. Açık iletişim, sürekli gelişim ve takım çalışmasıyla her gün daha iyisini hedefliyoruz. Etkinliklerimiz, eğitim programlarımız ve sosyal projelerimizle sadece bir iş yeri değil, birlikte büyüdüğümüz bir topluluk oluşturuyoruz.
              </p>
              <Link to="/career/life-at-beyes-details" className="scroll-indicator">
                <ChevronDown />
                <div className="text-container">
                  <span>İncele</span>
                </div>
              </Link>
            </div>

            <div className="hero-buttons">
              <Link to="/career/being-a-part-of-beyes" className="btn btn-primary">Beyes'li Olmak</Link>
            </div>
          </div>
        </section>



      </div>
    </>
  );
};

export default LifeAtBeyes; 