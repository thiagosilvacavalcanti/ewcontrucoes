import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center pt-24 lg:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070"
          alt="Construção de alto padrão"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-0">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-accent/20 text-accent-light px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 border border-accent/30">
              Excelência em Engenharia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl text-white font-extrabold leading-[1.1] mb-8"
          >
            Construindo o <span className="text-accent">Futuro</span> com Solidez.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            A EW Construções & Engenharia transforma visões arquitetônicas em marcos de engenharia. 
            Qualidade técnica, segurança e compromisso com o prazo em cada detalhe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/5511915597796" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar Orçamento <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="btn-outline !text-white !border-white/30 hover:!border-accent">
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
}
