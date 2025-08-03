import PieChart from '@mui/icons-material/PieChart';
import Star from '@mui/icons-material/Star';
import Description from '@mui/icons-material/Description';
import Group from '@mui/icons-material/Group';
import TrackChanges from '@mui/icons-material/TrackChanges';
import Visibility from '@mui/icons-material/Visibility';
import Flight from '@mui/icons-material/Flight';
import Psychology from '@mui/icons-material/Psychology';
import Dns from '@mui/icons-material/Dns';
import Work from '@mui/icons-material/Work';
import Build from '@mui/icons-material/Build';
import Sensors from '@mui/icons-material/Sensors';
import DirectionsCar from '@mui/icons-material/DirectionsCar';
import Bolt from '@mui/icons-material/Bolt';
import Person from '@mui/icons-material/Person';
import Memory from '@mui/icons-material/Memory';
import Lightbulb from '@mui/icons-material/Lightbulb';
import Inventory from '@mui/icons-material/Inventory';
import SmartToy from '@mui/icons-material/SmartToy';
import Album from '@mui/icons-material/Album';
import Water from '@mui/icons-material/Water';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import Computer from '@mui/icons-material/Computer';
import Favorite from '@mui/icons-material/Favorite';
import GroupWork from '@mui/icons-material/GroupWork';

export const navItems = [
  { 
    label: 'Hakkımızda', 
    href: '/about',
    submenu: [
      { 
        label: 'Üyelikler ve İş Ortaklıklarımız', 
        href: '/about#partnerships',
        icon: <PieChart />
      },
      { 
        label: 'Kalite ve KVKK Politikamız', 
        href: '/about#policies',
        icon: <Star />
      },
      { 
        label: 'Belgelerimiz', 
        href: '/about#documents',
        icon: <Description />
      },
      { 
        label: 'Biz Kimiz?', 
        href: '/about#who-are-we',
        icon: <Group />
      },
      { 
        label: 'Misyon', 
        href: '/about#mission',
        icon: <TrackChanges />
      },
      { 
        label: 'Vizyon', 
        href: '/about#vision',
        icon: <Visibility />
      }
    ]
  },
  { 
    label: 'Çözümler', 
    href: '/solutions',
    submenu: [
      { 
        label: 'Savunma ve Havacılık', 
        href: '/solutions/defense',
        icon: <Flight />
      },
      { 
        label: 'Yapay Zeka Teknolojileri', 
        href: '/solutions/ai',
        icon: <Psychology />
      },
      { 
        label: 'Bilgi ve İletişim Teknolojileri', 
        href: '/solutions/ict',
        icon: <Dns />
      },
      { 
        label: 'Profesyonel Servisler', 
        href: '/solutions/professional-services',
        icon: <Work />
      }
    ]
  },
  { 
    label: 'Ürünler', 
    href: '/products',
    submenu: [
      { 
        label: 'Heysem', 
        href: '/products/heysem',
        icon: <Build />
      },
      { 
        label: 'SC-NMS', 
        href: '/products/sc-nms',
        icon: <Sensors />
      },
      { 
        label: 'Ofcomto', 
        href: '/products/ofcomto',
        icon: <DirectionsCar />
      },
      { 
        label: 'BePower', 
        href: '/products/bepower',
        icon: <Bolt />
      },
      { 
        label: 'Nosi', 
        href: '/products/nosi',
        icon: <Person />
      },
      { 
        label: 'BeSens', 
        href: '/products/besens',
        icon: <Memory />
      },
      { 
        label: 'BeRoad', 
        href: '/products/beroad',
        icon: <Lightbulb />
      },
      { 
        label: 'BeFlood', 
        href: '/products/beflood',
        icon: <Inventory />
      },
      { 
        label: 'BePopup', 
        href: '/products/bepopup',
        icon: <SmartToy />
      },
      { 
        label: 'IPPDU', 
        href: '/products/ippdu',
        icon: <Album />
      },
      { 
        label: 'Smart Work', 
        href: '/products/smart-work',
        icon: <Water />
      },
      { 
        label: 'Servis Pozitif', 
        href: '/products/servis-pozitif',
        icon: <VisibilityOutlined />
      },
      { 
        label: 'Liox ERP', 
        href: '/products/liox-erp',
        icon: <Computer />
      },
      { 
        label: 'Girus', 
        href: '/products/girus',
        icon: <Favorite />
      }
    ]
  },
  { 
    label: 'AR-GE', 
    href: '/ar-ge',
    submenu: [
      { 
        label: 'Dron Kontrol', 
        href: '/ar-ge/drone-control',
        icon: <SmartToy />
      },
      { 
        label: 'Robot', 
        href: '/ar-ge/robot',
        icon: <SmartToy />
      },
      { 
        label: 'Slipring', 
        href: '/ar-ge/slipring',
        icon: <Album />
      },
      { 
        label: 'Su Jeneratörü', 
        href: '/ar-ge/water-generator',
        icon: <Water />
      },
      { 
        label: 'Optik Teknolojiler', 
        href: '/ar-ge/optical-tech',
        icon: <VisibilityOutlined />
      },
      { 
        label: 'Al Bilgisayari', 
        href: '/ar-ge/ai-computer',
        icon: <Computer />
      }
    ]
  },
  { 
    label: 'Kariyer', 
    href: '/career/life-at-beyes',
    submenu: [
      { 
        label: 'Beyes\'te Yaşam', 
        href: '/career/life-at-beyes',
        icon: <Favorite />
      },
      { 
        label: 'Beyes\'li Olmak', 
        href: '/career/being-a-part-of-beyes',
        icon: <GroupWork />
      }
    ]
  },
  { label: 'Referanslar', href: '/references' },
  { label: 'Blog', href: '/blog' },
  { label: 'İletişim', href: '/iletisim' }
]; 