import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(target).getTime();

    const tick = () => {
      const now  = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setIsPast(true);
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000)  % 60),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (isPast) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', padding: '2rem' }}
      >
        <p style={{
          fontFamily:  'var(--font-display)',
          fontSize:    '1.6rem',
          fontStyle:   'italic',
          color:       'var(--rose)',
          fontWeight:  300,
        }}>
          Ngày hôn lễ đã diễn ra
        </p>
        <p style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color:         'var(--divider)',
          marginTop:     '0.4rem',
          fontWeight:    300,
        }}>
          14 · 12 · 2025 &nbsp;♥
        </p>
      </motion.div>
    );
  }

  const items = [
    { label: 'Ngày',  value: time.d },
    { label: 'Giờ',   value: time.h },
    { label: 'Phút',  value: time.m },
    { label: 'Giây',  value: time.s },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
          style={{
            textAlign:       'center',
            padding:         '1.25rem 0.5rem',
            borderRadius:    '0.9rem',
            background:      'linear-gradient(145deg, #fff7f4, #fce8ea)',
            border:          '1px solid var(--blush-light)',
            boxShadow:       '0 2px 16px rgba(201,115,122,0.07)',
          }}
        >
          <div style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 6vw, 2.8rem)',
            fontWeight:    300,
            color:         'var(--rose)',
            lineHeight:    1,
            letterSpacing: '-0.02em',
          }}>
            {String(item.value).padStart(2, '0')}
          </div>
          <div style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.62rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color:         'var(--brown-mid)',
            marginTop:     '0.45rem',
            fontWeight:    400,
          }}>
            {item.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Countdown;
