"use client";

import { motion } from "motion/react";
import { Phone, MessageCircle, Clock, Shield, Users, Award, CheckCircle2, Star, MapPin, CarFront } from "lucide-react";

const businessName = "Taksi 58 Sivas";
const phoneNumber = "0553 407 49 89";
const whatsappNumber = "905534074989";
const heroBackground = "/gallery/taksi_08.png";
const callHref = `tel:${phoneNumber.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${whatsappNumber}`;

const galleryImages = [
  { src: "/gallery/taksi_01.png", alt: "Sivas'ta hizmet veren Taksi 58 aracinin dis gorunumu" },
  { src: "/gallery/taksi_02.png", alt: "Sivas gece trafiginde Taksi 58 taksi hizmeti" },
  { src: "/gallery/taksi_03.png", alt: "Sivas terminal cevresinde Taksi 58 araci" },
  { src: "/gallery/taksi_04.png", alt: "Sehir ici yolcu transferi icin kullanilan Taksi 58 araci" },
  { src: "/gallery/taksi_05.png", alt: "Sivas merkezde hizmet veren sari Taksi 58 araci" },
  { src: "/gallery/taksi_06.png", alt: "Gece saatlerinde gorevde olan Taksi 58 Sivas taksisi" },
  { src: "/gallery/taksi_07.png", alt: "Terminal ve otogar transferi icin hazir bekleyen Taksi 58 araci" },
  { src: "/gallery/taksi_08.png", alt: "Sivas'ta 7/24 taksi hizmeti veren Taksi 58 ana gorseli" },
];

const services = [
  { title: "Havalimani Taksi", description: "Sivas Nuri Demirag Havalimani icin planli ve hizli transfer." },
  { title: "Otogar Taksi", description: "Otobus saatine yetismek isteyenler icin beklemeden ulasim." },
  { title: "Hastane Taksi", description: "Acil ve planli hastane ulasimlarinda guvenli sehir ici transfer." },
  { title: "Universite Taksi", description: "Cumhuriyet Universitesi ve kampus cevresine hizli ulasim." },
];

const testimonials = [
  { text: "5 dakikada geldi, temiz ve guvenli bir yolculuktu.", name: "Mehmet Y." },
  { text: "Gece saati olmasina ragmen cok hizli ulastilar.", name: "Ayse D." },
  { text: "Terminalden eve donuste her zaman tercih ediyoruz.", name: "Ali K." },
];

