import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../../utils/scrollToTop';
import SEO from '../../components/Common/SEO';
import { productsPageData } from '../../constants/products';
import '../../styles/pages/Products/products.css';

const Products = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    scrollToTop();
  }, []);

  const products = productsPageData;

  const seoData = {
    title: "Ürünlerimiz - Beyes Teknoloji",
    description: "IoT sensörleri, yapay zeka, network yönetimi ve enerji çözümleri ile dijital dönüşümünüzü başlatın.",
    type: "Product",
    provider: "Beyes"
  };

  return (
    <div className="products-page">
      <SEO {...seoData} />

      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">
              Ürünlerimiz
            </h1>
            <p className="products-hero-subtitle">
              Dijital Dönüşüm Çözümleri
            </p>
            <p className="products-hero-description">
              IoT sensörleri, yapay zeka, network yönetimi ve enerji çözümleri ile 
              işletmenizi geleceğe taşıyın.
            </p>
            <div className="products-hero-stats">
              <div className="stat-item">
                <span className="stat-number">14+</span>
                <span className="stat-label">Ürün</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">%90+</span>
                <span className="stat-label">Müşteri Memnuniyeti</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Destek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={product.id || index} className="product-card">
                <div className="product-card-header">
                  <div className="product-icon" style={{ backgroundColor: product.color }}>
                    {product.icon}
                  </div>
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-subtitle">{product.shortDescription}</p>
                </div>
                <p className="product-description">
                  {product.longDescription}
                </p>
                <div className="product-features">
                  <h4>Özellikler:</h4>
                  <ul>
                    {product.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="product-actions">
                  <Link to={`/products/${product.id}`} className="product-btn product-btn-primary">
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta-section">
        <div className="products-cta-container">
          <div className="products-cta-content">
            <h2 className="products-cta-title">
              Ürünlerimiz ile <span className="products-cta-highlight">Dönüşümünüzü</span> Başlatın
            </h2>
            <p className="products-cta-description">
              Uzman ekibimiz, ihtiyaçlarınıza özel ürünler geliştirmek için hazır. 
              Hemen iletişime geçin ve dijital dönüşümünüzü başlatın.
            </p>
            <div className="products-cta-buttons">
              <Link to="/contact" className="products-cta-btn products-cta-btn-primary">
                İletişime Geç
              </Link>
              <Link to="/about" className="products-cta-btn products-cta-btn-secondary">
                Hakkımızda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;