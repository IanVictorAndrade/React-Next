export default function Personagens() {

    async function simularChamadaApi() {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve(1)
            }, 6000)

        })
    }

    async function obterPersonagens() {
        console.log("Iniciando chamada API")
        await simularChamadaApi()
        console.log("Finalizando chamada API")
    }

    return (
        <div>
            <h1>Conteúdo com os personagens</h1>
            <button onClick={obterPersonagens} className={"bg-blue-500 p-2"}>Obter Personagens</button>
        </div>
    )
}