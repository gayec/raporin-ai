"use client";

import { motion } from "framer-motion";
import { FaFileUpload, FaRobot, FaCheckCircle } from "react-icons/fa";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaFileUpload size={30} className="text-teal-600" />,
      title: "Raporu Yükle",
      desc: "PDF veya görsel formatındaki SGK raporunu sisteme yükle.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
    },
    {
      icon: <FaRobot size={30} className="text-teal-600" />,
      title: "Yapay Zeka Analizi",
      desc: "Raporin AI, SUT kurallarını analiz eder ve olası hataları tespit eder.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
    },
    {
      icon: <FaCheckCircle size={30} className="text-teal-600" />,
      title: "Sonucu Gör",
      desc: "Raporun geçerlilik durumunu, uyarıları ve açıklamaları saniyeler içinde öğren.",
      gradient: "from-cyan-100 via-emerald-50 to-teal-100",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB] text-center">
      <motion.h2
        className="text-4xl font-bold mb-16 text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nasıl{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
          Çalışır?
        </span>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className={`relative overflow-hidden p-8 rounded-2xl shadow-sm border border-teal-100 bg-gradient-to-br ${s.gradient} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* highlight efekti */}
            <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/40 blur-3xl rounded-full opacity-60" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/30 blur-2xl rounded-full opacity-60" />

            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{s.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
