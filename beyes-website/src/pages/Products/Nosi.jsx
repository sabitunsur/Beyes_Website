import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const Nosi = () => {
  const productData = productsData.nosi;
  
  const seoData = {
    title: "Nosi - İnsan Kaynakları Yönetim Sistemi",
    description: "Çalışan süreçlerinizi dijitalleştirin, performansı artırın ve iş süreçlerinizi optimize edin.",
    type: "SoftwareApplication",
    applicationCategory: "Human Resources",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default Nosi; 