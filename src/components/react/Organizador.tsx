interface Props {
    etiquetas: [number, string, string];
}

export default function Organizador({ etiquetas }:Readonly<Props>) {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
            {etiquetas.map((etiqueta : any) =>{
                return (
                    <img src={etiqueta.link} alt="no cargo" className={`${etiqueta.className} w-full aspect-square object-scale-down`} key={etiqueta.id} loading="lazy" />
                )
            })}
        </div>
    )
}