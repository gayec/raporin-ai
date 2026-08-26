import { Heading, LegalPage } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Kullanım Koşulları ve Üyelik Sözleşmesi",
  description:
    "RaporinAI web sitesi ve uygulaması kullanım koşulları ile üyelik sözleşmesinin tam metni. Fikri mülkiyet, tarafların hak ve yükümlülükleri, gizlilik, fesih ve uyuşmazlık çözümü hükümleri.",
  alternates: {
    canonical: "https://raporin.com/kvkk/kullanim-kosullari-ve-uyelik-sozlesmesi",
  },
};

const SECTIONS = [
  { id: "kullanim-kosullari", label: "Web Sitesi & Uygulama (App) Kullanım Koşulları" },
  { id: "uyelik-sozlesmesi", label: "Üyelik Sözleşmesi" },
];

function PartTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 mt-14 first:mt-0 border-t border-teal-100 pt-10 first:border-0 first:pt-0 text-2xl md:text-3xl font-extrabold text-gray-900"
    >
      {children}
    </h2>
  );
}

export default function KullanimKosullariVeUyelikSozlesmesiPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları ve Üyelik Sözleşmesi"
      subtitle="Web Sitesi & Uygulama (App) Kullanım Koşulları ile Üyelik Sözleşmesi'nin tam metni bu sayfada birlikte yer almaktadır."
    >
      <nav aria-label="Sayfa içi gezinme" className="rounded-2xl border border-teal-100 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-gray-900">Bu sayfada</p>
        <ol className="mt-3 space-y-2 text-sm list-decimal pl-5 marker:text-[#0F918B] marker:font-semibold">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="text-[#0F918B] hover:underline">
                {section.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ---------------- BÖLÜM 1: KULLANIM KOŞULLARI ---------------- */}
      <PartTitle id="kullanim-kosullari">
        Web Sitesi &amp; Uygulama (App) Kullanım Koşulları
      </PartTitle>

      <p>
        <a href="https://www.raporin.com/" className="text-[#0F918B] hover:underline break-all">
          https://www.raporin.com/
        </a>{" "}
        sitesine (Site) ve/veya RaporinAI uygulamasına (Uygulama) erişiminizden veya
        siteyi/uygulamayı kullanımınızdan önce lütfen bu şartları dikkatle okuyunuz.
      </p>
      <p>
        Site ve Uygulama, ATATÜRK MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B
        İÇ KAPI NO: 376 ATAŞEHİR / İSTANBUL adresinde bulunan 0489125575800001 Mersis numaralı
        KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM ŞİRKETİ’ne (RaporinAI) aittir ve RaporinAI
        tarafından işletilir.
      </p>
      <p>
        Erişim sağlamak veya kullanmakla, aşağıda belirtilen şartlar ve hükümlerle bağlı olmayı
        kabul etmektesiniz. Eğer bu şartlar ve hükümlerle bağlı olmak istemezseniz, siteye
        erişmeyebilir veya siteyi kullanmayabilirsiniz ve böyle bir kullanıma başladıysanız
        kullanımı derhal durdurmalısınız.
      </p>
      <p>
        RaporinAI, bu şartlarda her zaman değişiklik yapabilir ve bu değişiklikler değiştirilmiş
        metnin siteye/uygulamaya konulmasıyla derhal yürürlük kazanır. Siz bu değişikliklerden
        haberdar olmak amacıyla periyodik olarak işbu metni gözden geçirmeyi kabul etmektesiniz ve
        siteye/uygulamaya devam eden erişiminiz veya devam eden siteyi kullanımınız değiştirilmiş
        sözleşmeyi kesin olarak kabul ettiğiniz anlamına gelecektir.
      </p>

      <Heading>1. Ticari Markalar, Fikri Mülkiyet, Telif Hakları</Heading>
      <p>
        1.1. Site ve Uygulama’nın tüm hakları saklıdır. Bu web sayfalarında yayımlanan içerikler
        (örneğin yazılım, logolar, v.s. gibi ticari markalar, her türlü bilgi, resim ve grafikler
        vb.), ulusal ve uluslararası kanunlar ve uluslararası sözleşmelerle korunmaktadır.
      </p>
      <p>
        1.2. Kullanıcı websitesi dahilinde bulunan ürünleri, bilgileri, her türlü veritabanını,
        resimleri, metinleri, ikonları, görsel ve işitsel vesair imgeleri, video klipleri,
        dosyaları, web sitesi, software-code’ların html kodu ve diğer kodlar vs. ile, tasarımları,
        katalogları ve listeleri kısmen ya da tamamen, scraping ve/veya başkaca herhangi bir
        yöntemle çoğaltmayacağı, kopyalamayacağı, dağıtmayacağı, işlemeyeceğini, online ya da
        diğer bir yöntem kullanılmak suretiyle göndermeyeceğini, gerek bu eylemleri ile gerekse de
        başka yollarla, RaporinAI ile doğrudan ve/veya dolaylı olarak haksız rekabete
        girmeyeceğini kabul ve taahhüt etmektedir.
      </p>
      <p>
        1.3. Aksi açıkça belirtilmediği hallerde Site ve Uygulama içeriğinde yer alan hiçbir unsur
        kullanıcılara herhangi bir patent, marka, telif hakkı ya da herhangi bir diğer mülkiyet
        hakkı çerçevesinde herhangi bir lisans ya da hakkın ima yolu ile devri ya da bu
        doğrultuda icazet yahut herhangi bir lisans ya da hak sağlamamaktadır. Yukarıda belirtilen
        ancak bunlarla sınırlı olmayan, herhangi bir şekilde fikri mülkiyet hakkı sahibinin izni
        olmadan bu hakka konu unsurların kullanımı hak ihlali olup, bu tür fikri mülkiyet
        haklarının ihlali hem hukuki hem cezai yaptırımlara tabidir. RaporinAI, Site ve Uygulama
        içeriğinde yer alan fikri mülkiyet haklarını korumak maksadıyla her türlü yasal ve cezai
        yola başvurabilir.
      </p>
      <p>
        1.4. Sitede yer alan her türlü bilgi ve materyal; Site’nin tamamı ya da bir bölümü revize
        edilerek, ekleme yapılarak ya da bir kısmı değiştirilerek farklı bir biçimde kullanılamaz.
      </p>
      <p>
        1.5. Site’den alınabilecek her türlü bilgi (yazılı ya da görsel) rahatlıkla görülebilecek
        büyüklükte “© 2026, RaporinAI Tüm Hakları Saklıdır” ifadesi eklenmeden kullanılamaz.
      </p>
      <p>
        1.6. Sitede yer alan ifadeler içerisindeki 3. kişi ya da kurumlara ait tescilli marka,
        hizmet, logo vb. uyarılar ve ayraçlar, siteden alıntı yapıldığında kaldırılamaz.
      </p>

      <Heading>2. Kullanım Koşullarının Değiştirilmesi</Heading>
      <p>
        RaporinAI’ın herhangi bir sebep göstermeksizin ve önce veya sonra ihbarda bulunmaksızın bu
        kullanım koşullarını değiştirme, ilavede bulunma veya yenileme hakkı saklıdır. Bu
        sayfalarda, mevcut ve güncellenmiş versiyon bulunmaktadır. Bu web sayfalarının
        kullanılması ile kullanıcı, mevcut versiyon ile sınırlandırılmış olduğunu kabul eder.
      </p>

      <Heading>3. Üçüncü Parti Sitelere Verilen Bağlantılara (Linklere) Dair</Heading>
      <p>
        RaporinAI, sitesinde direkt ya da dolaylı yoldan diğer sitelere bağlantı (link)
        verilebilir. Bu bağlantıların amacı bilgi vermek ya da reklamdır. Kullanıcı, site
        üzerindeki linklerin kaynakları üzerinde RaporinAI’ın hiçbir kontrolü olmadığı için,
        RaporinAI’ın linklerinin gösterdiği web sitelerinin veya kaynakların ulaşabilirliğinden
        sorumlu olmadığını ve bu web siteleri ve kaynaklar üzerinde bulunan veya bunlardan elde
        edilebilen hiçbir içerik, reklam, ürün veya diğer materyalden sorumlu olmadığını kabul
        eder. Kullanıcı ayrıca RaporinAI’ın böyle herhangi bir web sitesi veya kaynak üzerinde
        veya bunlar yoluyla elde edilebilen herhangi bir içerik, mal veya hizmete güvenerek veya
        bunlar tarafından veya bunların kullanımı ile bağlantılı olarak neden olunan ya da neden
        olunduğu iddia edilen herhangi bir zarar veya kayıptan doğrudan veya dolaylı olarak
        sorumlu olmadığını kabul eder.
      </p>

      <Heading>4. Kullanıcı Bilgileri Hakkında</Heading>
      <p>
        RaporinAI sitesinde; kullanıcıların dolduracakları bölümler yer almaktadır. Bu bölümlerin
        doldurulması esnasında kullanıcıların küfür, tehdit, tahrik, rahatsız edici sözleri ve
        kanuna aykırı içerikler kullanma ve başkalarının kanuni ve kişisel haklarına zarar verme
        hakları yoktur. Ayrıca bu formların kopyalanarak kullanılmaları veya yeniden üretilmek
        amacıyla örnek olarak kullanılmaları yasaktır. Kullanıcılarının bu sayfaları kullanarak
        bir ürün ya da hizmet satma, ticari amaçlı reklam yapma ve benzeri ticari davranışlarda
        bulunma hakları yoktur.
      </p>
      <p>
        Site ve Uygulama’nın kullanımı ile kişisel bilgilerin işlenmesi, kaydedilmesi ve korunması
        hakkında bilgi edinmek için Site’de yer alan ilgili dokümanları (Aydınlatma Metinleri,
        Sözleşme, Politika ve diğer formlar) okuyunuz.
      </p>

      <Heading>5. Hak ve Sorumluluklar</Heading>
      <p>
        Site ve Uygulama’da bulunan içerikler sürekli kontrol edilmekte ve güncellenmektedir.
        Ancak, RaporinAI Site ve Uygulama içerisinde yer alan hatalardan sorumlu tutulamaz,
        sayfalarında her türlü değişiklik ve yeniliği istediği anda yapabilir. Bu değişikliklerden
        dolayı doğabilecek hiçbir bilgi hatasından veya zarardan dolayı RaporinAI’a sorumluluk
        yüklenemez.
      </p>
      <p>
        Site ve Uygulama’da yer alan bilgiler tamamen genel bilgi niteliğinde olup, bu bilgilerin
        doğruluğu garanti edilmemektedir. Site ve Uygulama’dan edinilen bilgilere güvenden doğacak
        tüm sorumluluk tarafınıza aittir. RaporinAI, üçüncü kişiler tarafından sağlanan bilgilerin
        doğruluğuna ilişkin herhangi bir sorumluluk yüklenmemektedir.
      </p>
      <p>
        RaporinAI’ın tüm kullanım ve içerik hakları saklıdır. İzinsiz kullanımı kanunlarla
        yasaklanmıştır.
      </p>

      {/* ---------------- BÖLÜM 2: ÜYELİK SÖZLEŞMESİ ---------------- */}
      <PartTitle id="uyelik-sozlesmesi">Üyelik Sözleşmesi</PartTitle>

      <p>
        <a href="https://raporin.com" className="text-[#0F918B] hover:underline break-all">
          https://raporin.com
        </a>{" "}
        (“Site”) adresli sitemizdeki web sayfaları ve ona bağlı tüm sayfalar ve SGK raporlarının
        güvenle analiz edilmesini sağlayan RaporinAI uygulaması ATATÜRK MAH. ERTUĞRUL GAZİ SK.
        METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B İÇ KAPI NO: 376 ATAŞEHİR / İSTANBUL adresinde
        bulunan 0489125575800001 Mersis numaralı KAİROLABS SAĞLIK TEKNOLOJİLERİ ANONİM
        ŞİRKETİ’ne (RaporinAI) aittir ve RaporinAI tarafından işletilir.
      </p>
      <p>
        Sizler (“Üye”) RaporinAI programını (Uygulama) kullanırken aşağıdaki şartlara tabi
        olduğunuzu, hizmetten yararlanmakla ve kullanmaya devam etmekle; bağlı olduğunuz yasalara
        göre sözleşme imzalama hakkına, yetkisine ve hukuki ehliyetine sahip ve 18 yaşın üzerinde
        olduğunuzu, bu sözleşmeyi okuduğunuzu, anladığınızı ve sözleşmede yazan şartlarla bağlı
        olduğunuzu kabul etmiş sayılırsınız.
      </p>

      <Heading>1. Taraflar</Heading>
      <ul className="list-disc pl-5 space-y-1.5">
        <li>a) RaporinAI (Bundan böyle “RaporinAI” olarak anılacaktır).</li>
        <li>b) RaporinAI’a üye olan Eczacı (“Eczacı” ve/veya “Üye”)</li>
      </ul>
      <p>
        İşbu Üyelik Sözleşmesi (“Sözleşme”) yukarıda bilgileri verilen taraflar arasında geçerli
        olacak şekilde Üye’nin RaporinAI uygulamasına kaydolma esnasında Sözleşme’yi kabul
        etmesiyle yürürlüğe girecektir.
      </p>

      <Heading>2. Sözleşmenin Konusu</Heading>
      <p>
        İşbu Sözleşme’nin konusu RaporinAI’ın sahip olduğu internet sitesi ve uygulamadan Üye’nin
        faydalanma şartlarının belirlenmesidir.
      </p>
      <p>
        “Üye”lik statüsünün kazanılması için, “Üye” olmak isteyen kişinin RaporinAI’da bulunan
        Üyelik Formu’nu doldurup, WEB SİTESİ &amp; UYGULAMA (APP) KULLANIM KOŞULLARI ile işbu
        ÜYELİK SÖZLEŞMESİ’ni onaylayarak, üyelik formunda talep edilen bilgiler doğrultusunda
        gerçek bilgilerle doldurması ve üyelik başvurusunun “RaporinAI” tarafından değerlendirilerek
        onaylanması ve üye olmak isteyen gerçek kişi ise 18 yaşını doldurmuş olması gerekmektedir.
      </p>
      <p>
        Üyeler, kayıt işlemleri tamamlandıktan sonra Çalışan rolünde kişileri tanımlayıp
        çalışanların da sisteme erişimlerini sağlayabilecektir. Çalışanların yaptıkları tüm
        işlemlerden Üyeler sorumludur. Çalışan bilgilerinin güncelliği ve çalışanlara kişisel
        verilerinin işlendiğine dair gerekli aydınlatmaları yapmak Eczacının sorumluluğundadır.
      </p>
      <p>
        Üye, şifrelerinin güvenliğini sağlamakla yükümlü olduğunu kabul, beyan ve taahhüt eder.
        Üye, kendisine verilen kullanıcı adı ve şifresini başkasına vermemeyi, bunların
        saklanmasından sorumlu olduğunu, şifrelerinin 3. kişilerin eline geçmesi halinde Şirket’in
        oluşabilecek zararlardan sorumlu olmadığını, kullanıcı adı ve şifrenin kötüye kullanılması
        ve/veya başkası tarafından kullanılması halinde doğacak zarardan kendisinin sorumlu
        olduğunu, üyelikten doğan tüm haklarını kaybedeceğini, üyeliğe ilişkin her türlü hak ve
        kazanımlarının geri alınacağını, her türlü tedbirin uygulanabileceğini kabul, beyan ve
        taahhüt eder.
      </p>
      <p>
        Üye, ayrıca RaporinAI tarafından sağlanan hak ve imkanlardan sadece üyeliğinin devam
        ettiği sürece faydalanabileceğini, üyeliğinin sona ermesi halinde ise yararlanamayacağını
        kabul, beyan ve taahhüt eder.
      </p>
      <p>
        RaporinAI, WEB SİTESİ &amp; UYGULAMA (APP) KULLANIM KOŞULLARI ile işbu ÜYELİK
        SÖZLEŞMESİ’nin Üye tarafından ihlalinin tespiti halinde yahut bu ihlaller ile ilgili bir
        şikayet alınması halinde herhangi bir bildirimde bulunmaksızın Üye’nin RaporinAI’a
        erişimini engelleyebilir ve üyelikten çıkarabilir. Üye, üyeliğinin WEB SİTESİ &amp;
        UYGULAMA (APP) KULLANIM KOŞULLARI ile işbu ÜYELİK SÖZLEŞMESİ’ndeki şartlar ile yasal
        mevzuatta yer verilen kuralları yerine getirdiği takdirde devam edeceğini kabul etmektedir.
        Bu halde doğabilecek tüm sorumluluk ile, 3. kişiler ve/veya yetkili merciler tarafından
        RaporinAI’a karşı öne sürülebilecek tüm iddia, talep ve/veya ödemeler için RaporinAI’ın,
        ilgili Üye’ye ferileri ile birlikte rücu hakkı saklıdır.
      </p>

      <Heading>3. Tarafların Hak ve Yükümlülükleri</Heading>
      <p>
        3.1. Üye, RaporinAI’a üye olurken verdiği kişisel ve diğer sair bilgilerin kanunlar önünde
        doğru olduğunu, bu bilgilerin gerçeğe aykırılığı nedeniyle RaporinAI’ın uğrayacağı tüm
        zararları aynen ve derhal tazmin edeceğini beyan ve taahhüt eder.
      </p>
      <p>
        3.2. Üye, RaporinAI’a erişmek için kullandığı şifreyi başka kişi ya da kuruluşlara
        veremez, üyenin söz konusu şifreyi kullanma hakkı bizzat kendisine aittir. Bu sebeple
        doğabilecek tüm sorumluluk ile üçüncü kişiler veya yetkili merciler tarafından RaporinAI’a
        karşı ileri sürülebilecek tüm iddia ve taleplere karşı, RaporinAI’ın söz konusu izinsiz
        kullanımdan kaynaklanan her türlü tazminat ve sair talep hakkı saklıdır. Eczacı,
        kendisinin, temsilcilerinin, çalışanlarının, yöneticilerinin ve alt yüklenicilerinin
        Sözleşme Süresince edim ve yükümlülüklerini işbu Sözleşme hükümlerine uygun olarak ifa
        edileceğini beyan ve taahhüt eder.
      </p>
      <p>
        3.3. Üye, RaporinAI hizmetlerini kullanırken yasal mevzuat hükümlerine riayet etmeyi ve
        bunları ihlal etmemeyi baştan kabul ve taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve
        cezai yükümlülükler tamamen ve münhasıran üyeyi bağlayacaktır.
      </p>
      <p>
        3.4. Üye, RaporinAI ve sunduğu hizmetleri hiçbir şekilde kamu düzenini bozucu, genel
        ahlaka aykırı, başkalarını rahatsız ve taciz edici şekilde, yasalara aykırı bir amaç için,
        başkalarının fikri ve telif haklarına tecavüz edecek şekilde kullanamaz. Ayrıca, üye
        başkalarının hizmetleri kullanmasını önleyici veya zorlaştırıcı faaliyet (spam, virus,
        truva atı, vb.) ve işlemlerde bulunamaz.
      </p>

      <Heading>4. Gizlilik ve Kişisel Verilere Dair Yükümlülükler</Heading>
      <p>
        4.1. Üye, eczanesine gelen hasta ve danışanlardan alınan bütün kişisel veriler konusunda;
        veri sorumlusu sıfatıyla Kişisel Verilerin Korunması Kanunu’nda ve ikincil düzenlemelerde
        yer alan “aydınlatma yükümlülüğü”nün kendisine ait olduğunu, bu kapsamda ilgili kişilere,
        “veri sorumlusunun kimliği, kişisel veri işleme amaçları, kişisel verilerin aktarıldığı
        kişiler ve aktarma amaçları, kişisel verilerin toplanmasının hukuki sebepleri, kimlere
        aktarılabileceği ve yöntemleri, kişisel veri sahibinin veri sorumlusuna yönelteceği
        güncelleme, silinme ya da anonimleştirme” gibi hakları konusunda bütün yükümlülükleri
        kendisinin yerine getireceğini kabul ve taahhüt eder. Üye’nin işbu yükümlülüğü yerine
        getirmemesi nedeniyle RaporinAI’ın herhangi bir zarar uğraması halinde söz konusu zarar
        Üye’ye rücu edilir.
      </p>
      <p>
        4.2. Üye, RaporinAI ile paylaştığı kişisel verilere ilişkin kişisel verilerin hukuka uygun
        elde edilmesini diğer bir ifade ile kişinin rızasına ya da diğer hukuka uygunluk
        nedenlerine dayanılarak elde edilmesini ve hangi türlü olursa olsun RaporinAI’a aktarımının
        hukuka uygun olmasını sağlamakla, kişisel verileri alırken aydınlatma yükümlülüğünü yerine
        getirmekle, bu veriler nedeniyle RaporinAI’ın herhangi bir zararı meydana geldiğinde derhal
        ilk talepte tazmin etmekle yükümlü olduğunu kabul, beyan ve taahhüt eder. Üye, RaporinAI
        Platformu’na iş ve hizmet kapsamında aktarılan bütün kişisel veriler konusunda iş ve işlem
        yapacağı çalışanı, personeli ya da kişi ya da kurumları kişisel verileri koruma konusunda
        titizlikle seçeceğini, gerekli eğitimleri vereceğini, gizlilik ve veri koruma
        taahhütnameleri imzalatacağını, kişisel verilerin kendi uhdesinde bulunurken bu veriler
        nedeniyle RaporinAI’ın herhangi bir zararı meydana geldiğinde RaporinAI’ın ilk ihtarı ile
        meydana gelen adli, idari ya da şirket imaj kaybı da dahil bütün zararını derhal tazmin
        edeceğini kabul ve taahhüt eder.
      </p>
      <p>
        4.3. Üye’ye ait kişisel veriler, RaporinAI tarafından sunulan aydınlatma metninde
        belirtilen amaçlar için kullanılacaktır. Üye’ye ait kişisel veriler kural olarak RaporinAI
        tarafından işlenip saklanmakla birlikte üçüncü kişilerle de güvenlik önlemleri alınmak
        kaydıyla gerekli hallerde paylaşılabilir. Bu paylaşımla ilgili detaylar RaporinAI
        tarafından hazırlanan ve Kullanıcı’ya sunulan aydınlatma metninde yer almaktadır.
      </p>
      <p>
        4.4. Üye, tanıtım, reklam, kampanya, promosyon, duyuru vb. pazarlama faaliyetleri
        kapsamında ticari elektronik ileti almaya onay vermesi halinde kendisiyle ilgili amaçlar
        için iletişime geçilebilir ve ticari elektronik ileti gönderilebilir. Üye, ticari
        elektronik ileti için vermiş olduğu izni her zaman geri alabilir. RaporinAI, iptal talebini
        derhal işleme alıp, 3 (üç) işgünü içerisinde kullanıcıyı elektronik ileti almaktan imtina
        eder. Bu hususla ilgili detaylı bilgiye Üye, Site içerisinde yer alan aydınlatma metni ve
        rıza formlarından ulaşabilir.
      </p>
      <p>
        4.5. Kişisel Veriler, resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi
        halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama
        yapılmasının zorunlu olduğu durumlarda resmi makamlara aktarılabilir.
      </p>
      <p>
        4.6. RaporinAI, kişisel bilgileri gizli tutmayı, gizliliğin sağlanması ve sürdürülmesi,
        kişisel verilerin tamamının veya herhangi bir kısmının kamu alanına girmesini veya yetkisiz
        kullanımını veya üçüncü bir kişiye ifşasını önlemek için gerekli tedbirleri alır ve gerekli
        özeni gösterir. RaporinAI, gerekli bilgi güvenliği önlemlerini almasına karşın, Site’ye ve
        Uygulama’ya yapılan saldırılar sonucunda kişisel verilerin zarar görmesi veya üçüncü
        kişilerin eline geçmesi durumunda, RaporinAI’ın herhangi bir sorumluluğu olmayacaktır.
      </p>
      <p>
        4.7. Üye, kişisel verilerin işlenmesiyle ilgili detaylara ayrıca, Site’de yer alan
        Çerezlere dair aydınlatma metni, gizlilik politikası, kişisel verilerin işlenmesi ve
        korunması politikası gibi metinlerden ulaşabilir.
      </p>
      <p>
        4.8. Üye, işbu Üyelik Sözleşmesi ile aldığı hizmet kapsamında RaporinAI’ya ait teknik,
        ticari, fikri haklara ilişkin ve sınırlama olmaksızın her türlü bilginin gizli bilgi
        olduğunu kabul etmektedir. Üye kendisine ifşa edilen, (i) Gizli Bilgileri büyük bir
        gizlilik içinde korumayı, (ii) Gizli Bilgiyi, herhangi bir üçüncü kişiye hangi suretle
        olursa olsun ifşa etmemeyi, (iii) sadece diğer Taraf ile aralarındaki ticari ilişkinin
        amaçları ile ilgili olarak kullanmayı ve doğrudan ya da dolaylı olarak Taraflar arasındaki
        ticari ilişkilerin amaçları dışında kullanmamayı taahhüt eder. Üye, Gizli Bilgileri
        RaporinAI’ın izni olmadan hiç kimseye vermemeyi ve paylaşmamayı taahhüt eder. Bu taahhüt
        sözleşmenin bitiş tarihinden sonrası için de geçerlidir. Aksi halde, Üye, gizliliğin
        ihlaline sebebiyet vermesi nedeniyle RaporinAI’ın uğramış olduğu doğrudan ve dolaylı
        zararları herhangi bir ihtar ve ihbara gerek kalmaksızın tazmin etmekle yükümlüdür.
      </p>

      <Heading>5. Sözleşmenin Süresi</Heading>
      <p>
        5.1. İşbu Üyelik Sözleşmesi’nin süresi; işbu sözleşmenin imzalandığı/onaylandığı tarihte
        işlemeye başlayacak; ve Taraflardan her biri tarafından 15 (onbeş) gün önceden
        yapılabilecek yazılı bildirimle ya da varılacak mutabakatla feshedilmedikçe yürürlükte
        kalmaya devam edecektir.
      </p>

      <Heading>6. Fesih</Heading>
      <p>
        6.1. RaporinAI, Üye’nin Üyelik Sözleşmesi’nin herhangi bir hükmünü ihlal etmesi durumunda
        veya herhangi bir sebep göstermeksizin her zaman yapacağı bildirim ile Üye’nin üyeliğini
        iptal ederek sözleşmeyi tek taraflı olarak feshedebilecektir. Bunun yanında RaporinAI’ın
        her zaman tek taraflı olarak gerektiğinde Üye’nin üyeliğini silme, Üye’ye ait dosya, belge
        ve bilgileri silme hakkı vardır. Üye işbu tasarrufu önceden kabul eder. Bu durumda,
        RaporinAI’ın hiçbir sorumluluğu yoktur.
      </p>
      <p>
        6.2. Üye’nin işbu RaporinAI tarafından Üyelik Sözleşmesi’nde belirtilen yükümlülüklerin
        yerine getirilmemesi ve bu durumun RaporinAI’ya yazılı olarak bildirilmesi ve bildirimin
        üzerinden makul süre geçmesine rağmen yükümlülüklerin yerine getirilmemesi halinde haklı
        nedenle fesih hakkı söz konusudur. Böyle bir durumda Üye, Üyelik Sözleşmesi’ni feshetmek
        istemesi halinde 15 gün öncesinden yazılı olarak bildirimde bulunarak Üyelik Sözleşmesi’ni
        feshedebilir.
      </p>
      <p>
        6.3. Üye’nin herhangi bir neden göstermeksizin tek taraflı olarak Üyelik Sözleşmesi’ni
        feshetme hakkı bulunmamaktadır. Üye’nin herhangi bir neden göstermeksizin Üyelik
        Sözleşmesi’ni feshetmek istemesi halinde Üye’den alınan ücret iade edilmeyecektir.
      </p>
      <p>
        6.4. Üye’nin işbu sözleşme çerçevesindeki herhangi bir borcunu ihlal etmesi, yasal olarak
        sahip olması gereken diploma, işyeri açma ve çalışma ruhsatı, eczacılık faaliyet belgesini
        ve oda kayıt belgesini RaporinAI’a sunamaması veya akdin devamında kaybetmesi veya burada
        sayılanlarla sınırlı olmamak üzere herhangi bir şekilde RaporinAI’ın itibarını zedeleyici
        eylemlerde bulunması durumlarında RaporinAI, işbu sözleşmeden kaynaklanan başta uğradığı
        zararın tazmini olmak ve bununla sınırlı olmamak üzere diğer her tür hakkı saklı kalmak
        kaydıyla, sözleşmeyi yazılı bildirimde bulunarak derhal tek taraflı olarak feshedebilir.
      </p>
      <p>
        6.5. Fesih ile birlikte; fesih bildirimden öncesine ait raporlar var ise Üye bu raporların
        bir örneğini kendi uhdesine almak isterse buna ilişkin tüm sorumluluk Üye’ye ait olup fesih
        sonrasında RaporinAI’ın geçmiş rapor örneklerini Üye’ye iletme ve/veya bu bilgileri saklama
        zorunluluğu yoktur. Üye’nin iş bu sözleşmede yazılı hak ve borçlarını devretmesi, kiracı
        olarak işlettiği Eczanedeki kira süresinin sona ermesi gibi durumlar RaporinAI’a sözleşmeyi
        derhal ve önceden bildirimde bulunmaksızın tazminatsız fesih hakkı sağlamaktadır.
      </p>
      <p>
        6.6. Eczacı’nın işbu Sözleşme hükümlerinden ve Kullanım Sözleşmesi ve Şartları’ndan
        herhangi birine uymaması, herhangi bir biçimde aykırı davranması ve herhangi bir şekilde
        RaporinAI’ın itibarını zedeleyici eylemlerde bulunması üzerine RaporinAI dilediği zaman
        ihbar veya tazminat yükümlülüğü olmaksızın tek taraflı olarak Sözleşmeyi feshedebilir. Bu
        hallerde Üye, Sözleşme’nin ihlalinden ve RaporinAI’ın itibarının zedelenmesinden kaynaklanan
        RaporinAI’ın her türlü zararından sorumludur ve ilk talep halinde ödemekle yükümlüdür.
      </p>

      <Heading>7. Sorumsuzluk Kaydı ve Garanti Vermeme Beyanı</Heading>
      <p>
        7.1. İşbu Üyelik Sözleşmesi, uygulanabilir mevzuatın izin verdiği azami ölçüde geçerli
        olacaktır. RaporinAI tarafından sunulan hizmetler “olduğu gibi” ve “mümkün olduğu” temelde
        sunulmakta ve pazarlanabilirlik, belirli bir amaca uygunluk veya ihlal etmeme konusunda tüm
        zımni garantiler de dâhil olmak üzere hizmetler veya uygulama ile ilgili olarak (bunlarda
        yer alan tüm bilgiler dâhil) sarih veya zımni, kanuni veya başka bir nitelikte hiçbir
        garantide bulunmamaktadır.
      </p>
      <p>
        7.2. RaporinAI ve platformunda diğer Üyeler tarafından beyan edilen, yazılan, kullanılan
        fikir ve düşünceler, tamamen üyelerin kendi kişisel görüşleridir ve görüş sahibini bağlar.
        Bu görüş ve düşüncelerin RaporinAI ile hiçbir ilgi ve bağlantısı yoktur. RaporinAI’ın
        üyenin beyan edeceği fikir ve görüşler nedeniyle üçüncü kişilerin uğrayabileceği
        zararlardan ve üçüncü kişilerin beyan edeceği fikir ve görüşler nedeniyle üyenin
        uğrayabileceği zararlardan dolayı herhangi bir sorumluluğu bulunmamaktadır.
      </p>
      <p>
        7.3. RaporinAI, üye verilerinin yetkisiz kişilerce okunmasından ve üye yazılım ve
        verilerine gelebilecek zararlardan dolayı sorumlu olmayacaktır. Üye, RaporinAI internet
        sitesinin kullanılmasından dolayı uğrayabileceği herhangi bir zarar yüzünden RaporinAI’dan
        tazminat talep etmemeyi peşinen kabul etmiştir.
      </p>
      <p>
        7.4. Üye, diğer Üye’lerin verilerine izinsiz olarak ulaşmamayı veya bunları kullanmamayı
        kabul etmiştir. Aksi takdirde, bundan doğacak hukuki ve cezai sorumluluklar tamamen Üye’ye
        aittir.
      </p>
      <p>
        7.5. Uygulama tarafından raporların yapay zekâ teknolojileri kullanılarak okunması, analiz
        edilmesi ve yorumlanması sonucunda oluşturulan her türlü değerlendirme, özet, tespit,
        tahmin, öneri ve diğer çıktı (“Çıktılar”) yalnızca bilgilendirme ve tavsiye amacı
        taşımaktadır. Çıktılar; kesin, eksiksiz veya hatasız bir sonuç, profesyonel görüş ya da
        belirli bir kararın alınmasına yönelik garanti veya taahhüt niteliğinde değildir. Yapay
        zekâ sistemlerinin çalışma özellikleri ile Uygulama’ya sunulan raporların ve diğer verilerin
        doğruluğu, güncelliği, bütünlüğü ve kalitesi nedeniyle Çıktılarda hata, eksiklik, yanlış
        yorumlama, tutarsızlık veya güncelliğini yitirmiş bilgiler bulunabilir. Üye, Çıktıları
        kullanmadan veya bunlara dayanarak herhangi bir işlem ya da karar almadan önce ilgili
        bilgileri bağımsız olarak kontrol etmek, gerekli doğrulamaları yapmak ve konunun niteliğine
        göre yetkin uzman görüşüne başvurmakla yükümlüdür. Çıktılara dayanılarak alınacak her türlü
        ticari, mali, hukuki, teknik, operasyonel veya sair karar ile bu kararların uygulanmasına
        ilişkin nihai değerlendirme, yetki ve sorumluluk münhasıran Üye’ye aittir. Üye, Uygulama’nın
        ve Çıktıların insan değerlendirmesinin, uzman incelemesinin veya mesleki danışmanlığın
        yerine geçmediğini kabul eder. RaporinAI; emredici mevzuat hükümleri saklı kalmak kaydıyla,
        Çıktıların doğrudan veya dolaylı olarak kullanılmasından, yanlış ya da eksik
        yorumlanmasından veya yalnızca Çıktılara dayanılarak alınan karar ve gerçekleştirilen
        işlemlerden kaynaklanan zararlardan sorumlu tutulamaz.
      </p>
      <p>
        7.6. İşbu Üyelik Sözleşmesi içerisinde sayılan maddelerden bir ya da birkaçını ihlal eden
        üye işbu ihlal nedeniyle cezai ve hukuki olarak şahsen sorumlu olup RaporinAI’ı bu
        ihlallerin hukuki ve cezai sonuçlarından ari tutacaktır. Ayrıca; işbu ihlal nedeniyle,
        olayın adli makamlara intikal ettirilmesi halinde, RaporinAI’ın üyeye karşı üyelik
        sözleşmesine uyulmamasından dolayı tazminat talebinde bulunma hakkı saklıdır.
      </p>
      <p>
        7.7. Üye, Uygulama’nın ve Site’nin kullanımı esnasında kendi güvenliğini sağlanması için
        virüs koruma sistemini tedarik etmesi başta olmak üzere tüm gerekli teknik ve idari
        tedbirleri sağlaması gerekmektedir. Bu bağlamda üye RaporinAI Platformu’na girmesiyle,
        kendi yazılım ve işletim sistemlerinde oluşabilecek tüm hata ve bunların doğrudan ya da
        dolaylı sonuçlarından kendisinin sorumlu olduğunu kabul etmiş sayılır.
      </p>

      <Heading>8. Fikri Mülkiyet Hakları</Heading>
      <p>
        8.1. RaporinAI Platformu’nun yazılım ve tasarımı RaporinAI mülkiyetinde olup, bunlara
        ilişkin telif hakkı ve/veya diğer fikri mülkiyet hakları ilgili kanunlarca korunmakta olup,
        bunlar Üye tarafından izinsiz kullanılamaz, iktisap edilemez ve değiştirilemez. Uygulama ve
        Site’de yer alan bilgiler hiçbir şekilde kısmen ya da tamamen çoğaltılamaz, yayınlanamaz,
        kopyalanamaz, sunulamaz ve/veya aktarılamaz. Böyle bir ihlal durumunda, Üye, hem
        RaporinAI’ın uğradığı her türlü zararı hem de üçüncü kişilerin uğradıkları zararlardan
        dolayı RaporinAI’dan talep edilen tazminat miktarını ve mahkeme masrafları ve avukatlık
        ücreti de dahil ancak bununla sınırlı olmamak üzere diğer her türlü yükümlülükleri
        karşılamakla sorumludur.
      </p>
      <p>
        8.2. RaporinAI tarafından Platform’un iyileştirilmesi, geliştirilmesine yönelik olarak
        ve/veya yasal mevzuat çerçevesinde siteye erişmek için kullanılan İnternet servis
        sağlayıcısının adı ve Internet Protokol (IP) adresi, Siteye erişilen tarih ve saat, sitede
        bulunulan sırada erişilen sayfalar ve siteye doğrudan bağlanılmasını sağlayan Web sitesinin
        Internet adresi gibi birtakım bilgiler toplanabilir.
      </p>

      <Heading>9. Değişiklik</Heading>
      <p>
        9.1. RaporinAI Site ve Uygulama’nın içeriğini dilediği zaman değiştirme, kullanıcılara
        sağlanan herhangi bir hizmeti değiştirme ya da sona erdirme veya kayıtlı kullanıcı bilgi ve
        verilerini silme hakkını saklı tutar.
      </p>
      <p>
        9.2. RaporinAI, üyelik sözleşmesinin koşullarını hiçbir şekil ve surette ön ihbara ve/veya
        ihtara gerek kalmaksızın her zaman değiştirebilir, güncelleyebilir veya iptal edebilir.
        Değiştirilen, güncellenen ya da yürürlükten kaldırılan her hüküm, yayın tarihinde tüm
        üyeler bakımından hüküm ifade edecektir.
      </p>

      <Heading>10. Mücbir Sebep</Heading>
      <p>
        Tarafların her ikisinin veya birinin çalışma imkânlarının kısmen veya tamamen, geçici veya
        daimi olarak durduracak şekilde ve derecede meydana gelen sel, su baskını, deprem gibi
        doğal afetler, yangın, hükümetin faaliyetleri, ulusal seferberlik halleri, ayaklanmalar,
        savaş ya da savaş girişimleri, grev, lokavt, salgın hastalık, elektronik ortamda meydana
        gelen teknik aksaklıklar gibi burada yazılı olanlarla sınırlı olmamak kaydıyla ve işbu
        sözleşmenin imzalandığı tarihte var olmayan ve öngörülmeyen ve tarafların kontrolleri
        dışında gelişen, ortaya çıkmasıyla taraflardan birinin ya da her ikisinin de sözleşme ile
        yüklendikleri borç ve sorumluluklarını kısmen ya da tamamen yerine getirmelerini ya da
        bunları zamanında yerine getirmelerini imkânsızlaştıran haller, mücbir sebep(ler) olarak
        kabul edilecektir. Bu nedenlerden birisi meydana gelirse tarafların bu sözleşmeden
        kaynaklanan yükümlülükleri askıya alınır. Bu sebep, 15 gün süreyle devam ederse taraflardan
        herhangi birisi sözleşmeyi tazminatsız olarak feshedebilir.
      </p>

      <Heading>11. Uyuşmazlıkların Çözümü</Heading>
      <p>
        11.1. Taraflar, RaporinAI’a ait tüm bilgisayar kayıtlarının tek ve gerçek münhasır delil
        olarak, HMK madde 193’e uygun şekilde esas alınacağını ve söz konusu kayıtların bir delil
        sözleşmesi teşkil ettiği hususunu kabul ve beyan eder.
      </p>
      <p>
        11.2. İşbu sözleşmeye ilişkin ihtilaflarda İstanbul Anadolu Mahkemeleri ve İcra Daireleri
        ile Arabuluculuk Büroları yetkilidir.
      </p>

      <Heading>12. Yürürlük</Heading>
      <p>
        Üyenin, üyelik kaydı yapması üyenin üyelik sözleşmesinde yer alan tüm maddeleri okuduğu ve
        üyelik sözleşmesinde yer alan maddeleri kabul ettiği anlamına gelir. İşbu Sözleşme Üye’nin
        üye olması anında akdedilmiş ve karşılıklı olarak yürürlüğe girmiştir.
      </p>
    </LegalPage>
  );
}
