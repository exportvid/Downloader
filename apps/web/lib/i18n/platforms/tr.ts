import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'yukarıdaki kutuya yapıştırın ve İndir’i seçin';

export const tr: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'YouTube Video İndir: YouTube’dan MP4’e',
    metaDescription:
      'YouTube videolarını ve Shorts’ları ücretsiz olarak MP4 indirin. youtube.com veya youtu.be bağlantısını yapıştırın, kaliteyi seçin ve videoyu cihazınıza kaydedin.',
    h1: 'YouTube Video İndir',
    intro: 'Bir YouTube bağlantısı yapıştırın ve videoyu veya Short’u mevcut en iyi kalitede MP4 olarak indirin.',
    about: [
      'ExportVid, tam youtube.com/watch bağlantılarını, kısa youtu.be bağlantılarını ve youtube.com/shorts bağlantılarını kabul eder.',
      'YouTube genellikle her video için birkaç çözünürlük sunar. ExportVid hepsini, yüklemenin sunduğu en yüksek kaliteye kadar listeler. Yüksek çözünürlükler video ve sesi ayrı saklar, bu yüzden ExportVid onları yeniden kodlamadan tek bir MP4’te birleştirir.',
    ],
    supportedContentTypes: [
      { label: 'YouTube videoları', description: 'Herhangi bir kanaldan normal yüklemeler.' },
      { label: 'YouTube Shorts', description: 'Shorts akışındaki kısa dikey videolar.' },
    ],
    formats: ['Video ve sesli MP4, YouTube’un video için sunduğu tüm çözünürlüklerde'],
    faqs: [
      {
        q: 'YouTube videosu nasıl indirilir?',
        a: `YouTube’dan video bağlantısını kopyalayın, ${paste}. Listeden bir kalite seçin ve dosyayı kaydedin.`,
      },
      {
        q: 'YouTube videosu MP4’e nasıl dönüştürülür?',
        a: 'Video bağlantısını yukarıdaki kutuya yapıştırın ve İndir’i seçin. ExportVid videoyu MP4 dosyası olarak kaydeder, yani ayrıca dönüştürülecek bir şey yoktur.',
      },
      {
        q: 'YouTube Shorts indirebilir miyim?',
        a: 'Evet. Short’un bağlantısını yapıştırın, ExportVid onu otomatik olarak tanır. YouTube Shorts indirme sayfasında daha fazla ayrıntı var.',
      },
      {
        q: 'youtu.be bağlantıları çalışıyor mu?',
        a: 'Evet. Hem kısa youtu.be bağlantıları hem de tam youtube.com bağlantıları çalışır.',
      },
      {
        q: 'Gizli veya yalnızca üyelere özel videoları indirebilir miyim?',
        a: 'Hayır. Gizli ve yalnızca üyelere özel videolar giriş gerektirir ve ExportVid girişle korunan içeriklere asla erişmez.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'YouTube Shorts İndir: MP4 Olarak Kaydet',
    metaDescription: 'YouTube Shorts’ları ücretsiz olarak MP4 indirin. youtube.com/shorts bağlantısını yapıştırın, kaliteyi seçin ve videoyu cihazınıza kaydedin.',
    h1: 'YouTube Shorts İndir',
    intro: 'Bir YouTube Short bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: [
      'ExportVid, youtube.com/shorts bağlantılarını tanır ve YouTube’un o Short için sunduğu video dosyasını bulur. Normal bir youtube.com/watch bağlantısı da çalışır.',
      'Liste, YouTube’un Short için sunduğu tüm kaliteleri gösterir; böylece cihazınıza uygun olanı seçebilirsiniz.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Shorts akışındaki kısa dikey videolar.' }],
    formats: ['Video ve sesli MP4, YouTube’un Short için sunduğu tüm çözünürlüklerde'],
    faqs: [
      {
        q: 'YouTube Short nasıl indirilir?',
        a: 'Short’u açın, bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin. Ardından bir kalite seçip dosyayı kaydedin.',
      },
      {
        q: 'İndirmede ses de var mı?',
        a: 'Evet. YouTube video ve sesi ayrı dosyalar olarak sunduğunda ExportVid sesi korur ve videoyla birleştirir.',
      },
      {
        q: 'Daha uzun YouTube videolarını da indirebilir miyim?',
        a: 'Evet. YouTube video indirici, normal her video bağlantısıyla çalışır.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Facebook Video İndir: Video ve Reels MP4',
    metaDescription:
      'Facebook videolarını ve Reels’leri ücretsiz olarak MP4 indirin. facebook.com veya fb.watch bağlantısını yapıştırın, kaliteyi seçin ve cihazınıza kaydedin.',
    h1: 'Facebook Video İndir',
    intro: 'Bir Facebook video bağlantısı yapıştırın, kısa fb.watch bağlantıları dahil, ve MP4’ü indirin.',
    about: [
      'Facebook videoları normal izleme bağlantıları, kısa fb.watch bağlantıları ve Reel bağlantıları üzerinden paylaşır. ExportVid üçünü de aynı şekilde işler.',
      'Herkese açık sayfalardaki, profillerdeki ve gruplardaki videolar indirilebilir. Gizli veya kapalı gruplardaki videolar indirilemez.',
    ],
    supportedContentTypes: [
      { label: 'Facebook videoları', description: 'Herkese açık sayfalar, profiller ve gruplardaki video gönderileri.' },
      { label: 'Facebook Reels', description: 'Reels olarak paylaşılan kısa dikey videolar.' },
    ],
    formats: ['Video ve sesli MP4, Facebook’un video için sunduğu tüm çözünürlüklerde'],
    faqs: [
      {
        q: 'Facebook videosu nasıl indirilir?',
        a: `Video bağlantısını kopyalayın, ${paste}. Ardından bir kalite seçip dosyayı kaydedin.`,
      },
      {
        q: 'fb.watch bağlantıları çalışıyor mu?',
        a: 'Evet. Kısa fb.watch bağlantıları doğrudan çalışır.',
      },
      {
        q: 'Gizli bir Facebook grubundaki videoları indirebilir miyim?',
        a: 'Hayır. ExportVid yalnızca herkesin görebildiği içeriklerle çalışır ve gizlilik ayarlarını asla aşmaz.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Facebook Reels İndir: MP4 Olarak Kaydet',
    metaDescription: 'Facebook Reels’leri ücretsiz olarak MP4 indirin. Reel bağlantısını yapıştırın, kaliteyi seçin ve videoyu cihazınıza kaydedin.',
    h1: 'Facebook Reels İndir',
    intro: 'Bir Facebook Reel bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: ['Facebook Reels, /reel/ içeren bir bağlantı kullanır. ExportVid onu otomatik olarak tanır ve video dosyasını sizin için bulur.'],
    supportedContentTypes: [{ label: 'Facebook Reels', description: 'Facebook sayfalarından ve profillerinden Reels.' }],
    formats: ['Video ve sesli MP4, Facebook’un sunduğu çözünürlükte'],
    faqs: [
      {
        q: 'Facebook Reel nasıl indirilir?',
        a: 'Reel bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      {
        q: 'Bağlantı Facebook uygulamasını açıyor. Ne yapıştırmalıyım?',
        a: 'Uygulamadan paylaşılan bağlantı yerine facebook.com/reel veya fb.watch ile başlayan web bağlantısını yapıştırın. İkisi de aynı videoya çıkar.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Instagram Video İndirici: Reels, Videolar, Hikâyeler',
    metaDescription:
      'Instagram Reels, video ve hikâyelerini ücretsiz olarak MP4 biçiminde indirin. Fotoğraflar ve karuseller de çalışır. Bir Instagram bağlantısı yapıştırın, ExportVid dosyaları bulsun.',
    h1: 'Instagram Video İndir',
    intro: 'Bir Instagram Reel, video gönderisi veya hikâye bağlantısı yapıştırın ve MP4 olarak indirin. Fotoğraf gönderileri ve karuseller de çalışır.',
    about: [
      'Instagram, farklı içerik türleri için birbirine benzeyen bağlantılar kullanır. ExportVid bunları ayırt eder: Reels (/reel/), akış gönderileri (/p/), hikâyeler ve profiller.',
      'Karusellerde her fotoğraf ve video ayrı listelenir; böylece yalnızca istediğinizi indirirsiniz.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Reels olarak paylaşılan kısa dikey videolar.' },
      { label: 'Video gönderileri', description: 'Normal akış gönderisi olarak paylaşılan videolar.' },
      { label: 'Hikâyeler', description: 'Hâlâ yayında olan hikâyeler.' },
      { label: 'Karuseller', description: 'Birden fazla fotoğraf veya video içeren, tek tek listelenen gönderiler.' },
      { label: 'Fotoğraflar', description: 'Tek görselli akış gönderileri.' },
      { label: 'Profil fotoğrafları', description: 'Bir hesabın profil fotoğrafı.' },
    ],
    faqs: [
      {
        q: 'Instagram videosu nasıl indirilir?',
        a: 'Instagram’dan Reel veya gönderi bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin. Ardından istediğiniz dosyayı seçin.',
      },
      {
        q: 'Gizli bir Instagram hesabından indirebilir miyim?',
        a: 'Hayır. ExportVid yalnızca herkesin görebildiği gönderilerle çalışır. Gizli hesaplara asla erişmez.',
      },
      {
        q: 'Instagram hikâyesi nasıl indirilir?',
        a: 'Hikâyeyi açın, bağlantısını kopyalayın ve yukarıdaki kutuya yapıştırın. Hikâyeler, yayında oldukları ve herkesin görebildiği hesaplardan geldikleri sürece indirilebilir.',
      },
      {
        q: 'Bir karuseldeki tüm videoları ve fotoğrafları indirebilir miyim?',
        a: 'Evet. Karuseldeki her video veya fotoğraf, kendi indirme düğmesiyle listede görünür.',
      },
      {
        q: 'Instagram öne çıkan hikâyelerini indirebilir miyim?',
        a: 'Evet, Instagram bunları herkesin görebildiği bir profilde gösteriyorsa. Öne çıkan öğeler hikâyelerle aynı şekilde işlenir.',
      },
    ],
    formats: ['Videolar için sesli MP4', 'Fotoğraflar, karusel görselleri ve profil fotoğrafları için JPEG'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Instagram Reels İndir: MP4 Olarak Kaydet',
    metaDescription: 'Instagram Reels’leri mevcut en iyi kalitede MP4 indirin. Reel bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Instagram Reels İndir',
    intro: 'Bir Instagram Reel bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: [
      'Reels, Instagram’ın kısa dikey videolarıdır. ExportVid /reel/ ve /reels/ içeren bağlantıları tanır ve video dosyasını doğrudan bulur.',
      'Gösterilen kalite, Instagram’ın o Reel için sunduğu kalitedir. ExportVid çözünürlüğü asla yükseltmez veya etiketini değiştirmez.',
    ],
    supportedContentTypes: [{ label: 'Instagram Reels', description: 'İşletme ve içerik üretici profilleri dahil, her hesaptan Reels.' }],
    formats: ['Video ve sesli MP4, Instagram’ın sunduğu çözünürlükte'],
    faqs: [
      {
        q: 'Instagram Reel nasıl indirilir?',
        a: 'Reel’i açın, bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      {
        q: 'Hangi Reel bağlantıları çalışıyor?',
        a: 'Normal gönderi bağlantısı olarak paylaşılan Reels dahil, her instagram.com/reel/ veya instagram.com/reels/ bağlantısı.',
      },
      {
        q: 'İndirmede ses de var mı?',
        a: 'Evet. Çoğu Reel ses ve görüntüyü birlikte taşır ve ExportVid ikisini de korur.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'TikTok Video İndir: Filigransız MP4',
    metaDescription:
      'TikTok videolarını MP4 indirin; TikTok temiz bir dosya sunduğunda filigransız. TikTok bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'TikTok Video İndir',
    intro: 'Bir TikTok bağlantısı yapıştırın ve videoyu TikTok’un sunduğu en iyi kalitede MP4 olarak kaydedin; temiz bir dosya varsa filigransız.',
    about: [
      'ExportVid, tiktok.com/@kullaniciadi/video/123 gibi tam bağlantıları ve kısa vm.tiktok.com veya vt.tiktok.com bağlantılarını kabul eder.',
      'TikTok genellikle birkaç çözünürlük yerine video başına tek bir kalite sunar; bu yüzden çoğu zaman tek bir MP4 görürsünüz. Bu, TikTok’un sunduğu gerçek dosyadır. ExportVid ek seçenekler uydurmaz.',
    ],
    supportedContentTypes: [{ label: 'TikTok videoları', description: 'Normal veya kısa bir TikTok bağlantısından videolar.' }],
    formats: ['Video ve sesli MP4, TikTok temiz bir dosya sunduğunda filigransız', 'TikTok’un o video için sunduğu çözünürlükte MP4'],
    faqs: [
      {
        q: 'TikTok videosu filigransız nasıl indirilir?',
        a: 'TikTok bağlantısını yukarıdaki kutuya yapıştırın ve İndir’i seçin. ExportVid, TikTok sunduğunda filigransız sürümü seçer.',
      },
      {
        q: 'İndirmemde neden hâlâ filigran var?',
        a: 'Bazı videolar yalnızca filigranlı hâliyle vardır. Bu durumda ExportVid filigranı kaldıramaz ve dosyayı TikTok’un sunduğu şekliyle verir.',
      },
      {
        q: 'Neden yalnızca tek bir kalite seçeneği var?',
        a: 'TikTok çoğu zaman her videonun yalnızca tek bir sürümünü sunar. ExportVid tam olarak var olanı gösterir ve olmayan bir kaliteyi asla eklemez.',
      },
      {
        q: 'Gizli bir TikTok hesabının videolarını indirebilir miyim?',
        a: 'Hayır. Gizli hesaplar ve girişle korunan videolar desteklenmez.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'X (Twitter) Video İndir: MP4 Olarak Kaydet',
    metaDescription: 'X (Twitter) gönderilerindeki videoları MP4 indirin. x.com veya twitter.com bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'X (Twitter) Video İndir',
    intro: 'Bir x.com veya twitter.com gönderi bağlantısı yapıştırın ve videoyu indirin.',
    about: [
      'X her video için birkaç çözünürlük sunar, genellikle 1080p’ye kadar. ExportVid hepsini, yanında dosya boyutuyla listeler.',
      'Yalnızca herkesin görebildiği gönderilerdeki videolar indirilebilir. Korumalı hesapların gönderileri indirilemez.',
    ],
    supportedContentTypes: [{ label: 'X videoları', description: 'x.com veya twitter.com üzerindeki gönderilere eklenmiş videolar.' }],
    formats: ['Video ve sesli MP4, gönderinin sunduğu tüm çözünürlüklerde (genellikle 1080p’ye kadar)'],
    faqs: [
      {
        q: 'X veya Twitter’dan video nasıl indirilir?',
        a: 'Gönderi bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin. Bir çözünürlük seçip dosyayı kaydedin.',
      },
      {
        q: 'Hem x.com hem de twitter.com bağlantıları çalışıyor mu?',
        a: 'Evet. İki alan adı da aynı platforma çıkar ve ExportVid ikisini de kabul eder.',
      },
      {
        q: 'Gönderim neden video göstermiyor?',
        a: 'Gönderi yalnızca görsel içeriyor olabilir veya indirilebilir bir video bulunamamış olabilir. ExportVid yalnızca var olan dosyaları listeler.',
      },
      {
        q: 'Korumalı bir hesaptan indirebilir miyim?',
        a: 'Hayır. Korumalı hesaplar X’te giriş gerektirir ve ExportVid girişle korunan içeriklere erişmez.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Reddit Video İndir: Sesli MP4',
    metaDescription: 'Reddit videolarını, v.redd.it dahil, sesli MP4 olarak indirin. Bir Reddit bağlantısı yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Reddit Video İndir',
    intro: 'Bir Reddit gönderi bağlantısı yapıştırın ve videoyu sesiyle indirin; v.redd.it üzerinde barındırılan videolar dahil.',
    about: [
      'Reddit video ve sesi ayrı dosyalar olarak saklar. ExportVid bunları doğrudan akış kopyasıyla tek bir MP4’te birleştirir; böylece kalite aynı kalır ve ses dahil olur.',
      'Yalnızca herkese açık subreddit’lerdeki ve gönderilerdeki videolar indirilebilir. Karantinadaki, gizli veya girişle erişilen subreddit’ler indirilemez.',
    ],
    supportedContentTypes: [
      { label: 'Reddit videoları', description: 'v.redd.it üzerinde barındırılan videolar.' },
      { label: 'Reddit GIF’leri', description: 'Reddit’in kısa video klipleri olarak sunduğu döngülü gönderiler.' },
    ],
    formats: ['Video ve sesli MP4, gerektiğinde ayrı dosyalardan birleştirilerek'],
    faqs: [
      {
        q: 'Reddit videosu sesli nasıl indirilir?',
        a: 'Gönderi bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin. ExportVid video ve sesi sizin için tek dosyada birleştirir.',
      },
      {
        q: 'Reddit indirmesi neden biraz daha uzun sürüyor?',
        a: 'Reddit video ve sesi iki dosyada tutar. ExportVid’in bunları birleştirmek için kısa bir adıma ihtiyacı vardır; ikisini de yeniden kodlamaz.',
      },
      {
        q: 'Gizli veya karantinadaki subreddit’lerden indirebilir miyim?',
        a: 'Hayır. Yalnızca herkese açık subreddit’lerdeki gönderiler desteklenir.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Pinterest Video İndir: Video Pinleri MP4',
    metaDescription: 'Pinterest video pinlerini MP4 indirin. pinterest.com veya pin.it bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Pinterest Video İndir',
    intro: 'Bir Pinterest video pini bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: [
      'ExportVid, pinterest.com/pin bağlantılarını ve kısa pin.it bağlantılarını kabul eder ve Pinterest’in o pin için sunduğu video dosyasını bulur.',
      'Pinterest genellikle video başına tek bir ana çözünürlük sunar; bu yüzden çoğunlukla Pinterest’in sağladığıyla eşleşen tek bir MP4 görürsünüz.',
    ],
    supportedContentTypes: [{ label: 'Video pinleri', description: 'Video içeren pinler.' }],
    formats: ['Video ve sesli MP4, Pinterest’in pin için sunduğu çözünürlükte'],
    faqs: [
      {
        q: 'Pinterest videosu nasıl indirilir?',
        a: 'Pin bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      { q: 'Görsel pinlerini indirebilir miyim?', a: 'Henüz hayır. ExportVid, video içeren Pinterest pinlerini destekler.' },
      { q: 'pin.it bağlantıları çalışıyor mu?', a: 'Evet. Kısa pin.it bağlantıları doğrudan çalışır.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Snapchat Spotlight İndir: Videoları MP4',
    metaDescription: 'Snapchat Spotlight videolarını MP4 indirin. snapchat.com/spotlight bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Snapchat Spotlight İndir',
    intro: 'Bir Snapchat Spotlight bağlantısı yapıştırın ve videoyu MP4 olarak indirin.',
    about: [
      'ExportVid snapchat.com/spotlight bağlantılarını kabul eder ve Snapchat’in o Spotlight için sunduğu video dosyasını indirir.',
      'Spotlight videoları tek bir MP4 olarak gelir; bu yüzden tek bir indirme seçeneği görürsünüz.',
    ],
    supportedContentTypes: [{ label: 'Spotlight videoları', description: 'Snapchat Spotlight’ta paylaşılan videolar.' }],
    formats: ['Video ve sesli MP4, Snapchat’in sunduğu şekliyle'],
    faqs: [
      {
        q: 'Snapchat Spotlight videosu nasıl indirilir?',
        a: 'Spotlight bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      { q: 'Snapchat hikâyelerini indirebilir miyim?', a: 'Henüz hayır. ExportVid Spotlight videolarını destekler.' },
      { q: 'Gizli snap’leri indirebilir miyim?', a: 'Hayır. ExportVid yalnızca herkesin görebildiği içeriklerle çalışır.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Twitch Klip İndir: Klipleri MP4 Olarak Kaydet',
    metaDescription: 'Twitch kliplerini MP4 indirin. clips.twitch.tv bağlantısını yapıştırın ve klibi ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Twitch Klip İndir',
    intro: 'Bir Twitch klip bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: [
      'ExportVid, clips.twitch.tv bağlantılarını ve twitch.tv/kanal/clip bağlantılarını kabul eder.',
      'Twitch her klibi oluşturulduğu kalitede sunar ve ExportVid bu kaliteyi olduğu gibi gösterir.',
    ],
    supportedContentTypes: [{ label: 'Twitch klipleri', description: 'Herhangi bir kanaldan klipler.' }],
    formats: ['Video ve sesli MP4, Twitch’in klip için sunduğu çözünürlükte'],
    faqs: [
      {
        q: 'Twitch klibi nasıl indirilir?',
        a: 'Klip bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      { q: 'Tam yayınları veya VOD’ları indirebilir miyim?', a: 'Hayır. ExportVid yalnızca klipleri destekler.' },
      { q: 'Hangi Twitch bağlantıları çalışıyor?', a: 'clips.twitch.tv ile başlayan bağlantılar ve twitch.tv/kanal/clip bağlantıları.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'LinkedIn Video İndir: MP4 Olarak Kaydet',
    metaDescription: 'LinkedIn gönderilerindeki videoları MP4 indirin. linkedin.com/posts bağlantısını yapıştırın ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'LinkedIn Video İndir',
    intro: 'Bir LinkedIn gönderi bağlantısı yapıştırın ve videoyu MP4 olarak indirin.',
    about: [
      'ExportVid, giriş yapmadan görülebilen gönderiler için linkedin.com/posts bağlantılarını kabul eder.',
      'LinkedIn her videoyu tek bir MP4 olarak sunar; bu yüzden tek bir indirme seçeneği görürsünüz.',
    ],
    supportedContentTypes: [{ label: 'Video gönderileri', description: 'Video içeren gönderiler.' }],
    formats: ['Video ve sesli MP4, LinkedIn’in sunduğu şekliyle'],
    faqs: [
      {
        q: 'LinkedIn videosu nasıl indirilir?',
        a: 'Gönderi bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      {
        q: 'Bağlantım neden içeriğin gizli olduğunu söylüyor?',
        a: 'Gönderi yalnızca giriş yapmış LinkedIn üyelerine görünür ve ExportVid yalnızca herkesin görebildiği gönderilere erişebilir.',
      },
      { q: 'LinkedIn Learning kurslarını indirebilir miyim?', a: 'Hayır. Kurs içeriği hesap gerektirir ve desteklenmez.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Tumblr Video İndir: MP4 Olarak Kaydet',
    metaDescription: 'Tumblr gönderilerindeki videoları MP4 indirin. Herhangi bir Tumblr blogundaki gönderinin bağlantısını yapıştırın ve videoyu ücretsiz kaydedin.',
    h1: 'Tumblr Video İndir',
    intro: 'Bir Tumblr video gönderisinin bağlantısını yapıştırın ve MP4 olarak indirin.',
    about: [
      'ExportVid, tumblr.com üzerindeki ve herhangi bir blogadi.tumblr.com adresindeki gönderilerin bağlantılarını kabul eder.',
      'Yalnızca herkesin görebildiği bloglardaki ve gönderilerdeki videolar indirilebilir.',
    ],
    supportedContentTypes: [{ label: 'Video gönderileri', description: 'Video içeren Tumblr gönderileri.' }],
    formats: ['Video ve sesli MP4, Tumblr’ın sunduğu şekliyle'],
    faqs: [
      {
        q: 'Tumblr videosu nasıl indirilir?',
        a: 'Gönderi bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin.',
      },
      { q: 'Blog alt alan adları çalışıyor mu?', a: 'Evet. blogadi.tumblr.com/post/... gibi bağlantılar çalışır.' },
      { q: 'Gizli bir bloğdan indirebilir miyim?', a: 'Hayır. Giriş gerektiren bloglar desteklenmez.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Vimeo Video İndir: MP4 Olarak Kaydet',
    metaDescription: 'Vimeo videolarını MP4 indirin. vimeo.com bağlantısını yapıştırın, kaliteyi seçin ve videoyu ücretsiz olarak cihazınıza kaydedin.',
    h1: 'Vimeo Video İndir',
    intro: 'Bir Vimeo video bağlantısı yapıştırın ve MP4 olarak indirin.',
    about: [
      'ExportVid, vimeo.com bağlantılarını ve player.vimeo.com gömme bağlantılarını kabul eder.',
      'Sahibi tarafından gizli, parola korumalı veya belirli sitelerle sınırlı yapılmış videolar indirilemez.',
    ],
    supportedContentTypes: [{ label: 'Vimeo videoları', description: 'Giriş yapmadan izleyebildiğiniz videolar.' }],
    formats: ['Video ve sesli MP4, Vimeo’nun video için sunduğu tüm çözünürlüklerde'],
    faqs: [
      {
        q: 'Vimeo videosu nasıl indirilir?',
        a: 'Video bağlantısını kopyalayın, yukarıdaki kutuya yapıştırın ve İndir’i seçin. Ardından bir kalite seçin.',
      },
      {
        q: 'Vimeo bağlantımı neden indiremiyorum?',
        a: 'Video büyük olasılıkla gizli, parola korumalı veya belirli alan adlarıyla sınırlı. ExportVid yalnızca herkesin izleyebildiği videolara erişebilir.',
      },
      { q: 'Gömme bağlantıları çalışıyor mu?', a: 'Evet. player.vimeo.com bağlantıları çalışır.' },
    ],
  },
};
