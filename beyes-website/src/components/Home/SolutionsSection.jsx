import React, { useState } from 'react';
import '../../styles/components/Home/solutionsSection.css';

import aiBackImg from '../../assets/image/solutions/ai-back.png';
import defenseImg from '../../assets/image/solutions/defense.jpg';
import ictImg from '../../assets/image/solutions/ict.jpg';
import profImg from '../../assets/image/solutions/professional-services.jpg';

const cards = [
  {
    title: 'Yapay Zeka Teknolojileri',
    image: aiBackImg,
    details: [
      'Alarm Tahminleme Sistemleri',
      'Anomali Tespiti ve Analizi',
      'Kestirimci Bakım Çözümleri',
      'Yapay Zeka Asistanları',
      'Özelleştirilmiş GPT Modelleri'
    ]
  },
  {
    title: 'Bilgi ve İletişim Teknolojileri',
    image: ictImg,
    details: [
      'Network Yönetim Sistemleri',
      'Enerji Yönetim Platformları',
      'Teknik Servis Yönetimi',
      'ERP ve Dijital Dönüşüm',
      'Özel Yazılım Geliştirme'
    ]
  },
  {
    title: 'Savunma ve Havacılık Teknolojileri',
    image: defenseImg,
    details: [
      'Simülasyon Sistemleri',
      'Radar Entegrasyon Çözümleri',
      'Kritik Güvenlik Yazılımları',
      'Savunma Teknoloji Sistemleri',
      'Havacılık Kontrol Sistemleri'
    ]
  },
  {
    title: 'Profesyonel Servisler',
    image: profImg,
    details: [
      'Stratejik Danışmanlık Hizmetleri',
      'Profesyonel Eğitim Programları',
      '7/24 Teknik Destek ve Bakım',
      'Proje Yönetimi Danışmanlığı',
      'Kalite Güvence Sistemleri'
    ]
  },
];

const SolutionsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCardTouch = (index, e) => {
    e.preventDefault();
    handleCardClick(index);
  };

  return (
    <section className="solutionsSection">
      <div className="solutions__title">
        <span className="double-arrow">»</span>
        <span className="solutions__heading">Çözümler</span>
        <span className="solutions__line" />
      </div>

      <div className="solutions__grid">
        {cards.map((card, idx) => (
          <div 
            className={`solution__card ${flippedCards[idx] ? 'flipped' : ''}`} 
            key={idx}
            onClick={() => handleCardClick(idx)}
            onTouchStart={(e) => handleCardTouch(idx, e)}
            role="button"
            tabIndex={0}
            aria-label={`Flip ${card.title} card`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick(idx);
              }
            }}
          >
            <div className="card__inner">
              <div className="card__front">
                <div className="card__background">
                  <img src={card.image} alt={card.title} />
                  <div className="card__overlay"></div>
                </div>
                <div className="card__content">
                  <h3>{card.title}</h3>
                </div>
              </div>
              <div className="card__back">
                <div className="card__back-content">
                  <div className="card__details">
                    {card.details.map((detail, detailIdx) => (
                      <p key={detailIdx}>{detail}</p>
                    ))}
                  </div>
                  <button 
                    className="learn-more-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Burada detay sayfasına yönlendirme yapılabilir
                    }}
                  >
                    Daha Fazla Bilgi Edin
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;