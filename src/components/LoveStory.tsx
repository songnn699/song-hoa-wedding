import { motion } from 'framer-motion';
import img1 from '../assets/couple1.jpg';
import img2 from '../assets/couple2.jpg';
import img3 from '../assets/couple3.jpg';

const STORIES = [
  {
    date:    '03 · 2019',
    title:   'Lần đầu gặp nhau',
    content: 'Chúng tôi gặp nhau vào một buổi chiều mưa. Không ai nghĩ rằng cuộc gặp gỡ đó lại kéo dài đến tận hôm nay.',
    image:   img1,
  },
  {
    date:    '08 · 2020',
    title:   'Chuyến đi đầu tiên',
    content: 'Chuyến đi xa đầu tiên, cãi nhau nhiều, nhưng cũng hiểu nhau hơn. Tình yêu bắt đầu lớn dần từ đó.',
    image:   img2,
  },
  {
    date:    '12 · 2023',
    title:   'Lời cầu hôn',
    content: 'Không hoa hồng, không đông người, chỉ là một lời hứa cho cả cuộc đời.',
    image:   img3,
  },
];

export default function LoveStory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {STORIES.map((story, i) => {
        const isRight = i % 2 === 1;
        return (
          <div
            key={i}
            style={{
              display:       'flex',
              flexDirection: 'column',
              gap:           '1.75rem',
              alignItems:    'center',
            }}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isRight ? 55 : -55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: '100%' }}
            >
              <div style={{
                borderRadius:    '1.25rem',
                overflow:        'hidden',
                boxShadow:       '0 8px 40px rgba(90,62,54,0.14)',
                border:          '1px solid var(--blush-light)',
                aspectRatio:     '4/3',
              }}>
                <img
                  src={story.image}
                  alt={story.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: isRight ? -55 : 55 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              style={{ width: '100%' }}
            >
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                color:         'var(--blush)',
                fontWeight:    400,
                marginBottom:  '0.5rem',
              }}>
                {story.date}
              </p>
              <h3 style={{
                fontFamily:   'var(--font-display)',
                fontSize:     'clamp(1.4rem, 3.5vw, 1.9rem)',
                fontWeight:   400,
                color:        'var(--warm-brown)',
                margin:       '0 0 0.75rem',
                lineHeight:   1.2,
              }}>
                {story.title}
              </h3>
              <p style={{
                fontFamily:  'var(--font-body)',
                fontSize:    '0.95rem',
                lineHeight:  1.8,
                color:       'var(--brown-mid)',
                fontWeight:  300,
                margin:      0,
              }}>
                {story.content}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
