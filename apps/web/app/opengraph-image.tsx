import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,90,60,0.25), transparent)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <svg width="84" height="84" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="#ff5a3c" />
            <path d="M50 18V24M50 32V42M50 50V62M35 52L50 67L65 52" fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#f5f3f0' }}>
            Export<span style={{ color: '#ff5a3c' }}>Vid</span>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 28, color: '#a8a5ad' }}>
          The fast, free video downloader for social media.
        </div>
      </div>
    ),
    { ...size },
  );
}
