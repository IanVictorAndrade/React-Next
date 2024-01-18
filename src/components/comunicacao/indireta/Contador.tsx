import { useState } from "react";
import Botoes from "./Botoes";
import Display from "./Display";

export default function Contador() {
    const [num, setNum] = useState<number>(0)

    function incrementar(number: number) {
        setNum(num + number)
    }

    function decrementar(number: number) {
        setNum(num - number)
    }

    return (
        <div className={`flex flex-col p-2 w-72 h-72
                        border border-zinc-400 rounded-lg
        `}>
            <Display valor={num} />
            <Botoes inc={incrementar} dec={decrementar} />
        </div>
    )
}