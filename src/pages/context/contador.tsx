import Contador from "@/components/contexto/Contador";
import React from "react";

export default function PaginaContador() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center relative h-screen">
                <Contador />
        </div>
    )
}