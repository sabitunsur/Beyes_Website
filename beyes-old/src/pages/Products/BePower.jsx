import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const BePower = () => {
  const productData = productsData.bepower;
  
  const seoData = {
    title: "BePower - Enerji Yönetim Sistemi",
    description: "Enerji tüketimini optimize edin, maliyetleri düşürün ve sürdürülebilir enerji çözümleri uygulayın.",
    type: "SoftwareApplication",
    applicationCategory: "Energy Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default BePower; 