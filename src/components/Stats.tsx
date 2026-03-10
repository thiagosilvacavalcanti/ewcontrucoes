import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Anos de Experiência', value: '15+' },
  { label: 'Obras Entregues', value: '250+' },
  { label: 'Clientes Satisfeitos', value: '180+' },
  { label: 'Colaboradores', value: '50+' },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-primary py-16 border-y border-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-extrabold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 uppercase tracking-widest font-semibold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
