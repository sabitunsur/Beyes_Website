// About sayfası için constants
import teamMember1 from '../assets/image/AboutUs/avatar/kerem.png';
import teamMember2 from '../assets/image/AboutUs/avatar/gozde.png';
import teamMember3 from '../assets/image/AboutUs/avatar/saygın.png';
import teamMember4 from '../assets/image/AboutUs/avatar/Cem.png';
import teamMember5 from '../assets/image/AboutUs/avatar/Gökberk.png';
import teamMember6 from '../assets/image/AboutUs/avatar/cansu.png';

// Timeline images
import timeline2012 from '../assets/image/AboutUs/1.png';
import timeline2013 from '../assets/image/AboutUs/2.png';
import timeline2014_2016 from '../assets/image/AboutUs/3.png';
import timeline2017 from '../assets/image/AboutUs/4.png';
import timeline2018_2019 from '../assets/image/AboutUs/5.png';
import timeline2020 from '../assets/image/AboutUs/6.png';
import timeline2021 from '../assets/image/AboutUs/7.png';
import timeline2022 from '../assets/image/AboutUs/8.png';
import timeline2023 from '../assets/image/AboutUs/9.png';
import timeline2024 from '../assets/image/AboutUs/10.png';
import timeline2025 from '../assets/image/AboutUs/11.png';

// Document icons
import yetkiIcon from '../assets/image/AboutUs/doc/yetki.png';
import ymIcon from '../assets/image/AboutUs/doc/ym.png';
import kaliteIcon from '../assets/image/AboutUs/doc/kalite.png';

// Yetki Belgeleri
import yb1 from '../assets/image/AboutUs/DocContent/yetki/yb1.png';
import yb2 from '../assets/image/AboutUs/DocContent/yetki/yb2.png';

// Yerli Malı Belgeleri
import ym1 from '../assets/image/AboutUs/DocContent/yerliMalı/ym1.png';
import ym2 from '../assets/image/AboutUs/DocContent/yerliMalı/ym2.png';
import ym3 from '../assets/image/AboutUs/DocContent/yerliMalı/ym3.png';
import ym4 from '../assets/image/AboutUs/DocContent/yerliMalı/ym4.png';

// Kalite Belgeleri
import k1 from '../assets/image/AboutUs/DocContent/kalite/k1.png';
import k2 from '../assets/image/AboutUs/DocContent/kalite/k2.png';
import k3 from '../assets/image/AboutUs/DocContent/kalite/k3.png';
import k4 from '../assets/image/AboutUs/DocContent/kalite/k4.png';
import k5 from '../assets/image/AboutUs/DocContent/kalite/k5.png';

// İş Ortaklarımız ve Üyeliklerimiz Logoları
import havelsan from '../assets/image/page/logo/havelsan.png';
import uyumsoft from '../assets/image/page/logo/uyumsoft.png';
import netas from '../assets/image/page/logo/netaş.png';
import ibm from '../assets/image/page/logo/ibm.png';
import hib from '../assets/image/page/logo/hib.png';
import bgd from '../assets/image/page/logo/bgd.png';
import htklogo from '../assets/image/page/logo/x.png';

export const teamMembersData = [
  {
    id: 1,
    name: 'Kerem Savaş',
    position: 'Genel Müdür',
    image: teamMember1,
    //description: 'Genel Müdür'
  },
  {
    id: 2,
    name: 'Gözde Özkan Dedeoğlu',
    position: 'Satış & PMO Müdürü',
    image: teamMember2,
    //description: 'Satış & PMO Müdürü'
  },
  {
    id: 3,
    name: 'Saygın M. Erdoğan',
    position: 'Mekanik Sistemler Müdürü',
    image: teamMember3,
    //description: 'Mekanik Sistemler Müdürü'
  },
  {
    id: 4,
    name: 'Cem Kadir Şahin',
    position: 'AR-GE Müdürü',
    image: teamMember4,
   // description: 'AR-GE Müdürü'
  },
  {
    id: 5,
    name: 'Gökberk E. Akalın',
    position: 'Teknik Operasyon Müdürü',
    image: teamMember5,
    //description: 'Teknik Operasyon Müdürü'
  },
  {
    id: 6,
    name: 'Cansu Yorulmaz',
    position: 'İnsan Kaynakları ve İdari İşler Müdürü',
    image: teamMember6,
    // description: 'İnsan Kaynakları ve İdari İşler Müdürü'
  }
];

