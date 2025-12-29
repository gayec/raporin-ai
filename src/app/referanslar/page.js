import ReferanslarContent from "./ReferanslarContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
    title: "Referanslar | RaporinAI - Eczane Rapor Kontrol Programı",
    description: "RaporinAI hakkında yayınlanan haberler ve kurumsal referanslar. Eczacı odaları ve sektörel yayınlarda yer alan içerikler.",
    openGraph: {
        title: "Referanslar | RaporinAI",
        description: "RaporinAI hakkında yayınlanan haberler ve kurumsal referanslar.",
        url: "https://raporin.com/referanslar",
        siteName: "RaporinAI",
        type: "website",
    },
};

export default function ReferanslarPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24 pb-12">
                <ReferanslarContent />
            </main>
            <Footer />
        </>
    );
}
