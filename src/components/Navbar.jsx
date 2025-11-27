"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
          <Link href="/blog" className="hover:text-[#0F918B]">Blog</Link>
          <Link href="/#contact" className="hover:text-[#0F918B]">İletişim</Link>
        </div>

        {/* CTA (masaüstü) */}
        <div className="hidden md:flex">
          <Link
            href="/download"
            className="px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B] hover:shadow-lg transition-all"
          >
            🚀 Uygulamayı İndir
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
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>İletişim</Link>
          <Link
            href="/download"
            onClick={() => setMenuOpen(false)}
            className="px-5 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#17C6A3] to-[#0F918B]"
          >
            🚀 Uygulamayı İndir
          </Link>
        </div>
      )}
    </nav>
  );
}
