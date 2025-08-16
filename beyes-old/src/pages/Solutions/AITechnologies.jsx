import React from 'react';
import SolutionsTemplate from '../../components/Solutions/SolutionsTemplate';
import { aiSolutionsData } from '../../constants/solutions';
import '../../styles/pages/Solutions/aiTechnologies.css';

const AITechnologies = () => {
  const pageData = {
    pageTitle: 'Yapay Zeka Teknolojileri',
    pageSubtitle: 'Akıllı çözümler ile iş süreçlerinizi optimize edin',
    pageDescription: 'Yapay zeka ve makine öğrenmesi teknolojileri ile iş süreçlerinizi otomatikleştirin, verimliliği artırın ve rekabet avantajı elde edin.',
    solutionsData: {
      solutions: aiSolutionsData,
      heroStats: [
        { value: '90%', label: 'Doğruluk Oranı' },
        { value: '24/7', label: 'Kesintisiz İzleme' },
        { value: '50%', label: 'Maliyet Tasarrufu' }
      ]
    }
  };

  const seoData = {
    title: 'Yapay Zeka Teknolojileri - Beyes',
    description: 'Yapay zeka ve makine öğrenmesi teknolojileri ile iş süreçlerinizi otomatikleştirin, verimliliği artırın ve rekabet avantajı elde edin.',
    keywords: 'yapay zeka, makine öğrenmesi, AI, alarm tahminleme, anomali tespiti, kestirimci bakım, dijital asistan'
  };

  return (
    <SolutionsTemplate
      solutionsData={pageData.solutionsData}
      seoData={seoData}
      pageTitle={pageData.pageTitle}
      pageSubtitle={pageData.pageSubtitle}
      pageDescription={pageData.pageDescription}
      backLink="/solutions"
      pageColor="#d32f2f"
    />
  );
};

export default AITechnologies; 