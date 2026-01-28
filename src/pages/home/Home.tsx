import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias"
import ModalCategoria from "../../components/categoria/modalcategoria/ModalCategoria"

function Home() {
    return (
        <>
            <div className="bg-blue-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde a farmácia!
                        </h2>
                        <p className='text-xl'>
                            Adicione aqui uma nova categoria
                        </p>

                        <div className="flex justify-around gap-4">
                            
                            <ModalCategoria />

                            </div>
                        </div>
                    

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Home