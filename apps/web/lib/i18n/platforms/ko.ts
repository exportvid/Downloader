import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = '위 입력창에 붙여넣고 다운로드를 누르세요';

export const ko: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: '유튜브 동영상 다운로드: YouTube MP4 저장',
    metaDescription:
      '유튜브 동영상과 쇼츠를 무료로 MP4로 다운로드하세요. youtube.com 또는 youtu.be 링크를 붙여넣고 화질을 골라 기기에 저장할 수 있어요.',
    h1: '유튜브 동영상 다운로드',
    intro: 'YouTube 링크를 붙여넣으면 동영상이나 쇼츠를 가능한 최고 화질의 MP4로 다운로드할 수 있어요.',
    about: [
      'ExportVid는 전체 youtube.com/watch 링크, 짧은 youtu.be 링크, youtube.com/shorts 링크를 모두 지원해요.',
      'YouTube는 보통 영상마다 여러 해상도를 제공해요. ExportVid는 업로드된 영상의 최고 화질까지 모두 보여줘요. 높은 해상도는 영상과 소리가 따로 저장되어 있어서, ExportVid가 다시 인코딩하지 않고 하나의 MP4로 합쳐요.',
    ],
    supportedContentTypes: [
      { label: 'YouTube 동영상', description: '모든 채널의 일반 업로드 영상.' },
      { label: 'YouTube 쇼츠', description: '쇼츠 피드의 짧은 세로 영상.' },
    ],
    formats: ['영상과 소리가 포함된 MP4, YouTube가 해당 영상에 제공하는 모든 해상도'],
    faqs: [
      {
        q: '유튜브 동영상은 어떻게 다운로드하나요?',
        a: `YouTube에서 영상 링크를 복사해서 ${paste}. 목록에서 화질을 고르고 파일을 저장하세요.`,
      },
      {
        q: '유튜브 영상을 MP4로 변환하려면 어떻게 하나요?',
        a: '영상 링크를 위 입력창에 붙여넣고 다운로드를 누르세요. ExportVid는 영상을 바로 MP4 파일로 저장하기 때문에 따로 변환할 필요가 없어요.',
      },
      {
        q: 'YouTube 쇼츠도 다운로드할 수 있나요?',
        a: '네. 쇼츠 링크를 붙여넣으면 ExportVid가 자동으로 인식해요. 자세한 내용은 YouTube 쇼츠 다운로드 페이지에서 확인하세요.',
      },
      {
        q: 'youtu.be 링크도 되나요?',
        a: '네. 짧은 youtu.be 링크와 전체 youtube.com 링크 모두 작동해요.',
      },
      {
        q: '비공개 영상이나 멤버십 전용 영상도 다운로드할 수 있나요?',
        a: '아니요. 비공개 영상과 멤버십 전용 영상은 로그인이 필요하고, ExportVid는 로그인으로 보호된 콘텐츠에 접근하지 않아요.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: '유튜브 쇼츠 다운로드: MP4로 저장',
    metaDescription: 'YouTube 쇼츠를 무료로 MP4로 다운로드하세요. youtube.com/shorts 링크를 붙여넣고 화질을 골라 기기에 저장할 수 있어요.',
    h1: '유튜브 쇼츠 다운로드',
    intro: 'YouTube 쇼츠 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 youtube.com/shorts 링크를 인식해서 YouTube가 해당 쇼츠에 제공하는 영상 파일을 찾아요. 일반 youtube.com/watch 링크도 사용할 수 있어요.',
      '목록에는 YouTube가 해당 쇼츠에 제공하는 모든 화질이 표시되니, 내 기기에 맞는 것을 고를 수 있어요.',
    ],
    supportedContentTypes: [{ label: 'YouTube 쇼츠', description: '쇼츠 피드의 짧은 세로 영상.' }],
    formats: ['영상과 소리가 포함된 MP4, YouTube가 해당 쇼츠에 제공하는 모든 해상도'],
    faqs: [
      {
        q: '유튜브 쇼츠는 어떻게 다운로드하나요?',
        a: '쇼츠를 열고 링크를 복사해서 위 입력창에 붙여넣은 뒤 다운로드를 누르세요. 그다음 화질을 고르고 파일을 저장하면 돼요.',
      },
      {
        q: '다운로드한 영상에 소리도 들어 있나요?',
        a: '네. YouTube가 영상과 소리를 별도 파일로 제공하는 경우에도 ExportVid가 소리를 유지해서 영상과 합쳐요.',
      },
      {
        q: '더 긴 유튜브 영상도 다운로드할 수 있나요?',
        a: '네. YouTube 동영상 다운로더는 일반 영상 링크라면 무엇이든 사용할 수 있어요.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: '페이스북 동영상 다운로드: 영상·릴스 MP4 저장',
    metaDescription:
      '페이스북 동영상과 릴스를 무료로 MP4로 다운로드하세요. facebook.com 또는 fb.watch 링크를 붙여넣고 화질을 골라 기기에 저장할 수 있어요.',
    h1: '페이스북 동영상 다운로드',
    intro: 'Facebook 동영상 링크(fb.watch 짧은 링크 포함)를 붙여넣고 MP4를 다운로드하세요.',
    about: [
      'Facebook은 일반 시청 링크, 짧은 fb.watch 링크, 릴스 링크로 영상을 공유해요. ExportVid는 세 가지를 모두 같은 방식으로 처리해요.',
      '공개 페이지, 공개 프로필, 공개 그룹의 영상은 다운로드할 수 있어요. 비공개 그룹이나 폐쇄형 그룹 안의 영상은 다운로드할 수 없어요.',
    ],
    supportedContentTypes: [
      { label: 'Facebook 동영상', description: '공개 페이지, 프로필, 그룹의 동영상 게시물.' },
      { label: 'Facebook 릴스', description: '릴스로 올린 짧은 세로 영상.' },
    ],
    formats: ['영상과 소리가 포함된 MP4, Facebook이 해당 영상에 제공하는 모든 해상도'],
    faqs: [
      {
        q: '페이스북 동영상은 어떻게 다운로드하나요?',
        a: `영상 링크를 복사해서 ${paste}. 그다음 화질을 고르고 파일을 저장하세요.`,
      },
      {
        q: 'fb.watch 링크도 되나요?',
        a: '네. 짧은 fb.watch 링크는 바로 사용할 수 있어요.',
      },
      {
        q: '비공개 페이스북 그룹의 영상도 다운로드할 수 있나요?',
        a: '아니요. ExportVid는 누구나 볼 수 있는 콘텐츠에서만 작동하며, 개인정보 보호 설정을 우회하지 않아요.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: '페이스북 릴스 다운로드: MP4로 저장',
    metaDescription: '페이스북 릴스를 무료로 MP4로 다운로드하세요. 릴스 링크를 붙여넣고 화질을 골라 기기에 저장할 수 있어요.',
    h1: '페이스북 릴스 다운로드',
    intro: 'Facebook 릴스 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: ['Facebook 릴스 링크에는 /reel/이 들어 있어요. ExportVid가 자동으로 인식해서 영상 파일을 찾아드려요.'],
    supportedContentTypes: [{ label: 'Facebook 릴스', description: 'Facebook 페이지와 프로필의 릴스.' }],
    formats: ['영상과 소리가 포함된 MP4, Facebook이 제공하는 해상도'],
    faqs: [
      {
        q: '페이스북 릴스는 어떻게 다운로드하나요?',
        a: '릴스 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      {
        q: '링크를 열면 Facebook 앱이 실행돼요. 무엇을 붙여넣어야 하나요?',
        a: '앱에서 공유한 링크 대신 facebook.com/reel 또는 fb.watch로 시작하는 웹 링크를 붙여넣으세요. 둘 다 같은 영상으로 연결돼요.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: '인스타그램 다운로드: 릴스·동영상·사진 저장',
    metaDescription:
      '인스타그램 릴스, 동영상, 사진, 캐러셀, 스토리를 무료로 다운로드하세요. Instagram 링크를 붙여넣으면 ExportVid가 콘텐츠 종류를 자동으로 인식해요.',
    h1: '인스타그램 동영상·사진 다운로드',
    intro: '릴스, 게시물, 사진, 캐러셀, 스토리의 Instagram 링크를 붙여넣으세요. ExportVid가 종류를 인식해서 다운로드할 수 있는 항목을 보여줘요.',
    about: [
      'Instagram은 종류가 다른 콘텐츠에도 비슷한 링크를 써요. ExportVid는 릴스(/reel/), 피드 게시물(/p/), 스토리, 프로필을 구분해요.',
      '캐러셀 게시물은 사진과 영상이 하나씩 따로 표시되어서, 원하는 것만 골라 다운로드할 수 있어요.',
    ],
    supportedContentTypes: [
      { label: '릴스', description: '릴스로 올린 짧은 세로 영상.' },
      { label: '동영상 게시물', description: '일반 피드 게시물로 공유된 영상.' },
      { label: '사진', description: '이미지 한 장짜리 피드 게시물.' },
      { label: '캐러셀', description: '사진이나 영상이 여러 개인 게시물. 하나씩 나열돼요.' },
      { label: '스토리', description: '아직 게시 중인 스토리.' },
      { label: '프로필 사진', description: '계정의 프로필 사진.' },
    ],
    faqs: [
      {
        q: '인스타그램 동영상이나 사진은 어떻게 다운로드하나요?',
        a: 'Instagram에서 게시물 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요. 그다음 원하는 파일을 고르면 돼요.',
      },
      {
        q: '비공개 인스타그램 계정에서도 다운로드할 수 있나요?',
        a: '아니요. ExportVid는 누구나 볼 수 있는 게시물에서만 작동해요. 비공개 계정에는 접근하지 않아요.',
      },
      {
        q: '인스타그램 스토리는 어떻게 다운로드하나요?',
        a: '스토리를 열고 링크를 복사해서 위 입력창에 붙여넣으세요. 게시 중이고 누구나 볼 수 있는 계정의 스토리라면 다운로드할 수 있어요.',
      },
      {
        q: '캐러셀의 사진을 전부 다운로드할 수 있나요?',
        a: '네. 캐러셀의 사진과 영상은 각각 자기 다운로드 버튼과 함께 목록에 표시돼요.',
      },
      {
        q: '인스타그램 하이라이트도 다운로드할 수 있나요?',
        a: '네, 누구나 볼 수 있는 프로필에 Instagram이 하이라이트를 표시하는 경우에 가능해요. 하이라이트 항목은 스토리와 똑같이 처리돼요.',
      },
    ],
    formats: ['영상은 소리가 포함된 MP4', '사진, 캐러셀 이미지, 프로필 사진은 JPEG'],
  },

  'instagram-reels-downloader': {
    metaTitle: '인스타그램 릴스 다운로드: MP4로 저장',
    metaDescription: '인스타그램 릴스를 가능한 최고 화질의 MP4로 다운로드하세요. 릴스 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '인스타그램 릴스 다운로드',
    intro: 'Instagram 릴스 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      '릴스는 Instagram의 짧은 세로 영상이에요. ExportVid는 /reel/과 /reels/가 들어간 링크를 인식하고 영상 파일을 바로 찾아요.',
      '표시되는 화질은 Instagram이 해당 릴스에 제공하는 화질 그대로예요. ExportVid는 해상도를 억지로 높이거나 표기를 바꾸지 않아요.',
    ],
    supportedContentTypes: [{ label: 'Instagram 릴스', description: '비즈니스·크리에이터 프로필을 포함한 모든 계정의 릴스.' }],
    formats: ['영상과 소리가 포함된 MP4, Instagram이 제공하는 해상도'],
    faqs: [
      {
        q: '인스타그램 릴스는 어떻게 다운로드하나요?',
        a: '릴스를 열고 링크를 복사해서 위 입력창에 붙여넣은 뒤 다운로드를 누르세요.',
      },
      {
        q: '어떤 릴스 링크가 작동하나요?',
        a: 'instagram.com/reel/ 또는 instagram.com/reels/ 링크라면 모두 작동해요. 일반 게시물 링크로 공유된 릴스도 포함돼요.',
      },
      {
        q: '다운로드한 영상에 소리도 들어 있나요?',
        a: '네. 대부분의 릴스는 소리와 영상이 함께 제공되고, ExportVid는 둘 다 그대로 유지해요.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: '틱톡 동영상 다운로드: 워터마크 없이 MP4 저장',
    metaDescription:
      '틱톡 동영상을 MP4로 다운로드하세요. 틱톡이 깨끗한 파일을 제공하면 워터마크 없이 저장돼요. 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '틱톡 동영상 다운로드',
    intro: 'TikTok 링크를 붙여넣으면 TikTok이 제공하는 최고 화질의 MP4로 저장할 수 있어요. 깨끗한 파일이 있으면 워터마크 없이 받아요.',
    about: [
      'ExportVid는 tiktok.com/@사용자명/video/123 같은 전체 링크와 vm.tiktok.com, vt.tiktok.com 짧은 링크를 지원해요.',
      'TikTok은 보통 여러 해상도 대신 영상마다 한 가지 화질만 제공해서, MP4가 하나만 보이는 경우가 많아요. 그것이 TikTok이 제공하는 실제 파일이에요. ExportVid는 없는 옵션을 만들어내지 않아요.',
    ],
    supportedContentTypes: [{ label: 'TikTok 동영상', description: '일반 또는 짧은 TikTok 링크의 영상.' }],
    formats: ['영상과 소리가 포함된 MP4, TikTok이 깨끗한 파일을 제공하면 워터마크 없음', 'TikTok이 해당 영상에 제공하는 해상도의 MP4'],
    faqs: [
      {
        q: '틱톡 동영상을 워터마크 없이 다운로드하려면 어떻게 하나요?',
        a: 'TikTok 링크를 위 입력창에 붙여넣고 다운로드를 누르세요. TikTok이 워터마크 없는 버전을 제공하면 ExportVid가 그 버전을 골라요.',
      },
      {
        q: '다운로드했는데 왜 워터마크가 그대로 있나요?',
        a: '일부 영상은 워터마크가 있는 버전만 존재해요. 이런 경우 ExportVid는 워터마크를 제거할 수 없고, TikTok이 제공하는 그대로 파일을 드려요.',
      },
      {
        q: '화질 옵션이 하나밖에 없는 이유가 뭔가요?',
        a: 'TikTok은 영상마다 한 가지 버전만 제공하는 경우가 많아요. ExportVid는 실제로 있는 것만 보여주고, 없는 화질을 추가하지 않아요.',
      },
      {
        q: '비공개 틱톡 계정의 영상도 다운로드할 수 있나요?',
        a: '아니요. 비공개 계정과 로그인으로 보호된 영상은 지원하지 않아요.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: '트위터(X) 동영상 다운로드: MP4로 저장',
    metaDescription: 'X(트위터) 게시물의 동영상을 MP4로 다운로드하세요. x.com 또는 twitter.com 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '트위터(X) 동영상 다운로드',
    intro: 'x.com 또는 twitter.com 게시물 링크를 붙여넣고 동영상을 다운로드하세요.',
    about: [
      'X는 영상마다 여러 해상도를 제공하며, 보통 1080p까지예요. ExportVid는 모든 해상도를 파일 크기와 함께 보여줘요.',
      '누구나 볼 수 있는 게시물의 영상만 다운로드할 수 있어요. 보호된 계정의 게시물은 다운로드할 수 없어요.',
    ],
    supportedContentTypes: [{ label: 'X 동영상', description: 'x.com 또는 twitter.com 게시물에 첨부된 영상.' }],
    formats: ['영상과 소리가 포함된 MP4, 게시물이 제공하는 모든 해상도(보통 1080p까지)'],
    faqs: [
      {
        q: '트위터(X) 동영상은 어떻게 다운로드하나요?',
        a: '게시물 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요. 해상도를 고르고 파일을 저장하면 돼요.',
      },
      {
        q: 'x.com과 twitter.com 링크 모두 되나요?',
        a: '네. 두 도메인은 같은 플랫폼으로 연결되고, ExportVid는 둘 다 지원해요.',
      },
      {
        q: '내 게시물에 왜 동영상이 표시되지 않나요?',
        a: '게시물에 이미지만 있거나 다운로드할 수 있는 영상을 찾지 못했을 수 있어요. ExportVid는 실제로 있는 파일만 보여줘요.',
      },
      {
        q: '보호된 계정에서도 다운로드할 수 있나요?',
        a: '아니요. 보호된 계정은 X에 로그인해야 볼 수 있고, ExportVid는 로그인으로 보호된 콘텐츠에 접근하지 않아요.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: '레딧 동영상 다운로드: 소리 포함 MP4 저장',
    metaDescription: 'v.redd.it를 포함한 레딧 동영상을 소리 포함 MP4로 다운로드하세요. Reddit 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '레딧 동영상 다운로드',
    intro: 'Reddit 게시물 링크를 붙여넣고 v.redd.it에 올라온 영상을 포함해 소리까지 함께 다운로드하세요.',
    about: [
      'Reddit은 영상과 소리를 별도 파일로 보관해요. ExportVid는 스트림을 그대로 복사해서 하나의 MP4로 합치기 때문에 화질은 그대로이고 소리도 포함돼요.',
      '공개된 서브레딧과 게시물의 영상만 다운로드할 수 있어요. 격리된 서브레딧, 비공개 서브레딧, 로그인이 필요한 서브레딧은 안 돼요.',
    ],
    supportedContentTypes: [
      { label: 'Reddit 동영상', description: 'v.redd.it에 올라온 영상.' },
      { label: 'Reddit GIF', description: 'Reddit이 짧은 영상 클립으로 제공하는 반복 재생 게시물.' },
    ],
    formats: ['영상과 소리가 포함된 MP4, 필요하면 별도 파일을 합쳐서 제공'],
    faqs: [
      {
        q: '레딧 동영상을 소리와 함께 다운로드하려면 어떻게 하나요?',
        a: '게시물 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요. ExportVid가 영상과 소리를 하나의 파일로 합쳐드려요.',
      },
      {
        q: '레딧 다운로드가 가끔 조금 더 오래 걸리는 이유가 뭔가요?',
        a: 'Reddit은 영상과 소리를 두 파일로 보관해요. ExportVid가 이를 합치는 짧은 단계가 필요하고, 어느 쪽도 다시 인코딩하지 않아요.',
      },
      {
        q: '비공개 또는 격리된 서브레딧에서도 다운로드할 수 있나요?',
        a: '아니요. 공개된 서브레딧의 게시물만 지원해요.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: '핀터레스트 동영상 다운로드: 동영상 핀 MP4 저장',
    metaDescription: '핀터레스트 동영상 핀을 MP4로 다운로드하세요. pinterest.com 또는 pin.it 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '핀터레스트 동영상 다운로드',
    intro: 'Pinterest 동영상 핀 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 pinterest.com/pin 링크와 짧은 pin.it 링크를 지원하고, 해당 핀에 대해 Pinterest가 제공하는 영상 파일을 찾아요.',
      'Pinterest는 보통 영상마다 대표 해상도를 하나만 제공해서, 대개 Pinterest가 제공하는 것과 같은 MP4가 하나 표시돼요.',
    ],
    supportedContentTypes: [{ label: '동영상 핀', description: '영상이 들어 있는 핀.' }],
    formats: ['영상과 소리가 포함된 MP4, Pinterest가 해당 핀에 제공하는 해상도'],
    faqs: [
      {
        q: '핀터레스트 동영상은 어떻게 다운로드하나요?',
        a: '핀 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      { q: '이미지 핀도 다운로드할 수 있나요?', a: '아직은 안 돼요. ExportVid는 영상이 들어 있는 Pinterest 핀을 지원해요.' },
      { q: 'pin.it 링크도 되나요?', a: '네. 짧은 pin.it 링크는 바로 사용할 수 있어요.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: '스냅챗 스포트라이트 다운로드: 영상 MP4 저장',
    metaDescription: '스냅챗 스포트라이트 영상을 MP4로 다운로드하세요. snapchat.com/spotlight 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '스냅챗 스포트라이트 다운로드',
    intro: 'Snapchat 스포트라이트 링크를 붙여넣고 영상을 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 snapchat.com/spotlight 링크를 지원하고, 해당 스포트라이트에 대해 Snapchat이 제공하는 영상 파일을 다운로드해요.',
      '스포트라이트 영상은 하나의 MP4로 제공돼서 다운로드 옵션이 하나만 표시돼요.',
    ],
    supportedContentTypes: [{ label: '스포트라이트 영상', description: 'Snapchat 스포트라이트에 공유된 영상.' }],
    formats: ['영상과 소리가 포함된 MP4, Snapchat이 제공하는 그대로'],
    faqs: [
      {
        q: '스냅챗 스포트라이트 영상은 어떻게 다운로드하나요?',
        a: '스포트라이트 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      { q: '스냅챗 스토리도 다운로드할 수 있나요?', a: '아직은 안 돼요. ExportVid는 스포트라이트 영상을 지원해요.' },
      { q: '비공개 스냅도 다운로드할 수 있나요?', a: '아니요. ExportVid는 누구나 볼 수 있는 콘텐츠에서만 작동해요.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: '트위치 클립 다운로드: MP4로 저장',
    metaDescription: '트위치 클립을 MP4로 다운로드하세요. clips.twitch.tv 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '트위치 클립 다운로드',
    intro: 'Twitch 클립 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 clips.twitch.tv 링크와 twitch.tv/채널/clip 링크를 지원해요.',
      'Twitch는 클립을 만들어질 때의 화질 그대로 제공하고, ExportVid는 그 화질을 있는 그대로 보여줘요.',
    ],
    supportedContentTypes: [{ label: 'Twitch 클립', description: '모든 채널의 클립.' }],
    formats: ['영상과 소리가 포함된 MP4, Twitch가 해당 클립에 제공하는 해상도'],
    faqs: [
      {
        q: '트위치 클립은 어떻게 다운로드하나요?',
        a: '클립 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      { q: '방송 전체나 VOD도 다운로드할 수 있나요?', a: '아니요. ExportVid는 클립만 지원해요.' },
      { q: '어떤 트위치 링크가 작동하나요?', a: 'clips.twitch.tv로 시작하는 링크와 twitch.tv/채널/clip 링크예요.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: '링크드인 동영상 다운로드: MP4로 저장',
    metaDescription: '링크드인 게시물의 동영상을 MP4로 다운로드하세요. linkedin.com/posts 링크를 붙여넣고 무료로 기기에 저장할 수 있어요.',
    h1: '링크드인 동영상 다운로드',
    intro: 'LinkedIn 게시물 링크를 붙여넣고 동영상을 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 로그인 없이 볼 수 있는 게시물의 linkedin.com/posts 링크를 지원해요.',
      'LinkedIn은 영상을 하나의 MP4로 제공해서 다운로드 옵션이 하나만 표시돼요.',
    ],
    supportedContentTypes: [{ label: '동영상 게시물', description: '영상이 들어 있는 게시물.' }],
    formats: ['영상과 소리가 포함된 MP4, LinkedIn이 제공하는 그대로'],
    faqs: [
      {
        q: '링크드인 동영상은 어떻게 다운로드하나요?',
        a: '게시물 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      {
        q: '링크를 넣었더니 비공개 콘텐츠라고 나오는 이유가 뭔가요?',
        a: '해당 게시물은 로그인한 LinkedIn 회원에게만 보이고, ExportVid는 누구나 볼 수 있는 게시물에만 접근할 수 있기 때문이에요.',
      },
      { q: 'LinkedIn Learning 강의도 다운로드할 수 있나요?', a: '아니요. 강의 콘텐츠는 계정이 필요해서 지원하지 않아요.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: '텀블러 동영상 다운로드: MP4로 저장',
    metaDescription: '텀블러 게시물의 동영상을 MP4로 다운로드하세요. 아무 텀블러 블로그의 게시물 링크를 붙여넣고 무료로 저장할 수 있어요.',
    h1: '텀블러 동영상 다운로드',
    intro: 'Tumblr 동영상 게시물 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 tumblr.com과 블로그이름.tumblr.com 형식 주소의 게시물 링크를 지원해요.',
      '누구나 볼 수 있는 블로그와 게시물의 영상만 다운로드할 수 있어요.',
    ],
    supportedContentTypes: [{ label: '동영상 게시물', description: '영상이 들어 있는 Tumblr 게시물.' }],
    formats: ['영상과 소리가 포함된 MP4, Tumblr가 제공하는 그대로'],
    faqs: [
      {
        q: '텀블러 동영상은 어떻게 다운로드하나요?',
        a: '게시물 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요.',
      },
      { q: '블로그 서브도메인도 되나요?', a: '네. 블로그이름.tumblr.com/post/... 같은 링크가 작동해요.' },
      { q: '비공개 블로그에서도 다운로드할 수 있나요?', a: '아니요. 로그인이 필요한 블로그는 지원하지 않아요.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: '비메오 동영상 다운로드: MP4로 저장',
    metaDescription: '비메오 동영상을 MP4로 다운로드하세요. vimeo.com 링크를 붙여넣고 화질을 골라 무료로 기기에 저장할 수 있어요.',
    h1: '비메오 동영상 다운로드',
    intro: 'Vimeo 영상 링크를 붙여넣고 MP4로 다운로드하세요.',
    about: [
      'ExportVid는 vimeo.com 링크와 player.vimeo.com 임베드 링크를 지원해요.',
      '소유자가 비공개, 비밀번호 보호, 또는 특정 사이트로만 제한한 영상은 다운로드할 수 없어요.',
    ],
    supportedContentTypes: [{ label: 'Vimeo 동영상', description: '로그인 없이 볼 수 있는 영상.' }],
    formats: ['영상과 소리가 포함된 MP4, Vimeo가 해당 영상에 제공하는 모든 해상도'],
    faqs: [
      {
        q: '비메오 동영상은 어떻게 다운로드하나요?',
        a: '영상 링크를 복사해서 위 입력창에 붙여넣고 다운로드를 누르세요. 그다음 화질을 고르세요.',
      },
      {
        q: '내 Vimeo 링크를 다운로드할 수 없는 이유가 뭔가요?',
        a: '영상이 비공개이거나 비밀번호로 보호되어 있거나 특정 도메인으로 제한되어 있을 가능성이 커요. ExportVid는 누구나 볼 수 있는 영상에만 접근할 수 있어요.',
      },
      { q: '임베드 링크도 되나요?', a: '네. player.vimeo.com 링크는 작동해요.' },
    ],
  },
};
