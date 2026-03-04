import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import img1 from './assets/couple1.jpg';
import img2 from './assets/couple2.jpg';
import img3 from './assets/couple3.jpg';
import img4 from './assets/couple4.jpg';
import PhotoAlbum from './components/Album';
import Countdown from './components/CountDown';
import WeddingMap from './components/GoogleMap';
import Hero from './components/Hero';
import RSVP from './components/RSV';
import Timeline from './components/Timeline';

/* ── animation presets ──────────────────────────── */
const fadeUp = {
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.75, ease: 'easeOut' },
} as const;

const fadeIn = {
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.9, ease: 'easeOut' },
} as const;

/* ── story data ─────────────────────────────────── */
const STORIES = [
  {
    date:    '03 · 2019',
    title:   'Lần đầu gặp nhau',
    content: 'Chúng tôi gặp nhau vào một buổi chiều mưa. Không ai nghĩ rằng cuộc gặp gỡ đó lại kéo dài đến tận hôm nay.',
  },
  {
    date:    '08 · 2020',
    title:   'Chuyến đi đầu tiên',
    content: 'Chuyến đi xa đầu tiên, cãi nhau nhiều, nhưng cũng hiểu nhau hơn. Tình yêu bắt đầu lớn dần từ đó.',
  },
  {
    date:    '12 · 2023',
    title:   'Lời cầu hôn',
    content: 'Không hoa hồng, không đông người, chỉ là một lời hứa cho cả cuộc đời.',
  },
];

/* ── reusable: section label ─────────────────────  */
function SectionLabel({
  children,
  align = 'left',
}: {
  children: React.ReactNode;
  align?: 'left' | 'center';
}) {
  return (
    <motion.p
      {...fadeUp}
      style={{
        fontFamily:    'var(--font-display)',
        fontSize:      '1.15rem',
        fontWeight:    600,
        letterSpacing: '0.06em',
        color:         'var(--black)',
        marginBottom:  '1.6rem',
        textAlign:     align,
      }}
    >
      {children}
    </motion.p>
  );
}

