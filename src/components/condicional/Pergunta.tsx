import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface PerguntaProps {
    indice: number
    pergunta: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {
    return (
        <div className={`
            border border-white rounded-md overflow-hidden
        `} onClick={() => props.alternarVisibilidade(props.indice)}>
            <div className="bg-zinc-700 p-5 cursor-pointer select-none flex justify-between">
                <span>{props.pergunta}</span>
                {props.aberta ? <IconChevronUp /> : <IconChevronDown />}
            </div>
            <If teste={props.aberta}>
                <div className="p-5 select-none">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}