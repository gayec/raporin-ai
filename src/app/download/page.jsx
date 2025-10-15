import Image from "next/image";

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#F8FBFF] via-white to-[#E8FFFB]">
      {/* İçerik Kutusu */}
      <div className="absolute top-32 left-10 w-72 h-72 bg-[#17C6A3]/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#0F918B]/20 rounded-full blur-3xl animate-pulse" />

      <div className="bg-gradient-to-br from-[#E6FFFA] via-[#F4FFFE] to-[#CCF5FF] p-10 rounded-3xl shadow-lg text-center max-w-3xl mx-auto border border-[#D6F8F2]">
      {/* Sadece Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Raporin AI Logo"
            width={80}
            height={80}
            className="drop-shadow-sm"
          />
        </div>

        {/* Başlık – Uygulamayı indir */}
        <h1 className="text-4xl font-bold text-[#0F918B] mb-4">
          Uygulamayı İndir
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 mb-10 leading-relaxed">
          Raporin AI masaüstü sürümünü indirerek SGK raporlarını güvenle analiz edebilirsin.  
          Tüm analizler cihazında, güvenli bir şekilde yapılır.
        </p>

        {/* Gradient Buton */}
        <a
          href="https://download.raporin.com/RaporinAI_Setup_Windows.exe"
          className="inline-block bg-gradient-to-r from-[#17C6A3] to-[#0F918B] text-white font-semibold px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
        >
          💻 Uygulamayı İndir
        </a>

        {/* Alt açıklama */}
        <p className="mt-10 text-sm text-gray-500">
          Kurulum tamamlandıktan sonra hesabına giriş yaparak  
          Raporin AI’ın tüm özelliklerinden yararlanabilirsin.
        </p>
      </div>
    </main>
  );
}
