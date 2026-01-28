import React from 'react';
import { ShieldCheck, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // MUDANÇA AQUI:
    // Light: bg-conecta-deep (Azul)
    // Dark: dark:bg-slate-950 (Quase Preto - Fica muito chique!)
    <footer className="bg-conecta-deep dark:bg-slate-950 text-white pt-16 pb-8 transition-colors duration-300 border-t border-transparent dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-conecta-light" size={28} />
            <span className="text-2xl font-bold tracking-tighter">ConectaCRM</span>
          </div>
          {/* Texto adaptativo: Azul claro no Light / Cinza no Dark */}
          <p className="text-blue-100 dark:text-slate-400 text-sm leading-relaxed">
            A solução definitiva em gestão de clientes e inteligência de vendas para o mercado moderno.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Plataforma</h4>
          {/* Links com hover suave */}
          <ul className="space-y-3 text-blue-100 dark:text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/produto" className="hover:text-white transition">Planos e Preços</Link></li>
            <li><Link to="/categoria" className="hover:text-white transition">Funcionalidades</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Legal</h4>
          <ul className="space-y-3 text-blue-100 dark:text-slate-400 text-sm">
            <li><Link to="/teste-gratis" className="hover:text-white transition">Termos de Uso</Link></li>
            <li><Link to="/teste-gratis" className="hover:text-white transition">Privacidade</Link></li>
            <li>Cookies</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Conecte-se</h4>
          <div className="flex gap-4 text-blue-100 dark:text-slate-400">
            <Instagram className="hover:text-white cursor-pointer transition" />
            <Linkedin className="hover:text-white cursor-pointer transition" />
            <Facebook className="hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>
      
      {/* Linha divisória sutil */}
      <div className="max-w-7xl mx-auto px-6 border-t border-blue-900 dark:border-slate-800 mt-16 pt-8 text-center text-blue-300 dark:text-slate-600 text-sm">
        © 2026 ConectaCRM - Inteligência em Gestão. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;