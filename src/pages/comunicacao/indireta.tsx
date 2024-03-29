import Contador from "@/components/comunicacao/indireta/Contador";

export default function PaginaIndireta() {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-10">
            <h1 className="text-5xl mb-10 font-black">Comunicação Indireta</h1>
            <div className="flex gap-5">
                <Contador />
                <Contador />
                <Contador />
            </div>
        </div>
    )
}
