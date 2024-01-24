import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";

export default function PaginaProdutos() {

    const produto = produtos[0]

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}>
            <ListaProdutos produtos={produtos} />
        </div>
    )
}