"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.raporin.com";
      const response = await fetch(`${apiUrl}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(responseText);
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          message: ""
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(responseText || "Bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      setSubmitStatus("error");
      setStatusMessage("❌ Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="fullName"
              placeholder="Ad Soyad"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              placeholder="E-posta"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition"
              required
              disabled={isSubmitting}
            />
          </div>

          <textarea
            rows="5"
            name="message"
            placeholder="Mesajınız..."
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#17C6A3] focus:ring-1 focus:ring-[#17C6A3] outline-none transition mb-6"
            required
            disabled={isSubmitting}
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg hover:shadow-[#0F918B]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>

          {/* Status Message */}
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-4 rounded-lg ${submitStatus === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
                }`}
            >
              {statusMessage}
            </motion.div>
          )}
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
