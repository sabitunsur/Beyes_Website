import React, { useState, useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import SEO from '../../components/Common/SEO';
import { 
  teamMembersData, 
  timelineData, 
  certificatesData, 
  partnersData 
} from '../../constants/about';
import '../../styles/pages/About/about.css';

// Import images
import aboutHeroBg from '../../assets/image/AboutUs/back.png';

// Import icons
import { ChevronDown, ChevronUp, Shield, Target, Eye, Award } from 'lucide-react';


const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [activeTimelineYear, setActiveTimelineYear] = useState('2017');
  const [activeCertificate, setActiveCertificate] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleTimelineClick = (year) => {
    setActiveTimelineYear(year);
  };

  const teamMembers = teamMembersData;

  const policies = [
    {
      id: 1,
      title: 'KVKK Politikamız',
      content: `a) Veri Sorumlusu ve Temsilcisi 6698 sayılı Kişisel Verilerin Korunması Kanunu "KVK Kanunu" uyarınca, kişisel verileriniz; veri sorumlusu olarak BEYES Bilişim Teknolojileri Elektronik Yazılım Danışmanlık Sanayi ve Ticaret Limited Şirketi ("Şirket") tarafından aşağıda açıklanan kapsamda işlenebilecektir.

b) Kişisel Verilerin Hangi Amaçla İşleneceği Toplanan kişisel verileriniz, Şirketimiz ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini, Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ve Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları dahilinde işlenecektir.

c) İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği Toplanan kişisel verileriniz; Şirketimiz ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini; Şirketimizin ticari ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla iş ortaklarımıza, çözüm ortaklarımızla, tedarikçilerimize, Topluluk şirketlerimizle, Üst ve Alt işverenlerimizle, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel kişilere, KVK Kanunu'nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.

ç) Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi Kişisel verileriniz Şirketimiz tarafından farklı kanallarla ve farklı hukuki sebeplere dayanarak ticari faaliyetlerimizi yürütmek amacıyla toplanmaktadır. Bu hukuki sebeple toplanan kişisel verileriniz KVK Kanunu'nun 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında bu metnin (b) ve (c) maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.

d) Kişisel Veri Sahibinin KVK Kanunu'nun 11. maddesinde Sayılan Hakları Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metni'nde aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz durumunda Şirketimiz talebin niteliğine göre talebi en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, Kişisel Verileri Koruma Kurulunca bir ücret öngörülmesi halinde, Şirketimiz tarafından belirlenen tarifedeki ücret alınacaktır.

Bu kapsamda kişisel veri sahipleri; Kişisel veri işlenip işlenmediğini öğrenme, Kişisel verileri işlenmişse buna ilişkin bilgi talep etme, Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme, Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme, Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme, Kişisel verilerin silinmesini veya yok edilmesini isteme, İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme, Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.

KVK Kanunu'nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı veya Kişisel Verileri Koruma Kurulu'nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz. Kişisel Verileri Koruma Kurulu, şu aşamada herhangi bir yöntem belirlemediği için, başvurunuzu, KVK Kanunu gereğince, yazılı olarak Şirketimize iletmeniz gerekmektedir.

Bu çerçevede Şirketimize KVK Kanunu'nun 11. maddesi kapsamında yapacağınız başvurularda yazılı olarak başvurunuzu ileteceğiniz kanallar ve usuller aşağıda açıklanmaktadır.

Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi tespit edici gerekli bilgiler ile KVK Kanunu'nun 11. maddesinde belirtilen haklardan kullanmayı talep ettiğiniz hakkınıza yönelik açıklamalarınızı içeren talebinizi; beyes.com.tr adresindeki formu doldurarak, formun imzalı bir nüshasını Ostim, Cevat Dündar Cd. No:1/1/42, 06374 Ostim Osb/Yenimahalle/Ankara adresine kimliğinizi tespit edici belgeler ile bizzat elden iletebilir, noter kanalıyla veya KVK Kanunu'nda belirtilen diğer yöntemler ile gönderebilir veya ilgili formu beyesbilisim@hs01.kep.tr adresine güvenli elektronik imzalı olarak iletebilirsiniz.`
    },
    {
      id: 2,
      title: 'Kalite Politikamız',
      content: `Şirketimizi bağlayıcı tüm çalışanlarımızın, ilgili taraflarımızın ve iş ortaklarımızın ihtiyaç ve beklentilerinin ve uyum yükümlülüklerinin belirlenmesi, Çalışmalarımızın birincil ve ikincil mevzuat şartlarına, yasa, yönetmelik, ulusal ve uluslararası standartlar ve Küresel İlkeler Sözleşmesi doğrultusunda yürüteceğimizi, Tüm çalışanlarımız, müşterilerimiz ve ziyaretçilerimiz de dahil olmak üzere önce insan felsefesine dayanarak iş sağlığı ve güvenliği kapsamında gerekli tüm tedbirleri alarak yaralanmaların ve sağlık bozulmalarının önlenmesini sağlayacağımızı, Çevre duyarlılığın artırılması, çevre kirliliğinin önlenmesi ve çevrenin korunması için tüm ilgili tarafların, çalışanların ve toplumun bilgi seviyesinin artırılması yönündeki faaliyetlerin yanı sıra çevreyi, insan sağlığını ve güvenliğini tehdit etmeyen uygulamaların kullanılacağı ve kullandırılmasını sağlayacağımızı, Ülkemizde hızla büyüyen Bilişim, Elektronik ve Savunma Teknolojileri sektöründe öncü kuruluşlardan biri olarak kalabilmek için müşteri istek ve beklentileri ve piyasa şartları doğrultusunda ürün ve hizmet kalitemizi sürekli geliştireceğimizi, Ana itici gücümüz olan Çalışanlarımızın, eğitim seviyelerini geliştirerek, iş süreçlerine yeni fikirler ile destek olmalarının teşvik edilmesi ile yaratıcı ve yenilikçi ürün ve hizmetlerin geliştirilmesinde destekleyici olacağımızı, Sürekli gelişme felsefesini ve sistemlerini tüm süreçlerde Kalite Yönetim Sistemine uygun hale getireceğimizi ve etkinliğini sürekli iyileştireceğimizi, tüm personele özümseteceğimizi ve bu doğrultuda pazar payını, karlılığını, rekabet gücünü arttıracağımızı, Tüm bunları yerine getirirken ilgili birincil ve ikincil mevzuat şartlarına, müşteri şartlarına, standart şartlarına uyacağımızı taahhüt ederiz.`
    }
  ];

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SEO 
        title="Hakkımızda - Beyes"
        description="Beyes Bilişim Teknolojileri hakkında detaylı bilgi. 2012'den beri teknoloji sektöründe faaliyet gösteren şirketimizin misyonu, vizyonu ve değerleri."
        keywords="Beyes, hakkımızda, bilişim teknolojileri, yazılım, elektronik, savunma teknolojileri, Ankara"
      />

      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-background">
            <img src={aboutHeroBg} alt="Beyes Hakkımızda Arka Plan" />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Hakkımızda</h1>
           {/* <p className="hero-subtitle">Teknoloji ile geleceği şekillendiriyoruz</p> */}
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="who-are-we" className="who-we-are">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Biz Kimiz?</h2>
            </div>
            <div className="content-wrapper">
              <div className="text-content">
                <p>
                  Beyes Bilişim Teknolojileri, 2012 yılında Ankara'da T.C. Sanayi ve Teknoloji Bakanlığı'nın 
                  "Tekno-Girişim Sermaye Desteği" programı desteğiyle kurulmuştur. "İyi, mükemmelin düşmanıdır" 
                  felsefesiyle yola çıkan şirketimiz, yüksek teknoloji ürünleri ve çözümlerini araştırmak, 
                  geliştirmek ve üretmek amacıyla faaliyet göstermektedir.
                </p>
                <p>
                  Genç, dinamik ve çalışkan ekibimizle Telco Network yönetim yazılımları, Savunma Sanayii için 
                  elektro-mekanik ürünler ve Kamu ile Sanayi sektörleri için süreç yönetimi, izleme ve otomatik 
                  çalışma çözümleri geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section id="mission" className="mission-vision">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-card">
                <div className="card-icon">
                  <Target />
                </div>
                <h3>Misyonumuz</h3>
                <p>
                  Teknoloji sektöründe yenilikçi çözümler geliştirerek, müşterilerimizin dijital dönüşüm 
                  süreçlerinde güvenilir partner olmak. Kaliteli ürün ve hizmetlerimizle sektörde öncü 
                  konumda yer almak.
                </p>
              </div>
              <div className="vision-card" id="vision">
                <div className="card-icon">
                  <Eye />
                </div>
                <h3>Vizyonumuz</h3>
                <p>
                  Türkiye'nin önde gelen bilişim teknolojileri şirketlerinden biri olarak, uluslararası 
                  pazarlarda da tanınan, yenilikçi ve sürdürülebilir teknoloji çözümleri sunan bir marka 
                  haline gelmek.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Yönetim Ekibimiz</h2>
            </div>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={member.id} className={`team-member ${index === 0 ? 'ceo' : ''}`}>
                  <div className="member-avatar">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="history-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Tarihçemiz</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item active">
                <div className="timeline-image">
                  <img 
                    src={timelineData[activeTimelineYear]?.image || timelineData['2017'].image} 
                    alt={`${activeTimelineYear} - Timeline`} 
                  />
                </div>
                <div className="timeline-content">
                  <h3>{activeTimelineYear}</h3>
                  <h4>
                    {activeTimelineYear === '2012' ? 'Başlangıç' :
                     activeTimelineYear === '2013' ? 'Yeni Adımlar' :
                     activeTimelineYear === '2014-2016' ? 'Gelişme Dönemi' :
                     activeTimelineYear === '2017' ? 'Güvenlik ve Altyapı' :
                     activeTimelineYear === '2018-2019' ? 'Teknoloji Yatırımları' :
                     activeTimelineYear === '2020' ? 'Telekomünikasyon ve Ağ Çözümleri' :
                     activeTimelineYear === '2021' ? 'Büyük İşbirlikleri' :
                     activeTimelineYear === '2022' ? 'Ar-Ge ve Sertifikalar' :
                     activeTimelineYear === '2023' ? 'Büyüme Zamanı' :
                     activeTimelineYear === '2024' ? 'Savunma ve 5G' :
                     activeTimelineYear === '2025' ? 'Yeni Bir Dönem' : 'Güvenlik ve Altyapı'}
                  </h4>
                  <p>
                    {activeTimelineYear === '2012' ? 'Büyük fikirler küçük adımlarla başlar! Teknogirişim desteğiyle yola çıktık ve ilk donanım & yazılım prototipimizi geliştirdik.' :
                     activeTimelineYear === '2013' ? 'Sıramatik yazılımlar ve hemşire çağrı sistemleri ile sektöre adımızı yazdırdık. Artık resmi olarak bir şirketiz!' :
                     activeTimelineYear === '2014-2016' ? 'Mobil uygulamalarla dijital dünyaya güçlü bir giriş yaptık. Kalite sertifikalarımızı alarak güvenilirliğimizi perçinledik.' :
                     activeTimelineYear === '2017' ? 'Bilgi güvenliğini önceliğimiz yaparak 27001 sertifikasını aldık. 112 acil çağrı merkezi altyapısını oluşturduk.' :
                     activeTimelineYear === '2018-2019' ? 'OSS ürün geliştirme ve Evrensel-Faz 2 altyapısıyla sektörde daha güçlü bir konuma geldik. Ostim Teknokent ofisimize taşındık.' :
                     activeTimelineYear === '2020' ? 'vDNS/DHCP ve Türk Telekom Fix Network projeleriyle altyapı çözümlerimize yenilerini ekledik.' :
                     activeTimelineYear === '2021' ? 'OFCOMTO, Vodafone, Sayıştay ve Havelsan gibi dev isimlerle çalışmaya başladık. Artık sahada daha güçlüyüz!' :
                     activeTimelineYear === '2022' ? '15504 Spice 2 sertifikası aldık, kestirimci bakım ve arıza tespit teknolojileriyle geleceğe yatırım yaptık.' :
                     activeTimelineYear === '2023' ? 'BePower, Havelsan, TÜBİTAK ve Uyumsoft iş ortaklıklarıyla yeni projelere imza attık. Yenilikçi projelerimiz hız kesmiyor!' :
                     activeTimelineYear === '2024' ? 'Aselsan projeleri, yeni ofisler ve Ulaştırma Bakanlığı\'ndan 5G desteğiyle geleceğe sağlam adımlarla ilerliyoruz.' :
                     activeTimelineYear === '2025' ? 'BeSENS ile ilk spinoff firmamızı kurduk, yönetim ofisimizi genişlettik ve Beyes Teknoloji AŞ. unvanıyla yolumuza devam ediyoruz!' :
                     'Bilgi güvenliğini önceliğimiz yaparak 27001 sertifikasını aldık. 112 acil çağrı merkezi altyapısını oluşturduk.'}
                  </p>
                </div>
              </div>
              <div className="timeline-dots">
                <span 
                  className={activeTimelineYear === '2012' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2012')}
                >
                  2012
                </span>
                <span 
                  className={activeTimelineYear === '2013' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2013')}
                >
                  2013
                </span>
                <span 
                  className={activeTimelineYear === '2014-2016' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2014-2016')}
                >
                  2014-2016
                </span>
                <span 
                  className={activeTimelineYear === '2017' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2017')}
                >
                  2017
                </span>
                <span 
                  className={activeTimelineYear === '2018-2019' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2018-2019')}
                >
                  2018-2019
                </span>
                <span 
                  className={activeTimelineYear === '2020' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2020')}
                >
                  2020
                </span>
                <span 
                  className={activeTimelineYear === '2021' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2021')}
                >
                  2021
                </span>
                <span 
                  className={activeTimelineYear === '2022' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2022')}
                >
                  2022
                </span>
                <span 
                  className={activeTimelineYear === '2023' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2023')}
                >
                  2023
                </span>
                <span 
                  className={activeTimelineYear === '2024' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2024')}
                >
                  2024
                </span>
                <span 
                  className={activeTimelineYear === '2025' ? 'active' : ''} 
                  onClick={() => handleTimelineClick('2025')}
                >
                  2025
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section id="policies" className="policies-section">
          <div className="container">
            <div className="policies-content">
              <div className="policies-visual">
                <div className="policies-icons">
                  <div className="policy-icon kvkk-icon">
                    <Shield />
                  </div>
                  <div className="policy-icon quality-icon">
                    <Award />
                  </div>
                </div>
              </div>
              <div className="policies-text">
                <h2 className="section-title">Politikalarımız</h2>
                <div className="accordion">
                  {policies.map((policy, index) => (
                    <div key={policy.id} className="accordion-item">
                      <button
                        className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                      >
                        <span>{policy.title}</span>
                        {activeAccordion === index ? <ChevronUp /> : <ChevronDown />}
                      </button>
                      <div className={`accordion-content ${activeAccordion === index ? 'active' : ''}`}>
                        <div className="content-text">
                          {policy.content.split('\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section id="documents" className="certificates-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Belgelerimiz</h2>
            </div>
            <div className="certificates-grid">
              <div className="certificate-card grey">
                <div className="certificate-icon">
                  <img src={certificatesData.yetki.icon} alt="Yetki Belgesi" />
                </div>
                <h3>Yetki Belgeleri</h3>
                <button className="view-button" onClick={() => setActiveCertificate('yetki')}>
                  Görüntüle
                </button>
              </div>
              <div className="certificate-card red">
                <div className="certificate-icon">
                  <img src={certificatesData.ym.icon} alt="Yerli Malı Belgesi" />
                </div>
                <h3>Yerli Malı Belgeleri</h3>
                <button className="view-button" onClick={() => setActiveCertificate('ym')}>
                  Görüntüle
                </button>
              </div>
              <div className="certificate-card purple">
                <div className="certificate-icon">
                  <img src={certificatesData.kalite.icon} alt="Kalite Belgesi" />
                </div>
                <h3>Kalite Belgeleri</h3>
                <button className="view-button" onClick={() => setActiveCertificate('kalite')}>
                  Görüntüle
                </button>
              </div>
            </div>
            
            {/* Certificate Modal */}
            {activeCertificate && (
              <div className="certificate-modal" onClick={() => setActiveCertificate(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <div className="modal-header">
                    <h3>
                      {activeCertificate === 'yetki' ? 'Yetki Belgeleri' :
                       activeCertificate === 'ym' ? 'Yerli Malı Belgeleri' :
                       activeCertificate === 'kalite' ? 'Kalite Belgeleri' : ''}
                    </h3>
                    <button className="close-button" onClick={() => setActiveCertificate(null)}>
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    {activeCertificate === 'yetki' && (
                      <div className="certificate-documents">
                        <div className="document-item">
                          <h4>I. Kamu Bilişim Yetki Belgesi</h4>
                          <img src={certificatesData.yetki.documents[0].image} alt="Kamu Bilişim Yetki Belgesi" />
                        </div>
                        <div className="document-item">
                          <h4>II. Yazılım Yetki Belgesi</h4>
                          <img src={certificatesData.yetki.documents[1].image} alt="Yazılım Yetki Belgesi" />
                        </div>
                      </div>
                    )}
                    {activeCertificate === 'ym' && (
                      <div className="certificate-documents">
                        <div className="document-item">
                          <h4>I. Yerli Malı Belgesi 1</h4>
                          <img src={certificatesData.ym.documents[0].image} alt="Yerli Malı Belgesi 1" />
                        </div>
                        <div className="document-item">
                          <h4>II. Yerli Malı Belgesi 2</h4>
                          <img src={certificatesData.ym.documents[1].image} alt="Yerli Malı Belgesi 2" />
                        </div>
                        <div className="document-item">
                          <h4>III. Yerli Malı Belgesi 3</h4>
                          <img src={certificatesData.ym.documents[2].image} alt="Yerli Malı Belgesi 3" />
                        </div>
                        <div className="document-item">
                          <h4>IV. Yerli Malı Belgesi 4</h4>
                          <img src={certificatesData.ym.documents[3].image} alt="Yerli Malı Belgesi 4" />
                        </div>
                      </div>
                    )}
                    {activeCertificate === 'kalite' && (
                      <div className="certificate-documents">
                        <div className="document-item">
                          <h4>I. ISO 15504 SPICE</h4>
                          <img src={certificatesData.kalite.documents[0].image} alt="ISO 15504 SPICE" />
                        </div>
                        <div className="document-item">
                          <h4>II. ISO 27001-2013</h4>
                          <img src={certificatesData.kalite.documents[1].image} alt="ISO 27001-2013" />
                        </div>
                        <div className="document-item">
                          <h4>III. ISO 9001:2015</h4>
                          <img src={certificatesData.kalite.documents[2].image} alt="ISO 9001:2015" />
                        </div>
                        <div className="document-item">
                          <h4>IV. ISO 14001:2015</h4>
                          <img src={certificatesData.kalite.documents[3].image} alt="ISO 14001:2015" />
                        </div>
                        <div className="document-item">
                          <h4>V. ISO 45001-2018</h4>
                          <img src={certificatesData.kalite.documents[4].image} alt="ISO 45001-2018" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Partners Section */}
        <section id="partnerships" className="partners-section">
          <div className="container">
            <div className="partners-content">
              <div className="partners-group">
                <h3>İş Ortaklarımız</h3>
                <div className="partners-grid">
                  <div className="partner-logo">
                    <img src={partnersData.havelsan} alt="HAVELSAN" />
                  </div>
                  <div className="partner-logo">
                    <img src={partnersData.uyumsoft} alt="UYUMSOFT" />
                  </div>
                  <div className="partner-logo">
                    <img src={partnersData.netas} alt="NETAS" />
                  </div>
                  <div className="partner-logo">
                    <img src={partnersData.ibm} alt="IBM" />
                  </div>
                </div>
              </div>
              <div className="partners-group">
                <h3>Üyeliklerimiz</h3>
                <div className="partners-grid">
                  <div className="partner-logo">
                    <img src={partnersData.hib} alt="HİB" />
                  </div>
                  <div className="partner-logo">
                    <img src={partnersData.bgd} alt="BİLGİ GÜVENLİĞİ DERNEĞİ" />
                  </div>
                  <div className="partner-logo">
                    <img src={partnersData.htklogo} alt="HTK" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