const faqs = [
  {
    question: "Sivas'ta 7/24 taksi hizmeti veriyor musunuz?",
    answer:
      "Evet. Taksi 58 Sivas gunun her saati sehir ici, terminal, otogar, hastane ve universite bolgelerine taksi hizmeti sunar.",
  },
  {
    question: "Terminal ve otogardan taksi cagirabilir miyim?",
    answer:
      "Evet. Sivas terminal ve otogar bolgeleri icin hizli arac yonlendirmesi yapilir, musaitlik durumuna gore en yakin taksi gonderilir.",
  },
  {
    question: "WhatsApp uzerinden konum gondererek arac cagirabilir miyim?",
    answer:
      "Evet. WhatsApp uzerinden konum paylasarak bulundugunuz noktaya daha hizli taksi yonlendirilmesini saglayabilirsiniz.",
  },
  {
    question: "Sivas merkez disindaki noktalara transfer yapiyor musunuz?",
    answer:
      "Yogunluk ve mesafeye bagli olarak sehir ici ve cevre bolgelere transfer icin destek verilir. En net bilgi icin dogrudan aramaniz yeterlidir.",
  },
];

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
      >
        Ana icerige gec
      </a>

      <header className="bg-black text-white border-b-2 border-[#FFD700]">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-2 md:gap-5 text-sm md:text-base font-semibold">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> 7/24 Acik
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Guvenli Yolculuk
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Terminal ve Sehir Ici
          </span>
        </div>
      </header>

      <main id="icerik">
        {/* Hero */}
        <section className="relative min-h-[100svh] flex items-center justify-center bg-black text-white px-4 py-12 md:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroBackground}')` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/84 to-black/92" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <nav aria-label="Hizli baglantilar" className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
              <a href="#hizmetler" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors">
                Hizmetler
              </a>
              <a href="#galeri" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors">
                Galeri
              </a>
              <a href="#sss" className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10 transition-colors">
                Sik Sorulanlar
              </a>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-sm md:text-lg font-semibold uppercase tracking-[0.3em] text-[#FFD700]">
                Sivas Taksi Hizmeti
              </p>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2">Taksi 58 Sivas</h1>
              <p className="text-lg md:text-3xl font-semibold text-white max-w-4xl mx-auto">
                Sivas merkez, terminal, otogar, hastane ve universite bolgeleri icin 7/24 hizli ve guvenli taksi cagirin.
              </p>
              <div className="h-1 w-32 bg-[#FFD700] mx-auto mt-4" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-4xl mx-auto text-base md:text-xl text-white/90 leading-relaxed mb-8"
            >
              {businessName}, Sivas&apos;ta aninda ulasim ihtiyaci olan yolcular icin sehir ici taksi, terminal taksi, otogar
              taksi ve planli transfer hizmeti sunar. Tek tusla arayin, konumunuzu paylasin ve en yakin araci hizla
              yonlendirelim.
            </motion.p>

            <motion.a
              href={callHref}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block mb-10 group"
              aria-label={`${businessName} telefon numarasi ${phoneNumber}`}
            >
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(255, 215, 0, 0.4)",
                    "0 0 60px rgba(255, 215, 0, 0.8)",
                    "0 0 30px rgba(255, 215, 0, 0.4)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 md:gap-6 bg-[#FFD700] text-black px-4 md:px-16 py-4 md:py-10 rounded-xl md:rounded-2xl transition-transform group-hover:scale-105"
              >
                <Phone className="w-8 h-8 md:w-20 md:h-20" strokeWidth={3} aria-hidden="true" />
                <span className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight">{phoneNumber}</span>
              </motion.span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2 text-base md:text-2xl mb-8 md:mb-10"
            >
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" aria-hidden="true" />
                <span className="font-bold text-white">5 dakika icinde kapinda</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" aria-hidden="true" />
                <span className="font-bold text-white">Sivas merkez, terminal ve sehir ici hizmet</span>
              </p>
              <p className="font-bold text-[#FFD700] text-lg md:text-3xl mt-4">Bulundugun konuma en yakin taksi</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                href={callHref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-[#FFD700] text-black text-2xl md:text-4xl font-bold py-5 md:py-6 px-8 rounded-xl hover:bg-[#FFC700] transition-all shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
              >
                Simdi Ara
              </motion.a>
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-xl text-xl md:text-2xl font-semibold hover:bg-[#20BA5A] transition-all"
              >
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
                WhatsApp ile Yaz
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-24 px-4 bg-[#FFD700]" aria-labelledby="neden-biz">
          <div className="max-w-6xl mx-auto">
            <h2 id="neden-biz" className="text-3xl md:text-6xl font-bold text-center mb-4 text-black">
              Neden Taksi 58 Sivas?
            </h2>
            <p className="text-lg md:text-2xl text-center mb-12 md:mb-16 text-black/80 font-semibold max-w-4xl mx-auto">
              Sivas&apos;ta hizli taksi arayan yolcular icin guvenli surus, deneyimli hizmet ve kolay ulasilabilir iletisim
              sunuyoruz.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { icon: Award, value: "20+", label: "Yil Deneyim" },
                { icon: Users, value: "10.000+", label: "Mutlu Musteri" },
                { icon: Clock, value: "7/24", label: "Kesintisiz Hizmet" },
                { icon: Shield, value: "%100", label: "Guven Odakli Yolculuk" },
              ].map((item, i) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <item.icon className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-black" aria-hidden="true" />
                  <div className="text-3xl md:text-6xl font-bold text-black mb-1 md:mb-2">{item.value}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-black">{item.label}</h3>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <a
                href={callHref}
                className="bg-black text-[#FFD700] text-2xl md:text-4xl font-bold py-4 md:py-6 px-10 md:px-16 rounded-xl hover:bg-gray-900 transition-all inline-flex items-center gap-3 md:gap-4 shadow-xl hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              >
                <Phone className="w-7 h-7 md:w-10 md:h-10" strokeWidth={3} aria-hidden="true" />
                Hemen Ara
              </a>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="hizmetler" className="py-16 md:py-20 px-4 bg-white" aria-labelledby="hizmetler-baslik">
          <div className="max-w-6xl mx-auto">
            <h2 id="hizmetler-baslik" className="text-3xl md:text-6xl font-bold text-center mb-3 md:mb-4 text-black">
              Sivas Taksi Hizmetlerimiz
            </h2>
            <p className="text-lg md:text-2xl text-center mb-12 md:mb-16 text-gray-600 font-semibold max-w-4xl mx-auto">
              7/24 guvenli transfer icin Sivas&apos;in en cok ihtiyac duyulan guzergahlarinda hizli arac yonlendirmesi
              sagliyoruz.
            </p>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 md:border-l-8 border-[#FFD700] bg-gray-50 pl-4 md:pl-8 py-4 md:py-6 hover:bg-gray-100 transition-all"
                >
                  <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 text-black">{service.title}</h3>
                  <p className="text-sm md:text-xl text-gray-700 font-semibold">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 md:py-20 px-4 bg-white border-t border-gray-100" aria-labelledby="bolgeler-baslik">
          <div className="max-w-6xl mx-auto">
            <h2 id="bolgeler-baslik" className="text-3xl md:text-5xl font-bold text-center mb-4 text-black">
              Hizmet Verdigimiz Baslica Bolgeler
            </h2>
            <p className="text-lg md:text-2xl text-center mb-10 text-gray-600 font-semibold max-w-4xl mx-auto">
              Sivas taksi aramalarinda en sik talep edilen noktalara hizli ulasim destegi veriyoruz.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["Sivas Merkez", "Sivas Terminal", "Sivas Otogar", "Cumhuriyet Universitesi"].map((area) => (
                <article key={area} className="rounded-2xl border border-gray-200 p-5 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <CarFront className="w-5 h-5 text-[#C89F00]" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-black">{area}</h3>
                  </div>
                  <p className="text-gray-700">
                    {area} icin hizli arac yonlendirmesi ve konuma gore en yakin taksi destegi.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="galeri" className="py-16 md:py-20 px-4 bg-black text-white" aria-labelledby="galeri-baslik">
          <div className="max-w-6xl mx-auto">
            <h2 id="galeri-baslik" className="text-3xl md:text-6xl font-bold text-center mb-3 md:mb-4">
              Taksi 58 Sivas Galeri
            </h2>
            <p className="text-lg md:text-2xl text-center mb-10 md:mb-12 text-[#FFD700] font-semibold">
              Araclarimizdan ve hizmet bolgelerimizden gercek kareler
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <motion.a
                  key={image.src}
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group block overflow-hidden rounded-xl border border-white/15 bg-gray-950"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-44 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.a>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={callHref}
                className="bg-[#FFD700] text-black text-xl md:text-3xl font-bold py-4 px-10 rounded-xl hover:bg-[#FFC700] transition-all inline-flex items-center gap-3"
              >
                <Phone className="w-6 h-6 md:w-8 md:h-8" strokeWidth={3} aria-hidden="true" />
                Galeri Sonrasi Hemen Ara
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-20 px-4 bg-black text-white" aria-labelledby="yorumlar-baslik">
          <div className="max-w-6xl mx-auto">
            <h2 id="yorumlar-baslik" className="text-3xl md:text-6xl font-bold text-center mb-3 md:mb-4">
              Musteri Yorumlari
            </h2>
            <p className="text-lg md:text-3xl text-center mb-12 md:mb-16 text-[#FFD700] font-bold">
              Her gun bizi tercih eden yolculardan kisa yorumlar
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.blockquote
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900 p-6 md:p-8 rounded-xl border-2 md:border-4 border-[#FFD700]"
                >
                  <div className="flex items-center gap-1 mb-3" aria-label="5 yildiz musteri puani">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-lg md:text-2xl mb-4 md:mb-6 font-bold">{testimonial.text}</p>
                  <footer className="font-semibold text-gray-400 text-sm md:text-base">{testimonial.name}</footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="sss" className="py-16 md:py-20 px-4 bg-white" aria-labelledby="sss-baslik">
          <div className="max-w-4xl mx-auto">
            <h2 id="sss-baslik" className="text-3xl md:text-6xl font-bold text-center mb-4 text-black">
              Sik Sorulan Sorular
            </h2>
            <p className="text-lg md:text-2xl text-center mb-10 text-gray-600 font-semibold">
              Sivas taksi hizmeti hakkinda en cok merak edilen sorularin yanitlari.
            </p>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-32 px-4 bg-[#FFD700] text-black" aria-labelledby="iletisim-baslik">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="iletisim-baslik" className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
              Bekleme Yok
            </h2>
            <p className="text-2xl md:text-5xl mb-6 font-bold">Aninda Kapinda</p>
            <p className="text-base md:text-xl max-w-3xl mx-auto mb-10 text-black/80">
              Sivas&apos;ta hizli taksi ihtiyaciniz oldugunda bizi arayin. Terminal, sehir merkezi, hastane ve universite
              transferleri icin gunun her saati ulasabilirsiniz.
            </p>
            <a
              href={callHref}
              className="inline-flex items-center gap-3 md:gap-6 bg-black text-[#FFD700] px-6 md:px-16 py-6 md:py-12 rounded-xl md:rounded-2xl text-3xl md:text-7xl font-bold hover:bg-gray-900 transition-all shadow-2xl hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <Phone className="w-10 h-10 md:w-20 md:h-20" strokeWidth={3} aria-hidden="true" />
              <span className="leading-none">{phoneNumber}</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white px-4 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-3">{businessName}</h2>
            <p className="text-white/80 leading-relaxed">
              Sivas&apos;ta 7/24 hizmet veren yerel taksi hizmeti. Sehir ici, terminal, otogar, hastane ve universite
              transferleri icin hizli ulasim.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-3">Iletisim</h2>
            <address className="not-italic text-white/80 space-y-2">
              <p>
                Telefon:{" "}
                <a href={callHref} className="text-[#FFD700]">
                  {phoneNumber}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-[#FFD700]">
                  {phoneNumber}
                </a>
              </p>
              <p>Hizmet Bolgesi: Sivas Merkez ve cevresi</p>
            </address>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-3">Calisma Saatleri</h2>
            <p className="text-white/80">Pazartesi - Pazar: 00:00 - 23:59</p>
            <p className="text-white/80 mt-2">7/24 aktif taksi hizmeti</p>
          </section>
        </div>
      </footer>

      {/* Fixed mobile call bar */}
      <motion.a
        href={callHref}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-3 bg-black/95 backdrop-blur-sm border-t-4 border-[#FFD700] md:hidden z-50"
      >
        <span className="w-full bg-[#FFD700] text-black text-2xl font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform">
          <Phone className="w-7 h-7" strokeWidth={3} aria-hidden="true" />
          Hemen Ara
        </span>
      </motion.a>

      {/* WhatsApp FAB */}
      <motion.a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3.5 md:p-5 rounded-full shadow-2xl z-50 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
        aria-label="WhatsApp ile iletisim"
      >
        <MessageCircle className="w-7 h-7 md:w-10 md:h-10" strokeWidth={2} aria-hidden="true" />
      </motion.a>
    </div>
  );
}
