import Pergunta from "./Pergunta";

export default function Faq() {
    return (
        <div className="flex flex-col gap-2 w-[90%] md:w-3/4">
            <Pergunta pergunta="oi, tudo bem?" resposta="simaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
            <Pergunta pergunta="oi, tudo bem?" resposta="sim" />
            <Pergunta pergunta="oi, tudo bem?" resposta="sim" />
            <Pergunta pergunta="oi, tudo bem?" resposta="sim" />
        </div>
    )
}