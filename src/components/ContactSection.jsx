"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#F9FFFD] via-[#EDFFFB] to-[#E3FFFA]"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#17C6A3] to-[#0F918B]"
        >
          İletişim
        </motion.h2>
        <p className="text-gray-600 mb-12 text-lg">
          Bizimle iletişime geçin. Geri bildiriminiz veya sorularınız varsa ekibimiz kısa sürede size dönüş yapacaktır.
        </p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/70 backdrop-blur-md border border-[#D9F5F0] rounded-2xl p-8 shadow-lg"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="E-posta"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition"
              required
            />
          </div>

          <textarea
            rows="5"
            placeholder="Mesajınız..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition mb-6"
            required
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg hover:shadow-[#0F918B]/30 transition-all duration-300"
          >
            Gönder
          </button>
        </motion.form>

        {/* Alt Bilgi */}
        <p className="mt-8 text-gray-500 text-sm">
          veya bize e-posta gönderin:{" "}
          <a
            href="mailto:info@raporinai.com"
            className="text-[#0F918B] font-medium hover:underline"
          >
            info@raporinai.com
          </a>
        </p>
      </div>
    </section>
  );
}
