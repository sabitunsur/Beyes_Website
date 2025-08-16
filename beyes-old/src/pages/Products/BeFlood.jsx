import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const BeFlood = () => {
  const productData = productsData.beflood;
  
  const seoData = {
    title: "BeFlood - Su Taşkını Önleme ve Bilgilendirme Sistemi",
    description: "Su seviyesi izleme ve erken uyarı sistemi ile taşkın riskini minimize edin.",
    type: "SoftwareApplication",
    applicationCategory: "Flood Prevention",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default BeFlood; 