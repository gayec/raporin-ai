import { Heading, LegalPage, LEGAL_ADDRESS } from "../../../components/legal/LegalPage";

export const metadata = {
  title: "Eczaneler İçin Aydınlatma Metni",
  description:
    "RaporinAI uygulamasını kullanan eczaneler için 6698 sayılı KVKK kapsamında hazırlanan aydınlatma metni: işlenen kişisel veriler, işleme amaçları, hukuki sebepler, saklama ve haklarınız.",
  alternates: {
    canonical: "https://raporin.com/kvkk/eczaneler-icin-aydinlatma-metni",
  },
};

const PROCESSING_TABLE = [
  {
    data: "Kimlik Bilgisi, İletişim Bilgisi, İşlem Güvenliği Bilgisi",
    purposes:
      "27-Mal / Hizmet Satış Süreçlerinin Yürütülmesi, 36-Saklama ve Arşiv Faaliyetlerinin Yürütülmesi (Uygulamaya Kayıt işlemleri)",
    basis: "Kanun madde 5/2(c): Sözleşmenin kurulması veya ifası",
  },
  {
    data: "Müşteri İşlem Bilgileri",
    purposes:
      "26-Mal / Hizmet Satış Sonrası Destek Hizmetlerinin Yürütülmesi, 27-Mal / Hizmet Satış Süreçlerinin Yürütülmesi, 36-Saklama ve Arşiv Faaliyetlerinin Yürütülmesi (Uygulamada yapılan işlemlere dair detaylı takip ve raporlama işlemleri)",
    basis:
      "Kanun madde 5/2(c): Sözleşmenin kurulması veya ifası, Kanun madde 5/2(f): Şirketin meşru menfaatinin bulunması",
  },
  {
    data: "Müşteri İşlem Bilgileri",
    purposes:
      "22-İş Süreçlerinin İyileştirilmesine Yönelik Önerilerin Alınması ve Değerlendirilmesi, 29-Müşteri İlişkileri Yönetimi Süreçlerinin Yürütülmesi, 41-Talep / Şikayetlerin Takibi (Uygulamanın verdiği sonuçlara dair yorum ve tepkileriniz)",
    basis: "Kanun madde 5/1: Kişilerden açık rıza alınması",
  },
];

const RIGHTS = [
  "Kişisel verinin işlenip işlenmediğini öğrenme,",
  "Kişisel verileri işlenmişse; buna ilişkin bilgi talep etme,",
  "Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,",
  "Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,",
  "Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,",
  "Kişisel verilerin silinmesini veya yok edilmesini isteme,",
  "Kişisel verilerin düzeltilmesi, silinmesi ya da yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,",
  "İşlenen kişisel verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle veri sahibinin aleyhine bir sonucun ortaya çıkmasına itiraz etme,",
  "Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme.",
];

