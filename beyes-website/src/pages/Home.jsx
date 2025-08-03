import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';
import RnDSection from '../components/RnDSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SolutionsSection />
      <ProductsSection />
      <RnDSection />
    </main>
  );
};

export default Home;
