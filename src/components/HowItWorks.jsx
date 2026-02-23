"use client";

import { motion } from "framer-motion";
import { FaPills, FaFileUpload, FaEyeSlash, FaRobot, FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function HowItWorks() {
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    {
      icon: <FaPills size={30} className="text-teal-600" />,
      title: "İlaç Seçimi",
      desc: "Kontrol edeceğiniz ilacı seçin ve rapor yüklemeye başlayın.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/ilac-secimi-4.png",
      stepNumber: "01",
    },
    {
      icon: <FaFileUpload size={30} className="text-teal-600" />,
      title: "Rapor Yükleme",
      desc: "Medula'dan PDF formatında alınan SGK raporunu RaporinAI'ye yükleyin.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
      image: "/screens/rapor-yukleme.png",
      stepNumber: "02",
    },
    {
      icon: <FaEyeSlash size={30} className="text-teal-600" />,
      title: "Maskeleme",
      desc: "KVKK uyumu ve gizlilik için hasta ve doktor kişisel bilgileri otomatik olarak bilgisayarınızda maskelenir.",
      gradient: "from-cyan-100 via-emerald-50 to-teal-100",
      image: "/screens/pdf-mask-3.png",
      stepNumber: "03",
    },
    {
      icon: <FaRobot size={30} className="text-teal-600" />,
      title: "Yapay Zeka Analizi",
      desc: "RaporinAI, maskelenmiş raporu en güncel SUT kurallarına göre analiz eder ve olası SGK kesintilerini erken tespit eder.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/kontrol.png",
      stepNumber: "04",
    },
    {
      icon: <FaCheckCircle size={30} className="text-teal-600" />,
      title: "Sonucu Gör",
      desc: "Raporun SUT uyumluluğunu analiz ederek size düzeltme için geri bildirim verir.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
      image: "/screens/detay-1.png",
      stepNumber: "05",
    },
  ];

  return (
    <section id="how-it-works" className="py-28 bg-gradient-to-b from-white via-[#F9FFFD] to-[#E8FFFB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nasıl{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
              Çalışır?
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            5 basit adımda RaporinAI ile SGK raporlarınızı analiz edin
          </p>
        </motion.div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Görsel Alanı */}
              <div className="flex-1 w-full">
                <div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-white cursor-pointer hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group"
                  onClick={() => step.image && setSelectedImage(step.image)}
                >
                  {step.image ? (
                    <>
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                        <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium text-gray-700">🔍 Büyütmek için tıkla</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <p className="text-gray-400 text-sm">Görsel eklenecek</p>
                    </div>
                  )}
                </div>
              </div>

              {/* İçerik Alanı */}
              <div className="flex-1 w-full">
                <div className={`relative p-8 rounded-2xl shadow-sm border border-teal-100 bg-gradient-to-br ${step.gradient}`}>
                  {/* Highlight efekti */}
                  <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/40 blur-3xl rounded-full opacity-60" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/30 blur-2xl rounded-full opacity-60" />

                  <div className="relative">
                    {/* Adım Numarası */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#17C6A3] to-[#0F918B] text-white font-bold text-xl mb-4 shadow-lg">
                      {step.stepNumber}
                    </div>

                    {/* İkon ve Başlık */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                    </div>

                    {/* Açıklama */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Video{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
                Rehberler
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              RaporinAI kullanımını adım adım öğrenin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Ana Video */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                RaporinAI Nasıl Çalışır?
              </h4>
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/KA0H256lyyc"
                  title="RaporinAI Nasıl Çalışır?"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Yardımcı Video */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                Medula Üzerinden PDF Formatında Rapor Nasıl İndirilir?
              </h4>
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/FxFKBCjwdI4"
                  title="Medula Üzerinden PDF Formatında Rapor Nasıl İndirilir?"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <IoClose size={32} />
          </button>

          <div
            className="relative w-full max-w-7xl h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      )}
    </section>
  );
}
