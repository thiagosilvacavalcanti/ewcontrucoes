import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/logowl.jpg"
                alt="WL20 Engenharia Logo"
                className="h-10 w-10 object-cover rounded-sm border border-white/20"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-display font-extrabold text-white tracking-tighter leading-none">
                  WL20<span className="text-accent">.</span>
                </span>
                <span className="text-[9px] text-accent font-bold uppercase tracking-[0.2em] mt-1">
                  ENGENHARIA
                </span>
              </div>
            </a>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Referência em engenharia civil e construção de alto padrão. 
              Compromisso com a qualidade, segurança e inovação tecnológica.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm">Links Rápidos</h4>
            <ul className="space-y-4">
              {['Início', 'Sobre Nós', 'Nossos Serviços', 'Portfólio', 'Depoimentos', 'Contato'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-white/50 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm">Serviços</h4>
            <ul className="space-y-4">
              {[
                'Construção Residencial',
                'Obras Comerciais',
                'Reformas Estruturais',
                'Gerenciamento de Obras',
                'Consultoria Técnica',
                'Projetos de Engenharia'
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-sm">Contato</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="https://wa.me/5511911422289" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-accent transition-colors text-sm">
                  (11) 91142-2289
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-white/50 text-sm">atendimento@wl20engenharia.com.br</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={18} className="text-accent shrink-0" />
                <span className="text-white/50 text-sm">
                  São Paulo, SP - Atendimento em toda Grande SP e Interior
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs font-medium">
            © {new Date().getFullYear()} WL20 Engenharia. Todos os direitos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/admin/login" className="text-white/30 hover:text-white text-xs transition-colors">Área Restrita</a>
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/30 hover:text-white text-xs transition-colors">Termos de Uso</a>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-accent p-3 rounded-sm text-white hover:bg-accent-light transition-all shadow-lg group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
