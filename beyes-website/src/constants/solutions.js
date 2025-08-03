// Solutions sayfaları için constants
import {
  Memory,
  Analytics,
  Settings,
  Computer,
  Cloud,
  Api,
  Security,
  Timeline,
  Dashboard,
  Sensors,
  Person,
  Build,
  Business,
  NetworkCheck,
  Power,
  Transform
} from '@mui/icons-material';

export const aiSolutionsData = [
  {
    id: 'alarm-prediction',
    title: 'Alarm Tahminleme',
    icon: <Memory />,
    shortDescription: 'Gelişmiş algoritmalar ile sistem alarmlarını önceden tahmin edin',
    longDescription: 'Yapay zeka destekli alarm tahminleme sistemleri ile kritik durumları önceden tespit ederek proaktif önlemler alabilirsiniz. Makine öğrenmesi algoritmaları ile sistem davranışlarını analiz ederek olası arızaları önceden belirliyoruz.',
    features: [
      'Gerçek zamanlı veri analizi',
      'Makine öğrenmesi algoritmaları',
      'Proaktif uyarı sistemi',
      'Yüksek doğruluk oranı'
    ],
    benefits: [
      'Planlanmamış duruşları önler',
      'Bakım maliyetlerini azaltır',
      'Sistem güvenilirliğini artırır',
      'Operasyonel verimliliği yükseltir'
    ]
  },
  {
    id: 'anomaly-detection',
    title: 'Anomali Tespiti',
    icon: <Analytics />,
    shortDescription: 'Anormal durumları otomatik olarak tespit edin',
    longDescription: 'Gelişmiş anomali tespit sistemleri ile normal davranış kalıplarından sapan durumları otomatik olarak belirliyoruz. Bu teknoloji güvenlik, kalite kontrol ve sistem izleme alanlarında kritik öneme sahiptir.',
    features: [
      'Gerçek zamanlı anomali tespiti',
      'Çok boyutlu veri analizi',
      'Adaptif öğrenme algoritmaları',
      'Otomatik uyarı sistemi'
    ],
    benefits: [
      'Güvenlik tehditlerini erken tespit eder',
      'Kalite sorunlarını önceden belirler',
      'Sistem performansını optimize eder',
      'İnsan hatalarını minimize eder'
    ]
  },
  {
    id: 'predictive-maintenance',
    title: 'Kestirimci Bakım',
    icon: <Settings />,
    shortDescription: 'Ekipman arızalarını önceden tahmin edin',
    longDescription: 'Kestirimci bakım teknolojileri ile ekipmanlarınızın durumunu sürekli izleyerek olası arızaları önceden tespit ediyoruz. Bu sayede planlı bakım programları oluşturarak maliyetleri optimize edebilirsiniz.',
    features: [
      'IoT sensör entegrasyonu',
      'Makine öğrenmesi modelleri',
      'Durum izleme sistemi',
      'Bakım planlama algoritmaları'
    ],
    benefits: [
      'Beklenmeyen arızaları önler',
      'Bakım maliyetlerini %30 azaltır',
      'Ekipman ömrünü uzatır',
      'Operasyonel sürekliliği sağlar'
    ]
  },
  {
    id: 'ai-assistant',
    title: 'Yapay Zeka Asistanı',
    icon: <Computer />,
    shortDescription: 'Akıllı dijital asistanlar ile verimliliği artırın',
    longDescription: 'Doğal dil işleme teknolojileri ile geliştirilmiş yapay zeka asistanları ile müşteri hizmetleri, veri analizi ve günlük iş süreçlerinizi otomatikleştirebilirsiniz.',
    features: [
      'Doğal dil işleme',
      'Çok dilli destek',
      'Öğrenme ve adaptasyon',
      'Entegrasyon kolaylığı'
    ],
    benefits: [
      'Müşteri hizmetlerini 7/24 destekler',
      'İş süreçlerini otomatikleştirir',
      'Operasyonel maliyetleri düşürür',
      'Kullanıcı deneyimini iyileştirir'
    ]
  }
];

