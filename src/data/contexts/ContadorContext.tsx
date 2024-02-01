import {createContext, useState} from "react";

const ContadorContext = createContext({} as any)
export default ContadorContext
export function ContadorProvider(props: any) {
    const [numero, setNumero] = useState(1324)

    function incrementar() {
        setNumero(numero + 1)
    }

    function decrementar() {
        setNumero(numero - 1)
    }

    return (
        <ContadorContext.Provider value={{
            numero, incrementar, decrementar
        }}>
            {props.children}
        </ContadorContext.Provider>
    )
}