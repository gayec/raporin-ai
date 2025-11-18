export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RaporinAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    "description": "SGK raporlarını yapay zeka ile saniyeler içinde analiz eden eczane yazılımı. %100 doğruluk garantisi.",
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
    "url": "https://raporin.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://raporin.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RaporinAI",
    "url": "https://raporin.com",
    "logo": "https://raporin.com/logo.png",
    "description": "Eczaneler için yapay zeka destekli SGK rapor analizi çözümü",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "Turkish"
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
        "name": "RaporinAI nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RaporinAI, SGK raporlarınızı yapay zeka ile otomatik olarak analiz eder. Raporu yükleyin, sistem saniyeler içinde kontrol eder ve hataları tespit eder."
        }
      },
      {
        "@type": "Question",
        "name": "RaporinAI güvenli mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, tüm verileriniz şifrelenmiş olarak saklanır ve KVKK uyumlu bir şekilde işlenir. Verileriniz asla üçüncü taraflarla paylaşılmaz."
        }
      },
      {
        "@type": "Question",
        "name": "Ücretsiz deneme var mı?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, 14 gün ücretsiz deneme süresi sunuyoruz. Kredi kartı bilgisi gerekmez."
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
