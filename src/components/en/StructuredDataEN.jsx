export default function StructuredDataEN() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RaporinAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "AI-powered pharmacy report verification platform that analyzes insurance reports in seconds. Reduce deductions by up to 95%.",
    "screenshot": "https://raporin.com/screens/kontrol.png",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "RaporinAI",
      "url": "https://raporin.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RaporinAI",
    "url": "https://raporin.com/en",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://raporin.com/en/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RaporinAI",
    "url": "https://raporin.com",
    "logo": "https://raporin.com/logo.png",
    "description": "AI-powered pharmacy insurance report verification platform",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Turkish"]
    },
    "sameAs": [
      "https://twitter.com/raporinai",
      "https://www.linkedin.com/company/raporinai",
      "https://www.instagram.com/raporinai"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does RaporinAI work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RaporinAI automatically analyzes your insurance reports using AI. Upload your report, the system verifies it in seconds and detects errors."
        }
      },
      {
        "@type": "Question",
        "name": "Is RaporinAI secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all your data is stored encrypted and processed in a GDPR-compliant manner. Your data is never shared with third parties."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, RaporinAI is currently in Beta and all features are completely free. No credit card required."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationInfo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
