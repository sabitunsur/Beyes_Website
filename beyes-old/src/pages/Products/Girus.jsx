import React from 'react';
import ProductTemplate from '../../components/Products/ProductTemplate';
import { productsData } from '../../constants/products';

const Girus = () => {
  const productData = productsData.girus;
  
  const seoData = {
    title: "Girus - Kobi Ticari İş Yazılımı",
    description: "KOBİler için özel olarak tasarlanmış ticari iş yazılımı ile işletmenizi büyütün.",
    type: "SoftwareApplication",
    applicationCategory: "Business Management",
    operatingSystem: "Windows, Linux, macOS"
  };

  return (
    <ProductTemplate 
      productData={productData}
      seoData={seoData}
    />
  );
};

export default Girus; 