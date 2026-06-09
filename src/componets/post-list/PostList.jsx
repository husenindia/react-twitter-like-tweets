
import { useState } from 'react';
import NewPost from '../new-post/NewPost';
import Post from '../post-card/Post';
import classes from './PostList.module.css'
import Modal from '../modal/Modal';
function PostList({modalIsVisibleProp, onCloseModalFunc}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        const response = fetch(
        "https://starpi-api-production.up.railway.app/api/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            data: {
                title: "Title yet to be configure",
                content: postData.body,
                author: postData.author
            }
            })
        }
        );
        setPosts((existingPosts)=> [postData, ...existingPosts]);
    }
    return (
        <>
            {modalIsVisibleProp && 
                <Modal onCloseModalFunc={onCloseModalFunc}>
                    <NewPost 
                    onAddPostFunc={addPostHandler}
                    onCancel={onCloseModalFunc}/>
                </Modal> 
            }   
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    { posts.map((post)=> <li key={post.body}><Post postAuthor={post.author} postContent={post.body}></Post></li>)}
                </ul>
            )}
            {posts.length === 0 && (
                <div>
                    <h2>There are no tweets</h2>
                    <p>Start adding some</p>
                </div>
            )}
        </>
    );
}
export default PostList;