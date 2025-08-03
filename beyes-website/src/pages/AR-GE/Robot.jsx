import React from 'react';
import AR_GETemplate from '../../components/AR-GE/AR-GETemplate';
import { rndData } from '../../constants/rnd';

const Robot = () => {
  const projectData = rndData.find(project => project.id === 'robot');
  
  const seoData = {
    title: "Robot - İnsansı Robot Geliştirme | Beyes",
    description: "İnsansı robot (humanoid) teknolojileri geliştiriyoruz. Yapay zeka destekli hareket, görüntü işleme ve doğal dil işleme yetenekleri ile geleceğin robotlarını tasarlıyoruz.",
    type: "ResearchProject",
    applicationCategory: "Robotics",
    operatingSystem: "Linux, ROS"
  };

  return (
    <AR_GETemplate 
      projectData={projectData}
      seoData={seoData}
    />
  );
};

export default Robot; 