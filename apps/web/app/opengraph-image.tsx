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
            <rect x="8" y="8" width="84" height="84" rx="26" fill="#ff5a3c" />
            <rect x="45" y="22" width="10" height="32" rx="5" fill="#ffffff" />
            <path d="M29 46L71 46L50 70Z" fill="#ffffff" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" />
            <path d="M30 79H70" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" />
          </svg>
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#f5f3f0' }}>
            Export<span style={{ color: '#ff5a3c' }}>Vid</span>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 28, color: '#a8a5ad' }}>
          Download social media content fast.
        </div>
      </div>
    ),
    { ...size },
  );
}
