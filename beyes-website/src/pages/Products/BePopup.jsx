import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const BePopup = () => {
  const productData = productsData.bepopup;
  
  const seoData = {
    title: "BePopup - Online Eğitim ve Sınav Yönetim Yazılımı",
    description: "Dijital eğitim platformu ile uzaktan eğitim süreçlerinizi yönetin ve öğrenci performansını takip edin.",
    type: "SoftwareApplication",
    applicationCategory: "Education Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default BePopup; 