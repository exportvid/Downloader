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
          backgroundColor: '#0a0b0d',
          backgroundImage: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,230,168,0.25), transparent)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: '#00e6a8',
            }}
          />
          <div style={{ display: 'flex', fontSize: 72, fontWeight: 700, color: '#f3f5f4' }}>
            Export<span style={{ color: '#00e6a8' }}>Vid</span>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 28, color: '#a4aaa8' }}>
          Download social media content fast.
        </div>
      </div>
    ),
    { ...size },
  );
}
