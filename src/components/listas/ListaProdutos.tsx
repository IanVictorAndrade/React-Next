import Produto from "@/model/Produto"
import ProdutoItems from "./ProdutoItem"

interface ListaProdutosProps {
    produtos: Produto[]

}

export default function ListaProdutos (props: ListaProdutosProps) {
    const { produtos } = props
    return (
        <div className="flex flex-wrap">
            {produtos.map(produto => {
                return (
                    <ProdutoItems key={produto.id} produto={produto} />
                )
            })}
        </div>

    )
}