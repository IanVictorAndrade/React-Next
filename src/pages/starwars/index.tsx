import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/Background";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { selecionarPersonagem } = useStarWars()

    return (
        <div className="flex justify-center items-center h-screen relative">
            <Background />
            <Personagens selecionar={selecionarPersonagem} />
        </div>
    )
}