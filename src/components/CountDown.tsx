import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Countdown({ target }: { target: string }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const targetDate = new Date(target).getTime();
    const tick = () => {
      const diff = targetDate - Date.now();
      if (diff <= 0) { setIsPast(true); return; }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000)   % 60),
        s: Math.floor((diff / 1000)    % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (isPast) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', padding: '1.5rem 0' }}
      >
        <p style={{
          fontFamily:    'var(--font-display)',
          fontSize:      'clamp(1.4rem, 3vw, 1.8rem)',
          fontStyle:     'italic',
          fontWeight:    300,
          color:         'var(--black)',
          margin:        0,
          letterSpacing: '0.03em',
        }}>
          Ngày hôn lễ đã diễn ra
        </p>
        <p style={{
          fontFamily:    'var(--font-body)',
          fontSize:      '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.22em',
          color:         'var(--gray-mid)',
          marginTop:     '0.5rem',
          fontWeight:    400,
        }}>
          14 · 12 · 2025
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: 'var(--gray-light)' }}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.09 }}
          style={{
            backgroundColor: 'var(--gray-bg)',
            textAlign:       'center',
            padding:         '2rem 0.75rem',
          }}
        >
          <div style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2.2rem, 5.5vw, 3.2rem)',
            fontWeight:    300,
            color:         'var(--black)',
            lineHeight:    1,
            letterSpacing: '-0.02em',
          }}>
            {String(item.value).padStart(2, '0')}
          </div>
          <div style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.6rem',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color:         'var(--gray-mid)',
            marginTop:     '0.55rem',
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
