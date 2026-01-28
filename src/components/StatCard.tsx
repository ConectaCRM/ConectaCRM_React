import React from 'react';
// Mudança aqui: Adicionamos o 'type' para o Vite saber que isso não é um componente, mas uma definição
import type { LucideIcon } from 'lucide-react'; 

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  icon: LucideIcon; // Agora o TS vai entender perfeitamente
  color: string;
}

const StatCard = ({ title, value, trend, icon: Icon, color }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-slate-700 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-4">
        {/* Usamos o Icon aqui normalmente */}
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon className="text-white" size={24} />
        </div>
        <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 dark:text-slate-400 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold text-conecta-deep dark:text-white mt-1">{value}</p>
    </div>
  );
};

export default StatCard;