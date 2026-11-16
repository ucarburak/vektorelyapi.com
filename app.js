/* Vektörel Yapı — site uygulaması. İçerik projects.js ve aşağıdaki T metinlerinden gelir. */
(function () {
  "use strict";

  var WA = "905325839769";
  var PHONE = "+90 532 583 97 69";
  var MAIL = "info@vektorelyapi.com";
  // Sosyal hesaplar (Burak, 16.11.2026: LinkedIn yalnız şirket sayfası; Instagram az aktif ama olsun). Boş adres görünmez.
  // [ad, adres, kartta görünen değer, simge (tek renk, currentColor)]
  var SOCIAL = [
    ["LinkedIn", "https://www.linkedin.com/company/87382831/", "Vektörel Yapı",
      '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.6 4.78 6V21h-4v-5.2c0-1.25-.03-2.85-1.75-2.85-1.75 0-2.02 1.36-2.02 2.76V21h-4z"/></svg>'],
    ["Instagram", "https://www.instagram.com/vektorelyapi/", "@vektorelyapi",
      '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/></svg>']
  ].filter(function (s) { return s[1]; });

  var T = {
    tr: {
      nav: { home: "Ana Sayfa", services: "Hizmetler", projects: "Projeler", about: "Hakkımızda", contact: "İletişim" },
      draft: "Önizleme sürümü, yayında değil. Sarı işaretli alanlar sizden bilgi bekliyor.",
      metaDesc: "Betonarme ve çelik yapılar için statik proje. Uzmanlık alanımız su tutan yapılar ve arıtma tesisleri. Türkiye, Libya, Irak.",
      heroTitle: "Betonarme ve Çelik Yapılar İçin Statik Proje",
      heroLead: "Uzmanlık alanımız su tutan yapılar ve arıtma tesisleri. Türkiye, Libya, Irak.",
      seeProjects: "Projeleri inceleyin",
      whatsapp: "WhatsApp'tan yazın",
      heroCaption: "Suluq Atıksu Arıtma Tesisi, Libya · 12.000 m³/gün · 25 yapı",
      stats: [["projects", "tamamlanmış proje"], ["countries", "ülke: Türkiye, Libya, Irak"], ["water", "arıtma ve su tutan yapı projesi"]],
      servicesTitle: "Hizmetler",
      servicesLead: "Konut ve sanayi yapılarından arıtma tesislerine, üç alanda statik hesap ve uygulama projesi hazırlıyoruz.",
      services: {
        water: {
          title: "Arıtma Tesisleri ve Su Tutan Yapılar",
          text: "Atıksu ve içme suyu arıtma tesislerinin betonarme yapılarını projelendiriyoruz: havuzlar, çöktürme ve havalandırma üniteleri, tanklar ve tesis binaları. İhale aşamasında yüklenicilere yapısal keşif ve metraj hazırlıyoruz.",
          list: ["Havalandırma ve dengeleme havuzları", "Dairesel çöktürme havuzları", "Temiz su ve proses tankları", "İhale dosyası yapısal keşif ve metraj"]
        },
        rc: {
          title: "Betonarme Yapı Projeleri",
          text: "Konut, kamu ve endüstriyel betonarme binaların, temel ve istinat yapılarının statik hesabını ve uygulama projesini hazırlıyoruz. Mevcut yapılarda performans analizi ve güçlendirme, başka ofislerin projelerinde bağımsız kontrol yapıyoruz.",
          list: ["Konut ve ticari binalar", "Okul, sağlık ve idari binalar", "Endüstriyel tesis ve üretim binaları", "Otopark ve çok katlı bodrum yapıları", "Betonarme depo, silo ve bunker yapıları", "Ekipman ve makine temelleri", "Radye, kazıklı ve sürekli temel sistemleri", "İstinat duvarları ve bodrum perdeleri", "Güçlendirme ve performans analizi", "Statik proje kontrolü ve bağımsız inceleme", "Keşif ve metraj"]
        },
        steel: {
          title: "Çelik Yapı Projeleri",
          text: "Depo, atölye, tarım ve endüstriyel tesis yapılarında çelik konstrüksiyonun statik hesabını ve uygulama projesini hazırlıyoruz.",
          list: ["Depo ve atölye yapıları", "Ahır ve tarım yapıları", "Fabrika içi koridor ve platformlar", "Sosyal alan ve çatı yapıları"]
        }
      },
      seeRelated: "Bu alandaki projeler",
      approachTitle: "Tasarım Yaklaşımı",
      approachLead: "Her etkiyi, o etkiyi düzenleyen yönetmeliğe göre hesaplıyoruz. Analizleri uluslararası kabul görmüş sonlu elemanlar yazılımlarıyla yapıyor, projenin yerine ve şartnamesine göre Türk ya da uluslararası yönetmelikleri kullanıyoruz.",
      approachHead: ["Etki Ya Da Kontrol", "Yönetmelik"],
      codesLabel: "Yönetmelikler",
      codesLead: "Projenin yerine ve şartnamesine göre Türk ya da uluslararası yönetmelikler",
      codesMore: "Ayrıntılar",
      approach: [
        { title: "Su Tutan Yapılar", rows: [
          ["Betonarme tasarım", "TS 500 · TBDY 2018 / ACI 318-25 / ACI 350-06"],
          ["Çatlak kontrolü", "BS 8007 / ACI 350-06"],
          ["Toprak itkisi", "TBDY 2018 / ACI 350.3"],
          ["Hidrodinamik basınç", "ACI 350.3"],
          ["Deprem", "TBDY 2018 / ASCE 7"],
          ["Devrilme ve kayma", "TBDY 2018 / IBC"]
        ] },
        { title: "Betonarme Yapılar", rows: [
          ["Deprem hesabı", "TBDY 2018"],
          ["Yükler", "TS 498"],
          ["Kesit hesabı ve detaylandırma", "TS 500 · TBDY 2018"],
          ["Mevcut yapılar: performans analizi ve güçlendirme", "TBDY 2018 Bölüm 15"]
        ] },
        { title: "Çelik Yapılar", rows: [
          ["Deprem hesabı", "TBDY 2018 / ASCE 7 · AISC 341"],
          ["Yükler", "TS 498 / ASCE 7"],
          ["Eleman ve birleşim tasarımı", "ÇYTHYE 2018 / AISC 360"]
        ] }
      ],
      featuredTitle: "Referans Projeler",
      allProjects: "Tüm projeler",
      ctaTitle: "Projeniz İçin Yapısal Analiz Desteği Mi Gerekiyor?",
      ctaText: "Proje kapsamını, yerini ve takvimini kısaca yazın.",
      projectsTitle: "Projeler",
      projectsLead: function (n, m) { return n + " tamamlanmış" + (m ? " ve " + m + " devam eden" : "") + " proje. Görseller statik modellerden, görselleştirmelerden ve şantiye fotoğraflarından oluşur."; },
      filterAll: "Tümü",
      cats: { water: "Arıtma ve su tutan yapılar", steel: "Çelik yapılar", rc: "Betonarme yapılar" },
      countries: { TR: "Türkiye", LY: "Libya", IQ: "Irak" },
      tender: "İhale dosyası",
      empty: "Bu filtrede proje yok.",
      noImage: "Görsel bekleniyor",
      back: "Tüm Projeler",
      eyebrow: "Statik Proje · İzmir",
      antetTitle: "Proje Künyesi",
      askSimilar: "Benzer Bir Proje İçin Yazın",
      relatedTitle: "Bu Alandaki Diğer Projeler",
      waSimilar: function (n) { return "Merhaba, sitenizde “" + n + "” projenizi inceledik. Benzer bir projemiz için görüşmek istiyoruz."; },
      facts: {
        place: "Yer", client: "İşveren", contractor: "Yüklenici", scope: "Kapsam", country: "Ülke", category: "Alan",
        capacity: "Kapasite", structures: "Yapı sayısı", plants: "Tesis sayısı", codes: "Yönetmelikler",
        delivered: "Teslim", bidder: "İhaleye giren firma", result: "Sonuç", area: "İnşaat alanı",
        steel: "Yapısal çelik", storeys: "Kat", system: "Taşıyıcı sistem"
      },
      pendingTitle: "Sizden Beklenen Bilgi",
      prev: "Önceki Proje", next: "Sonraki Proje",
      aboutTitle: "Hakkımızda",
      about: [
        "Vektörel Yapı Proje Mühendislik olarak İzmir'den statik proje ve mühendislik hizmeti veriyoruz. Betonarme ve çelik yapıların statik hesabını ve uygulama projesini hazırlıyor, ihale aşamasında yüklenicilere mühendislik desteği sağlıyoruz. En derin uzmanlık alanımız su tutan yapılar ve arıtma tesisleri.",
        "Türkiye'de belediye, organize sanayi bölgesi ve sanayi tesisi projelerinde; Libya ve Irak'ta yüklenici ve proses firmalarıyla tesis projelerinde çalışıyoruz. Su tutan yapılarda deprem etkisini, hidrodinamik basıncı ve çatlak kontrolünü Türk ve uluslararası yönetmeliklere göre hesaplıyoruz.",
        "Yapısal modeli, hesabı ve uygulama çizimlerini her aşamada birbiriyle karşılaştırarak kontrol ediyoruz. Geoteknik, mimari ve proses disiplinleriyle eşgüdüm içinde çalışıyor, teslim ettiğimiz projeyi uygulama süresince destekliyoruz."
      ],
      aboutPending: ["Kurucu fotoğrafı", "Mesleki deneyim yılı ve geçmiş", "Oda sicil numarası (yayınlamak isterseniz)"],
      founder: "Burak Uçar",
      founderRole: "İnşaat Yüksek Mühendisi · Kurucu, Proje Müellifi",
      company: "Vektörel Yapı Proje Mühendislik İnşaat Sanayi ve Ticaret Ltd. Şti.",
      companyLabel: "Unvan", locationLabel: "Konum", location: "Bayraklı, İzmir",
      contactTitle: "İletişim",
      contactLead: "Proje kapsamını, yerini ve takvimini yazın. Yazışmayı İngilizce de yürütebiliriz.",
      mail: "E-posta", phone: "Telefon", wa: "WhatsApp",
      waText: "Merhaba, bir projemiz için statik proje hizmetiniz hakkında görüşmek istiyoruz.",
      qTitle: "Teklif İsteyin",
      qLead: "Üç alanı doldurun; mesajınız WhatsApp'ta hazır olarak açılır. Bilgiler sitede saklanmaz.",
      qPlace: "Proje yeri", qPlaces: ["Türkiye", "Libya", "Irak", "Diğer"],
      qScope: "Yapı türü ve kapasite", qScopeHint: "Örn. atıksu arıtma tesisi, 10.000 m³/gün",
      qDate: "Tahmini başlangıç", qDateHint: "Örn. Mart 2027",
      qSend: "Teklif İste",
      qIntro: "Merhaba, aşağıdaki proje için statik proje teklifi almak istiyoruz.",
      statusDone: "Tamamlanan", statusOngoing: "Devam eden",
      footerNote: "Statik proje: betonarme ve çelik yapılar, su tutan yapılar ve arıtma tesisleri.",
      langLabel: "Dil",
      // KVKK aydınlatma metni (16.11.2026). Burak: matbu metinlere benzer bir metin yeterli, ayrıca hukukçu onayı aranmıyor.
      privacyLink: "Gizlilik ve KVKK",
      privacy: {
        title: "Gizlilik ve KVKK Aydınlatma Metni",
        lead: "6698 sayılı Kişisel Verilerin Korunması Kanunu'nun 10. maddesi uyarınca kişisel verilerinizin nasıl işlendiğini aşağıda açıklıyoruz.",
        sections: [
          ["Veri Sorumlusu", ["Vektörel Yapı Proje Mühendislik İnşaat Sanayi ve Ticaret Ltd. Şti., Bayraklı, İzmir. E-posta: info@vektorelyapi.com"]],
          ["Bu Sitede Toplanan Veriler", [
            "Bu sitede üyelik sistemi yoktur ve site, form aracılığıyla bilgi kaydetmez. İletişim sayfasındaki teklif formu, yazdıklarınızı yalnızca WhatsApp'ta hazır bir mesaj olarak açar; mesajı siz göndermedikçe bilgiler bize ulaşmaz ve sitede saklanmaz.",
            "Siteyi barındıran hizmet sağlayıcı, sitenin güvenli ve kesintisiz çalışması için IP adresi, tarayıcı bilgisi ve ziyaret zamanı gibi teknik kayıtları tutabilir. Site, başka bir firmanın sunucusundan yazı tipi, reklam veya takip kodu yüklemez."
          ]],
          ["Çerezler", ["Bu site çerez kullanmaz ve tarayıcınıza bilgi kaydetmez."]],
          ["Bize Yazdığınızda İşlenen Veriler", ["E-posta, WhatsApp veya telefonla bize ulaştığınızda adınız, firma adınız, iletişim bilgileriniz ve paylaştığınız proje bilgileri işlenir."]],
          ["İşleme Amaçları", [[
            "Talebinizi yanıtlamak ve teklif hazırlamak",
            "Proje hizmetini yürütmek ve proje süresince yazışmak",
            "Yasal saklama ve muhasebe yükümlülüklerini yerine getirmek"
          ]]],
          ["Hukuki Sebep", ["Kişisel verileriniz, Kanun'un 5. maddesinin 2. fıkrasındaki şu sebeplere dayanılarak işlenir: bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması (c), hukuki yükümlülüğümüzü yerine getirmemiz (ç) ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz (f)."]],
          ["Aktarım", [
            "Verileriniz satılmaz ve pazarlama amacıyla paylaşılmaz. Proje gerektirdiğinde projenin taraflarıyla (işveren, yüklenici, diğer disiplinler), yasal zorunluluk hâlinde yetkili kamu kurumlarıyla ve mali müşavirimizle paylaşılabilir.",
            "E-posta (Google Workspace), mesajlaşma (WhatsApp) ve site barındırma (GitHub) hizmetlerinin sunucuları yurt dışında bulunabilir. Bu hizmetler üzerinden yapılan yazışmalar ve teknik kayıtlar bu nedenle yurt dışına aktarılmış olur."
          ]],
          ["Saklama Süresi", ["Veriler, işleme amacının gerektirdiği süre ve ilgili mevzuattaki saklama süreleri boyunca saklanır; süre dolunca silinir veya anonim hâle getirilir."]],
          ["Haklarınız", [
            "Kanun'un 11. maddesi uyarınca şu haklara sahipsiniz:",
            [
              "Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse buna ilişkin bilgi talep etme",
              "İşlenme amacını ve verilerin amacına uygun kullanılıp kullanılmadığını öğrenme",
              "Verilerin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
              "Eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini isteme ve bu işlemlerin verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
              "Münhasıran otomatik sistemlerle analiz edilmesi sonucunda aleyhinize bir sonuç çıkmasına itiraz etme",
              "Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme"
            ]
          ]],
          ["Başvuru", ["Taleplerinizi info@vektorelyapi.com adresine e-posta ile veya yazılı olarak iletebilirsiniz. Başvurunuz, Kanun'un 13. maddesi uyarınca en geç otuz gün içinde ücretsiz olarak sonuçlandırılır."]]
        ],
        updated: "Son güncelleme: Kasım 2026",
        pending: ["Ziyaret ölçümü (analitik) eklenirse metne bir cümle eklenir."]
      }
    },
    en: {
      nav: { home: "Home", services: "Services", projects: "Projects", about: "About Us", contact: "Contact" },
      draft: "Preview, not published. Fields marked in yellow are waiting for your input.",
      metaDesc: "Structural design for concrete and steel structures. Specialists in water-retaining structures and treatment plants. Türkiye, Libya, Iraq.",
      heroTitle: "Structural Design For Concrete and Steel Structures",
      heroLead: "Specialists in water-retaining structures and treatment plants. Türkiye, Libya, Iraq.",
      seeProjects: "View projects",
      whatsapp: "Message on WhatsApp",
      heroCaption: "Suluq Wastewater Treatment Plant, Libya · 12,000 m³/day · 25 structures",
      stats: [["projects", "completed projects"], ["countries", "countries: Türkiye, Libya, Iraq"], ["water", "treatment and water-retaining projects"]],
      servicesTitle: "Services",
      servicesLead: "From residential and industrial buildings to treatment plants, we prepare structural calculations and construction drawings in three fields.",
      services: {
        water: {
          title: "Treatment Plants and Water-Retaining Structures",
          text: "We design the reinforced concrete structures of wastewater and drinking water treatment plants: basins, clarifiers, aeration units, tanks and plant buildings. At tender stage we prepare structural quantities and cost estimates for contractors.",
          list: ["Aeration and equalisation basins", "Circular clarifiers", "Clean water and process tanks", "Structural quantities and cost estimates for tenders"]
        },
        rc: {
          title: "Reinforced Concrete Buildings",
          text: "We prepare structural calculations and construction drawings for residential, public and industrial concrete buildings, foundations and retaining structures. We also carry out performance assessment and strengthening of existing buildings, and independent checking of other offices' designs.",
          list: ["Residential and commercial buildings", "Schools, healthcare and public buildings", "Industrial and production buildings", "Car parks and multi-level basements", "Concrete silos, bunkers and storage structures", "Equipment and machine foundations", "Raft, piled and strip foundations", "Retaining walls and basement walls", "Strengthening and performance assessment", "Structural design review and independent checking", "Quantity take-off and cost estimates"]
        },
        steel: {
          title: "Steel Structures",
          text: "We prepare structural calculations and construction drawings for steel warehouses, workshops, agricultural and industrial plant structures.",
          list: ["Warehouses and workshops", "Barns and agricultural buildings", "In-Plant corridors and platforms", "Pavilions and roof structures"]
        }
      },
      seeRelated: "Projects in this field",
      approachTitle: "Design Approach",
      approachLead: "Each action is designed to the code that governs it. We analyse with internationally recognised finite element software and apply Turkish or international codes depending on the project location and specification.",
      approachHead: ["Action Or Check", "Code"],
      codesLabel: "Codes",
      codesLead: "Turkish or international codes, depending on project location and specification",
      codesMore: "Details",
      approach: [
        { title: "Water-Retaining Structures", rows: [
          ["Reinforced concrete design", "TS 500 · TBDY 2018 / ACI 318-25 / ACI 350-06"],
          ["Crack control", "BS 8007 / ACI 350-06"],
          ["Earth pressure", "TBDY 2018 / ACI 350.3"],
          ["Hydrodynamic pressure", "ACI 350.3"],
          ["Seismic", "TBDY 2018 / ASCE 7"],
          ["Overturning and sliding", "TBDY 2018 / IBC"]
        ] },
        { title: "Reinforced Concrete Buildings", rows: [
          ["Seismic design", "TBDY 2018"],
          ["Loads", "TS 498"],
          ["Section design and detailing", "TS 500 · TBDY 2018"],
          ["Existing buildings: performance assessment and strengthening", "TBDY 2018 Chapter 15"]
        ] },
        { title: "Steel Structures", rows: [
          ["Seismic design", "TBDY 2018 / ASCE 7 · AISC 341"],
          ["Loads", "TS 498 / ASCE 7"],
          ["Member and connection design", "ÇYTHYE 2018 / AISC 360"]
        ] }
      ],
      featuredTitle: "Reference Projects",
      allProjects: "All projects",
      ctaTitle: "Need Structural Analysis Support For Your Project?",
      ctaText: "Send a short note on scope, location and schedule.",
      projectsTitle: "Projects",
      projectsLead: function (n, m) { return n + " completed projects" + (m ? " and " + m + " ongoing" : "") + ". Images come from structural models, renderings and site photos."; },
      filterAll: "All",
      cats: { water: "Treatment & Water-Retaining", steel: "Steel structures", rc: "Reinforced concrete" },
      countries: { TR: "Türkiye", LY: "Libya", IQ: "Iraq" },
      tender: "Tender design",
      empty: "No projects match this filter.",
      noImage: "Image to follow",
      back: "All Projects",
      eyebrow: "Structural Engineering · İzmir",
      antetTitle: "Project Data",
      askSimilar: "Ask About A Similar Project",
      relatedTitle: "More Projects In This Field",
      waSimilar: function (n) { return "Hello, we reviewed “" + n + "” on your website and would like to discuss a similar project with you."; },
      facts: {
        place: "Location", client: "Client", contractor: "Contractor", scope: "Scope", country: "Country", category: "Field",
        capacity: "Capacity", structures: "Structures", plants: "Plants", codes: "Codes",
        delivered: "Delivered", bidder: "Bidder", result: "Result", area: "Area",
        steel: "Structural steel", storeys: "Storeys", system: "Structural system"
      },
      pendingTitle: "Information Needed",
      prev: "Previous Project", next: "Next Project",
      aboutTitle: "About Us",
      about: [
        "We are Vektörel Yapı Proje Mühendislik, a structural design and engineering firm based in İzmir, Türkiye. We prepare structural calculations and construction drawings for concrete and steel structures and provide engineering support to contractors at tender stage. Our deepest specialism is water-retaining structures and treatment plants.",
        "In Türkiye we work on municipal, industrial-zone and industrial plant projects; in Libya and Iraq, on plant projects with contractors and process engineering firms. For water-retaining structures we design for seismic action, hydrodynamic pressure and crack control to the relevant Turkish and international codes.",
        "We check the structural model, the calculations and the construction drawings against one another at every stage. We coordinate with geotechnical, architectural and process disciplines and support our design through construction."
      ],
      aboutPending: ["Founder photo", "Years of practice and background", "Chamber registration number (if you want it shown)"],
      founder: "Burak Uçar",
      founderRole: "Civil Engineer (MSc) · Founder, Engineer of Record",
      company: "Vektörel Yapı Proje Mühendislik İnşaat Sanayi ve Ticaret Ltd. Şti.",
      companyLabel: "Company", locationLabel: "Location", location: "Bayraklı, İzmir, Türkiye",
      contactTitle: "Contact",
      contactLead: "Tell us the scope, location and schedule. We correspond in English and Turkish.",
      mail: "Email", phone: "Phone", wa: "WhatsApp",
      waText: "Hello, we would like to discuss your structural design services for one of our projects.",
      qTitle: "Request A Quote",
      qLead: "Fill in three fields and WhatsApp opens with your message ready to send. Nothing is stored on this site.",
      qPlace: "Project location", qPlaces: ["Türkiye", "Libya", "Iraq", "Other"],
      qScope: "Structure type and capacity", qScopeHint: "E.g. wastewater treatment plant, 10,000 m³/day",
      qDate: "Expected start", qDateHint: "E.g. March 2027",
      qSend: "Request Quote",
      qIntro: "Hello, we would like a structural design quote for the project below.",
      statusDone: "Completed", statusOngoing: "Ongoing",
      footerNote: "Structural design: concrete and steel structures, water-retaining structures and treatment plants.",
      langLabel: "Language",
      privacyLink: "Privacy",
      privacy: {
        title: "Privacy Notice",
        lead: "This notice explains how we process personal data under Article 10 of Turkish Law No. 6698 on the Protection of Personal Data (KVKK).",
        sections: [
          ["Data Controller", ["Vektörel Yapı Proje Mühendislik İnşaat Sanayi ve Ticaret Ltd. Şti., Bayraklı, İzmir, Türkiye. Email: info@vektorelyapi.com"]],
          ["Data Collected on This Site", [
            "This site has no user accounts and does not store anything you enter. The quote form on the contact page only opens WhatsApp with your message ready to send; nothing reaches us unless you send it, and nothing is stored on the site.",
            "Our hosting provider may keep technical logs such as IP address, browser details and time of visit to keep the site secure and available. The site loads no fonts, ads or tracking code from third-party servers."
          ]],
          ["Cookies", ["This site uses no cookies and stores nothing in your browser."]],
          ["When You Contact Us", ["When you write to us by email or WhatsApp, or call us, we process your name, company, contact details and the project information you share."]],
          ["Purposes", [[
            "Replying to your enquiry and preparing a quote",
            "Delivering the design service and corresponding during the project",
            "Meeting legal record-keeping and accounting obligations"
          ]]],
          ["Legal Basis", ["We process this data on the grounds set out in Article 5(2) of the Law: it is directly necessary to conclude or perform a contract (c), to meet our legal obligations (ç), and for our legitimate interests, provided your fundamental rights and freedoms are not harmed (f)."]],
          ["Disclosure", [
            "We do not sell your data or share it for marketing. Where a project requires it, we may share it with the project parties (owner, contractor, other disciplines), with public authorities where the law requires, and with our accountant.",
            "The servers of our email (Google Workspace), messaging (WhatsApp) and hosting (GitHub) providers may be located outside Türkiye, so correspondence and technical logs handled through them are transferred abroad."
          ]],
          ["Retention", ["We keep data for as long as the purpose requires and for the periods set by law, then delete or anonymise it."]],
          ["Your Rights", [
            "Under Article 11 of the Law you have the right to:",
            [
              "Learn whether your personal data is processed and, if so, request information about it",
              "Learn the purpose of processing and whether the data is used accordingly",
              "Know the third parties in Türkiye or abroad to whom the data is disclosed",
              "Ask for incomplete or inaccurate data to be corrected, for data to be erased or destroyed where the legal conditions are met, and for these actions to be notified to the third parties who received it",
              "Object to an outcome against you that results solely from automated analysis",
              "Claim compensation for damage caused by unlawful processing"
            ]
          ]],
          ["How to Apply", ["Send your request to info@vektorelyapi.com or in writing. Under Article 13 of the Law, we will respond free of charge within thirty days at the latest."]]
        ],
        updated: "Last updated: November 2026",
        pending: ["If analytics is added, one sentence is added."]
      }
    }
  };

  var P = window.PROJECTS || [];

  // Sıra: biten işler teslim tarihine göre yeniden eskiye; tarihi olmayanlar en sonda.
  // Devam edenler en önde değil, ilk ONGOING_AFTER biten işin arkasına girer (Burak'ın isteği).
  var ONGOING_AFTER = 6;
  (function sortProjects() {
    var AY = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık"];
    function key(p) {
      if (p.status === "ongoing") return Infinity;
      var d = null;
      p.facts.forEach(function (f) { if (f[0] === "delivered") d = f[1].split("|")[0]; });
      if (d) {
        var m = d.toLocaleLowerCase("tr").match(/^(\S+)\s+(\d{4})$/);
        if (m) return Number(m[2]) * 12 + Math.max(0, AY.indexOf(m[1]));
      }
      return p.year ? p.year * 12 : -Infinity;
    }
    var idx = P.map(function (p, i) { return { p: p, i: i, k: key(p) }; });
    idx.sort(function (a, b) { return a.k === b.k ? a.i - b.i : (b.k > a.k ? 1 : -1); });
    var sorted = idx.map(function (o) { return o.p; });
    var ongoing = sorted.filter(function (p) { return p.status === "ongoing"; });
    var done = sorted.filter(function (p) { return p.status !== "ongoing"; });
    P = done.slice(0, ONGOING_AFTER).concat(ongoing, done.slice(ONGOING_AFTER));
  })();
  // İki çalışma biçimi: önizleme (tek sayfa, #adres) ve yayın (her sayfa ayrı adreste, tools/build.js üretir).
  var SITE = window.SITE || {};
  var STATIC = !!SITE.static;
  var app = typeof document !== "undefined" ? document.getElementById("app") : null;
  var lang = "tr";
  // Yayın adresleri: /projeler/suluq-aat/, /en/projects/suluq-aat/ …
  var SEG = {
    tr: { services: "hizmetler", projects: "projeler", about: "hakkinda", contact: "iletisim", privacy: "gizlilik", water: "aritma", steel: "celik", rc: "betonarme" },
    en: { services: "services", projects: "projects", about: "about", contact: "contact", privacy: "privacy", water: "water", steel: "steel", rc: "concrete" }
  };
  function pathFor(view, l) {
    l = l || lang; var s = SEG[l], pre = l === "en" ? "/en" : "";
    if (!view || view === "home") return pre + "/";
    if (view.indexOf("projects-") === 0) return pre + "/" + s.projects + "/" + s[view.slice(9)] + "/";
    if (view.indexOf("p-") === 0) return pre + "/" + s.projects + "/" + view.slice(2) + "/";
    return pre + "/" + s[view] + "/";
  }
  var filter = { cat: "all", country: "all", status: "all" };

  function t() { return T[lang]; }
  // Başlık yazımı: her kelime büyük harfle başlar; "ve", "and", "of" küçük kalır (Burak'ın kararı, 16.11.2026).
  var SMALL = { tr: ["ve"], en: ["and", "of"] };
  function TC(s) { var loc = lang === "en" ? "en" : "tr"; return String(s == null ? "" : s).split(" ").map(function (w, i) { var lw = w.toLocaleLowerCase(loc); if (i > 0 && SMALL[loc].indexOf(lw) > -1) return lw; var k = w.search(/\p{L}/u); return k < 0 ? w : w.slice(0, k) + w.charAt(k).toLocaleUpperCase(loc) + w.slice(k + 1); }).join(" "); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function L(v) { if (v == null) return ""; if (typeof v === "object") return v[lang] || v.tr || ""; var s = String(v); if (s.indexOf("|") > -1) { var p = s.split("|"); return lang === "en" ? p[1] : p[0]; } return s; }
  function href(view) { if (STATIC) return pathFor(view); if (lang === "en") return "#" + (view ? "en-" + view : "en"); return "#" + (view || "home"); }
  function waLink(text) { return "https://wa.me/" + WA + "?text=" + encodeURIComponent(text || t().waText); }
  function img(p) { return (STATIC ? "/img/" : "img/") + p; }
  function factVal(p, key) { for (var i = 0; i < p.facts.length; i++) if (p.facts[i][0] === key) return L(p.facts[i][1]); return ""; }
  function keyFact(p) {
    var v = factVal(p, "capacity"); if (v) return v;
    v = factVal(p, "area"); if (v) return v;
    v = factVal(p, "structures"); if (v) return v + " " + (lang === "en" ? "structures" : "yapı");
    return L(p.scope) || "";
  }
  function year(p) { return p.year || ""; }

  function media(im, cls, eager) {
    return '<div class="media ' + (im.fit === "contain" ? "is-model " : "") + (cls || "") + '"><img ' + (eager ? "" : 'loading="lazy" ') + 'src="' + img(im.src) + '" alt="' + esc(L(im.alt)) + '"></div>';
  }
  function thumb(p, cls) {
    var im = p.images[0];
    if (!im) {
      // Görseli olmayan proje: boş ızgara yerine sade, tipografik bir alan.
      return '<div class="ph ' + (cls || "") + '" aria-hidden="true"><span class="ph-fact num">' + esc(keyFact(p)) + "</span></div>";
    }
    return media(im, cls);
  }
  function metaLine(p) {
    var parts = [t().countries[p.country]];
    var k = keyFact(p); if (k && k.length < 28) parts.push(k); else if (year(p)) parts.push(year(p));
    return parts.join(" · ");
  }

  function card(p) {
    var tags = "";
    if (p.status === "ongoing") tags += '<span class="tag">' + esc(t().statusOngoing) + "</span>";
    if (p.kind === "tender") tags += '<span class="tag">' + esc(t().tender) + "</span>";
    if (p.pending) tags += '<span class="tag pending-tag" title="' + esc(t().pendingTitle) + '">!</span>';
    return '<a class="pcard" href="' + href("p-" + p.slug) + '">' + thumb(p) +
      (tags ? '<div class="tags">' + tags + "</div>" : "") +
      '<div class="pcard-body"><span class="label num">' + esc(metaLine(p)) + "</span>" +
      "<h3>" + esc(TC(L(p.title))) + "</h3></div></a>";
  }

  function counts() {
    var c = { projects: P.filter(function (p) { return p.status === "done"; }).length, countries: 0, water: 0, fields: 3 };
    var seen = {};
    P.forEach(function (p) { seen[p.country] = 1; if (p.cat === "water") c.water++; });
    c.countries = Object.keys(seen).length;
    return c;
  }

  function sectionHead(title, lead, link) {
    return '<div class="sec-head"><div><h2>' + esc(TC(title)) + "</h2>" + (lead ? '<p class="lead">' + esc(lead) + "</p>" : "") + "</div>" + (link || "") + "</div>";
  }

  function servicesBlock(full) {
    var x = t();
    return '<div class="services">' + ["water", "rc", "steel"].map(function (k, n) {
      var s = x.services[k];
      var rel = P.filter(function (p) { return p.cat === k; });
      var simg = { water: ["suluq-1.jpg", ""], rc: ["k1-1.jpg", " is-model"], steel: ["baglanti-detayi.jpg", ""] }[k];
      var body = '<article class="service" id="svc-' + k + '"><div class="media svc-img' + simg[1] + '"><img loading="lazy" src="' + img(simg[0]) + '" alt=""></div>' +
        '<div class="svc-no">0' + (n + 1) + '<span class="num">' + rel.length + " " + (lang === "en" ? "projects" : "proje") + "</span></div>" +
        "<h3>" + esc(TC(s.title)) + "</h3><p>" + esc(s.text) + "</p>";
      if (full) {
        body += "<ul>" + s.list.map(function (li) { return "<li>" + esc(TC(li)) + "</li>"; }).join("") + "</ul>";
        body += '<div class="svc-projects">' + rel.slice(0, 6).map(function (p) { return '<a href="' + href("p-" + p.slug) + '">' + esc(TC(L(p.title))) + "</a>"; }).join("") + "</div>";
      }
      body += '<a class="arrow" href="' + href("projects-" + k) + '">' + esc(x.seeRelated) + "</a></article>";
      return body;
    }).join("") + "</div>";
  }

  function approachBlock() {
    var x = t();
    return '<section class="approach"><div class="wrap"><div class="sec-head"><div><h2>' + esc(TC(x.approachTitle)) + '</h2><p class="lead">' + esc(x.approachLead) + '</p></div></div><div class="approach-cols">' +
      x.approach.map(function (g) {
        return '<table class="tblock"><caption>' + esc(TC(g.title)) + '</caption><thead><tr><th>' + esc(x.approachHead[0]) + '</th><th>' + esc(x.approachHead[1]) + '</th></tr></thead><tbody>' +
          g.rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td class="code">' + esc(r[1]) + '</td></tr>'; }).join("") + '</tbody></table>';
      }).join("") + '</div></div></section>';
  }

  // Ana sayfa ve Hakkında için kısa yönetmelik özeti; tabloların tamamı Hizmetler sayfasında.
  function codesStrip() {
    var x = t();
    var codes = ["TS 500", "TBDY 2018", "ACI 318", "ACI 350", "ACI 350.3", "BS 8007", "ASCE 7", "AISC 360"];
    return '<section class="codes"><div class="wrap codes-inner"><div><span class="label">' + esc(x.codesLabel) + '</span><p>' + esc(x.codesLead) + '</p></div>' +
      '<p class="codes-list num">' + codes.map(function (c) { return "<b>" + esc(c) + "</b>"; }).join(" <span>·</span> ") + '</p>' +
      '<a class="arrow" href="' + href("services") + '">' + esc(x.codesMore) + "</a></div></section>";
  }

  function quoteForm() {
    var x = t();
    return '<form class="qform" id="qform" novalidate><div class="qform-head"><h2>' + esc(TC(x.qTitle)) + "</h2><p>" + esc(x.qLead) + "</p></div>" +
      '<label>' + esc(x.qPlace) + '<select name="place">' + x.qPlaces.map(function (o) { return "<option>" + esc(o) + "</option>"; }).join("") + "</select></label>" +
      '<label>' + esc(x.qScope) + '<input name="scope" type="text" autocomplete="off" placeholder="' + esc(x.qScopeHint) + '"></label>' +
      '<label>' + esc(x.qDate) + '<input name="date" type="text" autocomplete="off" placeholder="' + esc(x.qDateHint) + '"></label>' +
      '<button type="submit" class="btn btn-accent">' + esc(TC(x.qSend)) + "</button></form>";
  }

  function ctaBlock() {
    var x = t();
    return '<section class="cta"><div class="wrap cta-grid"><div><h2>' + esc(TC(x.ctaTitle)) + "</h2><p>" + esc(x.ctaText) + '</p></div><div class="cta-actions">' +
      '<a class="btn btn-dark" href="' + waLink() + '" target="_blank" rel="noopener">' + esc(TC(x.whatsapp)) + "</a>" +
      '<a class="btn btn-line-dark" href="mailto:' + MAIL + '">' + MAIL + "</a></div></div></section>";
  }

  function viewHome() {
    var x = t(), c = counts();
    var featured = P.filter(function (p) { return p.featured; }).sort(function (a, b) { return a.featured - b.featured; });
    return '<section class="hero"><img class="hero-img" src="' + img("suluq-7.jpg") + '" alt="' + esc(lang === "en" ? "Suluq wastewater treatment plant site from the air" : "Suluq atıksu arıtma tesisi şantiyesi, havadan") + '"><div class="scrim"></div>' +
      '<div class="wrap hero-body"><div class="eyebrow label">' + esc(x.eyebrow) + "</div>" +
      "<h1>" + esc(TC(x.heroTitle)) + '</h1><p class="lead">' + esc(x.heroLead) + "</p>" +
      '<div class="actions"><a class="btn btn-accent" href="' + href("projects") + '">' + esc(TC(x.seeProjects)) + '</a><a class="btn btn-ghost" href="' + waLink() + '" target="_blank" rel="noopener">' + esc(TC(x.whatsapp)) + "</a></div>" +
      '<p class="hero-cap">' + esc(x.heroCaption) + "</p></div></section>" +
      '<div class="wrap"><dl class="stats">' + x.stats.map(function (s) { return '<div><dt class="num">' + c[s[0]] + "</dt><dd>" + esc(s[1]) + "</dd></div>"; }).join("") + "</dl></div>" +
      '<section class="block"><div class="wrap">' + sectionHead(x.servicesTitle, x.servicesLead) + servicesBlock(false) + "</div></section>" +
      codesStrip() +
      '<section class="block"><div class="wrap">' + sectionHead(x.featuredTitle, "", '<a class="arrow" href="' + href("projects") + '">' + esc(TC(x.allProjects)) + "</a>") +
      '<div class="mosaic">' + featured.map(card).join("") + "</div></div></section>" +
      ctaBlock();
  }

  function viewServices() {
    var x = t();
    return '<section class="page-head"><div class="wrap"><h1>' + esc(TC(x.servicesTitle)) + '</h1><p class="lead">' + esc(x.servicesLead) + "</p></div></section>" +
      '<section class="block"><div class="wrap">' + servicesBlock(true) + "</div></section>" + approachBlock() + ctaBlock();
  }

  function viewProjects() {
    var x = t();
    var list = P.filter(function (p) { return (filter.cat === "all" || p.cat === filter.cat) && (filter.country === "all" || p.country === filter.country) && (filter.status === "all" || p.status === filter.status); });
    var chip = function (group, val, label) {
      var on = filter[group] === val;
      return '<button type="button" class="chip' + (on ? " on" : "") + '" data-f="' + group + '" data-v="' + val + '" aria-pressed="' + on + '">' + esc(TC(label)) + "</button>";
    };
    var catCount = function (k) { return P.filter(function (p) { return p.cat === k; }).length; };
    var emptyMsg = '<p class="empty">' + esc(x.empty) + "</p>";
    return '<section class="page-head"><div class="wrap"><h1>' + esc(TC(x.projectsTitle)) + '</h1><p class="lead">' + esc(x.projectsLead(P.filter(function (p) { return p.status === "done"; }).length, P.filter(function (p) { return p.status === "ongoing"; }).length)) + "</p>" +
      // Tek satır filtre (Burak'ın onayı): yalnız alan. Ülke ve durum kartın üstünde yazıyor.
      '<div class="filters"><div class="chips" role="group">' + chip("cat", "all", x.filterAll) +
      ["water", "steel", "rc"].map(function (k) { return chip("cat", k, x.cats[k] + " · " + catCount(k)); }).join("") + "</div></div></div></section>" +
      '<section class="block block-tight"><div class="wrap">' + (list.length ? '<div class="grid">' + list.map(card).join("") + "</div>" : emptyMsg) + "</div></section>";
  }

  function viewProject(slug) {
    var x = t();
    var i = -1; for (var k = 0; k < P.length; k++) if (P[k].slug === slug) i = k;
    if (i < 0) return viewProjects();
    var p = P[i], prev = P[(i - 1 + P.length) % P.length], next = P[(i + 1) % P.length];
    var title = TC(L(p.title));
    var rows = [];
    if (p.place) rows.push(["place", L(p.place)]);
    rows.push(["country", x.countries[p.country]]);
    if (p.client) rows.push(["client", L(p.client)]);
    if (p.scope) rows.push(["scope", L(p.scope)]);
    p.facts.forEach(function (f) { rows.push([f[0], L(f[1])]); });
    rows.push(["category", x.cats[p.cat] + (p.kind === "tender" ? " · " + x.tender : "")]);

    // büyük rakam şeridi: kısa, sayısal künye bilgileri
    var order = ["capacity", "area", "structures", "plants", "steel", "storeys", "codes", "delivered"];
    var big = [];
    order.forEach(function (key) { var v = factVal(p, key); if (v && v.length <= 16 && big.length < 4) big.push([key, v]); });
    // Tek bilgilik şerit zayıf duruyor; en az iki kısa bilgi yoksa gösterilmez.
    var strip = big.length >= 2 ? '<div class="wrap"><div class="p-facts">' + big.map(function (b) { return '<div><strong class="num">' + esc(b[1]) + "</strong><span>" + esc(x.facts[b[0]]) + "</span></div>"; }).join("") + "</div></div>" : "";

    var heroIm = null; for (var h = 0; h < p.images.length; h++) if (p.images[h].fit !== "contain") { heroIm = p.images[h]; break; }
    var tags = '<span class="tag tag-accent">' + esc(x.cats[p.cat]) + '</span><span class="tag num">' + esc(x.countries[p.country]) + (year(p) ? " · " + year(p) : "") + "</span>" +
      (p.kind === "tender" ? '<span class="tag">' + esc(x.tender) + "</span>" : "") + (p.status === "ongoing" ? '<span class="tag">' + esc(x.statusOngoing) + "</span>" : "");
    var hero = '<section class="p-hero' + (heroIm ? "" : " no-img") + '">' + (heroIm ? '<img class="hero-img" src="' + img(heroIm.src) + '" alt="' + esc(L(heroIm.alt)) + '"><div class="scrim"></div>' : "") +
      '<div class="wrap hero-body"><a class="back" href="' + href("projects") + '">' + esc(x.back) + '</a><div class="tags">' + tags + "</div><h1>" + esc(title) + "</h1></div></section>";

    var gallery;
    if (p.images.length) {
      var first = p.images[0];
      gallery = '<div class="gallery"><div class="g-main media' + (first.fit === "contain" ? " is-model" : "") + '"><img id="gmain" src="' + img(first.src) + '" alt="' + esc(L(first.alt)) + '"></div>' +
        // 8'den fazla görselde ilk 7 küçük resim görünür, sonuncusu "+N" düğmesiyle açılır.
        (p.images.length > 1 ? '<div class="g-thumbs' + (p.images.length > 8 ? " collapsed" : "") + '">' + p.images.map(function (im, n) {
          return '<button type="button" class="g-thumb media' + (im.fit === "contain" ? " is-model" : "") + (n === 0 ? " on" : "") + '" data-src="' + img(im.src) + '" data-alt="' + esc(L(im.alt)) + '" data-fit="' + (im.fit || "") + '" aria-label="' + esc(L(im.alt)) + '"><img loading="lazy" src="' + img(im.src) + '" alt=""></button>';
        }).join("") + (p.images.length > 8 ? '<button type="button" class="g-more num" aria-label="' + esc(lang === "en" ? "Show all images" : "Tüm görselleri göster") + '">+' + (p.images.length - 7) + "</button>" : "") + "</div>" : "") + "</div>";
    } else {
      gallery = '<div class="gallery">' + thumb(p, "g-main") + "</div>";
    }

    var pending = p.pending ? '<div class="pending"><strong>' + esc(x.pendingTitle) + "</strong><ul>" + p.pending.map(function (q) { return "<li>" + esc(L(q)) + "</li>"; }).join("") + "</ul></div>" : "";
    var related = P.filter(function (q) { return q.cat === p.cat && q.slug !== p.slug && q.images.length; }).slice(0, 3);

    return hero + strip +
      '<section class="block block-tight" style="padding-top:64px"><div class="wrap project-grid">' + gallery +
      '<aside><div class="antet-card"><span class="label">' + esc(x.antetTitle) + '</span><table class="antet"><tbody>' +
      rows.map(function (r) { return '<tr><th scope="row">' + esc(x.facts[r[0]] || r[0]) + "</th><td" + (r[0] === "capacity" || r[0] === "structures" || r[0] === "plants" || r[0] === "area" || r[0] === "steel" ? ' class="num"' : "") + ">" + esc(r[1]) + "</td></tr>"; }).join("") +
      '</tbody></table><a class="btn btn-accent" href="' + waLink(x.waSimilar(title)) + '" target="_blank" rel="noopener">' + esc(x.askSimilar) + "</a></div>" + pending + "</aside></div>" +
      '<div class="wrap"><div class="pn"><a href="' + href("p-" + prev.slug) + '"><span>' + esc(x.prev) + "</span>" + esc(TC(L(prev.title))) + '</a><a class="pn-next" href="' + href("p-" + next.slug) + '"><span>' + esc(x.next) + "</span>" + esc(TC(L(next.title))) + "</a></div></div></section>" +
      (related.length ? '<section class="block" style="padding-top:24px"><div class="wrap">' + sectionHead(x.relatedTitle, "", '<a class="arrow" href="' + href("projects-" + p.cat) + '">' + esc(TC(x.allProjects)) + "</a>") + '<div class="grid">' + related.map(card).join("") + "</div></div></section>" : "") +
      ctaBlock();
  }

  function viewAbout() {
    var x = t();
    return '<section class="page-head"><div class="wrap"><h1>' + esc(TC(x.aboutTitle)) + "</h1></div></section>" +
      '<section class="block block-tight"><div class="wrap about-grid"><div class="prose">' + x.about.map(function (s) { return "<p>" + esc(s) + "</p>"; }).join("") + "</div>" +
      '<aside><div class="person"><div class="person-ph" aria-hidden="true">BU</div><div><strong>' + esc(x.founder) + "</strong><span>" + esc(x.founderRole) + "</span></div></div>" +
      '<table class="tblock"><tbody><tr><th scope="row">' + esc(x.companyLabel) + "</th><td>" + esc(x.company) + '</td></tr><tr><th scope="row">' + esc(x.locationLabel) + "</th><td>" + esc(x.location) + "</td></tr></tbody></table>" +
      '<div class="pending"><strong>' + esc(x.pendingTitle) + "</strong><ul>" + x.aboutPending.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div></aside></div></section>" +
      codesStrip();
  }

  function viewContact() {
    var x = t();
    return '<section class="page-head"><div class="wrap"><h1>' + esc(TC(x.contactTitle)) + '</h1><p class="lead">' + esc(x.contactLead) + "</p></div></section>" +
      '<section class="block block-tight"><div class="wrap">' + quoteForm() + '<div class="contact-grid">' +
      '<a class="contact" href="' + waLink() + '" target="_blank" rel="noopener"><span class="c-l">' + esc(x.wa) + '</span><span class="c-v num">' + PHONE + "</span></a>" +
      '<a class="contact" href="tel:' + PHONE.replace(/\s/g, "") + '"><span class="c-l">' + esc(x.phone) + '</span><span class="c-v num">' + PHONE + "</span></a>" +
      '<a class="contact" href="mailto:' + MAIL + '"><span class="c-l">' + esc(x.mail) + '</span><span class="c-v">' + MAIL + "</span></a>" +
      SOCIAL.map(function (s) { return '<a class="contact" href="' + s[1] + '" target="_blank" rel="noopener"><span class="c-l" lang="en">' + s[3] + s[0] + '</span><span class="c-v">' + esc(s[2]) + "</span></a>"; }).join("") +
      '<div class="contact"><span class="c-l">' + esc(x.locationLabel) + '</span><span class="c-v">' + esc(x.location) + "</span></div>" +
      "</div></div></section>";
  }

  // Gizlilik ve KVKK: bölümler [başlık, [paragraf | [madde, …]]]
  function viewPrivacy() {
    var x = t(), p = x.privacy;
    return '<section class="page-head"><div class="wrap"><h1>' + esc(TC(p.title)) + '</h1><p class="lead">' + esc(p.lead) + "</p></div></section>" +
      '<section class="block block-tight"><div class="wrap"><div class="prose legal">' + p.sections.map(function (s) {
        return "<h2>" + esc(TC(s[0])) + "</h2>" + s[1].map(function (b) {
          return typeof b === "string" ? "<p>" + esc(b) + "</p>" : "<ul>" + b.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
        }).join("");
      }).join("") + '<p class="legal-date">' + esc(p.updated) + "</p>" +
      '<div class="pending"><strong>' + esc(x.pendingTitle) + "</strong><ul>" + p.pending.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></div>" +
      "</div></div></section>";
  }

  // Başlık çubuğu ve sayfa altı parçaları (önizlemede DOM'a yazılır, yayın sürümünde build.js sayfaya basar).
  function chromeParts(active) {
    var x = t();
    var nav = [["", x.nav.home], ["services", x.nav.services], ["projects", x.nav.projects], ["about", x.nav.about], ["contact", x.nav.contact]];
    return {
      draft: x.draft,
      nav: nav.map(function (n) { return '<a href="' + href(n[0]) + '" data-v="' + n[0] + '"' + (n[0] === active ? ' class="on"' : "") + ">" + esc(n[1]) + "</a>"; }).join(""),
      home: href(""),
      langLabel: x.langLabel,
      lang: ["tr", "en"].map(function (l) { return '<button type="button" data-lang="' + l + '" aria-pressed="' + (l === lang) + '">' + l.toUpperCase() + "</button>"; }).join(""),
      fnote: esc(x.footerNote),
      fcompany: esc(x.company),
      flinks: nav.map(function (n) { return '<a href="' + href(n[0]) + '">' + esc(n[1]) + "</a>"; }).join("") + '<a href="' + href("privacy") + '">' + esc(x.privacyLink) + '</a><a href="mailto:' + MAIL + '">' + MAIL + "</a>" +
        SOCIAL.map(function (s) { return '<a class="soc" href="' + s[1] + '" target="_blank" rel="noopener" aria-label="' + s[0] + '" title="' + s[0] + '">' + s[3] + "</a>"; }).join("")
    };
  }

  function renderChrome() {
    var c = chromeParts();
    document.documentElement.lang = lang;
    document.getElementById("draft").textContent = c.draft;
    document.getElementById("nav").innerHTML = c.nav;
    document.getElementById("home-link").setAttribute("href", c.home);
    var lt = document.getElementById("lang");
    lt.setAttribute("aria-label", c.langLabel);
    lt.innerHTML = c.lang;
    document.getElementById("f-note").innerHTML = c.fnote;
    document.getElementById("f-company").innerHTML = c.fcompany;
    document.getElementById("f-links").innerHTML = c.flinks;
  }

  function parse() {
    if (STATIC) { lang = SITE.lang === "en" ? "en" : "tr"; return SITE.view || ""; }
    var h = (location.hash || "").replace(/^#/, "");
    lang = "tr";
    if (h === "en" || h.indexOf("en-") === 0) { lang = "en"; h = h === "en" ? "" : h.slice(3); }
    if (h === "home") h = "";
    return h;
  }

  // Her sayfanın sekme başlığı ve açıklaması (yayın sürümünde build.js aynı metinleri sayfaya basar).
  function setMeta(v) {
    var m = metaFor(v);
    document.title = m.title;
    var d = document.querySelector('meta[name="description"]'); if (d) d.setAttribute("content", m.desc);
  }
  function metaFor(v) {
    var x = t(), base = "Vektörel Yapı", title, desc = x.metaDesc;
    if (v === "" || v === "home") title = base + " · " + TC(x.heroTitle);
    else if (v === "services") title = TC(x.servicesTitle) + " · " + base;
    else if (v === "projects" || v.indexOf("projects-") === 0) { var c = v.split("-")[1]; title = (c ? TC(x.cats[c]) + " · " : "") + TC(x.projectsTitle) + " · " + base; }
    else if (v.indexOf("p-") === 0) {
      var p = null; P.forEach(function (q) { if (q.slug === v.slice(2)) p = q; });
      if (p) { title = TC(L(p.title)) + " · " + base; desc = [TC(L(p.title)), L(p.place) || x.countries[p.country], keyFact(p)].filter(Boolean).join(" · "); }
      else title = base;
    }
    else if (v === "about") title = TC(x.aboutTitle) + " · " + base;
    else if (v === "contact") title = TC(x.contactTitle) + " · " + base;
    else if (v === "privacy") { title = TC(x.privacyLink) + " · " + base; desc = x.privacy.lead; }
    else title = base + " · " + TC(x.heroTitle);
    return { title: title, desc: desc };
  }

  function viewFor(v) {
    var html, active = v;
    if (v === "") html = viewHome();
    else if (v === "services") html = viewServices();
    else if (v === "projects" || v.indexOf("projects-") === 0) {
      var c = v.split("-")[1];
      filter.cat = c || "all";
      filter.country = "all";
      filter.status = "all";
      html = viewProjects(); active = "projects";
    }
    else if (v.indexOf("p-") === 0) { html = viewProject(v.slice(2)); active = "projects"; }
    else if (v === "about") html = viewAbout();
    else if (v === "contact") html = viewContact();
    else if (v === "privacy") html = viewPrivacy();
    else html = viewHome();
    return { html: html, active: active };
  }

  // Yayın sürümü üreticisi (tools/build.js) için: DOM'a dokunmadan sayfa parçalarını verir.
  if (SITE.prerender) {
    SITE.api = {
      P: P, T: T, pathFor: pathFor, TC: TC, L: L, keyFact: keyFact, img: img, MAIL: MAIL, PHONE: PHONE,
      page: function (v, l) {
        lang = l;
        var r = viewFor(v);
        return { html: r.html, meta: metaFor(v), chrome: chromeParts(r.active), hasHero: /class="hero"|class="p-hero"/.test(r.html) };
      }
    };
    return;
  }

  function render() {
    var v = parse();
    renderChrome();
    var r = viewFor(v);
    app.innerHTML = r.html;
    setMeta(v);
    document.body.classList.toggle("has-hero", !!app.querySelector(".hero, .p-hero:not(.no-img)"));
    solid();
    Array.prototype.forEach.call(document.querySelectorAll("#nav a"), function (a) { a.classList.toggle("on", a.getAttribute("data-v") === r.active); });
    document.body.classList.remove("menu-open");
    document.getElementById("menu-btn").setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (b) {
      var v = parse(), want = b.getAttribute("data-lang");
      if (STATIC) { location.href = pathFor(v, want); return; }
      var h = (want === "en" ? "en-" : "") + v;
      location.hash = h || "home";
      return;
    }
    var f = e.target.closest("[data-f]");
    if (f) {
      filter[f.getAttribute("data-f")] = f.getAttribute("data-v");
      app.innerHTML = viewProjects();
      return;
    }
    var more = e.target.closest(".g-more");
    if (more) { more.parentNode.classList.remove("collapsed"); more.remove(); return; }
    var g = e.target.closest(".g-thumb");
    if (g) {
      var main = document.getElementById("gmain");
      main.src = g.getAttribute("data-src"); main.alt = g.getAttribute("data-alt");
      main.parentNode.classList.toggle("is-model", g.getAttribute("data-fit") === "contain");
      Array.prototype.forEach.call(document.querySelectorAll(".g-thumb"), function (n) { n.classList.toggle("on", n === g); });
      return;
    }
    if (e.target.closest("#menu-btn")) {
      var open = document.body.classList.toggle("menu-open");
      document.getElementById("menu-btn").setAttribute("aria-expanded", String(open));
    }
  });

  // Teklif formu: bilgileri WhatsApp'ta hazır mesaj olarak açar, hiçbir yere kaydetmez.
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (f.id !== "qform") return;
    e.preventDefault();
    var x = t();
    var lines = [x.qIntro, x.qPlace + ": " + f.place.value];
    if (f.scope.value.trim()) lines.push(x.qScope + ": " + f.scope.value.trim());
    if (f.date.value.trim()) lines.push(x.qDate + ": " + f.date.value.trim());
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });

  function solid() { document.querySelector(".top").classList.toggle("solid", window.scrollY > 40 || !document.body.classList.contains("has-hero")); }
  window.addEventListener("scroll", solid, { passive: true });
  if (!STATIC) window.addEventListener("hashchange", function () { render(); window.scrollTo(0, 0); });
  render();
})();
