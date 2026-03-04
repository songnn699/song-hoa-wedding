import { motion } from 'framer-motion';

export default function WeddingMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        borderRadius:  '1.25rem',
        overflow:      'hidden',
        boxShadow:     '0 6px 32px rgba(90,62,54,0.1)',
        border:        '1.5px solid var(--blush)',
      }}
    >
      <iframe
        title='Wedding location'
        src='https://www.google.com/maps?q=10.776889,106.700806&z=15&output=embed'
        style={{ width: '100%', height: '280px', border: 'none', display: 'block' }}
        loading='lazy'
      />
    </motion.div>
  );
}
