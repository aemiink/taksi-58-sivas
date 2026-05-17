import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `https://taksi58sivas.com/blog/${post.slug}`;
  const ogImage = "https://taksi58sivas.com/gallery/taksi_08.png";
  return {
    title: { absolute: post.title },
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.publishDate,
      locale: "tr_TR",
      siteName: "Taksi 58 Sivas",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.heroTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: "https://taksi58sivas.com/gallery/taksi_08.png",
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: "Taksi 58 Sivas",
      url: "https://taksi58sivas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Taksi 58 Sivas",
      url: "https://taksi58sivas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://taksi58sivas.com/gallery/taksi_08.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://taksi58sivas.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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

      <main className="max-w-4xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-black">
            Anasayfa
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>{" "}
          / <span className="text-black font-medium">{post.heroTitle}</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            {post.heroTitle}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} dakika okuma</span>
          </div>
          <div className="h-1 w-24 bg-[#FFD700] mt-6" />
        </header>

        <div
          className="prose prose-lg max-w-none text-gray-800
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:leading-relaxed [&_p]:mb-5
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
            [&_li]:mb-2
            [&_strong]:font-bold [&_strong]:text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-12 bg-[#FFD700] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-3">Hemen Taksi Çağırın</h2>
          <p className="text-black/80 mb-6">
            Sivas&apos;ta 7/24 hizmet veriyoruz. Tek aramada kapınıza geliyoruz.
          </p>
          <a
            href="tel:05534074989"
            className="inline-flex items-center gap-3 bg-black text-[#FFD700] font-bold px-8 py-4 rounded-xl text-xl hover:bg-gray-900 transition-colors"
          >
            0553 407 49 89
          </a>
        </div>
      </main>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12 mt-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-black mb-8">İlgili Yazılar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <article
                  key={r.slug}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-black mb-2 leading-tight">
                    <Link href={`/blog/${r.slug}`} className="hover:text-[#C89F00]">
                      {r.heroTitle}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">{r.readTime} dk okuma</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-black text-white px-4 py-8">
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
