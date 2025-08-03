import React from 'react';
import SolutionsTemplate from '../../components/Solutions/SolutionsTemplate';
import { ictSolutionsData } from '../../constants/solutions';
import '../../styles/pages/Solutions/ictTechnologies.css';

const ICTTechnologies = () => {
  const seoData = {
    title: "ICT Teknolojileri - Beyes",
    description: "Modern bilgi ve iletişim teknolojileri ile altyapınızı güçlendirin, iletişimi optimize edin ve dijital dönüşümü hızlandırın.",
    keywords: "ICT teknolojileri, network yönetimi, ERP, dijital dönüşüm, enerji yönetimi, bilgi teknolojileri"
  };

  const pageData = {
    pageTitle: "ICT Teknolojileri",
    pageSubtitle: "Modern bilgi ve iletişim teknolojileri ile altyapınızı güçlendirin",
    pageDescription: "İletişimi optimize edin ve dijital dönüşümü hızlandırın.",
    solutionsData: {
      solutions: ictSolutionsData,
      heroStats: [
        { value: "90%", label: "Ağ Kesintisi Azalması" },
        { value: "25%", label: "Enerji Tasarrufu" },
        { value: "40%", label: "Süreç Hızlanması" }
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
      pageColor="#388e3c"
    />
  );
};

export default ICTTechnologies; 