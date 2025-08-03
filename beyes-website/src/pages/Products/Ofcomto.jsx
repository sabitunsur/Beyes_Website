import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const Ofcomto = () => {
  const productData = productsData.ofcomto;
  
  const seoData = {
    title: "Ofcomto - Akıllı Trafik Yönetim Sistemi",
    description: "Şehir trafiğini optimize edin, kaza riskini azaltın ve ulaşım verimliliğini artırın.",
    type: "SoftwareApplication",
    applicationCategory: "Traffic Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default Ofcomto; 