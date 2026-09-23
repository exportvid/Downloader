export type Platform = 'tiktok' | 'instagram' | 'facebook' | 'twitter' | 'reddit';

export type ContentType =
  | 'tiktok_video'
  | 'instagram_reel'
  | 'instagram_story'
  | 'instagram_post'
  | 'instagram_photo'
  | 'instagram_carousel'
  | 'instagram_profile_picture'
  | 'instagram_highlight'
  | 'facebook_video'
  | 'facebook_reel'
  | 'twitter_video'
  | 'twitter_photo'
  | 'reddit_video'
  | 'reddit_gif'
  | 'reddit_image'
  | 'unknown';

export interface MediaAsset {
  /** Stable id within one ExtractionResult, used to request the download. */
  id: string;
  /** Human label, e.g. "1080p MP4" or "Original JPEG". */
  label: string;
  container: string;
  codec?: string;
  width?: number;
  height?: number;
  fps?: number;
  bitrate?: number;
  /** Bytes. Omitted (never guessed) when the source doesn't report it. */
  filesize?: number;
  videoOnly: boolean;
  audioOnly: boolean;
  hasAudio: boolean;
}

export interface ExtractionAuthor {
  name?: string;
  username?: string;
  avatarUrl?: string;
}

export interface ExtractionResult {
  requestId: string;
  platform: Platform;
  contentType: ContentType;
  title?: string;
  thumbnail?: string;
  /** Seconds, for video/audio content. */
  duration?: number;
  sourceUrl: string;
  author?: ExtractionAuthor;
  assets: MediaAsset[];
  fetchedAt: string;
  /** When the cached extraction metadata should be treated as stale. */
  expiresAt: string;
}

export interface ApiErrorBody {
  error: {
    code:
      | 'UNSUPPORTED_URL'
      | 'INVALID_URL'
      | 'PRIVATE_OR_PROTECTED_CONTENT'
      | 'NOT_FOUND'
      | 'EXTRACTION_FAILED'
      | 'RATE_LIMITED'
      | 'TIMEOUT'
      | 'INTERNAL_ERROR';
    message: string;
  };
}
