import Personagens from "@/components/starwars/Personagens";
import Background from "@/components/starwars/Background";

export default function PaginaStarWars() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Background />
            <Personagens />
        </div>
    )
}