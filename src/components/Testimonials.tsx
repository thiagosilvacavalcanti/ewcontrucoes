import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ricardo Santos',
    role: 'CEO - Tech Solutions',
    content: 'A EW Construções entregou nossa nova sede com 15 dias de antecedência. A qualidade técnica e a transparência no gerenciamento de custos foram fundamentais para o sucesso do projeto.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Dra. Ana Paula',
    role: 'Proprietária Residencial',
    content: 'Transformaram meu sonho em realidade. O cuidado com os detalhes e o acabamento fino superaram todas as minhas expectativas. Recomendo fortemente para quem busca alto padrão.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Eng. Marcos Oliveira',
    role: 'Diretor de Projetos',
    content: 'Trabalhar em parceria com a EW é garantia de tranquilidade. Eles entendem a complexidade estrutural e executam com maestria o que está no papel.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-primary relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Prova Social
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            O que Nossos <span className="text-accent">Clientes</span> Dizem.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-8 rounded-sm relative shadow-xl border border-white/5"
            >
              <Quote className="text-accent/20 absolute top-6 right-6" size={64} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-white/70 mb-8 leading-relaxed italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <p className="text-accent text-xs uppercase tracking-widest font-semibold">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-32 pt-20 border-t border-white/10">
          <p className="text-center text-white/30 text-xs uppercase tracking-[0.5em] font-bold mb-12">
            Parceiros Estratégicos
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {['Gerdau', 'Votorantim', 'Tigre', 'Deca', 'Suvinil'].map((brand) => (
              <span key={brand} className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
