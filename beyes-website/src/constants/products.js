import { 
  Memory,
  Build,
  Sensors,
  DirectionsCar,
  Bolt,
  Person,
  TrendingUp,
  CheckCircle,
  Speed,
  Security,
  Analytics,
  Dashboard,
  NetworkCheck,
  Warning,
  Timeline,
  Settings,
  School,
  Storage,
  Nature,
  Support,
  Business,
  Store
} from '@mui/icons-material';

// Products sayfası için kullanılacak data
export const productsPageData = [
  {
    id: 'heysem',
    name: 'Heysem',
    shortDescription: 'Transmisyon Network Yönetim Sistemi',
    longDescription: 'Gerçek zamanlı izleme ve otomatik arıza tespiti ile network altyapınızı güvenle yönetin.',
    icon: <Build />,
    color: '#d32f2f',
    features: ['Gerçek Zamanlı İzleme', 'Otomatik Arıza Tespiti', 'Performans Analizi', 'Merkezi Yönetim Paneli', 'Tarihsel Veri Analizi', 'Otomatik Konfigürasyon'],
    benefits: ['Network Kesintilerini Önler', 'Operasyonel Maliyetleri Düşürür', 'Sistem Güvenilirliğini Artırır', 'Bakım Sürelerini Kısaltır']
  },
  {
    id: 'sc-nms',
    name: 'SC-NMS',
    shortDescription: 'Bilişsel Network Yönetim Sistemi',
    longDescription: 'IoT sensörlerinizi merkezi olarak yönetin ve veri toplama süreçlerinizi optimize edin.',
    icon: <Sensors />,
    color: '#1976d2',
    features: ['Sensör Entegrasyonu', 'Veri Toplama', 'Gerçek Zamanlı İzleme', 'Alarm Yönetimi', 'Raporlama', 'API Desteği'],
    benefits: ['Operasyonel Verimliliği Artırır', 'Maliyetleri Düşürür', 'Güvenilirliği Artırır', 'Hızlı Müdahale']
  },
  {
    id: 'ofcomto',
    name: 'Ofcomto',
    shortDescription: 'Arıza Etki Analizi Sistemi',
    longDescription: 'Şehir trafiğini optimize edin, kaza riskini azaltın ve ulaşım verimliliğini artırın.',
    icon: <DirectionsCar />,
    color: '#388e3c',
    features: ['Trafik Analizi', 'Akıllı Sinyalizasyon', 'Kaza Önleme', 'Rota Optimizasyonu', 'Gerçek Zamanlı İzleme', 'Raporlama'],
    benefits: ['Trafik Akışını İyileştirir', 'Kaza Oranını Azaltır', 'Güvenliği Artırır', 'Zaman Tasarrufu']
  },
  {
    id: 'bepower',
    name: 'BePower',
    shortDescription: 'Enerji Yönetim Sistemi',
    longDescription: 'Enerji tüketimini optimize edin, maliyetleri düşürün ve sürdürülebilir enerji çözümleri uygulayın.',
    icon: <Bolt />,
    color: '#f57c00',
    features: ['Enerji İzleme', 'Tüketim Analizi', 'Maliyet Optimizasyonu', 'Sürdürülebilirlik', 'Raporlama', 'Alarm Sistemi'],
    benefits: ['Enerji Tasarrufu Sağlar', 'Maliyetleri Düşürür', 'Sürdürülebilirlik', 'Hızlı Müdahale']
  },
  {
    id: 'nosi',
    name: 'Nosi',
    shortDescription: 'AI Asistan',
    longDescription: 'Yapay zeka destekli asistan ile iş süreçlerinizi otomatikleştirin ve verimliliği artırın.',
    icon: <Person />,
    color: '#7b1fa2',
    features: ['Doğal Dil İşleme', 'Otomatik Yanıtlar', 'Süreç Otomasyonu', 'Öğrenme Algoritması', 'Entegrasyon', 'Raporlama'],
    benefits: ['Operasyonel Verimliliği Artırır', 'Maliyetleri Düşürür', '7/24 Destek', 'Hızlı Yanıt']
  },
  {
    id: 'besens',
    name: 'BeSens',
    shortDescription: 'Kestirimci Bakım',
    longDescription: 'IoT sensörleri ve yapay zeka ile ekipmanlarınızı izleyin, arızaları önceden tahmin edin.',
    icon: <Memory />,
    color: '#00838f',
    features: ['IoT Sensör Entegrasyonu', 'Arıza Tahmin Algoritmaları', 'Planlı Bakım Optimizasyonu', 'Ekipman Sağlığı İzleme', 'Performans Trend Analizi', 'Otomatik Uyarı Sistemi'],
    benefits: ['Planlanmamış Duruşları Önler', 'Bakım Maliyetlerini Azaltır', 'Ekipman Ömrünü Uzatır', 'Operasyonel Verimliliği Artırır']
  },
  {
    id: 'beroad',
    name: 'BeRoad',
    shortDescription: 'Yol Bilgilendirme Sistemi',
    longDescription: 'Akıllı yol bilgilendirme sistemi ile trafik akışını optimize edin ve sürücü deneyimini iyileştirin.',
    icon: <DirectionsCar />,
    color: '#2e7d32',
    features: ['Gerçek Zamanlı Trafik Bilgisi', 'Dinamik İşaretleme', 'Hava Durumu Entegrasyonu', 'Kaza Uyarıları', 'Rota Önerileri', 'Mobil Uygulama'],
    benefits: ['Trafik Akışını İyileştirir', 'Güvenliği Artırır', 'Zaman Tasarrufu Sağlar', 'Sürücü Deneyimini İyileştirir']
  },
  {
    id: 'beflood',
    name: 'BeFlood',
    shortDescription: 'Su Taşkını Önleme ve Bilgilendirme Sistemi',
    longDescription: 'Su seviyesi izleme ve erken uyarı sistemi ile taşkın riskini minimize edin.',
    icon: <Nature />,
    color: '#0277bd',
    features: ['Su Seviyesi İzleme', 'Erken Uyarı Sistemi', 'Risk Analizi', 'Otomatik Bildirimler', 'Harita Entegrasyonu', 'Mobil Uygulama'],
    benefits: ['Taşkın Riskini Azaltır', 'Can Güvenliğini Artırır', 'Maddi Kayıpları Önler', 'Hızlı Müdahale']
  },
  {
    id: 'bepopup',
    name: 'BePopup',
    shortDescription: 'Online Eğitim ve Sınav Yönetim Yazılımı',
    longDescription: 'Dijital eğitim platformu ile uzaktan eğitim süreçlerinizi yönetin ve öğrenci performansını takip edin.',
    icon: <School />,
    color: '#6a1b9a',
    features: ['Online Ders Yönetimi', 'Sınav Sistemi', 'Öğrenci Takibi', 'İçerik Yönetimi', 'Raporlama', 'Mobil Uygulama'],
    benefits: ['Eğitim Kalitesini Artırır', 'Maliyetleri Düşürür', 'Erişilebilirliği Artırır', 'Performans Takibi']
  },
  {
    id: 'ippdu',
    name: 'IPPDU',
    shortDescription: 'Akıllı IP PDU',
    longDescription: 'Akıllı güç dağıtım ünitesi ile enerji yönetimini optimize edin ve güvenliği artırın.',
    icon: <Bolt />,
    color: '#f57c00',
    features: ['Uzaktan Yönetim', 'Güç İzleme', 'Otomatik Kesme', 'Alarm Sistemi', 'Enerji Analizi', 'Güvenlik'],
    benefits: ['Enerji Tasarrufu Sağlar', 'Güvenliği Artırır', 'Maliyetleri Düşürür', 'Uzaktan Kontrol']
  },
  {
    id: 'smartwork',
    name: 'Smart Work',
    shortDescription: 'Carbon Ayakizi ve Atık Takibi',
    longDescription: 'Sürdürülebilirlik odaklı çözümler ile karbon ayak izinizi azaltın ve atık yönetimini optimize edin.',
    icon: <Nature />,
    color: '#388e3c',
    features: ['Karbon Ayak İzi Hesaplama', 'Atık Takibi', 'Sürdürülebilirlik Raporları', 'Hedef Belirleme', 'Performans Analizi', 'Mobil Uygulama'],
    benefits: ['Çevresel Etkiyi Azaltır', 'Maliyetleri Düşürür', 'Sürdürülebilirlik', 'Regülasyon Uyumluluğu']
  },
  {
    id: 'servispozitif',
    name: 'Servis Pozitif',
    shortDescription: 'Teknik Servis Yazılımı',
    longDescription: 'Teknik servis süreçlerinizi dijitalleştirin, müşteri memnuniyetini artırın ve operasyonel verimliliği yükseltin.',
    icon: <Support />,
    color: '#1976d2',
    features: ['Servis Talebi Yönetimi', 'Teknik Ekip Takibi', 'Parça Yönetimi', 'Müşteri İletişimi', 'Raporlama', 'Mobil Uygulama'],
    benefits: ['Servis Kalitesini Artırır', 'Müşteri Memnuniyetini Yükseltir', 'Operasyonel Verimliliği Artırır', 'Maliyetleri Düşürür']
  },
  {
    id: 'lioxerp',
    name: 'Liox ERP',
    shortDescription: 'ERP Yazılımı',
    longDescription: 'Kurumsal kaynak planlama sistemi ile tüm iş süreçlerinizi entegre edin ve verimliliği artırın.',
    icon: <Business />,
    color: '#d32f2f',
    features: ['Finans Yönetimi', 'İnsan Kaynakları', 'Üretim Yönetimi', 'Satış Yönetimi', 'Stok Yönetimi', 'Raporlama'],
    benefits: ['Operasyonel Verimliliği Artırır', 'Maliyetleri Düşürür', 'Veri Tutarlılığı Sağlar', 'Karar Vermeyi İyileştirir']
  },
  {
    id: 'girus',
    name: 'Girus',
    shortDescription: 'Kobi Ticari İş Yazılımı',
    longDescription: 'KOBİler için özel olarak tasarlanmış ticari iş yazılımı ile işletmenizi büyütün.',
    icon: <Store />,
    color: '#7b1fa2',
    features: ['Müşteri Yönetimi', 'Satış Takibi', 'Fatura Yönetimi', 'Stok Kontrolü', 'Raporlama', 'Mobil Uygulama'],
    benefits: ['İş Süreçlerini Hızlandırır', 'Maliyetleri Düşürür', 'Müşteri Memnuniyetini Artırır', 'Büyümeyi Destekler']
  }
];

