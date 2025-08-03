import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const Slipring = () => {
  const projectData = rndData.find(project => project.id === 'slipring');
  
  const seoData = {
    title: "Slipring - Döner Bağlantı Teknolojisi | Beyes",
    description: "Yüksek performanslı slipring teknolojileri geliştiriyoruz. Elektrik ve veri sinyallerinin kesintisiz iletimi için özel tasarımlar üretiyoruz.",
    type: "ResearchProject",
    applicationCategory: "Electronics",
    operatingSystem: "Embedded Systems"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default Slipring; 