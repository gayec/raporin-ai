import Link from "next/link";

export const metadata = {
  title: "KVKK ve Hukuki Metinler",
  description:
    "RaporinAI kullanım koşulları, üyelik sözleşmesi, çerez aydınlatma metinleri ve KVKK kapsamındaki tüm hukuki dokümanlara buradan ulaşabilirsiniz.",
  alternates: {
    canonical: "https://raporin.com/kvkk",
  },
};

const DOCUMENTS = [
  {
    href: "/kvkk/kullanim-kosullari-ve-uyelik-sozlesmesi",
    title: "Web Sitesi & Uygulama Kullanım Koşulları ve Üyelik Sözleşmesi",
    description:
      "RaporinAI internet sitesi ve masaüstü uygulamasının kullanım koşulları ile üyelik sözleşmesinin tam metni.",
    tag: "Sözleşme",
  },
  {
    href: "/kvkk/eczaneler-icin-aydinlatma-metni",
    title: "Kişisel Verilerin İşlenmesine Dair Aydınlatma Metni",
    description:
      "RaporinAI uygulamasını kullanan eczanelerin kişisel verilerinin hangi amaçlarla, hangi hukuki sebeplere dayalı olarak işlendiğine ve KVKK kapsamındaki haklarınıza dair aydınlatma metni.",
    tag: "Aydınlatma Metni",
  },
  {
    href: "/kvkk/uygulama-cerez-aydinlatma-metni",
    title: "RaporinAI Uygulaması Çerez Aydınlatma Metni",
    description:
      "Masaüstü uygulamada kullanılan çerezler, saklama süreleri, hukuki sebepler ve tercihlerinizi nasıl yöneteceğinize dair aydınlatma metni.",
    tag: "Aydınlatma Metni",
  },
  {
    href: "/kvkk/cerez-politikasi",
    title: "İnternet Sitesi Çerez Aydınlatma Metni",
    description:
      "raporin.com internet sitesinde kullanılan çerezler, kullanım amaçları, saklama süreleri ve çerez tercihlerinizin yönetimi.",
    tag: "Aydınlatma Metni",
  },
];

export default function KvkkPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FFFB] via-[#F9FFFD] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
          KVKK ve Hukuki Metinler
        </h1>
        <p className="mt-4 text-gray-700 text-[15px] leading-relaxed">
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki aydınlatma metinleri ile
          RaporinAI internet sitesi ve uygulamasının kullanımına ilişkin sözleşme ve koşulların
          tamamına aşağıdan ulaşabilirsiniz.
        </p>

        <div className="mt-10 grid gap-4">
          {DOCUMENTS.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="group block rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all hover:border-[#17C6A3] hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-[#E8FFFB] px-3 py-1 text-xs font-semibold text-[#0F918B]">
                {doc.tag}
              </span>
              <h2 className="mt-3 text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#0F918B]">
                {doc.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{doc.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0F918B]">
                Metni oku
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
