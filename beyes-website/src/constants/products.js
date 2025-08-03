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
  },
  besens: {
    name: 'BeSens',
    subtitle: 'Kestirimci Bakım',
    description: 'IoT sensörleri ve yapay zeka ile ekipmanlarınızı izleyin, arızaları önceden tahmin edin. BeSens ile bakım maliyetlerinizi azaltın ve ekipman ömrünü uzatın.',
    icon: Memory,
    features: [
      {
        icon: <Memory />,
        title: 'IoT Sensör Entegrasyonu',
        description: 'Çeşitli IoT sensörlerini entegre ederek ekipman durumunu izler.'
      },
      {
        icon: <Analytics />,
        title: 'Arıza Tahmin Algoritmaları',
        description: 'Yapay zeka destekli algoritmalar ile arızaları önceden tahmin eder.'
      },
      {
        icon: <Timeline />,
        title: 'Planlı Bakım Optimizasyonu',
        description: 'Bakım planlarını optimize ederek maliyetleri azaltır.'
      },
      {
        icon: <Dashboard />,
        title: 'Ekipman Sağlığı İzleme',
        description: 'Ekipmanların sağlık durumunu gerçek zamanlı olarak takip eder.'
      },
      {
        icon: <TrendingUp />,
        title: 'Performans Trend Analizi',
        description: 'Geçmiş verileri analiz ederek performans trendlerini belirler.'
      },
      {
        icon: <Warning />,
        title: 'Otomatik Uyarı Sistemi',
        description: 'Kritik durumlar için otomatik uyarı sistemi.'
      }
    ],
    benefits: [
      {
        icon: <CheckCircle />,
        title: 'Planlanmamış Duruşları Önler',
        description: 'Proaktif bakım ile planlanmamış duruşları minimize eder.'
      },
      {
        icon: <TrendingUp />,
        title: 'Bakım Maliyetlerini Azaltır',
        description: 'Optimize edilmiş bakım planları ile maliyetleri düşürür.'
      },
      {
        icon: <Security />,
        title: 'Ekipman Ömrünü Uzatır',
        description: 'Düzenli bakım ve izleme ile ekipman ömrünü uzatır.'
      },
      {
        icon: <Speed />,
        title: 'Operasyonel Verimliliği Artırır',
        description: 'Kesintisiz operasyon ile verimliliği artırır.'
      }
    ],
    technicalSpecs: [
      { label: 'Sensör Desteği', value: 'Sıcaklık, Titreşim, Basınç, Akım' },
      { label: 'Tahmin Doğruluğu', value: '%95+' },
      { label: 'Veri Saklama', value: '10 yıl' },
      { label: 'API Desteği', value: 'REST, MQTT, OPC UA' },
      { label: 'Güvenlik', value: 'SSL/TLS, End-to-End Encryption' },
             { label: 'Mobil Uygulama', value: 'iOS, Android' }
     ]
   },
   beroad: {
     name: 'BeRoad',
     subtitle: 'Yol Bilgilendirme Sistemi',
     description: 'Akıllı yol bilgilendirme sistemi ile trafik akışını optimize edin ve sürücü deneyimini iyileştirin. BeRoad ile güvenli ve verimli ulaşım sağlayın.',
     icon: DirectionsCar,
     features: [
       {
         icon: <Dashboard />,
         title: 'Gerçek Zamanlı Trafik Bilgisi',
         description: 'Trafik durumunu gerçek zamanlı olarak izler ve raporlar.'
       },
       {
         icon: <Settings />,
         title: 'Dinamik İşaretleme',
         description: 'Trafik durumuna göre dinamik işaretleme sistemi.'
       },
       {
         icon: <Analytics />,
         title: 'Hava Durumu Entegrasyonu',
         description: 'Hava durumu verilerini trafik yönetimine entegre eder.'
       },
       {
         icon: <Warning />,
         title: 'Kaza Uyarıları',
         description: 'Kaza durumlarında otomatik uyarı sistemi.'
       },
       {
         icon: <Timeline />,
         title: 'Rota Önerileri',
         description: 'En optimal rotaları belirler ve önerir.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'Sürücüler için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'Trafik Akışını İyileştirir',
         description: 'Akıllı yönetim ile trafik akışını optimize eder.'
       },
       {
         icon: <Security />,
         title: 'Güvenliği Artırır',
         description: 'Gerçek zamanlı bilgilendirme ile güvenliği artırır.'
       },
       {
         icon: <Speed />,
         title: 'Zaman Tasarrufu Sağlar',
         description: 'Optimize edilmiş rotalar ile zaman tasarrufu sağlar.'
       },
       {
         icon: <CheckCircle />,
         title: 'Sürücü Deneyimini İyileştirir',
         description: 'Kullanıcı dostu arayüz ile sürücü deneyimini iyileştirir.'
       }
     ],
     technicalSpecs: [
       { label: 'Kapsama Alanı', value: 'Şehir Geneli' },
       { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
       { label: 'Sensör Sayısı', value: 'Sınırsız' },
       { label: 'Veri Saklama', value: '5 yıl' },
       { label: 'API Desteği', value: 'REST, GraphQL' },
       { label: 'Güvenlik', value: 'SSL/TLS, VPN' }
     ]
   },
   beflood: {
     name: 'BeFlood',
     subtitle: 'Su Taşkını Önleme ve Bilgilendirme Sistemi',
     description: 'Su seviyesi izleme ve erken uyarı sistemi ile taşkın riskini minimize edin. BeFlood ile can ve mal güvenliğini sağlayın.',
     icon: Nature,
     features: [
       {
         icon: <Analytics />,
         title: 'Su Seviyesi İzleme',
         description: 'Su seviyelerini gerçek zamanlı olarak izler.'
       },
       {
         icon: <Warning />,
         title: 'Erken Uyarı Sistemi',
         description: 'Taşkın riski durumunda erken uyarı sistemi.'
       },
       {
         icon: <Dashboard />,
         title: 'Risk Analizi',
         description: 'Taşkın riskini analiz eder ve değerlendirir.'
       },
       {
         icon: <Timeline />,
         title: 'Otomatik Bildirimler',
         description: 'Kritik durumlar için otomatik bildirim sistemi.'
       },
       {
         icon: <Settings />,
         title: 'Harita Entegrasyonu',
         description: 'Coğrafi bilgi sistemleri ile harita entegrasyonu.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'Vatandaşlar için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <Security />,
         title: 'Taşkın Riskini Azaltır',
         description: 'Erken uyarı sistemi ile taşkın riskini minimize eder.'
       },
       {
         icon: <CheckCircle />,
         title: 'Can Güvenliğini Artırır',
         description: 'Zamanında uyarı ile can güvenliğini artırır.'
       },
       {
         icon: <TrendingUp />,
         title: 'Maddi Kayıpları Önler',
         description: 'Proaktif önlemler ile maddi kayıpları önler.'
       },
       {
         icon: <Speed />,
         title: 'Hızlı Müdahale',
         description: 'Gerçek zamanlı izleme ile hızlı müdahale imkanı.'
       }
     ],
     technicalSpecs: [
       { label: 'Sensör Desteği', value: 'Su Seviyesi, Yağış, Nem' },
       { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
       { label: 'Uyarı Süresi', value: '< 5 dakika' },
       { label: 'Veri Saklama', value: '10 yıl' },
       { label: 'API Desteği', value: 'REST, MQTT' },
       { label: 'Güvenlik', value: 'SSL/TLS, End-to-End Encryption' }
     ]
   },
   bepopup: {
     name: 'BePopup',
     subtitle: 'Online Eğitim ve Sınav Yönetim Yazılımı',
     description: 'Dijital eğitim platformu ile uzaktan eğitim süreçlerinizi yönetin ve öğrenci performansını takip edin. BePopup ile eğitim kalitesini artırın.',
     icon: School,
     features: [
       {
         icon: <Dashboard />,
         title: 'Online Ders Yönetimi',
         description: 'Canlı ve kayıtlı ders yönetimi sistemi.'
       },
       {
         icon: <Analytics />,
         title: 'Sınav Sistemi',
         description: 'Online sınav oluşturma ve değerlendirme sistemi.'
       },
       {
         icon: <Timeline />,
         title: 'Öğrenci Takibi',
         description: 'Öğrenci performansını detaylı olarak takip eder.'
       },
       {
         icon: <Settings />,
         title: 'İçerik Yönetimi',
         description: 'Eğitim içeriklerini organize eder ve yönetir.'
       },
       {
         icon: <CheckCircle />,
         title: 'Raporlama',
         description: 'Detaylı raporlar ile eğitim performansını analiz eder.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'Öğrenciler için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'Eğitim Kalitesini Artırır',
         description: 'İnteraktif özellikler ile eğitim kalitesini artırır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Maliyetleri Düşürür',
         description: 'Uzaktan eğitim ile maliyetleri azaltır.'
       },
       {
         icon: <Security />,
         title: 'Erişilebilirliği Artırır',
         description: '7/24 erişim ile eğitim erişilebilirliğini artırır.'
       },
       {
         icon: <Speed />,
         title: 'Performans Takibi',
         description: 'Gerçek zamanlı performans takibi sağlar.'
       }
     ],
     technicalSpecs: [
       { label: 'Eş Zamanlı Kullanıcı', value: '10,000+' },
       { label: 'Video Kalitesi', value: '4K Ultra HD' },
       { label: 'Sınav Türleri', value: 'Çoktan Seçmeli, Açık Uçlu' },
       { label: 'Veri Saklama', value: 'Sınırsız' },
       { label: 'API Desteği', value: 'REST, WebSocket' },
       { label: 'Güvenlik', value: 'SSL/TLS, 2FA' }
     ]
   },
   ippdu: {
     name: 'IPPDU',
     subtitle: 'Akıllı IP PDU',
     description: 'Akıllı güç dağıtım ünitesi ile enerji yönetimini optimize edin ve güvenliği artırın. IPPDU ile veri merkezi güvenliğini sağlayın.',
     icon: Bolt,
     features: [
       {
         icon: <Settings />,
         title: 'Uzaktan Yönetim',
         description: 'Güç dağıtım ünitelerini uzaktan yönetir.'
       },
       {
         icon: <Analytics />,
         title: 'Güç İzleme',
         description: 'Güç tüketimini gerçek zamanlı olarak izler.'
       },
       {
         icon: <Warning />,
         title: 'Otomatik Kesme',
         description: 'Aşırı yük durumunda otomatik kesme sistemi.'
       },
       {
         icon: <Dashboard />,
         title: 'Alarm Sistemi',
         description: 'Kritik durumlar için alarm sistemi.'
       },
       {
         icon: <Timeline />,
         title: 'Enerji Analizi',
         description: 'Detaylı enerji analizi ve raporlama.'
       },
       {
         icon: <Security />,
         title: 'Güvenlik',
         description: 'Gelişmiş güvenlik protokolleri.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'Enerji Tasarrufu Sağlar',
         description: 'Optimize edilmiş güç yönetimi ile tasarruf sağlar.'
       },
       {
         icon: <Security />,
         title: 'Güvenliği Artırır',
         description: 'Gelişmiş güvenlik özellikleri ile güvenliği artırır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Maliyetleri Düşürür',
         description: 'Verimli enerji kullanımı ile maliyetleri azaltır.'
       },
       {
         icon: <Speed />,
         title: 'Uzaktan Kontrol',
         description: 'Uzaktan yönetim ile operasyonel verimliliği artırır.'
       }
     ],
     technicalSpecs: [
       { label: 'Güç Kapasitesi', value: '1-100kW' },
       { label: 'Voltaj Desteği', value: '110V-480V' },
       { label: 'İzleme Frekansı', value: 'Gerçek zamanlı' },
       { label: 'API Desteği', value: 'SNMP, REST' },
       { label: 'Güvenlik', value: 'SSL/TLS, SSH' },
       { label: 'Mobil Uygulama', value: 'iOS, Android' }
     ]
   },
   smartwork: {
     name: 'Smart Work',
     subtitle: 'Carbon Ayakizi ve Atık Takibi',
     description: 'Sürdürülebilirlik odaklı çözümler ile karbon ayak izinizi azaltın ve atık yönetimini optimize edin. Smart Work ile çevresel etkinizi minimize edin.',
     icon: Nature,
     features: [
       {
         icon: <Analytics />,
         title: 'Karbon Ayak İzi Hesaplama',
         description: 'Karbon ayak izini otomatik olarak hesaplar.'
       },
       {
         icon: <Timeline />,
         title: 'Atık Takibi',
         description: 'Atık üretimini ve yönetimini takip eder.'
       },
       {
         icon: <Dashboard />,
         title: 'Sürdürülebilirlik Raporları',
         description: 'Detaylı sürdürülebilirlik raporları oluşturur.'
       },
       {
         icon: <Settings />,
         title: 'Hedef Belirleme',
         description: 'Sürdürülebilirlik hedefleri belirler ve takip eder.'
       },
       {
         icon: <TrendingUp />,
         title: 'Performans Analizi',
         description: 'Çevresel performansı analiz eder ve raporlar.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'Çalışanlar için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <Nature />,
         title: 'Çevresel Etkiyi Azaltır',
         description: 'Sürdürülebilir uygulamalar ile çevresel etkiyi azaltır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Maliyetleri Düşürür',
         description: 'Verimli kaynak kullanımı ile maliyetleri azaltır.'
       },
       {
         icon: <Security />,
         title: 'Sürdürülebilirlik',
         description: 'Sürdürülebilir iş süreçleri oluşturur.'
       },
       {
         icon: <TrendingUp />,
         title: 'Regülasyon Uyumluluğu',
         description: 'Çevresel regülasyonlara uyumluluğu sağlar.'
       }
     ],
     technicalSpecs: [
       { label: 'Karbon Hesaplama', value: 'ISO 14064 Uyumlu' },
       { label: 'Atık Kategorileri', value: '10+ Kategori' },
       { label: 'Raporlama', value: 'Günlük, Haftalık, Aylık' },
       { label: 'Veri Saklama', value: '10 yıl' },
       { label: 'API Desteği', value: 'REST, GraphQL' },
       { label: 'Güvenlik', value: 'SSL/TLS, OAuth 2.0' }
     ]
   },
   servispozitif: {
     name: 'Servis Pozitif',
     subtitle: 'Teknik Servis Yazılımı',
     description: 'Teknik servis süreçlerinizi dijitalleştirin, müşteri memnuniyetini artırın ve operasyonel verimliliği yükseltin. Servis Pozitif ile servis kalitesini artırın.',
     icon: Support,
     features: [
       {
         icon: <Dashboard />,
         title: 'Servis Talebi Yönetimi',
         description: 'Servis taleplerini merkezi olarak yönetir.'
       },
       {
         icon: <Timeline />,
         title: 'Teknik Ekip Takibi',
         description: 'Teknik ekiplerin konum ve durumunu takip eder.'
       },
       {
         icon: <Settings />,
         title: 'Parça Yönetimi',
         description: 'Servis parçalarını stok ve sipariş yönetimi.'
       },
       {
         icon: <Analytics />,
         title: 'Müşteri İletişimi',
         description: 'Müşterilerle otomatik iletişim sistemi.'
       },
       {
         icon: <CheckCircle />,
         title: 'Raporlama',
         description: 'Detaylı servis raporları oluşturur.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'Teknik ekipler için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'Servis Kalitesini Artırır',
         description: 'Dijital süreçler ile servis kalitesini artırır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Müşteri Memnuniyetini Yükseltir',
         description: 'Hızlı ve kaliteli servis ile memnuniyeti artırır.'
       },
       {
         icon: <Security />,
         title: 'Operasyonel Verimliliği Artırır',
         description: 'Otomatik süreçler ile verimliliği artırır.'
       },
       {
         icon: <Speed />,
         title: 'Maliyetleri Düşürür',
         description: 'Optimize edilmiş süreçler ile maliyetleri azaltır.'
       }
     ],
     technicalSpecs: [
       { label: 'Eş Zamanlı Kullanıcı', value: '1,000+' },
       { label: 'Servis Türleri', value: 'Sınırsız' },
       { label: 'Mobil Destek', value: 'iOS, Android' },
       { label: 'Veri Saklama', value: '10 yıl' },
       { label: 'API Desteği', value: 'REST, SOAP' },
       { label: 'Güvenlik', value: 'SSL/TLS, 2FA' }
     ]
   },
   lioxerp: {
     name: 'Liox ERP',
     subtitle: 'ERP Yazılımı',
     description: 'Kurumsal kaynak planlama sistemi ile tüm iş süreçlerinizi entegre edin ve verimliliği artırın. Liox ERP ile dijital dönüşümünüzü hızlandırın.',
     icon: Business,
     features: [
       {
         icon: <Analytics />,
         title: 'Finans Yönetimi',
         description: 'Kapsamlı finans ve muhasebe yönetimi.'
       },
       {
         icon: <Timeline />,
         title: 'İnsan Kaynakları',
         description: 'Personel yönetimi ve bordro süreçleri.'
       },
       {
         icon: <Settings />,
         title: 'Üretim Yönetimi',
         description: 'Üretim planlama ve kontrol sistemi.'
       },
       {
         icon: <Dashboard />,
         title: 'Satış Yönetimi',
         description: 'Müşteri ve satış süreçleri yönetimi.'
       },
       {
         icon: <CheckCircle />,
         title: 'Stok Yönetimi',
         description: 'Envanter ve stok kontrol sistemi.'
       },
       {
         icon: <Speed />,
         title: 'Raporlama',
         description: 'Kapsamlı iş raporları ve analizler.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'Operasyonel Verimliliği Artırır',
         description: 'Entegre süreçler ile operasyonel verimliliği artırır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Maliyetleri Düşürür',
         description: 'Optimize edilmiş süreçler ile maliyetleri azaltır.'
       },
       {
         icon: <Security />,
         title: 'Veri Tutarlılığı Sağlar',
         description: 'Merkezi veri yönetimi ile tutarlılık sağlar.'
       },
       {
         icon: <Speed />,
         title: 'Karar Vermeyi İyileştirir',
         description: 'Gerçek zamanlı veriler ile karar vermeyi iyileştirir.'
       }
     ],
     technicalSpecs: [
       { label: 'Modül Sayısı', value: '20+ Modül' },
       { label: 'Eş Zamanlı Kullanıcı', value: '10,000+' },
       { label: 'Veri Saklama', value: 'Sınırsız' },
       { label: 'API Desteği', value: 'REST, SOAP, GraphQL' },
       { label: 'Güvenlik', value: 'SSL/TLS, 2FA, VPN' },
       { label: 'Mobil Uygulama', value: 'iOS, Android' }
     ]
   },
   girus: {
     name: 'Girus',
     subtitle: 'Kobi Ticari İş Yazılımı',
     description: 'KOBİler için özel olarak tasarlanmış ticari iş yazılımı ile işletmenizi büyütün. Girus ile iş süreçlerinizi dijitalleştirin.',
     icon: Store,
     features: [
       {
         icon: <Dashboard />,
         title: 'Müşteri Yönetimi',
         description: 'Müşteri bilgilerini ve ilişkilerini yönetir.'
       },
       {
         icon: <Timeline />,
         title: 'Satış Takibi',
         description: 'Satış süreçlerini ve performansını takip eder.'
       },
       {
         icon: <Settings />,
         title: 'Fatura Yönetimi',
         description: 'Fatura oluşturma ve takip sistemi.'
       },
       {
         icon: <Analytics />,
         title: 'Stok Kontrolü',
         description: 'Envanter ve stok yönetimi sistemi.'
       },
       {
         icon: <CheckCircle />,
         title: 'Raporlama',
         description: 'İş performansı raporları ve analizler.'
       },
       {
         icon: <Speed />,
         title: 'Mobil Uygulama',
         description: 'İşletme sahipleri için mobil uygulama desteği.'
       }
     ],
     benefits: [
       {
         icon: <TrendingUp />,
         title: 'İş Süreçlerini Hızlandırır',
         description: 'Dijital süreçler ile iş hızını artırır.'
       },
       {
         icon: <CheckCircle />,
         title: 'Maliyetleri Düşürür',
         description: 'Otomatik süreçler ile maliyetleri azaltır.'
       },
       {
         icon: <Security />,
         title: 'Müşteri Memnuniyetini Artırır',
         description: 'Hızlı ve kaliteli hizmet ile memnuniyeti artırır.'
       },
       {
         icon: <Speed />,
         title: 'Büyümeyi Destekler',
         description: 'Ölçeklenebilir yapı ile büyümeyi destekler.'
       }
     ],
     technicalSpecs: [
       { label: 'Kullanıcı Sayısı', value: '1-100 Kullanıcı' },
       { label: 'Modül Sayısı', value: '10+ Modül' },
       { label: 'Veri Saklama', value: '10 yıl' },
       { label: 'API Desteği', value: 'REST, SOAP' },
       { label: 'Güvenlik', value: 'SSL/TLS, 2FA' },
       { label: 'Mobil Uygulama', value: 'iOS, Android' }
     ]
   }
 }; 