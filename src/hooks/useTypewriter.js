import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (words, speed = 70, pause = 2000) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const tick = useCallback(() => {
    const word = words[wordIdx % words.length];
    if (waiting) return;
    if (!deleting) {
      setDisplay(word.slice(0, display.length + 1));
      if (display.length + 1 === word.length) {
        setWaiting(true);
        setTimeout(() => { setWaiting(false); setDeleting(true); }, pause);
      }
    } else {
      setDisplay(word.slice(0, display.length - 1));
      if (display.length - 1 === 0) {
        setDeleting(false);
        setWordIdx(i => (i + 1) % words.length);
      }
    }
  }, [display, deleting, waiting, wordIdx, words, pause]);

  useEffect(() => {
    const t = setTimeout(tick, deleting ? speed * 0.5 : speed);
    return () => clearTimeout(t);
  }, [tick, deleting, speed]);

  return display;
};
