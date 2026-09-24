import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'collez-le dans la zone ci-dessus et appuyez sur Télécharger';

export const fr: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Télécharger une vidéo YouTube : YouTube en MP4',
    metaDescription:
      'Téléchargez gratuitement des vidéos et des Shorts YouTube en MP4. Collez un lien youtube.com ou youtu.be, choisissez la qualité et enregistrez la vidéo sur votre appareil.',
    h1: 'Télécharger des vidéos YouTube',
    intro: 'Collez un lien YouTube et téléchargez la vidéo ou le Short en MP4, dans la meilleure qualité disponible.',
    about: [
      'ExportVid accepte les liens complets youtube.com/watch, les liens courts youtu.be et les liens youtube.com/shorts.',
      'YouTube propose généralement plusieurs résolutions par vidéo. ExportVid les affiche toutes, jusqu’à la plus haute qualité de la mise en ligne. Les résolutions élevées séparent la vidéo et l’audio, donc ExportVid les assemble en un seul MP4 sans réencodage.',
    ],
    supportedContentTypes: [
      { label: 'Vidéos YouTube', description: 'Mises en ligne classiques de n’importe quelle chaîne.' },
      { label: 'YouTube Shorts', description: 'Courtes vidéos verticales du fil Shorts.' },
    ],
    formats: ['MP4 avec vidéo et audio, dans toutes les résolutions proposées par YouTube pour la vidéo'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo YouTube ?',
        a: `Copiez le lien de la vidéo sur YouTube, ${paste}. Choisissez une qualité dans la liste et enregistrez le fichier.`,
      },
      {
        q: 'Comment convertir une vidéo YouTube en MP4 ?',
        a: 'Collez le lien de la vidéo dans la zone ci-dessus et appuyez sur Télécharger. ExportVid enregistre la vidéo au format MP4, il n’y a donc rien d’autre à convertir.',
      },
      {
        q: 'Puis-je télécharger des YouTube Shorts ?',
        a: 'Oui. Collez le lien du Short et ExportVid le reconnaît automatiquement. La page de téléchargement de YouTube Shorts donne plus de détails.',
      },
      {
        q: 'Les liens youtu.be fonctionnent-ils ?',
        a: 'Oui. Les liens courts youtu.be comme les liens complets youtube.com fonctionnent.',
      },
      {
        q: 'Puis-je télécharger des vidéos privées ou réservées aux membres ?',
        a: 'Non. Les vidéos privées et réservées aux membres demandent une connexion, et ExportVid n’accède jamais à un contenu protégé par une connexion.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Télécharger des YouTube Shorts en MP4',
    metaDescription: 'Téléchargez gratuitement des YouTube Shorts en MP4. Collez un lien youtube.com/shorts, choisissez la qualité et enregistrez la vidéo sur votre appareil.',
    h1: 'Télécharger des YouTube Shorts',
    intro: 'Collez le lien d’un YouTube Short et téléchargez-le en MP4.',
    about: [
      'ExportVid reconnaît les liens youtube.com/shorts et trouve le fichier vidéo fourni par YouTube pour ce Short. Un lien youtube.com/watch classique fonctionne aussi.',
      'La liste affiche toutes les qualités que YouTube propose pour le Short, pour que vous choisissiez celle qui convient à votre appareil.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Courtes vidéos verticales du fil Shorts.' }],
    formats: ['MP4 avec vidéo et audio, dans toutes les résolutions proposées par YouTube pour le Short'],
    faqs: [
      {
        q: 'Comment télécharger un YouTube Short ?',
        a: 'Ouvrez le Short, copiez son lien, collez-le dans la zone ci-dessus et appuyez sur Télécharger. Choisissez ensuite une qualité et enregistrez le fichier.',
      },
      {
        q: 'Le téléchargement inclut-il le son ?',
        a: 'Oui. ExportVid conserve l’audio et l’assemble à la vidéo quand YouTube les fournit dans des fichiers séparés.',
      },
      {
        q: 'Puis-je aussi télécharger des vidéos YouTube plus longues ?',
        a: 'Oui. Le téléchargeur de vidéos YouTube fonctionne avec n’importe quel lien de vidéo classique.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Télécharger une vidéo Facebook : vidéos et Reels en MP4',
    metaDescription:
      'Téléchargez gratuitement des vidéos et des Reels Facebook en MP4. Collez un lien facebook.com ou fb.watch, choisissez la qualité et enregistrez sur votre appareil.',
    h1: 'Télécharger des vidéos Facebook',
    intro: 'Collez le lien d’une vidéo Facebook, y compris les liens courts fb.watch, et téléchargez le MP4.',
    about: [
      'Facebook partage les vidéos via des liens de lecture classiques, des liens courts fb.watch et des liens de Reels. ExportVid traite les trois de la même façon.',
      'Les vidéos des pages, des profils et des groupes publics peuvent être téléchargées. Celles des groupes privés ou fermés, non.',
    ],
    supportedContentTypes: [
      { label: 'Vidéos Facebook', description: 'Publications vidéo sur des pages, des profils et des groupes publics.' },
      { label: 'Reels Facebook', description: 'Courtes vidéos verticales publiées en Reels.' },
    ],
    formats: ['MP4 avec vidéo et audio, dans toutes les résolutions proposées par Facebook pour la vidéo'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Facebook ?',
        a: `Copiez le lien de la vidéo, ${paste}. Choisissez ensuite une qualité et enregistrez le fichier.`,
      },
      {
        q: 'Les liens fb.watch fonctionnent-ils ?',
        a: 'Oui. Les liens courts fb.watch fonctionnent directement.',
      },
      {
        q: 'Puis-je télécharger des vidéos d’un groupe Facebook privé ?',
        a: 'Non. ExportVid ne fonctionne qu’avec les contenus que tout le monde peut voir et ne contourne jamais les paramètres de confidentialité.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Télécharger des Reels Facebook en MP4',
    metaDescription: 'Téléchargez gratuitement des Reels Facebook en MP4. Collez le lien du Reel, choisissez la qualité et enregistrez la vidéo sur votre appareil.',
    h1: 'Télécharger des Reels Facebook',
    intro: 'Collez le lien d’un Reel Facebook et téléchargez-le en MP4.',
    about: ['Les Reels Facebook utilisent un lien contenant /reel/. ExportVid le reconnaît automatiquement et trouve le fichier vidéo pour vous.'],
    supportedContentTypes: [{ label: 'Reels Facebook', description: 'Reels de pages et de profils Facebook.' }],
    formats: ['MP4 avec vidéo et audio, dans la résolution proposée par Facebook'],
    faqs: [
      {
        q: 'Comment télécharger un Reel Facebook ?',
        a: 'Copiez le lien du Reel, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      {
        q: 'Le lien s’ouvre dans l’application Facebook. Que dois-je coller ?',
        a: 'Collez le lien web, qui commence par facebook.com/reel ou fb.watch, plutôt qu’un lien partagé depuis l’application. Les deux mènent à la même vidéo.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Télécharger des vidéos Instagram : Reels, vidéos, Stories',
    metaDescription:
      'Téléchargez gratuitement les Reels, vidéos et Stories Instagram en MP4. Les photos et carrousels fonctionnent aussi. Collez un lien Instagram et ExportVid trouve les fichiers.',
    h1: 'Télécharger des vidéos Instagram',
    intro: 'Collez le lien d’un Reel, d’une publication vidéo ou d’une Story Instagram et téléchargez-le en MP4. Les photos et carrousels fonctionnent aussi.',
    about: [
      'Instagram utilise des liens semblables pour des types de contenu différents. ExportVid les distingue : Reels (/reel/), publications du fil (/p/), Stories et profils.',
      'Pour les carrousels, chaque photo et chaque vidéo est listée séparément, pour que vous ne téléchargiez que celle qui vous intéresse.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Courtes vidéos verticales publiées en Reels.' },
      { label: 'Publications vidéo', description: 'Vidéos partagées comme publications classiques du fil.' },
      { label: 'Stories', description: 'Stories encore en ligne.' },
      { label: 'Carrousels', description: 'Publications avec plusieurs photos ou vidéos, listées une par une.' },
      { label: 'Photos', description: 'Publications du fil avec une seule image.' },
      { label: 'Photos de profil', description: 'La photo de profil d’un compte.' },
    ],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Instagram ?',
        a: 'Copiez le lien du Reel ou de la publication sur Instagram, collez-le dans le champ ci-dessus et sélectionnez Télécharger. Choisissez ensuite le fichier voulu.',
      },
      {
        q: 'Puis-je télécharger depuis un compte Instagram privé ?',
        a: 'Non. ExportVid ne fonctionne qu’avec les publications que tout le monde peut voir. Il n’accède jamais aux comptes privés.',
      },
      {
        q: 'Comment télécharger une Story Instagram ?',
        a: 'Ouvrez la Story, copiez son lien et collez-le dans la zone ci-dessus. Les Stories peuvent être téléchargées tant qu’elles sont en ligne, si elles viennent de comptes que tout le monde peut voir.',
      },
      {
        q: 'Puis-je télécharger toutes les vidéos et photos d’un carrousel ?',
        a: 'Oui. Chaque vidéo ou photo du carrousel apparaît dans la liste avec son propre bouton de téléchargement.',
      },
      {
        q: 'Puis-je télécharger les Stories à la une d’Instagram ?',
        a: 'Oui, quand Instagram les affiche sur un profil que tout le monde peut voir. Leurs éléments sont traités comme des Stories.',
      },
    ],
    formats: ['MP4 pour les vidéos, avec audio', 'JPEG pour les photos, les images de carrousel et les photos de profil'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Télécharger des Reels Instagram en MP4',
    metaDescription: 'Téléchargez gratuitement des Reels Instagram en MP4 dans la meilleure qualité disponible. Collez le lien du Reel et enregistrez la vidéo sur votre appareil.',
    h1: 'Télécharger des Reels Instagram',
    intro: 'Collez le lien d’un Reel Instagram et téléchargez-le en MP4.',
    about: [
      'Les Reels sont les courtes vidéos verticales d’Instagram. ExportVid reconnaît les liens contenant /reel/ et /reels/ et trouve directement le fichier vidéo.',
      'La qualité affichée est celle qu’Instagram fournit pour ce Reel. ExportVid ne l’améliore ni ne la renomme jamais.',
    ],
    supportedContentTypes: [{ label: 'Reels Instagram', description: 'Reels de tout compte, y compris les profils professionnels et de créateurs.' }],
    formats: ['MP4 avec vidéo et audio, dans la résolution proposée par Instagram'],
    faqs: [
      {
        q: 'Comment télécharger un Reel Instagram ?',
        a: 'Ouvrez le Reel, copiez son lien, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      {
        q: 'Quels liens de Reels fonctionnent ?',
        a: 'Tout lien instagram.com/reel/ ou instagram.com/reels/, y compris les Reels partagés sous forme de lien de publication classique.',
      },
      {
        q: 'Le téléchargement inclut-il l’audio ?',
        a: 'Oui. La plupart des Reels contiennent l’audio et la vidéo ensemble, et ExportVid conserve les deux.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Télécharger TikTok sans filigrane en MP4',
    metaDescription:
      'Téléchargez des vidéos TikTok en MP4, sans filigrane quand TikTok propose un fichier propre. Collez le lien TikTok et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos TikTok',
    intro: 'Collez un lien TikTok et enregistrez la vidéo en MP4, dans la meilleure qualité proposée par TikTok et sans filigrane quand un fichier propre existe.',
    about: [
      'ExportVid accepte les liens complets comme tiktok.com/@utilisateur/video/123 et les liens courts vm.tiktok.com ou vt.tiktok.com.',
      'TikTok fournit généralement une seule qualité par vidéo plutôt qu’une gamme de résolutions, vous verrez donc souvent un seul MP4. C’est le vrai fichier fourni par TikTok. ExportVid n’invente pas d’options supplémentaires.',
    ],
    supportedContentTypes: [{ label: 'Vidéos TikTok', description: 'Vidéos à partir d’un lien TikTok classique ou court.' }],
    formats: ['MP4 avec vidéo et audio, sans filigrane quand TikTok propose un fichier propre', 'MP4 dans la résolution fournie par TikTok pour cette vidéo'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo TikTok sans filigrane ?',
        a: 'Collez le lien TikTok dans la zone ci-dessus et appuyez sur Télécharger. ExportVid choisit la version sans filigrane dès que TikTok la propose.',
      },
      {
        q: 'Pourquoi mon téléchargement a-t-il encore un filigrane ?',
        a: 'Certaines vidéos n’existent qu’avec un filigrane. Dans ce cas, ExportVid ne peut pas le retirer et vous remet le fichier tel que TikTok le fournit.',
      },
      {
        q: 'Pourquoi n’y a-t-il qu’une seule option de qualité ?',
        a: 'TikTok ne fournit souvent qu’une seule version de chaque vidéo. ExportVid affiche exactement ce qui existe et n’ajoute jamais une qualité absente.',
      },
      {
        q: 'Puis-je télécharger les vidéos d’un compte TikTok privé ?',
        a: 'Non. Les comptes privés et les vidéos protégées par une connexion ne sont pas pris en charge.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Télécharger des vidéos X (Twitter) en MP4',
    metaDescription: 'Téléchargez des vidéos de publications X (Twitter) en MP4. Collez un lien x.com ou twitter.com et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos X (Twitter)',
    intro: 'Collez le lien d’une publication x.com ou twitter.com et téléchargez la vidéo.',
    about: [
      'X propose plusieurs résolutions par vidéo, généralement jusqu’à 1080p. ExportVid les affiche toutes, avec la taille du fichier à côté.',
      'Seules les vidéos de publications que tout le monde peut voir peuvent être téléchargées. Celles des comptes protégés, non.',
    ],
    supportedContentTypes: [{ label: 'Vidéos X', description: 'Vidéos jointes à des publications sur x.com ou twitter.com.' }],
    formats: ['MP4 avec vidéo et audio, dans toutes les résolutions proposées par la publication (généralement jusqu’à 1080p)'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo X ou Twitter ?',
        a: 'Copiez le lien de la publication, collez-le dans la zone ci-dessus et appuyez sur Télécharger. Choisissez une résolution et enregistrez le fichier.',
      },
      {
        q: 'Les liens x.com et twitter.com fonctionnent-ils tous les deux ?',
        a: 'Oui. Les deux domaines mènent à la même plateforme, et ExportVid accepte l’un comme l’autre.',
      },
      {
        q: 'Pourquoi ma publication n’affiche-t-elle aucune vidéo ?',
        a: 'La publication ne contient peut-être que des images, ou aucune vidéo téléchargeable n’a été trouvée. ExportVid n’affiche que des fichiers qui existent.',
      },
      {
        q: 'Puis-je télécharger depuis un compte protégé ?',
        a: 'Non. Les comptes protégés demandent une connexion sur X, et ExportVid n’accède pas aux contenus protégés par une connexion.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Télécharger des vidéos Reddit avec le son en MP4',
    metaDescription: 'Téléchargez des vidéos Reddit, y compris celles de v.redd.it, en MP4 avec le son. Collez un lien Reddit et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos Reddit',
    intro: 'Collez le lien d’une publication Reddit et téléchargez la vidéo avec le son, y compris les vidéos hébergées sur v.redd.it.',
    about: [
      'Reddit stocke la vidéo et l’audio dans des fichiers séparés. ExportVid les assemble en un seul MP4 par copie directe des flux, la qualité reste donc identique et le son est inclus.',
      'Seules les vidéos des subreddits et des publications ouverts peuvent être téléchargées. Les subreddits en quarantaine, privés ou réservés aux utilisateurs connectés, non.',
    ],
    supportedContentTypes: [
      { label: 'Vidéos Reddit', description: 'Vidéos hébergées sur v.redd.it.' },
      { label: 'GIF Reddit', description: 'Publications en boucle que Reddit fournit sous forme de courts clips vidéo.' },
    ],
    formats: ['MP4 avec vidéo et audio, assemblés à partir de fichiers séparés si nécessaire'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Reddit avec le son ?',
        a: 'Copiez le lien de la publication, collez-le dans la zone ci-dessus et appuyez sur Télécharger. ExportVid assemble la vidéo et l’audio en un seul fichier pour vous.',
      },
      {
        q: 'Pourquoi un téléchargement Reddit prend-il un peu plus de temps ?',
        a: 'Reddit conserve la vidéo et l’audio dans deux fichiers. ExportVid a besoin d’une courte étape pour les assembler, sans réencoder ni l’un ni l’autre.',
      },
      {
        q: 'Puis-je télécharger depuis des subreddits privés ou en quarantaine ?',
        a: 'Non. Seules les publications de subreddits ouverts sont prises en charge.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Télécharger des vidéos Pinterest : épingles vidéo en MP4',
    metaDescription: 'Téléchargez des épingles vidéo Pinterest en MP4. Collez un lien pinterest.com ou pin.it et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos Pinterest',
    intro: 'Collez le lien d’une épingle vidéo Pinterest et téléchargez-la en MP4.',
    about: [
      'ExportVid accepte les liens pinterest.com/pin et les liens courts pin.it, puis trouve le fichier vidéo fourni par Pinterest pour cette épingle.',
      'Pinterest propose généralement une seule résolution principale par vidéo, vous verrez donc le plus souvent un seul MP4 correspondant à ce que fournit Pinterest.',
    ],
    supportedContentTypes: [{ label: 'Épingles vidéo', description: 'Épingles qui contiennent une vidéo.' }],
    formats: ['MP4 avec vidéo et audio, dans la résolution proposée par Pinterest pour l’épingle'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Pinterest ?',
        a: 'Copiez le lien de l’épingle, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      { q: 'Puis-je télécharger des épingles image ?', a: 'Pas encore. ExportVid prend en charge les épingles Pinterest qui contiennent une vidéo.' },
      { q: 'Les liens pin.it fonctionnent-ils ?', a: 'Oui. Les liens courts pin.it fonctionnent directement.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Télécharger Snapchat Spotlight : vidéos en MP4',
    metaDescription: 'Téléchargez des vidéos Snapchat Spotlight en MP4. Collez un lien snapchat.com/spotlight et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger Snapchat Spotlight',
    intro: 'Collez le lien d’un Snapchat Spotlight et téléchargez la vidéo en MP4.',
    about: [
      'ExportVid accepte les liens snapchat.com/spotlight et télécharge le fichier vidéo fourni par Snapchat pour ce Spotlight.',
      'Les vidéos Spotlight arrivent sous la forme d’un seul MP4, vous verrez donc une seule option de téléchargement.',
    ],
    supportedContentTypes: [{ label: 'Vidéos Spotlight', description: 'Vidéos partagées sur Snapchat Spotlight.' }],
    formats: ['MP4 avec vidéo et audio, tel que fourni par Snapchat'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Snapchat Spotlight ?',
        a: 'Copiez le lien du Spotlight, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      { q: 'Puis-je télécharger des Stories Snapchat ?', a: 'Pas encore. ExportVid prend en charge les vidéos Spotlight.' },
      { q: 'Puis-je télécharger des snaps privés ?', a: 'Non. ExportVid ne fonctionne qu’avec les contenus que tout le monde peut voir.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Télécharger des clips Twitch en MP4',
    metaDescription: 'Téléchargez des clips Twitch en MP4. Collez un lien clips.twitch.tv et enregistrez le clip sur votre appareil gratuitement.',
    h1: 'Télécharger des clips Twitch',
    intro: 'Collez le lien d’un clip Twitch et téléchargez-le en MP4.',
    about: [
      'ExportVid accepte les liens clips.twitch.tv et les liens twitch.tv/chaîne/clip.',
      'Twitch fournit chaque clip dans la qualité d’origine de sa création, et ExportVid affiche cette qualité telle quelle.',
    ],
    supportedContentTypes: [{ label: 'Clips Twitch', description: 'Clips de n’importe quelle chaîne.' }],
    formats: ['MP4 avec vidéo et audio, dans la résolution proposée par Twitch pour le clip'],
    faqs: [
      {
        q: 'Comment télécharger un clip Twitch ?',
        a: 'Copiez le lien du clip, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      { q: 'Puis-je télécharger des streams complets ou des VOD ?', a: 'Non. ExportVid ne prend en charge que les clips.' },
      { q: 'Quels liens Twitch fonctionnent ?', a: 'Les liens qui commencent par clips.twitch.tv et les liens twitch.tv/chaîne/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Télécharger des vidéos LinkedIn en MP4',
    metaDescription: 'Téléchargez des vidéos de publications LinkedIn en MP4. Collez un lien linkedin.com/posts et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos LinkedIn',
    intro: 'Collez le lien d’une publication LinkedIn et téléchargez la vidéo en MP4.',
    about: [
      'ExportVid accepte les liens linkedin.com/posts vers des publications visibles sans connexion.',
      'LinkedIn fournit chaque vidéo sous la forme d’un seul MP4, vous verrez donc une seule option de téléchargement.',
    ],
    supportedContentTypes: [{ label: 'Publications vidéo', description: 'Publications qui contiennent une vidéo.' }],
    formats: ['MP4 avec vidéo et audio, tel que fourni par LinkedIn'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo LinkedIn ?',
        a: 'Copiez le lien de la publication, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      {
        q: 'Pourquoi mon lien indique-t-il que le contenu est privé ?',
        a: 'La publication n’est visible que pour les membres LinkedIn connectés, et ExportVid ne peut accéder qu’aux publications que tout le monde peut voir.',
      },
      { q: 'Puis-je télécharger des cours LinkedIn Learning ?', a: 'Non. Le contenu des cours nécessite un compte et n’est pas pris en charge.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Télécharger des vidéos Tumblr en MP4',
    metaDescription: 'Téléchargez des vidéos de publications Tumblr en MP4. Collez le lien d’une publication de n’importe quel blog Tumblr et enregistrez la vidéo gratuitement.',
    h1: 'Télécharger des vidéos Tumblr',
    intro: 'Collez le lien d’une publication Tumblr avec vidéo et téléchargez-la en MP4.',
    about: [
      'ExportVid accepte les liens vers des publications sur tumblr.com et sur toute adresse nomdublog.tumblr.com.',
      'Seules les vidéos des blogs et des publications que tout le monde peut voir peuvent être téléchargées.',
    ],
    supportedContentTypes: [{ label: 'Publications vidéo', description: 'Publications Tumblr qui contiennent une vidéo.' }],
    formats: ['MP4 avec vidéo et audio, tel que fourni par Tumblr'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Tumblr ?',
        a: 'Copiez le lien de la publication, collez-le dans la zone ci-dessus et appuyez sur Télécharger.',
      },
      { q: 'Les sous-domaines de blogs fonctionnent-ils ?', a: 'Oui. Les liens comme nomdublog.tumblr.com/post/... fonctionnent.' },
      { q: 'Puis-je télécharger depuis un blog privé ?', a: 'Non. Les blogs qui demandent une connexion ne sont pas pris en charge.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Télécharger des vidéos Vimeo en MP4',
    metaDescription: 'Téléchargez des vidéos Vimeo en MP4. Collez un lien vimeo.com, choisissez la qualité et enregistrez la vidéo sur votre appareil gratuitement.',
    h1: 'Télécharger des vidéos Vimeo',
    intro: 'Collez le lien d’une vidéo Vimeo et téléchargez-la en MP4.',
    about: [
      'ExportVid accepte les liens vimeo.com et les liens d’intégration player.vimeo.com.',
      'Les vidéos que leur propriétaire a rendues privées, protégées par mot de passe ou limitées à certains sites ne peuvent pas être téléchargées.',
    ],
    supportedContentTypes: [{ label: 'Vidéos Vimeo', description: 'Vidéos que vous pouvez regarder sans vous connecter.' }],
    formats: ['MP4 avec vidéo et audio, dans toutes les résolutions proposées par Vimeo pour la vidéo'],
    faqs: [
      {
        q: 'Comment télécharger une vidéo Vimeo ?',
        a: 'Copiez le lien de la vidéo, collez-le dans la zone ci-dessus et appuyez sur Télécharger. Choisissez ensuite une qualité.',
      },
      {
        q: 'Pourquoi ne puis-je pas télécharger mon lien Vimeo ?',
        a: 'La vidéo est probablement privée, protégée par mot de passe ou limitée à certains domaines. ExportVid ne peut accéder qu’aux vidéos que tout le monde peut regarder.',
      },
      { q: 'Les liens d’intégration fonctionnent-ils ?', a: 'Oui. Les liens player.vimeo.com fonctionnent.' },
    ],
  },
};
