"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const screenshots = [
  { id: 1, src: "/screens/ilac-secimi.png", alt: "Akıllı Rapor Kontrolü" },
  { id: 2, src: "/screens/pdf-mask.png", alt: "KVKK Uyumlu Rapor Maskeleme" },
  { id: 3, src: "/screens/detay.png", alt: "Rapor Kontrol Detayı" },
  { id: 4, src: "/screens/kontrol.png", alt: "İşlemdeki Raporlar" },
  { id: 5, src: "/screens/sonuc.png", alt: "Rapor Kontrol Sonuçları" },
];

export default function HeroSection() {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const getSlidePosition = (index) => {
    const diff = index - activeIndex;
    const total = screenshots.length;
    const normalizedDiff = ((diff + total) % total);
    
    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1) return 'right';
    if (normalizedDiff === total - 1) return 'left';
    return 'hidden';
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-16 bg-gradient-to-b from-[#E8FFFB] via-[#F9FFFD] to-white">
 
      {/* SOL TARAF */}
      <div className="max-w-xl text-center lg:text-left mt-10 lg:mt-0 relative">
        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#0F918B] via-[#12A897] to-[#17C6A3] text-center lg:text-left"
        >
          <span className="flex items-center justify-center lg:justify-start gap-1">
            <Image 
              src="/eczane-logo.png" 
              alt="E" 
              width={60} 
              height={60} 
              className="object-contain"
            />
            <span>czaneler İçin</span>
          </span>
          <span className="block">Akıllı Rapor Kontrol Uygulaması</span>
        </motion.h1>

        {/* Değer Önerisi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-gray-600 text-lg leading-relaxed"
        >
          <strong>RaporinAI</strong>, eczaneler için geliştirilen yapay zeka destekli rapor analizi
          platformudur. Manuel rapor kontrol hatalarının önüne geçerek zamandan tasarruf sağlar ve süreci dijitalleştirir.
        </motion.p>

        {/* Somut Fayda - Vurucu Kart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 relative overflow-hidden"
        >
          <div className="relative p-6 bg-gradient-to-br from-amber-400/30 via-yellow-500/30 to-amber-600/30 rounded-2xl shadow-2xl border-2 border-amber-300/40 backdrop-blur-md">
            {/* Dekoratif arka plan efekti */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/40 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  SGK Kesintilerini %95'e Kadar Azaltın
                </h3>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Yapay zeka destekli analiz ile hatalı raporları önceden tespit edin, mali kayıplarınızı önleyin.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Butonları */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <motion.a
            href="/download"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-xl transition-all duration-300"
          >
            🚀 Hemen Deneyin
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 rounded-full text-[#0F918B] font-semibold border-2 border-[#17C6A3] hover:bg-teal-50 transition-all duration-300"
          >
            Nasıl Çalışır?
          </motion.a>
        </div>
      </div>

      {/* SAĞ TARAF - 3D CAROUSEL */}
<div className="relative flex justify-center items-center w-full lg:w-1/2 mt-12 lg:mt-0">
  {/* 💻 Masaüstü görünüm - 3D Carousel */}
  <div className="hidden lg:block relative w-full h-[500px]">
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {screenshots.map((shot, index) => {
        const position = getSlidePosition(index);
        return (
          <motion.div
            key={shot.id}
            initial={false}
            animate={{
              x: position === 'center' ? 0 : position === 'left' ? -200 : position === 'right' ? 200 : 0,
              scale: position === 'center' ? 1 : position === 'hidden' ? 0.5 : 0.7,
              opacity: position === 'center' ? 1 : position === 'hidden' ? 0 : 0.5,
              zIndex: position === 'center' ? 20 : position === 'hidden' ? 0 : 10,
              rotateY: position === 'left' ? 25 : position === 'right' ? -25 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute cursor-pointer rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200"
            style={{
              transformStyle: 'preserve-3d',
            }}
            onClick={() => {
              if (position === 'center') {
                setSelected(shot);
              } else if (position === 'right') {
                nextSlide();
              } else if (position === 'left') {
                prevSlide();
              }
            }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={400}
              height={280}
              className="object-cover rounded-xl"
            />
            {position === 'center' && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold text-center">{shot.alt}</p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
    
    {/* Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
    >
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* Dots Indicator */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
      {screenshots.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === activeIndex ? 'bg-[#17C6A3] w-8' : 'bg-gray-300 hover:bg-gray-400'
          }`}
        />
      ))}
    </div>
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
