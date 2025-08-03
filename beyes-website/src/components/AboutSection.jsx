import React from 'react';
import '../styles/components/aboutSection.css';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about__container">
        {/* Left Side - Slogan */}
        <div className="about__slogan">
          <h2 className="about__title">
            İyi, <span className="about__title-highlight">MÜKEMMELİN</span> Düşmanıdır.
          </h2>
        </div>
        
        {/* Right Side - Content */}
        <div className="about__content">
          <h3 className="about__subtitle">Biz Kimiz?</h3>
          <p className="about__description">
            Beyes, sürdürülebilir iş yapabilmeniz için işinizi kolaylaştıran ürünler üretiyor.
            Bu ürünleri geliştirirken "iyi, mükemmelin düşmanıdır" felsefesi ile
            ürünlerin gelişimi canlı bir yaşam döngüsü sayesinde aktif tutulmaktadır.
          </p>
          <div className="about__buttons">
            <Link to="/hakkimizda" className="about__btn about__btn--red">Hakkımızda</Link>
            <Link to="/career/life-at-beyes" className="about__btn about__btn--bordered">Bize Katıl</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;