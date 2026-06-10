import PostList from '../componets/post-list/PostList'
import { Outlet } from 'react-router-dom'
function Posts() {
  return (
    <>
      <main>
        <Outlet/>
        <PostList></PostList>
      </main>
    </>
  )
}

export default Posts;

export  async function loader() {
  const response = await fetch("https://starpi-api-production.up.railway.app/api/posts");
  const responseData = await response.json();
  return responseData.data;
}

