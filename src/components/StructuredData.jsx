export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RaporinAI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Windows",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "TRY"
    },
    // aggregateRating bilerek eklenmedi: Google, sitede görünür ve doğrulanabilir
    // yorumlara dayanmayan kendi kendine verilen puanları yapılandırılmış veri
    // ihlali sayıyor. Gerçek yorum toplandığında sayfada yayımlanıp buraya eklenmeli.
    "description": "Yapay zeka destekli eczane reçete ve rapor kontrol programı. Fatura dönemindeki tüm reçeteleri tek tıkla analiz ederek SUT uyumsuzluklarını ve reçete-rapor doz aşımlarını tespit eder.",
    "featureList": [
      "Medula entegrasyonu ile otomatik reçete aktarımı",
      "Tek tıkla toplu rapor analizi",
      "Reçete-rapor doz karşılaştırması",
      "Güncel SUT kurallarına göre kriter bazlı analiz",
      "PDF ile tekil rapor kontrolü",
      "Çoklu kullanıcı, rol yönetimi ve ekip notları"
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
    "url": "https://raporin.com"
  };

  const organizationInfo = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RaporinAI",
    "url": "https://raporin.com",
    "logo": "https://raporin.com/logo.png",
    "description": "Eczaneler için Medula entegrasyonlu, yapay zeka destekli SGK rapor kontrol çözümü",
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
