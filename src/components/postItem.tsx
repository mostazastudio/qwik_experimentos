import { component$ } from "@builder.io/qwik";

interface postItemProps{
    datos:{userId:number,
    id:number,
    title:string}
}


export default component$<postItemProps>(({datos})=>{
    return(
        <>
            <div>
                <h3>{datos.title}</h3>
                <a href={`/posts/${datos.id}`}>Ver mas</a>
            </div>
        </>
    )
})