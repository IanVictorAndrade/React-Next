import Link from "next/link";

export default function Home() {
    return (
        <div>
            <h1 className="p-5 bg-purple-500">Hello World!</h1>
            <div className="flex justify-center items-center h-screen">
            <Link className="p-5" href="/context/contador">
                <span className="botao p-5">Contador</span>
            </Link>
            <Link className="p-5" href="/listas/produtos">
                <span className="botao p-5">Produtos</span>
            </Link>
            </div>
        </div>



    )
}