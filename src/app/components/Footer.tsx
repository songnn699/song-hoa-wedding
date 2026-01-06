import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="text-4xl mb-8"
          >
            ♡
          </motion.div>
          
          <h3 className="text-2xl mb-2 tracking-wider">Emma & James</h3>
          <p className="text-gray-500 tracking-widest uppercase text-sm mb-12">June 15, 2026</p>

          <motion.div 
            className="w-24 h-px bg-gray-300 mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            See you there
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
