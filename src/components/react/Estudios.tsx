import { Estudio } from "../../Proyectos.ts"
import Cursos from "./Cursos.tsx"

export default function Estudios(){
    return(
        <section className="flex flex-col items-center gap-12 w-screen bg-Fondo-Estrellas ">
            <p
                className="w-fit h-auto flex justify-center text-blancoEstrella font-bold text-5xl"
            >
                Estudios
            </p>
            <div className="w-screen h-auto grid grid-flow-row !justify-center p-8 gap-x-12 gap-y-10 items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    Estudio.map((estudio: any)=>{
                        return(
                            <Cursos
                                key={estudio.id}
                                image={estudio.image}
                                link={estudio.link}
                                etiquetas={estudio.etiquetas}
                                empresa={estudio.empresa}
                                tema={estudio.tema}
                                titulo={estudio.titulo}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}