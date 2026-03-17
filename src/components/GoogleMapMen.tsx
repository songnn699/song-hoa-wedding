import { motion } from 'framer-motion';

export default function WeddingMapMen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        overflow: 'hidden',
        border: '1px solid var(--gray-light)',
      }}
    >
      {/* <iframe
        title='Wedding location'
        src='https://www.google.com/maps?q=10.776889,106.700806&z=15&output=embed'
        style={{ width: '100%', height: '300px', border: 'none', display: 'block' }}
        loading='lazy'
      /> */}
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3725.5837458403707!2d106.24614825445094!3d20.969224990332595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU4JzA5LjIiTiAxMDbCsDE0JzUyLjciRQ!5e0!3m2!1svi!2sus!4v1773764013046!5m2!1svi!2sus'
        style={{
          width: '100%',
          height: '300px',
          border: 'none',
          display: 'block',
        }}
        loading='lazy'
      ></iframe>
    </motion.div>
  );
}
