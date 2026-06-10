import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Users, 
  Briefcase, 
  LogOut, 
  Save, 
  Plus, 
  Trash2,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock initial data - in a real app this would come from an API
const initialPortfolio = [
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
];

const initialClients = [
  { id: 1, name: 'Pão de Açúcar', logo: 'https://logo.clearbit.com/paodeacucar.com.br' },
  { id: 2, name: 'Itaú', logo: 'https://logo.clearbit.com/itau.com.br' },
];

const initialPartners = [
  { id: 1, name: 'Parceiro Engenharia A', logo: 'https://picsum.photos/seed/partner1/200/100' },
  { id: 2, name: 'Parceiro Arquitetura B', logo: 'https://picsum.photos/seed/partner2/200/100' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'portfolio' | 'clients' | 'partners'>('portfolio');
  const [portfolio, setPortfolio] = useState(initialPortfolio);
  const [clients, setClients] = useState(initialClients);
  const [partners, setPartners] = useState(initialPartners);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem('isAdminAuthenticated');
    if (auth !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Alterações salvas com sucesso (Simulação)');
    }, 1000);
  };

  const updateItem = (type: 'portfolio' | 'clients' | 'partners', id: number, field: string, value: any) => {
    if (type === 'portfolio') {
      setPortfolio(portfolio.map(item => {
        if (item.id === id) {
          if (field.startsWith('details.')) {
            const detailField = field.split('.')[1];
            return { ...item, details: { ...item.details, [detailField]: value } };
          }
          return { ...item, [field]: value };
        }
        return item;
      }));
    } else if (type === 'clients') {
      setClients(clients.map(item => item.id === id ? { ...item, [field]: value } : item));
    } else {
      setPartners(partners.map(item => item.id === id ? { ...item, [field]: value } : item));
    }
  };

  const deleteItem = (type: 'portfolio' | 'clients' | 'partners', id: number) => {
    if (type === 'portfolio') setPortfolio(portfolio.filter(item => item.id !== id));
    if (type === 'clients') setClients(clients.filter(item => item.id !== id));
    if (type === 'partners') setPartners(partners.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col">
        <div className="p-8 border-b border-white/10 flex items-center gap-3">
          <img
            src="/logowl.jpg"
            alt="WL20"
            className="h-8 w-8 object-cover rounded-sm border border-white/10"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-2xl font-display font-extrabold tracking-tighter">
            WL20<span className="text-accent">.</span> ADMIN
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-all ${activeTab === 'portfolio' ? 'bg-accent text-white' : 'hover:bg-white/5 text-white/60'}`}
          >
            <ImageIcon size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Portfólio</span>
          </button>
          <button
            onClick={() => setActiveTab('clients')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-all ${activeTab === 'clients' ? 'bg-accent text-white' : 'hover:bg-white/5 text-white/60'}`}
          >
            <Users size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Clientes</span>
          </button>
          <button
            onClick={() => setActiveTab('partners')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-all ${activeTab === 'partners' ? 'bg-accent text-white' : 'hover:bg-white/5 text-white/60'}`}
          >
            <Briefcase size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Parcerias</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-sm hover:bg-red-500/10 text-red-400 transition-all"
          >
            <LogOut size={20} />
            <span className="text-sm font-bold uppercase tracking-widest">Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 p-8 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-extrabold text-primary uppercase tracking-tight">
              Gerenciar {activeTab === 'portfolio' ? 'Portfólio' : activeTab === 'clients' ? 'Clientes' : 'Parcerias'}
            </h2>
            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Edite as imagens e informações exibidas no site</p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ExternalLink size={16} />
              Ver Site
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
            >
              <Save size={16} />
              {isSaving ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </header>

        <div className="p-8">
          <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
              <h3 className="text-sm font-bold text-primary uppercase tracking-widest">Lista de Itens</h3>
              <button className="text-accent hover:text-accent-light flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-colors">
                <Plus size={16} />
                Adicionar Novo
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {(activeTab === 'portfolio' ? portfolio : activeTab === 'clients' ? clients : partners).map((item) => (
                <div key={item.id} className="p-6 flex gap-8 items-start hover:bg-gray-50 transition-colors">
                  <div className="w-48 h-32 bg-gray-100 rounded-sm overflow-hidden border border-gray-200 flex-shrink-0">
                    <img 
                      src={(item as any).image || (item as any).logo} 
                      alt="" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Título / Nome</label>
                        <input
                          type="text"
                          value={(item as any).title || (item as any).name}
                          onChange={(e) => updateItem(activeTab, item.id, activeTab === 'portfolio' ? 'title' : 'name', e.target.value)}
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">URL da Imagem</label>
                        <input
                          type="text"
                          value={(item as any).image || (item as any).logo}
                          onChange={(e) => updateItem(activeTab, item.id, activeTab === 'portfolio' ? 'image' : 'logo', e.target.value)}
                          className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm font-mono"
                        />
                      </div>
                    </div>

                    {activeTab === 'portfolio' && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Categoria</label>
                            <input
                              type="text"
                              value={(item as any).category}
                              onChange={(e) => updateItem('portfolio', item.id, 'category', e.target.value)}
                              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Descrição</label>
                            <textarea
                              value={(item as any).description}
                              onChange={(e) => updateItem('portfolio', item.id, 'description', e.target.value)}
                              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm h-20 resize-none"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Localização</label>
                            <input
                              type="text"
                              value={(item as any).details.location}
                              onChange={(e) => updateItem('portfolio', item.id, 'details.location', e.target.value)}
                              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Área</label>
                            <input
                              type="text"
                              value={(item as any).details.area}
                              onChange={(e) => updateItem('portfolio', item.id, 'details.area', e.target.value)}
                              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Ano</label>
                            <input
                              type="text"
                              value={(item as any).details.year}
                              onChange={(e) => updateItem('portfolio', item.id, 'details.year', e.target.value)}
                              className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Destaques Técnicos (Separados por vírgula)</label>
                          <input
                            type="text"
                            value={(item as any).details.features.join(', ')}
                            onChange={(e) => updateItem('portfolio', item.id, 'details.features', e.target.value.split(',').map(s => s.trim()))}
                            className="w-full px-4 py-2 bg-white border border-gray-200 rounded-sm focus:border-accent outline-none text-sm"
                          />
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => deleteItem(activeTab, item.id)}
                      className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      title="Excluir"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
