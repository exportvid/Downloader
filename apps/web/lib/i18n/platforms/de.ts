import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'füge ihn oben in das Feld ein und wähle Herunterladen';

export const de: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'YouTube Videos herunterladen: YouTube zu MP4',
    metaDescription:
      'Lade YouTube-Videos und Shorts kostenlos als MP4 herunter. Füge einen Link von youtube.com oder youtu.be ein, wähle die Qualität und speichere das Video auf deinem Gerät.',
    h1: 'YouTube Videos herunterladen',
    intro: 'Füge einen YouTube-Link ein und lade das Video oder den Short als MP4 in der besten verfügbaren Qualität herunter.',
    about: [
      'ExportVid akzeptiert vollständige youtube.com/watch-Links, kurze youtu.be-Links und youtube.com/shorts-Links.',
      'YouTube bietet meist mehrere Auflösungen pro Video an. ExportVid listet alle auf, bis zur höchsten Qualität des Uploads. Höhere Auflösungen speichern Video und Audio getrennt, daher fügt ExportVid sie ohne Neucodierung zu einer einzigen MP4-Datei zusammen.',
    ],
    supportedContentTypes: [
      { label: 'YouTube-Videos', description: 'Normale Uploads von jedem Kanal.' },
      { label: 'YouTube Shorts', description: 'Kurze Hochformat-Videos aus dem Shorts-Feed.' },
    ],
    formats: ['MP4 mit Video und Audio, in allen Auflösungen, die YouTube für das Video anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein YouTube-Video herunter?',
        a: `Kopiere den Videolink auf YouTube, ${paste}. Wähle in der Liste eine Qualität aus und speichere die Datei.`,
      },
      {
        q: 'Wie wandle ich ein YouTube-Video in MP4 um?',
        a: 'Füge den Videolink oben in das Feld ein und wähle Herunterladen. ExportVid speichert das Video als MP4-Datei, es gibt also nichts weiter umzuwandeln.',
      },
      {
        q: 'Kann ich YouTube Shorts herunterladen?',
        a: 'Ja. Füge den Link des Shorts ein, und ExportVid erkennt ihn automatisch. Die Seite zum Download von YouTube Shorts enthält mehr Details.',
      },
      {
        q: 'Funktionieren youtu.be-Links?',
        a: 'Ja. Sowohl kurze youtu.be-Links als auch vollständige youtube.com-Links funktionieren.',
      },
      {
        q: 'Kann ich private oder nur für Mitglieder verfügbare Videos herunterladen?',
        a: 'Nein. Private und nur für Mitglieder verfügbare Videos erfordern eine Anmeldung, und ExportVid greift nie auf durch Anmeldung geschützte Inhalte zu.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'YouTube Shorts herunterladen als MP4',
    metaDescription: 'Lade YouTube Shorts kostenlos als MP4 herunter. Füge einen youtube.com/shorts-Link ein, wähle die Qualität und speichere das Video auf deinem Gerät.',
    h1: 'YouTube Shorts herunterladen',
    intro: 'Füge den Link eines YouTube Shorts ein und lade ihn als MP4 herunter.',
    about: [
      'ExportVid erkennt youtube.com/shorts-Links und findet die Videodatei, die YouTube für diesen Short bereitstellt. Ein normaler youtube.com/watch-Link funktioniert ebenfalls.',
      'Die Liste zeigt alle Qualitäten, die YouTube für den Short anbietet, damit du die passende für dein Gerät auswählen kannst.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Kurze Hochformat-Videos aus dem Shorts-Feed.' }],
    formats: ['MP4 mit Video und Audio, in allen Auflösungen, die YouTube für den Short anbietet'],
    faqs: [
      {
        q: 'Wie lade ich einen YouTube Short herunter?',
        a: 'Öffne den Short, kopiere den Link, füge ihn oben in das Feld ein und wähle Herunterladen. Wähle dann eine Qualität und speichere die Datei.',
      },
      {
        q: 'Ist beim Download der Ton dabei?',
        a: 'Ja. ExportVid behält den Ton und fügt ihn mit dem Video zusammen, wenn YouTube beides als getrennte Dateien liefert.',
      },
      {
        q: 'Kann ich auch längere YouTube-Videos herunterladen?',
        a: 'Ja. Der YouTube-Video-Downloader funktioniert mit jedem normalen Videolink.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Facebook Videos herunterladen: Videos und Reels als MP4',
    metaDescription:
      'Lade Facebook-Videos und Reels kostenlos als MP4 herunter. Füge einen Link von facebook.com oder fb.watch ein, wähle die Qualität und speichere sie auf deinem Gerät.',
    h1: 'Facebook Videos herunterladen',
    intro: 'Füge den Link eines Facebook-Videos ein, auch kurze fb.watch-Links, und lade die MP4-Datei herunter.',
    about: [
      'Facebook teilt Videos über normale Wiedergabelinks, kurze fb.watch-Links und Reel-Links. ExportVid behandelt alle drei gleich.',
      'Videos von öffentlichen Seiten, Profilen und Gruppen können heruntergeladen werden. Videos in privaten oder geschlossenen Gruppen nicht.',
    ],
    supportedContentTypes: [
      { label: 'Facebook-Videos', description: 'Videobeiträge auf öffentlichen Seiten, Profilen und Gruppen.' },
      { label: 'Facebook Reels', description: 'Kurze Hochformat-Videos, die als Reels veröffentlicht wurden.' },
    ],
    formats: ['MP4 mit Video und Audio, in allen Auflösungen, die Facebook für das Video anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein Facebook-Video herunter?',
        a: `Kopiere den Videolink, ${paste}. Wähle dann eine Qualität und speichere die Datei.`,
      },
      {
        q: 'Funktionieren fb.watch-Links?',
        a: 'Ja. Kurze fb.watch-Links funktionieren direkt.',
      },
      {
        q: 'Kann ich Videos aus einer privaten Facebook-Gruppe herunterladen?',
        a: 'Nein. ExportVid funktioniert nur mit Inhalten, die jeder sehen kann, und umgeht nie Datenschutzeinstellungen.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Facebook Reels herunterladen als MP4',
    metaDescription: 'Lade Facebook Reels kostenlos als MP4 herunter. Füge den Reel-Link ein, wähle die Qualität und speichere das Video auf deinem Gerät.',
    h1: 'Facebook Reels herunterladen',
    intro: 'Füge den Link eines Facebook Reels ein und lade es als MP4 herunter.',
    about: ['Facebook Reels verwenden einen Link mit /reel/. ExportVid erkennt ihn automatisch und findet die Videodatei für dich.'],
    supportedContentTypes: [{ label: 'Facebook Reels', description: 'Reels von Facebook-Seiten und -Profilen.' }],
    formats: ['MP4 mit Video und Audio, in der Auflösung, die Facebook anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein Facebook Reel herunter?',
        a: 'Kopiere den Reel-Link, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      {
        q: 'Der Link öffnet die Facebook-App. Was soll ich einfügen?',
        a: 'Füge den Weblink ein, der mit facebook.com/reel oder fb.watch beginnt, statt eines aus der App geteilten Links. Beide führen zum selben Video.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Instagram Video-Downloader: Reels, Videos, Stories',
    metaDescription:
      'Lade Instagram Reels, Videos und Stories kostenlos als MP4 herunter. Fotos und Karussells funktionieren auch. Füge einen Instagram-Link ein und ExportVid findet die Dateien.',
    h1: 'Instagram Videos herunterladen',
    intro: 'Füge den Link zu einem Instagram Reel, Videobeitrag oder einer Story ein und lade ihn als MP4 herunter. Fotobeiträge und Karussells funktionieren auch.',
    about: [
      'Instagram verwendet ähnlich aussehende Links für verschiedene Inhalte. ExportVid unterscheidet sie: Reels (/reel/), Feed-Beiträge (/p/), Stories und Profile.',
      'Bei Karussells wird jedes Foto und jedes Video einzeln aufgeführt, sodass du nur herunterlädst, was du willst.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Kurze Hochformat-Videos, die als Reels veröffentlicht wurden.' },
      { label: 'Videobeiträge', description: 'Videos, die als normale Feed-Beiträge geteilt wurden.' },
      { label: 'Stories', description: 'Stories, die gerade online sind.' },
      { label: 'Karussells', description: 'Beiträge mit mehreren Fotos oder Videos, einzeln aufgelistet.' },
      { label: 'Fotos', description: 'Feed-Beiträge mit einem einzelnen Bild.' },
      { label: 'Profilbilder', description: 'Das Profilbild eines Kontos.' },
    ],
    faqs: [
      {
        q: 'Wie lade ich ein Instagram-Video herunter?',
        a: 'Kopiere den Link zum Reel oder Beitrag auf Instagram, füge ihn oben in das Feld ein und wähle Herunterladen. Wähle dann die gewünschte Datei aus.',
      },
      {
        q: 'Kann ich von einem privaten Instagram-Konto herunterladen?',
        a: 'Nein. ExportVid funktioniert nur mit Beiträgen, die jeder sehen kann. Auf private Konten greift es nie zu.',
      },
      {
        q: 'Wie lade ich eine Instagram-Story herunter?',
        a: 'Öffne die Story, kopiere den Link und füge ihn oben in das Feld ein. Stories lassen sich herunterladen, solange sie online sind und von Konten stammen, die jeder sehen kann.',
      },
      {
        q: 'Kann ich alle Videos und Fotos aus einem Karussell herunterladen?',
        a: 'Ja. Jedes Video und jedes Foto im Karussell erscheint mit eigenem Download-Button in der Liste.',
      },
      {
        q: 'Kann ich Instagram-Highlights herunterladen?',
        a: 'Ja, wenn Instagram sie in einem Profil anzeigt, das jeder sehen kann. Highlight-Elemente werden wie Stories behandelt.',
      },
    ],
    formats: ['MP4 für Videos, mit Audio', 'JPEG für Fotos, Karussell-Bilder und Profilbilder'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Instagram Reels herunterladen als MP4',
    metaDescription: 'Lade Instagram Reels als MP4 in der besten verfügbaren Qualität herunter. Füge den Reel-Link ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'Instagram Reels herunterladen',
    intro: 'Füge den Link eines Instagram Reels ein und lade es als MP4 herunter.',
    about: [
      'Reels sind die kurzen Hochformat-Videos von Instagram. ExportVid erkennt Links mit /reel/ und /reels/ und findet die Videodatei direkt.',
      'Die angezeigte Qualität entspricht dem, was Instagram für dieses Reel liefert. ExportVid rechnet sie nie hoch und ändert auch keine Bezeichnungen.',
    ],
    supportedContentTypes: [{ label: 'Instagram Reels', description: 'Reels von jedem Konto, auch von Business- und Creator-Profilen.' }],
    formats: ['MP4 mit Video und Audio, in der Auflösung, die Instagram anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein Instagram Reel herunter?',
        a: 'Öffne das Reel, kopiere den Link, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      {
        q: 'Welche Reel-Links funktionieren?',
        a: 'Jeder Link von instagram.com/reel/ oder instagram.com/reels/, auch Reels, die als normaler Beitragslink geteilt wurden.',
      },
      {
        q: 'Ist beim Download der Ton dabei?',
        a: 'Ja. Die meisten Reels enthalten Ton und Bild zusammen, und ExportVid behält beides.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'TikTok ohne Wasserzeichen herunterladen als MP4',
    metaDescription:
      'Lade TikTok-Videos als MP4 herunter, ohne Wasserzeichen, wenn TikTok eine saubere Datei anbietet. Füge den TikTok-Link ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'TikTok Videos herunterladen',
    intro: 'Füge einen TikTok-Link ein und speichere das Video als MP4, in der besten Qualität, die TikTok anbietet, und ohne Wasserzeichen, wenn es eine saubere Datei gibt.',
    about: [
      'ExportVid akzeptiert vollständige Links wie tiktok.com/@nutzername/video/123 und kurze Links von vm.tiktok.com oder vt.tiktok.com.',
      'TikTok liefert meist nur eine Qualität pro Video statt mehrerer Auflösungen, deshalb siehst du oft nur eine einzige MP4-Datei. Das ist die echte Datei von TikTok. ExportVid erfindet keine zusätzlichen Optionen.',
    ],
    supportedContentTypes: [{ label: 'TikTok-Videos', description: 'Videos über einen normalen oder kurzen TikTok-Link.' }],
    formats: ['MP4 mit Video und Audio, ohne Wasserzeichen, wenn TikTok eine saubere Datei anbietet', 'MP4 in der Auflösung, die TikTok für dieses Video liefert'],
    faqs: [
      {
        q: 'Wie lade ich ein TikTok-Video ohne Wasserzeichen herunter?',
        a: 'Füge den TikTok-Link oben in das Feld ein und wähle Herunterladen. ExportVid wählt die Version ohne Wasserzeichen, sobald TikTok sie anbietet.',
      },
      {
        q: 'Warum hat mein Download immer noch ein Wasserzeichen?',
        a: 'Manche Videos existieren nur mit Wasserzeichen. Dann kann ExportVid es nicht entfernen und gibt dir die Datei so, wie TikTok sie liefert.',
      },
      {
        q: 'Warum gibt es nur eine Qualitätsoption?',
        a: 'TikTok liefert oft nur eine Version jedes Videos. ExportVid zeigt genau das, was existiert, und fügt nie eine Qualität hinzu, die es nicht gibt.',
      },
      {
        q: 'Kann ich Videos von einem privaten TikTok-Konto herunterladen?',
        a: 'Nein. Private Konten und durch Anmeldung geschützte Videos werden nicht unterstützt.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'X (Twitter) Videos herunterladen als MP4',
    metaDescription: 'Lade Videos aus X-Beiträgen (Twitter) als MP4 herunter. Füge einen Link von x.com oder twitter.com ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'X (Twitter) Videos herunterladen',
    intro: 'Füge den Link eines x.com- oder twitter.com-Beitrags ein und lade das Video herunter.',
    about: [
      'X bietet pro Video mehrere Auflösungen an, meist bis 1080p. ExportVid listet alle auf, mit der Dateigröße daneben.',
      'Nur Videos aus Beiträgen, die jeder sehen kann, lassen sich herunterladen. Beiträge geschützter Konten nicht.',
    ],
    supportedContentTypes: [{ label: 'X-Videos', description: 'Videos, die an Beiträge auf x.com oder twitter.com angehängt sind.' }],
    formats: ['MP4 mit Video und Audio, in allen Auflösungen, die der Beitrag anbietet (meist bis 1080p)'],
    faqs: [
      {
        q: 'Wie lade ich ein Video von X oder Twitter herunter?',
        a: 'Kopiere den Beitragslink, füge ihn oben in das Feld ein und wähle Herunterladen. Wähle eine Auflösung und speichere die Datei.',
      },
      {
        q: 'Funktionieren sowohl x.com- als auch twitter.com-Links?',
        a: 'Ja. Beide Domains führen zur selben Plattform, und ExportVid akzeptiert beide.',
      },
      {
        q: 'Warum zeigt mein Beitrag kein Video?',
        a: 'Der Beitrag enthält möglicherweise nur Bilder, oder es wurde kein herunterladbares Video gefunden. ExportVid listet nur Dateien auf, die es gibt.',
      },
      {
        q: 'Kann ich von einem geschützten Konto herunterladen?',
        a: 'Nein. Geschützte Konten erfordern eine Anmeldung bei X, und ExportVid greift nicht auf durch Anmeldung geschützte Inhalte zu.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Reddit Videos mit Ton herunterladen als MP4',
    metaDescription: 'Lade Reddit-Videos, auch von v.redd.it, als MP4 mit Ton herunter. Füge einen Reddit-Link ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'Reddit Videos herunterladen',
    intro: 'Füge den Link eines Reddit-Beitrags ein und lade das Video mit Ton herunter, auch Videos, die auf v.redd.it gehostet werden.',
    about: [
      'Reddit speichert Video und Audio als getrennte Dateien. ExportVid fügt sie per direkter Stream-Kopie zu einer einzigen MP4-Datei zusammen, sodass die Qualität gleich bleibt und der Ton enthalten ist.',
      'Nur Videos aus offenen Subreddits und Beiträgen lassen sich herunterladen. Subreddits unter Quarantäne, private oder nur mit Anmeldung zugängliche nicht.',
    ],
    supportedContentTypes: [
      { label: 'Reddit-Videos', description: 'Videos, die auf v.redd.it gehostet werden.' },
      { label: 'Reddit-GIFs', description: 'Endlosschleifen, die Reddit als kurze Videoclips ausliefert.' },
    ],
    formats: ['MP4 mit Video und Audio, bei Bedarf aus getrennten Dateien zusammengefügt'],
    faqs: [
      {
        q: 'Wie lade ich ein Reddit-Video mit Ton herunter?',
        a: 'Kopiere den Beitragslink, füge ihn oben in das Feld ein und wähle Herunterladen. ExportVid fügt Video und Audio für dich zu einer Datei zusammen.',
      },
      {
        q: 'Warum dauert ein Reddit-Download etwas länger?',
        a: 'Reddit speichert Video und Audio in zwei Dateien. ExportVid braucht einen kurzen Schritt, um sie zusammenzufügen, ohne eines von beiden neu zu codieren.',
      },
      {
        q: 'Kann ich aus privaten Subreddits oder Subreddits unter Quarantäne herunterladen?',
        a: 'Nein. Nur Beiträge aus offenen Subreddits werden unterstützt.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Pinterest Videos herunterladen: Video-Pins als MP4',
    metaDescription: 'Lade Pinterest-Video-Pins als MP4 herunter. Füge einen Link von pinterest.com oder pin.it ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'Pinterest Videos herunterladen',
    intro: 'Füge den Link eines Pinterest-Video-Pins ein und lade ihn als MP4 herunter.',
    about: [
      'ExportVid akzeptiert pinterest.com/pin-Links und kurze pin.it-Links und findet die Videodatei, die Pinterest für diesen Pin bereitstellt.',
      'Pinterest bietet meist nur eine Hauptauflösung pro Video an, daher siehst du in der Regel eine einzige MP4-Datei, die dem entspricht, was Pinterest liefert.',
    ],
    supportedContentTypes: [{ label: 'Video-Pins', description: 'Pins, die ein Video enthalten.' }],
    formats: ['MP4 mit Video und Audio, in der Auflösung, die Pinterest für den Pin anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein Pinterest-Video herunter?',
        a: 'Kopiere den Pin-Link, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      { q: 'Kann ich Bild-Pins herunterladen?', a: 'Noch nicht. ExportVid unterstützt Pinterest-Pins, die ein Video enthalten.' },
      { q: 'Funktionieren pin.it-Links?', a: 'Ja. Kurze pin.it-Links funktionieren direkt.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Snapchat Spotlight herunterladen: Videos als MP4',
    metaDescription: 'Lade Snapchat-Spotlight-Videos als MP4 herunter. Füge einen snapchat.com/spotlight-Link ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'Snapchat Spotlight herunterladen',
    intro: 'Füge den Link eines Snapchat Spotlights ein und lade das Video als MP4 herunter.',
    about: [
      'ExportVid akzeptiert snapchat.com/spotlight-Links und lädt die Videodatei herunter, die Snapchat für dieses Spotlight bereitstellt.',
      'Spotlight-Videos kommen als einzelne MP4-Datei, daher siehst du nur eine Download-Option.',
    ],
    supportedContentTypes: [{ label: 'Spotlight-Videos', description: 'Videos, die auf Snapchat Spotlight geteilt wurden.' }],
    formats: ['MP4 mit Video und Audio, so wie Snapchat es liefert'],
    faqs: [
      {
        q: 'Wie lade ich ein Snapchat-Spotlight-Video herunter?',
        a: 'Kopiere den Spotlight-Link, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      { q: 'Kann ich Snapchat-Stories herunterladen?', a: 'Noch nicht. ExportVid unterstützt Spotlight-Videos.' },
      { q: 'Kann ich private Snaps herunterladen?', a: 'Nein. ExportVid funktioniert nur mit Inhalten, die jeder sehen kann.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Twitch Clips herunterladen als MP4',
    metaDescription: 'Lade Twitch-Clips als MP4 herunter. Füge einen clips.twitch.tv-Link ein und speichere den Clip kostenlos auf deinem Gerät.',
    h1: 'Twitch Clips herunterladen',
    intro: 'Füge den Link eines Twitch-Clips ein und lade ihn als MP4 herunter.',
    about: [
      'ExportVid akzeptiert clips.twitch.tv-Links und twitch.tv/kanal/clip-Links.',
      'Twitch liefert jeden Clip in der Qualität, in der er erstellt wurde, und ExportVid zeigt diese Qualität unverändert an.',
    ],
    supportedContentTypes: [{ label: 'Twitch-Clips', description: 'Clips von jedem Kanal.' }],
    formats: ['MP4 mit Video und Audio, in der Auflösung, die Twitch für den Clip anbietet'],
    faqs: [
      {
        q: 'Wie lade ich einen Twitch-Clip herunter?',
        a: 'Kopiere den Clip-Link, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      { q: 'Kann ich komplette Streams oder VODs herunterladen?', a: 'Nein. ExportVid unterstützt nur Clips.' },
      { q: 'Welche Twitch-Links funktionieren?', a: 'Links, die mit clips.twitch.tv beginnen, und twitch.tv/kanal/clip-Links.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'LinkedIn Videos herunterladen als MP4',
    metaDescription: 'Lade Videos aus LinkedIn-Beiträgen als MP4 herunter. Füge einen linkedin.com/posts-Link ein und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'LinkedIn Videos herunterladen',
    intro: 'Füge den Link eines LinkedIn-Beitrags ein und lade das Video als MP4 herunter.',
    about: [
      'ExportVid akzeptiert linkedin.com/posts-Links zu Beiträgen, die ohne Anmeldung sichtbar sind.',
      'LinkedIn liefert jedes Video als einzelne MP4-Datei, daher siehst du nur eine Download-Option.',
    ],
    supportedContentTypes: [{ label: 'Videobeiträge', description: 'Beiträge, die ein Video enthalten.' }],
    formats: ['MP4 mit Video und Audio, so wie LinkedIn es liefert'],
    faqs: [
      {
        q: 'Wie lade ich ein LinkedIn-Video herunter?',
        a: 'Kopiere den Beitragslink, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      {
        q: 'Warum sagt mein Link, der Inhalt sei privat?',
        a: 'Der Beitrag ist nur für angemeldete LinkedIn-Mitglieder sichtbar, und ExportVid kann nur auf Beiträge zugreifen, die jeder sehen kann.',
      },
      { q: 'Kann ich LinkedIn-Learning-Kurse herunterladen?', a: 'Nein. Kursinhalte erfordern ein Konto und werden nicht unterstützt.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Tumblr Videos herunterladen als MP4',
    metaDescription: 'Lade Videos aus Tumblr-Beiträgen als MP4 herunter. Füge den Link zu einem Beitrag eines beliebigen Tumblr-Blogs ein und speichere das Video kostenlos.',
    h1: 'Tumblr Videos herunterladen',
    intro: 'Füge den Link zu einem Tumblr-Videobeitrag ein und lade ihn als MP4 herunter.',
    about: [
      'ExportVid akzeptiert Links zu Beiträgen auf tumblr.com und auf jeder Adresse der Form blogname.tumblr.com.',
      'Nur Videos aus Blogs und Beiträgen, die jeder sehen kann, lassen sich herunterladen.',
    ],
    supportedContentTypes: [{ label: 'Videobeiträge', description: 'Tumblr-Beiträge, die ein Video enthalten.' }],
    formats: ['MP4 mit Video und Audio, so wie Tumblr es liefert'],
    faqs: [
      {
        q: 'Wie lade ich ein Tumblr-Video herunter?',
        a: 'Kopiere den Beitragslink, füge ihn oben in das Feld ein und wähle Herunterladen.',
      },
      { q: 'Funktionieren Blog-Subdomains?', a: 'Ja. Links wie blogname.tumblr.com/post/... funktionieren.' },
      { q: 'Kann ich von einem privaten Blog herunterladen?', a: 'Nein. Blogs, die eine Anmeldung erfordern, werden nicht unterstützt.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Vimeo Videos herunterladen als MP4',
    metaDescription: 'Lade Vimeo-Videos als MP4 herunter. Füge einen vimeo.com-Link ein, wähle die Qualität und speichere das Video kostenlos auf deinem Gerät.',
    h1: 'Vimeo Videos herunterladen',
    intro: 'Füge den Link eines Vimeo-Videos ein und lade es als MP4 herunter.',
    about: [
      'ExportVid akzeptiert vimeo.com-Links und player.vimeo.com-Einbettungslinks.',
      'Videos, die der Besitzer als privat, passwortgeschützt oder auf bestimmte Seiten beschränkt eingestellt hat, lassen sich nicht herunterladen.',
    ],
    supportedContentTypes: [{ label: 'Vimeo-Videos', description: 'Videos, die du ohne Anmeldung ansehen kannst.' }],
    formats: ['MP4 mit Video und Audio, in allen Auflösungen, die Vimeo für das Video anbietet'],
    faqs: [
      {
        q: 'Wie lade ich ein Vimeo-Video herunter?',
        a: 'Kopiere den Videolink, füge ihn oben in das Feld ein und wähle Herunterladen. Wähle dann eine Qualität.',
      },
      {
        q: 'Warum kann ich meinen Vimeo-Link nicht herunterladen?',
        a: 'Das Video ist wahrscheinlich privat, passwortgeschützt oder auf bestimmte Domains beschränkt. ExportVid kann nur auf Videos zugreifen, die jeder ansehen kann.',
      },
      { q: 'Funktionieren Einbettungslinks?', a: 'Ja. player.vimeo.com-Links funktionieren.' },
    ],
  },
};
