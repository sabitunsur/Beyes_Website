import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const SmartWork = () => {
  const productData = productsData.smartwork;
  
  const seoData = {
    title: "Smart Work - Carbon Ayakizi ve Atık Takibi",
    description: "Sürdürülebilirlik odaklı çözümler ile karbon ayak izinizi azaltın ve atık yönetimini optimize edin.",
    type: "SoftwareApplication",
    applicationCategory: "Sustainability Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default SmartWork; 