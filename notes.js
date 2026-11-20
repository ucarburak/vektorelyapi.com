// Yayın kopyası: tools/build.js üretir, taslaklar çıkarılmıştır.
window.NOTES = [
 {
  "slug": "su-tutan-yapilarda-hidrodinamik-etkiler",
  "date": "2026-11-20",
  "cat": "water",
  "image": {
   "src": "suluq-tank-2.jpg",
   "fit": "contain",
   "alt": {
    "tr": "Suluq Temiz Su Deposu hesap modeli",
    "en": "Suluq Clean Water Reservoir analysis model"
   }
  },
  "related": "suluq-temiz-su-tanki",
  "title": {
   "tr": "Su Tutan Yapılarda Hidrodinamik Etkiler",
   "en": "Hydrodynamic Effects in Water-Retaining Structures"
  },
  "summary": {
   "tr": "Deprem sırasında hazne içindeki suyun yapıya aktardığı ek kuvvetlere genel bir bakış.",
   "en": "A general look at the additional forces the contained water transfers to a tank during an earthquake."
  },
  "body": {
   "tr": [
    "Su depoları, arıtma havuzları ve hazneler yalnızca içindeki suyun ağırlığını ve hidrostatik basıncını taşıyan yapılar değildir. Deprem sırasında hazne içindeki su da harekete geçer ve yapıya ek kuvvetler aktarır. Bu etkiler hidrodinamik etkiler olarak adlandırılır.",
    "## İki Bileşen: İtkisel ve Çalkalanma Etkileri",
    "Suyun davranışı genel olarak iki bileşenle ele alınır. Suyun bir kısmı hazneyle birlikte hareket eder ve duvarlara ani bir basınç uygular; bu itkisel (impulsive) etkidir. Serbest yüzeye yakın kısım ise daha uzun periyotla çalkalanır; bu da çalkalanma (konvektif) etkisidir.",
    "Çalkalanma, duvarlara ve temele gelen kuvvetlerin yanı sıra su yüzeyinde dalgalanma oluşturur. Bu dalgalanma, haznede bırakılacak hava payını ve varsa örtü tasarımını ilgilendirir.",
    "## Etkiyi Belirleyen Etkenler",
    "Hidrodinamik etkilerin büyüklüğü haznenin boyutlarına ve biçimine, su derinliğine, zemin koşullarına ve yapının bulunduğu bölgenin deprem tehlikesine bağlıdır. ACI 350.3 gibi su tutan yapılara özgü yönetmelikler, bu etkilerin tasarımda nasıl hesaba katılacağını tarif eder.",
    "Vektörel Yapı olarak su tutan yapıların statik projelerinde hidrodinamik etkileri, projenin yerine ve şartnamesine göre ilgili yönetmeliklerle birlikte değerlendiriyoruz. Görseldeki model, Libya'daki Suluq Temiz Su Deposu'na (20.000 m³) aittir."
   ],
   "en": [
    "Water tanks, treatment basins and reservoirs carry more than the weight and hydrostatic pressure of the water they hold. During an earthquake, the contained water also moves and transfers additional forces to the structure. These are known as hydrodynamic effects.",
    "## Two Components: Impulsive and Convective",
    "The behaviour of the water is generally considered in two parts. Part of the water moves together with the tank and exerts a sudden pressure on the walls: the impulsive component. The water near the free surface sloshes with a longer period: the convective component.",
    "Sloshing adds forces on the walls and foundation, and it also produces waves at the surface. These waves affect the freeboard provided in the tank and, where there is one, the design of the roof.",
    "## What Governs the Effects",
    "The magnitude of hydrodynamic effects depends on the tank's dimensions and shape, the water depth, the ground conditions and the seismic hazard of the site. Codes specific to water-retaining structures, such as ACI 350.3, set out how these effects are taken into account in design.",
    "At Vektörel Yapı, we consider hydrodynamic effects in the structural design of water-retaining structures using the codes that apply to each project's location and specification. The model shown is from the Suluq Clean Water Reservoir (20,000 m³) in Libya."
   ]
  }
 },
 {
  "slug": "tbdy-2018-statik-projeye-nasil-yansir",
  "date": "2026-11-20",
  "cat": "rc",
  "image": {
   "src": "sakran-2.jpg",
   "fit": "contain",
   "alt": {
    "tr": "Aliağa Şakran konut projesi betonarme hesap modeli",
    "en": "Aliağa Şakran residential building, reinforced concrete analysis model"
   }
  },
  "related": "aliaga-sakran-konut",
  "title": {
   "tr": "Deprem Yönetmeliği (TBDY 2018) Statik Projeye Nasıl Yansır?",
   "en": "How the Turkish Seismic Code (TBDY 2018) Shapes a Structural Design"
  },
  "summary": {
   "tr": "Türkiye Bina Deprem Yönetmeliği'nin statik projede hangi kararları etkilediğine genel bir bakış.",
   "en": "A general look at the design decisions influenced by the Turkish Building Earthquake Code."
  },
  "body": {
   "tr": [
    "Türkiye Bina Deprem Yönetmeliği (TBDY 2018), 1 Ocak 2019'dan bu yana yeni binaların deprem hesabında ve mevcut binaların değerlendirilmesinde uygulanan temel yönetmeliktir. Betonarme tasarım kuralları için TS 500 ile birlikte kullanılır. Bu notta yönetmeliğin statik projeye nasıl yansıdığını genel hatlarıyla ele alıyoruz.",
    "## Konuma Özgü Deprem Tehlikesi",
    "TBDY 2018 ile birlikte deprem tehlikesi il ya da bölge bazında değil, yapının bulunduğu konuma göre tanımlanmaktadır. Tasarımda kullanılan deprem etkileri, AFAD'ın Türkiye Deprem Tehlike Haritası'ndan yapının koordinatlarına göre elde edilir. Bu nedenle birbirine yakın yapılar için de farklı tasarım değerleri söz konusu olabilir.",
    "## Zemin Koşulları",
    "Yerel zemin sınıfı, yapıya etkiyen deprem kuvvetlerinin büyüklüğünü doğrudan etkiler. Bu nedenle zemin etüdü raporu, statik projenin başlangıç verilerinden biridir. Zemin özellikleri temel sisteminin seçiminde de belirleyici rol oynar.",
    "## Bina Sınıflandırması ve Taşıyıcı Sistem",
    "Yönetmelik binaları kullanım amacına, yüksekliğine ve bulundukları yerin deprem tehlikesine göre sınıflandırır. Bu sınıflar; uygulanacak hesap yöntemini, taşıyıcı sistemden beklenen süneklik düzeyini ve kullanılabilecek sistem türlerini belirler. Çerçeve, perde ya da ikisinin birlikte kullanıldığı taşıyıcı sistemlerden hangisinin seçileceği bu çerçevede değerlendirilir.",
    "## Projeye Yansıması",
    "Bu kararlar sonunda kolon ve perde boyutlarına, donatı miktarlarına ve donatı detaylarına yansır. Yönetmelik ayrıca yapının deprem altındaki yer değiştirmelerine ve planda ya da düşeyde düzensizliklere ilişkin kontroller tanımlar. Mimari tasarımın erken aşamada statik projeyle birlikte ele alınması, bu kontrollerin daha dengeli bir taşıyıcı sistemle sağlanmasına yardımcı olur.",
    "Mevcut binalar için ise yönetmeliğin 15. bölümü, deprem performansının değerlendirilmesini ve gerektiğinde güçlendirme tasarımını kapsar.",
    "Vektörel Yapı olarak betonarme yapıların statik projelerini TBDY 2018 ve TS 500'e göre hazırlıyor, mevcut yapılarda performans analizi ve güçlendirme projeleri yürütüyoruz. Görseldeki model, Aliağa'daki Şakran konut projesine aittir."
   ],
   "en": [
    "The Turkish Building Earthquake Code (TBDY 2018) has been the main code for the seismic design of new buildings and the assessment of existing ones in Türkiye since 1 January 2019. It is used together with TS 500 for reinforced concrete design rules. This note gives a general outline of how the code shapes a structural design.",
    "## Site-Specific Seismic Hazard",
    "Under TBDY 2018, seismic hazard is defined for the building's own location rather than by province or zone. The seismic actions used in design are obtained from the AFAD Turkish Earthquake Hazard Map using the coordinates of the site. Buildings close to each other may therefore have different design values.",
    "## Ground Conditions",
    "The local soil class directly affects the magnitude of the earthquake forces acting on the structure. The geotechnical report is therefore one of the starting inputs of the structural design, and the soil properties also play a decisive role in the choice of foundation system.",
    "## Building Classification and Structural System",
    "The code classifies buildings by occupancy, height and the seismic hazard of the site. These classes determine the analysis method, the expected ductility level of the structural system and the system types that may be used. The choice between frames, shear walls or a combination of both is made within this framework.",
    "## Effect on the Design",
    "These decisions are ultimately reflected in the sizes of columns and walls, the amount of reinforcement and its detailing. The code also sets out checks on lateral displacements under earthquake loading and on irregularities in plan and elevation. Considering the architectural design together with the structural design at an early stage helps to meet these checks with a more balanced structural system.",
    "For existing buildings, Chapter 15 of the code covers the assessment of seismic performance and, where needed, the design of strengthening.",
    "At Vektörel Yapı, we prepare the structural design of reinforced concrete buildings to TBDY 2018 and TS 500, and carry out performance assessment and strengthening projects for existing buildings. The model shown is from the Şakran residential building in Aliağa."
   ]
  }
 },
 {
  "slug": "celik-depo-ve-atolye-yapilarinda-tasiyici-sistem",
  "date": "2026-11-20",
  "cat": "steel",
  "image": {
   "src": "novart-2.jpg",
   "fit": "contain",
   "alt": {
    "tr": "Novart atölye yapısı çelik hesap modeli",
    "en": "Novart workshop building steel analysis model"
   }
  },
  "related": "novart-atolye",
  "title": {
   "tr": "Çelik Depo ve Atölye Yapılarında Taşıyıcı Sistem Seçenekleri",
   "en": "Structural System Options for Steel Warehouses and Workshops"
  },
  "summary": {
   "tr": "Depo, atölye ve benzeri tek katlı çelik yapılarda taşıyıcı sistemi belirleyen etkenlere genel bir bakış.",
   "en": "A general look at what determines the structural system of single-storey steel buildings such as warehouses and workshops."
  },
  "body": {
   "tr": [
    "Depo, atölye, üretim binası ve tarım yapıları gibi tek katlı çelik yapılar, geniş açıklıkları kısa sürede geçebildiği için sıkça tercih edilir. Bu yapılarda taşıyıcı sistemin seçimi; yapının maliyetini, montaj süresini ve ileride yapılabilecek değişikliklere uygunluğunu doğrudan etkiler.",
    "## Yaygın Sistemler",
    "En yaygın çözüm, kolonlar ve çatı kirişlerinden oluşan çerçeve sistemlerdir. Çatı kirişleri dolu gövdeli profillerle ya da daha büyük açıklıklarda kafes kirişlerle oluşturulabilir. Yapının yatay yüklere karşı kararlılığı, çerçevelerin kendisiyle ya da çatı ve cephe düzleminde yerleştirilen çapraz elemanlarla sağlanır. Aşıklar ve cephe kuşakları ise kaplama yüklerini ana taşıyıcı sisteme aktarır.",
    "## Seçimi Belirleyen Etkenler",
    "Taşıyıcı sistemi belirleyen başlıca etkenler; açıklık ve kolon aralıkları, köprülü vinç bulunup bulunmadığı, çatı ve cephe kaplamasının türü, kar ve rüzgâr yükleri, yapının bulunduğu yerin deprem tehlikesi ve ileride genişleme ihtiyacıdır. Örneğin köprülü vinç bulunan bir atölyede kolonlar ve vinç yolu kirişleri, vinç yüklerine göre ayrıca tasarlanır.",
    "## Temeller ve Bağlantılar",
    "Kolon ayakları ve temel bağlantıları, taşıyıcı sistemde yapılan kabule uygun şekilde detaylandırılmalıdır. Kolon ayaklarının mafsallı ya da ankastre kabul edilmesi, hem çelik elemanların hem de temellerin boyutlarını etkiler.",
    "Tasarımda projenin yerine ve şartnamesine göre yükler için TS 498 ya da ASCE 7, çelik eleman ve birleşimler için ÇYTHYE 2018 ya da AISC 360, deprem etkileri için TBDY 2018 ya da ASCE 7 gibi yönetmelikler kullanılır.",
    "Vektörel Yapı olarak depo, atölye, tarım ve endüstriyel tesis yapılarında çelik konstrüksiyonun statik hesabını ve uygulama projesini hazırlıyoruz. Görseldeki model, Teknopark İstanbul'daki Novart atölye yapısına aittir."
   ],
   "en": [
    "Single-storey steel buildings such as warehouses, workshops, production halls and agricultural buildings are often preferred because they can span large distances and be erected quickly. In these buildings, the choice of structural system directly affects cost, erection time and how easily the building can be modified later.",
    "## Common Systems",
    "The most common solution is a frame system made up of columns and roof beams. Roof beams may be solid-web sections or, for larger spans, trusses. Stability against lateral loads is provided either by the frames themselves or by bracing placed in the roof and wall planes. Purlins and side rails carry the cladding loads to the main structure.",
    "## What Drives the Choice",
    "The main factors are the span and column spacing, whether there is an overhead crane, the type of roof and wall cladding, snow and wind loads, the seismic hazard of the site and any need for future extension. In a workshop with an overhead crane, for example, the columns and crane runway beams are designed separately for the crane loads.",
    "## Foundations and Connections",
    "Column bases and their connections to the foundations should be detailed in line with the assumptions made for the structural system. Whether the column bases are taken as pinned or fixed affects the sizes of both the steel members and the foundations.",
    "Depending on the project location and specification, design follows codes such as TS 498 or ASCE 7 for loads, ÇYTHYE 2018 or AISC 360 for steel members and connections, and TBDY 2018 or ASCE 7 for seismic actions.",
    "At Vektörel Yapı, we prepare structural calculations and construction drawings for steel structures in warehouses, workshops, agricultural and industrial buildings. The model shown is from the Novart workshop building at Teknopark İstanbul."
   ]
  }
 }
];
