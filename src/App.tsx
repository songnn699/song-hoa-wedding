import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import PhotoAlbum from './components/Album';
import Countdown from './components/CountDown';
import WeddingMap from './components/GoogleMap';
import Hero from './components/Hero';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSV';
import Timeline from './components/Timeline';

/* ── shared fade-up preset ─────────────── */
const fadeUp = {
  initial:     { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-70px' },
  transition:  { duration: 0.7, ease: 'easeOut' },
} as const;

/* ── section title with ornament ──────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...fadeUp} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize:   'clamp(1.6rem, 4vw, 2.1rem)',
        fontWeight: 300,
        color:      'var(--rose)',
        margin:     0,
        letterSpacing: '0.04em',
      }}>
        {children}
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginTop: '0.65rem' }}>
        <span style={{ display: 'block', width: 38, height: 1, backgroundColor: 'var(--blush)' }} />
        <span style={{ color: 'var(--blush)', fontSize: '0.62rem', letterSpacing: '0.2em' }}>✦</span>
        <span style={{ display: 'block', width: 38, height: 1, backgroundColor: 'var(--blush)' }} />
      </div>
    </motion.div>
  );
}

/* ── thin ornamental divider ──────────── */
function Ornament() {
  return (
    <motion.div
      {...fadeUp}
      style={{
        display:        'flex',
        alignItems:     'center',
        gap:            '0.75rem',
        padding:        '0.5rem 0',
        color:          'var(--divider)',
        fontSize:       '0.7rem',
        letterSpacing:  '0.3em',
      }}
    >
      <span style={{ flex: 1, height: 1, backgroundColor: 'var(--blush-light)' }} />
      ♥
      <span style={{ flex: 1, height: 1, backgroundColor: 'var(--blush-light)' }} />
    </motion.div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--ivory)', minHeight: '100svh' }}>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Main content ── */}
      <main style={{ maxWidth: 680, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Countdown */}
        <section style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
          <SectionTitle>Đếm ngược đến ngày cưới</SectionTitle>
          <Countdown target='2025-12-14T10:00:00' />
        </section>

        <Ornament />

        {/* Couple intro */}
        <motion.section
          {...fadeUp}
          style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}
        >
          <p style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.05rem, 2.5vw, 1.25rem)',
            fontStyle:     'italic',
            color:         'var(--brown-mid)',
            lineHeight:    1.9,
            maxWidth:      440,
            margin:        '0 auto',
          }}>
            "Tình yêu không phải là nhìn nhau, mà là cùng nhau nhìn về một hướng."
          </p>
          <p style={{
            fontFamily:   'var(--font-body)',
            fontSize:     '0.72rem',
            textTransform:'uppercase',
            letterSpacing:'0.22em',
            color:        'var(--divider)',
            marginTop:    '1rem',
            fontWeight:   300,
          }}>
            — Antoine de Saint-Exupéry
          </p>
        </motion.section>

        <Ornament />

        {/* Love story */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <SectionTitle>Câu chuyện tình yêu</SectionTitle>
          <LoveStory />
        </section>

        <Ornament />

        {/* Photo album */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <SectionTitle>Album ảnh</SectionTitle>
          <PhotoAlbum />
        </section>

        <Ornament />

        {/* Wedding details */}
        <motion.section
          {...fadeUp}
          style={{ paddingTop: '4rem', paddingBottom: '4rem', textAlign: 'center' }}
        >
          <SectionTitle>Thông tin hôn lễ</SectionTitle>
          <div style={{
            display:         'inline-flex',
            flexDirection:   'column',
            gap:             '1rem',
            padding:         '2rem 2.5rem',
            borderRadius:    '1rem',
            backgroundColor: 'var(--card)',
            border:          '1px solid var(--blush-light)',
            boxShadow:       '0 4px 24px rgba(201,115,122,0.08)',
            textAlign:       'left',
          }}>
            {[
              { icon: '⏰', label: 'Thời gian', value: '10:00 sáng · 14/12/2025' },
              { icon: '📍', label: 'Địa điểm',  value: 'Nhà hàng ABC – TP. Hồ Chí Minh' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>{item.icon}</span>
                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--rose)', fontWeight: 400 }}>
                    {item.label}
                  </span>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 400, color: 'var(--warm-brown)', margin: '0.1rem 0 0' }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <Ornament />

        {/* Timeline */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <SectionTitle>Chương trình tiệc</SectionTitle>
          <Timeline />
        </section>

        <Ornament />

        {/* Map */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <SectionTitle>Địa điểm tổ chức</SectionTitle>
          <WeddingMap />
        </section>

        <Ornament />

        {/* RSVP */}
        <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <SectionTitle>Xác nhận tham dự</SectionTitle>
          <RSVP />
        </section>

        {/* Footer */}
        <motion.footer
          {...fadeUp}
          style={{
            paddingTop:    '2.5rem',
            paddingBottom: '4rem',
            textAlign:     'center',
            borderTop:     '1px solid var(--blush-light)',
          }}
        >
          <p style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '1.5rem',
            fontStyle:     'italic',
            color:         'var(--rose)',
            fontWeight:    300,
            margin:        0,
          }}>
            Song &amp; Hoa
          </p>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color:         'var(--divider)',
            marginTop:     '0.5rem',
            fontWeight:    300,
          }}>
            ♥ &nbsp;Save the Date &nbsp;·&nbsp; 14.12.2025
          </p>
        </motion.footer>

      </main>
    </div>
  );
}
