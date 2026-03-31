"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaBrain, FaUsers, FaRocket, FaShieldAlt, FaChartLine } from "react-icons/fa";
import FooterEN from "../../../components/en/FooterEN";

export default function AboutPageEN() {
  const teamMembers = [
    {
      name: "Pharmacist Team",
      role: "Field Experience & Consulting",
      icon: <FaUsers size={40} className="text-teal-600" />,
      description: "With 20+ years of pharmacy experience, we understand real-world needs"
    },
    {
      name: "Software Team",
      role: "Technology & Development",
      icon: <FaBrain size={40} className="text-teal-600" />,
      description: "Experts in AI and software technologies"
    },
    {
      name: "Data Security",
      role: "GDPR & Security",
      icon: <FaShieldAlt size={40} className="text-teal-600" />,
      description: "Personal data protection and cybersecurity experts"
    }
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
            className="mb-8"
          >
            <Image src="/logo.png" alt="RaporinAI" width={200} height={80} className="mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0F918B] via-[#12A897] to-[#17C6A3] mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are an AI-powered platform that digitizes pharmacy insurance report verification processes, prevents financial losses, and saves time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-teal-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <FaLightbulb size={40} className="text-amber-500" />
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>RaporinAI</strong> was born to solve one of the biggest daily challenges pharmacists face: 
                <strong className="text-teal-600"> financial losses from insurance report verification errors.</strong>
              </p>
              <p>
                Pharmacists who have to manually check dozens of reports every day can face thousands of dollars in 
                insurance deductions due to a small error. Regulatory non-compliance, missing information, incorrect ICD codes... 
                These issues lead to both time waste and significant financial losses.
              </p>
              <p>
                With our <strong>team of pharmacists and software experts</strong>, we developed a permanent solution to this problem. 
                Thanks to AI technology, we analyze reports in seconds and detect potential errors in advance.
              </p>
              <p className="text-teal-700 font-semibold">
                Our goal is simple: Make pharmacists&apos; work easier, prevent financial losses, and lead digital transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="py-16 px-6 lg:px-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <FaBrain size={50} className="text-teal-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Technology</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              RaporinAI operates with advanced Optical Character Recognition (OCR) and Natural Language Processing (NLP) technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaRocket className="text-teal-600" />
                How It Works
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">1</span>
                  <span><strong>Report Upload:</strong> Upload your insurance reports in PDF format</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">2</span>
                  <span><strong>OCR Analysis:</strong> Advanced OCR system automatically masks patient personal information for data protection compliance</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">3</span>
                  <span><strong>Regulatory Check:</strong> ICD codes, diagnoses, and regulatory compliance are verified</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">4</span>
                  <span><strong>Results Report:</strong> Errors and recommendations are presented in detail</span>
                </li>
              </ol>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaChartLine className="text-teal-600" />
                Our Advantages
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span><strong>95% Accuracy Rate:</strong> High precision with advanced AI models</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span><strong>Results in Seconds:</strong> 10x faster than manual verification</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span><strong>GDPR Compliant:</strong> No personal patient data is stored</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-teal-600 text-xl">✓</span>
                  <span><strong>Continuous Updates:</strong> Regulatory changes are automatically tracked</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a multidisciplinary team of experts in pharmacy, software, and data security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships & Accelerators */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnerships & Accelerators</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to be part of leading accelerator programs that support healthcare innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/acc-ing-26.png"
                alt="ITU Cekirdek Acceleration Program"
                width={180}
                height={72}
                className="w-auto h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">ITU Çekirdek</h3>
              <p className="text-gray-600 text-sm">
                Selected for the ITU Çekirdek Acceleration Program, one of Turkey&apos;s top university-backed startup accelerators.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <Image
                src="/bayerG4A.png"
                alt="Bayer G4A Program"
                width={180}
                height={72}
                className="w-auto h-16 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bayer G4A</h3>
              <p className="text-gray-600 text-sm">
                Accepted into the Bayer G4A (Grants4Apps) program, a global digital health accelerator by Bayer.
              </p>
            </motion.div>
          </div>
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
            Join the RaporinAI Family
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Reduce insurance deductions, save time, and be part of the digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/download"
              className="inline-block px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/en#contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      <FooterEN />
    </main>
  );
}