export default function EczanelerIcinAydinlatmaMetniPage() {
  return (
    <LegalPage
      title="Kişisel Verilerin İşlenmesine Dair Aydınlatma Metni"
      subtitle="RaporinAI uygulamasını kullanan eczaneler için hazırlanan KVKK aydınlatma metni."
    >
      <p>
        İşbu Kişisel Veriler Aydınlatma Metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (“Kanun”) uyarınca kişisel verilerinizin toplanması, işlenmesi, aktarılması ve Kanun
        kapsamındaki haklarınıza dair sizleri bilgilendirmek amacıyla hazırlanmıştır.
      </p>
      <p>
        ATATÜRK MAH. ERTUĞRUL GAZİ SK. METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B İÇ KAPI NO: 376
        ATAŞEHİR / İSTANBUL adresinde bulunan 0489125575800001 Mersis numaralı KAİROLABS SAĞLIK
        TEKNOLOJİLERİ ANONİM ŞİRKETİ (“Şirket” veya “biz”) olarak veri sorumlusu sıfatıyla sizi
        belirli hale getiren bilgileri (“kişisel verileriniz”) işlemekteyiz.
      </p>

      <Heading>İşlediğimiz Bilgileriniz</Heading>
      <p>
        Şirket olarak eczanelerin kullanımına sunduğumuz RaporinAI programını kullanmanız halinde
        Kimlik (Ad-Soyad, Eczane adı, GLN No), İletişim (Adres, Telefon, E-posta), Müşteri İşlem
        (Uygulamada yaptığınız işlemlere dair detaylar) ve İşlem Güvenliği (Kullanıcı adı, şifre)
        kategorilerinde kişisel verilerinizi toplamakta ve işlemekteyiz.
      </p>

      <Heading>Bilgilerinizi Nasıl Topluyor ve İşliyoruz?</Heading>
      <p>
        Kişisel verilerinizi RaporinAI programı aracılığıyla elektronik olarak tamamen veya kısmen
        otomatik yollarla toplamakta ve işlemekteyiz.
      </p>

      <Heading>Bilgilerinizi Toplama Amaçlarımız</Heading>
      <p>
        Yukarıda belirtilen kişisel verilerinizi esas olarak RaporinAI uygulamasına kaydınızın
        gerçekleştirilmesi, uygulamanın kullanımının sağlanması ve olası talep-şikayetlerinizin
        çözüme kavuşturulması amacıyla işlemekteyiz. Kişisel verilerinizi Kanun’un 5. maddesinde
        belirtilen hukuki sebeplere dayalı olarak işliyoruz. Aşağıda hangi kişisel verilerinizi
        hangi amaçlarla ve hangi hukuki sebebe dayalı olarak işlediğimizi detaylı olarak
        görebilirsiniz.
      </p>

      <div className="overflow-x-auto my-4 rounded-xl border border-teal-100 bg-white shadow-sm">
        <table className="w-full min-w-[720px] text-sm text-left">
          <thead>
            <tr className="bg-[#E8FFFB] text-gray-900">
              <th scope="col" className="w-1/4 px-4 py-3 font-semibold">
                Süreçte İşlenen Kişisel Verileriniz
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">Kişisel Veri İşleme Amaçları</th>
              <th scope="col" className="w-1/4 px-4 py-3 font-semibold">Dayanılan Hukuki Sebepler</th>
            </tr>
          </thead>
          <tbody>
            {PROCESSING_TABLE.map((row) => (
              <tr key={row.purposes} className="border-t border-gray-100 align-top">
                <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                  {row.data}
                </th>
                <td className="px-4 py-3">{row.purposes}</td>
                <td className="px-4 py-3">{row.basis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        RaporinAI uygulamasını kullandığınız senaryoda işlenen kişisel verileriniz Şirket ile
        aranızdaki uygulama kullanım sözleşmesinin kurulması ve sonrasında ifası kapsamında
        işlenmektedir. Ayrıca uygulama ile elde edilen kişisel verilerinizin işlenmesinde Şirket’in
        meşru menfaati de söz konusudur. Uygulama içerisinde yer alan çıktılar için siz değerli
        kullanıcılardan talep edilen yorum-ifade süreci ise tamamen sizlerin isteğine bağlı bir
        süreç olup zorunluluk arz etmemektedir. Uygulama çıktıları için yorum yaptığınızda ya da
        ifade kullandığınızda da açık rızanıza dayalı olarak bu kişisel verilerinizin uygulamanın
        gelişimi için kullanılacağını da belirtmek isteriz.
      </p>

      <Heading>Kişisel Verilerinizin Paylaşılması</Heading>
      <p>
        Yukarıda izah ettiğimiz süreçlerde toplanıp işlenen kişisel verileriniz veri sorumlusu
        Şirket tarafından işlenmektedir. Kişisel verileriniz Şirket’in uzman kişi/kurumlardan hizmet
        alması nedeniyle veri sağlayıcı tedarikçilere aktarılabilmektedir. Bu aktarım kişisel
        verilerinizin güvenli ortamlarda saklanması amacıyla ve Kanun’un 5. maddesinin 2. fıkrasında
        yer alan “f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri
        sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması” hukuki sebebine dayalı
        olarak gerçekleştirilmektedir.
      </p>

      <Heading>Kişisel Verilerinizin Korunması, Saklanması ve İmhası</Heading>
      <p>
        Şirket olarak kişisel verilerinizin hukuka aykırı olarak işlenmesini önlemek, kişisel
        verilerinize hukuka aykırı olarak erişilmesini önlemek ve kişisel verilerinizin muhafazasını
        sağlamak amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli her türlü teknik ve
        idari tedbirleri almaktayız. Şirketimiz tarafından kişisel verileriniz kişisel verilerinizin
        işlenmesini gerektiren sebeplerin ortadan kalkması ile ya da talebiniz üzerine takip eden 6
        (altı) ay içerisinde silinir, yok edilir veya anonim hale getirilir.
      </p>

      <Heading>Kişisel Verilerinize İlişkin Haklarınız Neler?</Heading>
      <p>
        Kanun’un 11. maddesi hükümleri uyarınca kişisel verilerinize ilişki olarak aşağıdaki
        haklarınız bulunmaktadır.
      </p>
      <ul className="list-disc pl-5 space-y-1.5">
        {RIGHTS.map((right) => (
          <li key={right}>{right}</li>
        ))}
      </ul>

      <Heading>Bize Ulaşın</Heading>
      <p>
        Kişisel verilerinizle ilgili sorularınızı ve yukarıda yer alan hak ve taleplerinizi
        aşağıdaki yöntemlerle ileterek bize her zaman ulaşabilirsiniz.
      </p>

      <div className="overflow-x-auto my-4 rounded-xl border border-teal-100 bg-white shadow-sm">
        <table className="w-full min-w-[480px] text-sm text-left">
          <thead>
            <tr className="bg-[#E8FFFB] text-gray-900">
              <th scope="col" className="w-1/3 px-4 py-3 font-semibold">Başvuru Yöntemi</th>
              <th scope="col" className="px-4 py-3 font-semibold">Başvurunun Yapılacağı Adres</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100 align-top">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                Şahsen Yazılı Başvuru
              </th>
              <td className="px-4 py-3">{LEGAL_ADDRESS}</td>
            </tr>
            <tr className="border-t border-gray-100 align-top">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900">
                Noter
              </th>
              <td className="px-4 py-3">{LEGAL_ADDRESS}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </LegalPage>
  );
}
