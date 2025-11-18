"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Genel",
      questions: [
        {
          q: "RaporinAI nedir ve nasıl çalışır?",
          a: "RaporinAI, eczaneler için geliştirilmiş yapay zeka destekli bir SGK rapor analiz platformudur. PDF formatındaki raporları yükleyerek, yapay zeka teknolojisi ile SUT uyumluluğunu, ICD kod doğruluğunu ve olası hataları saniyeler içinde tespit eder. Sistem, OCR (optik karakter tanıma) ve NLP (doğal dil işleme) teknolojilerini kullanarak raporları otomatik analiz eder."
        },
        {
          q: "Hangi rapor türlerini kontrol edebilirim?",
          a: "RaporinAI, tüm SGK Medula raporlarını kontrol edebilir. Bunlar arasında reçete raporları, kronik hastalık raporları, özel rapor gerektiren ilaç raporları ve diğer tüm SGK rapor türleri bulunmaktadır. Sistem, sürekli güncellenen SUT veritabanı ile tüm rapor türlerini destekler."
        },
        {
          q: "Sistemi kullanmak için teknik bilgiye ihtiyacım var mı?",
          a: "Hayır, RaporinAI son derece kullanıcı dostu bir arayüze sahiptir. Sadece PDF raporunuzu sürükle-bırak yöntemiyle yükleyip, analiz butonuna tıklamanız yeterlidir. Sonuçlar anlaşılır ve detaylı şekilde sunulur. Herhangi bir teknik bilgiye ihtiyaç duymadan kolayca kullanabilirsiniz."
        }
      ]
    },
    {
      category: "SUT ve Uyumluluk",
      questions: [
        {
          q: "SUT uyumsuzlukları nasıl tespit edilir?",
          a: "Sistemimiz, güncel SUT (Sağlık Uygulama Tebliği) veritabanını sürekli takip eder. Rapordaki ICD-10 tanı kodları, ilaç etkileşimleri, doz uygunluğu ve SUT'ta belirtilen kısıtlamalar otomatik olarak kontrol edilir. Uyumsuzluk tespit edildiğinde, detaylı açıklama ve düzeltme önerileri sunulur."
        },
        {
          q: "SUT güncellemeleri nasıl takip edilir?",
          a: "RaporinAI ekibi, SGK tarafından yapılan tüm SUT güncellemelerini takip eder ve sistemimizi otomatik olarak günceller. Kullanıcıların herhangi bir işlem yapmasına gerek yoktur. Sistem her zaman en güncel SUT kurallarına göre analiz yapar."
        }
      ]
    },
    {
      category: "Güvenlik ve KVKK",
      questions: [
        {
          q: "Kişisel veriler nasıl korunur?",
          a: "RaporinAI, KVKK (Kişisel Verilerin Korunması Kanunu) standartlarına tam uyumludur. Tüm hasta bilgileri (TC kimlik no, ad-soyad, vb.) otomatik olarak maskelenir ve şifrelenir. Verilriniz güvenli sunucularında saklanır ve hiçbir üçüncü tarafla paylaşılmaz."
        }
      ]
    },
    {
      category: "Fiyatlandırma ve Paketler",
      questions: [
        {
          q: "Ücretsiz deneme süresi var mı?",
          a: "Evet! RaporinAI şuan Beta sürecinde ve tüm özellikler tamamen ücretsizdir ve kredi kartı bilgisi gerektirmez.  Deneme sonunda memnun kalırsanız, uygun paketi seçerek devam edebilirsiniz."
        }
      ]
    },
    {
      category: "Teknik Destek",
      questions: [
        {
          q: "Teknik destek nasıl alınır?",
          a: "E-posta desteğimiz ve WhatsApp iletişim kanalımız mevcuttur. Ayrıca, detaylı kullanım kılavuzu ve video eğitimler de sunuyoruz."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8FFFB] via-white to-[#F9FFFD]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaQuestionCircle size={50} className="text-teal-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sıkça Sorulan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Sorular
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RaporinAI hakkında merak ettiğiniz her şeyi burada bulabilirsiniz.
          </p>
        </motion.div>

        {/* FAQ Kategorileri */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Kategori Başlığı */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-teal-500 to-emerald-600 rounded-full"></span>
                {category.category}
              </h3>

              {/* Sorular */}
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-md border border-teal-100 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      {/* Soru */}
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-teal-50/50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <FaChevronDown className="text-teal-600" size={20} />
                        </motion.div>
                      </button>

                      {/* Cevap */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-teal-50 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alt CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Sorunuza Cevap Bulamadınız mı?
          </h3>
          <p className="text-gray-600 mb-6">
            Destek ekibimiz size yardımcı olmaktan mutluluk duyar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Bize Ulaşın
            </a>
            <a
              href="/download"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full border-2 border-teal-600 hover:bg-teal-50 transition-all"
            >
              Ücretsiz Deneyin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
