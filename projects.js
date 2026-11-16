/*
  Vektörel Yapı — proje listesi
  -------------------------------------------------------------
  Yeni proje eklemek ya da bir projeyi güncellemek için yalnızca
  bu dosya değişir; sayfalar buradan kendiliğinden oluşur.

  Alanlar
    slug      adres için kısa ad (yalnız küçük harf, rakam, tire)
    status    "done" (tamamlandı) | "ongoing" (devam ediyor)
    cat       "water" (arıtma ve su tutan yapılar) | "steel" (çelik) | "rc" (betonarme)
    kind      "design" (statik proje) | "tender" (ihale dosyası)
    country   "TR" | "LY" | "IQ"
    title     { tr, en }
    place     { tr, en }   uygulama yeri (isteğe bağlı)
    facts     künye satırları: [anahtar, değer]   değer: metin ya da { tr, en }
    images    img/ klasöründeki dosyalar; fit:"contain" model ekran görüntüleri için
    pending   bilgisi eksik ya da doğrulanacak alanlar (önizlemede işaretlenir)
*/

window.PROJECTS = [
  {
    slug: "yenikapi-baat", status: "ongoing", cat: "water", kind: "design", country: "TR",
    title: { tr: "Yenikapı Biyolojik Atıksu Arıtma Tesisi", en: "Yenikapı Biological Wastewater Treatment Plant", ar: "محطة ينيكابي البيولوجية لمعالجة مياه الصرف الصحي" },
    place: { tr: "Yenikapı, İstanbul", en: "Yenikapı, Istanbul", ar: "ينيكابي، إسطنبول" },
    facts: [],
    pending: [{ tr: "Künye bekleniyor (kapasite, yapı sayısı, kapsam, takvim)", en: "Project data to follow (capacity, structures, scope, schedule)" }],
    images: [
      { src: "yenikapi-1.jpg", alt: { tr: "Son çöktürme yapısı modeli", en: "Final clarifier structure model" } },
      { src: "yenikapi-2.jpg", alt: { tr: "Ara terfi yapısı modeli", en: "Intermediate pumping structure model" } },
      { src: "yenikapi-3.jpg", alt: { tr: "Perfore yapısı modeli", en: "Perforated screen structure model" } },
      { src: "yenikapi-4.jpg", alt: { tr: "İdari bina modeli", en: "Administration building model" } },
      { src: "yenikapi-5.jpg", fit: "contain", alt: { tr: "Son çöktürme havuzu sonlu eleman modeli", en: "Final clarifier finite element model" } },
      { src: "yenikapi-6.jpg", fit: "contain", alt: { tr: "Perfore yapısı sonlu eleman modeli", en: "Perforated screen structure finite element model" } }
    ]
  },
  {
    slug: "suluq-aat", status: "done", cat: "water", kind: "design", country: "LY", featured: 1,
    title: { tr: "Suluq Atıksu Arıtma Tesisi", en: "Suluq Wastewater Treatment Plant", ar: "محطة معالجة مياه الصرف الصحي في سلوق" },
    place: { tr: "Suluq, Libya", en: "Suluq, Libya", ar: "سلوق، ليبيا" },
    scope: { tr: "Mevcut proje revizyonları", en: "Revisions to the existing design", ar: "تعديلات على التصميم القائم" },
    facts: [
      ["capacity", "12.000 m³/gün|12,000 m³/day"],
      ["structures", "25"],
      ["codes", "ACI · BS"],
      ["contractor", "Set Construction / Timtaş"],
      ["delivered", "Aralık 2025|December 2025"]
    ],
    year: 2025,
    images: [
      { src: "suluq-8.jpg", alt: { tr: "Suluq AAT, kuş bakışı drone fotoğrafı", en: "Suluq WWTP, top-down drone photo" } },
      { src: "suluq-7.jpg", alt: { tr: "Suluq AAT şantiyesi, havadan", en: "Suluq WWTP site from the air" } },
      { src: "suluq-9.jpg", alt: { tr: "Havuzlar ve dairesel çöktürme havuzları, havadan", en: "Basins and circular clarifiers from the air" } },
      { src: "suluq-10.jpg", alt: { tr: "Betonarme havuzlar ve servis köprüleri", en: "Reinforced concrete basins and service bridges" } },
      { src: "suluq-11.jpg", alt: { tr: "Havuzlar ve servis yapıları, inşaat sırasında", en: "Basins and service structures during construction" } },
      { src: "suluq-12.jpg", alt: { tr: "Havuzlar, tepeden görünüm", en: "Basins, top view" } },
      { src: "suluq-13.jpg", alt: { tr: "Suluq AAT, inşaat aşaması", en: "Suluq WWTP during construction" } },
      { src: "suluq-1.jpg", alt: { tr: "Suluq AAT görselleştirme, havuzlar", en: "Suluq WWTP rendering, basins" } },
      { src: "suluq-2.jpg", alt: { tr: "Suluq AAT kuş bakışı görselleştirme", en: "Suluq WWTP aerial rendering" } },
      { src: "suluq-3.jpg", alt: { tr: "Suluq AAT vaziyet planı görselleştirmesi", en: "Suluq WWTP site plan rendering" } },
      { src: "suluq-4.jpg", fit: "contain", alt: { tr: "Havuz sonlu eleman modeli", en: "Basin finite element model" } },
      { src: "suluq-5.jpg", fit: "contain", alt: { tr: "Dairesel çöktürme havuzu modeli", en: "Circular clarifier model" } },
      { src: "suluq-6.jpg", fit: "contain", alt: { tr: "Tesis yapısı modeli", en: "Plant structure model" } }
    ]
  },
  {
    slug: "al-bayda-ihale", status: "done", cat: "water", kind: "tender", country: "LY", featured: 2,
    title: { tr: "Al Bayda AAT İhale Dosyası", en: "Al Bayda WWTP Tender Design", ar: "وثائق مناقصة محطات معالجة مياه الصرف الصحي في البيضاء" },
    place: { tr: "Al Bayda, Libya", en: "Al Bayda, Libya", ar: "البيضاء، ليبيا" },
    scope: { tr: "Atıksu arıtma tesisleri ihale dosyası hazırlanması", en: "Structural tender documentation for wastewater treatment plants", ar: "إعداد الوثائق الإنشائية لمناقصة محطات معالجة مياه الصرف الصحي" },
    facts: [
      ["capacity", "25.000 + 75.000 + 100.000 m³/gün|25,000 + 75,000 + 100,000 m³/day"],
      ["plants", "3"],
      ["bidder", "Set Construction / Timtaş"],
      ["result", "Firma ihaleyi kazandı|Contract awarded to the bidder|فازت الشركة بالمناقصة"],
      ["delivered", "Aralık 2025|December 2025"]
    ],
    year: 2025,
    images: [
      { src: "albayda-1.jpg", alt: { tr: "Al Bayda AAT görselleştirme", en: "Al Bayda WWTP rendering" } },
      { src: "albayda-2.jpg", alt: { tr: "Al Bayda AAT çöktürme havuzları görselleştirmesi", en: "Al Bayda WWTP clarifiers rendering" } },
      { src: "albayda-3.jpg", alt: { tr: "Al Bayda AAT yerleşim görselleştirmesi", en: "Al Bayda WWTP layout rendering" } }
    ]
  },
  {
    slug: "suluq-temiz-su-tanki", status: "done", cat: "water", kind: "design", country: "LY",
    title: { tr: "Suluq Temiz Su Deposu ve Pompa İstasyonu", en: "Suluq Clean Water Reservoir and Pump Station", ar: "خزان مياه الشرب ومحطة الضخ في سلوق" },
    place: { tr: "Suluq, Libya", en: "Suluq, Libya", ar: "سلوق، ليبيا" },
    facts: [
      ["capacity", "20.000 m³|20,000 m³"],
      ["contractor", "Set Construction / Timtaş"],
      ["delivered", "Kasım 2025|November 2025"]
    ],
    year: 2025,
    images: [
      { src: "suluq-tank-1.jpg", fit: "contain", alt: { tr: "Temiz su deposu sonlu eleman modeli", en: "Clean water reservoir finite element model" } },
      { src: "suluq-tank-2.jpg", fit: "contain", alt: { tr: "Depo temeli ve duvar modeli", en: "Reservoir base and wall model" } },
      { src: "suluq-tank-3.jpg", fit: "contain", alt: { tr: "Pompa istasyonu üst yapı modeli", en: "Pump station superstructure model" } }
    ]
  },
  {
    slug: "halepce-aat", status: "done", cat: "water", kind: "design", country: "IQ", featured: 4,
    title: { tr: "Halepçe Atıksu Arıtma Tesisi", en: "Halabja Wastewater Treatment Plant", ar: "محطة معالجة مياه الصرف الصحي في حلبجة" },
    place: { tr: "Halepçe, Irak", en: "Halabja, Iraq", ar: "حلبجة، العراق" },
    client: "Halabja Group",
    facts: [
      ["capacity", "800 m³/gün|800 m³/day"],
      ["structures", "10"],
      ["codes", "ACI · BS"],
      ["delivered", "Mayıs 2024|May 2024"]
    ],
    year: 2024,
    images: [
      { src: "halepce-1.jpg", alt: { tr: "Halepçe AAT şantiyesi, havadan", en: "Halabja WWTP site from the air" } },
      { src: "halepce-2.jpg", alt: { tr: "Halepçe AAT yapıları, yakından havadan görünüm", en: "Halabja WWTP structures, close aerial view" } },
      { src: "halepce-3.jpg", alt: { tr: "Halepçe AAT, tepeden drone görüntüsü", en: "Halabja WWTP, top-down drone view" } },
      { src: "halepce-4.jpg", fit: "contain", alt: { tr: "Havuz sonlu eleman modeli", en: "Basin finite element model" } },
      { src: "halepce-5.jpg", fit: "contain", alt: { tr: "Dairesel çöktürme havuzu modeli", en: "Circular clarifier model" } },
      { src: "halepce-6.jpg", fit: "contain", alt: { tr: "Havuz modeli", en: "Basin model" } }
    ]
  },
  {
    slug: "irak-aat", status: "done", cat: "water", kind: "design", country: "IQ",
    title: { tr: "Basra Atıksu Arıtma Tesisi", en: "Basra Wastewater Treatment Plant", ar: "محطة معالجة مياه الصرف الصحي في البصرة" },
    place: { tr: "Basra, Irak", en: "Basra, Iraq", ar: "البصرة، العراق" },
    facts: [
      ["capacity", "155.000 m³/gün|155,000 m³/day"],
      ["delivered", "Kasım 2025|November 2025"]
    ],
    year: 2025,
    images: [
      { src: "irak-1.jpg", fit: "contain", alt: { tr: "Havuz sonlu eleman modeli", en: "Basin finite element model" } },
      { src: "irak-2.jpg", fit: "contain", alt: { tr: "Havuz ve kanal modeli", en: "Basin and channel model" } },
      { src: "irak-3.jpg", fit: "contain", alt: { tr: "Dairesel çöktürme havuzu modeli", en: "Circular clarifier model" } },
      { src: "irak-4.jpg", fit: "contain", alt: { tr: "Tesis yerleşim çizimi", en: "Plant layout drawing" } }
    ]
  },
  {
    slug: "iski-5-aat-ihale", status: "done", cat: "water", kind: "tender", country: "TR",
    title: { tr: "İSKİ 5 Adet AAT İhale Dosyası", en: "İSKİ Five-Plant WWTP Tender Design", ar: "وثائق مناقصة خمس محطات لمعالجة مياه الصرف الصحي لإدارة المياه في إسطنبول (İSKİ)" },
    place: { tr: "Bozhane, Kilyos, Koçullu, Reşadiye, Riva — İstanbul", en: "Bozhane, Kilyos, Koçullu, Reşadiye, Riva — Istanbul", ar: "بوزهانه، كيليوس، كوتشوللو، رشادية، ريفا — إسطنبول" },
    scope: { tr: "Atıksu arıtma tesisleri ihale dosyası hazırlanması", en: "Structural tender documentation for wastewater treatment plants", ar: "إعداد الوثائق الإنشائية لمناقصة محطات معالجة مياه الصرف الصحي" },
    facts: [
      ["capacity", "52.000 m³/gün|52,000 m³/day"],
      ["plants", "5"],
      ["bidder", "Kontrolmatik Teknoloji Enerji ve Mühendislik"],
      ["result", "Firma ihaleyi kazandı|Contract awarded to the bidder|فازت الشركة بالمناقصة"],
      ["delivered", "Nisan 2025|April 2025"]
    ],
    year: 2025,
    images: []
  },
  {
    slug: "usak-dkosb", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Uşak Deri Karma OSB Atıksu Geri Kazanım Tesisi", en: "Uşak Leather OIZ Wastewater Recovery Plant", ar: "محطة استرداد مياه الصرف في المنطقة الصناعية للجلود في أوشاك" },
    place: { tr: "Uşak", en: "Uşak, Türkiye", ar: "أوشاك، تركيا" },
    facts: [
      ["structures", "2"],
      ["codes", "ACI · BS · TBDY 2018"],
      ["delivered", "Mayıs 2026|May 2026"]
    ],
    pending: [{ tr: "Kapasite: mevcut sitede boş", en: "Capacity: blank on the current site" }],
    year: 2026,
    images: [
      { src: "usak-1.jpg", fit: "contain", alt: { tr: "Tesis yapısı sonlu eleman modeli", en: "Plant structure finite element model" } },
      { src: "usak-2.jpg", fit: "contain", alt: { tr: "Yapı modeli", en: "Structure model" } },
      { src: "usak-3.jpg", fit: "contain", alt: { tr: "Yapı modeli, yan görünüm", en: "Structure model, side view" } }
    ]
  },
  {
    slug: "kutahya-osb-aat", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Kütahya OSB Atıksu Arıtma Tesisi", en: "Kütahya OIZ Wastewater Treatment Plant", ar: "محطة معالجة مياه الصرف الصحي في المنطقة الصناعية بكوتاهيا" },
    place: { tr: "Kütahya", en: "Kütahya, Türkiye", ar: "كوتاهيا، تركيا" },
    scope: { tr: "İnşaat işleri statik projesi", en: "Structural design for civil works", ar: "التصميم الإنشائي للأعمال المدنية" },
    facts: [
      ["capacity", "15.000 m³/gün|15,000 m³/day"],
      ["structures", "8"],
      ["codes", "ACI · BS · TBDY 2018"],
      ["delivered", "Mart 2025|March 2025"]
    ],
    year: 2025,
    images: [
      { src: "kutahya-1.jpg", fit: "contain", alt: { tr: "Betonarme yapı modeli", en: "Reinforced concrete structure model" } },
      { src: "kutahya-2.jpg", fit: "contain", alt: { tr: "Dairesel çöktürme havuzu modeli", en: "Circular clarifier model" } },
      { src: "kutahya-3.jpg", fit: "contain", alt: { tr: "Havuz modeli", en: "Basin model" } },
      { src: "kutahya-4.jpg", fit: "contain", alt: { tr: "Havuz modeli", en: "Basin model" } },
      { src: "kutahya-5.jpg", fit: "contain", alt: { tr: "Havuz ve üst yapı modeli", en: "Basin and superstructure model" } }
    ]
  },
  {
    slug: "manisa-uzunburun", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Uzunburun Katı Atık Tesisi Havalandırma Havuzu", en: "Uzunburun Solid Waste Facility Aeration Basin", ar: "حوض التهوية في منشأة أوزونبورون للنفايات الصلبة" },
    place: { tr: "Manisa", en: "Manisa, Türkiye", ar: "مانيسا، تركيا" },
    client: "Manisa Büyükşehir Belediyesi",
    facts: [
      ["capacity", "500 m³/gün|500 m³/day"],
      ["structures", "1"],
      ["codes", "ACI · BS · TBDY 2018"],
      ["delivered", "Kasım 2024|November 2024"]
    ],
    year: 2024,
    images: [
      { src: "manisa-1.jpg", alt: { tr: "Havalandırma havuzu inşaatı", en: "Aeration basin under construction" } },
      { src: "manisa-2.jpg", alt: { tr: "Havuz duvarlarının dökümü", en: "Basin walls being cast" } },
      { src: "manisa-3.jpg", fit: "contain", alt: { tr: "Havalandırma havuzu sonlu eleman modeli", en: "Aeration basin finite element model" } },
      { src: "manisa-4.jpg", fit: "contain", alt: { tr: "Havuz modeli", en: "Basin model" } }
    ]
  },
  {
    slug: "balikesir-osb-aat", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Balıkesir OSB Atıksu Arıtma Tesisi İlave Yapılar", en: "Balıkesir OIZ WWTP Additional Structures", ar: "منشآت إضافية لمحطة معالجة مياه الصرف الصحي في المنطقة الصناعية بباليكسير" },
    place: { tr: "Balıkesir", en: "Balıkesir, Türkiye", ar: "باليكسير، تركيا" },
    facts: [
      ["capacity", "10.000 m³/gün|10,000 m³/day"],
      ["structures", "5"],
      ["codes", "TBDY 2018 · TS 500 · ÇYTHYE 2018 · ACI · BS"],
      ["delivered", "Haziran 2024|June 2024"]
    ],
    year: 2024,
    images: [
      { src: "balikesir-1.jpg", fit: "contain", alt: { tr: "Çelik çatılı betonarme yapı modeli", en: "RC building with steel roof, model" } },
      { src: "balikesir-2.jpg", fit: "contain", alt: { tr: "DAF ünitesi modeli", en: "DAF unit model" } },
      { src: "balikesir-3.jpg", fit: "contain", alt: { tr: "Geri kazanım yapısı modeli", en: "Recovery structure model" } },
      { src: "balikesir-4.jpg", fit: "contain", alt: { tr: "Çelik çatı ve betonarme yapı modeli", en: "Steel roof and RC structure model" } },
      { src: "balikesir-5.jpg", fit: "contain", alt: { tr: "Dağıtım yapısı modeli", en: "Distribution structure model" } }
    ]
  },
  {
    slug: "anadolu-efes-cumra", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Anadolu Efes Çumra Tesisi İlave Yapılar", en: "Anadolu Efes Çumra Plant Additional Structures", ar: "منشآت إضافية لمصنع Anadolu Efes في تشومرا" },
    place: { tr: "Çumra, Konya", en: "Çumra, Konya, Türkiye", ar: "تشومرا، قونية، تركيا" },
    client: "Anadolu Efes",
    facts: [
      ["capacity", "1.200 m³/gün|1,200 m³/day"],
      ["structures", "4"],
      ["codes", "TBDY 2018 · TS 500 · ÇYTHYE 2018 · ACI · BS"],
      ["delivered", "Kasım 2022|November 2022"]
    ],
    year: 2022,
    images: [
      { src: "efes-1.jpg", fit: "contain", alt: { tr: "Filtrasyon yapısı modeli", en: "Filtration structure model" } },
      { src: "efes-2.jpg", fit: "contain", alt: { tr: "Filtrasyon binası çelik modeli", en: "Filtration building steel model" } },
      { src: "efes-3.jpg", fit: "contain", alt: { tr: "PAC stok yapısı modeli", en: "PAC storage structure model" } },
      { src: "efes-4.jpg", fit: "contain", alt: { tr: "Çelik depo yapısı modeli", en: "Steel storage building model" } }
    ]
  },
  {
    slug: "gonenli-akhisar-aat", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Gönenli Süt Akhisar Atıksu Arıtma Tesisi", en: "Gönenli Dairy Akhisar Wastewater Treatment Plant", ar: "محطة معالجة مياه الصرف لمصنع ألبان Gönenli في آق حصار" },
    place: { tr: "Akhisar, Manisa", en: "Akhisar, Manisa, Türkiye", ar: "آق حصار، مانيسا، تركيا" },
    client: "Gönenli Süt ve Süt Ürünleri A.Ş.",
    facts: [
      ["capacity", "3.500 m³/gün|3,500 m³/day"],
      ["structures", "8"],
      ["codes", "ACI · BS · TBDY 2018"],
      ["delivered", "Eylül 2022|September 2022"]
    ],
    year: 2022,
    images: [
      { src: "gonenli-1.jpg", fit: "contain", alt: { tr: "Dairesel son çöktürme havuzu modeli", en: "Circular final clarifier model" } },
      { src: "gonenli-2.jpg", fit: "contain", alt: { tr: "Havalandırma havuzu modeli", en: "Aeration basin model" } },
      { src: "gonenli-3.jpg", fit: "contain", alt: { tr: "Dengeleme havuzu modeli", en: "Equalisation basin model" } },
      { src: "gonenli-4.jpg", fit: "contain", alt: { tr: "Genel yerleşim planı", en: "General layout plan" } }
    ]
  },
  {
    slug: "mey-icki-alasehir", status: "done", cat: "water", kind: "design", country: "TR",
    title: { tr: "Mey İçki Alaşehir Tesisi İlave Yapılar", en: "Mey İçki Alaşehir Plant Additional Structures", ar: "منشآت إضافية لمصنع Mey İçki في آلاشهير" },
    place: { tr: "Alaşehir, Manisa", en: "Alaşehir, Manisa, Türkiye", ar: "آلاشهير، مانيسا، تركيا" },
    client: "Mey İçki",
    facts: [
      ["structures", "2"],
      ["codes", "TBDY 2018 · TS 500 · ÇYTHYE 2018 · ACI · BS"],
      ["delivered", "Temmuz 2023|July 2023"]
    ],
    year: 2023,
    images: [
      { src: "mey-1.jpg", fit: "contain", alt: { tr: "Dairesel son çöktürme havuzu modeli", en: "Circular final clarifier model" } }
    ]
  },
  {
    slug: "novart-atolye", status: "done", cat: "steel", kind: "design", country: "TR", featured: 3,
    title: { tr: "Novart Uzay Teknolojileri Atölye Yapısı", en: "Novart Space Technologies Workshop", ar: "ورشة Novart لتقنيات الفضاء" },
    place: { tr: "Teknopark İstanbul", en: "Teknopark Istanbul", ar: "تكنوبارك إسطنبول" },
    client: "Novart Uzay Teknolojileri A.Ş.",
    scope: { tr: "Çelik konstrüksiyon atölye yapısı", en: "Structural steel workshop building", ar: "مبنى ورشة بهيكل فولاذي" },
    facts: [["delivered", "Eylül 2026|September 2026"]],
    year: 2026,
    images: [
      { src: "novart-1.jpg", fit: "contain", alt: { tr: "Çelik atölye yapısı modeli", en: "Steel workshop model" } },
      { src: "novart-2.jpg", fit: "contain", alt: { tr: "Çelik çerçeve ve çaprazlar", en: "Steel frames and bracing" } }
    ]
  },
  {
    slug: "sisecam-yangin-koridoru", status: "done", cat: "steel", kind: "design", country: "TR", featured: 5,
    title: { tr: "Şişecam Kırklareli Yangın Koridoru", en: "Şişecam Kırklareli Fire Escape Corridor", ar: "ممر الهروب من الحريق في مصنع Şişecam بكيركلاريلي" },
    place: { tr: "Şişecam Düzcam Kırklareli Fabrikaları", en: "Şişecam Flat Glass Plant, Kırklareli", ar: "مصانع Şişecam للزجاج المسطح، كيركلاريلي" },
    scope: { tr: "Çelik konstrüksiyon yangın koridoru", en: "Structural steel fire escape corridor", ar: "ممر هروب من الحريق بهيكل فولاذي" },
    facts: [["contractor", "Alkataş İnşaat ve Taahhüt A.Ş."], ["delivered", "Aralık 2025|December 2025"]],
    year: 2025,
    images: [
      { src: "yangin-1.jpg", fit: "contain", alt: { tr: "Yangın koridoru, uygulama", en: "Fire escape corridor, as built" } },
      { src: "yangin-2.jpg", fit: "contain", alt: { tr: "Koridorun içi", en: "Inside the corridor" } },
      { src: "yangin-3.jpg", fit: "contain", alt: { tr: "Koridor çelik taşıyıcıları", en: "Corridor steel framing" } }
    ]
  },
  {
    slug: "sisecam-ambar-cephe", status: "done", cat: "steel", kind: "design", country: "TR",
    title: { tr: "Şişecam Kırklareli Ambar Cephe Kolonları", en: "Şişecam Kırklareli Warehouse Façade Columns", ar: "أعمدة واجهة المستودع في مصنع Şişecam بكيركلاريلي" },
    place: { tr: "Şişecam Düzcam Kırklareli Fabrikaları", en: "Şişecam Flat Glass Plant, Kırklareli", ar: "مصانع Şişecam للزجاج المسطح، كيركلاريلي" },
    scope: { tr: "Ambar cephesi çelik kolonları", en: "Steel columns for the warehouse façade", ar: "أعمدة فولاذية لواجهة المستودع" },
    facts: [["contractor", "Alkataş İnşaat ve Taahhüt A.Ş."], ["delivered", "Aralık 2024|December 2024"]],
    year: 2024,
    images: [
      { src: "ambar-1.jpg", fit: "contain", alt: { tr: "Cephe kolonları ve kaplama, model", en: "Façade columns and cladding, model" } },
      { src: "ambar-2.jpg", fit: "contain", alt: { tr: "Çelik cephe kolonları, model", en: "Steel façade columns, model" } }
    ]
  },
  {
    slug: "sisecam-ag-kosk-temeli", status: "done", cat: "rc", kind: "design", country: "TR",
    title: { tr: "Şişecam Kırklareli AG Köşk Temeli", en: "Şişecam Kırklareli LV Kiosk Foundation", ar: "أساس غرفة الجهد المنخفض في مصنع Şişecam بكيركلاريلي" },
    place: { tr: "Şişecam Düzcam Kırklareli Fabrikaları", en: "Şişecam Flat Glass Plant, Kırklareli", ar: "مصانع Şişecam للزجاج المسطح، كيركلاريلي" },
    scope: { tr: "Alçak gerilim köşkü için betonarme temel", en: "Reinforced concrete foundation for a low-voltage kiosk", ar: "أساس من الخرسانة المسلحة لغرفة جهد منخفض" },
    facts: [["contractor", "Alkataş İnşaat ve Taahhüt A.Ş."], ["delivered", "Mayıs 2025|May 2025"]],
    year: 2025,
    images: [
      { src: "kosk-1.jpg", fit: "contain", alt: { tr: "Temel modeli", en: "Foundation model" } },
      { src: "kosk-2.jpg", fit: "contain", alt: { tr: "Temel analiz sonucu", en: "Foundation analysis result" } }
    ]
  },
  {
    slug: "sisecam-catalca-vinc-temeli", status: "done", cat: "rc", kind: "design", country: "TR",
    title: { tr: "Şişecam Çatalca Vinç Temeli", en: "Şişecam Çatalca Crane Foundation", ar: "أساس الرافعة في مصنع Şişecam بتشاتالجا" },
    place: { tr: "Çatalca, İstanbul", en: "Çatalca, İstanbul, Türkiye", ar: "تشاتالجا، إسطنبول" },
    scope: { tr: "Vinç için betonarme temel", en: "Reinforced concrete foundation for a crane", ar: "أساس من الخرسانة المسلحة لرافعة" },
    facts: [["contractor", "Alkataş İnşaat ve Taahhüt A.Ş."], ["delivered", "Mart 2023|March 2023"]],
    year: 2023,
    images: [
      { src: "vinc-1.jpg", fit: "contain", alt: { tr: "Vinç temeli modeli", en: "Crane foundation model" } }
    ]
  },
  {
    slug: "haci-omerli-mesire", status: "done", cat: "steel", kind: "design", country: "TR",
    title: { tr: "Hacı Ömerli Mesire Alanı Sosyal Tesis", en: "Hacı Ömerli Recreation Area Amenity Building", ar: "مبنى خدمات في متنزه حاجي عمرلي" },
    place: { tr: "Aliağa, İzmir", en: "Aliağa, İzmir, Türkiye", ar: "علي آغا، إزمير" },
    scope: { tr: "Çelik konstrüksiyon sosyal alan", en: "Structural steel amenity building", ar: "مبنى خدمات بهيكل فولاذي" },
    facts: [
      ["area", "240 m²"],
      ["steel", "18,8 ton|18.8 t"],
      ["delivered", "Ocak 2023|January 2023"]
    ],
    year: 2023,
    images: [
      { src: "mesire-1.jpg", fit: "contain", alt: { tr: "Çelik sosyal alan modeli", en: "Steel pavilion model" } },
      { src: "mesire-2.jpg", fit: "contain", alt: { tr: "Çelik sosyal alan modeli, yakın görünüm", en: "Steel pavilion model, close view" } }
    ]
  },
  {
    slug: "aliaga-mobilya-deposu", status: "done", cat: "steel", kind: "design", country: "TR",
    title: { tr: "Aliağa Mobilya Deposu", en: "Aliağa Furniture Warehouse", ar: "مستودع أثاث في علي آغا" },
    place: { tr: "Aliağa, İzmir", en: "Aliağa, İzmir, Türkiye", ar: "علي آغا، إزمير" },
    scope: { tr: "Çelik konstrüksiyon depo yapısı", en: "Structural steel warehouse", ar: "مستودع بهيكل فولاذي" },
    facts: [["area", "36 × 30 m · 1.080 m²|36 × 30 m · 1,080 m²"], ["delivered", "Nisan 2023|April 2023"]],
    year: 2023,
    images: [
      { src: "mobilya-1.jpg", fit: "contain", alt: { tr: "Çelik depo modeli", en: "Steel warehouse model" } }
    ]
  },
  {
    slug: "aliaga-ciftlik-ahir", status: "done", cat: "steel", kind: "design", country: "TR",
    title: { tr: "Aliağa Çiftlik Projesi Ahır Yapısı", en: "Aliağa Farm Barn", ar: "حظيرة مزرعة في علي آغا" },
    place: { tr: "Aliağa, İzmir", en: "Aliağa, İzmir, Türkiye", ar: "علي آغا، إزمير" },
    scope: { tr: "Çelik konstrüksiyon ahır yapısı", en: "Structural steel barn", ar: "حظيرة بهيكل فولاذي" },
    facts: [["area", "30 × 90 m · 2.700 m²|30 × 90 m · 2,700 m²"], ["delivered", "Aralık 2021|December 2021"]],
    year: 2021,
    images: [
      { src: "ahir-1.jpg", fit: "contain", alt: { tr: "Çelik ahır modeli", en: "Steel barn model" } }
    ]
  },
  {
    slug: "aliaga-ciftlik-idari-bina", status: "done", cat: "steel", kind: "design", country: "TR",
    title: { tr: "Aliağa Çiftlik Projesi İdari Bina", en: "Aliağa Farm Office Building", ar: "المبنى الإداري لمزرعة في علي آغا" },
    place: { tr: "Aliağa, İzmir", en: "Aliağa, İzmir, Türkiye", ar: "علي آغا، إزمير" },
    scope: { tr: "Çelik konstrüksiyon idari bina", en: "Structural steel office building", ar: "مبنى إداري بهيكل فولاذي" },
    facts: [["area", "30 × 15 m · 2 kat · 900 m²|30 × 15 m · 2 storeys · 900 m²|30 × 15 م · طابقان · 900 م²"], ["delivered", "Aralık 2021|December 2021"]],
    year: 2021,
    images: [
      { src: "idari-1.jpg", fit: "contain", alt: { tr: "İki katlı çelik idari bina modeli", en: "Two-storey steel office model" } }
    ]
  },
  {
    slug: "k1-plaza-ilave-kat", status: "done", cat: "rc", kind: "design", country: "TR", featured: 6,
    title: { tr: "K-1 Plaza İlave Kat ve Güçlendirme", en: "K-1 Plaza Additional Storey and Strengthening", ar: "إضافة طابق وتدعيم مبنى K-1 Plaza" },
    scope: { tr: "İlave kat, güçlendirme ve uygulama projesi", en: "Additional storey, strengthening and construction drawings", ar: "إضافة طابق والتدعيم وإعداد المخططات التنفيذية" },
    facts: [["area", "300 m² kapalı alan|300 m² enclosed area|300 م² مساحة مغلقة"], ["delivered", "Eylül 2022|September 2022"]],
    year: 2022,
    images: [
      { src: "k1-1.jpg", fit: "contain", alt: { tr: "Çok katlı betonarme yapı modeli", en: "Multi-storey RC building model" } }
    ]
  },
  {
    slug: "aliaga-sakran-konut", status: "done", cat: "rc", kind: "design", country: "TR",
    title: { tr: "Aliağa Şakran Konut Projesi", en: "Aliağa Şakran Residential Building", ar: "مبنى سكني في شاكران، علي آغا" },
    place: { tr: "Şakran, Aliağa, İzmir", en: "Şakran, Aliağa, İzmir, Türkiye", ar: "شاكران، علي آغا، إزمير" },
    facts: [
      ["area", "990 m²|990 m² gross floor area|990 م² إجمالي مساحة الطوابق"],
      ["storeys", "1 bodrum + zemin + 3 normal kat|Basement + ground + 3 storeys|قبو + طابق أرضي + 3 طوابق"],
      ["system", "Yüksek süneklik düzeyli çerçeve ve boşluksuz perde|High-ductility frames with solid shear walls|إطارات عالية المطيلية مع جدران قص مصمتة"],
      ["delivered", "Temmuz 2023|July 2023"]
    ],
    year: 2023,
    images: [
      { src: "sakran-1.jpg", fit: "contain", alt: { tr: "Betonarme konut modeli", en: "RC residential building model" } },
      { src: "sakran-2.jpg", fit: "contain", alt: { tr: "Betonarme konut modeli, ikinci görünüm", en: "RC residential building model, second view" } }
    ]
  }
];
