import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503387762-592dee582a7b?auto=format&fit=crop&q=80&w=1200"
                alt="Equipe EW Construções"
                className="w-full h-auto min-h-[300px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 -z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-accent -z-0 hidden md:block"></div>
            
            <div className="md:absolute md:bottom-6 md:left-6 bg-primary p-8 text-white max-w-xs shadow-xl mt-6 md:mt-0">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">Missão</div>
              <p className="text-xs md:text-sm text-white/70 italic">
                "Entregar excelência técnica e segurança jurídica em cada metro quadrado construído."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Sobre a Empresa
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              Tradição em Construir com <span className="text-accent">Precisão</span> e Confiança.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Com anos de atuação sólida no mercado da construção civil, a EW Construções & Engenharia 
              nasceu do desejo de elevar o padrão das obras no Brasil. Somos especialistas em 
              estruturas complexas e acabamentos de alto luxo.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                'Gestão Eficiente de Obras',
                'Segurança Rigorosa',
                'Tecnologia de Ponta',
                'Sustentabilidade',
                'Prazos Garantidos',
                'Equipe Especializada'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent" size={20} />
                  <span className="font-semibold text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center p-6 bg-gray-50 rounded-sm border-l-4 border-accent">
              <div>
                <div className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-1">Fundador</div>
                <div className="text-xl font-bold text-primary">Eng. Eduardo Martini</div>
              </div>
              <div className="h-10 w-[1px] bg-gray-200 hidden sm:block"></div>
              <p className="text-sm text-gray-500 italic max-w-xs">
                "Nossa base é a engenharia de precisão. Nosso topo é a satisfação do cliente."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
