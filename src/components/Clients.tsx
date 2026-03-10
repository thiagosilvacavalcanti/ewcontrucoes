import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const clients = [
  { name: 'Pão de Açúcar', logo: 'https://logo.clearbit.com/paodeacucar.com.br' },
  { name: 'Itaú', logo: 'https://logo.clearbit.com/itau.com.br' },
  { name: 'Carrefour', logo: 'https://logo.clearbit.com/carrefour.com.br' },
  { name: 'Lojas Americanas', logo: 'https://logo.clearbit.com/americanas.com.br' },
  { name: 'Santander', logo: 'https://logo.clearbit.com/santander.com.br' },
  { name: 'Bradesco', logo: 'https://logo.clearbit.com/bradesco.com.br' },
  { name: 'Vivo', logo: 'https://logo.clearbit.com/vivo.com.br' },
  { name: 'Multiplan', logo: 'https://logo.clearbit.com/multiplan.com.br' },
];

export default function Clients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-2 block"
          >
            Confiança
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-primary"
          >
            Nossos <span className="text-accent">Clientes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="w-32 h-20 flex items-center justify-center p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.innerText = client.name;
                    span.className = 'text-gray-400 font-bold text-sm text-center';
                    parent.appendChild(span);
                  }
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
