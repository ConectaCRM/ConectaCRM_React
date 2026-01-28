import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'
import { PencilLine, Trash } from '@phosphor-icons/react' // Exemplo de ícones para elevar o nível

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriasProps) {
    return (
        <div className='group relative bg-[#0B0F2F] border border-white/10 
            flex flex-col rounded-2xl overflow-hidden justify-between 
            transition-all duration-500 hover:border-[#5A4DFF]/50 hover:shadow-[0_0_20px_rgba(47,59,255,0.2)]'>
            
            {/* Barra de Gradiente Superior com Efeito de Brilho */}
            <div className="h-1.5 w-full" style={{ background: 'linear-gradient(135deg, #2F3BFF, #6A5CFF, #00E5FF)' }} />

            <div className='p-6'>
                <div className='flex justify-between items-start mb-4'>
                    <div className='p-2 rounded-lg bg-gradient-to-br from-[#2F3BFF] to-[#00E5FF] opacity-80 group-hover:opacity-100 transition-opacity'>
                        
                        <div className='w-5 h-5 bg-[#0B0F2F] rounded-sm' /> 
                    </div>
                </div>

                <h4 className='text-[#FFFFFF] text-xl font-bold tracking-tight mb-2 group-hover:text-[#5A4DFF] transition-colors'>
                    {categoria.nome}
                </h4>
                
                <p className='text-[#A0A3BD] text-sm leading-relaxed min-h-[60px]'>
                    {categoria.descricao}
                </p>
            </div>

            {/* Container de Botões com Design Moderno */}
            <div className="flex gap-2 p-4 pt-0">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                    text-white bg-[#2F3BFF] hover:bg-[#5A4DFF] 
                    transition-all duration-300 font-semibold text-sm shadow-md'>
                    <PencilLine size={18} />
                    Editar
                </Link>
                
                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                    text-[#A0A3BD] bg-white/5 hover:bg-red-500/10 hover:text-red-400
                    transition-all duration-300 font-medium text-sm border border-white/5'>
                    <Trash size={18} />
                    Excluir
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria