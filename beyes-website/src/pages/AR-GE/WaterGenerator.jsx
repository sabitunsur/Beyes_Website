import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const WaterGenerator = () => {
  const projectData = rndData.find(project => project.id === 'water-generator');
  
  const seoData = {
    title: "Su Jeneratörü - Yenilenebilir Enerji Teknolojisi | Beyes",
    description: "Su akışından elektrik üreten yenilenebilir enerji sistemleri geliştiriyoruz. Mikro hidroelektrik teknolojileri ile sürdürülebilir enerji çözümleri sunuyoruz.",
    type: "ResearchProject",
    applicationCategory: "Renewable Energy",
    operatingSystem: "Embedded Systems"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default WaterGenerator; 