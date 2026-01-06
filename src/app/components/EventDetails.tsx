import { motion } from 'motion/react';

export function EventDetails() {
  const events = [
    {
      title: 'Ceremony',
      date: 'June 15, 2026',
      time: '4:00 PM',
      location: 'Vineyard Estate Gardens',
      address: 'Napa Valley, California'
    },
    {
      title: 'Reception',
      date: 'June 15, 2026',
      time: '6:00 PM',
      location: 'Grand Ballroom',
      address: 'Vineyard Estate'
    }
  ];

  return (
    <section id="details" className="py-32 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-7xl text-center mb-24 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Details
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="text-3xl md:text-4xl mb-8 tracking-wide"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {event.title}
                </motion.h3>
                
                <div className="space-y-4 text-gray-600">
                  <motion.p 
                    className="text-lg tracking-wider"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {event.date}
                  </motion.p>
                  <motion.p 
                    className="text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {event.time}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-lg mt-6">{event.location}</p>
                    <p className="text-sm mt-2">{event.address}</p>
                  </motion.div>
                </div>

                <motion.div 
                  className="mt-8 w-16 h-px bg-gray-400 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <p className="text-gray-500 tracking-widest uppercase text-sm">Formal Attire</p>
        </motion.div>
      </div>
    </section>
  );
}
