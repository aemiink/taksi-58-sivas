import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://taksi58sivas.com";
const heroImage = `${siteUrl}/gallery/taksi_08.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Taksi 58 Sivas | 7/24 Sivas Taksi Hizmeti — 0553 407 49 89",
    template: "%s | Taksi 58 Sivas",
  },
  description:
    "Sivas taksi için 0553 407 49 89'u arayın. 7/24 şehir içi, terminal, otogar, hastane ve havalimanı transferi. 5 dakikada kapınızda.",
  keywords: [
    "sivas taksi",
    "sivas taksi hizmeti",
    "sivas taksi numarası",
    "sivas 7/24 taksi",
    "taksi 58 sivas",
    "sivas terminal taksi",
    "sivas otogar taksi",
    "sivas hastane taksi",
    "sivas havalimanı taksi",
    "sivas şehir içi taksi",
    "sivas taksi çağır",
    "sivas gece taksi",
    "cumhuriyet üniversitesi taksi",
    "sivas nuri demirag havalimanı taksi",
    "sivas taksi durağı",
    "0553 407 49 89",
  ],
  authors: [{ name: "Taksi 58 Sivas" }],
  creator: "Taksi 58 Sivas",
  publisher: "Taksi 58 Sivas",
  category: "Ulaşım, Taksi Hizmeti",
  openGraph: {
    title: "Taksi 58 Sivas | 7/24 Sivas Taksi — 0553 407 49 89",
    description:
      "Sivas taksi hizmeti için 0553 407 49 89'u arayın. 7/24 şehir içi, terminal, otogar, hastane ve havalimanı transferi. 5 dakikada kapınızda.",
    url: siteUrl,
    siteName: "Taksi 58 Sivas",
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: "Taksi 58 Sivas — 7/24 Sivas Taksi Hizmeti",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taksi 58 Sivas | 7/24 Sivas Taksi — 0553 407 49 89",
    description:
      "Sivas taksi hizmeti için 0553 407 49 89'u arayın. 7/24 şehir içi, terminal, otogar, hastane ve havalimanı transferi.",
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification.google — Search Console'a eklendikten sonra buraya kod gelecek
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  "@id": `${siteUrl}/#taxiservice`,
  name: "Taksi 58 Sivas",
  alternateName: "Taksi 58",
  description:
    "Sivas'ta 7/24 hizmet veren yerel taksi işletmesi. Şehir içi, terminal, otogar, hastane ve havalimanı transferleri.",
  url: siteUrl,
  telephone: "+905534074989",
  priceRange: "$$",
  image: heroImage,
  logo: heroImage,
  currenciesAccepted: "TRY",
  paymentAccepted: "Cash",
  areaServed: [
    { "@type": "City", name: "Sivas", "@id": "https://www.wikidata.org/wiki/Q131202" },
    { "@type": "Place", name: "Sivas Merkez" },
    { "@type": "Place", name: "Sivas Terminal" },
    { "@type": "Place", name: "Sivas Otogar" },
    { "@type": "Place", name: "Sivas Nuri Demirag Havalimanı" },
    { "@type": "Place", name: "Cumhuriyet Üniversitesi" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sivas",
    addressRegion: "Sivas",
    postalCode: "58000",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.7477,
    longitude: 37.0179,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+905534074989",
    areaServed: "TR",
    availableLanguage: "tr",
  },
  sameAs: [`https://wa.me/905534074989`],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Taksi 58 Sivas Hizmetleri",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Şehir İçi Taksi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terminal Taksi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Otogar Taksi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hastane Taksi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Havalimanı Taksi" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Üniversite Taksi" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Sivas'ta 7/24 taksi hizmeti veriyor musunuz?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Taksi 58 Sivas, günün her saati şehir içi, terminal, otogar, hastane ve üniversite bölgelerine taksi hizmeti sunar. Hafta sonu ve resmi tatillerde de hizmetimiz kesintisiz devam eder.",
      },
    },
    {
      "@type": "Question",
      name: "Sivas terminal ve otogardan taksi çağırabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Sivas terminal ve otogar bölgeleri için hızlı araç yönlendirmesi yapılır. 0553 407 49 89'u arayarak veya WhatsApp'tan konum paylaşarak en yakın taksiyi talep edebilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Sivas Nuri Demirag Havalimanı'ndan şehre taksi hizmeti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Sivas Nuri Demirag Havalimanı'ndan şehir merkezine ve diğer noktalara transfer hizmeti sunuyoruz. Uçuş saatinize göre planlanmış transfer için önceden arayabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp üzerinden konum göndererek araç çağırabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. 905534074989 numarasına WhatsApp'tan konum paylaşarak bulunduğunuz noktaya daha hızlı taksi yönlendirilmesini sağlayabilirsiniz.",
      },
    },
    {
      "@type": "Question",
      name: "Sivas'ta taksi ne kadar sürede gelir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Şehir merkezinde ortalama 5 dakika, terminal ve otogar çevresinde ise en yakın aracımız yönlendirilerek mümkün olan en kısa sürede kapınıza ulaşıyoruz.",
      },
    },
    {
      "@type": "Question",
      name: "Gece saatlerinde Sivas'ta taksi bulabilir miyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Taksi 58 Sivas, gece 00:00'dan sabah 06:00'a kadar dahil olmak üzere tam 24 saat taksi hizmeti sunar. Gece varışları ve erken sabah transferleri için de hazırız.",
      },
    },
    {
      "@type": "Question",
      name: "Cumhuriyet Üniversitesi'ne taksi hizmeti var mı?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Cumhuriyet Üniversitesi kampüsü ve çevresi, düzenli olarak hizmet verdiğimiz bölgeler arasındadır. Öğrenciler ve akademik personel için hızlı ulaşım sağlıyoruz.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Anasayfa", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${siteUrl}/hizmetler/sehir-ici-taksi` },
    { "@type": "ListItem", position: 3, name: "Blog", item: `${siteUrl}/blog` },
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Taksi 58 Sivas",
  url: siteUrl,
  description: "Sivas'ta 7/24 taksi hizmeti. Şehir içi, terminal, otogar, hastane ve havalimanı transferleri.",
  inLanguage: "tr-TR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="geo.region" content="TR-58" />
        <meta name="geo.placename" content="Sivas" />
        <meta name="geo.position" content="39.7477;37.0179" />
        <meta name="ICBM" content="39.7477, 37.0179" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
