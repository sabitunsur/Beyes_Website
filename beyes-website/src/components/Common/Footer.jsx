import React, { useState } from 'react';
import '../../styles/components/Common/footer.css';
import beyesLogo from '../../assets/image/logo/beyes-logo.png';
import { LocationOn, Phone, Email, Notifications } from '@mui/icons-material';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-left">
            <Notifications className="newsletter-icon" style={{ fontSize: '36px' }} />
            <span className="newsletter-title">Bültene Abone Ol</span>
          </div>
          <div className="newsletter-right">
            <div className="newsletter-form">
              <input type="email" placeholder="E-mail" className="newsletter-input" />
              <button className="newsletter-submit">
                <span>Abone Ol</span>
              </button>
            </div>
            <div className="newsletter-bottom-section">
              <span className="newsletter-question">Henüz bilgi bankamızı incelemediniz mi?</span>
              <button className="newsletter-btn">
                <span>İncele</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-container">
            
          <div className="footer-left">
            <div className="footer-logo">
              <img src={beyesLogo} alt="Beyes Logo" />
            </div>
            <p className="footer-description">
              Beyes işinize değer verir bu nedenle, sözde işine değer veren müşterilere "iyi, mühteşem" duyumdadır felsefe ile, yüksek teknoloji ürün ve çözümleri ulaştırmak için aktif olarak araştırır, geliştirir ve üretir.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4>Hakkımızda</h4>
              <ul>
                <li>Değerlerimiz ve İş Ortaklıklarımız</li>
                <li>Kalite ve KVKK Politikamız</li>
                <li>Belgelerimiz</li>
                <li>Biz Kimiz?</li>
                <li>Misyon</li>
                <li>Vizyon</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Çözümler</h4>
              <ul>
                <li>Savunma ve Havacılık</li>
                <li>Yapay Zeka Teknolojileri</li>
                <li>Bilgi ve İletişim Teknolojileri</li>
                <li>Profesyonel Servisler</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Ürünler</h4>
              <ul>
                <li>Servis Pozitif</li>
                <li>BeSens</li>
                <li>BeRoad</li>
                <li>BePlay</li>
                <li>BePopup</li>
                <li>BePower</li>
                <li>BeBoss</li>
                <li>Girus</li>
                <li>Liox</li>
                <li>Nosi</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>AR-GE</h4>
              <ul>
                <li>Dron Kontrol</li>
                <li>Robot</li>
                <li>Slipring</li>
                <li>Su Jeneratörü</li>
                <li>Optik Teknolojiler</li>
                <li>AI Bilgisayari</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Kariyer</h4>
              <ul>
                <li>Beyes'te Yaşam</li>
                <li>Beyes'li Olmak</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-contact">
            <div className="contact-header">
              <span className="contact-title">İletişime Geçin</span>
              <span className="contact-arrow">&gt;</span>
            </div>
            <div className="contact-info-grid">
              <div className="contact-item">
                <LocationOn className="contact-icon" />
                <span className="contact-text">Ostim Teknopark Turuncu Bina No:42 Ankara, TÜRKİYE</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">+90 312 446 85 00</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">+90 312 446 85 01</span>
              </div>
              <div className="contact-item">
                <Email className="contact-icon" />
                <span className="contact-text">info@beyes.com.tr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <span className="copyright-text">
            © 2012 - {currentYear} BEYES - 
            <a href="https://beyescloud.com/files/BEYES-Kisisel-Verilerin-Islenmesi.docx" className="kvkk-link" target="_blank" rel="noopener noreferrer">
              KVKK Başvuru Formu
            </a>
            <span> | </span>
            <button onClick={openModal} className="kvkk-modal-trigger">
              KVKK Aydınlatma Metni
            </button>
          </span>
          <div className="social-icons">
            <a href="https://www.instagram.com/beyesbilisim/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/beyesteknoloji/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* KVKK Modal */}
      <div className={`kvkk-modal ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className="kvkk-modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 className="kvkk-modal-title">Kişisel Verilerin İşlenmesi Aydınlatma Metni</h2>
          <div className="kvkk-modal-text">
            <p><strong>a) Veri Sorumlusu ve Temsilcisi</strong></p>
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu") uyarınca, kişisel verileriniz; veri sorumlusu olarak
              BEYES Bilişim Teknolojileri Elektronik Yazılım Danışmanlık Sanayi ve Ticaret Limited Şirketi ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
            <p><strong>b) Kişisel Verilerin Hangi Amaçla İşleneceği</strong></p>
            <p>
              Toplanan kişisel verileriniz, Şirketimiz ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini,
              Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ve Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla
              KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.
            </p>
            <p><strong>c) İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</strong></p>
            <p>
              Toplanan kişisel verileriniz; Şirketimiz ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini; Şirketimizin ticari
              ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla iş ortaklarımıza,
              çözüm ortaklarımızla, tedarikçilerimize, Topluluk şirketlerimizle, Üst ve Alt işverenlerimizle, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel
              kişilere, KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
            </p>
            <p><strong>ç) Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</strong></p>
            <p>
              Kişisel verileriniz Şirketimiz tarafından farklı kanallarla ve farklı hukuki sebeplere dayanarak ticari faaliyetlerimizi yürütmek amacıyla toplanmaktadır.
              Bu hukuki sebeple toplanan kişisel verileriniz KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin
              (b) ve (c) maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
            </p>
            <p><strong>d) Kişisel Veri Sahibinin KVK Kanunu'nun 11. maddesinde Sayılan Hakları</strong></p>
            <p>Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metni'nde aşağıda düzenlenen
            yöntemlerle Şirketimize iletmeniz durumunda Şirketimiz talebin niteliğine göre talebi en kısa sürede ve en geç
            otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma Kurulunca bir ücret
            öngörülmesi halinde, Şirketimiz tarafından belirlenen tarifedeki ücret alınacaktır. Bu kapsamda kişisel veri
            sahipleri;</p>
            <ul className="kvkk-modal-list">
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>Kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.</li>
            </ul>
            <p>KVK Kanunu'nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi,
            yazılı veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz. Kişisel
            Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem belirlemediği için, başvurunuzu, KVK Kanunu
            gereğince, yazılı olarak Şirketimize iletmeniz gerekmektedir. Bu çerçevede Şirketimize KVK Kanunu'nun 11.
            maddesi kapsamında yapacağınız başvurularda yazılı olarak başvurunuzu ileteceğiniz kanallar ve usuller aşağıda
            açıklanmaktadır</p>
            <p>
              Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile KVK Kanunu'nun 11.
              maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi;
              <a href="www.beyes.com.tr">beyes.com.tr</a> adresindeki formu doldurarak, formun imzalı bir nüshasını Ostim, Cevat Dündar Cd.
              No:1/1/42, 06374 Ostim Osb/Yenimahalle/Ankara adresine kimliğinizi tespit edici belgeler ile bizzat elden
              iletebilir, noter kanalıyla veya KVK Kanunu'nda belirtilen diğer yöntemler ile gönderebilir veya ilgili formu
              <a href="mailto:beyesbilisim@hs01.kep.tr">beyesbilisim@hs01.kep.tr</a> adresine güvenli elektronik imzalı olarak iletebilirsiniz.
            </p>
          </div>
          <div className="kvkk-modal-footer">
            <button onClick={closeModal} className="kvkk-modal-close-btn">
              Kapat
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;