import {
  SmartToy,
  Computer,
  VisibilityOutlined,
  Album,
  Water,
  Psychology,
  Speed,
  Security,
  AutoAwesome,
  Science,
  Nature
} from '@mui/icons-material';

// AR-GE projeleri için data
export const rndData = [
  {
    id: 'robot',
    title: 'Robot',
    shortDescription: 'İnsansı Robot Geliştirme',
    longDescription: 'İnsansı robot (humanoid) teknolojileri geliştiriyoruz. Yapay zeka destekli hareket, görüntü işleme ve doğal dil işleme yetenekleri ile geleceğin robotlarını tasarlıyoruz.',
    icon: SmartToy,
    color: '#FF6B6B',
    features: [
      {
        title: 'İnsansı Hareket',
        description: 'Doğal insan hareketlerini taklit eden gelişmiş motor kontrol sistemleri',
        icon: Psychology
      },
      {
        title: 'Yapay Zeka Entegrasyonu',
        description: 'Derin öğrenme algoritmaları ile akıllı karar verme yetenekleri',
        icon: AutoAwesome
      },
      {
        title: 'Görüntü İşleme',
        description: 'Gerçek zamanlı görüntü analizi ve nesne tanıma teknolojileri',
        icon: VisibilityOutlined
      },
      {
        title: 'Doğal Dil İşleme',
        description: 'İnsan dilini anlayan ve yanıtlayan gelişmiş NLP sistemleri',
        icon: Psychology
      },
      {
        title: 'Sensör Entegrasyonu',
        description: 'Çoklu sensör verilerini birleştiren füzyon teknolojileri',
        icon: Science
      },
      {
        title: 'Otonom Karar Verme',
        description: 'Çevresel değişikliklere uyum sağlayan akıllı sistemler',
        icon: AutoAwesome
      }
    ],
    benefits: [
      {
        title: 'İnsan-Robot Etkileşimi',
        description: 'Doğal ve güvenli insan-robot iletişimi sağlar',
        icon: Psychology
      },
      {
        title: 'Güvenli Operasyon',
        description: 'Gelişmiş güvenlik protokolleri ile risk-free çalışma',
        icon: Security
      },
      {
        title: 'Esnek Uygulama Alanları',
        description: 'Farklı sektörlerde kullanılabilir modüler tasarım',
        icon: AutoAwesome
      },
      {
        title: 'Sürekli Öğrenme',
        description: 'Deneyimlerden öğrenen adaptif yapay zeka sistemleri',
        icon: Science
      }
    ],
    technicalSpecs: [
      { label: 'İşlemci', value: 'ARM Cortex-A72' },
      { label: 'RAM', value: '8GB LPDDR4' },
      { label: 'Depolama', value: '128GB eMMC' },
      { label: 'Kamera', value: '4K Ultra HD' },
      { label: 'Sensörler', value: 'IMU, Lidar, ToF' },
      { label: 'İletişim', value: 'WiFi 6, Bluetooth 5.0' }
    ],
    stats: [
      { value: '24/7', label: 'Çalışma Süresi' },
      { value: '99.9%', label: 'Güvenilirlik' },
      { value: '50+', label: 'Hareket Yeteneği' }
    ]
  },
  {
    id: 'ai-computer',
    title: 'AI Bilgisayarı',
    shortDescription: 'Yapay Zeka Bilgisayar Donanımı',
    longDescription: 'İHA, İKA, İDA için otonom görev yapmalarını sağlayacak yapay zeka bilgisayar donanımı geliştiriyoruz. Yüksek performanslı işlemci ve özel algoritmalar ile geleceğin AI sistemlerini inşa ediyoruz.',
    icon: Computer,
    color: '#4ECDC4',
    features: [
      {
        title: 'Yüksek Performanslı İşlemci',
        description: 'AI algoritmaları için optimize edilmiş özel işlemci tasarımı',
        icon: Speed
      },
      {
        title: 'Özel AI Algoritmaları',
        description: 'Derin öğrenme ve makine öğrenmesi için özel algoritmalar',
        icon: AutoAwesome
      },
      {
        title: 'Gerçek Zamanlı İşleme',
        description: 'Milisaniye seviyesinde hızlı karar verme yetenekleri',
        icon: Speed
      },
      {
        title: 'Düşük Güç Tüketimi',
        description: 'Enerji verimli tasarım ile uzun süreli operasyon',
        icon: Nature
      },
      {
        title: 'Modüler Tasarım',
        description: 'Farklı uygulamalar için esnek konfigürasyon',
        icon: AutoAwesome
      },
      {
        title: 'Uzaktan Güncelleme',
        description: 'OTA güncellemeler ile sürekli iyileştirme',
        icon: Science
      }
    ],
    benefits: [
      {
        title: 'Otonom Operasyon',
        description: 'İnsan müdahalesi olmadan bağımsız çalışma',
        icon: AutoAwesome
      },
      {
        title: 'Hızlı Karar Verme',
        description: 'Gerçek zamanlı veri analizi ve anında tepki',
        icon: Speed
      },
      {
        title: 'Enerji Verimliliği',
        description: 'Düşük güç tüketimi ile sürdürülebilir operasyon',
        icon: Nature
      },
      {
        title: 'Kolay Entegrasyon',
        description: 'Mevcut sistemlerle uyumlu modüler yapı',
        icon: Science
      }
    ],
    technicalSpecs: [
      { label: 'İşlemci', value: 'ARM Cortex-A78' },
      { label: 'GPU', value: 'Mali-G78 MP14' },
      { label: 'RAM', value: '16GB LPDDR5' },
      { label: 'Depolama', value: '256GB UFS 3.1' },
      { label: 'AI Engine', value: 'Neural Processing Unit' },
      { label: 'Güç Tüketimi', value: '<15W' }
    ],
    stats: [
      { value: '1000+', label: 'TOPS AI Performance' },
      { value: '<10ms', label: 'Tepki Süresi' },
      { value: '24/7', label: 'Çalışma Süresi' }
    ]
  },
  {
    id: 'drone-control',
    title: 'Dron Kontrol',
    shortDescription: 'Otonom Dron Kontrol Sistemi',
    longDescription: 'Tamamen otonom görev tamamlama yetkinlikleri kazandırabilme yazılım ve sensör donanım geliştirme. GPS, görüntü işleme ve yapay zeka ile akıllı dron kontrolü sağlıyoruz.',
    icon: SmartToy,
    color: '#45B7D1',
    features: [
      {
        title: 'Otonom Uçuş',
        description: 'İnsan müdahalesi olmadan bağımsız uçuş yetenekleri',
        icon: AutoAwesome
      },
      {
        title: 'GPS Navigasyon',
        description: 'Yüksek hassasiyetli GPS ile kesin konum belirleme',
        icon: Speed
      },
      {
        title: 'Görüntü İşleme',
        description: 'Gerçek zamanlı görüntü analizi ve nesne tanıma',
        icon: VisibilityOutlined
      },
      {
        title: 'Çarpışma Önleme',
        description: 'Gelişmiş sensörler ile güvenli uçuş sistemi',
        icon: Security
      },
      {
        title: 'Görev Planlama',
        description: 'Akıllı rota optimizasyonu ve görev yönetimi',
        icon: Science
      },
      {
        title: 'Gerçek Zamanlı İzleme',
        description: 'Canlı video akışı ve telemetri verileri',
        icon: Speed
      }
    ],
    benefits: [
      {
        title: 'Güvenli Uçuş',
        description: 'Gelişmiş güvenlik protokolleri ile risk-free operasyon',
        icon: Security
      },
      {
        title: 'Otomatik Görev Tamamlama',
        description: 'Önceden tanımlanmış görevleri otomatik tamamlama',
        icon: AutoAwesome
      },
      {
        title: 'Uzun Menzil',
        description: 'Yüksek verimli batarya ile uzun uçuş süreleri',
        icon: Nature
      },
      {
        title: 'Çoklu Sensör Desteği',
        description: 'IMU, barometre, ultrasonik sensör entegrasyonu',
        icon: Science
      }
    ],
    technicalSpecs: [
      { label: 'İşlemci', value: 'ARM Cortex-A76' },
      { label: 'GPS', value: 'Dual Frequency' },
      { label: 'Kamera', value: '4K 60fps' },
      { label: 'Sensörler', value: 'IMU, Barometer, ToF' },
      { label: 'İletişim', value: 'WiFi 6, 4G LTE' },
      { label: 'Uçuş Süresi', value: '45+ dakika' }
    ],
    stats: [
      { value: '50km', label: 'Maksimum Menzil' },
      { value: '120km/h', label: 'Maksimum Hız' },
      { value: '99.9%', label: 'Güvenilirlik' }
    ]
  },
  {
    id: 'slipring',
    title: 'Slipring',
    shortDescription: '40-120 Kanal Slipring',
    longDescription: '40-120 kanal arası slipring teknolojileri geliştiriyoruz. Yüksek hızda dönen sistemlerde güvenilir veri ve güç aktarımı sağlayan özel tasarım slipring çözümleri.',
    icon: Album,
    color: '#96CEB4',
    features: [
      {
        title: '40-120 Kanal Desteği',
        description: 'Farklı uygulamalar için esnek kanal sayısı seçenekleri',
        icon: AutoAwesome
      },
      {
        title: 'Yüksek Hız Uyumluluğu',
        description: 'Yüksek RPM değerlerinde güvenilir çalışma',
        icon: Speed
      },
      {
        title: 'Güvenilir Bağlantı',
        description: 'Sürekli ve kesintisiz veri/güç aktarımı',
        icon: Security
      },
      {
        title: 'Uzun Ömür',
        description: 'Yüksek kaliteli malzemeler ile uzun servis ömrü',
        icon: Nature
      },
      {
        title: 'Kolay Bakım',
        description: 'Modüler tasarım ile kolay bakım ve onarım',
        icon: Science
      },
      {
        title: 'Özel Tasarım',
        description: 'Müşteri ihtiyaçlarına özel çözümler',
        icon: AutoAwesome
      }
    ],
    benefits: [
      {
        title: 'Kesintisiz Veri Aktarımı',
        description: 'Döner sistemlerde kesintisiz iletişim',
        icon: Speed
      },
      {
        title: 'Düşük Bakım Maliyeti',
        description: 'Uzun ömürlü tasarım ile düşük işletme maliyeti',
        icon: Nature
      },
      {
        title: 'Yüksek Güvenilirlik',
        description: 'Kritik uygulamalarda güvenilir çalışma',
        icon: Security
      },
      {
        title: 'Esnek Konfigürasyon',
        description: 'Farklı uygulamalar için özelleştirilebilir yapı',
        icon: AutoAwesome
      }
    ],
    technicalSpecs: [
      { label: 'Kanal Sayısı', value: '40-120' },
      { label: 'Maksimum RPM', value: '10,000' },
      { label: 'Voltaj', value: '12V-480V' },
      { label: 'Akım', value: '1A-50A' },
      { label: 'Sinyal Frekansı', value: 'DC-10MHz' },
      { label: 'Servis Ömrü', value: '100M+ döngü' }
    ],
    stats: [
      { value: '10,000', label: 'Maksimum RPM' },
      { value: '100M+', label: 'Döngü Ömrü' },
      { value: '99.9%', label: 'Güvenilirlik' }
    ]
  },
  {
    id: 'water-generator',
    title: 'Su Jeneratörü',
    shortDescription: 'Havadaki Nemden İçme Suyu',
    longDescription: 'Havadaki nemden içme suyu üretimi teknolojisi geliştiriyoruz. Sürdürülebilir ve çevre dostu su üretimi ile geleceğin su kaynaklarını oluşturuyoruz.',
    icon: Water,
    color: '#FFEAA7',
    features: [
      {
        title: 'Nem Toplama',
        description: 'Yüksek verimli nem toplama teknolojileri',
        icon: Nature
      },
      {
        title: 'Su Arıtma',
        description: 'Gelişmiş filtreleme ve arıtma sistemleri',
        icon: Science
      },
      {
        title: 'Enerji Verimliliği',
        description: 'Düşük güç tüketimi ile sürdürülebilir operasyon',
        icon: Nature
      },
      {
        title: 'Otomatik Kontrol',
        description: 'Akıllı kontrol sistemleri ile otomatik çalışma',
        icon: AutoAwesome
      },
      {
        title: 'Kalite İzleme',
        description: 'Sürekli su kalitesi kontrolü ve izleme',
        icon: Security
      },
      {
        title: 'Uzaktan Yönetim',
        description: 'IoT teknolojileri ile uzaktan kontrol',
        icon: Speed
      }
    ],
    benefits: [
      {
        title: 'Sürdürülebilir Su Kaynağı',
        description: 'Çevre dostu teknoloji ile sürdürülebilir su üretimi',
        icon: Nature
      },
      {
        title: 'Çevre Dostu Teknoloji',
        description: 'Karbon ayak izi düşük çevre dostu sistem',
        icon: Nature
      },
      {
        title: 'Düşük Enerji Tüketimi',
        description: 'Yüksek verimli enerji kullanımı',
        icon: Nature
      },
      {
        title: 'Yüksek Su Kalitesi',
        description: 'İçme suyu standartlarında kaliteli su üretimi',
        icon: Security
      }
    ],
    technicalSpecs: [
      { label: 'Su Üretimi', value: '10-50L/gün' },
      { label: 'Güç Tüketimi', value: '<500W' },
      { label: 'Nem Oranı', value: '30-90%' },
      { label: 'Sıcaklık', value: '10-40°C' },
      { label: 'Su Kalitesi', value: 'WHO Standartları' },
      { label: 'Ömür', value: '10+ yıl' }
    ],
    stats: [
      { value: '50L/gün', label: 'Maksimum Üretim' },
      { value: '<500W', label: 'Güç Tüketimi' },
      { value: '99.9%', label: 'Su Kalitesi' }
    ]
  },
  {
    id: 'optical-technologies',
    title: 'Optik Teknolojiler',
    shortDescription: 'Gelişmiş Optik Sistemler',
    longDescription: 'Gelişmiş optik teknolojiler ve görüntü işleme sistemleri geliştiriyoruz. Yüksek çözünürlüklü kamera sistemleri, lazer teknolojileri ve spektroskopi çözümleri.',
    icon: VisibilityOutlined,
    color: '#DDA0DD',
    features: [
      {
        title: 'Yüksek Çözünürlük',
        description: 'Ultra yüksek çözünürlüklü görüntü yakalama',
        icon: VisibilityOutlined
      },
      {
        title: 'Lazer Teknolojisi',
        description: 'Gelişmiş lazer sistemleri ve uygulamaları',
        icon: Science
      },
      {
        title: 'Spektroskopi',
        description: 'Hassas spektral analiz teknolojileri',
        icon: Science
      },
      {
        title: 'Görüntü İşleme',
        description: 'Gerçek zamanlı görüntü analizi ve işleme',
        icon: AutoAwesome
      },
      {
        title: 'Uzaktan Algılama',
        description: 'Uzaktan sensör teknolojileri',
        icon: Speed
      },
      {
        title: 'Kalibrasyon',
        description: 'Hassas kalibrasyon ve doğrulama sistemleri',
        icon: Security
      }
    ],
    benefits: [
      {
        title: 'Hassas Ölçüm',
        description: 'Mikron seviyesinde hassas ölçüm yetenekleri',
        icon: Science
      },
      {
        title: 'Yüksek Kalite',
        description: 'Endüstriyel standartlarda yüksek kalite',
        icon: Security
      },
      {
        title: 'Geniş Uygulama Alanı',
        description: 'Farklı sektörlerde kullanılabilir çözümler',
        icon: AutoAwesome
      },
      {
        title: 'Güvenilir Sonuçlar',
        description: 'Tekrarlanabilir ve güvenilir ölçüm sonuçları',
        icon: Security
      }
    ],
    technicalSpecs: [
      { label: 'Çözünürlük', value: '4K-8K' },
      { label: 'FPS', value: '60-120' },
      { label: 'Lazer Gücü', value: '1-1000mW' },
      { label: 'Spektral Aralık', value: '200-2500nm' },
      { label: 'Hassasiyet', value: '±0.1μm' },
      { label: 'Kalibrasyon', value: 'NIST Traceable' }
    ],
    stats: [
      { value: '8K', label: 'Maksimum Çözünürlük' },
      { value: '±0.1μm', label: 'Hassasiyet' },
      { value: '99.9%', label: 'Doğruluk' }
    ]
  }
]; 