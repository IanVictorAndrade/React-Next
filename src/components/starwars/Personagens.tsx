import useStarWars from "@/data/hooks/useStarWars";

export default function Personagens() {

    const { personagens, obterPersonagens, processando } = useStarWars()

    function renderizarPersonagens() {
        return (
            <ul>
                { personagens.map((p: any) => (
                        <li key={p.name}>{p.name}</li>
                    )
                )}
            </ul>
        )
    }

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <button onClick={obterPersonagens} className={"bg-blue-500 p-2"}>Obter Personagens</button>
            {processando ? (
                <div>Processando...</div>
            ) : personagens.length > 0 ? (
                    renderizarPersonagens()
                ) :
                <div>Nenhum personagem</div>
            }
        </div>
    )
}