import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'incollalo nel riquadro qui sopra e premi Scarica';

export const it: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Scarica video da YouTube: da YouTube a MP4',
    metaDescription:
      'Scarica gratis video e Shorts di YouTube in MP4. Incolla un link di youtube.com o youtu.be, scegli la qualità e salva il video sul tuo dispositivo.',
    h1: 'Scarica video da YouTube',
    intro: 'Incolla un link di YouTube e scarica il video o lo Short in MP4, nella migliore qualità disponibile.',
    about: [
      'ExportVid accetta i link completi youtube.com/watch, i link brevi youtu.be e i link youtube.com/shorts.',
      'YouTube di solito offre più risoluzioni per ogni video. ExportVid le mostra tutte, fino alla qualità più alta del caricamento. Le risoluzioni più alte tengono video e audio separati, quindi ExportVid li unisce in un unico MP4 senza ricodificare.',
    ],
    supportedContentTypes: [
      { label: 'Video di YouTube', description: 'Caricamenti normali di qualsiasi canale.' },
      { label: 'YouTube Shorts', description: 'Brevi video verticali del feed Shorts.' },
    ],
    formats: ['MP4 con video e audio, in tutte le risoluzioni che YouTube offre per il video'],
    faqs: [
      {
        q: 'Come scarico un video di YouTube?',
        a: `Copia il link del video da YouTube, ${paste}. Scegli una qualità dall’elenco e salva il file.`,
      },
      {
        q: 'Come converto un video di YouTube in MP4?',
        a: 'Incolla il link del video nel riquadro qui sopra e premi Scarica. ExportVid salva il video come file MP4, quindi non c’è altro da convertire.',
      },
      {
        q: 'Posso scaricare gli Shorts di YouTube?',
        a: 'Sì. Incolla il link dello Short e ExportVid lo riconosce in automatico. La pagina per scaricare gli Shorts di YouTube ha più dettagli.',
      },
      {
        q: 'I link youtu.be funzionano?',
        a: 'Sì. Funzionano sia i link brevi youtu.be sia i link completi youtube.com.',
      },
      {
        q: 'Posso scaricare video privati o riservati ai membri?',
        a: 'No. I video privati e riservati ai membri richiedono l’accesso, e ExportVid non accede mai a contenuti protetti da login.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Scarica YouTube Shorts in MP4',
    metaDescription: 'Scarica gratis gli Shorts di YouTube in MP4. Incolla un link youtube.com/shorts, scegli la qualità e salva il video sul tuo dispositivo.',
    h1: 'Scarica YouTube Shorts',
    intro: 'Incolla il link di uno YouTube Short e scaricalo in MP4.',
    about: [
      'ExportVid riconosce i link youtube.com/shorts e trova il file video che YouTube serve per quello Short. Funziona anche un normale link youtube.com/watch.',
      'L’elenco mostra tutte le qualità che YouTube offre per lo Short, così puoi scegliere quella adatta al tuo dispositivo.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Brevi video verticali del feed Shorts.' }],
    formats: ['MP4 con video e audio, in tutte le risoluzioni che YouTube offre per lo Short'],
    faqs: [
      {
        q: 'Come scarico uno YouTube Short?',
        a: 'Apri lo Short, copia il link, incollalo nel riquadro qui sopra e premi Scarica. Poi scegli una qualità e salva il file.',
      },
      {
        q: 'Il download include l’audio?',
        a: 'Sì. ExportVid mantiene l’audio e lo unisce al video quando YouTube li fornisce come file separati.',
      },
      {
        q: 'Posso scaricare anche video di YouTube più lunghi?',
        a: 'Sì. Il downloader di video di YouTube funziona con qualsiasi link di video normale.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Scarica video da Facebook: video e Reels in MP4',
    metaDescription:
      'Scarica gratis video e Reels di Facebook in MP4. Incolla un link di facebook.com o fb.watch, scegli la qualità e salva sul tuo dispositivo.',
    h1: 'Scarica video da Facebook',
    intro: 'Incolla il link di un video di Facebook, anche i link brevi fb.watch, e scarica l’MP4.',
    about: [
      'Facebook condivide i video con normali link di visualizzazione, link brevi fb.watch e link di Reels. ExportVid li tratta tutti e tre allo stesso modo.',
      'Si possono scaricare i video di pagine, profili e gruppi pubblici. Quelli nei gruppi privati o chiusi no.',
    ],
    supportedContentTypes: [
      { label: 'Video di Facebook', description: 'Post con video su pagine, profili e gruppi pubblici.' },
      { label: 'Reels di Facebook', description: 'Brevi video verticali pubblicati come Reels.' },
    ],
    formats: ['MP4 con video e audio, in tutte le risoluzioni che Facebook offre per il video'],
    faqs: [
      {
        q: 'Come scarico un video di Facebook?',
        a: `Copia il link del video, ${paste}. Poi scegli una qualità e salva il file.`,
      },
      {
        q: 'I link fb.watch funzionano?',
        a: 'Sì. I link brevi fb.watch funzionano direttamente.',
      },
      {
        q: 'Posso scaricare video da un gruppo Facebook privato?',
        a: 'No. ExportVid funziona solo con contenuti che chiunque può vedere e non aggira mai le impostazioni di privacy.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Scarica Reels di Facebook in MP4',
    metaDescription: 'Scarica gratis i Reels di Facebook in MP4. Incolla il link del Reel, scegli la qualità e salva il video sul tuo dispositivo.',
    h1: 'Scarica Reels di Facebook',
    intro: 'Incolla il link di un Reel di Facebook e scaricalo in MP4.',
    about: ['I Reels di Facebook usano un link con /reel/. ExportVid lo riconosce in automatico e trova il file video per te.'],
    supportedContentTypes: [{ label: 'Reels di Facebook', description: 'Reels di pagine e profili Facebook.' }],
    formats: ['MP4 con video e audio, nella risoluzione offerta da Facebook'],
    faqs: [
      {
        q: 'Come scarico un Reel di Facebook?',
        a: 'Copia il link del Reel, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      {
        q: 'Il link apre l’app di Facebook. Cosa devo incollare?',
        a: 'Incolla il link web, che inizia con facebook.com/reel o fb.watch, invece di un link condiviso dall’app. Entrambi portano allo stesso video.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Scarica video da Instagram: Reel, video e storie',
    metaDescription:
      'Scarica gratis Reel, video e storie di Instagram in MP4. Funzionano anche foto e caroselli. Incolla un link di Instagram ed ExportVid trova i file.',
    h1: 'Scarica video da Instagram',
    intro: 'Incolla il link di un Reel, di un post video o di una storia di Instagram e scaricalo in MP4. Funzionano anche post con foto e caroselli.',
    about: [
      'Instagram usa link simili per tipi di contenuto diversi. ExportVid li distingue: Reels (/reel/), post del feed (/p/), storie e profili.',
      'Per i caroselli, ogni foto e ogni video è elencato a parte, così scarichi solo quello che vuoi.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Brevi video verticali pubblicati come Reels.' },
      { label: 'Post con video', description: 'Video condivisi come normali post del feed.' },
      { label: 'Storie', description: 'Storie ancora attive.' },
      { label: 'Caroselli', description: 'Post con più foto o video, elencati uno per uno.' },
      { label: 'Foto', description: 'Post del feed con una sola immagine.' },
      { label: 'Foto profilo', description: 'La foto profilo di un account.' },
    ],
    faqs: [
      {
        q: 'Come scarico un video da Instagram?',
        a: 'Copia il link del Reel o del post da Instagram, incollalo nel riquadro qui sopra e seleziona Scarica. Poi scegli il file che vuoi.',
      },
      {
        q: 'Posso scaricare da un account Instagram privato?',
        a: 'No. ExportVid funziona solo con i post che chiunque può vedere. Non accede mai agli account privati.',
      },
      {
        q: 'Come scarico una storia di Instagram?',
        a: 'Apri la storia, copia il link e incollalo nel riquadro qui sopra. Le storie si possono scaricare finché sono attive e provengono da account che chiunque può vedere.',
      },
      {
        q: 'Posso scaricare tutti i video e le foto di un carosello?',
        a: 'Sì. Ogni video o foto del carosello compare nell’elenco con il proprio pulsante di download.',
      },
      {
        q: 'Posso scaricare le storie in evidenza di Instagram?',
        a: 'Sì, quando Instagram le mostra su un profilo che chiunque può vedere. Gli elementi in evidenza sono trattati come le storie.',
      },
    ],
    formats: ['MP4 per i video, con audio', 'JPEG per foto, immagini dei caroselli e foto profilo'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Scarica Reels di Instagram in MP4',
    metaDescription: 'Scarica gratis i Reels di Instagram in MP4 nella migliore qualità disponibile. Incolla il link del Reel e salva il video sul tuo dispositivo.',
    h1: 'Scarica Reels di Instagram',
    intro: 'Incolla il link di un Reel di Instagram e scaricalo in MP4.',
    about: [
      'I Reels sono i brevi video verticali di Instagram. ExportVid riconosce i link con /reel/ e /reels/ e trova direttamente il file video.',
      'La qualità mostrata è quella che Instagram fornisce per quel Reel. ExportVid non la aumenta né ne cambia l’etichetta.',
    ],
    supportedContentTypes: [{ label: 'Reels di Instagram', description: 'Reels di qualsiasi account, compresi i profili aziendali e dei creator.' }],
    formats: ['MP4 con video e audio, nella risoluzione offerta da Instagram'],
    faqs: [
      {
        q: 'Come scarico un Reel di Instagram?',
        a: 'Apri il Reel, copia il link, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      {
        q: 'Quali link di Reels funzionano?',
        a: 'Qualsiasi link instagram.com/reel/ o instagram.com/reels/, compresi i Reels condivisi come normale link di un post.',
      },
      {
        q: 'Il download include l’audio?',
        a: 'Sì. La maggior parte dei Reels ha audio e video insieme, e ExportVid mantiene entrambi.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Scarica TikTok senza filigrana in MP4',
    metaDescription:
      'Scarica video di TikTok in MP4, senza filigrana quando TikTok offre un file pulito. Incolla il link di TikTok e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da TikTok',
    intro: 'Incolla un link di TikTok e salva il video in MP4, nella migliore qualità offerta da TikTok e senza filigrana quando esiste un file pulito.',
    about: [
      'ExportVid accetta i link completi come tiktok.com/@nomeutente/video/123 e i link brevi vm.tiktok.com o vt.tiktok.com.',
      'TikTok di solito serve una sola qualità per video invece di una serie di risoluzioni, quindi spesso vedrai un solo MP4. È il file reale fornito da TikTok. ExportVid non inventa opzioni aggiuntive.',
    ],
    supportedContentTypes: [{ label: 'Video di TikTok', description: 'Video da un link di TikTok normale o breve.' }],
    formats: ['MP4 con video e audio, senza filigrana quando TikTok offre un file pulito', 'MP4 nella risoluzione servita da TikTok per quel video'],
    faqs: [
      {
        q: 'Come scarico un video di TikTok senza filigrana?',
        a: 'Incolla il link di TikTok nel riquadro qui sopra e premi Scarica. ExportVid sceglie la versione senza filigrana ogni volta che TikTok la offre.',
      },
      {
        q: 'Perché il mio download ha ancora la filigrana?',
        a: 'Alcuni video esistono solo con la filigrana. In quel caso ExportVid non può rimuoverla e ti dà il file come lo fornisce TikTok.',
      },
      {
        q: 'Perché c’è una sola opzione di qualità?',
        a: 'TikTok spesso serve una sola versione di ogni video. ExportVid mostra esattamente ciò che esiste e non aggiunge mai una qualità che non c’è.',
      },
      {
        q: 'Posso scaricare i video di un account TikTok privato?',
        a: 'No. Gli account privati e i video protetti da accesso non sono supportati.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Scarica video da X (Twitter) in MP4',
    metaDescription: 'Scarica video dai post di X (Twitter) in MP4. Incolla un link di x.com o twitter.com e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da X (Twitter)',
    intro: 'Incolla il link di un post di x.com o twitter.com e scarica il video.',
    about: [
      'X offre più risoluzioni per ogni video, di solito fino a 1080p. ExportVid le mostra tutte, con la dimensione del file accanto.',
      'Si possono scaricare solo i video dei post che chiunque può vedere. Quelli degli account protetti no.',
    ],
    supportedContentTypes: [{ label: 'Video di X', description: 'Video allegati ai post su x.com o twitter.com.' }],
    formats: ['MP4 con video e audio, in tutte le risoluzioni offerte dal post (di solito fino a 1080p)'],
    faqs: [
      {
        q: 'Come scarico un video da X o Twitter?',
        a: 'Copia il link del post, incollalo nel riquadro qui sopra e premi Scarica. Scegli una risoluzione e salva il file.',
      },
      {
        q: 'Funzionano sia i link x.com sia quelli twitter.com?',
        a: 'Sì. I due domini portano alla stessa piattaforma, e ExportVid accetta entrambi.',
      },
      {
        q: 'Perché il mio post non mostra nessun video?',
        a: 'Il post potrebbe contenere solo immagini, oppure non è stato trovato nessun video scaricabile. ExportVid elenca solo file che esistono.',
      },
      {
        q: 'Posso scaricare da un account protetto?',
        a: 'No. Gli account protetti richiedono l’accesso a X, e ExportVid non accede a contenuti protetti da login.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Scarica video da Reddit con l’audio in MP4',
    metaDescription: 'Scarica video di Reddit, anche quelli di v.redd.it, in MP4 con l’audio. Incolla un link di Reddit e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da Reddit',
    intro: 'Incolla il link di un post di Reddit e scarica il video con l’audio, compresi i video ospitati su v.redd.it.',
    about: [
      'Reddit conserva video e audio come file separati. ExportVid li unisce in un unico MP4 con una copia diretta dei flussi, quindi la qualità resta la stessa e l’audio è incluso.',
      'Si possono scaricare solo i video di subreddit e post aperti. I subreddit in quarantena, privati o che richiedono l’accesso no.',
    ],
    supportedContentTypes: [
      { label: 'Video di Reddit', description: 'Video ospitati su v.redd.it.' },
      { label: 'GIF di Reddit', description: 'Post in loop che Reddit serve come brevi clip video.' },
    ],
    formats: ['MP4 con video e audio, uniti da file separati quando serve'],
    faqs: [
      {
        q: 'Come scarico un video di Reddit con l’audio?',
        a: 'Copia il link del post, incollalo nel riquadro qui sopra e premi Scarica. ExportVid unisce video e audio in un unico file per te.',
      },
      {
        q: 'Perché un download da Reddit a volte richiede un po’ più tempo?',
        a: 'Reddit conserva video e audio in due file. ExportVid ha bisogno di un breve passaggio per unirli, senza ricodificare nessuno dei due.',
      },
      {
        q: 'Posso scaricare da subreddit privati o in quarantena?',
        a: 'No. Sono supportati solo i post dei subreddit aperti.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Scarica video da Pinterest: pin video in MP4',
    metaDescription: 'Scarica i pin video di Pinterest in MP4. Incolla un link di pinterest.com o pin.it e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da Pinterest',
    intro: 'Incolla il link di un pin video di Pinterest e scaricalo in MP4.',
    about: [
      'ExportVid accetta i link pinterest.com/pin e i link brevi pin.it, e trova il file video che Pinterest serve per quel pin.',
      'Pinterest di solito offre una sola risoluzione principale per video, quindi vedrai in genere un unico MP4 uguale a quello che fornisce Pinterest.',
    ],
    supportedContentTypes: [{ label: 'Pin video', description: 'Pin che contengono un video.' }],
    formats: ['MP4 con video e audio, nella risoluzione offerta da Pinterest per il pin'],
    faqs: [
      {
        q: 'Come scarico un video di Pinterest?',
        a: 'Copia il link del pin, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      { q: 'Posso scaricare i pin immagine?', a: 'Non ancora. ExportVid supporta i pin di Pinterest che contengono un video.' },
      { q: 'I link pin.it funzionano?', a: 'Sì. I link brevi pin.it funzionano direttamente.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Scarica Snapchat Spotlight: video in MP4',
    metaDescription: 'Scarica i video di Snapchat Spotlight in MP4. Incolla un link snapchat.com/spotlight e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica Snapchat Spotlight',
    intro: 'Incolla il link di uno Snapchat Spotlight e scarica il video in MP4.',
    about: [
      'ExportVid accetta i link snapchat.com/spotlight e scarica il file video che Snapchat serve per quello Spotlight.',
      'I video di Spotlight arrivano come un unico MP4, quindi vedrai una sola opzione di download.',
    ],
    supportedContentTypes: [{ label: 'Video di Spotlight', description: 'Video condivisi su Snapchat Spotlight.' }],
    formats: ['MP4 con video e audio, come lo serve Snapchat'],
    faqs: [
      {
        q: 'Come scarico un video di Snapchat Spotlight?',
        a: 'Copia il link dello Spotlight, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      { q: 'Posso scaricare le storie di Snapchat?', a: 'Non ancora. ExportVid supporta i video di Spotlight.' },
      { q: 'Posso scaricare snap privati?', a: 'No. ExportVid funziona solo con contenuti che chiunque può vedere.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Scarica clip di Twitch in MP4',
    metaDescription: 'Scarica le clip di Twitch in MP4. Incolla un link clips.twitch.tv e salva la clip sul tuo dispositivo gratis.',
    h1: 'Scarica clip di Twitch',
    intro: 'Incolla il link di una clip di Twitch e scaricala in MP4.',
    about: [
      'ExportVid accetta i link clips.twitch.tv e i link twitch.tv/canale/clip.',
      'Twitch serve ogni clip nella qualità con cui è stata creata, e ExportVid mostra quella qualità così com’è.',
    ],
    supportedContentTypes: [{ label: 'Clip di Twitch', description: 'Clip di qualsiasi canale.' }],
    formats: ['MP4 con video e audio, nella risoluzione offerta da Twitch per la clip'],
    faqs: [
      {
        q: 'Come scarico una clip di Twitch?',
        a: 'Copia il link della clip, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      { q: 'Posso scaricare stream completi o VOD?', a: 'No. ExportVid supporta solo le clip.' },
      { q: 'Quali link di Twitch funzionano?', a: 'I link che iniziano con clips.twitch.tv e i link twitch.tv/canale/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Scarica video da LinkedIn in MP4',
    metaDescription: 'Scarica i video dei post di LinkedIn in MP4. Incolla un link linkedin.com/posts e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da LinkedIn',
    intro: 'Incolla il link di un post di LinkedIn e scarica il video in MP4.',
    about: [
      'ExportVid accetta i link linkedin.com/posts di post visibili senza accedere.',
      'LinkedIn serve ogni video come un unico MP4, quindi vedrai una sola opzione di download.',
    ],
    supportedContentTypes: [{ label: 'Post con video', description: 'Post che includono un video.' }],
    formats: ['MP4 con video e audio, come lo serve LinkedIn'],
    faqs: [
      {
        q: 'Come scarico un video di LinkedIn?',
        a: 'Copia il link del post, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      {
        q: 'Perché il mio link dice che il contenuto è privato?',
        a: 'Il post è visibile solo ai membri di LinkedIn che hanno effettuato l’accesso, e ExportVid può raggiungere solo i post che chiunque può vedere.',
      },
      { q: 'Posso scaricare i corsi di LinkedIn Learning?', a: 'No. I contenuti dei corsi richiedono un account e non sono supportati.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Scarica video da Tumblr in MP4',
    metaDescription: 'Scarica i video dei post di Tumblr in MP4. Incolla il link a un post di qualsiasi blog Tumblr e salva il video gratis.',
    h1: 'Scarica video da Tumblr',
    intro: 'Incolla il link a un post video di Tumblr e scaricalo in MP4.',
    about: [
      'ExportVid accetta i link ai post su tumblr.com e su qualsiasi indirizzo nomeblog.tumblr.com.',
      'Si possono scaricare solo i video di blog e post che chiunque può vedere.',
    ],
    supportedContentTypes: [{ label: 'Post con video', description: 'Post di Tumblr che includono un video.' }],
    formats: ['MP4 con video e audio, come lo serve Tumblr'],
    faqs: [
      {
        q: 'Come scarico un video di Tumblr?',
        a: 'Copia il link del post, incollalo nel riquadro qui sopra e premi Scarica.',
      },
      { q: 'I sottodomini dei blog funzionano?', a: 'Sì. I link come nomeblog.tumblr.com/post/... funzionano.' },
      { q: 'Posso scaricare da un blog privato?', a: 'No. I blog che richiedono l’accesso non sono supportati.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Scarica video da Vimeo in MP4',
    metaDescription: 'Scarica video di Vimeo in MP4. Incolla un link vimeo.com, scegli la qualità e salva il video sul tuo dispositivo gratis.',
    h1: 'Scarica video da Vimeo',
    intro: 'Incolla il link di un video di Vimeo e scaricalo in MP4.',
    about: [
      'ExportVid accetta i link vimeo.com e i link di incorporamento player.vimeo.com.',
      'I video che il proprietario ha reso privati, protetti da password o limitati a certi siti non si possono scaricare.',
    ],
    supportedContentTypes: [{ label: 'Video di Vimeo', description: 'Video che puoi guardare senza accedere.' }],
    formats: ['MP4 con video e audio, in tutte le risoluzioni che Vimeo offre per il video'],
    faqs: [
      {
        q: 'Come scarico un video di Vimeo?',
        a: 'Copia il link del video, incollalo nel riquadro qui sopra e premi Scarica. Poi scegli una qualità.',
      },
      {
        q: 'Perché non riesco a scaricare il mio link di Vimeo?',
        a: 'Il video è probabilmente privato, protetto da password o limitato a certi domini. ExportVid può raggiungere solo i video che chiunque può guardare.',
      },
      { q: 'I link di incorporamento funzionano?', a: 'Sì. I link player.vimeo.com funzionano.' },
    ],
  },
};
