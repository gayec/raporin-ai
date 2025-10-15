"use client";
import { motion } from "framer-motion";

export default function PricingSection() {
  const plans = [
    {
      name: "Ücretsiz Plan",
      price: "₺0",
      description: "Temel rapor yükleme ve sınırlı analiz özelliği içerir.",
      features: [
        "Aylık 10 rapor analizi",
        "Temel hata tespiti",
        "Rapor geçmişi takibi",
      ]
    },
    {
      name: "Pro Plan",
      price: "₺149 / ay",
      description: "Profesyonel kullanıcılar için gelişmiş analiz özellikleri.",
      features: [
        "Sınırsız rapor analizi",
        "Yapay zeka destekli hatalı madde tespiti",
        "PDF ve görsel yükleme desteği",
        "Eczane ekip yönetimi",
      ]
    },
    {
      name: "Kurumsal Plan",
      price: "Özel",
      description: "Çoklu şube ve entegrasyon çözümleri için özel plan.",
      features: [
        "API erişimi ve entegrasyon",
        "Özel destek ve eğitim",
        "Detaylı raporlama paneli",
        "Kişiselleştirilmiş analiz kuralları",
      ]
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white via-[#F8FFFD] to-[#E9FFFB]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17C6A3] to-[#0F918B]"
        >
          Ödeme Planı
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg">
          RaporinAI’yi ihtiyaçlarına göre seç. Ücretsiz başla, büyüdükçe planını yükselt.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-2xl shadow-lg border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#E9FFFB] to-[#D8FFF6] border-[#0F918B]"
                  : "bg-white border-gray-200 hover:border-[#17C6A3]/40"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-[#0F918B] mb-4">
                {plan.price}
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="text-gray-700 mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#17C6A3]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
