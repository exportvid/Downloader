import type { PlatformSlug } from '../config';
import type { PlatformContent } from '../../platforms';

const paste = 'dán vào ô phía trên rồi chọn Tải xuống';

export const vi: Record<PlatformSlug, PlatformContent> = {
  'youtube-video-downloader': {
    metaTitle: 'Tải Video YouTube: YouTube sang MP4',
    metaDescription:
      'Tải video và Shorts YouTube sang MP4 miễn phí. Dán liên kết youtube.com hoặc youtu.be, chọn chất lượng và lưu video về thiết bị của bạn.',
    h1: 'Tải video YouTube',
    intro: 'Dán liên kết YouTube và tải video hoặc Short về dưới dạng MP4 với chất lượng tốt nhất hiện có.',
    about: [
      'ExportVid chấp nhận liên kết đầy đủ youtube.com/watch, liên kết ngắn youtu.be và liên kết youtube.com/shorts.',
      'YouTube thường cung cấp nhiều độ phân giải cho mỗi video. ExportVid liệt kê tất cả, lên đến chất lượng cao nhất của bản tải lên. Độ phân giải cao lưu video và âm thanh riêng, nên ExportVid ghép chúng thành một tệp MP4 mà không mã hóa lại.',
    ],
    supportedContentTypes: [
      { label: 'Video YouTube', description: 'Video tải lên thông thường từ bất kỳ kênh nào.' },
      { label: 'YouTube Shorts', description: 'Video dọc ngắn từ mục Shorts.' },
    ],
    formats: ['MP4 có video và âm thanh, ở mọi độ phân giải YouTube cung cấp cho video'],
    faqs: [
      {
        q: 'Làm sao để tải video YouTube?',
        a: `Sao chép liên kết video trên YouTube, ${paste}. Chọn một chất lượng trong danh sách và lưu tệp.`,
      },
      {
        q: 'Làm sao để chuyển YouTube sang MP4?',
        a: 'Dán liên kết video vào ô phía trên rồi chọn Tải xuống. ExportVid lưu video dưới dạng tệp MP4, nên không còn gì cần chuyển đổi.',
      },
      {
        q: 'Tôi có thể tải YouTube Shorts không?',
        a: 'Được. Dán liên kết của Short và ExportVid sẽ tự nhận diện. Trang tải YouTube Shorts có thêm chi tiết.',
      },
      {
        q: 'Liên kết youtu.be có dùng được không?',
        a: 'Có. Cả liên kết ngắn youtu.be lẫn liên kết đầy đủ youtube.com đều dùng được.',
      },
      {
        q: 'Tôi có thể tải video riêng tư hoặc dành riêng cho thành viên không?',
        a: 'Không. Video riêng tư và dành riêng cho thành viên yêu cầu đăng nhập, và ExportVid không bao giờ truy cập nội dung được bảo vệ bằng đăng nhập.',
      },
    ],
  },

  'youtube-shorts-downloader': {
    metaTitle: 'Tải YouTube Shorts sang MP4',
    metaDescription: 'Tải YouTube Shorts sang MP4 miễn phí. Dán liên kết youtube.com/shorts, chọn chất lượng và lưu video về thiết bị của bạn.',
    h1: 'Tải YouTube Shorts',
    intro: 'Dán liên kết của một YouTube Short và tải về dưới dạng MP4.',
    about: [
      'ExportVid nhận diện liên kết youtube.com/shorts và tìm tệp video mà YouTube cung cấp cho Short đó. Liên kết youtube.com/watch thông thường cũng dùng được.',
      'Danh sách hiển thị mọi chất lượng YouTube cung cấp cho Short, để bạn chọn loại phù hợp với thiết bị của mình.',
    ],
    supportedContentTypes: [{ label: 'YouTube Shorts', description: 'Video dọc ngắn từ mục Shorts.' }],
    formats: ['MP4 có video và âm thanh, ở mọi độ phân giải YouTube cung cấp cho Short'],
    faqs: [
      {
        q: 'Làm sao để tải một YouTube Short?',
        a: 'Mở Short, sao chép liên kết, dán vào ô phía trên rồi chọn Tải xuống. Sau đó chọn chất lượng và lưu tệp.',
      },
      {
        q: 'Bản tải xuống có cả âm thanh không?',
        a: 'Có. ExportVid giữ lại âm thanh và ghép với video khi YouTube phát chúng thành các tệp riêng.',
      },
      {
        q: 'Tôi có thể tải cả video YouTube dài hơn không?',
        a: 'Được. Công cụ tải video YouTube dùng được với mọi liên kết video thông thường.',
      },
    ],
  },

  'facebook-video-downloader': {
    metaTitle: 'Tải Video Facebook: Video và Reels sang MP4',
    metaDescription:
      'Tải video và Reels Facebook sang MP4 miễn phí. Dán liên kết facebook.com hoặc fb.watch, chọn chất lượng và lưu về thiết bị của bạn.',
    h1: 'Tải video Facebook',
    intro: 'Dán liên kết video Facebook, kể cả liên kết ngắn fb.watch, và tải tệp MP4 về.',
    about: [
      'Facebook chia sẻ video qua liên kết xem thông thường, liên kết ngắn fb.watch và liên kết Reels. ExportVid xử lý cả ba theo cùng một cách.',
      'Có thể tải video từ trang, hồ sơ và nhóm công khai. Video trong nhóm riêng tư hoặc nhóm kín thì không được.',
    ],
    supportedContentTypes: [
      { label: 'Video Facebook', description: 'Bài đăng video trên trang, hồ sơ và nhóm công khai.' },
      { label: 'Reels Facebook', description: 'Video dọc ngắn đăng dưới dạng Reels.' },
    ],
    formats: ['MP4 có video và âm thanh, ở mọi độ phân giải Facebook cung cấp cho video'],
    faqs: [
      {
        q: 'Làm sao để tải video Facebook?',
        a: `Sao chép liên kết video, ${paste}. Sau đó chọn chất lượng và lưu tệp.`,
      },
      {
        q: 'Liên kết fb.watch có dùng được không?',
        a: 'Có. Liên kết ngắn fb.watch dùng được trực tiếp.',
      },
      {
        q: 'Tôi có thể tải video từ nhóm Facebook riêng tư không?',
        a: 'Không. ExportVid chỉ hoạt động với nội dung mà ai cũng xem được và không bao giờ vượt qua cài đặt quyền riêng tư.',
      },
    ],
  },

  'facebook-reels-downloader': {
    metaTitle: 'Tải Reels Facebook sang MP4',
    metaDescription: 'Tải Reels Facebook sang MP4 miễn phí. Dán liên kết Reel, chọn chất lượng và lưu video về thiết bị của bạn.',
    h1: 'Tải Reels Facebook',
    intro: 'Dán liên kết Reel Facebook và tải về dưới dạng MP4.',
    about: ['Reels Facebook dùng liên kết có /reel/. ExportVid tự động nhận diện và tìm tệp video giúp bạn.'],
    supportedContentTypes: [{ label: 'Reels Facebook', description: 'Reels từ trang và hồ sơ Facebook.' }],
    formats: ['MP4 có video và âm thanh, ở độ phân giải Facebook cung cấp'],
    faqs: [
      {
        q: 'Làm sao để tải Reel Facebook?',
        a: 'Sao chép liên kết Reel, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      {
        q: 'Liên kết mở ra ứng dụng Facebook. Tôi nên dán gì?',
        a: 'Hãy dán liên kết web, bắt đầu bằng facebook.com/reel hoặc fb.watch, thay vì liên kết chia sẻ từ ứng dụng. Cả hai đều dẫn đến cùng một video.',
      },
    ],
  },

  'instagram-video-downloader': {
    metaTitle: 'Tải từ Instagram: Reels, Video và Ảnh',
    metaDescription:
      'Tải Reels, video, ảnh, bài đăng nhiều ảnh và Stories Instagram miễn phí. Dán liên kết Instagram và ExportVid sẽ nhận diện loại nội dung.',
    h1: 'Tải video và ảnh Instagram',
    intro: 'Dán liên kết Instagram của Reel, bài đăng, ảnh, bài đăng nhiều ảnh hoặc Story. ExportVid nhận diện loại nội dung và hiển thị những gì bạn có thể tải.',
    about: [
      'Instagram dùng các liên kết trông giống nhau cho những loại nội dung khác nhau. ExportVid phân biệt được: Reels (/reel/), bài đăng trên bảng tin (/p/), Stories và trang cá nhân.',
      'Với bài đăng nhiều ảnh, từng ảnh và từng video được liệt kê riêng, để bạn chỉ tải thứ mình muốn.',
    ],
    supportedContentTypes: [
      { label: 'Reels', description: 'Video dọc ngắn đăng dưới dạng Reels.' },
      { label: 'Bài đăng video', description: 'Video được chia sẻ như bài đăng thông thường trên bảng tin.' },
      { label: 'Ảnh', description: 'Bài đăng trên bảng tin chỉ có một ảnh.' },
      { label: 'Bài đăng nhiều ảnh', description: 'Bài đăng có nhiều ảnh hoặc video, được liệt kê từng mục.' },
      { label: 'Stories', description: 'Stories vẫn còn hiển thị.' },
      { label: 'Ảnh đại diện', description: 'Ảnh đại diện của một tài khoản.' },
    ],
    faqs: [
      {
        q: 'Làm sao để tải video hoặc ảnh Instagram?',
        a: 'Sao chép liên kết bài đăng trên Instagram, dán vào ô phía trên rồi chọn Tải xuống. Sau đó chọn tệp bạn muốn.',
      },
      {
        q: 'Tôi có thể tải từ tài khoản Instagram riêng tư không?',
        a: 'Không. ExportVid chỉ hoạt động với các bài đăng mà ai cũng xem được. Nó không bao giờ truy cập tài khoản riêng tư.',
      },
      {
        q: 'Làm sao để tải Story Instagram?',
        a: 'Mở Story, sao chép liên kết rồi dán vào ô phía trên. Có thể tải Story khi nó còn hiển thị và thuộc tài khoản mà ai cũng xem được.',
      },
      {
        q: 'Tôi có thể tải tất cả ảnh trong một bài đăng nhiều ảnh không?',
        a: 'Được. Mỗi ảnh hoặc video trong bài đăng xuất hiện trong danh sách với nút tải riêng.',
      },
      {
        q: 'Tôi có thể tải tin nổi bật trên Instagram không?',
        a: 'Được, khi Instagram hiển thị chúng trên trang cá nhân mà ai cũng xem được. Các mục tin nổi bật được xử lý giống Stories.',
      },
    ],
    formats: ['MP4 cho video, có âm thanh', 'JPEG cho ảnh, ảnh trong bài đăng nhiều ảnh và ảnh đại diện'],
  },

  'instagram-reels-downloader': {
    metaTitle: 'Tải Reels Instagram sang MP4',
    metaDescription: 'Tải Reels Instagram sang MP4 với chất lượng tốt nhất hiện có. Dán liên kết Reel và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải Reels Instagram',
    intro: 'Dán liên kết Reel Instagram và tải về dưới dạng MP4.',
    about: [
      'Reels là các video dọc ngắn của Instagram. ExportVid nhận diện liên kết có /reel/ và /reels/ rồi tìm trực tiếp tệp video.',
      'Chất lượng bạn thấy là chất lượng Instagram cung cấp cho Reel đó. ExportVid không bao giờ nâng độ phân giải hay đổi nhãn.',
    ],
    supportedContentTypes: [{ label: 'Reels Instagram', description: 'Reels từ mọi tài khoản, kể cả hồ sơ doanh nghiệp và nhà sáng tạo.' }],
    formats: ['MP4 có video và âm thanh, ở độ phân giải Instagram cung cấp'],
    faqs: [
      {
        q: 'Làm sao để tải Reel Instagram?',
        a: 'Mở Reel, sao chép liên kết, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      {
        q: 'Liên kết Reel nào dùng được?',
        a: 'Mọi liên kết instagram.com/reel/ hoặc instagram.com/reels/, kể cả Reel được chia sẻ dưới dạng liên kết bài đăng thông thường.',
      },
      {
        q: 'Bản tải xuống có âm thanh không?',
        a: 'Có. Hầu hết Reels có cả âm thanh và hình ảnh, và ExportVid giữ lại cả hai.',
      },
    ],
  },

  'tiktok-video-downloader': {
    metaTitle: 'Tải TikTok Không Logo Sang MP4',
    metaDescription:
      'Tải video TikTok sang MP4, không watermark khi TikTok cung cấp tệp sạch. Dán liên kết TikTok và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video TikTok',
    intro: 'Dán liên kết TikTok và lưu video dưới dạng MP4 với chất lượng tốt nhất TikTok cung cấp, không có watermark khi có tệp sạch.',
    about: [
      'ExportVid chấp nhận liên kết đầy đủ như tiktok.com/@tennguoidung/video/123 và liên kết ngắn vm.tiktok.com hoặc vt.tiktok.com.',
      'TikTok thường chỉ phát một chất lượng cho mỗi video thay vì nhiều độ phân giải, nên bạn hay thấy một tệp MP4 duy nhất. Đó là tệp thật mà TikTok cung cấp. ExportVid không bịa thêm lựa chọn.',
    ],
    supportedContentTypes: [{ label: 'Video TikTok', description: 'Video từ liên kết TikTok thông thường hoặc rút gọn.' }],
    formats: ['MP4 có video và âm thanh, không watermark khi TikTok cung cấp tệp sạch', 'MP4 ở độ phân giải TikTok phát cho video đó'],
    faqs: [
      {
        q: 'Làm sao để tải video TikTok không watermark?',
        a: 'Dán liên kết TikTok vào ô phía trên rồi chọn Tải xuống. ExportVid chọn phiên bản không watermark mỗi khi TikTok cung cấp.',
      },
      {
        q: 'Vì sao bản tải của tôi vẫn có watermark?',
        a: 'Một số video chỉ tồn tại kèm watermark. Khi đó ExportVid không thể gỡ và đưa bạn tệp đúng như TikTok phát.',
      },
      {
        q: 'Vì sao chỉ có một lựa chọn chất lượng?',
        a: 'TikTok thường chỉ phát một phiên bản cho mỗi video. ExportVid hiển thị đúng những gì có và không bao giờ thêm chất lượng không tồn tại.',
      },
      {
        q: 'Tôi có thể tải video từ tài khoản TikTok riêng tư không?',
        a: 'Không. Tài khoản riêng tư và video được bảo vệ bằng đăng nhập không được hỗ trợ.',
      },
    ],
  },

  'x-video-downloader': {
    metaTitle: 'Tải Video X (Twitter) Sang MP4',
    metaDescription: 'Tải video từ bài đăng X (Twitter) sang MP4. Dán liên kết x.com hoặc twitter.com và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video X (Twitter)',
    intro: 'Dán liên kết bài đăng x.com hoặc twitter.com và tải video về.',
    about: [
      'X cung cấp nhiều độ phân giải cho mỗi video, thường lên đến 1080p. ExportVid liệt kê tất cả, kèm dung lượng tệp bên cạnh.',
      'Chỉ có thể tải video trong các bài đăng mà ai cũng xem được. Bài đăng từ tài khoản được bảo vệ thì không.',
    ],
    supportedContentTypes: [{ label: 'Video X', description: 'Video đính kèm trong bài đăng trên x.com hoặc twitter.com.' }],
    formats: ['MP4 có video và âm thanh, ở mọi độ phân giải bài đăng cung cấp (thường lên đến 1080p)'],
    faqs: [
      {
        q: 'Làm sao để tải video từ X hoặc Twitter?',
        a: 'Sao chép liên kết bài đăng, dán vào ô phía trên rồi chọn Tải xuống. Chọn một độ phân giải và lưu tệp.',
      },
      {
        q: 'Cả liên kết x.com và twitter.com đều dùng được không?',
        a: 'Có. Hai tên miền dẫn đến cùng một nền tảng, và ExportVid chấp nhận cả hai.',
      },
      {
        q: 'Vì sao bài đăng của tôi không hiển thị video?',
        a: 'Bài đăng có thể chỉ chứa hình ảnh, hoặc không tìm thấy video nào có thể tải. ExportVid chỉ liệt kê những tệp có thật.',
      },
      {
        q: 'Tôi có thể tải từ tài khoản được bảo vệ không?',
        a: 'Không. Tài khoản được bảo vệ yêu cầu đăng nhập vào X, và ExportVid không truy cập nội dung được bảo vệ bằng đăng nhập.',
      },
    ],
  },

  'reddit-video-downloader': {
    metaTitle: 'Tải Video Reddit Có Tiếng Sang MP4',
    metaDescription: 'Tải video Reddit, gồm cả v.redd.it, sang MP4 có tiếng. Dán liên kết Reddit và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video Reddit',
    intro: 'Dán liên kết bài đăng Reddit và tải video kèm âm thanh, gồm cả video lưu trữ trên v.redd.it.',
    about: [
      'Reddit lưu video và âm thanh thành các tệp riêng. ExportVid ghép chúng thành một tệp MP4 bằng cách sao chép trực tiếp luồng, nên chất lượng không đổi và có cả âm thanh.',
      'Chỉ có thể tải video từ các subreddit và bài đăng công khai. Subreddit bị cách ly, riêng tư hoặc yêu cầu đăng nhập thì không.',
    ],
    supportedContentTypes: [
      { label: 'Video Reddit', description: 'Video lưu trữ trên v.redd.it.' },
      { label: 'GIF Reddit', description: 'Bài đăng lặp lại mà Reddit phát dưới dạng clip video ngắn.' },
    ],
    formats: ['MP4 có video và âm thanh, được ghép từ các tệp riêng khi cần'],
    faqs: [
      {
        q: 'Làm sao để tải video Reddit có tiếng?',
        a: 'Sao chép liên kết bài đăng, dán vào ô phía trên rồi chọn Tải xuống. ExportVid ghép video và âm thanh thành một tệp cho bạn.',
      },
      {
        q: 'Vì sao tải từ Reddit đôi khi lâu hơn một chút?',
        a: 'Reddit lưu video và âm thanh trong hai tệp. ExportVid cần một bước ngắn để ghép chúng, không mã hóa lại cả hai.',
      },
      {
        q: 'Tôi có thể tải từ subreddit riêng tư hoặc bị cách ly không?',
        a: 'Không. Chỉ hỗ trợ bài đăng từ các subreddit công khai.',
      },
    ],
  },

  'pinterest-video-downloader': {
    metaTitle: 'Tải Video Pinterest: Ghim Video Sang MP4',
    metaDescription: 'Tải ghim video Pinterest sang MP4. Dán liên kết pinterest.com hoặc pin.it và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video Pinterest',
    intro: 'Dán liên kết ghim video Pinterest và tải về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết pinterest.com/pin và liên kết ngắn pin.it, rồi tìm tệp video mà Pinterest phát cho ghim đó.',
      'Pinterest thường chỉ cung cấp một độ phân giải chính cho mỗi video, nên bạn thường thấy một tệp MP4 khớp với những gì Pinterest cung cấp.',
    ],
    supportedContentTypes: [{ label: 'Ghim video', description: 'Ghim có chứa video.' }],
    formats: ['MP4 có video và âm thanh, ở độ phân giải Pinterest cung cấp cho ghim'],
    faqs: [
      {
        q: 'Làm sao để tải video Pinterest?',
        a: 'Sao chép liên kết ghim, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      { q: 'Tôi có thể tải ghim hình ảnh không?', a: 'Chưa được. ExportVid hỗ trợ các ghim Pinterest có chứa video.' },
      { q: 'Liên kết pin.it có dùng được không?', a: 'Có. Liên kết ngắn pin.it dùng được trực tiếp.' },
    ],
  },

  'snapchat-video-downloader': {
    metaTitle: 'Tải Snapchat Spotlight: Video Sang MP4',
    metaDescription: 'Tải video Snapchat Spotlight sang MP4. Dán liên kết snapchat.com/spotlight và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải Snapchat Spotlight',
    intro: 'Dán liên kết Snapchat Spotlight và tải video về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết snapchat.com/spotlight và tải tệp video mà Snapchat phát cho Spotlight đó.',
      'Video Spotlight đến dưới dạng một tệp MP4 duy nhất, nên bạn chỉ thấy một lựa chọn tải.',
    ],
    supportedContentTypes: [{ label: 'Video Spotlight', description: 'Video được chia sẻ trên Snapchat Spotlight.' }],
    formats: ['MP4 có video và âm thanh, đúng như Snapchat phát'],
    faqs: [
      {
        q: 'Làm sao để tải video Snapchat Spotlight?',
        a: 'Sao chép liên kết Spotlight, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      { q: 'Tôi có thể tải Stories Snapchat không?', a: 'Chưa được. ExportVid hỗ trợ video Spotlight.' },
      { q: 'Tôi có thể tải snap riêng tư không?', a: 'Không. ExportVid chỉ hoạt động với nội dung mà ai cũng xem được.' },
    ],
  },

  'twitch-clip-downloader': {
    metaTitle: 'Tải Clip Twitch Sang MP4',
    metaDescription: 'Tải clip Twitch sang MP4. Dán liên kết clips.twitch.tv và lưu clip về thiết bị của bạn miễn phí.',
    h1: 'Tải clip Twitch',
    intro: 'Dán liên kết clip Twitch và tải về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết clips.twitch.tv và liên kết twitch.tv/kenh/clip.',
      'Twitch phát mỗi clip ở chất lượng lúc clip được tạo, và ExportVid hiển thị đúng chất lượng đó.',
    ],
    supportedContentTypes: [{ label: 'Clip Twitch', description: 'Clip từ bất kỳ kênh nào.' }],
    formats: ['MP4 có video và âm thanh, ở độ phân giải Twitch cung cấp cho clip'],
    faqs: [
      {
        q: 'Làm sao để tải clip Twitch?',
        a: 'Sao chép liên kết clip, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      { q: 'Tôi có thể tải toàn bộ buổi phát trực tiếp hoặc VOD không?', a: 'Không. ExportVid chỉ hỗ trợ clip.' },
      { q: 'Liên kết Twitch nào dùng được?', a: 'Các liên kết bắt đầu bằng clips.twitch.tv và liên kết twitch.tv/kenh/clip.' },
    ],
  },

  'linkedin-video-downloader': {
    metaTitle: 'Tải Video LinkedIn Sang MP4',
    metaDescription: 'Tải video từ bài đăng LinkedIn sang MP4. Dán liên kết linkedin.com/posts và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video LinkedIn',
    intro: 'Dán liên kết bài đăng LinkedIn và tải video về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết linkedin.com/posts của các bài đăng xem được mà không cần đăng nhập.',
      'LinkedIn phát mỗi video dưới dạng một tệp MP4 duy nhất, nên bạn chỉ thấy một lựa chọn tải.',
    ],
    supportedContentTypes: [{ label: 'Bài đăng video', description: 'Bài đăng có chứa video.' }],
    formats: ['MP4 có video và âm thanh, đúng như LinkedIn phát'],
    faqs: [
      {
        q: 'Làm sao để tải video LinkedIn?',
        a: 'Sao chép liên kết bài đăng, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      {
        q: 'Vì sao liên kết của tôi báo nội dung riêng tư?',
        a: 'Bài đăng chỉ hiển thị với thành viên LinkedIn đã đăng nhập, và ExportVid chỉ truy cập được bài đăng mà ai cũng xem được.',
      },
      { q: 'Tôi có thể tải khóa học LinkedIn Learning không?', a: 'Không. Nội dung khóa học yêu cầu tài khoản và không được hỗ trợ.' },
    ],
  },

  'tumblr-video-downloader': {
    metaTitle: 'Tải Video Tumblr Sang MP4',
    metaDescription: 'Tải video từ bài đăng Tumblr sang MP4. Dán liên kết bài đăng từ bất kỳ blog Tumblr nào và lưu video miễn phí.',
    h1: 'Tải video Tumblr',
    intro: 'Dán liên kết bài đăng video Tumblr và tải về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết đến bài đăng trên tumblr.com và trên mọi địa chỉ tenblog.tumblr.com.',
      'Chỉ có thể tải video từ các blog và bài đăng mà ai cũng xem được.',
    ],
    supportedContentTypes: [{ label: 'Bài đăng video', description: 'Bài đăng Tumblr có chứa video.' }],
    formats: ['MP4 có video và âm thanh, đúng như Tumblr phát'],
    faqs: [
      {
        q: 'Làm sao để tải video Tumblr?',
        a: 'Sao chép liên kết bài đăng, dán vào ô phía trên rồi chọn Tải xuống.',
      },
      { q: 'Tên miền phụ của blog có dùng được không?', a: 'Có. Các liên kết như tenblog.tumblr.com/post/... dùng được.' },
      { q: 'Tôi có thể tải từ blog riêng tư không?', a: 'Không. Blog yêu cầu đăng nhập không được hỗ trợ.' },
    ],
  },

  'vimeo-video-downloader': {
    metaTitle: 'Tải Video Vimeo Sang MP4',
    metaDescription: 'Tải video Vimeo sang MP4. Dán liên kết vimeo.com, chọn chất lượng và lưu video về thiết bị của bạn miễn phí.',
    h1: 'Tải video Vimeo',
    intro: 'Dán liên kết video Vimeo và tải về dưới dạng MP4.',
    about: [
      'ExportVid chấp nhận liên kết vimeo.com và liên kết nhúng player.vimeo.com.',
      'Video mà chủ sở hữu đặt ở chế độ riêng tư, có mật khẩu hoặc giới hạn cho một số trang nhất định thì không thể tải.',
    ],
    supportedContentTypes: [{ label: 'Video Vimeo', description: 'Video bạn xem được mà không cần đăng nhập.' }],
    formats: ['MP4 có video và âm thanh, ở mọi độ phân giải Vimeo cung cấp cho video'],
    faqs: [
      {
        q: 'Làm sao để tải video Vimeo?',
        a: 'Sao chép liên kết video, dán vào ô phía trên rồi chọn Tải xuống. Sau đó chọn chất lượng.',
      },
      {
        q: 'Vì sao tôi không tải được liên kết Vimeo của mình?',
        a: 'Video có thể ở chế độ riêng tư, có mật khẩu hoặc giới hạn cho một số tên miền. ExportVid chỉ truy cập được video mà ai cũng xem được.',
      },
      { q: 'Liên kết nhúng có dùng được không?', a: 'Có. Liên kết player.vimeo.com dùng được.' },
    ],
  },
};
