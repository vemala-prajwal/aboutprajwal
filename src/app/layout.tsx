import BackgroundCanvas from '@/components/BackgroundCanvas';
import GrainOverlay from '@/components/GrainOverlay';
import './globals.css';
import { Instrument_Sans } from 'next/font/google';

const grotesk = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={grotesk.variable}>
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
