import ItemCarrinho from "@/model/ItemCarrinho"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}

export default function Carrinho(props: CarrinhoProps) {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Carrinho</h1>
        </div>
    )
}