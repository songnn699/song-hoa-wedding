import { motion } from 'framer-motion';

const EVENTS = [
  { time: '10:00', text: 'Chào đón khách' },
  { time: '10:30', text: 'Khai tiệc cưới' },
  { time: '11:00', text: 'Ảnh & games' },
  { time: '12:00', text: 'Tiệc ngọt & kết thúc' },
];

export default function Timeline() {
  return (
    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
      {/* Vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position:         'absolute',
          left:             '0.85rem',
          top:              '0.6rem',
          bottom:           '0.6rem',
          width:            1,
          backgroundColor:  'var(--blush)',
          transformOrigin:  'top',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {EVENTS.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', position: 'relative' }}
          >
            {/* Dot */}
            <div style={{
              position:        'absolute',
              left:            '-1.55rem',
              width:           '0.55rem',
              height:          '0.55rem',
              borderRadius:    '50%',
              backgroundColor: 'var(--rose)',
              border:          '2px solid var(--blush-light)',
              boxShadow:       '0 0 0 3px rgba(201,115,122,0.15)',
              flexShrink:      0,
            }} />

            {/* Time */}
            <div style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.1rem',
              fontWeight:    400,
              color:         'var(--rose)',
              minWidth:      '3.5rem',
              letterSpacing: '0.02em',
            }}>
              {e.time}
            </div>

            {/* Separator */}
            <div style={{ width: 1, height: '1.1rem', backgroundColor: 'var(--blush-light)', flexShrink: 0 }} />

            {/* Text */}
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize:   '0.92rem',
              color:      'var(--warm-brown)',
              fontWeight: 300,
            }}>
              {e.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
