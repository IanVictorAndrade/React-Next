import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import { useState } from "react";

export default function PaginaProdutos() {

    const [itens, setItens] = useState<ItemCarrinho[]>([])

    return (
        <div className={`
            flex flex-col justify-center items-center h-screen
        `}>
            <ListaProdutos produtos={produtos} />
        </div>
    )
}