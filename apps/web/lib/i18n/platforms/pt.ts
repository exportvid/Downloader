import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'cole na caixa acima e toque em Baixar';

export const pt: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Baixar vídeos do YouTube: YouTube para MP4',
    metaDescription:
      'Baixe vídeos e Shorts do YouTube em MP4 de graça. Cole um link do youtube.com ou youtu.be, escolha a qualidade e salve o vídeo no seu dispositivo.',
    h1: 'Baixar vídeos do YouTube',
    intro: 'Cole um link do YouTube e baixe o vídeo ou o Short em MP4, na melhor qualidade disponível.',
    about: [
      'O ExportVid aceita links completos do youtube.com/watch, links curtos do youtu.be e links do youtube.com/shorts.',
      'O YouTube costuma oferecer várias resoluções por vídeo. O ExportVid lista todas, até a maior qualidade do envio. As resoluções mais altas guardam vídeo e áudio separados, então o ExportVid os une em um único MP4 sem recodificar.',
    ],
    supportedContentTypes: [
      { label: 'Vídeos do YouTube', description: 'Envios normais de qualquer canal.' },
      { label: 'YouTube Shorts', description: 'Vídeos verticais curtos do feed de Shorts.' },
    ],
    formats: ['MP4 com vídeo e áudio, em todas as resoluções que o YouTube oferece para o vídeo'],
    faqs: [
      {
        q: 'Como baixo um vídeo do YouTube?',
        a: `Copie o link do vídeo no YouTube, ${paste}. Escolha uma qualidade na lista e salve o arquivo.`,
      },
      {
        q: 'Como converto um vídeo do YouTube para MP4?',
        a: 'Cole o link do vídeo na caixa acima e toque em Baixar. O ExportVid salva o vídeo como arquivo MP4, então não há mais nada para converter.',
      },
      {
        q: 'Posso baixar YouTube Shorts?',
        a: 'Sim. Cole o link do Short e o ExportVid o reconhece automaticamente. A página de download de YouTube Shorts tem mais detalhes.',
      },
      {
        q: 'Os links do youtu.be funcionam?',
        a: 'Sim. Tanto os links curtos do youtu.be quanto os links completos do youtube.com funcionam.',
      },
      {
        q: 'Posso baixar vídeos privados ou exclusivos para membros?',
        a: 'Não. Vídeos privados e exclusivos para membros exigem login, e o ExportVid nunca acessa conteúdo protegido por login.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Baixar YouTube Shorts: salve Shorts em MP4',
    metaDescription: 'Baixe YouTube Shorts em MP4 de graça. Cole um link do youtube.com/shorts, escolha a qualidade e salve o vídeo no seu dispositivo.',
    h1: 'Baixar YouTube Shorts',
    intro: 'Cole o link de um YouTube Short e baixe em MP4.',
    about: [
      'O ExportVid reconhece links do youtube.com/shorts e encontra o arquivo de vídeo que o YouTube entrega para aquele Short. Um link normal do youtube.com/watch também funciona.',
      'A lista mostra todas as qualidades que o YouTube oferece para o Short, para você escolher a que combina com o seu dispositivo.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Vídeos verticais curtos do feed de Shorts.' }],
    formats: ['MP4 com vídeo e áudio, em todas as resoluções que o YouTube oferece para o Short'],
    faqs: [
      {
        q: 'Como baixo um YouTube Short?',
        a: 'Abra o Short, copie o link, cole na caixa acima e toque em Baixar. Depois escolha uma qualidade e salve o arquivo.',
      },
      {
        q: 'O download inclui o som?',
        a: 'Sim. O ExportVid mantém o áudio e o une ao vídeo quando o YouTube os entrega como arquivos separados.',
      },
      {
        q: 'Também posso baixar vídeos mais longos do YouTube?',
        a: 'Sim. O baixador de vídeos do YouTube funciona com qualquer link de vídeo normal.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Baixar vídeos do Facebook: vídeos e Reels em MP4',
    metaDescription:
      'Baixe vídeos e Reels do Facebook em MP4 de graça. Cole um link do facebook.com ou fb.watch, escolha a qualidade e salve no seu dispositivo.',
    h1: 'Baixar vídeos do Facebook',
    intro: 'Cole o link de um vídeo do Facebook, inclusive os links curtos do fb.watch, e baixe o MP4.',
    about: [
      'O Facebook compartilha vídeos por links de exibição comuns, links curtos do fb.watch e links de Reels. O ExportVid trata os três do mesmo jeito.',
      'É possível baixar vídeos de páginas, perfis e grupos públicos. Vídeos dentro de grupos privados ou fechados, não.',
    ],
    supportedContentTypes: [
      { label: 'Vídeos do Facebook', description: 'Publicações com vídeo em páginas, perfis e grupos públicos.' },
      { label: 'Reels do Facebook', description: 'Vídeos verticais curtos publicados como Reels.' },
    ],
    formats: ['MP4 com vídeo e áudio, em todas as resoluções que o Facebook oferece para o vídeo'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Facebook?',
        a: `Copie o link do vídeo, ${paste}. Depois escolha uma qualidade e salve o arquivo.`,
      },
      {
        q: 'Os links do fb.watch funcionam?',
        a: 'Sim. Os links curtos do fb.watch funcionam diretamente.',
      },
      {
        q: 'Posso baixar vídeos de um grupo privado do Facebook?',
        a: 'Não. O ExportVid só funciona com conteúdo que qualquer pessoa pode ver e nunca contorna as configurações de privacidade.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Baixar Reels do Facebook: salve Reels em MP4',
    metaDescription: 'Baixe Reels do Facebook em MP4 de graça. Cole o link do Reel, escolha a qualidade e salve o vídeo no seu dispositivo.',
    h1: 'Baixar Reels do Facebook',
    intro: 'Cole o link de um Reel do Facebook e baixe em MP4.',
    about: ['Os Reels do Facebook usam um link com /reel/. O ExportVid o reconhece automaticamente e encontra o arquivo de vídeo para você.'],
    supportedContentTypes: [{ label: 'Reels do Facebook', description: 'Reels de páginas e perfis do Facebook.' }],
    formats: ['MP4 com vídeo e áudio, na resolução que o Facebook oferece'],
    faqs: [
      {
        q: 'Como baixo um Reel do Facebook?',
        a: 'Copie o link do Reel, cole na caixa acima e toque em Baixar.',
      },
      {
        q: 'O link abre o app do Facebook. O que devo colar?',
        a: 'Cole o link da web, que começa com facebook.com/reel ou fb.watch, em vez de um link compartilhado pelo app. Os dois levam ao mesmo vídeo.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Baixar vídeos do Instagram: Reels, vídeos e Stories',
    metaDescription:
      'Baixe Reels, vídeos e Stories do Instagram em MP4 de graça. Fotos e carrosséis também funcionam. Cole um link do Instagram e o ExportVid encontra os arquivos.',
    h1: 'Baixar vídeos do Instagram',
    intro: 'Cole o link de um Reel, de uma publicação com vídeo ou de um Story do Instagram e baixe em MP4. Fotos e carrosséis também funcionam.',
    about: [
      'O Instagram usa links parecidos para tipos diferentes de conteúdo. O ExportVid os distingue: Reels (/reel/), publicações do feed (/p/), Stories e perfis.',
      'Nos carrosséis, cada foto e cada vídeo aparece separadamente, para você baixar só o que quiser.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Vídeos verticais curtos publicados como Reels.' },
      { label: 'Publicações com vídeo', description: 'Vídeos compartilhados como publicações normais do feed.' },
      { label: 'Stories', description: 'Stories que ainda estão no ar.' },
      { label: 'Carrosséis', description: 'Publicações com várias fotos ou vídeos, listados um a um.' },
      { label: 'Fotos', description: 'Publicações do feed com uma única imagem.' },
      { label: 'Fotos de perfil', description: 'A foto de perfil de uma conta.' },
    ],
    faqs: [
      {
        q: 'Como baixo um vídeo do Instagram?',
        a: 'Copie o link do Reel ou da publicação no Instagram, cole na caixa acima e toque em Baixar. Depois escolha o arquivo que quiser.',
      },
      {
        q: 'Posso baixar de uma conta privada do Instagram?',
        a: 'Não. O ExportVid só funciona com publicações que qualquer pessoa pode ver. Ele nunca acessa contas privadas.',
      },
      {
        q: 'Como baixo um Story do Instagram?',
        a: 'Abra o Story, copie o link e cole na caixa acima. Os Stories podem ser baixados enquanto estão no ar, de contas que qualquer pessoa pode ver.',
      },
      {
        q: 'Posso baixar todos os vídeos e fotos de um carrossel?',
        a: 'Sim. Cada vídeo ou foto do carrossel aparece na lista com o próprio botão de download.',
      },
      {
        q: 'Posso baixar os Destaques do Instagram?',
        a: 'Sim, quando o Instagram os exibe em um perfil que qualquer pessoa pode ver. Os itens dos Destaques são tratados como Stories.',
      },
    ],
    formats: ['MP4 para vídeos, com áudio', 'JPEG para fotos, imagens de carrosséis e fotos de perfil'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Baixar Reels do Instagram: salve Reels em MP4',
    metaDescription: 'Baixe Reels do Instagram em MP4 na melhor qualidade disponível. Cole o link do Reel e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar Reels do Instagram',
    intro: 'Cole o link de um Reel do Instagram e baixe em MP4.',
    about: [
      'Reels são os vídeos verticais curtos do Instagram. O ExportVid reconhece links com /reel/ e /reels/ e encontra o arquivo de vídeo diretamente.',
      'A qualidade exibida é a que o Instagram oferece para aquele Reel. O ExportVid nunca aumenta nem altera o rótulo da resolução.',
    ],
    supportedContentTypes: [{ label: 'Reels do Instagram', description: 'Reels de qualquer conta, inclusive perfis comerciais e de criadores.' }],
    formats: ['MP4 com vídeo e áudio, na resolução que o Instagram oferece'],
    faqs: [
      {
        q: 'Como baixo um Reel do Instagram?',
        a: 'Abra o Reel, copie o link, cole na caixa acima e toque em Baixar.',
      },
      {
        q: 'Quais links de Reels funcionam?',
        a: 'Qualquer link do instagram.com/reel/ ou instagram.com/reels/, inclusive Reels compartilhados como link de publicação normal.',
      },
      {
        q: 'O download inclui o áudio?',
        a: 'Sim. A maioria dos Reels traz áudio e vídeo juntos, e o ExportVid mantém os dois.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Baixar TikTok sem marca d’água em MP4',
    metaDescription:
      'Baixe vídeos do TikTok em MP4 sem marca d’água quando o TikTok oferece um arquivo limpo. Cole o link do TikTok e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do TikTok',
    intro: 'Cole um link do TikTok e salve o vídeo em MP4, na melhor qualidade que o TikTok oferece e sem marca d’água quando existe um arquivo limpo.',
    about: [
      'O ExportVid aceita links completos como tiktok.com/@usuario/video/123 e links curtos do vm.tiktok.com ou vt.tiktok.com.',
      'O TikTok normalmente entrega uma única qualidade por vídeo, e não uma série de resoluções, então o mais comum é ver um único MP4. Esse é o arquivo real que o TikTok oferece. O ExportVid não inventa opções extras.',
    ],
    supportedContentTypes: [{ label: 'Vídeos do TikTok', description: 'Vídeos a partir de um link normal ou curto do TikTok.' }],
    formats: ['MP4 com vídeo e áudio, sem marca d’água quando o TikTok oferece um arquivo limpo', 'MP4 na resolução que o TikTok entrega para aquele vídeo'],
    faqs: [
      {
        q: 'Como baixo um vídeo do TikTok sem marca d’água?',
        a: 'Cole o link do TikTok na caixa acima e toque em Baixar. O ExportVid escolhe a versão sem marca d’água sempre que o TikTok a oferece.',
      },
      {
        q: 'Por que meu download ainda tem marca d’água?',
        a: 'Alguns vídeos só existem com marca d’água. Nesse caso, o ExportVid não consegue removê-la e entrega o arquivo como o TikTok o fornece.',
      },
      {
        q: 'Por que só existe uma opção de qualidade?',
        a: 'O TikTok costuma entregar uma única versão de cada vídeo. O ExportVid mostra exatamente o que existe e nunca inclui uma qualidade que não está lá.',
      },
      {
        q: 'Posso baixar vídeos de uma conta privada do TikTok?',
        a: 'Não. Contas privadas e vídeos protegidos por login não são compatíveis.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Baixar vídeos do X (Twitter) em MP4',
    metaDescription: 'Baixe vídeos de publicações do X (Twitter) em MP4. Cole um link do x.com ou twitter.com e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do X (Twitter)',
    intro: 'Cole o link de uma publicação do x.com ou twitter.com e baixe o vídeo.',
    about: [
      'O X oferece várias resoluções por vídeo, geralmente até 1080p. O ExportVid lista todas, com o tamanho do arquivo ao lado.',
      'Só é possível baixar vídeos de publicações que qualquer pessoa pode ver. Publicações de contas protegidas, não.',
    ],
    supportedContentTypes: [{ label: 'Vídeos do X', description: 'Vídeos anexados a publicações do x.com ou twitter.com.' }],
    formats: ['MP4 com vídeo e áudio, em todas as resoluções que a publicação oferece (geralmente até 1080p)'],
    faqs: [
      {
        q: 'Como baixo um vídeo do X ou do Twitter?',
        a: 'Copie o link da publicação, cole na caixa acima e toque em Baixar. Escolha uma resolução e salve o arquivo.',
      },
      {
        q: 'Os links do x.com e do twitter.com funcionam?',
        a: 'Sim. Os dois domínios levam à mesma plataforma, e o ExportVid aceita qualquer um deles.',
      },
      {
        q: 'Por que minha publicação não mostra nenhum vídeo?',
        a: 'A publicação pode ter apenas imagens, ou nenhum vídeo baixável foi encontrado. O ExportVid só lista arquivos que existem.',
      },
      {
        q: 'Posso baixar de uma conta protegida?',
        a: 'Não. Contas protegidas exigem login no X, e o ExportVid não acessa conteúdo protegido por login.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Baixar vídeos do Reddit com som em MP4',
    metaDescription: 'Baixe vídeos do Reddit, inclusive os do v.redd.it, em MP4 com som. Cole um link do Reddit e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do Reddit',
    intro: 'Cole o link de uma publicação do Reddit e baixe o vídeo com som, inclusive os hospedados no v.redd.it.',
    about: [
      'O Reddit guarda vídeo e áudio como arquivos separados. O ExportVid os une em um único MP4 com uma cópia direta dos fluxos, então a qualidade não muda e o som fica incluído.',
      'Só é possível baixar vídeos de subreddits e publicações abertos. Subreddits em quarentena, privados ou que exigem login, não.',
    ],
    supportedContentTypes: [
      { label: 'Vídeos do Reddit', description: 'Vídeos hospedados no v.redd.it.' },
      { label: 'GIFs do Reddit', description: 'Publicações em loop que o Reddit entrega como clipes de vídeo curtos.' },
    ],
    formats: ['MP4 com vídeo e áudio, unidos a partir de arquivos separados quando necessário'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Reddit com som?',
        a: 'Copie o link da publicação, cole na caixa acima e toque em Baixar. O ExportVid une o vídeo e o áudio em um só arquivo para você.',
      },
      {
        q: 'Por que um download do Reddit demora um pouco mais?',
        a: 'O Reddit guarda vídeo e áudio em dois arquivos. O ExportVid precisa de uma etapa rápida para uni-los, sem recodificar nenhum dos dois.',
      },
      {
        q: 'Posso baixar de subreddits privados ou em quarentena?',
        a: 'Não. Só publicações de subreddits abertos são compatíveis.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Baixar vídeos do Pinterest: pins de vídeo em MP4',
    metaDescription: 'Baixe pins de vídeo do Pinterest em MP4. Cole um link do pinterest.com ou pin.it e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do Pinterest',
    intro: 'Cole o link de um pin de vídeo do Pinterest e baixe em MP4.',
    about: [
      'O ExportVid aceita links do pinterest.com/pin e links curtos do pin.it, e encontra o arquivo de vídeo que o Pinterest entrega para aquele pin.',
      'O Pinterest costuma oferecer uma única resolução principal por vídeo, então normalmente você verá um único MP4 igual ao que o Pinterest fornece.',
    ],
    supportedContentTypes: [{ label: 'Pins de vídeo', description: 'Pins que contêm um vídeo.' }],
    formats: ['MP4 com vídeo e áudio, na resolução que o Pinterest oferece para o pin'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Pinterest?',
        a: 'Copie o link do pin, cole na caixa acima e toque em Baixar.',
      },
      { q: 'Posso baixar pins de imagem?', a: 'Ainda não. O ExportVid é compatível com pins do Pinterest que contêm vídeo.' },
      { q: 'Os links do pin.it funcionam?', a: 'Sim. Os links curtos do pin.it funcionam diretamente.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Baixar Snapchat Spotlight: salve vídeos em MP4',
    metaDescription: 'Baixe vídeos do Snapchat Spotlight em MP4. Cole um link do snapchat.com/spotlight e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar Snapchat Spotlight',
    intro: 'Cole o link de um Snapchat Spotlight e baixe o vídeo em MP4.',
    about: [
      'O ExportVid aceita links do snapchat.com/spotlight e baixa o arquivo de vídeo que o Snapchat entrega para aquele Spotlight.',
      'Os vídeos do Spotlight vêm em um único MP4, então você verá uma só opção de download.',
    ],
    supportedContentTypes: [{ label: 'Vídeos do Spotlight', description: 'Vídeos compartilhados no Snapchat Spotlight.' }],
    formats: ['MP4 com vídeo e áudio, como o Snapchat entrega'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Snapchat Spotlight?',
        a: 'Copie o link do Spotlight, cole na caixa acima e toque em Baixar.',
      },
      { q: 'Posso baixar Stories do Snapchat?', a: 'Ainda não. O ExportVid é compatível com vídeos do Spotlight.' },
      { q: 'Posso baixar snaps privados?', a: 'Não. O ExportVid só funciona com conteúdo que qualquer pessoa pode ver.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Baixar clipes da Twitch: salve clipes em MP4',
    metaDescription: 'Baixe clipes da Twitch em MP4. Cole um link do clips.twitch.tv e salve o clipe no seu dispositivo de graça.',
    h1: 'Baixar clipes da Twitch',
    intro: 'Cole o link de um clipe da Twitch e baixe em MP4.',
    about: [
      'O ExportVid aceita links do clips.twitch.tv e links do twitch.tv/canal/clip.',
      'A Twitch entrega cada clipe na qualidade em que ele foi criado, e o ExportVid mostra essa qualidade como ela é.',
    ],
    supportedContentTypes: [{ label: 'Clipes da Twitch', description: 'Clipes de qualquer canal.' }],
    formats: ['MP4 com vídeo e áudio, na resolução que a Twitch oferece para o clipe'],
    faqs: [
      {
        q: 'Como baixo um clipe da Twitch?',
        a: 'Copie o link do clipe, cole na caixa acima e toque em Baixar.',
      },
      { q: 'Posso baixar transmissões completas ou VODs?', a: 'Não. O ExportVid é compatível somente com clipes.' },
      { q: 'Quais links da Twitch funcionam?', a: 'Links que começam com clips.twitch.tv e links do twitch.tv/canal/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Baixar vídeos do LinkedIn em MP4',
    metaDescription: 'Baixe vídeos de publicações do LinkedIn em MP4. Cole um link do linkedin.com/posts e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do LinkedIn',
    intro: 'Cole o link de uma publicação do LinkedIn e baixe o vídeo em MP4.',
    about: [
      'O ExportVid aceita links do linkedin.com/posts de publicações que podem ser vistas sem fazer login.',
      'O LinkedIn entrega cada vídeo como um único MP4, então você verá uma só opção de download.',
    ],
    supportedContentTypes: [{ label: 'Publicações com vídeo', description: 'Publicações que incluem um vídeo.' }],
    formats: ['MP4 com vídeo e áudio, como o LinkedIn entrega'],
    faqs: [
      {
        q: 'Como baixo um vídeo do LinkedIn?',
        a: 'Copie o link da publicação, cole na caixa acima e toque em Baixar.',
      },
      {
        q: 'Por que meu link diz que o conteúdo é privado?',
        a: 'A publicação só pode ser vista por membros do LinkedIn com login, e o ExportVid só acessa publicações que qualquer pessoa pode ver.',
      },
      { q: 'Posso baixar cursos do LinkedIn Learning?', a: 'Não. O conteúdo dos cursos exige uma conta e não é compatível.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Baixar vídeos do Tumblr em MP4',
    metaDescription: 'Baixe vídeos de publicações do Tumblr em MP4. Cole o link de uma publicação de qualquer blog do Tumblr e salve o vídeo de graça.',
    h1: 'Baixar vídeos do Tumblr',
    intro: 'Cole o link de uma publicação do Tumblr com vídeo e baixe em MP4.',
    about: [
      'O ExportVid aceita links de publicações do tumblr.com e de qualquer endereço nomedoblog.tumblr.com.',
      'Só é possível baixar vídeos de blogs e publicações que qualquer pessoa pode ver.',
    ],
    supportedContentTypes: [{ label: 'Publicações com vídeo', description: 'Publicações do Tumblr que incluem um vídeo.' }],
    formats: ['MP4 com vídeo e áudio, como o Tumblr entrega'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Tumblr?',
        a: 'Copie o link da publicação, cole na caixa acima e toque em Baixar.',
      },
      { q: 'Os subdomínios de blogs funcionam?', a: 'Sim. Links como nomedoblog.tumblr.com/post/... funcionam.' },
      { q: 'Posso baixar de um blog privado?', a: 'Não. Blogs que exigem login não são compatíveis.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Baixar vídeos do Vimeo em MP4',
    metaDescription: 'Baixe vídeos do Vimeo em MP4. Cole um link do vimeo.com, escolha a qualidade e salve o vídeo no seu dispositivo de graça.',
    h1: 'Baixar vídeos do Vimeo',
    intro: 'Cole o link de um vídeo do Vimeo e baixe em MP4.',
    about: [
      'O ExportVid aceita links do vimeo.com e links de incorporação do player.vimeo.com.',
      'Vídeos que o dono deixou privados, com senha ou limitados a certos sites não podem ser baixados.',
    ],
    supportedContentTypes: [{ label: 'Vídeos do Vimeo', description: 'Vídeos que você pode assistir sem fazer login.' }],
    formats: ['MP4 com vídeo e áudio, em todas as resoluções que o Vimeo oferece para o vídeo'],
    faqs: [
      {
        q: 'Como baixo um vídeo do Vimeo?',
        a: 'Copie o link do vídeo, cole na caixa acima e toque em Baixar. Depois escolha uma qualidade.',
      },
      {
        q: 'Por que não consigo baixar meu link do Vimeo?',
        a: 'O vídeo provavelmente é privado, tem senha ou está limitado a certos domínios. O ExportVid só acessa vídeos que qualquer pessoa pode assistir.',
      },
      { q: 'Os links de incorporação funcionam?', a: 'Sim. Os links do player.vimeo.com funcionam.' },
    ],
  },
};
