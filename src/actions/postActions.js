import { FETCH_POST, NEW_POST } from "./types";

export const fetchPost = () => dispatch =>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(posts => dispatch({
       type: FETCH_POST,
       payLoad: posts
   }))
}
