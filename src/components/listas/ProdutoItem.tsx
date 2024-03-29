import Produto from "@/model/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemsProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItems(props: ProdutoItemsProps) {
    const { produto } = props
    return (
        <div 
            className={`
            flex flex-col p-1
            border border-zinc-600 rounded-md
        `}>
            <Image src={produto.imagem} 
            width={300} height={200}
            alt="ihhhhhhhhhh ala"
            className="rounded-md"
            />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-gray-500">
                        {produto.descricao}
                    </div>
                </div>
                <div>
                    <button className="botao flex justify-center gap-2 w-full" onClick={() => props.comprar(produto)}>
                        <IconShoppingCart /> Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}