export const timelineData = {
  '2012': {
    image: timeline2012,
    title: 'Kuruluş',
    description: 'Beyes, teknoloji ve inovasyon odaklı çözümler sunmak üzere kuruldu.'
  },
  '2013': {
    image: timeline2013,
    title: 'İlk Projeler',
    description: 'İlk müşteri projeleri ve teknoloji çözümleri geliştirildi.'
  },
  '2014-2016': {
    image: timeline2014_2016,
    title: 'Büyüme Dönemi',
    description: 'Şirket büyümesi ve yeni teknoloji alanlarına yönelim.'
  },
  '2017': {
    image: timeline2017,
    title: 'Yenilikçi Çözümler',
    description: 'Yapay zeka ve IoT tabanlı çözümler geliştirilmeye başlandı.'
  },
  '2018-2019': {
    image: timeline2018_2019,
    title: 'Sektör Genişlemesi',
    description: 'Savunma ve telekomünikasyon sektörlerinde güçlü pozisyon.'
  },
  '2020': {
    image: timeline2020,
    title: 'Dijital Dönüşüm',
    description: 'Pandemi döneminde dijital çözümler ve uzaktan çalışma sistemleri.'
  },
  '2021': {
    image: timeline2021,
    title: 'Teknoloji Liderliği',
    description: 'Yapay zeka ve makine öğrenmesi alanında liderlik.'
  },
  '2022': {
    image: timeline2022,
    title: 'Uluslararası Genişleme',
    description: 'Uluslararası pazarlara açılım ve global projeler.'
  },
  '2023': {
    image: timeline2023,
    title: 'Sürdürülebilir Teknoloji',
    description: 'Yeşil teknoloji ve sürdürülebilir çözümler odak noktası.'
  },
  '2024': {
    image: timeline2024,
    title: 'Gelecek Vizyonu',
    description: 'Geleceğin teknolojilerini bugünden geliştirme.'
  },
  '2025': {
    image: timeline2025,
    title: 'İnovasyon Merkezi',
    description: 'Teknoloji inovasyon merkezi ve Ar-Ge laboratuvarları.'
  }
};

export const certificatesData = {
  yetki: {
    icon: yetkiIcon,
    title: 'Yetki Belgeleri',
    documents: [
      { id: 'yb1', image: yb1, title: 'Yetki Belgesi 1' },
      { id: 'yb2', image: yb2, title: 'Yetki Belgesi 2' }
    ]
  },
  ym: {
    icon: ymIcon,
    title: 'Yerli Malı Belgeleri',
    documents: [
      { id: 'ym1', image: ym1, title: 'Yerli Mal Belgesi 1' },
      { id: 'ym2', image: ym2, title: 'Yerli Mal Belgesi 2' },
      { id: 'ym3', image: ym3, title: 'Yerli Mal Belgesi 3' },
      { id: 'ym4', image: ym4, title: 'Yerli Mal Belgesi 4' }
    ]
  },
  kalite: {
    icon: kaliteIcon,
    title: 'Kalite Belgeleri',
    documents: [
      { id: 'k1', image: k1, title: 'Kalite Belgesi 1' },
      { id: 'k2', image: k2, title: 'Kalite Belgesi 2' },
      { id: 'k3', image: k3, title: 'Kalite Belgesi 3' },
      { id: 'k4', image: k4, title: 'Kalite Belgesi 4' },
      { id: 'k5', image: k5, title: 'Kalite Belgesi 5' }
    ]
  }
};

export const partnersData = {
  havelsan,
  uyumsoft,
  netas,
  ibm,
  hib,
  bgd,
  htklogo
}; 