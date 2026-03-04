import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import coupleHero from '../assets/couple5.jpg';

const HEARTS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 6.8) % 88)}%`,
  delay: `${((i * 0.65) % 4.5).toFixed(1)}s`,
  duration: `${(7 + ((i * 1.4) % 6)).toFixed(1)}s`,
  size: 8 + (i % 4) * 4,
  opacity: 0.12 + (i % 5) * 0.06,
}));

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100svh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* ── Parallax image ── */}
      <motion.div
        style={{ y: imgY, position: 'absolute', inset: 0, scale: 1.12 }}
      >
        <img
          src={coupleHero}
          alt='Song & Hoa'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </motion.div>

      {/* ── Gradient overlay: photo → ivory ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.38) 42%, rgba(253,246,240,0.92) 88%, #fdf6f0 100%)',
        }}
      />

      {/* ── Floating hearts ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {HEARTS.map((h) => (
          <div
            key={h.id}
            style={{
              position: 'absolute',
              left: h.left,
              bottom: '-30px',
              width: h.size,
              height: h.size,
              opacity: h.opacity,
              animation: `float-heart ${h.duration} ${h.delay} infinite ease-in-out`,
            }}
          >
            <svg
              viewBox='0 0 24 24'
              fill='#e8b4b8'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{
          y: textY,
          opacity: fade,
          position: 'relative',
          zIndex: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 1.5rem',
        }}
      >
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.3rem',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 500,
            marginBottom: '1.75rem',
          }}
        >
          Wedding Invitation
        </motion.p>

        {/* Names */}
        <motion.h1
          initial={{ opacity: 0, y: 55 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.8rem, 13vw, 7.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            color: '#fff',
            textShadow: '0 2px 30px rgba(0,0,0,0.18)',
            margin: 0,
          }}
        >
          Sông{' '}
          <em
            style={{
              fontStyle: 'italic',
              fontSize: '4rem',
              fontWeight: 100,
              color: 'white',
            }}
          >
            &amp;
          </em>{' '}
          Hòa
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            // gap: '0.8rem',
            margin: '1.4  rem 0',
            // color: 'rgba(232,180,184,0.85)',
            color: 'white',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
          }}
        >
          {/* ♥ */}
          <span
            style={{
              display: 'block',
              opacity: 0.7,
              width: 102,
              height: 1,
              backgroundColor: 'white',
            }}
          />
          {/* ✦ ✦ ✦ */}
          <span
            style={{
              display: 'block',
              opacity: 0.7,
              width: 102,
              height: 1,
              backgroundColor: 'white',
            }}
          />
        </motion.div>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.85 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 300,
            letterSpacing: '0.22em',
            color: 'rgba(255,255,255,0.92)',
            margin: 0,
          }}
        >
          29 · 03 · 2026
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color: 'rgba(255,255,255,0.55)',
            fontWeight: 300,
            marginTop: '0.6rem',
          }}
        >
          {/* Nhà hàng ABC · TP. Hồ Chí Minh */}
        </motion.p>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'rgba(255,255,255,0.45)',
          zIndex: 10,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            fontWeight: 300,
          }}
        >
          Scroll
        </span>
        <div style={{ animation: 'bob 1.6s ease-in-out infinite' }}>
          <svg
            width='14'
            height='22'
            viewBox='0 0 14 22'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.4'
            strokeLinecap='round'
          >
            <line x1='7' y1='2' x2='7' y2='14' />
            <polyline points='2,10 7,15 12,10' />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
