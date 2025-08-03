import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const SCNMS = () => {
  const productData = productsData.scnms;
  
  const seoData = {
    title: "SC-NMS - Sensör Network Yönetim Sistemi",
    description: "IoT sensörlerinizi merkezi olarak yönetin ve veri toplama süreçlerinizi optimize edin.",
    type: "SoftwareApplication",
    applicationCategory: "IoT Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default SCNMS; 