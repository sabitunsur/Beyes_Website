import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const BeRoad = () => {
  const productData = productsData.beroad;
  
  const seoData = {
    title: "BeRoad - Yol Bilgilendirme Sistemi",
    description: "Akıllı yol bilgilendirme sistemi ile trafik akışını optimize edin ve sürücü deneyimini iyileştirin.",
    type: "SoftwareApplication",
    applicationCategory: "Traffic Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default BeRoad; 