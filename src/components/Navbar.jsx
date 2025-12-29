"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-[#EAF9F5]/60 shadow-sm">
      <div className="flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="RaporinAI" width={200} height={60} priority />
        </Link>

        {/* Masaüstü menü */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-[#0F918B]">Ana Sayfa</Link>
          <Link href="/about" className="hover:text-[#0F918B]">Hakkımızda</Link>
          <Link href="/#features" className="hover:text-[#0F918B]">Özellikler</Link>
          <Link href="/#pricing" className="hover:text-[#0F918B]">Fiyatlandırma</Link>
          <Link href="/referanslar" className="hover:text-[#0F918B]">Referanslar</Link>
          <Link href="/blog" className="hover:text-[#0F918B]">Blog</Link>
          <Link href="/#contact" className="hover:text-[#0F918B]">İletişim</Link>
        </div>

        {/* CTA (masaüstü) - Promosyon Badge */}
        <div className="hidden md:block">
          <Link href="/download">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              {/* Arka plan parlama efekti */}
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-200"></div>

              <div className="relative flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 shadow-md border border-white/20">


                <span className="text-2xl animate-bounce">🎁</span>

                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="text-xs font-bold text-white tracking-wide">
                    Uygulamayı İndir
                  </span>
                  <span className="text-xs font-extrabold text-yellow-100 uppercase tracking-widest drop-shadow-md whitespace-nowrap bg-white/10 px-1.5 py-0.5 rounded-sm">
                    ✨ ŞİMDİ ÜCRETSİZ
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Mobil menü butonu */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil menü dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100 flex flex-col items-center gap-4 py-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
          <Link href="/#features" onClick={() => setMenuOpen(false)}>Özellikler</Link>
          <Link href="/#pricing" onClick={() => setMenuOpen(false)}>Fiyatlandırma</Link>
          <Link href="/referanslar" onClick={() => setMenuOpen(false)}>Referanslar</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>İletişim</Link>
          <Link href="/download" onClick={() => setMenuOpen(false)}>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer mt-2"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full blur opacity-20 transition duration-200"></div>
              <div className="relative flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 shadow-md border border-white/20">

                <span className="text-2xl animate-bounce">🎁</span>
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span className="text-sm font-bold text-white tracking-wide">Uygulamayı İndir</span>
                  <span className="text-xs font-extrabold text-yellow-100 uppercase tracking-widest drop-shadow-md whitespace-nowrap bg-white/10 px-1.5 py-0.5 rounded-sm">✨ ŞİMDİ ÜCRETSİZ</span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      )}
    </nav>
  );
}