export const defenseSolutionsData = [
  {
    id: 'card-test-boxes',
    title: 'Kart Test Kutuları ve Rack Test Sistemleri',
    icon: <Memory />,
    shortDescription: 'Savunma sektörü için özel test sistemleri ve kart test kutuları',
    longDescription: 'Savunma ve havacılık sektöründe kullanılan elektronik kartların test edilmesi için özel olarak tasarlanmış test kutuları ve rack test sistemleri. Yüksek hassasiyetli ölçümler ve güvenilir test sonuçları sağlıyoruz.',
    features: [
      'Yüksek hassasiyetli ölçümler',
      'Otomatik test süreçleri',
      'Gerçek zamanlı veri analizi',
      'Çoklu test protokolü desteği'
    ],
    benefits: [
      'Test sürelerini %60 azaltır',
      'Test doğruluğunu artırır',
      'Operasyonel maliyetleri düşürür',
      'Kalite güvencesini sağlar'
    ]
  },
  {
    id: 'rigid-flex-designs',
    title: 'Rigid ve Flex Kart Tasarımları',
    icon: <Settings />,
    shortDescription: 'Savunma sektörü için özel rigid ve flex PCB tasarımları',
    longDescription: 'Savunma ve havacılık uygulamaları için özel olarak tasarlanmış rigid ve flex PCB çözümleri. Yüksek frekans, düşük gürültü ve uzun ömürlü tasarımlar ile kritik sistemleriniz için güvenilir çözümler sunuyoruz.',
    features: [
      'Yüksek frekans tasarımı',
      'Düşük gürültü optimizasyonu',
      'Termal yönetim',
      'EMI/EMC uyumluluğu'
    ],
    benefits: [
      'Sistem performansını artırır',
      'Güvenilirliği yükseltir',
      'Bakım maliyetlerini azaltır',
      'Uzun ömürlü çözümler'
    ]
  },
  {
    id: 'embedded-software',
    title: 'Gömülü Yazılım',
    icon: <Build />,
    shortDescription: 'Savunma sistemleri için güvenli gömülü yazılım çözümleri',
    longDescription: 'Savunma ve havacılık sistemleri için özel olarak geliştirilmiş gömülü yazılım çözümleri. Gerçek zamanlı işletim sistemleri, güvenlik protokolleri ve kritik sistem yazılımları ile sistemlerinizi güçlendiriyoruz.',
    features: [
      'Gerçek zamanlı işletim sistemleri',
      'Güvenlik protokolleri',
      'Kritik sistem yazılımları',
      'Otomatik güncelleme sistemi'
    ],
    benefits: [
      'Sistem güvenliğini artırır',
      'Operasyonel verimliliği yükseltir',
      'Bakım sürelerini kısaltır',
      'Sistem güvenilirliğini sağlar'
    ]
  },
  {
    id: 'iot-sensors',
    title: 'IoT Sensör Tasarım ve Üretimi',
    icon: <Sensors />,
    shortDescription: 'Savunma uygulamaları için özel IoT sensör çözümleri',
    longDescription: 'Savunma ve havacılık sektörü için özel olarak tasarlanmış IoT sensör çözümleri. Çevresel koşullara dayanıklı, yüksek hassasiyetli ve güvenilir sensör sistemleri ile kritik verileri topluyoruz.',
    features: [
      'Çevresel koşullara dayanıklılık',
      'Yüksek hassasiyet',
      'Düşük güç tüketimi',
      'Kablosuz iletişim'
    ],
    benefits: [
      'Gerçek zamanlı veri toplama',
      'Güvenilir sistem izleme',
      'Düşük bakım gereksinimi',
      'Uzun ömürlü performans'
    ]
  }
];

