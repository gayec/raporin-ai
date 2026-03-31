"use client";

import { motion } from "framer-motion";
import { FaPills, FaFileUpload, FaEyeSlash, FaRobot, FaCheckCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";

export default function HowItWorksEN() {
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    {
      icon: <FaPills size={30} className="text-teal-600" />,
      title: "Select Medicine",
      desc: "Choose the medicine you want to verify and start uploading reports.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/ilac-secimi-4.png",
      stepNumber: "01",
    },
    {
      icon: <FaFileUpload size={30} className="text-teal-600" />,
      title: "Upload Report",
      desc: "Upload your insurance report in PDF format to RaporinAI.",
      gradient: "from-emerald-100 via-cyan-50 to-teal-100",
      image: "/screens/rapor-yukleme.png",
      stepNumber: "02",
    },
    {
      icon: <FaEyeSlash size={30} className="text-teal-600" />,
      title: "Data Masking",
      desc: "For privacy and data protection compliance, patient and doctor personal information is automatically masked on your device.",
      gradient: "from-cyan-100 via-emerald-50 to-teal-100",
      image: "/screens/pdf-mask-3.png",
      stepNumber: "03",
    },
    {
      icon: <FaRobot size={30} className="text-teal-600" />,
      title: "AI Analysis",
      desc: "RaporinAI analyzes the masked report against the latest healthcare regulations and detects potential insurance deductions early.",
      gradient: "from-teal-100 via-emerald-50 to-cyan-100",
      image: "/screens/kontrol.png",
      stepNumber: "04",
    },
    {
      icon: <FaCheckCircle size={30} className="text-teal-600" />,
      title: "View Results",
      desc: "Analyzes the report's regulatory compliance and provides actionable feedback for corrections.",
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
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
              Works
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Analyze your insurance reports with RaporinAI in 5 simple steps
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
              {/* Image Area */}
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
                          <span className="text-sm font-medium text-gray-700">🔍 Click to enlarge</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <p className="text-gray-400 text-sm">Image coming soon</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 w-full">
                <div className={`relative p-8 rounded-2xl shadow-sm border border-teal-100 bg-gradient-to-br ${step.gradient}`}>
                  <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/40 blur-3xl rounded-full opacity-60" />
                  <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/30 blur-2xl rounded-full opacity-60" />

                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#17C6A3] to-[#0F918B] text-white font-bold text-xl mb-4 shadow-lg">
                      {step.stepNumber}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-shrink-0">{step.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                    </div>

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
                Guides
              </span>
            </h3>
            <p className="text-gray-600 text-lg">
              Learn how to use RaporinAI step by step
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Main Video */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                How Does RaporinAI Work?
              </h4>
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/KA0H256lyyc"
                  title="How Does RaporinAI Work?"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Tutorial Video */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                How to Download Reports in PDF Format?
              </h4>
              <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden shadow-2xl border border-teal-100 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/FxFKBCjwdI4"
                  title="How to Download Reports in PDF Format?"
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
