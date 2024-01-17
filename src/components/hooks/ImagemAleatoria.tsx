import Image from "next/image";
import { useState } from "react";

export default function ImagemAleatoria() {

    const [pesquisa, alterarPesquisa] = useState<string>('abstract')
    const [tamanho, alterarTamanho] = useState<number>(300)
    const url = 'https://source.unsplash.com/featured/'

    function renderizarBotao (valor: string) {
        return (
            <button className={`
                bg-blue-500 text-white
                px-4 py-2 rounded-md h-[100%] w-[100%]
            `} onClick={() => {
                alterarPesquisa(valor);
                console.log(valor); 
            }}>
                {valor}
            </button>
        )
    }

    return (
        <div className={`
            border border-zinc-500 p-7 rounded-md flex flex-col gap-3
        `}>
            <div className="flex justify-center gap-7 mb-3">
                <span>{pesquisa}</span>
                <span>{tamanho}x{tamanho}</span>
            </div>
            <Image src={`${url}${tamanho}x${tamanho}?${pesquisa}`} 
            height={300} width={300} 
            alt="Imagem" 
            className="rounded-md" 
            />
            <div className="flex justify-between gap-5">
                {renderizarBotao('abstract')}
                {renderizarBotao('city')}
                {renderizarBotao('person')}
            </div>
            <div className="flex justify-center">
                <input 
                    type="number" 
                    value={tamanho} 
                    className="bg-zinc-800 p-2 rounded-md outline-none"
                    onChange={e => alterarTamanho(+e.target.value)}
                    />
            </div>
        </div>
    )
}