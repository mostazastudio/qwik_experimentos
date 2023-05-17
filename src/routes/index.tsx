import { component$ } from '@builder.io/qwik';
import { DocumentHead, routeLoader$ } from '@builder.io/qwik-city';
import PostItem from '~/components/postItem';


export const usePostData = routeLoader$(async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"GET"
  })

  const postInfo = await res.json()
  return postInfo
})

export default component$(() => {

  const postGrid = usePostData()

  return (
    <>
    <h1>Aca esta la lista de Posts</h1>
    <div class="grid">
      {postGrid.value.map((post:any,index:number)=>(
        <PostItem key={index} datos={post}/>))}
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
