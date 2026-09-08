// FAQPage şeması yalnızca SSS bölümünün GÖRÜNDÜĞÜ sayfada basılmalı.
// Daha önce kök layout'taydı; bu yüzden /kvkk gibi SSS içermeyen sayfalara da
// düşüyor, çözüm sayfalarında ise kendi SSS şemasıyla çakışıyordu.
export default function FaqSchema() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
