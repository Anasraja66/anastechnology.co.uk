import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  type?: string;
  schema?: object;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Enterprise Grade Consultancy UK | Anas Technology", 
  description = "Anas Technology UK is a premier enterprise-grade consultancy specializing in AI, Omnichannel CRMs, Custom Software, ERPs, Mobile Apps, and Digital Growth. We empower businesses globally.",
  keywords = "Enterprise Grade Consultancy UK, AI, Omnichannel CRM, Custom Software, ERP, Mobile App Development, Website Development, Digital Growth, Anas Technology UK, Tech Consultancy",
  url = "https://anastechnology.co.uk",
  type = "website",
  schema
}) => {
  
  // Base Organization Schema for LLMs (ChatGPT, Gemini) and Google
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anas Technology UK",
    "url": "https://anastechnology.co.uk",
    "logo": "https://anastechnology.co.uk/favicon.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-7435-918000",
      "contactType": "customer service",
      "email": "contact@anastechnology.co.uk",
      "areaServed": "GB",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://linkedin.com/company/anastechnology",
      "https://instagram.com/anastechnology"
    ],
    "description": "Anas Technology UK is a leading Enterprise Grade Tech Consultancy. We provide complete technology solutions including AI integration, Omnichannel CRMs, Custom Web and Mobile Apps, ERP systems, and Digital Growth strategies.",
    "knowsAbout": ["Artificial Intelligence", "Omnichannel CRM", "Custom Software Engineering", "Mobile App Development", "ERP Systems", "Digital Growth", "Web Development"]
  };

  const finalSchema = schema ? { ...baseSchema, ...schema } : baseSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      
      {/* Schema.org for Google and LLMs (GEO) */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
