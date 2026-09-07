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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does RaporinAI work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You sign in to the insurance portal from inside the application, choose an invoice type and claim period, and import that period's prescriptions into RaporinAI. From there you can analyze a single medicine in a prescription's detail view, or start a one-click bulk analysis of every reported medicine in the period. Results are presented criterion by criterion."
        }
      },
      {
        "@type": "Question",
        "name": "What is bulk report analysis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every reported medicine in the imported claim period is queued with a single click and analyzed in the background. Report-medicine pairs that were already analyzed are skipped, and when it finishes a single filter lists everything that is not compliant."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to share my insurance portal password?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You sign in to the portal yourself through a browser embedded in the app; your credentials are never sent to our servers. If you enable auto-login, they are encrypted and stored only on your own computer."
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
