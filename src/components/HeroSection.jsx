"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const screenshots = [
  { id: 1, src: "/screens/giris.png", alt: "Giriş Ekranı" },
  { id: 2, src: "/screens/detay.png", alt: "Rapor Kontrol Detay Ekranı" },
  { id: 3, src: "/screens/kontrol.png", alt: "Akıllı Rapor Kontrolü Ekranı" },
  { id: 4, src: "/screens/sonuc.png", alt: "Rapor Sonuç Ekranı" },
];

export default function HeroSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-16">
 
      {/* SOL TARAF */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 relative">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start mb-8">
          <Image src="/logo.png" alt="RaporinAI" width={180} height={70} priority />
        </div>

        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0F918B] via-[#12A897] to-[#17C6A3]"
        >
          SGK Raporlarını <br /> Yapay Zeka ile Analiz Et
        </motion.h1>

        {/* Açıklama */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-gray-600 text-lg leading-relaxed"
        >
          <strong>Raporin AI</strong>, eczaneler için geliştirilen yapay zeka destekli rapor analizi
          platformudur. Manuel rapor kontrol hatalarının önüne geçerek zamandan tasarruf sağlar ve süreci dijitalleştirir.
        </motion.p>

        {/* Buton */}
        <motion.a
          href="/download"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-xl transition-all duration-300"
        >
          🚀 Uygulamayı İndir
        </motion.a>
      </div>

      {/* SAĞ TARAF - GÖRSELLER */}
<div className="relative flex justify-center items-center w-full lg:w-1/2 mt-12 lg:mt-0">
  {/* 💻 Masaüstü görünüm */}
  <div className="hidden lg:block relative w-full h-[400px]">
    {screenshots.map((shot, index) => (
      <motion.div
        key={shot.id}
        whileHover={{ scale: 1.05, zIndex: 10 }}
        transition={{ duration: 0.25 }}
        className={`absolute shadow-xl cursor-pointer rounded-xl overflow-hidden border border-gray-200 hover:border-[#17C6A3] backdrop-blur-sm ${
          index === 0
            ? "top-0 left-12 rotate-[-6deg]"
            : index === 1
            ? "top-10 right-6 rotate-[4deg]"
            : index === 2
            ? "bottom-6 left-10 rotate-[2deg]"
            : "bottom-0 right-10 rotate-[-4deg]"
        }`}
        onClick={() => setSelected(shot)}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={300}
          height={200}
          className="object-cover rounded-lg"
        />
      </motion.div>
    ))}
  </div>

  {/* 📱 Mobil görünüm – Kaydırılabilir galeri */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex lg:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4 w-full px-4 scrollbar-hide"
  >
    {screenshots.map((shot, index) => (
      <motion.div
        key={shot.id}
        whileTap={{ scale: 0.97 }}
        className="snap-center shrink-0 w-72 sm:w-80 rounded-2xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer hover:shadow-xl transition-transform duration-300"
        onClick={() => setSelected(shot)}
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={320}
          height={220}
          className="w-full object-cover rounded-2xl"
        />
      </motion.div>
    ))}
  </motion.div>
</div>




      {/* MODAL - TAM BOY GÖRÜNTÜ */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
          <Dialog.Panel className="relative max-w-5xl w-full">
            {selected && (
              <Image
                src={selected.src}
                alt={selected.alt}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl object-contain"
              />
            )}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white text-3xl font-light hover:opacity-80"
            >
              ✕
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
