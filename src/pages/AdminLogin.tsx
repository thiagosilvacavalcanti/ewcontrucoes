import React from 'react';
import { motion } from 'motion/react';
import { Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - no validation as requested
    localStorage.setItem('isAdminAuthenticated', 'true');
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-sm shadow-2xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-extrabold text-primary tracking-tighter">
            EW<span className="text-accent">.</span> ADMIN
          </h1>
          <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">Acesso Restrito</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Usuário</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                defaultValue="admin"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="Seu usuário"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                defaultValue="123456"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                placeholder="Sua senha"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-sm"
          >
            Entrar no Painel
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-accent text-xs uppercase tracking-widest transition-colors"
          >
            Voltar para o Site
          </button>
        </div>
      </motion.div>
    </div>
  );
}
