import { component$ } from "@builder.io/qwik";
import { routeLoader$, StaticGenerateHandler } from "@builder.io/qwik-city";



export const usePost = routeLoader$(async(requestEvent)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${requestEvent.params.id}`,{
        method:"GET"
      })
    
    const postInfo = await res.json()
    return postInfo
})

const getPostIds  = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
       method:"GET"})
    
    const postsInfo = await res.json();
    const postIds = postsInfo.map((post:any)=>(
        post.id
    ))
    return postIds
  }


export default component$(()=>{

    const postData = usePost()

    return(
        <>
            <div class="post">
                <h1>{postData.value.title}</h1>
                <p>{postData.value.body}</p>
            </div>
        </>
    )
})

export const onStaticGenerate: StaticGenerateHandler = async ()=>{
    const ids = await getPostIds();

    return {
        params: ids.map((id:any)=>{
            return {id}
        }
        )
    }
}