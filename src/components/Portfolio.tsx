import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { X, Plus, Calendar, MapPin, Ruler, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const bradescoImages = [
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.46.jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.46 (1).jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.47.jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.47 (1).jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.47 (2).jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.47 (3).jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.48.jpeg', import.meta.url).href,
  new URL('../projetos/bradesco/WhatsApp Image 2026-06-14 at 16.07.48 (1).jpeg', import.meta.url).href,
];

const cruzeiroImages = [
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.14.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.15.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.15 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.16.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.16 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.17.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.17 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.18.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.18 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.19.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.19 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.20.jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.20 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Faculdade Cruzeiro do Sul/WhatsApp Image 2026-06-14 at 16.05.21.jpeg', import.meta.url).href,
];

const pracaImages = [
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.54.jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.55.jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.55 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.55 (2).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.55 (3).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.56.jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.56 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.56 (2).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.57.jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.57 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.57 (2).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.58.jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.58 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.58 (2).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.58 (3).jpeg', import.meta.url).href,
  new URL('../projetos/Praca sabi\xa0 chcara flora/WhatsApp Image 2026-06-14 at 15.52.59.jpeg', import.meta.url).href,
];

const prebelImages = [
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.11.jpeg', import.meta.url).href,
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.11 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.11 (2).jpeg', import.meta.url).href,
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.11 (3).jpeg', import.meta.url).href,
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.12.jpeg', import.meta.url).href,
  new URL('../projetos/Prebel Heitor pentead/WhatsApp Image 2026-06-14 at 15.51.12 (1).jpeg', import.meta.url).href,
];

const simmonsImages = [
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.47 (3).jpeg', import.meta.url).href,
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.48.jpeg', import.meta.url).href,
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.48 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.49.jpeg', import.meta.url).href,
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.49 (1).jpeg', import.meta.url).href,
  new URL('../projetos/Simmons Heitor penteado/WhatsApp Image 2026-06-14 at 16.05.49 (2).jpeg', import.meta.url).href,
];

const projects = [
  {
    id: 1,
    title: 'Showroom Simmons - Heitor Penteado',
    category: 'Comercial',
    image: simmonsImages[0],
    images: simmonsImages,
    description: 'Construção e acabamento primoroso do showroom conceito Simmons, destacando a elegância e conforto da renomada marca na Av. Heitor Penteado.',
    details: {
      location: 'Av. Heitor Penteado, São Paulo, SP',
      area: '380m²',
      year: '2024',
      features: ['Fachada minimalista pele de vidro', 'Iluminação técnica de alta performance', 'Revestimentos finos e sofisticados', 'Ar condicionado VRF de alta eficiência'],
    }
  },
  {
    id: 2,
    title: 'Edifício Prebel - Heitor Penteado',
    category: 'Reforma',
    image: prebelImages[0],
    images: prebelImages,
    description: 'Reforma administrativa, retrofit de fachada e reestruturação completa dos espaços de escritório e atendimento corporativo da unidade Prebel.',
    details: {
      location: 'Heitor Penteado, São Paulo, SP',
      area: '520m²',
      year: '2023',
      features: ['Retrofit completo de fachada comercial', 'Upgrade nos sistemas elétricos e de cabeamento', 'Redeclaração acústica dos ambientes de escritório', 'Pisos corporativos de alta durabilidade'],
    }
  },
  {
    id: 3,
    title: 'Praça Sabiá - Chácara Flora',
    category: 'Residencial',
    image: pracaImages[0],
    images: pracaImages,
    description: 'Edificação residencial de alto padrão perfeitamente integrada ao ambiente verde e preservado da Chácara Flora, com acabamentos de fino acabamento e requinte.',
    details: {
      location: 'Chácara Flora, São Paulo, SP',
      area: '820m²',
      year: '2024',
      features: ['Paisagismo integrado exuberante', 'Uso inteligente de estrutura metálica e madeira', 'Esquadrias termoacústicas sob medida', 'Vãos amplos valorizando iluminação solar'],
    }
  },
  {
    id: 4,
    title: 'Faculdade Cruzeiro do Sul',
    category: 'Comercial',
    image: cruzeiroImages[0],
    images: cruzeiroImages,
    description: 'Obras de engenharia civil aplicadas a ampliação física e infraestrutura acadêmica de salas de aula, laboratórios e acessibilidade universal completa.',
    details: {
      location: 'São Paulo, SP',
      area: '1.450m²',
      year: '2024',
      features: ['Salas de aula inteligentes com suporte completo de TI', 'Acessibilidade universal integrada e rampas normatizadas', 'Sistemas modernos de detecção e combate a incêndios', 'Convivência estudantil com estruturas modernas e arejadas'],
    }
  },
  {
    id: 5,
    title: 'Agência Bradesco',
    category: 'Comercial',
    image: bradescoImages[0],
    images: bradescoImages,
    description: 'Execução de reforma estratégica, redesenho de layout e modernização estrutural de agência bancária Bradesco, atendendo aos mais rigorosos padrões técnicos e de segurança.',
    details: {
      location: 'São Paulo, SP',
      area: '410m²',
      year: '2024',
      features: ['Estrutura e segurança patrimonial blindada', 'Climatização eficiente e renovação constante de ar', 'Piso elevado corporativo de alta especificação', 'Cabeamento estruturado categoria 6A'],
    }
  }
];

const categories = ['Todos', 'Residencial', 'Comercial', 'Reforma'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const handleOpenProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

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
              Nossa <span className="text-accent">Galeria</span> de Projetos Realizados.
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
                onClick={() => handleOpenProject(project)}
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
                  <p className="text-white/60 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <button className="bg-accent p-3 rounded-full text-white hover:bg-accent-light transition-colors">
                      <Plus size={20} />
                    </button>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Ver Galeria com {project.images.length} Fotos</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <a href="https://wa.me/5511911422289" target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex mx-auto">
            Falar pelo WhatsApp
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
              className="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 bg-primary text-white p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              
              <div className="grid lg:grid-cols-12 min-h-[500px]">
                {/* Responsive Image Carousel Gallery */}
                <div className="lg:col-span-7 flex flex-col bg-neutral-900 border-r border-gray-100">
                  <div className="relative flex-1 min-h-[350px] max-h-[550px] overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedProject.images[activeImageIndex]}
                      alt={`${selectedProject.title} - Imagem ${activeImageIndex + 1}`}
                      className="w-full h-full object-contain bg-neutral-950 max-h-[480px] select-none"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 rounded-full hover:bg-accent transition-all z-10"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 text-white p-2 rounded-full hover:bg-accent transition-all z-10"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                    
                    {/* Floating Counter */}
                    <div className="absolute top-4 left-4 bg-primary/60 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-10">
                      Foto {activeImageIndex + 1} de {selectedProject.images.length}
                    </div>
                  </div>

                  {/* Horizontal Scrollable Thumbnail Previews */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto p-4 bg-neutral-950 border-t border-white/10 scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent">
                      {selectedProject.images.map((img, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImageIndex(index)}
                          className={`relative w-16 h-16 shrink-0 rounded-sm overflow-hidden transition-all duration-300 border-2 ${
                            activeImageIndex === index ? 'border-accent opacity-100 scale-105' : 'border-transparent opacity-40 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details Panel */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-8 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10 border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-3">
                        <MapPin className="text-accent shrink-0" size={20} />
                        <div>
                          <div className="text-[10px] uppercase font-bold text-gray-400">Localização</div>
                          <div className="text-sm font-bold text-primary">{selectedProject.details.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Ruler className="text-accent shrink-0" size={20} />
                        <div>
                          <div className="text-[10px] uppercase font-bold text-gray-400">Área</div>
                          <div className="text-sm font-bold text-primary">{selectedProject.details.area}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="text-accent shrink-0" size={20} />
                        <div>
                          <div className="text-[10px] uppercase font-bold text-gray-400">Ano</div>
                          <div className="text-sm font-bold text-primary">{selectedProject.details.year}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h4 className="text-xs uppercase font-bold tracking-wider text-primary mb-4 border-b border-gray-100 pb-2">
                        Destaques Técnicos e Executivos
                      </h4>
                      <div className="grid gap-3">
                        {selectedProject.details.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5511911422289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center mt-6 py-4"
                  >
                    Solicitar Orçamento de Engenharia
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

