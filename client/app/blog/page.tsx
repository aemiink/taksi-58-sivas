import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: { absolute: "Sivas Taksi Blog | Sivas'ta Taksi Hizmeti Rehberi | Taksi 58 Sivas" },
  description:
    "Sivas taksi hizmetleri hakkında kapsamlı rehberler. Terminal, havalimanı, hastane ve şehir içi taksi bilgileri. Taksi 58 Sivas blog sayfası.",
  alternates: { canonical: "https://taksi58sivas.com/blog" },
  openGraph: {
    title: "Sivas Taksi Blog | Taksi 58 Sivas",
    description: "Sivas taksi hizmetleri hakkında kapsamlı rehberler ve bilgi yazıları.",
    url: "https://taksi58sivas.com/blog",
    type: "website",
    locale: "tr_TR",
    siteName: "Taksi 58 Sivas",
    images: [{ url: "https://taksi58sivas.com/gallery/taksi_08.png", width: 1200, height: 630, alt: "Taksi 58 Sivas Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivas Taksi Blog | Taksi 58 Sivas",
    description: "Sivas taksi hizmetleri hakkında kapsamlı rehberler ve bilgi yazıları.",
    images: ["https://taksi58sivas.com/gallery/taksi_08.png"],
  },
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black text-white py-3 px-4 border-b-2 border-[#FFD700]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#FFD700]">
            Taksi 58 Sivas
          </Link>
          <a
            href="tel:05534074989"
            className="bg-[#FFD700] text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#FFC700] transition-colors"
          >
            0553 407 49 89
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">
            Anasayfa
          </Link>{" "}
          / <span className="text-black font-medium">Blog</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Sivas Taksi Rehberi & Blog
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          Sivas'ta taksi hizmetleri, transfer güzergahları, fiyatlar ve pratik bilgiler hakkında kapsamlı
          rehber yazıları. Taksi 58 Sivas olarak şeffaf ve bilgilendirici içerikler sunuyoruz.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
            >
              <div className="bg-[#FFD700] h-2" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>·</span>
                  <span>{post.readTime} dk okuma</span>
                </div>
                <h2 className="text-xl font-bold text-black mb-3 leading-tight">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#C89F00] transition-colors"
                  >
                    {post.heroTitle}
                  </Link>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.metaDescription}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-black hover:text-[#C89F00] transition-colors"
                >
                  Devamını Oku →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-black text-white px-4 py-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">© 2025 Taksi 58 Sivas. Tüm hakları saklıdır.</p>
          <a
            href="tel:05534074989"
            className="bg-[#FFD700] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#FFC700] transition-colors"
          >
            0553 407 49 89 — Hemen Ara
          </a>
        </div>
      </footer>
    </div>
  );
}
