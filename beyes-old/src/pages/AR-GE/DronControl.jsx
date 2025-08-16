import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const DronControl = () => {
  const projectData = rndData.find(project => project.id === 'dron-control');
  
  const seoData = {
    title: "Dron Kontrol - Otonom Drone Kontrol Sistemi | Beyes",
    description: "Otonom drone kontrol sistemleri geliştiriyoruz. GPS, sensör füzyonu ve yapay zeka ile drone'ların güvenli ve akıllı uçuşunu sağlıyoruz.",
    type: "ResearchProject",
    applicationCategory: "Drone Control",
    operatingSystem: "Linux, ROS"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default DronControl; 