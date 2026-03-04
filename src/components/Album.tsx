import { motion } from 'framer-motion';
import img1 from '../assets/couple1.jpg';
import img2 from '../assets/couple2.jpg';
import img3 from '../assets/couple3.jpg';
import img4 from '../assets/couple4.jpg';

const IMAGES = [img1, img2, img3, img4];

export default function PhotoAlbum() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
      {IMAGES.map((src, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.1 }}
          whileHover={{ scale: 1.03, zIndex: 1 }}
          style={{
            borderRadius:  '1rem',
            overflow:      'hidden',
            boxShadow:     '0 4px 20px rgba(90,62,54,0.12)',
            border:        '1px solid var(--blush-light)',
            aspectRatio:   '1',
            cursor:        'pointer',
            position:      'relative',
          }}
        >
          <img
            src={src}
            alt={`Wedding photo ${i + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            style={{
              position:   'absolute',
              inset:      0,
              background: 'linear-gradient(to top, rgba(201,115,122,0.35) 0%, transparent 60%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
