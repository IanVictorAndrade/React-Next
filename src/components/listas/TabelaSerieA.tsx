interface TabelaSerieAProps {
    times: string[]
}


export default function TabelaSerieA(props: TabelaSerieAProps) {

    const itens: any = []

    for (let i = 0; i < props.times.length; i++) {
        itens.push(
        <li key={props.times[i]} className="text-xl list-decimal">
            {props.times[i]}
        </li>)
    }

    return (
        <ol>
            {itens}
        </ol>
    )
}