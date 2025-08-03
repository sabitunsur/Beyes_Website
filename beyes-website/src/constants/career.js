// Career sayfaları için constants
import takim from '../assets/image/career/takim.png';
import collaborate from '../assets/image/career/collaborate.png';
import company from '../assets/image/career/company.png';
import yasam from '../assets/image/career/yaşam.png';
import staj from '../assets/image/career/staj.jpg';
import is from '../assets/image/career/iş.jpg';
import basvuru from '../assets/image/career/basvuru.jpg';

export const careerPageData = {
  beingAPartOfBeyes: {
    title: "Beyes'li Olmak",
    subtitle: "Beyes'li olmak, teknolojiye yön veren bir ekibin parçası olmak demektir. Eğer sen de yeteneklerini keşfetmek, kendini geliştirmek ve bizimle birlikte geleceği şekillendirmek istiyorsan, açık pozisyonlarımızı inceleyebilir veya kariyer yolculuğuna ilk adımı staj programlarımızla atabilirsin. Başvurunu bekliyoruz!",
    heroImage: takim,
    seo: {
      title: "Beyes'li Olmak - Beyes",
      description: "Beyes'li olmak, teknolojiye yön veren bir ekibin parçası olmak demektir. Açık pozisyonlarımızı inceleyin ve kariyer yolculuğunuza başlayın.",
      keywords: "kariyer, iş fırsatları, teknoloji, yazılım, beyes, istihdam, beyes'li olmak"
    }
  },
  lifeAtBeyes: {
    title: "Beyes'te Yaşam",
    subtitle: "Beyes'te çalışmak sadece bir iş değil, bir yaşam tarzıdır. Dinamik ortamımızda kendinizi geliştirirken, eğlenceli ve yaratıcı bir atmosferde çalışırsınız.",
    heroImage: yasam,
    seo: {
      title: "Beyes'te Yaşam - Beyes",
      description: "Beyes'te çalışmak sadece bir iş değil, bir yaşam tarzıdır. Dinamik ortamımızda kendinizi geliştirirken, eğlenceli ve yaratıcı bir atmosferde çalışırsınız.",
      keywords: "beyes'te yaşam, çalışma ortamı, şirket kültürü, teknoloji şirketi, Ankara"
    }
  }
};

export const careerImages = {
  takim,
  collaborate,
  company,
  yasam,
  staj,
  is,
  basvuru
}; 