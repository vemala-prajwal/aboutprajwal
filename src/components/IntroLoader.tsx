"use client";

import { useEffect, useState } from 'react';

const WORDS = ['Designing', 'Websites', 'UI/UX'];
const WORD_DURATION = 850;
const SUBTITLE_DELAY = 300;
const EXIT_DURATION = 750;

function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  return !sessionStorage.getItem('introShown');
}

export default function IntroLoader() {
  const [visible, setVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [exiting, setExiting] = useState(false);

  // Set visibility on mount in a client-only effect to avoid hydration mismatch
  useEffect(() => {
    if (shouldPlayIntro()) setVisible(true);
    // run only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // On mount, decide whether to play the intro based on sessionStorage.
    // We set `visible` inside an effect so server and client HTML match
    // (avoid hydration mismatches where server returned null but client
    // immediately rendered the overlay).
    if (!visible) return;

    document.body.style.overflow = 'hidden';

    const timers: ReturnType<typeof setTimeout>[] = [];

    timers.push(setTimeout(() => setShowSubtitle(true), SUBTITLE_DELAY));

    WORDS.forEach((_, i) => {
      if (i === 0) return;
      timers.push(
        setTimeout(() => setWordIndex(i), SUBTITLE_DELAY + WORD_DURATION * i)
      );
    });

    const totalTime = SUBTITLE_DELAY + WORD_DURATION * WORDS.length + 400;

    timers.push(
      setTimeout(() => {
        setExiting(true);
        timers.push(
          setTimeout(() => {
            setVisible(false);
            document.body.style.overflow = '';
            try { sessionStorage.setItem('introShown', '1'); } catch (e) {}
          }, EXIT_DURATION)
        );
      }, totalTime)
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
    // re-run when `visible` changes
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`intro-overlay ${exiting ? 'is-exiting' : ''}`}>
      <div className="intro-content">
        <p className={`intro-subtitle ${showSubtitle ? 'is-visible' : ''}`}>
          <span className="intro-dot" />
          Welcome To Know About Me!
        </p>
        <div className="intro-word-wrap">
          <span key={wordIndex} className="intro-word">
            {WORDS[wordIndex]}
          </span>
        </div>
      </div>
    </div>
  );
}
