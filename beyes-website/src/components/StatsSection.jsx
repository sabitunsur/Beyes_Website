import React, { useEffect, useState, useRef } from 'react';
import '../styles/components/statsSection.css';
import { FaUsers, FaProjectDiagram, FaBox, FaUserFriends, FaClock, FaFlask } from 'react-icons/fa';

const statsData = [
  { label: 'Çalışan', value: 50, icon: <FaUsers /> },
  { label: 'Proje', value: 30, icon: <FaProjectDiagram /> },
  { label: 'Ürün', value: 10, icon: <FaBox /> },
  { label: 'Müşteri', value: 40, icon: <FaUserFriends /> },
  { label: 'Yıl Deneyim', value: 13, icon: <FaClock /> },
  { label: 'AR-GE', value: 6, icon: <FaFlask /> },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds
    const frameRate = 60; // 60 FPS
    const totalFrames = (animationDuration / 1000) * frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      if (progress >= 1) {
        // Animation complete - set final values
        setCounts(statsData.map(stat => stat.value));
        clearInterval(timer);
      } else {
        // Easing function for smooth animation (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        
        setCounts(statsData.map(stat => 
          Math.floor(stat.value * easeProgress)
        ));
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="statsSection" ref={sectionRef}>
      <div className="stats__container">
        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <div className="stats__item" key={stat.label}>
              <div className="stats__icon">
                {stat.icon}
              </div>
              <h3>{counts[index]}+</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;