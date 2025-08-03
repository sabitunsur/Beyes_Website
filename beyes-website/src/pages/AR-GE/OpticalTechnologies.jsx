import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const OpticalTechnologies = () => {
  const projectData = rndData.find(project => project.id === 'optical-technologies');
  
  const seoData = {
    title: "Optik Teknolojiler - Gelişmiş Optik Sistemler | Beyes",
    description: "Lazer, fiber optik ve görüntü işleme teknolojileri geliştiriyoruz. Hassas ölçüm, iletişim ve sensör sistemleri için optik çözümler üretiyoruz.",
    type: "ResearchProject",
    applicationCategory: "Optics",
    operatingSystem: "Embedded Systems"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default OpticalTechnologies; 