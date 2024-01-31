interface FilmeProps {
    filmes: any
    voltar: () => void
}

export default function Filmes(props: FilmeProps) {
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button className="botao" onClick={props.voltar}>Voltar</button>
            <table className="w-3/5 text-xl opacity-80 rounded-lg overflow-hidden">
                <thead>
                <tr className="bg-zinc-900">
                    <th className="p-2 font-black">Título</th>
                    <th className="p-2 font-black">Episódio</th>
                    <th className="p-2 font-black">Data</th>
                </tr>
                </thead>
                <tbody>
                {props.filmes.map((f: any) => (
                        <tr key={f.title} className={`
                            text-center
                            odd:bg-zinc-700 even:bg-zinc-800
                            `}>
                            <td className="p-2">{f.title}</td>
                            <td className="p-2">{f.episode_id}</td>
                            <td className="p-2">{new Date(f.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}