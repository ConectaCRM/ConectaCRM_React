import React from 'react';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';

const FreeTrial = () => {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-conecta-deep dark:text-conecta-light">Inicie seus 14 dias grátis</h1>
        <p className="text-gray-500 mt-2">Sem cartão de crédito. Sem burocracia.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-white dark:bg-slate-900 p-10 rounded-[32px] shadow-xl border border-gray-100 dark:border-slate-800">
        <div className="space-y-6">
          <h3 className="text-xl font-bold">O que você ganha no teste:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-conecta-vibrant" size={18} /> Acesso total ao Plano Pro</li>
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-conecta-vibrant" size={18} /> Importação de base de clientes</li>
            <li className="flex items-center gap-3 text-sm"><CheckCircle className="text-conecta-vibrant" size={18} /> Suporte via WhatsApp</li>
          </ul>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-xs text-blue-700 dark:text-blue-300">
            <p><strong>Política:</strong> Após os 14 dias, sua conta entrará em modo leitura. Você poderá assinar um plano para continuar editando seus dados.</p>
          </div>
        </div>

        <form className="space-y-4">
          <input type="text" placeholder="Nome da Empresa" className="w-full p-3.5 rounded-xl border border-gray-200 dark:bg-slate-800 dark:border-slate-700" />
          <input type="email" placeholder="E-mail Corporativo" className="w-full p-3.5 rounded-xl border border-gray-200 dark:bg-slate-800 dark:border-slate-700" />
          <button className="w-full bg-conecta-deep text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 dark:shadow-none transition hover:bg-conecta-royal">
            Criar minha conta grátis
          </button>
          <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
            <Lock size={10} /> Conexão segura e criptografada
          </p>
        </form>
      </div>
    </div>
  );
};

export default FreeTrial;