/* ── reusable: thin divider ─────────────────────── */
function ThinLine() {
  return (
    <motion.div
      {...fadeIn}
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'var(--gray-light)',
        margin: '2.5rem 0',
      }}
    />
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>

      {/* ════════════════════════════════════════
          HERO — kept as-is
          ════════════════════════════════════════ */}
      <Hero />

      {/* ════════════════════════════════════════
          1. ABOUT + COUNTDOWN — gray bg
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '5.5rem 0' }}>
        <div style={{ maxWidth: 740, margin: '0 auto', padding: '0 2.5rem', textAlign: 'center' }}>

          <SectionLabel align='center'>Về Song &amp; Hoa</SectionLabel>

          <motion.p
            {...fadeUp}
            style={{
              fontFamily:   'var(--font-body)',
              fontSize:     '1.05rem',
              fontWeight:   300,
              lineHeight:   1.9,
              color:        '#555',
              marginBottom: '3.5rem',
            }}
          >
            Chúng tôi tin rằng mỗi câu chuyện tình yêu là duy nhất và xứng đáng được lưu giữ theo cách
            đẹp nhất. Song và Hoa — hai con người, một hành trình, và một ngày trọng đại mà chúng tôi
            mong muốn chia sẻ cùng những người thân yêu nhất.
          </motion.p>

          <Countdown target='2025-12-14T10:00:00' />
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. SPLIT — photo left | story 1 right
          ════════════════════════════════════════ */}
      <section className='split-section'>

        {/* Photo */}
        <motion.div {...fadeIn} className='split-photo'>
          <img
            src={img1}
            alt='Song & Hoa'
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Story 1 */}
        <motion.div
          {...fadeUp}
          className='split-content'
          style={{ backgroundColor: 'var(--gray-bg)' }}
        >
          <SectionLabel>Câu chuyện tình yêu</SectionLabel>

          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.22em',
            color:         'var(--gray-mid)',
            fontWeight:    400,
            marginBottom:  '0.5rem',
          }}>
            {STORIES[0].date}
          </p>

          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize:   'clamp(1.5rem, 2.8vw, 2.1rem)',
            fontWeight: 300,
            color:      'var(--black)',
            margin:     '0 0 1rem',
            lineHeight: 1.25,
          }}>
            {STORIES[0].title}
          </h3>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:   '1rem',
            lineHeight: 1.85,
            color:      '#555',
            fontWeight: 300,
          }}>
            {STORIES[0].content}
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          3. SPLIT — stories 2+3 left | photo right
          ════════════════════════════════════════ */}
      <section className='split-section'>

        {/* Stories 2 & 3 */}
        <motion.div
          {...fadeUp}
          className='split-content'
          style={{ backgroundColor: 'var(--gray-bg)' }}
        >
          {STORIES.slice(1).map((story, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? '2.5rem' : 0 }}>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color:         'var(--gray-mid)',
                fontWeight:    400,
                marginBottom:  '0.45rem',
              }}>
                {story.date}
              </p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize:   'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 300,
                color:      'var(--black)',
                margin:     '0 0 0.75rem',
                lineHeight: 1.25,
              }}>
                {story.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize:   '1rem',
                lineHeight: 1.85,
                color:      '#555',
                fontWeight: 300,
              }}>
                {story.content}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Photo */}
        <motion.div {...fadeIn} className='split-photo'>
          <img
            src={img2}
            alt='Song & Hoa'
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          4. WEDDING DETAILS — gray bg, centered
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '5.5rem 0' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 2.5rem', textAlign: 'center' }}>

          <SectionLabel align='center'>Thông tin hôn lễ</SectionLabel>
          <ThinLine />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            {[
              { label: 'Thời gian', value: '10:00 sáng · Chủ nhật, 14 / 12 / 2025' },
              { label: 'Địa điểm',  value: 'Nhà hàng ABC · TP. Hồ Chí Minh' },
            ].map(item => (
              <motion.div key={item.label} {...fadeUp}>
                <p style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  color:         'var(--gray-mid)',
                  fontWeight:    400,
                  marginBottom:  '0.35rem',
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontSize:   'clamp(1.3rem, 3vw, 1.75rem)',
                  fontWeight: 300,
                  color:      'var(--black)',
                  margin:     0,
                }}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <ThinLine />
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. FULL-BLEED PHOTO — with subtle scale
          ════════════════════════════════════════ */}
      <div style={{ height: 'clamp(300px, 42vw, 580px)', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={img3}
          alt='Song & Hoa'
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ════════════════════════════════════════
          6. PHOTO ALBUM — white bg
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--white)', padding: '5.5rem 0' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 2.5rem' }}>
          <SectionLabel align='center'>Album ảnh</SectionLabel>
          <PhotoAlbum />
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. TIMELINE — gray bg
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '5.5rem 0' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 2.5rem' }}>
          <SectionLabel>Chương trình tiệc cưới</SectionLabel>
          <ThinLine />
          <Timeline />
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. MAP + RSVP — white bg
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--white)', padding: '5.5rem 0' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 2.5rem' }}>
          <SectionLabel>Địa điểm tổ chức</SectionLabel>
          <WeddingMap />

          <div style={{ marginTop: '5rem' }}>
            <SectionLabel>Xác nhận tham dự</SectionLabel>
            <RSVP />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. FINAL FULL-BLEED PHOTO + tagline
          ════════════════════════════════════════ */}
      <div style={{ height: 'clamp(300px, 40vw, 560px)', overflow: 'hidden', position: 'relative' }}>
        <img
          src={img4}
          alt='Song & Hoa'
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{
          position:       'absolute',
          inset:          0,
          backgroundColor:'rgba(0,0,0,0.28)',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem, 5.5vw, 4rem)',
              fontWeight:    300,
              fontStyle:     'italic',
              color:         'white',
              lineHeight:    1.35,
              letterSpacing: '0.03em',
              margin:        0,
            }}>
              Elegant. Timeless.<br />Romantic.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          FOOTER — gray bg
          ════════════════════════════════════════ */}
      <footer style={{ backgroundColor: 'var(--gray-bg)', padding: '4.5rem 2.5rem', textAlign: 'center' }}>
        <motion.div {...fadeUp}>
          <p style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight:    300,
            color:         'var(--black)',
            margin:        '0 0 0.6rem',
            letterSpacing: '0.06em',
          }}>
            Song &amp; Hoa
          </p>
          <p style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.68rem',
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color:         'var(--gray-mid)',
            fontWeight:    400,
            margin:        0,
          }}>
            14 · 12 · 2025 &nbsp;·&nbsp; Save the Date
          </p>
        </motion.div>
      </footer>

    </div>
  );
}
