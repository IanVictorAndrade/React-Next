import Carrinho from "@/components/listas/Carrinho";
import ListaProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import {useContext, useState} from "react";
import Link from "next/link";
import CarrinhoContexto from "@/data/contexts/CarrinhoContext";

export default function PaginaProdutos() {

    const { itens, adicionarProduto } = useContext(CarrinhoContexto)

    return (
        <div className={`
            flex flex-col gap-10 justify-center items-center h-screen
        `}>
            <Carrinho itens={itens}/>
            <ListaProdutos produtos={produtos} comprar={adicionarProduto}/>
            <Link className="botao" href="/">
                Voltar para a página inicial
            </Link>
        </div>
    )
}