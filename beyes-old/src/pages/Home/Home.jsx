import React from 'react';
import HeroSection from '../../components/Home/HeroSection';
import AboutSection from '../../components/Home/AboutSection';
import StatsSection from '../../components/Home/StatsSection';
import SolutionsSection from '../../components/Home/SolutionsSection';
import ProductsSection from '../../components/Home/ProductsSection';
import RnDSection from '../../components/Home/RnDSection';

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
