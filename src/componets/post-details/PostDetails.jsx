import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../../componets/modal/Modal';
import Post from '../post-card/Post';

function PostDetails() {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main >
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." >
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
        <Post id={post.documentId} postAuthor={post.author} postContent={post.content}></Post>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
    const response = await fetch('https://starpi-api-production.up.railway.app/api/Posts/' + params.id);
    const resData = await response.json();
    return resData.data;   
}
