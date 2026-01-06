"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaNewspaper, FaUniversity } from "react-icons/fa";

export default function ReferanslarContent() {
    const referanslar = [
        {
            id: 1,
            name: "Malatya Eczacı Odası",
            type: "Eczacı Odası",
            description: "Türk Eczacılar Birliği 22. Bölge Malatya Eczacı Odası tarafından yapılan duyuru.",
            url: "https://www.malatyaeczaciodasi.org.tr/duyuru/eczane-rapor-kontrol-programi-hk-1194",
            icon: FaUniversity,
            gradient: "from-blue-500 to-indigo-600",
            bgGradient: "from-blue-50 to-indigo-50",
            borderColor: "border-blue-200",
            hoverBorder: "hover:border-blue-400",
        },
        {
            id: 2,
            name: "Trabzon Eczacı Odası",
            type: "Eczacı Odası",
            description: "Türk Eczacılar Birliği 18. Bölge Trabzon Eczacı Odası tarafından yapılan duyuru.",
            url: "https://www.trabzoneczaciodasi.org.tr/duyuru/eczane-rapor-kontrol-uygulamasi-7630",
            icon: FaUniversity,
            gradient: "from-purple-500 to-violet-600",
            bgGradient: "from-purple-50 to-violet-50",
            borderColor: "border-purple-200",
            hoverBorder: "hover:border-purple-400",
        },
        {
            id: 3,
            name: "Eczane Sitesi",
            type: "Haber Portalı",
            description: "Eczaneler İçin Yeni Nesil Çözüm: Ücretsiz SGK Rapor Kontrol Aracı RaporinAI Yayında",
            url: "https://www.eczanesitesi.com/lansmanlar/eczaneler-icin-yeni-nesil-cozum-ucretsiz-sgk-rapor-kontrol-araci-raporinai-yayinda-369",
            icon: FaNewspaper,
            gradient: "from-teal-500 to-emerald-600",
            bgGradient: "from-teal-50 to-emerald-50",
            borderColor: "border-teal-200",
            hoverBorder: "hover:border-teal-400",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-6">
            {/* Başlık */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
            >
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Referanslar
                </h1>
                <p className="text-gray-600 max-w-xl mx-auto">
                    RaporinAI hakkında yayınlanan haberler ve duyurular.
                </p>
            </motion.div>

            {/* Referans Kartları */}
            <div className="space-y-6">
                {referanslar.map((item, index) => (
                    <motion.a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${item.name} - ${item.description}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 8 }}
                        className={`group flex items-start gap-5 p-6 bg-white rounded-xl border-2 ${item.borderColor} ${item.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer block`}
                    >
                        {/* İkon */}
                        <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                            <item.icon className="text-white text-2xl" />
                        </div>

                        {/* İçerik */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                                    {item.type}
                                </span>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors">
                                {item.name}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        {/* Ok İkonu */}
                        <div className="flex-shrink-0 flex items-center self-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <FaExternalLinkAlt className="text-gray-400 text-sm" />
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Alt Bilgi */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-400 text-sm">
                    Yeni referanslar eklendikçe bu sayfa güncellenecektir.
                </p>
            </motion.div>
        </div>
    );
}
