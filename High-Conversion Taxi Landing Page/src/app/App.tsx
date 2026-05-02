import { motion } from "motion/react";
import { Phone, MessageCircle, Clock, Shield, Users, Award } from "lucide-react";

export default function App() {
  const phoneNumber = "0553 407 49 89";
  const whatsappNumber = "905534074989";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-black text-white px-4 py-12 md:py-20 overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1573225935973-40b81f6e39e6?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2">
              TAKSİ
            </h1>
            <div className="text-4xl md:text-7xl font-bold text-[#FFD700] mb-2">
              58
            </div>
            <div className="text-xl md:text-2xl font-semibold text-[#FFD700] tracking-widest">
              SİVAS
            </div>
            <div className="h-1 w-32 bg-[#FFD700] mx-auto mt-3"></div>
          </motion.div>

          {/* Phone Number - DOMINANT ELEMENT */}
          <motion.a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block mb-10 group"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(255, 215, 0, 0.4)",
                  "0 0 60px rgba(255, 215, 0, 0.8)",
                  "0 0 30px rgba(255, 215, 0, 0.4)",
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2 md:gap-6 bg-[#FFD700] text-black px-4 md:px-16 py-4 md:py-10 rounded-xl md:rounded-2xl transition-transform group-hover:scale-105"
            >
              <Phone className="w-8 h-8 md:w-20 md:h-20" strokeWidth={3} />
              <span className="text-3xl sm:text-5xl md:text-9xl font-bold tracking-tight">
                {phoneNumber}
              </span>
            </motion.div>
          </motion.a>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2 text-base md:text-2xl mb-8 md:mb-10"
          >
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" />
              <span className="font-bold text-white">5 dakika içinde kapında</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#FFD700]" />
              <span className="font-bold text-white">7/24 hizmet</span>
            </p>
            <p className="font-bold text-[#FFD700] text-lg md:text-3xl mt-4">
              Bulunduğun konuma en yakın taksi
            </p>
          </motion.div>

          {/* Main CTA */}
          <motion.button
            onClick={handleCall}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-lg mx-auto block bg-[#FFD700] text-black text-2xl md:text-5xl font-bold py-5 md:py-8 px-8 rounded-xl mb-6 md:mb-8 hover:bg-[#FFC700] transition-all shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
          >
            ŞİMDİ ARA
          </motion.button>

          {/* Secondary CTA - WhatsApp */}
          <motion.button
            onClick={handleWhatsApp}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className="mt-2 md:mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-lg text-base md:text-lg font-semibold hover:bg-[#20BA5A] transition-all"
          >
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
            WhatsApp
          </motion.button>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 px-4 bg-[#FFD700]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-12 md:mb-16 text-black">
            NEDEN BİZ?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Award className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-black" />
              <div className="text-3xl md:text-6xl font-bold text-black mb-1 md:mb-2">
                20+
              </div>
              <div className="text-sm md:text-lg font-semibold text-black">
                Yıl Deneyim
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Users className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-black" />
              <div className="text-3xl md:text-6xl font-bold text-black mb-1 md:mb-2">
                10.000+
              </div>
              <div className="text-sm md:text-lg font-semibold text-black">
                Mutlu Müşteri
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Clock className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-black" />
              <div className="text-3xl md:text-6xl font-bold text-black mb-1 md:mb-2">
                7/24
              </div>
              <div className="text-sm md:text-lg font-semibold text-black">
                Kesintisiz Hizmet
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <Shield className="w-10 h-10 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 text-black" />
              <div className="text-3xl md:text-6xl font-bold text-black mb-1 md:mb-2">
                %100
              </div>
              <div className="text-sm md:text-lg font-semibold text-black">
                Sigortalı Yolculuk
              </div>
            </motion.div>
          </div>

          {/* CTA After Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={handleCall}
              className="bg-black text-[#FFD700] text-2xl md:text-4xl font-bold py-4 md:py-6 px-10 md:px-16 rounded-xl hover:bg-gray-900 transition-all inline-flex items-center gap-3 md:gap-4 shadow-xl hover:shadow-[0_0_40px_rgba(0,0,0,0.4)]"
            >
              <Phone className="w-7 h-7 md:w-10 md:h-10" strokeWidth={3} />
              HEMEN ARA
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-3 md:mb-4 text-black">
            HER YERE GİDERİZ
          </h2>
          <p className="text-lg md:text-2xl text-center mb-12 md:mb-16 text-gray-600 font-semibold">
            7/24 Güvenli Transfer
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "HAVALİMANI TAKSİ",
                description: "Uçağına geç kalma",
              },
              {
                title: "OTOGAR TAKSİ",
                description: "Otobüsüne yetiş",
              },
              {
                title: "HASTANE TAKSİ",
                description: "Acil durumlarda yanındayız",
              },
              {
                title: "ÜNİVERSİTE TAKSİ",
                description: "Kampüse hızlı ulaşım",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-l-4 md:border-l-8 border-[#FFD700] bg-gray-50 pl-4 md:pl-8 py-4 md:py-6 hover:bg-gray-100 transition-all"
              >
                <h3 className="text-lg md:text-3xl font-bold mb-2 md:mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-sm md:text-xl text-gray-700 font-semibold">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA After Services */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={handleCall}
              className="bg-[#FFD700] text-black text-2xl md:text-4xl font-bold py-4 md:py-6 px-10 md:px-16 rounded-xl hover:bg-[#FFC700] transition-all inline-flex items-center gap-3 md:gap-4 shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
            >
              <Phone className="w-7 h-7 md:w-10 md:h-10" strokeWidth={3} />
              HEMEN ARA
            </button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-6xl font-bold text-center mb-3 md:mb-4">
            MÜŞTERİLERİMİZ
          </h2>
          <p className="text-lg md:text-3xl text-center mb-12 md:mb-16 text-[#FFD700] font-bold">
            HER GÜN BİZİ TERCİH EDİYOR
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "5 dakikada geldi!",
                name: "Mehmet Y.",
              },
              {
                text: "Çok hızlı ve güvenli",
                name: "Ayşe D.",
              },
              {
                text: "Gece yarısı bile geldiler",
                name: "Ali K.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 md:p-8 rounded-xl border-2 md:border-4 border-[#FFD700]"
              >
                <div className="text-4xl md:text-6xl text-[#FFD700] mb-3 md:mb-4 leading-none">"</div>
                <p className="text-lg md:text-2xl mb-4 md:mb-6 font-bold">{testimonial.text}</p>
                <p className="font-semibold text-gray-400 text-sm md:text-base">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA After Testimonials */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button
              onClick={handleCall}
              className="bg-[#FFD700] text-black text-2xl md:text-4xl font-bold py-4 md:py-6 px-10 md:px-16 rounded-xl hover:bg-[#FFC700] transition-all inline-flex items-center gap-3 md:gap-4 shadow-xl hover:shadow-[0_0_40px_rgba(255,215,0,0.6)]"
            >
              <Phone className="w-7 h-7 md:w-10 md:h-10" strokeWidth={3} />
              HEMEN ARA
            </button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-32 px-4 bg-[#FFD700] text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
            BEKLEME YOK
          </h2>
          <p className="text-2xl md:text-5xl mb-10 md:mb-12 font-bold">
            ANINDA KAPINDA
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-3 md:gap-6 bg-black text-[#FFD700] px-6 md:px-16 py-6 md:py-12 rounded-xl md:rounded-2xl text-3xl md:text-7xl font-bold hover:bg-gray-900 transition-all shadow-2xl hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <Phone className="w-10 h-10 md:w-20 md:h-20" strokeWidth={3} />
            <span className="leading-none">{phoneNumber}</span>
          </a>
        </div>
      </section>

      {/* Sticky Bottom Call Button (Mobile) */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-3 bg-black/95 backdrop-blur-sm border-t-4 border-[#FFD700] md:hidden z-50"
      >
        <button
          onClick={handleCall}
          className="w-full bg-[#FFD700] text-black text-2xl font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform"
        >
          <Phone className="w-7 h-7" strokeWidth={3} />
          HEMEN ARA
        </button>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-4 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3.5 md:p-5 rounded-full shadow-2xl z-50 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)]"
      >
        <MessageCircle className="w-7 h-7 md:w-10 md:h-10" strokeWidth={2} />
      </motion.button>
    </div>
  );
}