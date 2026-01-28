import { useEffect, useState } from "react"
import { buscar, deletar } from "../../../services/Service"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { ClipLoader } from "react-spinners"
import { Warning } from "@phosphor-icons/react"

function DeletarCategoria() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {}
            })
        } catch (error: any) {
            console.error("Erro ao buscar categoria", error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)
        try {
            await deletar(`/categorias/${id}`, {
                headers: {}
            })
            alert('Categoria apagada com sucesso')
        } catch (error: any) {
            alert('Erro ao deletar a categoria.')
        }
        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className='min-h-screen bg-[#070a24] flex items-center justify-center p-4'>
            <div className='container w-full max-w-lg mx-auto'>
                
                {/* Header da Página */}
                <div className="text-center mb-8">
                    <div className="inline-block p-3 rounded-full bg-red-500/10 mb-4">
                        <Warning size={40} weight="duotone" className="text-red-500" />
                    </div>
                    <h1 className='text-4xl font-bold text-white mb-2'>Deletar Categoria</h1>
                    <p className='text-[#A0A3BD]'>
                        Esta ação não poderá ser desfeita. Você tem certeza?
                    </p>
                </div>

                {/* Card de Confirmação */}
                <div className='bg-[#0B0F2F] border border-white/10 flex flex-col rounded-2xl overflow-hidden shadow-2xl'>
                    
                    <header className='py-4 px-6 text-white font-bold text-xl flex items-center gap-3'
                            style={{ background: 'linear-gradient(135deg, #2F3BFF, #6A5CFF)' }}>
                        Confirmar Exclusão
                    </header>

                    <div className="p-8">
                        <span className="text-[#A0A3BD] text-xs uppercase tracking-widest font-bold">Categoria selecionada:</span>
                        <h3 className='text-[#FFFFFF] text-2xl font-bold mt-1'>{categoria.nome}</h3>
                        <p className='text-[#A0A3BD] mt-2 italic'>
                            {categoria.descricao || "Sem descrição disponível."}
                        </p>
                    </div>

                    <div className="flex gap-4 p-6 pt-0">
                        {/* Botão Cancelar */}
                        <button 
                            className='flex-1 text-[#A0A3BD] bg-white/5 hover:bg-white/10 py-3 rounded-xl transition-all font-semibold border border-white/10'
                            onClick={retornar}>
                            Cancelar
                        </button>

                        {/* Botão Confirmar (Sim) */}
                        <button 
                            className='flex-1 w-full text-white bg-red-600 hover:bg-red-700 py-3 rounded-xl transition-all font-semibold flex items-center justify-center shadow-lg shadow-red-900/20'
                            onClick={deletarCategoria}>
                            
                            {isLoading ? (
                                <ClipLoader color="#ffffff" size={20} />
                            ) : (
                                <span>Sim, excluir</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria