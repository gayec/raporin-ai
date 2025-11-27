import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Blog | RaporinAI - Eczane Rapor Kontrol ve SGK Analiz Yazıları",
    description: "Eczane rapor kontrol süreçleri, SGK SUT değişiklikleri ve yapay zeka destekli eczane yönetimi hakkında güncel bilgiler ve rehberler.",
};

export default function BlogPage() {
    const posts = [
        {
            slug: "sgk-rapor-kontrol-ve-sut-uyumlulugu",
            title: "SGK Rapor Kontrol Süreci ve SUT Uyumluluğu: Eczaneler İçin Rehber",
            excerpt: "SGK rapor kontrol süreçlerinde dikkat edilmesi gerekenler ve SUT (Sağlık Uygulama Tebliği) uyumluluğu hakkında kapsamlı bir rehber.",
            date: "27 Kasım 2025",
            image: "/blog/sgk-rapor.jpg", // Placeholder, we might not have this image but it's fine for structure
            category: "Rehber"
        }
    ];

    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        RaporinAI <span className="text-teal-600">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Eczacılık, SGK mevzuatı ve teknoloji dünyasından güncel haberler ve ipuçları.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                        >
                            <div className="relative h-48 bg-teal-50 flex items-center justify-center overflow-hidden">
                                {/* Placeholder for image if not exists */}
                                <div className="text-teal-600 text-6xl opacity-20">
                                    📄
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-semibold rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-gray-400 text-xs">{post.date}</span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-teal-600 font-medium text-sm mt-auto">
                                    Devamını Oku
                                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
