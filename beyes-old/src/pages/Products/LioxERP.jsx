import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const LioxERP = () => {
  const productData = productsData.lioxerp;
  
  const seoData = {
    title: "Liox ERP - ERP Yazılımı",
    description: "Kurumsal kaynak planlama sistemi ile tüm iş süreçlerinizi entegre edin ve verimliliği artırın.",
    type: "SoftwareApplication",
    applicationCategory: "Enterprise Resource Planning",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default LioxERP; 