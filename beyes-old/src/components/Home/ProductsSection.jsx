import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/components/Home/productsSection.css';

import beSens from '../../assets/image/products/besens.png';
import beRoad from '../../assets/image/products/beroad.png';
import bePlay from '../../assets/image/products/beplay.png';
import bePopup from '../../assets/image/products/bepopup.png';
import bePower from '../../assets/image/products/bepower.png';
import beBoss from '../../assets/image/products/beboss.png';
import servisPozitif from '../../assets/image/products/servispozitif.png';
import girus from '../../assets/image/products/girus.png';
import liox from '../../assets/image/products/liox.png';
import nosi from '../../assets/image/products/nosi.png';

const products = [
  { id: 1, name: 'BeSens', logo: beSens, description: 'Akıllı titreşim sensörü ve tahmine dayalı bakım platformu.' },
  { id: 2, name: 'BeRoad', logo: beRoad, description: 'Yol yüzeylerindeki buzlanma oranını belirleyen yenilikçi sistem.' },
  { id: 3, name: 'BePlay', logo: bePlay, description: 'Yenilikçi mobil oyunlar ve yapay zeka destekli eğlence uygulamaları.' },
  { id: 4, name: 'BePopup', logo: bePopup, description: 'Etkileşimli popup ve bildirim sistemleri.' },
  { id: 5, name: 'BePower', logo: bePower, description: 'Güç üretimi ve yönetimini optimize eden akıllı enerji yönetim platformu.' },
  { id: 6, name: 'BeBoss', logo: beBoss, description: 'İş süreçleri yönetimi ve kurumsal çözümler platformu.' },
  { id: 7, name: 'Servis Pozitif', logo: servisPozitif, description: 'Müşteri hizmetleri ve destek sistemleri.' },
  { id: 8, name: 'Girus', logo: girus, description: 'Girişimci ekosistemi ve startup destek platformu.' },
  { id: 9, name: 'Liox', logo: liox, description: 'Lojistik ve tedarik zinciri optimizasyonu.' },
  { id: 10, name: 'Nosi', logo: nosi, description: 'Kapalı sistem mimarisi ile güvenli yapay zeka asistanı.' }
];

const ProductsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const sliderRef = useRef(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Tüm ürünlerin gezilebilmesi için padding ekle
  const paddedProducts = [
    ...products.slice(-2), // Son 2 ürünü başa ekle
    ...products,           // Tüm ürünler
    ...products.slice(0, 2) // İlk 2 ürünü sona ekle
  ];

  // Touch handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  // Sonraki slayta git
  const nextSlide = () => {
    const maxIndex = products.length - 1; // Tüm ürünler gezilebilsin
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);  // Döngüsel geçiş için başa dön
    }
  };

  // Önceki slayta git
  const prevSlide = () => {
    const maxIndex = products.length - 1; // Tüm ürünler gezilebilsin
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(maxIndex);  // Döngüsel geçiş için sona git
    }
  };

  // Slayta tıklandığında git
  const goToSlide = (index) => {
    const maxIndex = products.length - 1; // Tüm ürünler gezilebilsin
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Görülen ürünler: currentIndex'ten başla ve 3 öğe göster
  const visibleProducts = paddedProducts.slice(currentIndex, currentIndex + 3);

  return (
    <section className="productsSection">
      <div className="products__title">
        <span className="double-arrow">»</span>
        <span className="products__heading">Ürünler</span>
        <span className="products__line" />
      </div>

      <div className="products__slider-container">
        <div className="slider-wrapper">
          {/* Navigation Buttons */}
          <button 
            className="nav-button nav-prev" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="nav-button nav-next" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Content */}
          <div 
            className="slider-content"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {visibleProducts.map((product, index) => (
              <div 
                key={`${product.id}-${currentIndex}-${index}`} 
                className={`product-card ${index === 1 ? 'active' : 'inactive'}`}
              >
                <div className="product__image">
                  <img src={product.logo} alt={product.name} />
                </div>
                <div className="product__desc">
                  <p>{product.description}</p>
                  <button className="product__button">Detaylı Bilgi</button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="pagination-dots">
            {Array.from({ length: products.length }, (_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
