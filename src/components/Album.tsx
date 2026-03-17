import { motion } from 'framer-motion';
import img1 from '../assets/round_1.jpg';
import img2 from '../assets/round_3.jpg';
import img3 from '../assets/round_4.jpg';
import img4 from '../assets/round_2.jpg';

const IMAGES = [img1, img2, img3, img4];

export default function PhotoAlbum() {
  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: '1fr 1fr',
      gap:                 '2px',
      backgroundColor:     'var(--gray-light)',
    }}>
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
          style={{
            position:   'relative',
            aspectRatio: '1',
            overflow:   'hidden',
            backgroundColor: 'var(--white)',
          }}
        >
          <motion.img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              width:      '100%',
              height:     '100%',
              objectFit:  'cover',
              display:    'block',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
