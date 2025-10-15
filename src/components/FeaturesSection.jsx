"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaHistory, FaUsersCog, FaRobot } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaShieldAlt size={26} className="text-teal-600" />,
      title: "KVKK Uyumu ve Güvenli Analiz",
      desc: "Kişisel veriler maskelenerek işlenir; tüm analizler KVKK standartlarına uygundur.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
    },
    {
      icon: <FaHistory size={26} className="text-teal-600" />,
      title: "Geçmiş Raporların Takibi",
      desc: "Tüm rapor analiz geçmişine eriş; sonuçları anında görüntüle ve karşılaştır.",
      gradient: "from-teal-50 via-cyan-50 to-emerald-100",
    },
    {
      icon: <FaUsersCog size={26} className="text-teal-600" />,
      title: "Çoklu Kullanıcı ve Rol Yönetimi",
      desc: "Ekip üyelerine rol ve yetki atayarak güvenli ve düzenli kullanım sağla.",
      gradient: "from-emerald-100 via-teal-50 to-cyan-100",
    },
    {
      icon: <FaRobot size={26} className="text-teal-600" />,
      title: "Medula Hesabına Girmeden Kontrol",
      desc: "Rapor kontrolünü doğrudan platformdan yap; Medula bağlantısı gerekmez.",
      gradient: "from-cyan-100 via-emerald-50 to-teal-100",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Öne Çıkan{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
            Özellikler
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-2xl p-6 border border-teal-100 shadow-sm transition-all duration-300 bg-gradient-to-br ${f.gradient} hover:shadow-lg hover:-translate-y-1`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/50 blur-2xl opacity-70 group-hover:opacity-100 transition" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 w-52 h-52 rounded-full bg-white/30 blur-3xl" />

              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
