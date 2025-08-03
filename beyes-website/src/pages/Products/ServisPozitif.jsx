import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const ServisPozitif = () => {
  const productData = productsData.servispozitif;
  
  const seoData = {
    title: "Servis Pozitif - Teknik Servis Yazılımı",
    description: "Teknik servis süreçlerinizi dijitalleştirin, müşteri memnuniyetini artırın ve operasyonel verimliliği yükseltin.",
    type: "SoftwareApplication",
    applicationCategory: "Service Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default ServisPozitif; 