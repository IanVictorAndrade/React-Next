import { useState } from "react"
import If from "./If"

interface PerguntaProps {
    pergunta: string
    resposta: string
}

export default function Pergunta(props: PerguntaProps) {
    
    const [aberta, setAberta] = useState<boolean>(false)


    
    return (
        <div className={`
            border border-white rounded-md overflow-hidden
        `} onClick={() => setAberta(!aberta)}>
            <div className="bg-zinc-700 p-5 cursor-pointer select-none">
                {props.pergunta}
            </div>
            <If teste={aberta} >
                <div className="p-5 select-none">
                    {props.resposta}
                </div>
            </If>
        </div>
    )
}