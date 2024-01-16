import Image from "next/image";

export default function ImagemAleatoria() {

    let pesquisa:string = '';
    const url = 'https://source.unsplash.com/featured/300x300?'

    function urlImagem() {
        return `${url}${pesquisa}`
    }

    function renderizarBotao (valor: string) {
        return (
            <button className={`
                bg-blue-500 text-white
                px-4 py-2 rounded-md h-[100%] w-[100%]
            `} onClick={() => {pesquisa = valor
                console.log(urlImagem()); 
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className={`
            border border-zinc-500 p-7 rounded-md
        `}>
            <Image src={urlImagem()} height={300} width={300} alt="Imagem" />
            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
        </div>
    )
}