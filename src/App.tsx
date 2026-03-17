import { motion } from 'framer-motion';
import './App.css';
import './index.css';
import img1 from './assets/love_story_2.jpg';
import img2 from './assets/hero_banner.jpg';
import img3 from './assets/kiss_banner.jpg';
import img4 from './assets/hero_banner2.jpg';
import PhotoAlbum from './components/Album';
import Countdown from './components/CountDown';
import WeddingMap from './components/GoogleMap';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import WeddingMapMen from './components/GoogleMapMen';
import TimelineMen from './components/TimelineMen';

/* ── animation presets ──────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, ease: 'easeOut' },
} as const;

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: 'easeOut' },
} as const;

/* ── story data ─────────────────────────────────── */
const STORIES = [
  {
    date: '03 · 2025',
    title: 'Lần đầu gặp nhau',
    content:
      'Chúng tôi gặp nhau vào một buổi chiều mưa. Không ai nghĩ rằng cuộc gặp gỡ đó lại kéo dài đến tận hôm nay.',
  },
  // {
  //   date: '08 · 2020',
  //   title: 'Chuyến đi đầu tiên',
  //   content:
  //     'Chuyến đi xa đầu tiên, cãi nhau nhiều, nhưng cũng hiểu nhau hơn. Tình yêu bắt đầu lớn dần từ đó.',
  // },
  {
    date: '03 . 2026',
    title: 'Lời cầu hôn',
    content:
      'Không hoa hồng, không đông người, chỉ là một lời hứa cho cả cuộc đời.',
  },
];

/* ─────────────────────────────────────────────────
   Section label — matches "About Eden Rose" style:
   Bodoni Moda Bold ~26px
   ───────────────────────────────────────────────── */
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
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.8rem, 2.5vw, 1.8rem)' /* ~26px */,
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: 'var(--black)',
        marginBottom: '1.75rem',
        textAlign: align,
        lineHeight: 1.3,
      }}
    >
      {children}
    </motion.p>
  );
}

