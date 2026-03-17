import { motion } from 'framer-motion';

const EVENTS = [
  { time: '10:00 - 29/03', text: 'Chào đón khách' },
  { time: '10:30 - 29/03', text: 'Lễ thành hôn' },
  { time: '11:00 - 29/03', text: 'Khai tiệc' },
  // { time: '12:00', text: 'ết thúc' },
];

export default function TimelineMen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {EVENTS.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.09 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '10rem 1px 1fr',
            gap: '1.25rem',
            alignItems: 'center',
            justifyItems: 'flex-start',
            padding: '1.25rem 0',
            borderBottom:
              i < EVENTS.length - 1 ? '1px solid var(--gray-light)' : 'none',
          }}
        >
          {/* Time */}
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              fontWeight: 400,
              color: 'var(--black)',
              letterSpacing: '0.02em',
              textAlign: 'right',
            }}
          >
            {e.time}
          </span>

          {/* Thin separator */}
          <div
            style={{
              height: '1.4rem',
              width: 1,
              backgroundColor: 'var(--gray-mid)',
            }}
          />

          {/* Event */}
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: '#444',
              fontWeight: 400,
            }}
          >
            {e.text}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
