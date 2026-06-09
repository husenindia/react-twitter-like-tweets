
import { useState } from 'react';
import NewPost from '../new-post/NewPost';
import Post from '../post-card/Post';
import classes from './PostList.module.css'
import Modal from '../modal/Modal';
function PostList({modalIsVisibleProp, onCloseModalFunc}) {
    const [postBody, setPostBody] = useState("");
    const [postAuthor, setPostAuthor] = useState("");


    function changePostAuthorHandler(event) {
        setPostAuthor(event.target.value);
    }

    function changePostBodyHandler(event) {
        setPostBody(event.target.value);
    }

    return (
        <>
            
            {modalIsVisibleProp && 
                <Modal onCloseModalFunc={onCloseModalFunc}>
                    <NewPost 
                    onPostBodyChange={changePostBodyHandler}
                    onPostAuthorChange={changePostAuthorHandler} />
                </Modal> 
            }   
            <ul className={classes.posts}>
                <li><Post postAuthor={postAuthor} postContent={postBody} /></li>
                <li><Post postAuthor="Husen" postContent="Post Content by Husen" /></li>
                <li><Post postAuthor="Fatema" postContent="Post Content by Fatema" /></li>
                <li><Post postAuthor="Zehara" postContent="Post Content by Zehara" /></li>
            </ul>
        </>
    );
}
export default PostList;