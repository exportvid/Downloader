import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'pégalo en el cuadro de arriba y pulsa Descargar';

export const es: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Descargar videos de YouTube: de YouTube a MP4',
    metaDescription:
      'Descarga videos y Shorts de YouTube en MP4 gratis. Pega un enlace de youtube.com o youtu.be, elige la calidad y guarda el video en tu dispositivo.',
    h1: 'Descargar videos de YouTube',
    intro: 'Pega un enlace de YouTube y descarga el video o el Short en MP4, en la mejor calidad disponible.',
    about: [
      'ExportVid acepta enlaces completos de youtube.com/watch, enlaces cortos de youtu.be y enlaces de youtube.com/shorts.',
      'YouTube suele ofrecer varias resoluciones por video. ExportVid muestra todas, hasta la calidad más alta que tenga la subida. Las resoluciones altas guardan el video y el audio por separado, así que ExportVid los une en un solo MP4 sin recodificar.',
    ],
    supportedContentTypes: [
      { label: 'Videos de YouTube', description: 'Subidas normales de cualquier canal.' },
      { label: 'YouTube Shorts', description: 'Videos verticales cortos del feed de Shorts.' },
    ],
    formats: ['MP4 con video y audio, en todas las resoluciones que YouTube ofrece para el video'],
    faqs: [
      {
        q: '¿Cómo descargo un video de YouTube?',
        a: `Copia el enlace del video en YouTube, ${paste}. Elige una calidad de la lista y guarda el archivo.`,
      },
      {
        q: '¿Cómo convierto un video de YouTube a MP4?',
        a: 'Pega el enlace del video en el cuadro de arriba y pulsa Descargar. ExportVid guarda el video como archivo MP4, así que no hay nada más que convertir.',
      },
      {
        q: '¿Puedo descargar YouTube Shorts?',
        a: 'Sí. Pega el enlace del Short y ExportVid lo reconoce automáticamente. La página de descarga de YouTube Shorts tiene más detalles.',
      },
      {
        q: '¿Funcionan los enlaces de youtu.be?',
        a: 'Sí. Funcionan tanto los enlaces cortos de youtu.be como los enlaces completos de youtube.com.',
      },
      {
        q: '¿Puedo descargar videos privados o solo para miembros?',
        a: 'No. Los videos privados y los exclusivos para miembros requieren iniciar sesión, y ExportVid nunca accede a contenido protegido con inicio de sesión.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Descargar YouTube Shorts: guarda Shorts en MP4',
    metaDescription: 'Descarga YouTube Shorts en MP4 gratis. Pega un enlace de youtube.com/shorts, elige la calidad y guarda el video en tu dispositivo.',
    h1: 'Descargar YouTube Shorts',
    intro: 'Pega el enlace de un YouTube Short y descárgalo en MP4.',
    about: [
      'ExportVid reconoce los enlaces de youtube.com/shorts y encuentra el archivo de video que YouTube sirve para ese Short. También funciona un enlace normal de youtube.com/watch.',
      'La lista muestra todas las calidades que YouTube ofrece para el Short, para que elijas la que mejor se adapte a tu dispositivo.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Videos verticales cortos del feed de Shorts.' }],
    formats: ['MP4 con video y audio, en todas las resoluciones que YouTube ofrece para el Short'],
    faqs: [
      {
        q: '¿Cómo descargo un YouTube Short?',
        a: 'Abre el Short, copia su enlace, pégalo en el cuadro de arriba y pulsa Descargar. Después elige una calidad y guarda el archivo.',
      },
      {
        q: '¿La descarga incluye el sonido?',
        a: 'Sí. ExportVid conserva el audio y lo une al video cuando YouTube los sirve como archivos separados.',
      },
      {
        q: '¿También puedo descargar videos más largos de YouTube?',
        a: 'Sí. El descargador de videos de YouTube funciona con cualquier enlace de video normal.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Descargar videos de Facebook: videos y Reels en MP4',
    metaDescription:
      'Descarga videos y Reels de Facebook en MP4 gratis. Pega un enlace de facebook.com o fb.watch, elige la calidad y guárdalo en tu dispositivo.',
    h1: 'Descargar videos de Facebook',
    intro: 'Pega el enlace de un video de Facebook, también los enlaces cortos de fb.watch, y descarga el MP4.',
    about: [
      'Facebook comparte los videos con enlaces de reproducción normales, enlaces cortos de fb.watch y enlaces de Reels. ExportVid trata los tres de la misma manera.',
      'Se pueden descargar videos de páginas, perfiles y grupos públicos. Los videos dentro de grupos privados o cerrados no.',
    ],
    supportedContentTypes: [
      { label: 'Videos de Facebook', description: 'Publicaciones con video en páginas, perfiles y grupos públicos.' },
      { label: 'Reels de Facebook', description: 'Videos verticales cortos publicados como Reels.' },
    ],
    formats: ['MP4 con video y audio, en todas las resoluciones que Facebook ofrece para el video'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Facebook?',
        a: `Copia el enlace del video, ${paste}. Luego elige una calidad y guarda el archivo.`,
      },
      {
        q: '¿Funcionan los enlaces de fb.watch?',
        a: 'Sí. Los enlaces cortos de fb.watch funcionan directamente.',
      },
      {
        q: '¿Puedo descargar videos de un grupo privado de Facebook?',
        a: 'No. ExportVid solo funciona con contenido que cualquiera puede ver y nunca se salta la configuración de privacidad.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Descargar Reels de Facebook: guarda Reels en MP4',
    metaDescription: 'Descarga Reels de Facebook en MP4 gratis. Pega el enlace del Reel, elige la calidad y guarda el video en tu dispositivo.',
    h1: 'Descargar Reels de Facebook',
    intro: 'Pega el enlace de un Reel de Facebook y descárgalo en MP4.',
    about: ['Los Reels de Facebook usan un enlace con /reel/. ExportVid lo reconoce automáticamente y encuentra el archivo de video por ti.'],
    supportedContentTypes: [{ label: 'Reels de Facebook', description: 'Reels de páginas y perfiles de Facebook.' }],
    formats: ['MP4 con video y audio, en la resolución que ofrece Facebook'],
    faqs: [
      {
        q: '¿Cómo descargo un Reel de Facebook?',
        a: 'Copia el enlace del Reel, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      {
        q: 'El enlace se abre en la app de Facebook. ¿Qué debo pegar?',
        a: 'Pega el enlace web, que empieza por facebook.com/reel o fb.watch, en lugar de un enlace compartido desde la app. Ambos llevan al mismo video.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Descargar de Instagram: Reels, videos y fotos',
    metaDescription:
      'Descarga Reels, videos, fotos, carruseles e historias de Instagram gratis. Pega un enlace de Instagram y ExportVid detecta el tipo de contenido.',
    h1: 'Descargar videos y fotos de Instagram',
    intro: 'Pega un enlace de Instagram de un Reel, una publicación, una foto, un carrusel o una historia. ExportVid detecta el tipo y muestra lo que puedes descargar.',
    about: [
      'Instagram usa enlaces parecidos para tipos de contenido distintos. ExportVid los distingue: Reels (/reel/), publicaciones del feed (/p/), historias y perfiles.',
      'En los carruseles, cada foto y cada video aparece por separado, para que descargues solo el que quieras.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Videos verticales cortos publicados como Reels.' },
      { label: 'Publicaciones con video', description: 'Videos compartidos como publicaciones normales del feed.' },
      { label: 'Fotos', description: 'Publicaciones del feed con una sola imagen.' },
      { label: 'Carruseles', description: 'Publicaciones con varias fotos o videos, listados uno por uno.' },
      { label: 'Historias', description: 'Historias que siguen activas.' },
      { label: 'Fotos de perfil', description: 'La foto de perfil de una cuenta.' },
    ],
    faqs: [
      {
        q: '¿Cómo descargo un video o una foto de Instagram?',
        a: 'Copia el enlace de la publicación en Instagram, pégalo en el cuadro de arriba y pulsa Descargar. Después elige el archivo que quieras.',
      },
      {
        q: '¿Puedo descargar de una cuenta privada de Instagram?',
        a: 'No. ExportVid solo funciona con publicaciones que cualquiera puede ver. Nunca accede a cuentas privadas.',
      },
      {
        q: '¿Cómo descargo una historia de Instagram?',
        a: 'Abre la historia, copia su enlace y pégalo en el cuadro de arriba. Las historias se pueden descargar mientras siguen activas y si son de cuentas que cualquiera puede ver.',
      },
      {
        q: '¿Puedo descargar todas las fotos de un carrusel?',
        a: 'Sí. Cada foto o video del carrusel aparece en la lista con su propio botón de descarga.',
      },
      {
        q: '¿Puedo descargar historias destacadas de Instagram?',
        a: 'Sí, cuando Instagram las muestra en un perfil que cualquiera puede ver. Los elementos de las historias destacadas se tratan igual que las historias.',
      },
    ],
    formats: ['MP4 para videos, con audio', 'JPEG para fotos, imágenes de carruseles y fotos de perfil'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Descargar Reels de Instagram: guarda Reels en MP4',
    metaDescription: 'Descarga Reels de Instagram en MP4 con la mejor calidad disponible. Pega el enlace del Reel y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar Reels de Instagram',
    intro: 'Pega el enlace de un Reel de Instagram y descárgalo en MP4.',
    about: [
      'Los Reels son los videos verticales cortos de Instagram. ExportVid reconoce los enlaces con /reel/ y /reels/ y encuentra el archivo de video directamente.',
      'La calidad que ves es la que Instagram ofrece para ese Reel. ExportVid nunca la aumenta ni la cambia de etiqueta.',
    ],
    supportedContentTypes: [{ label: 'Reels de Instagram', description: 'Reels de cualquier cuenta, incluidos perfiles de empresas y creadores.' }],
    formats: ['MP4 con video y audio, en la resolución que ofrece Instagram'],
    faqs: [
      {
        q: '¿Cómo descargo un Reel de Instagram?',
        a: 'Abre el Reel, copia su enlace, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      {
        q: '¿Qué enlaces de Reels funcionan?',
        a: 'Cualquier enlace de instagram.com/reel/ o instagram.com/reels/, incluidos los Reels compartidos como enlace de publicación normal.',
      },
      {
        q: '¿La descarga incluye el audio?',
        a: 'Sí. La mayoría de los Reels llevan audio y video juntos, y ExportVid conserva ambos.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Descargar TikTok sin marca de agua en MP4',
    metaDescription:
      'Descarga videos de TikTok a MP4 sin marca de agua cuando TikTok ofrece un archivo limpio. Pega el enlace de TikTok y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de TikTok',
    intro: 'Pega un enlace de TikTok y guarda el video en MP4, en la mejor calidad que ofrece TikTok y sin marca de agua cuando existe un archivo limpio.',
    about: [
      'ExportVid acepta enlaces completos como tiktok.com/@usuario/video/123 y enlaces cortos de vm.tiktok.com o vt.tiktok.com.',
      'TikTok normalmente sirve una sola calidad por video en lugar de varias resoluciones, así que lo más habitual es ver un único MP4. Ese es el archivo real que ofrece TikTok. ExportVid no inventa opciones adicionales.',
    ],
    supportedContentTypes: [{ label: 'Videos de TikTok', description: 'Videos a partir de un enlace normal o corto de TikTok.' }],
    formats: ['MP4 con video y audio, sin marca de agua cuando TikTok ofrece un archivo limpio', 'MP4 en la resolución que TikTok sirve para ese video'],
    faqs: [
      {
        q: '¿Cómo descargo un video de TikTok sin marca de agua?',
        a: 'Pega el enlace de TikTok en el cuadro de arriba y pulsa Descargar. ExportVid elige la versión sin marca de agua siempre que TikTok la ofrece.',
      },
      {
        q: '¿Por qué mi descarga sigue teniendo marca de agua?',
        a: 'Algunos videos solo existen con marca de agua. En ese caso, ExportVid no puede quitarla y te da el archivo tal como lo sirve TikTok.',
      },
      {
        q: '¿Por qué solo hay una opción de calidad?',
        a: 'TikTok suele servir una única versión de cada video. ExportVid muestra exactamente lo que existe y nunca añade una calidad que no está.',
      },
      {
        q: '¿Puedo descargar videos de una cuenta privada de TikTok?',
        a: 'No. Las cuentas privadas y los videos protegidos con inicio de sesión no son compatibles.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Descargar videos de X (Twitter) en MP4',
    metaDescription: 'Descarga videos de publicaciones de X (Twitter) en MP4. Pega un enlace de x.com o twitter.com y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de X (Twitter)',
    intro: 'Pega el enlace de una publicación de x.com o twitter.com y descarga el video.',
    about: [
      'X ofrece varias resoluciones por video, normalmente hasta 1080p. ExportVid muestra todas, con el tamaño del archivo al lado.',
      'Solo se pueden descargar videos de publicaciones que cualquiera puede ver. Las publicaciones de cuentas protegidas no.',
    ],
    supportedContentTypes: [{ label: 'Videos de X', description: 'Videos adjuntos a publicaciones de x.com o twitter.com.' }],
    formats: ['MP4 con video y audio, en todas las resoluciones que ofrece la publicación (normalmente hasta 1080p)'],
    faqs: [
      {
        q: '¿Cómo descargo un video de X o Twitter?',
        a: 'Copia el enlace de la publicación, pégalo en el cuadro de arriba y pulsa Descargar. Elige una resolución y guarda el archivo.',
      },
      {
        q: '¿Funcionan tanto los enlaces de x.com como los de twitter.com?',
        a: 'Sí. Los dos dominios llevan a la misma plataforma, y ExportVid acepta cualquiera de ellos.',
      },
      {
        q: '¿Por qué mi publicación no muestra ningún video?',
        a: 'Puede que la publicación solo tenga imágenes o que no se haya encontrado ningún video descargable. ExportVid solo muestra archivos que existen.',
      },
      {
        q: '¿Puedo descargar de una cuenta protegida?',
        a: 'No. Las cuentas protegidas requieren iniciar sesión en X, y ExportVid no accede a contenido protegido con inicio de sesión.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Descargar videos de Reddit con sonido en MP4',
    metaDescription: 'Descarga videos de Reddit, incluidos los de v.redd.it, en MP4 con sonido. Pega un enlace de Reddit y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de Reddit',
    intro: 'Pega el enlace de una publicación de Reddit y descarga el video con sonido, incluidos los videos alojados en v.redd.it.',
    about: [
      'Reddit guarda el video y el audio como archivos separados. ExportVid los une en un solo MP4 con una copia directa de los flujos, así que la calidad no cambia y el sonido queda incluido.',
      'Solo se pueden descargar videos de subreddits y publicaciones abiertos. Los subreddits en cuarentena, privados o que exigen iniciar sesión no.',
    ],
    supportedContentTypes: [
      { label: 'Videos de Reddit', description: 'Videos alojados en v.redd.it.' },
      { label: 'GIF de Reddit', description: 'Publicaciones en bucle que Reddit sirve como clips de video cortos.' },
    ],
    formats: ['MP4 con video y audio, unidos a partir de archivos separados cuando hace falta'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Reddit con sonido?',
        a: 'Copia el enlace de la publicación, pégalo en el cuadro de arriba y pulsa Descargar. ExportVid une el video y el audio en un solo archivo por ti.',
      },
      {
        q: '¿Por qué una descarga de Reddit tarda un poco más?',
        a: 'Reddit guarda el video y el audio en dos archivos. ExportVid necesita un breve paso para unirlos, sin recodificar ninguno de los dos.',
      },
      {
        q: '¿Puedo descargar de subreddits privados o en cuarentena?',
        a: 'No. Solo son compatibles las publicaciones de subreddits abiertos.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Descargar videos de Pinterest: pines de video en MP4',
    metaDescription: 'Descarga pines de video de Pinterest en MP4. Pega un enlace de pinterest.com o pin.it y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de Pinterest',
    intro: 'Pega el enlace de un pin de video de Pinterest y descárgalo en MP4.',
    about: [
      'ExportVid acepta enlaces de pinterest.com/pin y enlaces cortos de pin.it, y encuentra el archivo de video que Pinterest sirve para ese pin.',
      'Pinterest suele ofrecer una sola resolución principal por video, así que normalmente verás un único MP4 que coincide con lo que ofrece Pinterest.',
    ],
    supportedContentTypes: [{ label: 'Pines de video', description: 'Pines que contienen un video.' }],
    formats: ['MP4 con video y audio, en la resolución que Pinterest ofrece para el pin'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Pinterest?',
        a: 'Copia el enlace del pin, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      { q: '¿Puedo descargar pines de imagen?', a: 'Todavía no. ExportVid admite los pines de Pinterest que contienen un video.' },
      { q: '¿Funcionan los enlaces de pin.it?', a: 'Sí. Los enlaces cortos de pin.it funcionan directamente.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Descargar Snapchat Spotlight: guarda videos en MP4',
    metaDescription: 'Descarga videos de Snapchat Spotlight en MP4. Pega un enlace de snapchat.com/spotlight y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar Snapchat Spotlight',
    intro: 'Pega el enlace de un Snapchat Spotlight y descarga el video en MP4.',
    about: [
      'ExportVid acepta enlaces de snapchat.com/spotlight y descarga el archivo de video que Snapchat sirve para ese Spotlight.',
      'Los videos de Spotlight llegan como un único MP4, así que verás una sola opción de descarga.',
    ],
    supportedContentTypes: [{ label: 'Videos de Spotlight', description: 'Videos compartidos en Snapchat Spotlight.' }],
    formats: ['MP4 con video y audio, tal como lo sirve Snapchat'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Snapchat Spotlight?',
        a: 'Copia el enlace del Spotlight, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      { q: '¿Puedo descargar historias de Snapchat?', a: 'Todavía no. ExportVid admite los videos de Spotlight.' },
      { q: '¿Puedo descargar snaps privados?', a: 'No. ExportVid solo funciona con contenido que cualquiera puede ver.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Descargar clips de Twitch: guarda clips en MP4',
    metaDescription: 'Descarga clips de Twitch en MP4. Pega un enlace de clips.twitch.tv y guarda el clip en tu dispositivo gratis.',
    h1: 'Descargar clips de Twitch',
    intro: 'Pega el enlace de un clip de Twitch y descárgalo en MP4.',
    about: [
      'ExportVid acepta enlaces de clips.twitch.tv y enlaces de twitch.tv/canal/clip.',
      'Twitch sirve cada clip en la calidad con la que se creó, y ExportVid muestra esa calidad tal cual.',
    ],
    supportedContentTypes: [{ label: 'Clips de Twitch', description: 'Clips de cualquier canal.' }],
    formats: ['MP4 con video y audio, en la resolución que Twitch ofrece para el clip'],
    faqs: [
      {
        q: '¿Cómo descargo un clip de Twitch?',
        a: 'Copia el enlace del clip, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      { q: '¿Puedo descargar transmisiones completas o VOD?', a: 'No. ExportVid solo admite clips.' },
      { q: '¿Qué enlaces de Twitch funcionan?', a: 'Los enlaces que empiezan por clips.twitch.tv y los enlaces de twitch.tv/canal/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Descargar videos de LinkedIn en MP4',
    metaDescription: 'Descarga videos de publicaciones de LinkedIn en MP4. Pega un enlace de linkedin.com/posts y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de LinkedIn',
    intro: 'Pega el enlace de una publicación de LinkedIn y descarga el video en MP4.',
    about: [
      'ExportVid acepta enlaces de linkedin.com/posts de publicaciones que se pueden ver sin iniciar sesión.',
      'LinkedIn sirve cada video como un único MP4, así que verás una sola opción de descarga.',
    ],
    supportedContentTypes: [{ label: 'Publicaciones con video', description: 'Publicaciones que incluyen un video.' }],
    formats: ['MP4 con video y audio, tal como lo sirve LinkedIn'],
    faqs: [
      {
        q: '¿Cómo descargo un video de LinkedIn?',
        a: 'Copia el enlace de la publicación, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      {
        q: '¿Por qué mi enlace dice que el contenido es privado?',
        a: 'La publicación solo la ven los miembros de LinkedIn que han iniciado sesión, y ExportVid solo puede acceder a publicaciones que cualquiera puede ver.',
      },
      { q: '¿Puedo descargar cursos de LinkedIn Learning?', a: 'No. El contenido de los cursos requiere una cuenta y no es compatible.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Descargar videos de Tumblr en MP4',
    metaDescription: 'Descarga videos de publicaciones de Tumblr en MP4. Pega el enlace de una publicación de cualquier blog de Tumblr y guarda el video gratis.',
    h1: 'Descargar videos de Tumblr',
    intro: 'Pega el enlace de una publicación de Tumblr con video y descárgala en MP4.',
    about: [
      'ExportVid acepta enlaces a publicaciones de tumblr.com y de cualquier dirección nombredelblog.tumblr.com.',
      'Solo se pueden descargar videos de blogs y publicaciones que cualquiera puede ver.',
    ],
    supportedContentTypes: [{ label: 'Publicaciones con video', description: 'Publicaciones de Tumblr que incluyen un video.' }],
    formats: ['MP4 con video y audio, tal como lo sirve Tumblr'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Tumblr?',
        a: 'Copia el enlace de la publicación, pégalo en el cuadro de arriba y pulsa Descargar.',
      },
      { q: '¿Funcionan los subdominios de blogs?', a: 'Sí. Los enlaces como nombredelblog.tumblr.com/post/... funcionan.' },
      { q: '¿Puedo descargar de un blog privado?', a: 'No. Los blogs que exigen iniciar sesión no son compatibles.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Descargar videos de Vimeo en MP4',
    metaDescription: 'Descarga videos de Vimeo en MP4. Pega un enlace de vimeo.com, elige la calidad y guarda el video en tu dispositivo gratis.',
    h1: 'Descargar videos de Vimeo',
    intro: 'Pega el enlace de un video de Vimeo y descárgalo en MP4.',
    about: [
      'ExportVid acepta enlaces de vimeo.com y enlaces incrustados de player.vimeo.com.',
      'Los videos que el propietario ha puesto como privados, con contraseña o limitados a ciertos sitios no se pueden descargar.',
    ],
    supportedContentTypes: [{ label: 'Videos de Vimeo', description: 'Videos que puedes ver sin iniciar sesión.' }],
    formats: ['MP4 con video y audio, en todas las resoluciones que Vimeo ofrece para el video'],
    faqs: [
      {
        q: '¿Cómo descargo un video de Vimeo?',
        a: 'Copia el enlace del video, pégalo en el cuadro de arriba y pulsa Descargar. Después elige una calidad.',
      },
      {
        q: '¿Por qué no puedo descargar mi enlace de Vimeo?',
        a: 'Probablemente el video sea privado, tenga contraseña o esté limitado a ciertos dominios. ExportVid solo puede acceder a videos que cualquiera puede ver.',
      },
      { q: '¿Funcionan los enlaces incrustados?', a: 'Sí. Los enlaces de player.vimeo.com funcionan.' },
    ],
  },
};