/* ── thin divider ─────────────────────────────── */
function ThinLine() {
  return (
    <motion.div
      {...fadeIn}
      style={{
        width: '100%',
        height: 1,
        backgroundColor: 'var(--gray-light)',
        margin: '3rem 0',
      }}
    />
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--white)', color: 'var(--black)' }}>
      {/* ════════════════════════════════════════
          HERO — giữ nguyên
          ════════════════════════════════════════ */}
      <Hero />

      {/* ════════════════════════════════════════
          1. ABOUT + COUNTDOWN
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '6rem 0' }}>
        <div
          style={{
            maxWidth: 780,
            margin: '0 auto',
            padding: '0 3rem',
            textAlign: 'center',
          }}
        >
          <SectionLabel align='center'>Về Sông &amp; Hoà</SectionLabel>

          <motion.p
            {...fadeUp}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)' /* ~21px */,
              fontWeight: 400,
              lineHeight: 1.9,
              color: '#4a4a4a',
              marginBottom: '4rem',
            }}
          >
            Chúng tôi tin rằng mỗi câu chuyện tình yêu là duy nhất và xứng đáng
            được lưu giữ theo cách đẹp nhất. Sông và Hoà — hai con người, một
            hành trình, và một ngày trọng đại mà chúng tôi mong muốn chia sẻ
            cùng những người thân yêu nhất.
          </motion.p>

          <Countdown target='2026-03-29T10:00:00' />
        </div>
      </section>

      {/* ════════════════════════════════════════
          2. SPLIT — photo left | story 1 right
          ════════════════════════════════════════ */}
      <section className='split-section'>
        <motion.div {...fadeIn} className='split-photo'>
          <img
            src={img1}
            alt='Song & Hoa'
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          className='split-content'
          style={{ backgroundColor: 'var(--gray-bg)' }}
        >
          <SectionLabel>Câu chuyện tình yêu</SectionLabel>

          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: 'var(--gray-mid)',
              fontWeight: 500,
              marginBottom: '0.6rem',
            }}
          >
            {STORIES[0].date}
          </p>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 400,
              color: 'var(--black)',
              margin: '0 0 1.25rem',
              lineHeight: 1.2,
            }}
          >
            {STORIES[0].title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.8vw, 1.25rem)' /* ~21px */,
              lineHeight: 1.9,
              color: '#4a4a4a',
              fontWeight: 400,
            }}
          >
            {STORIES[0].content}
          </p>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          3. SPLIT — stories 2+3 left | photo right
          ════════════════════════════════════════ */}
      <section className='split-section'>
        <motion.div
          {...fadeUp}
          className='split-content'
          style={{ backgroundColor: 'var(--gray-bg)' }}
        >
          {STORIES.slice(1).map((story, i) => (
            <div key={i} style={{ marginBottom: i === 0 ? '3rem' : 0 }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  color: 'var(--gray-mid)',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                }}
              >
                {story.date}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 400,
                  color: 'var(--black)',
                  margin: '0 0 1rem',
                  lineHeight: 1.2,
                }}
              >
                {story.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
                  lineHeight: 1.9,
                  color: '#4a4a4a',
                  fontWeight: 400,
                }}
              >
                {story.content}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} className='split-photo'>
          <img
            src={img2}
            alt='Song & Hoa'
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          4. WEDDING DETAILS
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '6rem 0' }}>
        <div
          style={{
            // maxWidth: 640,
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center',
          }}
        >
          <SectionLabel align='center'>Thông tin hôn lễ nhà trai</SectionLabel>
          <ThinLine />

          <div className='flex flex-col  w-full justify-between'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.75rem',
              }}
            >
              {[
                {
                  label: 'Thời gian',
                  value: '11h00 sáng · Chủ nhật, 29 / 03 / 2026',
                },
                {
                  label: 'Địa điểm',
                  value: 'Thôn Nghĩa Phú, Xã Tuệ Tĩnh, TP. Hải Phòng',
                },
              ].map((item) => (
                <motion.div key={item.label} {...fadeUp}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--gray-mid)',
                      fontWeight: 500,
                      marginBottom: '0.45rem',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 3.2vw, 2rem)',
                      fontWeight: 400,
                      color: 'var(--black)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <ThinLine />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--gray-bg)', padding: '1rem 0' }}>
        <div
          style={{
            // maxWidth: ,
            margin: '0 auto',
            padding: '0 3rem',
            textAlign: 'center',
          }}
        >
          <SectionLabel align='center'>Thông tin hôn lễ nhà gái</SectionLabel>
          <ThinLine />

          <div className='flex flex-col  w-full justify-between'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.75rem',
              }}
            >
              {[
                {
                  label: 'Thời gian',
                  value: '8h30 sáng · Chủ nhật, 29 / 03 / 2026',
                },
                {
                  label: 'Địa điểm',
                  value: '2/15 Ngõ 253 An Thượng, An Khánh, Hà Nội',
                },
              ].map((item) => (
                <motion.div key={item.label} {...fadeUp}>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.22em',
                      color: 'var(--gray-mid)',
                      fontWeight: 500,
                      marginBottom: '0.45rem',
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 3.2vw, 2rem)',
                      fontWeight: 400,
                      color: 'var(--black)',
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <ThinLine />
        </div>
      </section>

      {/* ════════════════════════════════════════
          5. FULL-BLEED PHOTO
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 'clamp(320px, 44vw, 600px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.img
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          src={img3}
          alt='Song & Hoa'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* ════════════════════════════════════════
          6. PHOTO ALBUM
          ════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--white)', padding: '6rem 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 3rem' }}>
          <SectionLabel align='center'>Album ảnh</SectionLabel>
          <PhotoAlbum />
        </div>
      </section>

      {/* ════════════════════════════════════════
          7. TIMELINE
          ════════════════════════════════════════ */}
      <section
        className='py-16 md:py-24'
        style={{ backgroundColor: 'var(--gray-bg)' }}
      >
        <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12 md:gap-8 px-6 md:px-12'>
          <div className='w-full md:w-6/12'>
            <SectionLabel>Chương trình tiệc cưới nhà trai</SectionLabel>
            <ThinLine />
            <TimelineMen />
          </div>

          <div className='w-full md:w-6/12'>
            <SectionLabel>Chương trình tiệc cưới nhà gái</SectionLabel>
            <ThinLine />
            <Timeline />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          8. MAP + RSVP
          ════════════════════════════════════════ */}
      <section
        className='py-16 md:py-24'
        style={{ backgroundColor: 'var(--white)' }}
      >
        <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-12 md:gap-10 px-6 md:px-12'>
          <div className='w-full md:flex-1'>
            <SectionLabel>Địa điểm tổ chức nhà trai</SectionLabel>
            <div className='w-full mt-4 rounded-xl overflow-hidden'>
              <WeddingMapMen />
            </div>
          </div>

          <div className='w-full md:flex-1'>
            <SectionLabel>Địa điểm tổ chức nhà gái</SectionLabel>
            <div className='w-full mt-4 rounded-xl overflow-hidden'>
              <WeddingMap />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          9. FINAL FULL-BLEED + tagline
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 'clamp(320px, 42vw, 580px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <img
          src={img4}
          alt='Song & Hoa'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'white',
              lineHeight: 1.3,
              letterSpacing: '0.03em',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Elegant. Timeless.
            <br />
            Romantic.
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════════
          FOOTER
          ════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: 'var(--gray-bg)',
          padding: '5rem 3rem',
          textAlign: 'center',
        }}
      >
        <motion.div {...fadeUp}>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              color: 'var(--black)',
              margin: '0 0 0.75rem',
              letterSpacing: '0.08em',
            }}
          >
            Sông &amp; Hòa
          </p>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: 'var(--gray-mid)',
              fontWeight: 500,
              margin: 0,
            }}
          >
            29 · 03 · 2026 &nbsp;·&nbsp; Save the Date
          </p>
        </motion.div>
      </footer>

      {/* <section style={{ backgroundColor: 'var(--white)', padding: '6rem 0' }}>
        <div className='flex flex-col w-full justify-between items-center px-2'>
          <SectionLabel>Gửi quà cho cô dâu chú rể</SectionLabel>
          <div className='flex flex-row w-full justify-between px-2'>
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 3rem' }}>
              <WeddingMapMen />
            </div>
            <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 3rem' }}>
              <WeddingMap />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
