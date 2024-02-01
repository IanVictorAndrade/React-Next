import Contador from "@/components/contexto/Contador";
import { ContadorProvider } from "@/data/contexts/ContadorContext";
import React from "react";

export default function PaginaContador() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center relative h-screen">
            <ContadorProvider>
                <Contador />
            </ContadorProvider>
        </div>
    )
}