import {useCallback, useEffect, useState} from "react";
import useProcessando from "@/data/hooks/useProcessando";

export default function useStarWars() {
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any[]>([])
    const [personagem, setPersonagem] = useState<any[]>([])
    const [filmes, setFilmes] = useState<any[]>([])

    const obterFilmes = useCallback(async (personagem: any) => {
        if (!personagem?.films?.length) return
        try {
            iniciarProcessamento()
            const reqs = personagem.films.map(async (film: string) => {
                const resp = await fetch(film)
                return resp.json()
            })

            const filmes = await Promise.all(reqs)
            setFilmes(filmes)
            console.log(filmes);
        } finally {
            finalizarProcessamento()
        }

    }, [iniciarProcessamento, finalizarProcessamento]);

    const obterPersonagens = useCallback(async () => {
        try {
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people/')
            const data = await resp.json()
            setPersonagens(data.results)
        } finally {
            finalizarProcessamento()
        }

    }, [iniciarProcessamento, finalizarProcessamento]);

    function selecionarPersonagem(personagem: any) {
        setPersonagem(personagem)
    }

    useEffect(() => {
        obterPersonagens()
    }, [obterPersonagens])

    useEffect(() => {
        obterFilmes(personagem)
    }, [personagem, obterFilmes])


    return {
        personagens,
        processando,
        selecionarPersonagem
    }
}