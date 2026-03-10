import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Fale Conosco
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-primary mb-8 leading-tight"
          >
            Pronto para Iniciar seu <span className="text-accent">Projeto</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Estamos à disposição para transformar sua visão em realidade. 
            Nosso atendimento é personalizado e focado em entender cada detalhe da sua necessidade.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white p-10 rounded-sm shadow-xl border-t-4 border-accent flex flex-col items-center text-center"
          >
            <div className="bg-accent/10 p-5 rounded-full text-accent mb-6">
              <MessageCircle size={40} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">WhatsApp</h3>
            <p className="text-gray-500 mb-8">Atendimento imediato para orçamentos e dúvidas técnicas.</p>
            <a
              href="https://wa.me/5511915597796"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center py-5"
            >
              Conversar Agora
            </a>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary p-10 rounded-sm shadow-xl text-white flex flex-col"
          >
            <h3 className="text-2xl font-bold text-accent mb-8">Canais de Contato</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Telefone</div>
                  <div className="text-lg font-medium">(11) 91559-7796</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 mb-1">E-mail</div>
                  <div className="text-lg font-medium break-all">atendimento@ewconstrucoes.com.br</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-white/40 mb-1">Localização</div>
                  <div className="text-lg font-medium">São Paulo, SP - Atendimento em toda Grande SP</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-10 rounded-sm shadow-xl border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="bg-primary/5 p-5 rounded-full text-primary mb-6">
              <Clock size={40} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Horário</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between gap-8 border-b border-gray-100 pb-2">
                <span className="font-bold">Seg - Sex</span>
                <span>08:00 - 18:00</span>
              </div>
              <div className="flex justify-between gap-8 border-b border-gray-100 pb-2">
                <span className="font-bold">Sábado</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between gap-8 text-accent font-bold">
                <span>Domingo</span>
                <span>Fechado</span>
              </div>
            </div>
            <p className="mt-8 text-xs text-gray-400 italic">
              * Atendimento via WhatsApp disponível para emergências fora do horário comercial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

