import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const Heysem = () => {
  const productData = productsData.heysem;
  
  const seoData = {
    title: "Heysem - Transmisyon Network Yönetim Sistemi",
    description: "Gerçek zamanlı network izleme, otomatik arıza tespiti ve performans analizi ile transmisyon network yönetimi.",
    type: "SoftwareApplication",
    applicationCategory: "Network Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default Heysem; 