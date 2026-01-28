import React from 'react';
import { ArrowRight, BarChart3, Users, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import StatCard from '../components/StatCard';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* SEÇÃO HERO: O Convite */}
      {/* MUDANÇA 1: Gradiente adaptativo. 
          Light: Azul Claro -> Branco 
          Dark: Slate Escuro -> Preto */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Títulos adaptativos */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-conecta-deep dark:text-white leading-tight">
              Conecte sua empresa ao <span className="text-conecta-vibrant">sucesso.</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              O ConectaCRM é a plataforma completa para gerenciar leads, fechar vendas e analisar métricas em tempo real. Tudo em um só lugar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produto" className="bg-conecta-deep text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-conecta-deep/50">
                Conhecer os produtos <ArrowRight size={20} />
              </Link>
              {/* Botão Secundário adaptativo */}
              <Link to="/categorias" className="bg-transparent text-conecta-deep border-2 border-conecta-deep dark:text-white dark:border-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-50 dark:hover:bg-white/10 transition text-center">
                Explorar as categorias
              </Link>
            </div>
          </div>

          {/* PREVIEW DO SISTEMA */}
          {/* Card principal escuro no dark mode */}
          <div className="relative bg-white dark:bg-slate-800 p-4 rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-700 rotate-2 transition-colors duration-300">
            <div className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-6">
              <p className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">Preview do Sistema CONECTA CRM</p>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Nota: O StatCard ainda vai precisar de um tapa para ficar dark, 
                    mas o container dele já está certo aqui */}
                <StatCard title="Vendas" value="R$ 45k" trend="+18%" icon={BarChart3} color="bg-conecta-vibrant" />
                <StatCard title="Novas Leads" value="+124" trend="+5%" icon={Users} color="bg-conecta-deep" />
              </div>

              <div className="mt-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700">
                <div className="h-2 w-full bg-gray-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="bg-conecta-royal h-full w-3/4 shadow-[0_0_10px_rgba(0,86,210,0.5)]"></div>
                </div>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-2">Meta Semanal: 75% concluída</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DIFERENCIAIS */}
      <section className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-conecta-deep dark:text-white">Por que escolher o ConectaCRM?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Diferencial 1 */}
            <div className="space-y-4 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                 <Zap className="text-conecta-vibrant" size={32} />
              </div>
              <h3 className="text-xl font-bold dark:text-white">Velocidade Incrível</h3>
              <p className="text-gray-600 dark:text-slate-400">Acesse seus dados de qualquer lugar em milissegundos com nossa tecnologia Cloud 2026.</p>
            </div>
            
            {/* Card Diferencial 2 */}
            <div className="space-y-4 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                 <BarChart3 className="text-conecta-royal" size={32} />
              </div>
              <h3 className="text-xl font-bold dark:text-white">Métricas Avançadas</h3>
              <p className="text-gray-600 dark:text-slate-400">KPIs automáticos e relatórios inteligentes que decidem por você.</p>
            </div>

            {/* Card Diferencial 3 */}
            <div className="space-y-4 p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors">
              <div className="w-14 h-14 bg-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="text-conecta-deep dark:text-conecta-light" size={32} />
              </div>
              <h3 className="text-xl font-bold dark:text-white">Integração Total</h3>
              <p className="text-gray-600 dark:text-slate-400">Conecte com suas redes sociais e ferramentas de e-mail em um clique.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;