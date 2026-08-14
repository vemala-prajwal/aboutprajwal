import BackgroundCanvas from '@/components/BackgroundCanvas';
import GrainOverlay from '@/components/GrainOverlay';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: 'transparent' }}>
        <BackgroundCanvas />
        <GrainOverlay />
        <div style={{ position: 'relative', zIndex: 10 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
