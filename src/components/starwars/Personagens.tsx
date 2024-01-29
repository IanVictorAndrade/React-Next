import {useState} from "react";
import useProcessando from "@/data/hooks/useProcessando";

export default function Personagens() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()

    async function simularChamadaApi() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            }, 3000)

        })
    }

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            await simularChamadaApi()

        } finally {
            finalizarProcessamento()
        }

    }

    return (
        <div>
            {processando ? (
                <div>Processando...</div>
            ) : (
                <h1>Conteúdo com os personagens</h1>
            )}
            <button onClick={obterPersonagens} className={"bg-blue-500 p-2"}>Obter Personagens</button>
        </div>
    )
}