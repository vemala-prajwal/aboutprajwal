import BackgroundCanvas from '@/components/BackgroundCanvas';
import GrainOverlay from '@/components/GrainOverlay';
import './globals.css';
import { Instrument_Sans, Fraunces, Source_Serif_4 } from 'next/font/google';

const grotesk = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-grotesk',
});

const displaySerif = Fraunces({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display-serif',
});

const bodySerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body-serif',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const classNames = [grotesk.variable, displaySerif.variable, bodySerif.variable].join(' ');

  return (
    <html lang="en" className={classNames}>
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
