"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function FooterEN() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image src="/logo.png" alt="RaporinAI" width={150} height={60} className="mb-4" />
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Next-generation AI-powered pharmacy report verification platform and pharmacies&apos; digital transformation partner.
            </p>
            <div className="flex gap-3">
              <a href="https://x.com/raporinai?s=11&t=8Lo_CQSYIVbXaj_1yPJAeA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white rounded-full flex items-center justify-center transition-all">
                <FaTwitter size={18} />
              </a>
              <a href="https://www.linkedin.com/company/raporinai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white rounded-full flex items-center justify-center transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/raporinai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-100 hover:bg-teal-600 text-teal-600 hover:text-white rounded-full flex items-center justify-center transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/en/about" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/en#features" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/en#pricing" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/en#contact" className="text-gray-600 hover:text-teal-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <FaEnvelope className="text-teal-600 mt-1 flex-shrink-0" />
                <a href="mailto:info@raporin.com" className="hover:text-teal-600 transition-colors">
                  info@raporin.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <FaMapMarkerAlt className="text-teal-600 mt-1 flex-shrink-0" />
                <span>Istanbul, Turkey</span>
              </li>
            </ul>
          </div>

          {/* Partnerships */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Partnerships</h3>
            <div className="flex items-center gap-4">
              <Image
                src="/acc-ing-26.png"
                alt="ITU Cekirdek Incubation"
                width={160}
                height={64}
                className="w-auto h-14 object-contain"
              />
              <Image
                src="/bayerG4A.png"
                alt="Bayer G4A Program"
                width={160}
                height={64}
                className="w-auto h-14 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {currentYear} RaporinAI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
