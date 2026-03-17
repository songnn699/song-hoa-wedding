import { motion } from 'framer-motion';

export default function WeddingMap() {
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
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.6107278432562!2d105.70774410295991!3d20.989992116973422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313453c6f2115931%3A0xf6a076743306bfce!2zMjUzIEFuIFRoxrDhu6NuZywgSG_DoGkgxJDhu6ljLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1773760477123!5m2!1svi!2s'
        // style='border:0;'
        style={{
          width: '100%',
          height: '300px',
          border: 'none',
          display: 'block',
        }}
        loading='lazy'
      />
    </motion.div>
  );
}
