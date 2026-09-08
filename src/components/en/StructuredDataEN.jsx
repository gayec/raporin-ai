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
    // aggregateRating intentionally omitted: Google treats self-serving ratings that
    // are not backed by visible, verifiable reviews as a structured-data violation.
    "description": "AI-powered pharmacy report verification platform with insurance portal integration. Imports every prescription of a claim period, analyzes all reported medicines in one click, and flags regulatory non-compliance and prescription-versus-report dosage overruns.",
    "featureList": [
      "Insurance portal integration with automatic prescription import",
      "One-click bulk report analysis",
      "Prescription-versus-report dosage comparison",
      "Criterion-based analysis against current regulations",
      "Single report verification via PDF upload",
      "Multi-user access, role management and team notes"
    ],
    "screenshot": "https://raporin.com/screens/toplu-analiz.png",
    "softwareVersion": "1.1",
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
    "url": "https://raporin.com/en"
  };

  const organizationInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RaporinAI",
    "url": "https://raporin.com",
    "logo": "https://raporin.com/logo.png",
    "description": "AI-powered pharmacy report verification platform with insurance portal integration",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Turkish"]
    },
    "sameAs": [
      "https://twitter.com/raporinai",
      "https://www.linkedin.com/company/raporinai",
      "https://www.instagram.com/raporinai",
      "https://www.crunchbase.com/organization/raporinai"
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
    </>
  );
}
