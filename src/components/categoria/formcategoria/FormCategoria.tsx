import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";
import { PlusCircle, PencilCircle } from "@phosphor-icons/react";

function FormCategoria() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {}
            });
        } catch (error: any) {
            console.error("Erro ao buscar categoria");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        });
    }

    function retornar() {
        navigate('/categorias');
    }

    async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, { headers: {} });
                alert('Categoria atualizada com sucesso');
            } catch (error: any) {
                alert('Erro ao atualizar a Categoria');
            }
        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria, { headers: {} });
                alert('Categoria cadastrada com sucesso');
            } catch (error: any) {
                alert('Erro ao cadastrar a Categoria');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="min-h-screen bg-[#070a24] flex items-center justify-center p-4">
            <div className="container w-full max-w-2xl bg-[#0B0F2F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all">
                
                {/* Header do Formulário com Gradiente */}
                <div className="py-8 px-6 text-center" style={{ background: 'linear-gradient(135deg, #2F3BFF22, #00E5FF11)' }}>
                    <div className="flex justify-center mb-4">
                        {id !== undefined ? 
                            <PencilCircle size={64} weight="duotone" className="text-[#5A4DFF]" /> : 
                            <PlusCircle size={64} weight="duotone" className="text-[#00E5FF]" />
                        }
                    </div>
                    <h1 className="text-4xl font-extrabold text-white tracking-tight">
                        {id !== undefined ? 'Editar Categoria' : 'Nova Categoria'}
                    </h1>
                    <p className="text-[#A0A3BD] mt-2 italic">
                        {id !== undefined ? 'Ajuste os detalhes da categoria selecionada.' : 'Preencha os campos para criar uma nova categoria.'}
                    </p>
                </div>

                <form className="p-8 md:p-12 flex flex-col gap-6" onSubmit={gerarNovaCategoria}>
                    
                    {/* Input Nome */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="nome" className="text-[#FFFFFF] font-semibold ml-1">Título da Categoria</label>
                        <input
                            type="text"
                            placeholder="Ex: Farmácia, Eletrônicos..."
                            name="nome"
                            required
                            className="bg-[#070a24] border border-[#2F3BFF]/30 text-white rounded-xl p-3 outline-none focus:border-[#5A4DFF] focus:ring-2 focus:ring-[#5A4DFF]/20 transition-all placeholder:text-[#A0A3BD]/40"
                            value={categoria.nome}
                            onChange={atualizarEstado}
                        />
                    </div>

                    {/* Input Descrição */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="descricao" className="text-[#FFFFFF] font-semibold ml-1">Descrição</label>
                        <input
                            type="text"
                            placeholder="Descreva brevemente esta categoria"
                            name="descricao"
                            required
                            className="bg-[#070a24] border border-[#2F3BFF]/30 text-white rounded-xl p-3 outline-none focus:border-[#5A4DFF] focus:ring-2 focus:ring-[#5A4DFF]/20 transition-all placeholder:text-[#A0A3BD]/40"
                            value={categoria.descricao}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex gap-4 mt-4">
                        {/* Botão Cancelar */}
                        <button 
                            type="button"
                            onClick={retornar}
                            className="flex-1 py-3 rounded-xl font-bold text-[#A0A3BD] border border-white/10 hover:bg-white/5 transition-all">
                            Cancelar
                        </button>

                        {/* Botão Enviar */}
                        <button 
                            type='submit' 
                            disabled={isLoading}
                            className='flex-[2] flex justify-center items-center py-3 rounded-xl bg-[#2F3BFF] hover:bg-[#5A4DFF] disabled:bg-[#2F3BFF]/50 text-white font-bold shadow-lg shadow-[#2F3BFF]/20 transition-all'
                        >
                            {isLoading ? <ClipLoader color="#ffffff" size={20} /> : 
                            <span>{id === undefined ? 'Cadastrar Categoria' : 'Salvar Alterações'}</span>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;