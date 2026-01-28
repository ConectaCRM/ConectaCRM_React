import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoLight from '../assets/logo-light.png';
import logoDark from '../assets/logo-dark.png';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Pega o elemento <html lang="en">
    const html = document.documentElement;
    
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {/* O logo muda conforme o tema selecionado */}
          <img src={isDark ? logoDark : logoLight} alt="ConectaCRM" className="h-10 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-10 font-bold text-gray-500 dark:text-gray-400 text-sm tracking-widest">
          <Link to="/" className="hover:text-conecta-royal transition">Página Inicial</Link>
          <Link to="/produto" className="hover:text-conecta-royal transition">Produtos</Link>
          <Link to="/categoria" className="hover:text-conecta-royal transition">Categorias</Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Botão de Toggle Dark/Light */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-yellow-400 transition-colors"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/login" className="text-conecta-deep dark:text-conecta-light font-bold hover:underline">
            Entrar
          </Link>
          <Link to="/teste-gratis" className="bg-conecta-deep text-white px-6 py-2.5 rounded-full font-bold hover:bg-conecta-royal transition">
            Teste Grátis
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;