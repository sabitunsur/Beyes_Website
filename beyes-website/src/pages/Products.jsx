import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Build,
  Sensors,
  DirectionsCar,
  Bolt,
  Person,
  Memory,
  Lightbulb,
  Inventory,
  SmartToy,
  Album,
  Water,
  VisibilityOutlined,
  Computer,
  Favorite
} from '@mui/icons-material';
import '../styles/pages/products.css';

const Products = () => {
  // Sayfa yüklendiğinde en üste scroll yap
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      id: 'heysem',
      name: 'Heysem',
      description: 'Transmisyon Network Yönetim Sistemi - Gerçek zamanlı izleme ve otomatik arıza tespiti ile network altyapınızı güvenle yönetin.',
      icon: <Build />,
      color: '#d32f2f',
      features: ['Gerçek Zamanlı İzleme', 'Otomatik Arıza Tespiti', 'Performans Analizi', 'Merkezi Yönetim Paneli', 'Tarihsel Veri Analizi', 'Otomatik Konfigürasyon']
    },
    {
      id: 'sc-nms',
      name: 'SC-NMS',
      description: 'Sensör Network Yönetim Sistemi - IoT sensörlerinizi merkezi olarak yönetin ve veri toplama süreçlerinizi optimize edin.',
      icon: <Sensors />,
      color: '#1976d2',
      features: ['Sensör Entegrasyonu', 'Veri Toplama', 'Gerçek Zamanlı İzleme', 'Alarm Yönetimi', 'Raporlama', 'API Desteği']
    },
    {
      id: 'ofcomto',
      name: 'Ofcomto',
      description: 'Akıllı Trafik Yönetim Sistemi - Şehir trafiğini optimize edin, kaza riskini azaltın ve ulaşım verimliliğini artırın.',
      icon: <DirectionsCar />,
      color: '#388e3c',
      features: ['Trafik Analizi', 'Akıllı Sinyalizasyon', 'Kaza Önleme', 'Rota Optimizasyonu', 'Gerçek Zamanlı İzleme', 'Raporlama']
    },
    {
      id: 'bepower',
      name: 'BePower',
      description: 'Enerji Yönetim Sistemi - Enerji tüketimini optimize edin, maliyetleri düşürün ve sürdürülebilir enerji çözümleri uygulayın.',
      icon: <Bolt />,
      color: '#f57c00',
      features: ['Enerji İzleme', 'Tüketim Analizi', 'Maliyet Optimizasyonu', 'Sürdürülebilirlik', 'Raporlama', 'Alarm Sistemi']
    },
    {
      id: 'nosi',
      name: 'Nosi',
      description: 'İnsan Kaynakları Yönetim Sistemi - Çalışan süreçlerinizi dijitalleştirin, performansı artırın ve iş süreçlerinizi optimize edin.',
      icon: <Person />,
      color: '#7b1fa2',
      features: ['Çalışan Yönetimi', 'Performans Değerlendirme', 'İzin Takibi', 'Maaş Yönetimi', 'Raporlama', 'Self-Service']
    },
    {
      id: 'besens',
      name: 'BeSens',
      description: 'Akıllı Sensör Platformu - IoT sensörlerinizi entegre edin, veri toplayın ve akıllı kararlar alın.',
      icon: <Memory />,
      color: '#00838f',
      features: ['Sensör Entegrasyonu', 'Veri Toplama', 'Gerçek Zamanlı İzleme', 'Alarm Yönetimi', 'Analitik', 'API Desteği']
    },
    {
      id: 'beroad',
      name: 'BeRoad',
      description: 'Yol Bilgilendirme Sistemi - Sürücülere gerçek zamanlı yol durumu bilgisi verin, güvenliği artırın.',
      icon: <Lightbulb />,
      color: '#ff6f00',
      features: ['Gerçek Zamanlı Bilgi', 'Hava Durumu Entegrasyonu', 'Trafik Durumu', 'Güvenlik Uyarıları', 'Mobil Uygulama', 'API Desteği']
    },
    {
      id: 'beflood',
      name: 'BeFlood',
      description: 'Su Taşkını Önleme Sistemi - Su seviyesini izleyin, erken uyarı verin ve afet yönetimini optimize edin.',
      icon: <Water />,
      color: '#0277bd',
      features: ['Su Seviyesi İzleme', 'Erken Uyarı Sistemi', 'Risk Analizi', 'Acil Durum Planlaması', 'Raporlama', 'Mobil Uygulama']
    },
    {
      id: 'bepopup',
      name: 'BePopup',
      description: 'Online Eğitim Platformu - Uzaktan eğitim süreçlerinizi yönetin, öğrenci takibini kolaylaştırın.',
      icon: <SmartToy />,
      color: '#c2185b',
      features: ['Video Konferans', 'İçerik Yönetimi', 'Öğrenci Takibi', 'Sınav Sistemi', 'Raporlama', 'Mobil Uygulama']
    },
    {
      id: 'ippdu',
      name: 'IPPDU',
      description: 'Akıllı IP PDU - Veri merkezi güç yönetimini optimize edin, enerji verimliliğini artırın.',
      icon: <Album />,
      color: '#424242',
      features: ['Güç İzleme', 'Uzaktan Yönetim', 'Enerji Optimizasyonu', 'Alarm Sistemi', 'Raporlama', 'API Desteği']
    },
    {
      id: 'smart-work',
      name: 'Smart Work',
      description: 'Carbon Takip Sistemi - Karbon ayak izinizi ölçün, sürdürülebilirlik hedeflerinize ulaşın.',
      icon: <Water />,
      color: '#2e7d32',
      features: ['Karbon Ölçümü', 'Sürdürülebilirlik Raporu', 'Hedef Takibi', 'Analitik', 'Raporlama', 'API Desteği']
    },
    {
      id: 'servis-pozitif',
      name: 'Servis Pozitif',
      description: 'Teknik Servis Yönetim Sistemi - Servis süreçlerinizi dijitalleştirin, müşteri memnuniyetini artırın.',
      icon: <VisibilityOutlined />,
      color: '#1565c0',
      features: ['Servis Takibi', 'Müşteri Yönetimi', 'Teknik Ekip Yönetimi', 'Parça Takibi', 'Raporlama', 'Mobil Uygulama']
    },
    {
      id: 'liox-erp',
      name: 'Liox ERP',
      description: 'ERP Yazılımı - İş süreçlerinizi entegre edin, verimliliği artırın ve maliyetleri optimize edin.',
      icon: <Computer />,
      color: '#6a1b9a',
      features: ['Finans Yönetimi', 'Stok Yönetimi', 'Müşteri İlişkileri', 'İnsan Kaynakları', 'Üretim Yönetimi', 'Raporlama']
    },
    {
      id: 'girus',
      name: 'Girus',
      description: 'Kobi Yazılımı - Küçük ve orta ölçekli işletmeler için özel olarak tasarlanmış yönetim çözümleri.',
      icon: <Favorite />,
      color: '#e91e63',
      features: ['Müşteri Yönetimi', 'Stok Takibi', 'Fatura Yönetimi', 'Raporlama', 'Mobil Uygulama', 'E-ticaret Entegrasyonu']
    }
  ];

  return (
    <div className="products-page">
      {/* SEO Meta Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Beyes Ürünleri",
          "description": "Beyes'in geliştirdiği yazılım ürünleri ve çözümleri. Network yönetimi, sensör sistemleri, trafik yönetimi ve daha fazlası.",
          "url": "https://beyes.com.tr/products"
        })}
      </script>

      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <h1 className="products-hero-title">Ürünlerimiz</h1>
          <p className="products-hero-description">
            Beyes olarak, işletmenizin dijital dönüşümü için ihtiyaç duyduğunuz tüm yazılım çözümlerini geliştiriyoruz. 
            Her ürünümüz, modern teknolojiler kullanılarak tasarlanmış ve sürekli geliştirilmektedir.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card" id={product.id}>
              <div className="product-card-header">
                <div className="product-icon" style={{ backgroundColor: product.color }}>
                  {product.icon}
                </div>
                <h2 className="product-title">{product.name}</h2>
                <p className="product-description">{product.description}</p>
              </div>
              <div className="product-features">
                <h3 className="features-title">Özellikler</h3>
                <ul className="features-list">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="feature-item">
                      <div className="feature-checkmark">
                        ✓
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="product-cta">
                <div className="product-cta-row">
                  <button className="product-demo-btn">
                    Demo Talep Et
                  </button>
                  <button className="product-quote-btn">
                    Teklif Al
                  </button>
                </div>
                <Link to={`/products/${product.id}`} className="product-detail-btn">
                  Detaylı Bilgi
                  →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta-section">
        <div className="products-cta-container">
          <h2 className="products-cta-title">
            İhtiyacınıza Özel <span className="highlight">Çözümler</span> Geliştiriyoruz
          </h2>
          <p className="products-cta-description">
            Mevcut ürünlerimiz size uygun değilse, ihtiyaçlarınıza özel yazılım çözümleri geliştirebiliriz. 
            Uzman ekibimizle iletişime geçin ve projelerinizi hayata geçirelim.
          </p>
          <div className="products-cta-buttons">
            <Link to="/iletisim" className="products-cta-btn products-cta-btn-primary">
              İletişime Geçin
            </Link>
            <Link to="/solutions" className="products-cta-btn products-cta-btn-secondary">
              Çözümlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;