import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const IPPDU = () => {
  const productData = productsData.ippdu;
  
  const seoData = {
    title: "IPPDU - Akıllı IP PDU",
    description: "Akıllı güç dağıtım ünitesi ile enerji yönetimini optimize edin ve güvenliği artırın.",
    type: "Hardware",
    applicationCategory: "Power Distribution",
    operatingSystem: "Embedded Linux"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default IPPDU; 