"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ecz. Ayşe Yılmaz",
      location: "İstanbul",
      role: "Eczane Sahibi",
      rating: 5,
      comment: "RaporinAI sayesinde SGK kesintilerimiz %80 azaldı. Manuel kontrol yaparken saatler harcıyorduk, şimdi dakikalar içinde tüm raporları kontrol ediyoruz. Gerçekten hayat kurtarıcı bir sistem!",
      avatar: "AY",
      gradient: "from-teal-400 to-emerald-500"
    },
    {
      name: "Ecz. Mehmet Kaya",
      location: "Ankara",
      role: "Eczane Müdürü",
      rating: 5,
      comment: "SUT uyumsuzluklarını önceden tespit etmek mali açıdan büyük avantaj sağladı. Sistem çok kullanıcı dostu ve KVKK uyumlu olması güven veriyor. Tüm eczacı arkadaşlarıma tavsiye ediyorum.",
      avatar: "MK",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      name: "Ecz. Zeynep Demir",
      location: "İzmir",
      role: "Eczane Sahibi",
      rating: 5,
      comment: "Medula'ya girmeden rapor kontrolü yapabilmek inanılmaz pratik. Ekip yönetimi özelliği sayesinde çalışanlarımız da sistemi kullanabiliyor. İlk ayda yatırımımızı geri kazandık.",
      avatar: "ZD",
      gradient: "from-cyan-400 to-teal-500"
    },
    {
      name: "Ecz. Can Özkan",
      location: "Bursa",
      role: "Eczane Sahibi",
      rating: 5,
      comment: "Yapay zeka teknolojisi gerçekten çok başarılı. ICD kod hatalarını anında yakalıyor ve düzeltme önerileri sunuyor. Geçmiş raporları takip edebilmek de çok faydalı bir özellik.",
      avatar: "CÖ",
      gradient: "from-teal-500 to-emerald-400"
    },
    {
      name: "Ecz. Elif Arslan",
      location: "Antalya",
      role: "Eczane Müdürü",
      rating: 5,
      comment: "Pilot kullanıcı olarak başladık ve sonuçlar beklentilerimizi aştı. Müşteri desteği çok hızlı ve çözüm odaklı. RaporinAI olmadan nasıl çalıştığımızı hatırlamıyorum artık!",
      avatar: "EA",
      gradient: "from-emerald-500 to-cyan-400"
    },
    {
      name: "Ecz. Burak Şahin",
      location: "Adana",
      role: "Eczane Sahibi",
      rating: 5,
      comment: "Aylık SGK kesintilerimiz ortalama 15.000 TL azaldı. Sistem kendini ilk ayda amorti etti. Hem zaman hem para tasarrufu sağlıyor. Kesinlikle denemeye değer!",
      avatar: "BŞ",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Aktif Eczane" },
    { number: "%95", label: "Doğruluk Oranı" },
    { number: "50K+", label: "Kontrol Edilen Rapor" },
    { number: "4.9/5", label: "Kullanıcı Memnuniyeti" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Eczacılar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
              Ne Diyor?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            RaporinAI kullanan eczacıların deneyimlerini ve başarı hikayelerini keşfedin.
          </p>
        </motion.div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg border border-teal-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* 
          TODO: Eczacı yorum kartları - İstendiğinde açılacak
          Yorumlar Grid - Geçici olarak kapalı
        */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full blur-3xl opacity-50"></div>
              
              <div className="absolute top-4 right-4 opacity-10">
                <FaQuoteLeft size={60} className="text-teal-600" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-teal-600 font-medium">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Alt CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Siz de Başarı Hikayenizi Yazın
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Binlerce eczacının güvendiği RaporinAI ile SGK kesintilerinizi azaltın ve zamandan tasarruf edin.
            </p>
            <a
              href="/download"
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              Ücretsiz Deneyin
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
