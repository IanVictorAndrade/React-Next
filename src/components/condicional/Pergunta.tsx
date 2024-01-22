import { useState } from "react"

export default function Pergunta() {
    
    const [aberta, setAberta] = useState<boolean>(false)


    
    return (
        <div className={`
            border border-white rounded-md overflow-hidden
        `} onClick={() => setAberta(!aberta)}>
            <div className="bg-zinc-700 p-5 cursor-pointer select-none">
                Pergunta
            </div>
            {aberta && (
                <div className="p-5 select-none">
                    Resposta
                </div>
            
            )}
        </div>
    )
}