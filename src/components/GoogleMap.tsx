import { motion } from 'framer-motion';

export default function WeddingMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        overflow:        'hidden',
        border:          '1px solid var(--gray-light)',
      }}
    >
      <iframe
        title='Wedding location'
        src='https://www.google.com/maps?q=10.776889,106.700806&z=15&output=embed'
        style={{ width: '100%', height: '300px', border: 'none', display: 'block' }}
        loading='lazy'
      />
    </motion.div>
  );
}
