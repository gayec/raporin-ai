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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "RaporinAI nasıl çalışır?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uygulama içindeki Medula ekranından giriş yapar, fatura türü ve dönem seçerek o döneme ait reçeteleri RaporinAI'ye aktarırsınız. Ardından bir reçetenin detayına girip tek bir ilacı analiz edebilir ya da tek tıkla dönemdeki tüm raporlu ilaçları toplu analize alabilirsiniz. Sonuçlar SUT kriterleri bazında sunulur."
        }
      },
      {
        "@type": "Question",
        "name": "Toplu rapor analizi nedir?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medula'dan aktardığınız dönemdeki tüm raporlu ilaçlar tek tıkla sıraya alınır ve arka planda sırayla analiz edilir. Daha önce analiz edilmiş rapor-ilaç eşleşmeleri tekrar analiz edilmez; analiz bittiğinde uygun olmayan ilaçları tek filtreyle listeleyebilirsiniz."
        }
      },
      {
        "@type": "Question",
        "name": "Medula şifremi paylaşmam gerekiyor mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır. Medula'ya uygulama içindeki tarayıcıdan kendiniz giriş yaparsınız; giriş bilgileriniz sunucularımıza gönderilmez. Otomatik girişi açarsanız bilgileriniz şifrelenerek yalnızca kendi bilgisayarınızda saklanır."
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
          "text": "RaporinAI beta sürecinde tamamen ücretsizdir; tüm özellikler kredi kartı bilgisi gerekmeden kullanılabilir."
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
