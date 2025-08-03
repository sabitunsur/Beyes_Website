import React from 'react';
import '../styles/components/heroSection.css';
import bgVideo from '../assets/video/bg-firstv.mp4';

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={bgVideo} type="video/mp4" />
        Tarayıcınız video etiketini desteklemiyor.
      </video>

      <div className="hero__overlay">
        <h1 className="hero__title">Bağlantıda Güçlü Partner</h1>
        <p className="hero__subtitle">Teknolojiye Bağlan, Geleceğe Bağlan</p>
      </div>
    </section>
  );
};

export default HeroSection;