// Detay sayfaları için kullanılacak data (mevcut yapı)
export const productsData = {
  heysem: {
    name: 'Heysem',
    subtitle: 'Transmisyon Network Yönetim Sistemi',
    description: 'Network altyapınızı 7/24 gerçek zamanlı olarak izler ve performans metriklerini takip eder. Yapay zeka destekli algoritmalar ile arızaları önceden tespit eder.',
    icon: Build,
    features: [
      {
        icon: <NetworkCheck />,
        title: 'Gerçek Zamanlı İzleme',
        description: 'Network altyapınızı 7/24 gerçek zamanlı olarak izler ve performans metriklerini takip eder.'
      },
      {
        icon: <Warning />,
        title: 'Otomatik Arıza Tespiti',
        description: 'Yapay zeka destekli algoritmalar ile arızaları önceden tespit eder ve uyarı verir.'
      },
      {
        icon: <Analytics />,
        title: 'Performans Analizi',
        description: 'Detaylı performans raporları ile network verimliliğinizi analiz eder.'
      },
      {
        icon: <Dashboard />,
        title: 'Merkezi Yönetim Paneli',
        description: 'Tüm network bileşenlerini tek bir panelden yönetmenizi sağlar.'
      },
      {
        icon: <Timeline />,
        title: 'Tarihsel Veri Analizi',
        description: 'Geçmiş verileri analiz ederek trend analizi ve öngörücü bakım sağlar.'
      },
      {
        icon: <Settings />,
        title: 'Otomatik Konfigürasyon',
        description: 'Network ayarlarını otomatik olarak optimize eder ve yapılandırır.'
      }
    ],
    benefits: [
      {
        icon: <TrendingUp />,
        title: 'Network Kesintilerini Önler',
        description: 'Proaktif izleme ve erken uyarı sistemi ile kesintileri minimize eder.'
      },
      {
        icon: <CheckCircle />,
        title: 'Operasyonel Maliyetleri Düşürür',
        description: 'Otomatik yönetim ve optimizasyon ile işletme maliyetlerini azaltır.'
      },
      {
        icon: <Security />,
        title: 'Sistem Güvenilirliğini Artırır',
        description: 'Sürekli izleme ve bakım ile sistem güvenilirliğini maksimize eder.'
      },
      {
        icon: <Speed />,
        title: 'Bakım Sürelerini Kısaltır',
        description: 'Akıllı bakım planlaması ile bakım sürelerini optimize eder.'
      }
    ],
    technicalSpecs: [
      { label: 'Desteklenen Protokoller', value: 'SNMP, NetFlow, sFlow, IPFIX' },
      { label: 'Maksimum Cihaz Sayısı', value: 'Sınırsız' },
      { label: 'Veri Saklama Süresi', value: '10 yıl' },
      { label: 'Raporlama Frekansı', value: 'Gerçek zamanlı' },
      { label: 'API Desteği', value: 'REST, SOAP, GraphQL' },
      { label: 'Güvenlik', value: 'SSL/TLS, VPN, 2FA' }
    ]
  },
  scnms: {
    name: 'SC-NMS',
    subtitle: 'Bilişsel Network Yönetim Sistemi',
    description: 'IoT sensörlerinizi merkezi olarak yönetin ve veri toplama süreçlerinizi optimize edin. SC-NMS ile sensör ağınızı etkin bir şekilde yönetin.',
    icon: Sensors,
    features: [
      {
        icon: <Sensors />,
        title: 'Sensör Entegrasyonu',
        description: 'Çeşitli IoT sensörlerini tek platformda entegre eder.'
      },
      {
        icon: <Analytics />,
        title: 'Veri Toplama',
        description: 'Sensörlerden gelen verileri gerçek zamanlı olarak toplar.'
      },
      {
        icon: <Dashboard />,
        title: 'Merkezi Yönetim',
        description: 'Tüm sensörleri tek bir panelden yönetmenizi sağlar.'
      },
      {
        icon: <Warning />,
        title: 'Alarm Yönetimi',
        description: 'Kritik durumlar için otomatik alarm sistemi.'
      },
      {
        icon: <Timeline />,
        title: 'Raporlama',
        description: 'Detaylı raporlar ile sensör performansını analiz eder.'
      },
      {
        icon: <Settings />,
        title: 'API Desteği',
        description: 'Üçüncü parti sistemlerle entegrasyon için API desteği.'
      }
    ],
    benefits: [
      {
        icon: <TrendingUp />,
        title: 'Operasyonel Verimliliği Artırır',
        description: 'Merkezi yönetim ile operasyonel süreçleri optimize eder.'
      },
      {
        icon: <CheckCircle />,
        title: 'Maliyetleri Düşürür',
        description: 'Otomatik yönetim ile işletme maliyetlerini azaltır.'
      },
      {
        icon: <Security />,
        title: 'Güvenilirliği Artırır',
        description: 'Sürekli izleme ile sistem güvenilirliğini maksimize eder.'
      },
      {
        icon: <Speed />,
        title: 'Hızlı Müdahale',
        description: 'Gerçek zamanlı izleme ile hızlı müdahale imkanı sağlar.'
      }
    ],
    technicalSpecs: [
      { label: 'Desteklenen Sensörler', value: 'Çoklu IoT Sensör' },
      { label: 'Veri Toplama Frekansı', value: 'Gerçek zamanlı' },
      { label: 'Maksimum Sensör Sayısı', value: '10,000+' },
      { label: 'Veri Saklama', value: '7 yıl' },
      { label: 'API Desteği', value: 'REST, MQTT, CoAP' },
      { label: 'Güvenlik', value: 'SSL/TLS, OAuth 2.0' }
    ]
  },
  ofcomto: {
    name: 'Ofcomto',
    subtitle: 'Arıza Etki Analizi Sistemi',
    description: 'Şehir trafiğini optimize edin, kaza riskini azaltın ve ulaşım verimliliğini artırın. Ofcomto ile akıllı şehir çözümleri sunun.',
    icon: DirectionsCar,
    features: [
      {
        icon: <Analytics />,
        title: 'Trafik Analizi',
        description: 'Gerçek zamanlı trafik verilerini analiz eder.'
      },
      {
        icon: <Settings />,
        title: 'Akıllı Sinyalizasyon',
        description: 'Trafik yoğunluğuna göre sinyalizasyonu optimize eder.'
      },
      {
        icon: <Warning />,
        title: 'Kaza Önleme',
        description: 'Yapay zeka ile kaza riskini önceden tespit eder.'
      },
      {
        icon: <Timeline />,
        title: 'Rota Optimizasyonu',
        description: 'En optimal rotaları belirler ve önerir.'
      },
      {
        icon: <Dashboard />,
        title: 'Gerçek Zamanlı İzleme',
        description: 'Trafik durumunu 7/24 izler ve raporlar.'
      },
      {
        icon: <Speed />,
        title: 'Hızlı Müdahale',
        description: 'Acil durumlar için hızlı müdahale sistemi.'
      }
    ],
    benefits: [
      {
        icon: <TrendingUp />,
        title: 'Trafik Akışını İyileştirir',
        description: 'Akıllı yönetim ile trafik akışını optimize eder.'
      },
      {
        icon: <CheckCircle />,
        title: 'Kaza Oranını Azaltır',
        description: 'Proaktif önlemler ile kaza riskini minimize eder.'
      },
      {
        icon: <Security />,
        title: 'Güvenliği Artırır',
        description: 'Sürekli izleme ile güvenlik seviyesini yükseltir.'
      },
      {
        icon: <Speed />,
        title: 'Zaman Tasarrufu',
        description: 'Optimize edilmiş rotalar ile zaman tasarrufu sağlar.'
      }
    ],
    technicalSpecs: [
      { label: 'Kapsama Alanı', value: 'Şehir Geneli' },
      { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
      { label: 'Sensör Sayısı', value: 'Sınırsız' },
      { label: 'Veri Saklama', value: '3 yıl' },
      { label: 'API Desteği', value: 'REST, GraphQL' },
      { label: 'Güvenlik', value: 'SSL/TLS, VPN' }
    ]
  },
  bepower: {
    name: 'BePower',
    subtitle: 'Enerji Yönetim Sistemi',
    description: 'Enerji tüketimini optimize edin, maliyetleri düşürün ve sürdürülebilir enerji çözümleri uygulayın. BePower ile enerji verimliliğinizi artırın.',
    icon: Bolt,
    features: [
      {
        icon: <Analytics />,
        title: 'Enerji İzleme',
        description: 'Enerji tüketimini gerçek zamanlı olarak izler.'
      },
      {
        icon: <Timeline />,
        title: 'Tüketim Analizi',
        description: 'Detaylı tüketim analizi ile verimliliği artırır.'
      },
      {
        icon: <Settings />,
        title: 'Maliyet Optimizasyonu',
        description: 'Enerji maliyetlerini optimize eder ve tasarruf sağlar.'
      },
      {
        icon: <CheckCircle />,
        title: 'Sürdürülebilirlik',
        description: 'Sürdürülebilir enerji çözümleri sunar.'
      },
      {
        icon: <Dashboard />,
        title: 'Raporlama',
        description: 'Kapsamlı raporlar ile enerji performansını analiz eder.'
      },
      {
        icon: <Warning />,
        title: 'Alarm Sistemi',
        description: 'Anormal tüketim durumları için alarm sistemi.'
      }
    ],
    benefits: [
      {
        icon: <TrendingUp />,
        title: 'Enerji Tasarrufu Sağlar',
        description: 'Optimize edilmiş yönetim ile enerji tasarrufu sağlar.'
      },
      {
        icon: <CheckCircle />,
        title: 'Maliyetleri Düşürür',
        description: 'Verimli enerji kullanımı ile maliyetleri azaltır.'
      },
      {
        icon: <Security />,
        title: 'Sürdürülebilirlik',
        description: 'Çevre dostu enerji çözümleri sunar.'
      },
      {
        icon: <Speed />,
        title: 'Hızlı Müdahale',
        description: 'Enerji sorunlarına hızlı müdahale imkanı.'
      }
    ],
    technicalSpecs: [
      { label: 'Enerji Tipi', value: 'Elektrik, Su, Gaz' },
      { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
      { label: 'Raporlama', value: 'Günlük, Haftalık, Aylık' },
      { label: 'Veri Saklama', value: '5 yıl' },
      { label: 'API Desteği', value: 'REST, MQTT' },
      { label: 'Güvenlik', value: 'SSL/TLS, End-to-End Encryption' }
    ]
  },
  nosi: {
    name: 'Nosi',
    subtitle: 'AI Asistan',
    description: 'Yapay zeka destekli asistan ile iş süreçlerinizi otomatikleştirin ve verimliliği artırın. Nosi ile dijital dönüşümünüzü hızlandırın.',
    icon: Person,
    features: [
      {
        icon: <Person />,
        title: 'Doğal Dil İşleme',
        description: 'İnsan benzeri konuşma ve anlama yeteneği.'
      },
      {
        icon: <Analytics />,
        title: 'Otomatik Yanıtlar',
        description: 'Sık sorulan sorulara otomatik yanıt verir.'
      },
      {
        icon: <Timeline />,
        title: 'Süreç Otomasyonu',
        description: 'Rutin iş süreçlerini otomatikleştirir.'
      },
      {
        icon: <Settings />,
        title: 'Öğrenme Algoritması',
        description: 'Kullanıcı etkileşimlerinden öğrenir.'
      },
      {
        icon: <Dashboard />,
        title: 'Entegrasyon',
        description: 'Mevcut sistemlerle kolay entegrasyon.'
      },
      {
        icon: <CheckCircle />,
        title: 'Raporlama',
        description: 'Kullanım istatistiklerini raporlar.'
      }
    ],
    benefits: [
      {
        icon: <TrendingUp />,
        title: 'Operasyonel Verimliliği Artırır',
        description: 'Otomatik süreçler ile verimliliği artırır.'
      },
      {
        icon: <CheckCircle />,
        title: 'Maliyetleri Düşürür',
        description: 'İnsan kaynağı maliyetlerini azaltır.'
      },
      {
        icon: <Security />,
        title: '7/24 Destek',
        description: 'Kesintisiz müşteri desteği sağlar.'
      },
      {
        icon: <Speed />,
        title: 'Hızlı Yanıt',
        description: 'Anında yanıt ile müşteri memnuniyetini artırır.'
      }
    ],
    technicalSpecs: [
      { label: 'Dil Desteği', value: 'Türkçe, İngilizce' },
      { label: 'Yanıt Süresi', value: '< 1 saniye' },
      { label: 'Entegrasyon', value: 'API, Webhook' },
      { label: 'Öğrenme Kapasitesi', value: 'Sınırsız' },
      { label: 'Güvenlik', value: 'SSL/TLS, OAuth 2.0' },
      { label: 'Mobil Uygulama', value: 'iOS, Android' }
    ]
  }
}; 