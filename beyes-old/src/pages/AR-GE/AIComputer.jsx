import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const AIComputer = () => {
  const projectData = rndData.find(project => project.id === 'ai-computer');
  
  const seoData = {
    title: "AI Bilgisayarı - Yapay Zeka Bilgisayar Donanımı | Beyes",
    description: "Yapay zeka algoritmalarını optimize eden özel donanım tasarımları geliştiriyoruz. GPU ve TPU teknolojileri ile AI hesaplama performansını maksimize ediyoruz.",
    type: "ResearchProject",
    applicationCategory: "Hardware",
    operatingSystem: "Linux, CUDA"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default AIComputer; 