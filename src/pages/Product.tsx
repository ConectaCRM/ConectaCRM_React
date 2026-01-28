import React from 'react';
import { Check, BarChart3, Users, Zap, PieChart } from 'lucide-react';
import StatCard from '../components/StatCard';

const Product = () => {
  const plans = [
    { name: 'Essencial', price: '99', features: ['5 usuários', 'Dashboard Básico', 'Relatórios Mensais'] },
    { name: 'Business', price: '249', features: ['Usuários Ilimitados', 'KPIs em Tempo Real', 'Integração API', 'Suporte 24h'], highlight: true },
    { name: 'Enterprise', price: '599', features: ['IA Preditiva', 'Segurança Bancária', 'Gerente de Conta', 'Customização Total'] },
  ];

  return (
    <div className="py-16 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-4xl font-black text-conecta-deep dark:text-white mb-16">Planos que crescem com você</h1>
        
        {/* Tabela de Preços */}
      {/* Tabela de Preços Atualizada */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((p) => (
            <div 
              key={p.name} 
              className={`
                relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group
                /* Estado Padrão (Neutro) */
                bg-white border-gray-200 dark:bg-slate-900 dark:border-slate-800
                
                /* MÁGICA DO HOVER AQUI: */
                hover:border-conecta-vibrant hover:shadow-2xl hover:-translate-y-2 hover:z-10
                dark:hover:border-conecta-vibrant dark:hover:shadow-conecta-vibrant/20
              `}
            >
              {/* Mantive o selo de "Recomendado", mas ele só enfeita agora */}
              {p.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-conecta-vibrant text-white text-[10px] font-bold uppercase py-1 px-3 rounded-full shadow-lg">
                  Mais Popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-200 group-hover:text-conecta-deep dark:group-hover:text-white transition-colors">
                {p.name}
              </h3>
              
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-conecta-deep dark:text-white">{p.price}</span>
                <span className="text-gray-400 font-medium">/mês</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {p.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-gray-600 dark:text-slate-400">
                    <div className="p-1 rounded-full bg-blue-50 dark:bg-slate-800 text-conecta-vibrant group-hover:bg-conecta-vibrant group-hover:text-white transition-colors">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3.5 rounded-xl font-bold bg-gray-100 text-gray-600 dark:bg-slate-800 dark:text-gray-300 group-hover:bg-conecta-deep group-hover:text-white transition-all">
                Assinar Agora
              </button>
            </div>
          ))}
        </div>

        {/* Preview do Sistema (Dashboard) */}
        <div className="bg-slate-900 dark:bg-slate-900 rounded-[40px] p-8 md:p-16 text-white shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <PieChart size={300} />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">A inteligência que seu comercial precisa</h2>
              <p className="text-slate-300">Monitore o funil de vendas, identifique gargalos e aumente a conversão com dados reais. Nosso dashboard consolida tudo em uma visão 360°.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-conecta-light">KPI de Conversão</h4>
                  <p className="text-2xl font-bold">24.8%</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-conecta-vibrant">Tempo Médio</h4>
                  <p className="text-2xl font-bold">1.5 dias</p>
                </div>
              </div>
            </div>

            {/* Mockup do Dashboard Interno */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-inner text-slate-800 dark:text-white">
               <div className="flex gap-4 mb-6">
                  <StatCard title="Novas Leads" value="128" trend="+15%" icon={Users} color="bg-conecta-deep" />
                  <StatCard title="Vendas" value="R$ 42k" trend="+5%" icon={Zap} color="bg-conecta-vibrant" />
               </div>
               <div className="h-32 w-full bg-slate-100 dark:bg-slate-700 rounded-xl animate-pulse flex items-center justify-center">
                 <p className="text-xs font-mono opacity-50">Gráfico de Performance em Tempo Real</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;