import { useEffect, useRef, useState } from 'react';
import music from '../assets/music/a_thousand_year.mp3';

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);

  /* ── Auto-play logic ────────────────────────────────────────────────
     Browsers block autoplay unless the user has interacted with the page.
     Strategy:
       1. Try to play immediately (succeeds on some browsers / revisits).
       2. If blocked → show a hint tooltip and attach a one-time listener
          so the audio starts on the very next user interaction (click, key, touch).
  ─────────────────────────────────────────────────────────────────── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;
    audio.loop = true;

    const startAudio = () => {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          setShowHint(false);
        })
        .catch(() => {});
    };

    // Attempt immediate autoplay
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Autoplay blocked → wait for first interaction
        setShowHint(true);
        document.addEventListener('click', startAudio, { once: true });
        document.addEventListener('touchstart', startAudio, { once: true });
        document.addEventListener('keydown', startAudio, { once: true });
      });

    return () => {
      audio.pause();
      document.removeEventListener('click', startAudio);
      document.removeEventListener('touchstart', startAudio);
      document.removeEventListener('keydown', startAudio);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowHint(false);
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music} preload='auto' />

      {/* ── Floating container ── */}
      <div
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.55rem',
        }}
      >
        {/* Tooltip / hint */}
        {showHint && (
          <div
            style={{
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(200,200,200,0.6)',
              borderRadius: '10px',
              padding: '0.45rem 0.85rem',
              fontSize: '0.72rem',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              color: '#555',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              animation: 'fadeInUp 0.4s ease',
            }}
          >
            🎵 Nhấn để bật nhạc
          </div>
        )}

        {/* Label */}
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#999',
            fontWeight: 600,
            userSelect: 'none',
          }}
        >
          {isPlaying ? 'Đang phát' : 'Nhạc nền'}
        </span>

        {/* ── Main circle button ── */}
        <button
          id='music-player-btn'
          onClick={toggle}
          title={isPlaying ? 'Tạm dừng' : 'Phát nhạc'}
          aria-label={isPlaying ? 'Tạm dừng nhạc' : 'Phát nhạc'}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            /* Silver metallic gradient */
            background: 'linear-gradient(145deg, #f0f0f0 0%, #d8d8d8 40%, #c0c0c0 70%, #e8e8e8 100%)',
            boxShadow: isPlaying
              ? '0 0 0 3px rgba(180,180,180,0.5), 0 0 0 7px rgba(180,180,180,0.18), 0 8px 24px rgba(0,0,0,0.18)'
              : '0 2px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.8)',
            transition: 'box-shadow 0.3s ease, transform 0.2s ease',
            outline: 'none',
            padding: 0,
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
          }}
        >
          {/* Inner highlight ring */}
          <span
            style={{
              position: 'absolute',
              inset: 3,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.7)',
              pointerEvents: 'none',
            }}
          />

          {/* Icon — muted speaker when off, spinning note when on */}
          {isPlaying ? (
            <span
              style={{
                fontSize: '1.4rem',
                display: 'block',
                lineHeight: 1,
                animation: 'spinNote 4s linear infinite',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.15))',
              }}
            >
              🎵
            </span>
          ) : (
            /* Speaker with X — like the reference image */
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#888'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              {/* Speaker body */}
              <polygon points='11 5 6 9 2 9 2 15 6 15 11 19 11 5' />
              {/* X lines */}
              <line x1='23' y1='9' x2='17' y2='15' />
              <line x1='17' y1='9' x2='23' y2='15' />
            </svg>
          )}
        </button>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes spinNote {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
