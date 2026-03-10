import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Building2, Home, Hammer, Ruler, ShieldCheck, HardHat } from 'lucide-react';

const services = [
  {
    title: 'Construção Residencial',
    description: 'Execução completa de residências de alto padrão, do alicerce ao acabamento fino.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Obras Comerciais',
    description: 'Soluções ágeis para galpões, escritórios e lojas, focando em funcionalidade e estética.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Reformas Estruturais',
    description: 'Modernização e reforço de estruturas existentes com segurança e tecnologia.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Gerenciamento de Obras',
    description: 'Controle rigoroso de custos, prazos e qualidade em todas as etapas do projeto.',
    icon: Ruler,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Consultoria Técnica',
    description: 'Laudos, perícias e planejamento estratégico para novos empreendimentos.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Engenharia Civil',
    description: 'Projetos estruturais, hidráulicos e elétricos com foco em eficiência energética.',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Nossas Soluções
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
          >
            Serviços de Engenharia de <span className="text-accent">Ponta</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg"
          >
            Oferecemos um ecossistema completo de serviços para garantir que sua obra seja 
            executada com o máximo de eficiência e o mínimo de preocupação.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute top-4 left-4 bg-accent p-3 rounded-sm text-white shadow-lg">
                  <service.icon size={24} />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/link"
                >
                  Saiba Mais <div className="w-0 group-hover/link:w-6 h-[2px] bg-accent transition-all duration-300"></div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
