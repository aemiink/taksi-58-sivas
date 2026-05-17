export interface ServicePage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  keywords: string[];
  features: { title: string; description: string }[];
  content: string;
  faqs: { question: string; answer: string }[];
}

export const servicePages: ServicePage[] = [
  {
    slug: "havalimani-taksi",
    title: "Sivas Havalimanı Taksi Hizmeti | 7/24 Nuri Demirag Transfer",
    metaDescription: "Sivas Nuri Demirag Havalimanı'na güvenli taksi hizmeti. 7/24 karşılama ve uğurlama transferleri. Hemen arayın: 0553 407 49 89.",
    h1: "Sivas Havalimanı Taksi ve Transfer Hizmeti",
    heroSubtitle: "Sivas Nuri Demirag Havalimanı için 7/24 güvenilir taksi transferi. Uçuş takibi, bagaj yardımı, zamanında karşılama.",
    keywords: ["sivas havalimanı taksi", "nuri demirag havalimanı taksi", "sivas taksi", "sivas havalimanı transfer", "taksi 58 sivas"],
    features: [
      {
        title: "Uçuş Takibi",
        description: "Sürücümüz uçuş numaranızı takip ederek gecikmeler dahil sizi tam zamanında karşılar. Hiçbir ek ücret talep edilmez."
      },
      {
        title: "7/24 Hizmet",
        description: "Sabahın 5'i ya da gece yarısı fark etmez. Sivas havalimanına gidip gelmek için her saatte hizmetinizdeyiz."
      },
      {
        title: "Bagaj Yardımı",
        description: "Sürücümüz bagajlarınızı yükleme ve boşaltmada yardımcı olur. Büyük bagaj kapasiteli araçlar talep üzerine sağlanır."
      },
      {
        title: "Önceden Rezervasyon",
        description: "Uçuş öncesi veya sonrası için önceden rezervasyon yaparak sürücünüzü garanti altına alın. Telefon veya WhatsApp ile kolayca düzenleyin."
      },
      {
        title: "Konforlu Araçlar",
        description: "Temiz, bakımlı ve konforlu araçlarımızla seyahat yorgunluğunu en aza indiriyoruz."
      }
    ],
    content: `<h2>Sivas Havalimanı Taksi Hizmeti</h2>
<p>Sivas Nuri Demirag Havalimanı, şehir merkezine yaklaşık 25-30 kilometre uzaklıkta yer almaktadır. <strong>Taksi 58 Sivas</strong> olarak havalimanı transferlerinde 7/24 güvenilir hizmet sunuyoruz. İster uçuştan döniyor olun ister uçuşa gidiyor olun, <strong>0553 407 49 89</strong> numarasını arayarak hizmetinize hazır olalım.</p>

<h2>Karşılama Hizmeti Nasıl İşler?</h2>
<p>Sivas havalimanı karşılama transferinde sürücümüz uçuş numaranızı takip eder. Uçuşunuz gecikmeli olsa dahi beklemeye devam eder, ek ücret uygulanmaz. Terminal çıkışında isminizle sizi karşılar ve hedef adresinize konforlu bir yolculukla ulaştırır.</p>

<h2>Havalimanına Transfer</h2>
<p>Uçuşunuzu kaçırmamak için check-in öncesinde yeterli zaman bırakarak havalimanına ulaşmak gerekir. Sürücümüz güzergahı ve trafik durumunu göz önünde bulundurarak sizi tam zamanında havalimanına ulaştırır. Erken uçuşlar için sabah erken saatlerde de hizmet veriyoruz.</p>`,
    faqs: [
      {
        question: "Sivas havalimanından şehir merkezine ne kadar sürer?",
        answer: "Trafik durumuna göre ortalama 25-35 dakika sürmektedir. Taksi 58 Sivas sürücüleri en kısa güzergahı tercih eder."
      },
      {
        question: "Uçuşum gecikmeli, sürücü bekler mi?",
        answer: "Evet, sürücümüz uçuş takibi yaparak gecikmeler durumunda da beklemeye devam eder. Ek ücret talep edilmez."
      },
      {
        question: "Havalimanı taksi rezervasyonu ne zaman yapılmalı?",
        answer: "En az birkaç saat öncesinden rezervasyon yapmanızı öneririz. Anlık çağrı da mümkündür: 0553 407 49 89."
      },
      {
        question: "Havalimanı transferi için fiyat ne kadar?",
        answer: "Fiyat, havalimanından hedef adresinize göre değişmektedir. Önceden bilgi almak için 0553 407 49 89'u arayın."
      }
    ]
  },
  {
    slug: "otogar-taksi",
    title: "Sivas Otogar Taksi Hizmeti | Terminal Karşılama ve Transfer",
    metaDescription: "Sivas otogar ve terminal için 7/24 taksi hizmeti. Karşılama, uğurlama, şehir içi transfer. Hemen arayın: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Otogar ve Terminal Taksi Hizmeti",
    heroSubtitle: "Sivas şehirlerarası otobüs terminaline güvenilir taksi hizmeti. Karşılama, uğurlama ve şehir içi transferler için 7/24 hizmetinizdeyiz.",
    keywords: ["sivas otogar taksi", "sivas terminal taksi", "sivas taksi", "sivas otobüs terminali taksi", "taksi 58 sivas"],
    features: [
      {
        title: "Terminal Karşılama",
        description: "Otobüs saatinizi bildirdiğinizde sürücümüz terminal çıkışında sizi bekler. Bagajlarınızla rahatça geçiş yaparsınız."
      },
      {
        title: "Terminale Zamanında Ulaştırma",
        description: "Otobüs hareket saatinden önce terminale yetiştirme garantisiyle seyahat stresini ortadan kaldırıyoruz."
      },
      {
        title: "Bagaj Kapasitesi",
        description: "Büyük ve çok sayıda bagajınız için geniş bagaj hazneli araçlar talep üzerine temin edilir."
      },
      {
        title: "7/24 Kesintisiz Hizmet",
        description: "Gece geç saatlerde gelen veya erken sabah hareket eden otobüsler için bile hizmetinizdeyiz."
      }
    ],
    content: `<h2>Sivas Otogar Taksi Hizmeti</h2>
<p>Sivas şehirlerarası otobüs terminali, şehrin önemli ulaşım merkezlerinden biridir. <strong>Taksi 58 Sivas</strong> olarak terminal bölgesinde her saat taksi hizmeti sunuyor, sizi ya da misafirlerinizi güvenle karşılıyoruz. Hemen rezervasyon için: <strong>0553 407 49 89</strong>.</p>

<h2>Terminal'den Nereye Gidebilirsiniz?</h2>
<p>Sivas otogaından şehrin tüm noktalarına ulaşabilirsiniz. Üniversite kampüsü, hastaneler, merkez ve şehir çevresi dahil her adrese transfer hizmeti veriyoruz. Gece geç saatte gelen otobüsler için de 7/24 hizmet kesintisizdir.</p>

<h2>Terminal Transferi Rezervasyonu</h2>
<p>Otobüs saatinizi biliyorsanız önceden rezervasyon yaptırmanız büyük kolaylık sağlar. Taksi 58 Sivas'ı arayarak otobüs saatinizi, kaç kişi olduğunuzu ve gideceğiniz adresi bildirin. Sürücünüz tam zamanında terminal çıkışında hazır olacaktır.</p>`,
    faqs: [
      {
        question: "Sivas otogarından merkeze taksi kaç dakika sürer?",
        answer: "Ortalama 8-15 dakika sürmektedir. Trafik durumuna göre değişebilir."
      },
      {
        question: "Gece gelen otobüsler için terminal taksi bulunur mu?",
        answer: "Evet, Taksi 58 Sivas 7/24 hizmet vermektedir. Gece yarısı da bizi arayabilirsiniz: 0553 407 49 89."
      },
      {
        question: "Terminal karşılama için önceden rezervasyon şart mı?",
        answer: "Şart değil, anlık çağrı da mümkündür. Ancak önceden rezervasyon yapılması garanti bir karşılama sağlar."
      },
      {
        question: "Çok bagajım varsa terminal taksisi uygun mu?",
        answer: "Evet, büyük bagaj kapasiteli araçlar talep üzerine temin edilir. Rezervasyon sırasında bagaj durumunuzu belirtin."
      }
    ]
  },
  {
    slug: "hastane-taksi",
    title: "Sivas Hastane Taksi Hizmeti | 7/24 Güvenli Sağlık Transferi",
    metaDescription: "Sivas'taki tüm hastanelere 7/24 taksi hizmeti. Acil ve planlı sağlık transferleri için: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Hastane Taksi ve Sağlık Transferi",
    heroSubtitle: "Sivas'taki tüm hastanelere güvenilir taksi transferi. Randevu zamanlaması, yaşlı ve engelli yolcu desteği ile 7/24 hizmetinizdeyiz.",
    keywords: ["sivas hastane taksi", "sivas taksi", "sivas sağlık transferi", "taksi 58 sivas", "sivas devlet hastanesi taksi"],
    features: [
      {
        title: "Tüm Hastanelere Hizmet",
        description: "Sivas Numune, Cumhuriyet Üniversitesi Hastanesi, Devlet Hastanesi ve özel klinikler dahil tüm sağlık kuruluşlarına transfer."
      },
      {
        title: "Randevu Uyumlu Planlama",
        description: "Hastane randevu saatinize göre planlama yapılır, trafik hesaplanarak tam zamanında ulaştırılırsınız."
      },
      {
        title: "Yaşlı ve Engelli Destek",
        description: "Hareket güçlüğü çeken yolcularımıza biniş-iniş ve bagaj taşıma konusunda özel yardım sağlanır."
      },
      {
        title: "Taburculuk Transferi",
        description: "Hastaneden taburcu olduğunuzda güvenle eve ya da istediğiniz adrese ulaştırılırsınız."
      }
    ],
    content: `<h2>Sivas Hastane Transferi için Taksi</h2>
<p>Sağlık konusunda hız ve güvenilirlik birinci önceliktir. <strong>Taksi 58 Sivas</strong>, Sivas'taki tüm hastane ve kliniklere 7/24 taksi hizmeti sunmaktadır. Rutin kontrol ya da önemli tedaviler için bizi arayın: <strong>0553 407 49 89</strong>.</p>

<h2>Hangi Hastanelere Hizmet Veriyoruz?</h2>
<p>Taksi 58 Sivas; Sivas Numune Hastanesi, Cumhuriyet Üniversitesi Tıp Fakültesi Hastanesi, Sivas Devlet Hastanesi, Özel Sivas Hastanesi ve tüm polikliniklere transfer hizmeti vermektedir.</p>

<h2>Bekleme Hizmeti</h2>
<p>Muayene veya tedavi süreniz boyunca sürücümüz bekleme hizmeti sunabilir. Bu sayede çıkışta tekrar taksi aramanıza gerek kalmaz. Bekleme hizmeti için rezervasyon sırasında bilgi verin.</p>`,
    faqs: [
      {
        question: "Sivas'ta gece acil hastane transferi için taksi bulunur mu?",
        answer: "Evet, Taksi 58 Sivas 7/24 hizmet vermektedir. Gece yarısında da 0553 407 49 89'u arayabilirsiniz."
      },
      {
        question: "Yaşlı ebeveynime hastane için taksi ayarlayabilir miyim?",
        answer: "Evet, üçüncü kişi adına rezervasyon yapılabilir. Adres ve hastane bilgisiyle sürücümüz ilgilenir."
      },
      {
        question: "Hastane bekleme hizmeti var mı?",
        answer: "Evet, muayene süreniz boyunca sürücümüz hastanede bekleyebilir. Rezervasyon sırasında talep edin."
      },
      {
        question: "Taburculukta hastaneden eve transfer mümkün mü?",
        answer: "Evet, taburculuk transferi için hastane hemşiresi veya aileniz 0553 407 49 89'u arayarak düzenleme yapabilir."
      }
    ]
  },
  {
    slug: "universite-taksi",
    title: "Sivas Üniversite Taksi | Cumhuriyet Üniversitesi Transfer",
    metaDescription: "Sivas Cumhuriyet Üniversitesi öğrencileri için 7/24 taksi hizmeti. Kampüs, terminal, havalimanı transferleri. Ara: 0553 407 49 89.",
    h1: "Sivas Cumhuriyet Üniversitesi Taksi Hizmeti",
    heroSubtitle: "Sivas üniversite öğrencileri için güvenilir, ekonomik ve 7/24 taksi hizmeti. Kampüs transferleri ve tatil dönüşlerine özel çözümler.",
    keywords: ["sivas üniversite taksi", "cumhuriyet üniversitesi taksi", "sivas taksi", "taksi 58 sivas", "sivas kampüs taksi"],
    features: [
      {
        title: "Kampüs Transferleri",
        description: "Üniversite kampüsünden şehrin tüm noktalarına hızlı ve güvenli taksi hizmeti."
      },
      {
        title: "Terminal ve Havalimanı Karşılama",
        description: "Sivas'a yeni gelen öğrenciler için terminal ve havalimanından kampüse özel karşılama transferi."
      },
      {
        title: "Tatil Dönüşü Servisi",
        description: "Yarıyıl ve yaz tatillerinde yoğun dönemlerde önceden rezervasyon imkânı."
      },
      {
        title: "Gece Taksi Güvencesi",
        description: "Kütüphane veya etkinlik sonrası gece geç saatlerde de kampüse güvenli ulaşım."
      }
    ],
    content: `<h2>Cumhuriyet Üniversitesi Öğrencilerine Özel Taksi</h2>
<p>Sivas'ta eğitim gören öğrenciler için ulaşım büyük önem taşır. <strong>Taksi 58 Sivas</strong>, Cumhuriyet Üniversitesi kampüsüne ve çevresine 7/24 güvenilir taksi hizmeti sunmaktadır. İster sabah ders için ister gece etkinlik dönüşünde olsun: <strong>0553 407 49 89</strong>.</p>

<h2>Sivas'a İlk Kez Gelen Öğrenciler</h2>
<p>Yeni kayıt döneminde ya da yıl başında terminal veya havalimanından kampüse gitmek için Taksi 58 Sivas'ı arayın. Sürücümüz sizi karşılar, bagajlarınızla yurt veya kampüs adresinize ulaştırır.</p>

<h2>WhatsApp ile Kolay Çağrı</h2>
<p>Sessiz ders ortamında ya da kütüphanede telefon etmek zorunda kalmadan WhatsApp üzerinden konum paylaşarak taksi çağırabilirsiniz. <strong>+90 553 407 49 89</strong> numarasına mesaj atmanız yeterlidir.</p>`,
    faqs: [
      {
        question: "Kampüsten terminale taksi ne kadar tutar?",
        answer: "Tahmini fiyat için 0553 407 49 89'u arayarak bilgi alabilirsiniz. Mesafeye göre değişmektedir."
      },
      {
        question: "Gece 23:00'dan sonra kampüse taksi geliyor mu?",
        answer: "Evet, Taksi 58 Sivas 7/24 hizmet vermektedir. Gece yarısında da bizi arayabilirsiniz."
      },
      {
        question: "Arkadaşlarımla grup halinde taksi kullanabilir miyiz?",
        answer: "Evet, grup transferleri düzenlenebilir. Kaç kişi olduğunuzu belirterek rezervasyon yapın."
      },
      {
        question: "Tatil dönemi için önceden rezervasyon yapabilir miyim?",
        answer: "Evet, yoğun dönemlerde önceden rezervasyon yapmanız kesinlikle önerilir. Telefon veya WhatsApp ile düzenleyin."
      }
    ]
  },
  {
    slug: "sehir-ici-taksi",
    title: "Sivas Şehir İçi Taksi Hizmeti | Tüm Mahalleler 7/24",
    metaDescription: "Sivas'ta şehir içi taksi hizmeti. Tüm mahallelere hızlı, güvenilir, uygun fiyatlı ulaşım. 7/24 hizmet: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Şehir İçi Taksi Hizmeti",
    heroSubtitle: "Sivas'ın tüm mahallelerine ve önemli noktalarına 7/24 hızlı taksi hizmeti. Tecrübeli sürücüler, temiz araçlar, uygun fiyatlar.",
    keywords: ["sivas şehir içi taksi", "sivas taksi", "sivas mahalle taksi", "taksi 58 sivas", "sivas 7/24 taksi"],
    features: [
      {
        title: "Tüm Mahallelere Hizmet",
        description: "Sivas'ın merkezi ve çevre mahallelerinin tümüne kesintisiz taksi hizmeti sunuyoruz."
      },
      {
        title: "Kısa Mesafe Transferler",
        description: "Yakın mesafe yolculuklar için de hizmet veriyoruz. Mesafe ayırt etmeksizin çağrılarınızı karşılıyoruz."
      },
      {
        title: "Güzergah Optimizasyonu",
        description: "Sivas trafiğini bilen sürücülerimiz en kısa güzergahı seçerek zaman ve yakıt tasarrufu sağlar."
      },
      {
        title: "Konforlu Araçlar",
        description: "Temiz, bakımlı araçlarımızla şehir içi her yolculuğu konforlu hale getiriyoruz."
      }
    ],
    content: `<h2>Sivas Şehir İçinde Güvenilir Taksi</h2>
<p><strong>Taksi 58 Sivas</strong>, Sivas'ın tüm mahalle ve semtlerine 7/24 şehir içi taksi hizmeti sunmaktadır. Kısa ya da uzun mesafe, gündüz ya da gece fark etmez; <strong>0553 407 49 89</strong> numarasını arayarak dakikalar içinde taksiye binebilirsiniz.</p>

<h2>Sivas'ta Sık Kullanılan Güzergahlar</h2>
<p>Merkez-üniversite, merkez-hastane, merkez-otogar ve mahalleler arası güzergahların tümüne hizmet veriyoruz. Sürücülerimiz Sivas'ın dar sokaklarını ve trafik yapısını iyi bilmektedir.</p>

<h2>Anlık veya Önceden Rezervasyon</h2>
<p>Anlık çağrı veya önceden rezervasyon seçenekleriyle şehir içi ihtiyaçlarınızı kolayca karşılıyoruz. WhatsApp üzerinden konum paylaşarak da taksi çağırabilirsiniz.</p>`,
    faqs: [
      {
        question: "Sivas'ta kısa mesafe için de taksi çağırabilir miyim?",
        answer: "Evet, mesafe ayırt etmeksizin tüm çağrıları karşılıyoruz."
      },
      {
        question: "Şehrin uzak mahallelerine de gidiyor musunuz?",
        answer: "Evet, Sivas'ın tüm mahallelerine hizmet veriyoruz."
      },
      {
        question: "Sivas şehir içi taksi tahmini ne kadar beklerim?",
        answer: "Ortalama 5-10 dakika içinde adresinizde oluruz."
      },
      {
        question: "WhatsApp ile şehir içi taksi çağırabilir miyim?",
        answer: "Evet, +90 553 407 49 89'a konum pini göndererek de taksi çağırabilirsiniz."
      }
    ]
  },
  {
    slug: "gece-taksi",
    title: "Sivas Gece Taksi Hizmeti | Gece Yarısı 7/24 Güvenli Ulaşım",
    metaDescription: "Sivas'ta gece taksi hizmeti. Gece yarısı, sabah erken saatlerde güvenli ulaşım. 7/24 hizmet: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Gece Taksi Hizmeti",
    heroSubtitle: "Sivas'ta gece boyunca 7/24 güvenli taksi hizmeti. Gece vardiyası, geç saatlerde dönüş ve erken uçuşlar için yanınızdayız.",
    keywords: ["sivas gece taksi", "sivas 7/24 taksi", "sivas taksi", "taksi 58 sivas", "sivas gece ulaşım"],
    features: [
      {
        title: "Gece Boyunca Aktif",
        description: "Gece yarısından sabah erken saatlerine kadar kesintisiz hizmet. Hiçbir saatte mağdur kalmazsınız."
      },
      {
        title: "Gece Vardiyası Transferleri",
        description: "Fabrika, hastane ve güvenlik personeli için gece vardiyası başlangıç ve bitiş transferleri."
      },
      {
        title: "Erken Uçuş Transferleri",
        description: "Sabah 4-5 gibi erken uçuşlar için zamanında havalimanına ulaştırma garantisi."
      },
      {
        title: "Güvenli Gece Ulaşımı",
        description: "Lisanslı, deneyimli sürücülerimizle gece güzergahlarında güvenli yolculuk."
      }
    ],
    content: `<h2>Sivas'ta Gece Boyunca Taksi Hizmeti</h2>
<p>Gece geç saatlerde ya da sabahın erken vakitlerinde güvenilir bir taksi bulmak zor olabilir. <strong>Taksi 58 Sivas</strong> olarak gece 7/24 aktif hizmetle her saatte yanınızdayız. Gece taksisi için hemen arayın: <strong>0553 407 49 89</strong>.</p>

<h2>Gece Vardiyası Çalışanlarına Özel</h2>
<p>Düzenli gece vardiyası çalışanları için haftalık veya aylık düzenli transfer planı oluşturulabilir. Sabah fabrikaya gitmeniz ya da gece hastaneden dönmeniz için güvenilir ve düzenli bir ulaşım çözümü sunuyoruz.</p>

<h2>Gece Erken Rezervasyon</h2>
<p>Gece geç saatlerde ya da sabah erken saatlerde taksi ihtiyacınız varsa önceden rezervasyon yapmanız kesinlikle önerilir. Bir gün önceden 0553 407 49 89'u arayarak garanti altına alın.</p>`,
    faqs: [
      {
        question: "Sivas'ta gece yarısı taksi bulunur mu?",
        answer: "Evet, Taksi 58 Sivas gece yarısında da hizmet vermektedir. 0553 407 49 89'u arayın."
      },
      {
        question: "Sabah 05:00'te havalimanına transfer yapıyor musunuz?",
        answer: "Evet, sabahın erken saatlerinde de hizmet veriyoruz. Önceden rezervasyon yapmanızı öneririz."
      },
      {
        question: "Gece taksisi gündüzden pahalı mı?",
        answer: "Gece tarifesi gündüze göre farklı olabilir. Detaylı bilgi için 0553 407 49 89'u arayın."
      },
      {
        question: "Gece düzenli transfer anlaşması yapılabilir mi?",
        answer: "Evet, düzenli gece vardiyası transferleri için özel anlaşma yapılabilir. Bizi arayın."
      }
    ]
  },
  {
    slug: "terminal-taksi",
    title: "Sivas Terminal Taksi | Otogar Transfer ve Karşılama Hizmeti",
    metaDescription: "Sivas şehirlerarası terminali için 7/24 taksi hizmeti. Otobüs karşılama, şehir içi transfer. Ara: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Terminal Taksi Hizmeti",
    heroSubtitle: "Sivas şehirlerarası otobüs terminalinde 7/24 taksi ve karşılama hizmeti. Bagaj yardımı, şehir içi transferler ve önceden rezervasyon imkânı.",
    keywords: ["sivas terminal taksi", "sivas otogar taksi", "sivas taksi", "taksi 58 sivas", "sivas otobüs terminali taksi"],
    features: [
      {
        title: "Otobüs Karşılama",
        description: "Otobüs saatinizi bildirin, sürücümüz terminal çıkışında sizi beklesin."
      },
      {
        title: "Zamanında Terminale Ulaştırma",
        description: "Kalkış saatinizden önce terminal'e ulaşmanızı garanti ediyoruz."
      },
      {
        title: "Bagaj Yardımı",
        description: "Ağır veya çok sayıda bagajınız için sürücünüz yükleme-boşaltmada yardımcı olur."
      },
      {
        title: "Şehir İçi Transfer",
        description: "Terminal'den şehrin tüm noktalarına hızlı şehir içi taksi hizmeti."
      }
    ],
    content: `<h2>Sivas Terminal'de Taksi Hizmeti</h2>
<p>Sivas otobüs terminali her gün yoğun bir yolcu trafiğine ev sahipliği yapar. <strong>Taksi 58 Sivas</strong> olarak terminal bölgesinde 7/24 hizmet sunarak gelenleri karşılıyor ve gidenleri zamanında ulaştırıyoruz. Rezervasyon için: <strong>0553 407 49 89</strong>.</p>

<h2>Tatil ve Bayram Dönemlerinde Terminal Yoğunluğu</h2>
<p>Yarıyıl tatilleri, bayramlar ve uzun hafta sonlarında terminal çevresi oldukça yoğunlaşır. Bu dönemlerde önceden rezervasyon yaptırmak büyük avantaj sağlar. Taksi 58 Sivas olarak yoğun dönemlere hazırlıklıyız.</p>

<h2>Terminal'den Tüm Güzergahlar</h2>
<p>Terminal'den üniversite, hastane, merkez ve şehir çevresine tüm güzergahlara hizmet veriyoruz. Şehir dışı güzergahlar da talep üzerine düzenlenebilir.</p>`,
    faqs: [
      {
        question: "Terminal'den şehir merkezine taksi kaç dakika sürer?",
        answer: "Ortalama 8-15 dakika sürmektedir. Trafik durumuna göre değişebilir."
      },
      {
        question: "Gece gelen otobüs için terminal taksisi var mı?",
        answer: "Evet, 7/24 hizmet veriyoruz. Gece yarısı da 0553 407 49 89'u arayabilirsiniz."
      },
      {
        question: "Terminal karşılama rezervasyonu nasıl yapılır?",
        answer: "Otobüs saatinizi, kaç kişi olduğunuzu ve gideceğiniz adresi bildirerek 0553 407 49 89'u arayın."
      },
      {
        question: "Terminale zamanında yetiştirebilir misiniz?",
        answer: "Evet, kalkış saatinize göre planlama yaparak sizi zamanında terminale ulaştırırız."
      }
    ]
  },
  {
    slug: "dugun-transfer",
    title: "Sivas Düğün ve Özel Etkinlik Transfer Hizmeti",
    metaDescription: "Sivas düğün, nişan ve özel etkinlikler için taksi ve transfer hizmeti. VIP araç, toplu transfer. Ara: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Düğün ve Özel Etkinlik Transfer Hizmeti",
    heroSubtitle: "Sivas'ta düğün, nişan, mezuniyet ve özel etkinlikler için güvenilir ve şık transfer hizmeti. Özel planlama ve toplu transfer çözümleri.",
    keywords: ["sivas düğün transfer", "sivas özel etkinlik taksi", "sivas taksi", "taksi 58 sivas", "sivas düğün taksisi"],
    features: [
      {
        title: "Düğün Konvoyu",
        description: "Düğün salonu, fotoğraf çekimi ve misafir transferleri için özel planlama ve konvoy düzenleme."
      },
      {
        title: "Davet Misafiri Transferleri",
        description: "Şehir dışından gelen misafirler için terminal ve havalimanı karşılama transferleri."
      },
      {
        title: "Gece Transfer Hizmeti",
        description: "Düğün bitiminde gece geç saatlerde misafirleri güvenle evlerine ulaştırıyoruz."
      },
      {
        title: "Özel Etkinlikler",
        description: "Nişan, kına gecesi, mezuniyet ve kurumsal etkinlikler için özel transfer çözümleri."
      }
    ],
    content: `<h2>Sivas Düğününüz için Transfer Hizmeti</h2>
<p>Özel günlerinizde ulaşım konusunda stres yaşamak istemezsiniz. <strong>Taksi 58 Sivas</strong>, düğün ve özel etkinlikleriniz için kapsamlı transfer hizmetleri sunmaktadır. Detaylı bilgi ve rezervasyon için: <strong>0553 407 49 89</strong>.</p>

<h2>Davet Misafirleri için Transfer</h2>
<p>Şehir dışından gelen misafirlerinizin Sivas Nuri Demirag Havalimanı veya otogardan otellerine ya da düğün salonuna güvenle ulaşmasını sağlıyoruz. Aynı şekilde geri dönüşlerinde de hizmetinizdeyiz.</p>

<h2>Düğün Günü Toplu Transfer</h2>
<p>Birden fazla araç gerektiren büyük organizasyonlar için toplu transfer planlaması yapılabilir. İhtiyacınızı ve tarihini bildirerek önceden rezervasyon yaptırın.</p>`,
    faqs: [
      {
        question: "Düğün transferi için ne kadar önceden rezervasyon yapılmalı?",
        answer: "En az birkaç gün öncesinden, tercihen 1 hafta öncesinden rezervasyon yapılması önerilir."
      },
      {
        question: "Çoklu araç için düğün transferi düzenlenebilir mi?",
        answer: "Evet, büyük organizasyonlar için birden fazla araç düzenlenebilir. Detaylar için 0553 407 49 89'u arayın."
      },
      {
        question: "Düğün gecesi gece geç saatte transfer var mı?",
        answer: "Evet, Taksi 58 Sivas 7/24 hizmet vermektedir. Düğün bitiminde misafirlerinizi güvenle ulaştırırız."
      },
      {
        question: "Havalimanından düğün misafirleri için karşılama transferi yapılıyor mu?",
        answer: "Evet, havalimanı ve terminal karşılama transferleri düzenlenebilir. Rezervasyon için arayın."
      }
    ]
  },
  {
    slug: "kurumsal-transfer",
    title: "Sivas Kurumsal Taksi Transfer Hizmeti | İş Seyahati Çözümleri",
    metaDescription: "Sivas'ta kurumsal taksi ve transfer hizmeti. İş toplantıları, konferans, havalimanı transferleri. Ara: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas Kurumsal Taksi ve Transfer Hizmeti",
    heroSubtitle: "Sivas'ta iş dünyası için profesyonel taksi transfer çözümleri. Havalimanı karşılama, toplantı transferleri ve düzenli kurumsal servis.",
    keywords: ["sivas kurumsal taksi", "sivas iş seyahati taksi", "sivas taksi", "taksi 58 sivas", "sivas kurumsal transfer"],
    features: [
      {
        title: "Havalimanı İş Transferi",
        description: "İş seyahatleri için Sivas Nuri Demirag Havalimanı'ndan ve havalimanına profesyonel transfer hizmeti."
      },
      {
        title: "Toplantı Transferleri",
        description: "Sivas'taki toplantı ve konferanslara zamanında ulaştırma, bekleme ve geri dönüş hizmetleri."
      },
      {
        title: "Misafir Karşılama",
        description: "Firmanıza gelen iş ortakları ve misafirlerin karşılanması ve transferi."
      },
      {
        title: "Düzenli Kurumsal Anlaşma",
        description: "Sık seyahat eden kurumsal müşteriler için özel anlaşma ve faturalı hizmet imkânı."
      }
    ],
    content: `<h2>Sivas'ta Kurumsal Taksi Hizmeti</h2>
<p>İş dünyasında dakiklik ve güvenilirlik kritik öneme sahiptir. <strong>Taksi 58 Sivas</strong>, Sivas'taki firmalara ve iş insanlarına profesyonel kurumsal transfer hizmetleri sunmaktadır. Kurumsal anlaşma veya rezervasyon için: <strong>0553 407 49 89</strong>.</p>

<h2>İş Seyahatlerinde Taksi 58 Sivas</h2>
<p>Sivas Nuri Demirag Havalimanı transferlerinden toplantı ve konferanslara kadar tüm iş seyahatlerinizde yanınızdayız. Sürücülerimiz profesyonel tutumlarıyla iş ortamına uygun hizmet sunar.</p>

<h2>Kurumsal Anlaşma Avantajları</h2>
<p>Sık taksi kullanan firmalar için özel anlaşma kapsamında düzenli hizmet, faturalı ödeme ve öncelikli rezervasyon imkânı sunulmaktadır. Detaylar için bizi arayın.</p>`,
    faqs: [
      {
        question: "Kurumsal müşteriler için faturalı ödeme var mı?",
        answer: "Evet, kurumsal anlaşma kapsamında faturalı hizmet düzenlenebilir. 0553 407 49 89'u arayın."
      },
      {
        question: "Şirketimize gelen misafirleri havalimanından karşılıyor musunuz?",
        answer: "Evet, iş misafirlerinizi havalimanında karşılayıp otel veya ofise götürürüz."
      },
      {
        question: "Kurumsal transfer için düzenli anlaşma yapılabilir mi?",
        answer: "Evet, düzenli transfer ihtiyacı olan firmalar için özel anlaşma yapılabilir."
      },
      {
        question: "Toplantı sırasında araç bekler mi?",
        answer: "Evet, bekleme hizmeti talep edebilirsiniz. Rezervasyon sırasında belirtin."
      }
    ]
  },
  {
    slug: "vip-transfer",
    title: "Sivas VIP Taksi Transfer Hizmeti | Lüks ve Konforlu Ulaşım",
    metaDescription: "Sivas'ta VIP taksi ve transfer hizmeti. Konforlu araçlar, özel hizmet, gizlilik garantisi. Rezervasyon: 0553 407 49 89 - Taksi 58 Sivas.",
    h1: "Sivas VIP Taksi ve Transfer Hizmeti",
    heroSubtitle: "Sivas'ta üst düzey konfor ve gizlilik garantisiyle VIP taksi transfer hizmeti. Özel organizasyonlar, iş toplantıları ve özel günler için.",
    keywords: ["sivas vip transfer", "sivas vip taksi", "sivas taksi", "taksi 58 sivas", "sivas lüks transfer"],
    features: [
      {
        title: "Konforlu Araçlar",
        description: "VIP transferler için bakımlı, temiz ve konforlu araçlar tahsis edilir."
      },
      {
        title: "Gizlilik Garantisi",
        description: "Müşteri bilgileri ve güzergahları tamamen gizli tutulur. Profesyonel sürücü tavrı garanti edilir."
      },
      {
        title: "Özel Karşılama",
        description: "Havalimanı veya terminalde isimli karşılama ve özel eşlik hizmeti."
      },
      {
        title: "Esnek Planlama",
        description: "Son dakika değişikliklerine uyum sağlayan esnek program yönetimi."
      }
    ],
    content: `<h2>Sivas VIP Transfer Hizmeti</h2>
<p>Özel günlerinizde ya da iş seyahatlerinizde konfor ve güvenliği ön planda tutan bir transfer hizmeti arıyorsanız <strong>Taksi 58 Sivas</strong> VIP transfer hizmetini değerlendirin. Konforlu araçlar ve profesyonel sürücülerle Sivas'ta üst düzey ulaşım deneyimi yaşayın. Rezervasyon: <strong>0553 407 49 89</strong>.</p>

<h2>Kimler için VIP Transfer?</h2>
<p>Sivas'a gelen üst düzey yöneticiler, önemli iş görüşmelerine katılanlar, özel kutlama yapmak isteyenler ve konforlu seyahat tercih edenler için VIP transfer hizmeti idealdir.</p>

<h2>VIP Transfer Rezervasyonu</h2>
<p>VIP transfer için önceden rezervasyon yapılması şiddetle önerilir. Tarihinizi, saatinizi ve özel taleplerinizi bildirerek en uygun aracı ve sürücüyü garanti altına alın.</p>`,
    faqs: [
      {
        question: "VIP transfer için ne kadar önceden rezervasyon yapılmalı?",
        answer: "En az 24 saat öncesinden rezervasyon yapılması önerilir. 0553 407 49 89'u arayın."
      },
      {
        question: "VIP araç nasıl belirleniyor?",
        answer: "Talep ve araç müsaitliğine göre en uygun konforlu araç tahsis edilir. Detaylar için arayın."
      },
      {
        question: "VIP transfer gizliliği garantili mi?",
        answer: "Evet, müşteri bilgileri ve güzergahlar tamamen gizli tutulur."
      },
      {
        question: "VIP transfer ücretleri ne kadar?",
        answer: "Fiyatlar güzergah ve hizmet kapsamına göre belirlenir. Bilgi almak için 0553 407 49 89'u arayın."
      }
    ]
  }
];
