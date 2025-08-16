import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const BeSens = () => {
  const productData = productsData.besens;
  
  const seoData = {
    title: "BeSens - Kestirimci Bakım Sistemi",
    description: "IoT sensör entegrasyonu, arıza tahmin algoritmaları ve planlı bakım optimizasyonu ile kestirimci bakım sistemi.",
    type: "SoftwareApplication",
    applicationCategory: "Predictive Maintenance",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default BeSens; 