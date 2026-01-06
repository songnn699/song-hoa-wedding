import { motion } from 'motion/react';

export function OurStory() {
  const timeline = [
    { year: '2020', title: 'First Meeting', description: 'A coffee shop encounter that changed everything.' },
    { year: '2022', title: 'First Adventure', description: 'Road trip along the California coast.' },
    { year: '2024', title: 'The Proposal', description: 'Where it all began, full circle.' },
    { year: '2026', title: 'Our Wedding', description: 'The beginning of forever.' }
  ];

  return (
    <section id="story" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-5xl md:text-7xl text-center mb-24 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Journey
          </motion.h2>
          
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <motion.div 
                  className="flex-1 text-center md:text-left"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-6xl md:text-8xl mb-4 text-gray-200"
                    whileInView={{ opacity: [0, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {item.year}
                  </motion.p>
                  <h3 className="text-2xl md:text-3xl mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
                
                <motion.div 
                  className="w-24 h-px bg-gray-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}