export const ictSolutionsData = [
  {
    id: 'erp',
    title: 'ERP - Kurumsal Kaynak Planlama',
    icon: <Business />,
    shortDescription: 'Kurumsal kaynaklarınızı optimize eden entegre yönetim sistemleri',
    longDescription: 'Kurumunuzun tüm iş süreçlerini tek bir platformda birleştiren ERP çözümleri ile finans, insan kaynakları, üretim ve satış süreçlerinizi entegre olarak yönetebilirsiniz. Verimliliği artırın ve maliyetleri optimize edin.',
    features: [
      'Modüler yapı',
      'Gerçek zamanlı raporlama',
      'Çok kullanıcılı erişim',
      'Mobil uyumluluk'
    ],
    benefits: [
      'İş süreçlerini %40 hızlandırır',
      'Operasyonel maliyetleri azaltır',
      'Veri tutarlılığını sağlar',
      'Karar verme sürecini iyileştirir'
    ]
  },
  {
    id: 'network-management',
    title: 'Network Yönetim Sistemleri',
    icon: <NetworkCheck />,
    shortDescription: 'Ağ altyapınızı merkezi olarak yönetin ve izleyin',
    longDescription: 'Kurumsal ağ altyapınızı tek bir noktadan yönetebileceğiniz gelişmiş network yönetim sistemleri. Performans izleme, güvenlik yönetimi ve otomatik yapılandırma ile ağınızı optimize edin.',
    features: [
      'Merkezi yönetim paneli',
      'Gerçek zamanlı izleme',
      'Otomatik yedekleme',
      'Güvenlik protokolleri'
    ],
    benefits: [
      'Ağ kesintilerini %90 azaltır',
      'Güvenlik tehditlerini önceden tespit eder',
      'Yönetim maliyetlerini düşürür',
      'Sistem performansını artırır'
    ]
  },
  {
    id: 'energy-management',
    title: 'Enerji Yönetim Sistemleri',
    icon: <Power />,
    shortDescription: 'Enerji tüketiminizi optimize edin ve maliyetleri düşürün',
    longDescription: 'Akıllı enerji yönetim sistemleri ile enerji tüketiminizi analiz edin, optimize edin ve tasarruf sağlayın. IoT sensörleri ve yapay zeka teknolojileri ile enerji verimliliğinizi maksimuma çıkarın.',
    features: [
      'IoT sensör entegrasyonu',
      'Gerçek zamanlı analiz',
      'Otomatik optimizasyon',
      'Detaylı raporlama'
    ],
    benefits: [
      'Enerji maliyetlerini %25 azaltır',
      'Karbon ayak izini küçültür',
      'Sürdürülebilirlik hedeflerine ulaşır',
      'Operasyonel verimliliği artırır'
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Dijital Dönüşüm',
    icon: <Transform />,
    shortDescription: 'Kurumunuzu dijital çağa hazırlayın',
    longDescription: 'Kurumunuzun dijital dönüşüm sürecini planlayın ve uygulayın. Mevcut sistemlerinizi modern teknolojilerle entegre ederek rekabet avantajı elde edin. Dijital kültür oluşturun ve sürekli iyileştirme sağlayın.',
    features: [
      'Strateji geliştirme',
      'Süreç optimizasyonu',
      'Teknoloji entegrasyonu',
      'Değişim yönetimi'
    ],
    benefits: [
      'Müşteri deneyimini iyileştirir',
      'Operasyonel verimliliği artırır',
      'Yeni iş modelleri oluşturur',
      'Rekabet avantajı sağlar'
    ]
  }
];

export const professionalServicesData = [
  {
    id: 'technical-consulting',
    title: 'Teknik Danışmanlık',
    icon: <Person />,
    shortDescription: 'Uzman teknik danışmanlık hizmetleri ile projelerinizi destekleyin',
    longDescription: 'Deneyimli ekibimiz ile projelerinizde teknik danışmanlık hizmetleri sunuyoruz. Sistem analizi, mimari tasarım, teknoloji seçimi ve proje yönetimi konularında uzman desteği sağlıyoruz.',
    features: [
      'Sistem analizi ve tasarım',
      'Teknoloji seçimi',
      'Mimari danışmanlık',
      'Performans optimizasyonu'
    ],
    benefits: [
      'Proje başarı oranını artırır',
      'Teknik riskleri azaltır',
      'Maliyet optimizasyonu sağlar',
      'Zaman tasarrufu sağlar'
    ]
  },
  {
    id: 'project-management',
    title: 'Proje Yönetimi',
    icon: <Timeline />,
    shortDescription: 'Profesyonel proje yönetimi hizmetleri',
    longDescription: 'Agile ve Waterfall metodolojileri ile projelerinizi profesyonel şekilde yönetiyoruz. Risk yönetimi, kaynak planlama ve kalite kontrol süreçlerinde uzmanlık sağlıyoruz.',
    features: [
      'Agile ve Waterfall metodolojileri',
      'Risk yönetimi',
      'Kaynak planlama',
      'Kalite kontrol'
    ],
    benefits: [
      'Proje teslim sürelerini kısaltır',
      'Maliyet kontrolü sağlar',
      'Kalite standartlarını yükseltir',
      'Stakeholder memnuniyetini artırır'
    ]
  },
  {
    id: 'training-services',
    title: 'Eğitim Hizmetleri',
    icon: <Dashboard />,
    shortDescription: 'Kapsamlı eğitim ve sertifikasyon programları',
    longDescription: 'Teknoloji eğitimleri, sertifikasyon programları ve özel eğitim çözümleri ile ekibinizin yetkinliklerini artırıyoruz. Online ve yüz yüze eğitim seçenekleri sunuyoruz.',
    features: [
      'Teknoloji eğitimleri',
      'Sertifikasyon programları',
      'Özel eğitim çözümleri',
      'Online ve yüz yüze eğitim'
    ],
    benefits: [
      'Ekip yetkinliklerini artırır',
      'Operasyonel verimliliği yükseltir',
      'Teknoloji adaptasyonunu hızlandırır',
      'Kurumsal bilgi birikimini artırır'
    ]
  },
  {
    id: 'system-integration',
    title: 'Sistem Entegrasyonu',
    icon: <Api />,
    shortDescription: 'Karmaşık sistemleri entegre edin ve optimize edin',
    longDescription: 'Farklı teknolojileri ve sistemleri tek bir platformda entegre ediyoruz. API entegrasyonu, veri senkronizasyonu ve sistem optimizasyonu ile iş süreçlerinizi streamline ediyoruz.',
    features: [
      'API entegrasyonu',
      'Veri senkronizasyonu',
      'Sistem optimizasyonu',
      'Performans tuning'
    ],
    benefits: [
      'Sistem uyumluluğunu sağlar',
      'Veri tutarlılığını artırır',
      'Operasyonel verimliliği yükseltir',
      'Bakım maliyetlerini azaltır'
    ]
  }
];

export const solutionsPageData = [
  {
    id: 'ai-technologies',
    name: 'Yapay Zeka Teknolojileri',
    shortDescription: 'Akıllı çözümler ile iş süreçlerinizi optimize edin',
    longDescription: 'Yapay zeka ve makine öğrenmesi teknolojileri ile iş süreçlerinizi otomatikleştirin, verimliliği artırın ve rekabet avantajı elde edin.',
    icon: <Memory />,
    color: '#1976d2',
    features: ['Alarm Tahminleme', 'Anomali Tespiti', 'Kestirimci Bakım', 'Yapay Zeka Asistanı', 'Veri Analizi', 'Otomatik Karar Verme'],
    benefits: ['Operasyonel Verimliliği Artırır', 'Maliyetleri Düşürür', 'Hata Oranını Azaltır', 'Sürekli Öğrenme']
  },
  {
    id: 'defense-technologies',
    name: 'Savunma Teknolojileri',
    shortDescription: 'Güvenlik ve savunma alanında yenilikçi çözümler',
    longDescription: 'Savunma sektörü için özel olarak geliştirilmiş teknolojik çözümler ile güvenlik ve savunma alanlarında liderlik edin.',
    icon: <Security />,
    color: '#d32f2f',
    features: ['Sistem Entegrasyonu', 'Güvenlik Analizi', 'Tehdit Tespiti', 'Komuta Kontrol', 'Simülasyon', 'Test Sistemleri'],
    benefits: ['Güvenliği Artırır', 'Operasyonel Hazırlığı Destekler', 'Teknoloji Bağımsızlığı Sağlar', 'Ulusal Güvenliği Destekler']
  },
  {
    id: 'ict-technologies',
    name: 'ICT Teknolojileri',
    shortDescription: 'Bilgi ve iletişim teknolojileri çözümleri',
    longDescription: 'Modern bilgi ve iletişim teknolojileri ile altyapınızı güçlendirin, iletişimi optimize edin ve dijital dönüşümü hızlandırın.',
    icon: <Cloud />,
    color: '#388e3c',
    features: ['Network Yönetimi', 'Veri Merkezi', 'Cloud Computing', 'Siber Güvenlik', 'IoT Çözümleri', '5G Teknolojileri'],
    benefits: ['Bağlantı Hızını Artırır', 'Güvenliği Sağlar', 'Maliyetleri Optimize Eder', 'Ölçeklenebilirlik Sağlar']
  },
  {
    id: 'professional-services',
    name: 'Profesyonel Hizmetler',
    shortDescription: 'Uzman danışmanlık ve teknik destek hizmetleri',
    longDescription: 'Deneyimli ekibimiz ile projelerinizde size özel danışmanlık, teknik destek ve eğitim hizmetleri sunuyoruz.',
    icon: <Person />,
    color: '#f57c00',
    features: ['Teknik Danışmanlık', 'Proje Yönetimi', 'Eğitim Hizmetleri', 'Sistem Entegrasyonu', 'Bakım ve Destek', 'Performans Optimizasyonu'],
    benefits: ['Uzmanlık Sağlar', 'Proje Başarısını Artırır', 'Maliyetleri Kontrol Eder', 'Sürekli Destek']
  }
]; 