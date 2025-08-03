import React from 'react';
import SolutionsTemplate from '../../components/Solutions/SolutionsTemplate';
import { professionalServicesData } from '../../constants/solutions';
import '../../styles/pages/Solutions/professionalServices.css';

const ProfessionalServices = () => {
  const seoData = {
    title: "Profesyonel Hizmetler - Beyes",
    description: "Deneyimli ekibimiz ile projelerinizde size özel danışmanlık, teknik destek ve eğitim hizmetleri sunuyoruz.",
    keywords: "profesyonel hizmetler, teknik danışmanlık, proje yönetimi, eğitim hizmetleri, sistem entegrasyonu"
  };

  const pageData = {
    pageTitle: "Profesyonel Hizmetler",
    pageSubtitle: "Deneyimli ekibimiz ile projelerinizde size özel danışmanlık",
    pageDescription: "Teknik destek ve eğitim hizmetleri sunuyoruz.",
    solutionsData: {
      solutions: professionalServicesData,
      heroStats: [
        { value: "100%", label: "Müşteri Memnuniyeti" },
        { value: "15+", label: "Yıllık Deneyim" },
        { value: "500+", label: "Tamamlanan Proje" }
      ]
    }
  };

  return (
    <SolutionsTemplate
      solutionsData={pageData.solutionsData}
      seoData={seoData}
      pageTitle={pageData.pageTitle}
      pageSubtitle={pageData.pageSubtitle}
      pageDescription={pageData.pageDescription}
      backLink="/solutions"
      pageColor="#f57c00"
    />
  );
};

export default ProfessionalServices; 