import React from 'react';

const SEO = ({ 
  title, 
  description, 
  type = "Service", 
  provider = "Beyes",
  areaServed = "Türkiye",
  offerCatalog = null 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": title,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider
    },
    "serviceType": title,
    "areaServed": areaServed
  };

  if (offerCatalog) {
    structuredData.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "Çözümler",
      "itemListElement": offerCatalog.map(item => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.title,
          "description": item.shortDescription
        }
      }))
    };
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO; 