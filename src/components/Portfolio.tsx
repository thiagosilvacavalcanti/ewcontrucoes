import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { X, Plus, Calendar, MapPin, Ruler, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Residência Alphaville',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000',
    description: 'Casa de luxo com 600m² de área construída e acabamentos premium.',
    details: {
      location: 'Barueri, SP',
      area: '600m²',
      year: '2023',
      features: ['Piscina com borda infinita', 'Automação residencial completa', 'Acabamento em mármore Carrara', 'Sistema de energia solar'],
    }
  },
  {
    id: 2,
    title: 'Edifício Corporate Center',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    description: 'Fachada em vidro e estrutura metálica de alta performance.',
    details: {
      location: 'São Paulo, SP',
      area: '2.500m²',
      year: '2022',
      features: ['Certificação LEED', 'Fachada pele de vidro', 'Auditório para 200 pessoas', 'Estacionamento inteligente'],
    }
  },
  {
    id: 3,
    title: 'Reforma Loft Jardins',
    category: 'Reforma',
    image: 'https://images.unsplash.com/photo-1556912177-c54030639a8c?auto=format&fit=crop&q=80&w=1000',
    description: 'Retrofit completo de apartamento histórico com design industrial.',
    details: {
      location: 'Jardins, SP',
      area: '180m²',
      year: '2023',
      features: ['Estrutura metálica aparente', 'Piso em cimento queimado', 'Iluminação cênica', 'Cozinha gourmet integrada'],
    }
  },
  {
    id: 4,
    title: 'Galpão Logístico Itaqua',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    description: 'Piso de alta resistência e vãos livres de 40 metros.',
    details: {
      location: 'Itaquaquecetuba, SP',
      area: '5.000m²',
      year: '2021',
      features: ['Piso protendido nivelado a laser', 'Cobertura metálica zipada', 'Doca com niveladoras hidráulicas', 'Sistema de combate a incêndio J4'],
    }
  },
  {
    id: 5,
    title: 'Villa Toscana',
    category: 'Residencial',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
    description: 'Condomínio fechado com foco em sustentabilidade e lazer.',
    details: {
      location: 'Vinhedo, SP',
      area: '12.000m² (Total)',
      year: '2022',
      features: ['Reuso de águas pluviais', 'Fiação subterrânea', 'Clube privativo completo', 'Portaria blindada com biometria'],
    }
  },
  {
    id: 6,
    title: 'Escritório Tech Hub',
    category: 'Comercial',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    description: 'Ambiente colaborativo com isolamento acústico de última geração.',
    details: {
      location: 'Santo Amaro, SP',
      area: '450m²',
      year: '2023',
      features: ['Divisórias acústicas de vidro', 'Mobiliário ergonômico', 'Sala de descompressão', 'Infraestrutura de TI redundante'],
    }
  },
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Reforma', 'Industrial'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Portfólio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-primary"
            >
              Nossas <span className="text-accent">Obras</span> em Destaque.
            </motion.h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'bg-accent border-accent text-white shadow-lg'
                    : 'bg-transparent border-gray-200 text-gray-400 hover:border-accent hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-lg"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent font-bold uppercase tracking-widest text-xs mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <button className="bg-accent p-3 rounded-full text-white hover:bg-accent-light transition-colors">
                      <Plus size={20} />
                    </button>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Ver Detalhes</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <a href="https://wa.me/5511911422289" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex mx-auto">
            Ver Portfólio Completo
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-primary text-white p-2 rounded-full hover:bg-accent transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="h-[300px] lg:h-full min-h-[400px]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-accent" size={20} />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Localização</div>
                        <div className="text-sm font-bold text-primary">{selectedProject.details.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Ruler className="text-accent" size={20} />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Área</div>
                        <div className="text-sm font-bold text-primary">{selectedProject.details.area}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="text-accent" size={20} />
                      <div>
                        <div className="text-[10px] uppercase font-bold text-gray-400">Ano</div>
                        <div className="text-sm font-bold text-primary">{selectedProject.details.year}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-sm uppercase font-bold text-primary mb-4 border-b border-gray-100 pb-2">Destaques Técnicos</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.details.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-accent" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5511911422289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Solicitar Projeto Similar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

