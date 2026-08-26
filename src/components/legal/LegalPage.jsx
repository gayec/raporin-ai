import Link from "next/link";

export const LEGAL_COMPANY =
  "KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ";

export const LEGAL_ADDRESS =
  "Atatürk Mah. Ertuğrul Gazi Sk. Metropol İstanbul Sitesi C1 Blok No: 2B İç Kapı No: 376 Ataşehir / İstanbul";

export const LEGAL_MERSIS = "0489125575800001";

export function Heading({ children, id }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-bold text-gray-900 pt-8 pb-1 scroll-mt-24">
      {children}
    </h2>
  );
}

export function SubHeading({ children }) {
  return <h3 className="text-lg font-semibold text-[#0F918B] pt-5 pb-1">{children}</h3>;
}

export function LegalPage({ title, subtitle, updatedAt, backHref = "/kvkk", children }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#E8FFFB] via-[#F9FFFD] to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0F918B] hover:underline"
        >
          <span aria-hidden="true">←</span> KVKK ve Hukuki Metinler
        </Link>

        <h1 className="mt-6 text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#17C6A3] to-[#0F918B]">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">{subtitle}</p>
        ) : null}

        {updatedAt ? (
          <p className="mt-2 text-sm text-gray-500">Son güncelleme: {updatedAt}</p>
        ) : null}

        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </main>
  );
}

export default LegalPage;
