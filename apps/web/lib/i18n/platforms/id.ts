import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'tempel di kotak di atas, lalu pilih Download';

export const id: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Download Video YouTube: YouTube ke MP4',
    metaDescription:
      'Download video dan Shorts YouTube ke MP4 secara gratis. Tempel tautan youtube.com atau youtu.be, pilih kualitas, dan simpan video ke perangkat Anda.',
    h1: 'Download Video YouTube',
    intro: 'Tempel tautan YouTube dan download video atau Short-nya sebagai MP4 dalam kualitas terbaik yang tersedia.',
    about: [
      'ExportVid menerima tautan lengkap youtube.com/watch, tautan pendek youtu.be, dan tautan youtube.com/shorts.',
      'YouTube biasanya menyediakan beberapa resolusi untuk tiap video. ExportVid menampilkan semuanya, hingga kualitas tertinggi dari unggahan tersebut. Resolusi tinggi menyimpan video dan audio secara terpisah, jadi ExportVid menggabungkannya menjadi satu MP4 tanpa encode ulang.',
    ],
    supportedContentTypes: [
      { label: 'Video YouTube', description: 'Unggahan biasa dari channel mana pun.' },
      { label: 'YouTube Shorts', description: 'Video vertikal pendek dari feed Shorts.' },
    ],
    formats: ['MP4 dengan video dan audio, dalam semua resolusi yang disediakan YouTube untuk video tersebut'],
    faqs: [
      {
        q: 'Bagaimana cara download video YouTube?',
        a: `Salin tautan video dari YouTube, ${paste}. Pilih kualitas dari daftar dan simpan file-nya.`,
      },
      {
        q: 'Bagaimana cara mengubah YouTube ke MP4?',
        a: 'Tempel tautan video di kotak di atas, lalu pilih Download. ExportVid menyimpan video sebagai file MP4, jadi tidak ada lagi yang perlu dikonversi.',
      },
      {
        q: 'Bisakah saya download YouTube Shorts?',
        a: 'Bisa. Tempel tautan Short dan ExportVid akan mengenalinya secara otomatis. Halaman download YouTube Shorts punya penjelasan lebih lengkap.',
      },
      {
        q: 'Apakah tautan youtu.be berfungsi?',
        a: 'Ya. Tautan pendek youtu.be maupun tautan lengkap youtube.com sama-sama berfungsi.',
      },
      {
        q: 'Bisakah saya download video privat atau khusus member?',
        a: 'Tidak. Video privat dan khusus member memerlukan login, dan ExportVid tidak pernah mengakses konten yang dilindungi login.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Download YouTube Shorts ke MP4',
    metaDescription: 'Download YouTube Shorts ke MP4 secara gratis. Tempel tautan youtube.com/shorts, pilih kualitas, dan simpan video ke perangkat Anda.',
    h1: 'Download YouTube Shorts',
    intro: 'Tempel tautan YouTube Short dan download sebagai MP4.',
    about: [
      'ExportVid mengenali tautan youtube.com/shorts dan menemukan file video yang disajikan YouTube untuk Short tersebut. Tautan youtube.com/watch biasa juga berfungsi.',
      'Daftar menampilkan semua kualitas yang disediakan YouTube untuk Short itu, sehingga Anda bisa memilih yang paling cocok untuk perangkat Anda.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Video vertikal pendek dari feed Shorts.' }],
    formats: ['MP4 dengan video dan audio, dalam semua resolusi yang disediakan YouTube untuk Short'],
    faqs: [
      {
        q: 'Bagaimana cara download YouTube Short?',
        a: 'Buka Short, salin tautannya, tempel di kotak di atas, lalu pilih Download. Setelah itu pilih kualitas dan simpan file-nya.',
      },
      {
        q: 'Apakah hasil download-nya ada suaranya?',
        a: 'Ada. ExportVid mempertahankan audio dan menggabungkannya dengan video saat YouTube menyajikan keduanya sebagai file terpisah.',
      },
      {
        q: 'Bisakah saya juga download video YouTube yang lebih panjang?',
        a: 'Bisa. Downloader video YouTube berfungsi untuk tautan video biasa.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Download Video Facebook: Video dan Reels ke MP4',
    metaDescription:
      'Download video dan Reels Facebook ke MP4 secara gratis. Tempel tautan facebook.com atau fb.watch, pilih kualitas, dan simpan ke perangkat Anda.',
    h1: 'Download Video Facebook',
    intro: 'Tempel tautan video Facebook, termasuk tautan pendek fb.watch, dan download MP4-nya.',
    about: [
      'Facebook membagikan video lewat tautan tonton biasa, tautan pendek fb.watch, dan tautan Reels. ExportVid memperlakukan ketiganya dengan cara yang sama.',
      'Video dari halaman, profil, dan grup publik bisa di-download. Video di dalam grup privat atau tertutup tidak bisa.',
    ],
    supportedContentTypes: [
      { label: 'Video Facebook', description: 'Postingan video di halaman, profil, dan grup publik.' },
      { label: 'Reels Facebook', description: 'Video vertikal pendek yang diposting sebagai Reels.' },
    ],
    formats: ['MP4 dengan video dan audio, dalam semua resolusi yang disediakan Facebook untuk video tersebut'],
    faqs: [
      {
        q: 'Bagaimana cara download video Facebook?',
        a: `Salin tautan video, ${paste}. Lalu pilih kualitas dan simpan file-nya.`,
      },
      {
        q: 'Apakah tautan fb.watch berfungsi?',
        a: 'Ya. Tautan pendek fb.watch berfungsi langsung.',
      },
      {
        q: 'Bisakah saya download video dari grup Facebook privat?',
        a: 'Tidak. ExportVid hanya bekerja dengan konten yang bisa dilihat siapa saja dan tidak pernah melewati pengaturan privasi.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Download Reels Facebook ke MP4',
    metaDescription: 'Download Reels Facebook ke MP4 secara gratis. Tempel tautan Reel, pilih kualitas, dan simpan video ke perangkat Anda.',
    h1: 'Download Reels Facebook',
    intro: 'Tempel tautan Reel Facebook dan download sebagai MP4.',
    about: ['Reels Facebook menggunakan tautan dengan /reel/. ExportVid mengenalinya secara otomatis dan menemukan file videonya untuk Anda.'],
    supportedContentTypes: [{ label: 'Reels Facebook', description: 'Reels dari halaman dan profil Facebook.' }],
    formats: ['MP4 dengan video dan audio, dalam resolusi yang disediakan Facebook'],
    faqs: [
      {
        q: 'Bagaimana cara download Reel Facebook?',
        a: 'Salin tautan Reel, tempel di kotak di atas, lalu pilih Download.',
      },
      {
        q: 'Tautannya membuka aplikasi Facebook. Apa yang harus saya tempel?',
        a: 'Tempel tautan web yang diawali facebook.com/reel atau fb.watch, bukan tautan yang dibagikan dari aplikasi. Keduanya mengarah ke video yang sama.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Download Video Instagram: Reels, Video, Stories',
    metaDescription:
      'Download Reels, video, dan Stories Instagram sebagai MP4 secara gratis. Foto dan carousel juga bisa. Tempel tautan Instagram dan ExportVid menemukan filenya.',
    h1: 'Download Video Instagram',
    intro: 'Tempel tautan Reel, postingan video, atau Story Instagram dan download sebagai MP4. Postingan foto dan carousel juga bisa.',
    about: [
      'Instagram memakai tautan yang mirip untuk jenis konten yang berbeda. ExportVid membedakannya: Reels (/reel/), postingan feed (/p/), Stories, dan profil.',
      'Untuk carousel, setiap foto dan video ditampilkan tersendiri, jadi Anda bisa download hanya yang Anda inginkan.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Video vertikal pendek yang diposting sebagai Reels.' },
      { label: 'Postingan video', description: 'Video yang dibagikan sebagai postingan feed biasa.' },
      { label: 'Stories', description: 'Stories yang masih aktif.' },
      { label: 'Carousel', description: 'Postingan dengan beberapa foto atau video, ditampilkan satu per satu.' },
      { label: 'Foto', description: 'Postingan feed dengan satu gambar.' },
      { label: 'Foto profil', description: 'Foto profil sebuah akun.' },
    ],
    faqs: [
      {
        q: 'Bagaimana cara download video Instagram?',
        a: 'Salin tautan Reel atau postingan dari Instagram, tempel di kotak di atas, lalu pilih Download. Setelah itu pilih file yang Anda inginkan.',
      },
      {
        q: 'Bisakah saya download dari akun Instagram privat?',
        a: 'Tidak. ExportVid hanya bekerja dengan postingan yang bisa dilihat siapa saja. ExportVid tidak pernah mengakses akun privat.',
      },
      {
        q: 'Bagaimana cara download Story Instagram?',
        a: 'Buka Story, salin tautannya, lalu tempel di kotak di atas. Story bisa di-download selama masih aktif dan berasal dari akun yang bisa dilihat siapa saja.',
      },
      {
        q: 'Bisakah saya download semua video dan foto dalam carousel?',
        a: 'Bisa. Setiap video atau foto dalam carousel muncul di daftar dengan tombol download sendiri.',
      },
      {
        q: 'Bisakah saya download Sorotan Instagram?',
        a: 'Bisa, jika Instagram menampilkannya di profil yang bisa dilihat siapa saja. Item Sorotan ditangani sama seperti Stories.',
      },
    ],
    formats: ['MP4 untuk video, dengan audio', 'JPEG untuk foto, gambar carousel, dan foto profil'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Download Reels Instagram ke MP4',
    metaDescription: 'Download Reels Instagram ke MP4 dalam kualitas terbaik yang tersedia. Tempel tautan Reel dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Reels Instagram',
    intro: 'Tempel tautan Reel Instagram dan download sebagai MP4.',
    about: [
      'Reels adalah video vertikal pendek di Instagram. ExportVid mengenali tautan dengan /reel/ dan /reels/ dan menemukan file videonya secara langsung.',
      'Kualitas yang ditampilkan adalah kualitas yang disediakan Instagram untuk Reel tersebut. ExportVid tidak pernah menaikkan resolusi atau mengganti labelnya.',
    ],
    supportedContentTypes: [{ label: 'Reels Instagram', description: 'Reels dari akun mana pun, termasuk profil bisnis dan kreator.' }],
    formats: ['MP4 dengan video dan audio, dalam resolusi yang disediakan Instagram'],
    faqs: [
      {
        q: 'Bagaimana cara download Reel Instagram?',
        a: 'Buka Reel, salin tautannya, tempel di kotak di atas, lalu pilih Download.',
      },
      {
        q: 'Tautan Reel seperti apa yang berfungsi?',
        a: 'Tautan instagram.com/reel/ atau instagram.com/reels/ apa pun, termasuk Reel yang dibagikan sebagai tautan postingan biasa.',
      },
      {
        q: 'Apakah hasil download-nya ada audionya?',
        a: 'Ada. Kebanyakan Reel membawa audio dan video sekaligus, dan ExportVid mempertahankan keduanya.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Download TikTok Tanpa Watermark ke MP4',
    metaDescription:
      'Download video TikTok ke MP4 tanpa watermark jika TikTok menyediakan file yang bersih. Tempel tautan TikTok dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video TikTok',
    intro: 'Tempel tautan TikTok dan simpan videonya sebagai MP4 dalam kualitas terbaik yang disediakan TikTok, tanpa watermark jika ada file yang bersih.',
    about: [
      'ExportVid menerima tautan lengkap seperti tiktok.com/@username/video/123 dan tautan pendek vm.tiktok.com atau vt.tiktok.com.',
      'TikTok biasanya menyajikan satu kualitas per video, bukan beberapa pilihan resolusi, jadi Anda akan sering melihat satu MP4 saja. Itu adalah file asli dari TikTok. ExportVid tidak mengarang opsi tambahan.',
    ],
    supportedContentTypes: [{ label: 'Video TikTok', description: 'Video dari tautan TikTok biasa atau pendek.' }],
    formats: ['MP4 dengan video dan audio, tanpa watermark jika TikTok menyediakan file yang bersih', 'MP4 dalam resolusi yang disajikan TikTok untuk video tersebut'],
    faqs: [
      {
        q: 'Bagaimana cara download video TikTok tanpa watermark?',
        a: 'Tempel tautan TikTok di kotak di atas, lalu pilih Download. ExportVid memilih versi tanpa watermark setiap kali TikTok menyediakannya.',
      },
      {
        q: 'Kenapa hasil download saya masih ada watermark?',
        a: 'Beberapa video hanya ada dengan watermark. Jika begitu, ExportVid tidak bisa menghapusnya dan memberi Anda file seperti yang disajikan TikTok.',
      },
      {
        q: 'Kenapa hanya ada satu pilihan kualitas?',
        a: 'TikTok sering hanya menyajikan satu versi untuk setiap video. ExportVid menampilkan apa yang ada dan tidak pernah menambahkan kualitas yang tidak tersedia.',
      },
      {
        q: 'Bisakah saya download video dari akun TikTok privat?',
        a: 'Tidak. Akun privat dan video yang dilindungi login tidak didukung.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Download Video X (Twitter) ke MP4',
    metaDescription: 'Download video dari postingan X (Twitter) ke MP4. Tempel tautan x.com atau twitter.com dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video X (Twitter)',
    intro: 'Tempel tautan postingan x.com atau twitter.com dan download videonya.',
    about: [
      'X menyediakan beberapa resolusi untuk tiap video, biasanya hingga 1080p. ExportVid menampilkan semuanya, lengkap dengan ukuran file di sebelahnya.',
      'Hanya video dari postingan yang bisa dilihat siapa saja yang dapat di-download. Postingan dari akun yang dilindungi tidak bisa.',
    ],
    supportedContentTypes: [{ label: 'Video X', description: 'Video yang terlampir pada postingan di x.com atau twitter.com.' }],
    formats: ['MP4 dengan video dan audio, dalam semua resolusi yang disediakan postingan (biasanya hingga 1080p)'],
    faqs: [
      {
        q: 'Bagaimana cara download video dari X atau Twitter?',
        a: 'Salin tautan postingan, tempel di kotak di atas, lalu pilih Download. Pilih resolusi dan simpan file-nya.',
      },
      {
        q: 'Apakah tautan x.com dan twitter.com sama-sama berfungsi?',
        a: 'Ya. Kedua domain mengarah ke platform yang sama, dan ExportVid menerima keduanya.',
      },
      {
        q: 'Kenapa postingan saya tidak menampilkan video?',
        a: 'Postingan itu mungkin hanya berisi gambar, atau tidak ada video yang bisa di-download. ExportVid hanya menampilkan file yang benar-benar ada.',
      },
      {
        q: 'Bisakah saya download dari akun yang dilindungi?',
        a: 'Tidak. Akun yang dilindungi memerlukan login di X, dan ExportVid tidak mengakses konten yang dilindungi login.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Download Video Reddit dengan Suara ke MP4',
    metaDescription: 'Download video Reddit, termasuk dari v.redd.it, ke MP4 dengan suara. Tempel tautan Reddit dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video Reddit',
    intro: 'Tempel tautan postingan Reddit dan download videonya lengkap dengan suara, termasuk video yang dihosting di v.redd.it.',
    about: [
      'Reddit menyimpan video dan audio sebagai file terpisah. ExportVid menggabungkannya menjadi satu MP4 dengan salinan stream langsung, jadi kualitas tidak berubah dan suaranya ikut tersimpan.',
      'Hanya video dari subreddit dan postingan yang terbuka yang bisa di-download. Subreddit yang dikarantina, privat, atau wajib login tidak bisa.',
    ],
    supportedContentTypes: [
      { label: 'Video Reddit', description: 'Video yang dihosting di v.redd.it.' },
      { label: 'GIF Reddit', description: 'Postingan berulang yang disajikan Reddit sebagai klip video pendek.' },
    ],
    formats: ['MP4 dengan video dan audio, digabung dari file terpisah bila diperlukan'],
    faqs: [
      {
        q: 'Bagaimana cara download video Reddit dengan suara?',
        a: 'Salin tautan postingan, tempel di kotak di atas, lalu pilih Download. ExportVid menggabungkan video dan audio menjadi satu file untuk Anda.',
      },
      {
        q: 'Kenapa download Reddit kadang butuh waktu sedikit lebih lama?',
        a: 'Reddit menyimpan video dan audio dalam dua file. ExportVid butuh langkah singkat untuk menggabungkannya, tanpa encode ulang salah satunya.',
      },
      {
        q: 'Bisakah saya download dari subreddit privat atau yang dikarantina?',
        a: 'Tidak. Hanya postingan dari subreddit yang terbuka yang didukung.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Download Video Pinterest: Pin Video ke MP4',
    metaDescription: 'Download pin video Pinterest ke MP4. Tempel tautan pinterest.com atau pin.it dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video Pinterest',
    intro: 'Tempel tautan pin video Pinterest dan download sebagai MP4.',
    about: [
      'ExportVid menerima tautan pinterest.com/pin dan tautan pendek pin.it, lalu menemukan file video yang disajikan Pinterest untuk pin tersebut.',
      'Pinterest biasanya menyediakan satu resolusi utama per video, jadi Anda biasanya melihat satu MP4 yang sesuai dengan yang disediakan Pinterest.',
    ],
    supportedContentTypes: [{ label: 'Pin video', description: 'Pin yang berisi video.' }],
    formats: ['MP4 dengan video dan audio, dalam resolusi yang disediakan Pinterest untuk pin tersebut'],
    faqs: [
      {
        q: 'Bagaimana cara download video Pinterest?',
        a: 'Salin tautan pin, tempel di kotak di atas, lalu pilih Download.',
      },
      { q: 'Bisakah saya download pin gambar?', a: 'Belum. ExportVid mendukung pin Pinterest yang berisi video.' },
      { q: 'Apakah tautan pin.it berfungsi?', a: 'Ya. Tautan pendek pin.it berfungsi langsung.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Download Snapchat Spotlight: Video ke MP4',
    metaDescription: 'Download video Snapchat Spotlight ke MP4. Tempel tautan snapchat.com/spotlight dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Snapchat Spotlight',
    intro: 'Tempel tautan Snapchat Spotlight dan download videonya sebagai MP4.',
    about: [
      'ExportVid menerima tautan snapchat.com/spotlight dan mendownload file video yang disajikan Snapchat untuk Spotlight tersebut.',
      'Video Spotlight datang sebagai satu MP4, jadi Anda hanya melihat satu pilihan download.',
    ],
    supportedContentTypes: [{ label: 'Video Spotlight', description: 'Video yang dibagikan di Snapchat Spotlight.' }],
    formats: ['MP4 dengan video dan audio, seperti yang disajikan Snapchat'],
    faqs: [
      {
        q: 'Bagaimana cara download video Snapchat Spotlight?',
        a: 'Salin tautan Spotlight, tempel di kotak di atas, lalu pilih Download.',
      },
      { q: 'Bisakah saya download Stories Snapchat?', a: 'Belum. ExportVid mendukung video Spotlight.' },
      { q: 'Bisakah saya download snap privat?', a: 'Tidak. ExportVid hanya bekerja dengan konten yang bisa dilihat siapa saja.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Download Klip Twitch ke MP4',
    metaDescription: 'Download klip Twitch ke MP4. Tempel tautan clips.twitch.tv dan simpan klip ke perangkat Anda secara gratis.',
    h1: 'Download Klip Twitch',
    intro: 'Tempel tautan klip Twitch dan download sebagai MP4.',
    about: [
      'ExportVid menerima tautan clips.twitch.tv dan tautan twitch.tv/channel/clip.',
      'Twitch menyajikan tiap klip dalam kualitas saat klip itu dibuat, dan ExportVid menampilkan kualitas tersebut apa adanya.',
    ],
    supportedContentTypes: [{ label: 'Klip Twitch', description: 'Klip dari channel mana pun.' }],
    formats: ['MP4 dengan video dan audio, dalam resolusi yang disediakan Twitch untuk klip'],
    faqs: [
      {
        q: 'Bagaimana cara download klip Twitch?',
        a: 'Salin tautan klip, tempel di kotak di atas, lalu pilih Download.',
      },
      { q: 'Bisakah saya download siaran penuh atau VOD?', a: 'Tidak. ExportVid hanya mendukung klip.' },
      { q: 'Tautan Twitch apa yang berfungsi?', a: 'Tautan yang diawali clips.twitch.tv dan tautan twitch.tv/channel/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Download Video LinkedIn ke MP4',
    metaDescription: 'Download video dari postingan LinkedIn ke MP4. Tempel tautan linkedin.com/posts dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video LinkedIn',
    intro: 'Tempel tautan postingan LinkedIn dan download videonya sebagai MP4.',
    about: [
      'ExportVid menerima tautan linkedin.com/posts untuk postingan yang bisa dilihat tanpa login.',
      'LinkedIn menyajikan tiap video sebagai satu MP4, jadi Anda hanya melihat satu pilihan download.',
    ],
    supportedContentTypes: [{ label: 'Postingan video', description: 'Postingan yang berisi video.' }],
    formats: ['MP4 dengan video dan audio, seperti yang disajikan LinkedIn'],
    faqs: [
      {
        q: 'Bagaimana cara download video LinkedIn?',
        a: 'Salin tautan postingan, tempel di kotak di atas, lalu pilih Download.',
      },
      {
        q: 'Kenapa tautan saya dibilang konten privat?',
        a: 'Postingan itu hanya terlihat oleh anggota LinkedIn yang sudah login, dan ExportVid hanya bisa mengakses postingan yang bisa dilihat siapa saja.',
      },
      { q: 'Bisakah saya download kursus LinkedIn Learning?', a: 'Tidak. Konten kursus memerlukan akun dan tidak didukung.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Download Video Tumblr ke MP4',
    metaDescription: 'Download video dari postingan Tumblr ke MP4. Tempel tautan postingan dari blog Tumblr mana pun dan simpan videonya secara gratis.',
    h1: 'Download Video Tumblr',
    intro: 'Tempel tautan postingan video Tumblr dan download sebagai MP4.',
    about: [
      'ExportVid menerima tautan ke postingan di tumblr.com dan di alamat namablog.tumblr.com mana pun.',
      'Hanya video dari blog dan postingan yang bisa dilihat siapa saja yang dapat di-download.',
    ],
    supportedContentTypes: [{ label: 'Postingan video', description: 'Postingan Tumblr yang berisi video.' }],
    formats: ['MP4 dengan video dan audio, seperti yang disajikan Tumblr'],
    faqs: [
      {
        q: 'Bagaimana cara download video Tumblr?',
        a: 'Salin tautan postingan, tempel di kotak di atas, lalu pilih Download.',
      },
      { q: 'Apakah subdomain blog berfungsi?', a: 'Ya. Tautan seperti namablog.tumblr.com/post/... berfungsi.' },
      { q: 'Bisakah saya download dari blog privat?', a: 'Tidak. Blog yang mewajibkan login tidak didukung.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Download Video Vimeo ke MP4',
    metaDescription: 'Download video Vimeo ke MP4. Tempel tautan vimeo.com, pilih kualitas, dan simpan video ke perangkat Anda secara gratis.',
    h1: 'Download Video Vimeo',
    intro: 'Tempel tautan video Vimeo dan download sebagai MP4.',
    about: [
      'ExportVid menerima tautan vimeo.com dan tautan embed player.vimeo.com.',
      'Video yang oleh pemiliknya dijadikan privat, dilindungi kata sandi, atau dibatasi untuk situs tertentu tidak bisa di-download.',
    ],
    supportedContentTypes: [{ label: 'Video Vimeo', description: 'Video yang bisa Anda tonton tanpa login.' }],
    formats: ['MP4 dengan video dan audio, dalam semua resolusi yang disediakan Vimeo untuk video tersebut'],
    faqs: [
      {
        q: 'Bagaimana cara download video Vimeo?',
        a: 'Salin tautan video, tempel di kotak di atas, lalu pilih Download. Setelah itu pilih kualitas.',
      },
      {
        q: 'Kenapa saya tidak bisa download tautan Vimeo saya?',
        a: 'Video itu kemungkinan privat, dilindungi kata sandi, atau dibatasi untuk domain tertentu. ExportVid hanya bisa mengakses video yang bisa ditonton siapa saja.',
      },
      { q: 'Apakah tautan embed berfungsi?', a: 'Ya. Tautan player.vimeo.com berfungsi.' },
    ],
  },
};
