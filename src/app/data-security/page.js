"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserSecret, FaServer, FaCheckCircle, FaCertificate, FaEye, FaTrash } from "react-icons/fa";

export default function DataSecurityPage() {
  const securityFeatures = [
    {
      icon: <FaLock size={40} className="text-teal-600" />,
      title: "End-to-End Şifreleme",
      description: "Tüm verileriniz yüklenme anından itibaren AES-256 bit şifreleme ile korunur. Veri transferleri SSL/TLS protokolü ile güvence altındadır."
    },
    {
      icon: <FaUserSecret size={40} className="text-teal-600" />,
      title: "Otomatik Veri Maskeleme",
      description: "TC kimlik numaraları, hasta isimleri, adresler ve diğer kişisel bilgiler otomatik olarak maskelenir ve anonimleştirilir."
    },
    {
      icon: <FaServer size={40} className="text-teal-600" />,
      title: "Güvenli Bulut Altyapısı",
      description: "Verileriniz ISO 27001 sertifikalı AWS sunucularında saklanır. Düzenli yedekleme ve felaket kurtarma planları mevcuttur."
    },
    {
      icon: <FaEye size={40} className="text-teal-600" />,
      title: "Erişim Kontrolü",
      description: "Rol tabanlı erişim yönetimi ile sadece yetkili kullanıcılar verilere erişebilir. Tüm işlemler loglanır ve denetlenebilir."
    },
    {
      icon: <FaTrash size={40} className="text-teal-600" />,
      title: "Veri Silme Hakkı",
      description: "İstediğiniz zaman verilerinizi kalıcı olarak silebilirsiniz. Silinen veriler kurtarılamaz şekilde sistemden temizlenir."
    },
    {
      icon: <FaCertificate size={40} className="text-teal-600" />,
      title: "Uyumluluk Sertifikaları",
      description: "ISO 27001, KVKK ve GDPR standartlarına tam uyumluyuz. Düzenli denetimler ve güvenlik testleri yapılır."
    }
  ];

  const kvkkPrinciples = [
    {
      title: "Hukuka ve Dürüstlük Kuralına Uygun İşleme",
      description: "Kişisel verileriniz yalnızca yasal dayanaklar çerçevesinde ve açık rızanız ile işlenir."
    },
    {
      title: "Doğru ve Güncel Tutma",
      description: "Verilerinizin doğruluğunu ve güncelliğini sağlamak için gerekli önlemler alınır."
    },
    {
      title: "Belirli, Açık ve Meşru Amaçlar",
      description: "Verileriniz sadece SGK rapor analizi amacıyla işlenir, başka amaçlarla kullanılmaz."
    },
    {
      title: "İşlendikleri Amaçla Sınırlı Olma",
      description: "Toplanan veriler belirlenen amaç dışında işlenmez ve saklanmaz."
    },
    {
      title: "İlgili Mevzuatta Öngörülen Süre Kadar Saklama",
      description: "Verileriniz yasal saklama sürelerince tutulur, süre sonunda otomatik silinir."
    }
  ];

  const dataProcessing = [
    {
      step: "1. Veri Toplama",
      description: "PDF raporlarınızı yüklediğinizde, sadece analiz için gerekli bilgiler işlenir.",
      icon: "📄"
    },
    {
      step: "2. Otomatik Maskeleme",
      description: "TC kimlik no, hasta adı-soyadı, adres gibi kişisel bilgiler anında maskelenir.",
      icon: "🎭"
    },
    {
      step: "3. Şifreli Saklama",
      description: "Maskelenmiş veriler AES-256 şifreleme ile güvenli sunucularda saklanır.",
      icon: "🔐"
    },
    {
      step: "4. Analiz İşlemi",
      description: "Yapay zeka sadece tıbbi kodlar ve SUT uyumluluğunu kontrol eder.",
      icon: "🤖"
    },
    {
      step: "5. Sonuç Sunumu",
      description: "Analiz sonuçları size özel, şifreli bağlantı ile sunulur.",
      icon: "📊"
    },
    {
      step: "6. Veri İmhası",
      description: "İstediğiniz zaman veya saklama süresi sonunda veriler kalıcı silinir.",
      icon: "🗑️"
    }
  ];

  const userRights = [
    "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
    "İşlenmişse buna ilişkin bilgi talep etme",
    "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
    "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
    "Eksik veya yanlış işlenmişse düzeltilmesini isteme",
    "KVKK'da öngörülen şartlar çerçevesinde silinmesini isteme",
    "Aktarıldığı üçüncü kişilere yukarıdaki işlemlerin bildirilmesini isteme",
    "Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonuç doğmasına itiraz etme"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <FaShieldAlt size={70} className="text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0F918B] via-[#12A897] to-[#17C6A3] mb-6">
              Veri Güvenliği & KVKK
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kişisel verilerinizin korunması bizim için önceliktir. KVKK ve uluslararası standartlara tam uyumlu, 
              güvenli ve şeffaf bir veri işleme süreci sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Güvenlik Özellikleri */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Güvenlik <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Önlemlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verilerinizi korumak için kullandığımız teknolojiler ve güvenlik protokolleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Veri İşleme Süreci */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Veri İşleme Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verileriniz nasıl işlenir, nasıl korunur ve nasıl silinir?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataProcessing.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100"
              >
                <div className="text-5xl mb-4">{process.icon}</div>
                <h3 className="text-lg font-bold text-teal-600 mb-2">{process.step}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KVKK İlkeleri */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              KVKK İlkelerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kişisel Verilerin Korunması Kanunu'na tam uyum sağlıyoruz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {kvkkPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 flex gap-4"
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle size={24} className="text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kullanıcı Hakları */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              KVKK Kapsamında Haklarınız
            </h2>
            <p className="text-gray-600 mb-8 text-center">
              Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="space-y-4">
              {userRights.map((right, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex gap-3 items-start"
                >
                  <FaCheckCircle className="text-teal-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{right}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 p-6 bg-teal-50 rounded-xl border border-teal-200">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong className="text-teal-700">Haklarınızı Kullanmak İçin:</strong> KVKK kapsamındaki taleplerinizi 
                <a href="mailto:kvkk@raporin.com" className="text-teal-600 font-semibold hover:underline mx-1">
                  kvkk@raporin.com
                </a> 
                adresine veya sistemdeki "Veri Talebi" bölümünden iletebilirsiniz. Talepleriniz en geç 30 gün içinde yanıtlanır.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl p-12 text-center text-white shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Güvenli ve Şeffaf Bir Platform
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Verileriniz bizimle güvende. KVKK uyumlu, şeffaf ve güvenilir bir hizmet sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
            >
              Güvenle Başlayın
            </a>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Sorularınız mı Var?
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
