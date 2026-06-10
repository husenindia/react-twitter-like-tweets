
import Post from '../post-card/Post';
import classes from './PostList.module.css'
import { useLoaderData } from 'react-router-dom';
function PostList() {
    const posts = useLoaderData();
    
    return (
        <>
            
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    { posts.map((post)=> <li key={post.documentId}><Post id={post.documentId} postAuthor={post.author} postContent={post.content}></Post></li>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div>
                    <h2>There are no tweets</h2>
                    <p>Start adding some</p>
                </div>
            )}

            {/* {isLoading &&
                <div className="fixed inset-0 flex items-center justify-center bg-white">
                    <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce [animation-delay:150ms]"></div>
                    <div className="h-3 w-3 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]"></div>
                    </div>
                </div>
            } */}
        </>
    );
}
export default PostList;