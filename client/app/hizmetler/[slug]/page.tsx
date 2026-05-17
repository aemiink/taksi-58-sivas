import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";
import { servicePages } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

const phoneNumber = "0553 407 49 89";
const whatsappHref = "https://wa.me/905534074989";
const callHref = "tel:05534074989";

export async function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  const url = `https://taksi58sivas.com/hizmetler/${service.slug}`;
  const ogImage = "https://taksi58sivas.com/gallery/taksi_08.png";
  return {
    title: { absolute: service.title },
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url,
      type: "website",
      locale: "tr_TR",
      siteName: "Taksi 58 Sivas",
      images: [{ url: ogImage, width: 1200, height: 630, alt: service.h1 }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    image: "https://taksi58sivas.com/gallery/taksi_08.png",
    url: `https://taksi58sivas.com/hizmetler/${service.slug}`,
    provider: {
      "@type": "TaxiService",
      "@id": "https://taksi58sivas.com/#taxiservice",
      name: "Taksi 58 Sivas",
      telephone: "+905534074989",
      url: "https://taksi58sivas.com",
    },
    areaServed: {
      "@type": "City",
      name: "Sivas",
    },
    serviceType: "Taksi Hizmeti",
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: "+905534074989",
        contactType: "customer service",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="bg-black text-white py-3 px-4 border-b-2 border-[#FFD700]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#FFD700]">
            Taksi 58 Sivas
          </Link>
          <a
            href={callHref}
            className="bg-[#FFD700] text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-[#FFC700] transition-colors"
          >
            {phoneNumber}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white">
              Anasayfa
            </Link>{" "}
            /{" "}
            <Link href="/#hizmetler" className="hover:text-white">
              Hizmetler
            </Link>{" "}
            / <span className="text-white/80">{service.h1}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.h1}</h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">{service.heroSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={callHref}
              className="inline-flex items-center gap-3 bg-[#FFD700] text-black font-bold px-8 py-4 rounded-xl text-xl hover:bg-[#FFC700] transition-colors"
            >
              <Phone className="w-6 h-6" strokeWidth={3} />
              {phoneNumber}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-4 rounded-xl text-lg hover:bg-[#20BA5A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-[#FFD700]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-10 text-center">Neden Bizi Tercih Etmelisiniz?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature) => (
              <div key={feature.title} className="bg-black rounded-2xl p-6">
                <CheckCircle2 className="w-8 h-8 text-[#FFD700] mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none text-gray-800
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:leading-relaxed [&_p]:mb-5
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5
              [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-10">Sık Sorulan Sorular</h2>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hemen Arayin</h2>
          <p className="text-white/70 mb-8 text-lg">
            Sivas&apos;ta 7/24 hizmet veriyoruz. En kısa sürede kapınızdayız.
          </p>
          <a
            href={callHref}
            className="inline-flex items-center gap-4 bg-[#FFD700] text-black font-bold px-10 py-6 rounded-2xl text-3xl hover:bg-[#FFC700] transition-colors shadow-2xl"
          >
            <Phone className="w-10 h-10" strokeWidth={3} />
            {phoneNumber}
          </a>
        </div>
      </section>

      <footer className="bg-black text-white px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-[#FFD700]">Taksi 58 Sivas</p>
            <p className="text-white/70 text-sm">7/24 Sivas Taksi Hizmeti</p>
          </div>
          <nav className="flex gap-4 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Anasayfa
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
