import React from 'react';
import '../styles/components/rnDSection.css';

const rndData = [
  {
    title: 'Robot',
    desc: 'İnsansı robot geliştirme (humanoid)',
    icon: '🤖',
    color: '#FF6B6B'
  },
  {
    title: 'AI Bilgisayarı',
    desc: 'İHA, İKA, İDA için otonom görev yapmalarını sağlayacak yapay zeka bilgisayar donanımı',
    icon: '🧠',
    color: '#4ECDC4'
  },
  {
    title: 'Dron Kontrol',
    desc: 'Tamamen otonom görev tamamlama yetkinlikleri kazandırabilme yazılım ve sensör donanım geliştirme',
    icon: '🚁',
    color: '#45B7D1'
  },
  {
    title: 'Slipring',
    desc: '40 - 120 Kanal Slipring',
    icon: '⚙️',
    color: '#96CEB4'
  },
  {
    title: 'Su Jeneratörü',
    desc: 'Havadaki nemden içme suyu üretimi',
    icon: '💧',
    color: '#FFEAA7'
  },
  {
    title: 'OtonomX',
    desc: 'Otomatik Dron kalkış, iniş ve görev yazılımları',
    icon: '🛸',
    color: '#DDA0DD'
  },
];

const RnDSection = () => {
  return (
    <section className="rnd-section">
      <div className="rnd-container">
        <div className="rnd-header">
          <h2 className="rnd-title">AR-GE Projelerimiz</h2>
          <p className="rnd-subtitle">Geleceği şekillendiren yenilikçi teknolojiler geliştiriyoruz</p>
        </div>
        
        <div className="rnd-grid">
          {rndData.map((item, index) => (
            <div key={index} className="rnd-card" style={{'--card-color': item.color}}>
              <div className="rnd-card-header">
                <div className="rnd-icon">{item.icon}</div>
                <div className="rnd-card-badge">AR-GE</div>
              </div>
              
              <div className="rnd-card-content">
                <h3 className="rnd-card-title">{item.title}</h3>
                <p className="rnd-card-desc">{item.desc}</p>
              </div>
              
              <div className="rnd-card-footer">
                <button className="rnd-btn">
                  <span>Detayları Gör</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              
              <div className="rnd-card-bg"></div>
            </div>
          ))}
        </div>
        
        <div className="rnd-cta">
          <button className="rnd-cta-btn">
            Tüm AR-GE Projelerimizi Keşfedin
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RnDSection;
