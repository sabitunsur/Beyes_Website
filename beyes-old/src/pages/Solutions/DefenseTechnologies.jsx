import React from 'react';
import SolutionsTemplate from '../../components/Solutions/SolutionsTemplate';
import { defenseSolutionsData } from '../../constants/solutions';
import '../../styles/pages/Solutions/defenseTechnologies.css';

const DefenseTechnologies = () => {
  const seoData = {
    title: "Savunma Teknolojileri - Beyes",
    description: "Savunma sektörü için özel olarak geliştirilmiş teknolojik çözümler ile güvenlik ve savunma alanlarında liderlik edin.",
    keywords: "savunma teknolojileri, güvenlik sistemleri, test sistemleri, gömülü yazılım, IoT sensörler, PCB tasarım"
  };

  const pageData = {
    pageTitle: "Savunma Teknolojileri",
    pageSubtitle: "Savunma sektörü için özel olarak geliştirilmiş teknolojik çözümler",
    pageDescription: "Güvenlik ve savunma alanlarında liderlik edin.",
    solutionsData: {
      solutions: defenseSolutionsData,
      heroStats: [
        { value: "100%", label: "Güvenlik" },
        { value: "24/7", label: "Kesintisiz İzleme" },
        { value: "60%", label: "Test Süresi Azalması" }
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
      pageColor="#1976d2"
    />
  );
};

export default DefenseTechnologies; 