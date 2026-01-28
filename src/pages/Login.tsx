import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white rounded-[32px] p-10 shadow-xl border border-gray-100">
        <div className="text-center mb-10">
          <ShieldCheck className="mx-auto text-conecta-deep mb-4" size={48} />
          <h2 className="text-3xl font-bold text-conecta-deep">Acesse sua conta</h2>
          <p className="text-gray-500 text-sm mt-2">Bem-vinde ao ConectaCRM</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">E-mail Corporativo</label>
            <input type="email" placeholder="nome@empresa.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-conecta-royal" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Senha</label>
            <input type="password" placeholder="••••••••" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-conecta-royal" />
          </div>
          <button className="w-full bg-conecta-deep text-white py-4 rounded-2xl font-bold hover:bg-conecta-royal transition shadow-lg">Entrar no Painel</button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-8">
          Não tem conta? <Link to="/teste-gratis" className="text-conecta-royal font-bold">Inicie o teste grátis</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;