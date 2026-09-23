import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = '上のボックスに貼り付けて「ダウンロード」を押します';

export const ja: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'YouTube 動画をダウンロード｜YouTube から MP4 へ',
    metaDescription:
      'YouTube の動画と Shorts を無料で MP4 に保存。youtube.com または youtu.be のリンクを貼り付け、画質を選んで端末に保存できます。',
    h1: 'YouTube 動画をダウンロード',
    intro: 'YouTube のリンクを貼り付けるだけで、動画や Shorts を利用できる最高の画質で MP4 として保存できます。',
    about: [
      'ExportVid は、youtube.com/watch の通常のリンク、youtu.be の短縮リンク、youtube.com/shorts のリンクに対応しています。',
      'YouTube は通常、1 本の動画につき複数の解像度を用意しています。ExportVid はアップロードされた最高画質まで、そのすべてを一覧表示します。高解像度では動画と音声が別々に保存されているため、ExportVid が再エンコードせずに 1 つの MP4 に結合します。',
    ],
    supportedContentTypes: [
      { label: 'YouTube 動画', description: 'あらゆるチャンネルの通常のアップロード動画。' },
      { label: 'YouTube Shorts', description: 'Shorts フィードの縦型ショート動画。' },
    ],
    formats: ['動画と音声を含む MP4。YouTube がその動画に提供するすべての解像度に対応'],
    faqs: [
      {
        q: 'YouTube の動画はどうやってダウンロードしますか？',
        a: `YouTube で動画のリンクをコピーし、${paste}。一覧から画質を選んでファイルを保存してください。`,
      },
      {
        q: 'YouTube の動画を MP4 に変換するには？',
        a: '動画のリンクを上のボックスに貼り付けて「ダウンロード」を押すだけです。ExportVid は動画を最初から MP4 ファイルとして保存するため、追加の変換は必要ありません。',
      },
      {
        q: 'YouTube Shorts もダウンロードできますか？',
        a: 'はい。Shorts のリンクを貼り付ければ、ExportVid が自動で認識します。詳しくは YouTube Shorts ダウンロードのページをご覧ください。',
      },
      {
        q: 'youtu.be のリンクは使えますか？',
        a: 'はい。youtu.be の短縮リンクも youtube.com の通常のリンクも使えます。',
      },
      {
        q: '非公開動画やメンバー限定動画はダウンロードできますか？',
        a: 'いいえ。非公開動画やメンバー限定動画にはログインが必要で、ExportVid はログインで保護されたコンテンツにはアクセスしません。',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'YouTube Shorts をダウンロード｜MP4 で保存',
    metaDescription: 'YouTube Shorts を無料で MP4 に保存。youtube.com/shorts のリンクを貼り付け、画質を選んで端末に保存できます。',
    h1: 'YouTube Shorts をダウンロード',
    intro: 'YouTube Shorts のリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'ExportVid は youtube.com/shorts のリンクを認識し、その Shorts に対して YouTube が提供する動画ファイルを見つけます。通常の youtube.com/watch のリンクでも動作します。',
      '一覧には、その Shorts に対して YouTube が提供するすべての画質が表示されるので、お使いの端末に合ったものを選べます。',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Shorts フィードの縦型ショート動画。' }],
    formats: ['動画と音声を含む MP4。YouTube がその Shorts に提供するすべての解像度に対応'],
    faqs: [
      {
        q: 'YouTube Shorts はどうやってダウンロードしますか？',
        a: 'Shorts を開いてリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。その後、画質を選んでファイルを保存してください。',
      },
      {
        q: 'ダウンロードした動画には音声も入っていますか？',
        a: 'はい。YouTube が動画と音声を別ファイルで配信している場合も、ExportVid が音声を保持して動画と結合します。',
      },
      {
        q: '長い YouTube 動画もダウンロードできますか？',
        a: 'はい。YouTube 動画ダウンローダーは、通常の動画リンクであれば利用できます。',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Facebook 動画をダウンロード｜動画・リールを MP4 で保存',
    metaDescription:
      'Facebook の動画とリールを無料で MP4 に保存。facebook.com または fb.watch のリンクを貼り付け、画質を選んで端末に保存できます。',
    h1: 'Facebook 動画をダウンロード',
    intro: 'Facebook 動画のリンク（fb.watch の短縮リンクを含む）を貼り付けて、MP4 をダウンロードできます。',
    about: [
      'Facebook では、通常の視聴リンク、fb.watch の短縮リンク、リールのリンクで動画が共有されます。ExportVid はこの 3 つを同じように扱います。',
      '公開ページ、公開プロフィール、公開グループの動画はダウンロードできます。非公開グループや承認制グループ内の動画はダウンロードできません。',
    ],
    supportedContentTypes: [
      { label: 'Facebook 動画', description: '公開ページ、プロフィール、グループの動画投稿。' },
      { label: 'Facebook リール', description: 'リールとして投稿された縦型ショート動画。' },
    ],
    formats: ['動画と音声を含む MP4。Facebook がその動画に提供するすべての解像度に対応'],
    faqs: [
      {
        q: 'Facebook の動画はどうやってダウンロードしますか？',
        a: `動画のリンクをコピーし、${paste}。その後、画質を選んでファイルを保存してください。`,
      },
      {
        q: 'fb.watch のリンクは使えますか？',
        a: 'はい。fb.watch の短縮リンクはそのまま使えます。',
      },
      {
        q: '非公開の Facebook グループの動画をダウンロードできますか？',
        a: 'いいえ。ExportVid は誰でも閲覧できるコンテンツにのみ対応しており、プライバシー設定を回避することはありません。',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Facebook リールをダウンロード｜MP4 で保存',
    metaDescription: 'Facebook リールを無料で MP4 に保存。リールのリンクを貼り付け、画質を選んで端末に保存できます。',
    h1: 'Facebook リールをダウンロード',
    intro: 'Facebook リールのリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: ['Facebook リールのリンクには /reel/ が含まれます。ExportVid が自動で認識し、動画ファイルを見つけます。'],
    supportedContentTypes: [{ label: 'Facebook リール', description: 'Facebook ページやプロフィールのリール。' }],
    formats: ['動画と音声を含む MP4。Facebook が提供する解像度に対応'],
    faqs: [
      {
        q: 'Facebook のリールはどうやってダウンロードしますか？',
        a: 'リールのリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      {
        q: 'リンクを開くと Facebook アプリが起動します。何を貼り付ければいいですか？',
        a: 'アプリから共有したリンクではなく、facebook.com/reel または fb.watch で始まるウェブ用のリンクを貼り付けてください。どちらも同じ動画につながります。',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Instagram をダウンロード｜リール・動画・写真を保存',
    metaDescription:
      'Instagram のリール、動画、写真、カルーセル、ストーリーズを無料で保存。Instagram のリンクを貼り付けると、ExportVid がコンテンツの種類を自動で判別します。',
    h1: 'Instagram の動画・写真をダウンロード',
    intro: 'リール、投稿、写真、カルーセル、ストーリーズの Instagram リンクを貼り付けてください。ExportVid が種類を判別し、ダウンロードできるものを表示します。',
    about: [
      'Instagram では、種類の異なるコンテンツにも似たリンクが使われています。ExportVid はリール（/reel/）、フィード投稿（/p/）、ストーリーズ、プロフィールを見分けます。',
      'カルーセル投稿では、写真と動画が 1 つずつ一覧表示されるので、必要なものだけをダウンロードできます。',
    ],
    supportedContentTypes: [
      { label: 'リール', description: 'リールとして投稿された縦型ショート動画。' },
      { label: '動画投稿', description: '通常のフィード投稿として共有された動画。' },
      { label: '写真', description: '画像 1 枚のフィード投稿。' },
      { label: 'カルーセル', description: '複数の写真や動画を含む投稿。1 つずつ表示されます。' },
      { label: 'ストーリーズ', description: '公開中のストーリーズ。' },
      { label: 'プロフィール画像', description: 'アカウントのプロフィール画像。' },
    ],
    faqs: [
      {
        q: 'Instagram の動画や写真はどうやってダウンロードしますか？',
        a: 'Instagram で投稿のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。その後、保存したいファイルを選んでください。',
      },
      {
        q: '非公開の Instagram アカウントからダウンロードできますか？',
        a: 'いいえ。ExportVid は誰でも閲覧できる投稿にのみ対応しています。非公開アカウントにアクセスすることはありません。',
      },
      {
        q: 'Instagram のストーリーズはどうやってダウンロードしますか？',
        a: 'ストーリーズを開いてリンクをコピーし、上のボックスに貼り付けます。公開中で、誰でも閲覧できるアカウントのストーリーズであればダウンロードできます。',
      },
      {
        q: 'カルーセルの写真をすべてダウンロードできますか？',
        a: 'はい。カルーセル内の写真や動画は、それぞれ専用のダウンロードボタン付きで一覧に表示されます。',
      },
      {
        q: 'Instagram のハイライトはダウンロードできますか？',
        a: 'はい。誰でも閲覧できるプロフィールに Instagram がハイライトを表示している場合に対応します。ハイライトの各項目はストーリーズと同じように扱われます。',
      },
    ],
    formats: ['動画は音声付き MP4', '写真、カルーセルの画像、プロフィール画像は JPEG'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Instagram リールをダウンロード｜MP4 で保存',
    metaDescription: 'Instagram リールを利用できる最高画質の MP4 で保存。リールのリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'Instagram リールをダウンロード',
    intro: 'Instagram リールのリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'リールは Instagram の縦型ショート動画です。ExportVid は /reel/ や /reels/ を含むリンクを認識し、動画ファイルを直接見つけます。',
      '表示される画質は、Instagram がそのリールに提供している画質そのものです。ExportVid が解像度を引き上げたり、表記を変えたりすることはありません。',
    ],
    supportedContentTypes: [{ label: 'Instagram リール', description: 'ビジネスやクリエイターのプロフィールを含む、あらゆるアカウントのリール。' }],
    formats: ['動画と音声を含む MP4。Instagram が提供する解像度に対応'],
    faqs: [
      {
        q: 'Instagram のリールはどうやってダウンロードしますか？',
        a: 'リールを開いてリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      {
        q: 'どのリールのリンクが使えますか？',
        a: 'instagram.com/reel/ または instagram.com/reels/ のリンクなら使えます。通常の投稿リンクとして共有されたリールも対象です。',
      },
      {
        q: 'ダウンロードした動画には音声も入っていますか？',
        a: 'はい。ほとんどのリールは音声と映像が一体になっており、ExportVid は両方を保持します。',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'TikTok 動画をダウンロード｜ロゴなしで MP4 保存',
    metaDescription:
      'TikTok の動画を MP4 で保存。TikTok がクリーンなファイルを提供している場合はウォーターマークなしで保存できます。リンクを貼り付けるだけで無料で端末に保存できます。',
    h1: 'TikTok 動画をダウンロード',
    intro: 'TikTok のリンクを貼り付けて、TikTok が提供する最高画質の MP4 として保存できます。クリーンなファイルがある場合はウォーターマークなしです。',
    about: [
      'ExportVid は、tiktok.com/@ユーザー名/video/123 のような通常のリンクと、vm.tiktok.com や vt.tiktok.com の短縮リンクに対応しています。',
      'TikTok は複数の解像度ではなく、動画ごとに 1 種類の画質を配信するのが一般的です。そのため、MP4 が 1 つだけ表示されることがよくあります。それが TikTok の提供する実際のファイルです。ExportVid が存在しない選択肢を作り出すことはありません。',
    ],
    supportedContentTypes: [{ label: 'TikTok 動画', description: '通常または短縮の TikTok リンクの動画。' }],
    formats: ['動画と音声を含む MP4。TikTok がクリーンなファイルを提供している場合はウォーターマークなし', 'TikTok がその動画に提供する解像度の MP4'],
    faqs: [
      {
        q: 'TikTok の動画をウォーターマークなしでダウンロードするには？',
        a: 'TikTok のリンクを上のボックスに貼り付けて「ダウンロード」を押します。TikTok がウォーターマークなしのバージョンを提供している場合は、ExportVid がそちらを選びます。',
      },
      {
        q: 'ダウンロードした動画にウォーターマークが残っているのはなぜですか？',
        a: '一部の動画は、ウォーターマーク付きのものしか存在しません。その場合、ExportVid ではウォーターマークを消せず、TikTok が提供する状態のままファイルをお渡しします。',
      },
      {
        q: '画質の選択肢が 1 つしかないのはなぜですか？',
        a: 'TikTok は動画ごとに 1 種類のバージョンしか配信しないことがよくあります。ExportVid は実際に存在するものだけを表示し、ない画質を追加することはありません。',
      },
      {
        q: '非公開の TikTok アカウントの動画をダウンロードできますか？',
        a: 'いいえ。非公開アカウントや、ログインで保護された動画には対応していません。',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'X（Twitter）動画をダウンロード｜MP4 で保存',
    metaDescription: 'X（Twitter）の投稿の動画を MP4 で保存。x.com または twitter.com のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'X（Twitter）動画をダウンロード',
    intro: 'x.com または twitter.com の投稿リンクを貼り付けて、動画をダウンロードできます。',
    about: [
      'X は動画ごとに複数の解像度を提供しており、通常は 1080p までです。ExportVid はそのすべてを、ファイルサイズとともに表示します。',
      '誰でも閲覧できる投稿の動画のみダウンロードできます。非公開（保護された）アカウントの投稿は対象外です。',
    ],
    supportedContentTypes: [{ label: 'X の動画', description: 'x.com または twitter.com の投稿に添付された動画。' }],
    formats: ['動画と音声を含む MP4。投稿が提供するすべての解像度に対応（通常は 1080p まで）'],
    faqs: [
      {
        q: 'X や Twitter の動画はどうやってダウンロードしますか？',
        a: '投稿のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。解像度を選んでファイルを保存してください。',
      },
      {
        q: 'x.com と twitter.com のどちらのリンクも使えますか？',
        a: 'はい。どちらのドメインも同じプラットフォームにつながっており、ExportVid はどちらも受け付けます。',
      },
      {
        q: '投稿に動画が表示されないのはなぜですか？',
        a: '投稿に画像しか含まれていないか、ダウンロードできる動画が見つからなかった可能性があります。ExportVid は実際に存在するファイルだけを表示します。',
      },
      {
        q: '保護されたアカウントからダウンロードできますか？',
        a: 'いいえ。保護されたアカウントは X へのログインが必要で、ExportVid はログインで保護されたコンテンツにはアクセスしません。',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Reddit 動画を音声付きでダウンロード｜MP4 で保存',
    metaDescription: 'v.redd.it を含む Reddit の動画を、音声付きの MP4 で保存。Reddit のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'Reddit 動画をダウンロード',
    intro: 'Reddit の投稿リンクを貼り付けて、v.redd.it でホストされている動画も含め、音声付きでダウンロードできます。',
    about: [
      'Reddit は動画と音声を別々のファイルで保持しています。ExportVid はストリームをそのままコピーして 1 つの MP4 に結合するため、画質は変わらず、音声も含まれます。',
      '公開されているサブレディットと投稿の動画のみダウンロードできます。隔離されたサブレディット、非公開のサブレディット、ログインが必要なサブレディットは対象外です。',
    ],
    supportedContentTypes: [
      { label: 'Reddit 動画', description: 'v.redd.it でホストされている動画。' },
      { label: 'Reddit GIF', description: 'Reddit が短い動画クリップとして配信しているループ投稿。' },
    ],
    formats: ['動画と音声を含む MP4。必要に応じて別々のファイルから結合'],
    faqs: [
      {
        q: 'Reddit の動画を音声付きでダウンロードするには？',
        a: '投稿のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。ExportVid が動画と音声を 1 つのファイルに結合します。',
      },
      {
        q: 'Reddit のダウンロードに少し時間がかかることがあるのはなぜですか？',
        a: 'Reddit は動画と音声を 2 つのファイルで保持しています。結合するために短い処理が必要ですが、どちらも再エンコードはしません。',
      },
      {
        q: '非公開または隔離されたサブレディットからダウンロードできますか？',
        a: 'いいえ。公開されているサブレディットの投稿のみ対応しています。',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Pinterest 動画をダウンロード｜動画ピンを MP4 で保存',
    metaDescription: 'Pinterest の動画ピンを MP4 で保存。pinterest.com または pin.it のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'Pinterest 動画をダウンロード',
    intro: 'Pinterest の動画ピンのリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'ExportVid は pinterest.com/pin のリンクと pin.it の短縮リンクに対応し、そのピンに対して Pinterest が提供する動画ファイルを見つけます。',
      'Pinterest は通常、動画ごとに主要な解像度を 1 つだけ提供します。そのため、Pinterest の提供内容と同じ MP4 が 1 つ表示されるのが一般的です。',
    ],
    supportedContentTypes: [{ label: '動画ピン', description: '動画を含むピン。' }],
    formats: ['動画と音声を含む MP4。Pinterest がそのピンに提供する解像度に対応'],
    faqs: [
      {
        q: 'Pinterest の動画はどうやってダウンロードしますか？',
        a: 'ピンのリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      { q: '画像ピンはダウンロードできますか？', a: 'まだ対応していません。ExportVid は動画を含む Pinterest のピンに対応しています。' },
      { q: 'pin.it のリンクは使えますか？', a: 'はい。pin.it の短縮リンクはそのまま使えます。' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Snapchat Spotlight をダウンロード｜動画を MP4 で保存',
    metaDescription: 'Snapchat の Spotlight 動画を MP4 で保存。snapchat.com/spotlight のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'Snapchat Spotlight をダウンロード',
    intro: 'Snapchat Spotlight のリンクを貼り付けて、動画を MP4 としてダウンロードできます。',
    about: [
      'ExportVid は snapchat.com/spotlight のリンクに対応し、その Spotlight に対して Snapchat が提供する動画ファイルをダウンロードします。',
      'Spotlight の動画は 1 つの MP4 として配信されるため、ダウンロードの選択肢は 1 つだけ表示されます。',
    ],
    supportedContentTypes: [{ label: 'Spotlight 動画', description: 'Snapchat Spotlight で共有された動画。' }],
    formats: ['動画と音声を含む MP4。Snapchat が配信するそのままの形式'],
    faqs: [
      {
        q: 'Snapchat Spotlight の動画はどうやってダウンロードしますか？',
        a: 'Spotlight のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      { q: 'Snapchat のストーリーはダウンロードできますか？', a: 'まだ対応していません。ExportVid は Spotlight の動画に対応しています。' },
      { q: '非公開のスナップはダウンロードできますか？', a: 'いいえ。ExportVid は誰でも閲覧できるコンテンツにのみ対応しています。' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Twitch クリップをダウンロード｜MP4 で保存',
    metaDescription: 'Twitch のクリップを MP4 で保存。clips.twitch.tv のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'Twitch クリップをダウンロード',
    intro: 'Twitch クリップのリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'ExportVid は clips.twitch.tv のリンクと twitch.tv/チャンネル/clip のリンクに対応しています。',
      'Twitch は各クリップを作成時の画質で配信しており、ExportVid はその画質をそのまま表示します。',
    ],
    supportedContentTypes: [{ label: 'Twitch クリップ', description: 'あらゆるチャンネルのクリップ。' }],
    formats: ['動画と音声を含む MP4。Twitch がそのクリップに提供する解像度に対応'],
    faqs: [
      {
        q: 'Twitch のクリップはどうやってダウンロードしますか？',
        a: 'クリップのリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      { q: '配信全体や VOD はダウンロードできますか？', a: 'いいえ。ExportVid はクリップのみに対応しています。' },
      { q: 'どの Twitch のリンクが使えますか？', a: 'clips.twitch.tv で始まるリンクと、twitch.tv/チャンネル/clip のリンクです。' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'LinkedIn 動画をダウンロード｜MP4 で保存',
    metaDescription: 'LinkedIn の投稿の動画を MP4 で保存。linkedin.com/posts のリンクを貼り付けるだけで、無料で端末に保存できます。',
    h1: 'LinkedIn 動画をダウンロード',
    intro: 'LinkedIn の投稿リンクを貼り付けて、動画を MP4 としてダウンロードできます。',
    about: [
      'ExportVid は、ログインなしで表示できる投稿の linkedin.com/posts のリンクに対応しています。',
      'LinkedIn は各動画を 1 つの MP4 として配信するため、ダウンロードの選択肢は 1 つだけ表示されます。',
    ],
    supportedContentTypes: [{ label: '動画投稿', description: '動画を含む投稿。' }],
    formats: ['動画と音声を含む MP4。LinkedIn が配信するそのままの形式'],
    faqs: [
      {
        q: 'LinkedIn の動画はどうやってダウンロードしますか？',
        a: '投稿のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      {
        q: 'リンクを入力すると「非公開」と表示されるのはなぜですか？',
        a: 'その投稿はログイン済みの LinkedIn メンバーにしか表示されず、ExportVid は誰でも閲覧できる投稿にしかアクセスできないためです。',
      },
      { q: 'LinkedIn Learning のコースはダウンロードできますか？', a: 'いいえ。コースの内容にはアカウントが必要なため、対応していません。' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Tumblr 動画をダウンロード｜MP4 で保存',
    metaDescription: 'Tumblr の投稿の動画を MP4 で保存。任意の Tumblr ブログの投稿リンクを貼り付けるだけで、無料で保存できます。',
    h1: 'Tumblr 動画をダウンロード',
    intro: 'Tumblr の動画投稿のリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'ExportVid は tumblr.com の投稿と、ブログ名.tumblr.com 形式のアドレスの投稿リンクに対応しています。',
      '誰でも閲覧できるブログと投稿の動画のみダウンロードできます。',
    ],
    supportedContentTypes: [{ label: '動画投稿', description: '動画を含む Tumblr の投稿。' }],
    formats: ['動画と音声を含む MP4。Tumblr が配信するそのままの形式'],
    faqs: [
      {
        q: 'Tumblr の動画はどうやってダウンロードしますか？',
        a: '投稿のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。',
      },
      { q: 'ブログのサブドメインは使えますか？', a: 'はい。ブログ名.tumblr.com/post/... のようなリンクが使えます。' },
      { q: '非公開のブログからダウンロードできますか？', a: 'いいえ。ログインが必要なブログには対応していません。' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Vimeo 動画をダウンロード｜MP4 で保存',
    metaDescription: 'Vimeo の動画を MP4 で保存。vimeo.com のリンクを貼り付け、画質を選んで無料で端末に保存できます。',
    h1: 'Vimeo 動画をダウンロード',
    intro: 'Vimeo 動画のリンクを貼り付けて、MP4 としてダウンロードできます。',
    about: [
      'ExportVid は vimeo.com のリンクと player.vimeo.com の埋め込みリンクに対応しています。',
      '所有者が非公開、パスワード保護、または特定のサイトのみに制限している動画は、ダウンロードできません。',
    ],
    supportedContentTypes: [{ label: 'Vimeo 動画', description: 'ログインなしで視聴できる動画。' }],
    formats: ['動画と音声を含む MP4。Vimeo がその動画に提供するすべての解像度に対応'],
    faqs: [
      {
        q: 'Vimeo の動画はどうやってダウンロードしますか？',
        a: '動画のリンクをコピーし、上のボックスに貼り付けて「ダウンロード」を押します。その後、画質を選んでください。',
      },
      {
        q: 'Vimeo のリンクをダウンロードできないのはなぜですか？',
        a: '動画が非公開、パスワード保護、または特定のドメインに制限されている可能性があります。ExportVid は誰でも視聴できる動画にのみアクセスできます。',
      },
      { q: '埋め込みリンクは使えますか？', a: 'はい。player.vimeo.com のリンクが使えます。' },
    ],
  },
};
