interface Props{
    link:string;
    image: string;
    tema: string;
    titulo: string;
    empresa: string;
    etiquetas: [number, string]
}

export default function Cursos({link = "/", image, etiquetas}: Readonly<Props>){
    return(
        <article className="w-full flex justify-center">
            <a href={link} target="_blank" className="flex flex-col h-full min-h-96 items-center bg-BlancoTransparente p-2 w-[25rem] gap-8 rounded-md">
                <div className="bg-blancoEstrella w-full flex justify-center py-4 rounded-md">
                    <img src={image} alt="no cargo" className="w-[12rem] aspect-square object-cover rounded-md" />
                </div>
                <div className="flex flex-col w-full bg-blancoEstrella p-2">
                    <div className="">
                        <p>

                        </p>
                    </div>
                    
                    <div className="flex gap-x-4 gap-y-2 flex-wrap justify-center">
                        {
                            etiquetas.map((tags: any)=>{
                                return(
                                    <p key={tags.id} className="w-fit p-3 bg-colorBordePerfil/80 text-nowrap text-blancoEstrella rounded-full">
                                        {tags.contenido}
                                    </p>
                                )
                            })
                        }
                    </div>
                    
                </div> 
            </a>
        </article>
    );
}