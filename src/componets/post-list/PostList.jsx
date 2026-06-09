
import NewPost from '../new-post/NewPost';
import Post from '../post-card/Post';
import classes from './PostList.module.css'
function PostList() {
    return (
        <>
            <NewPost/>
            <ul className={classes.posts}>
                <li><Post postAuthor="Husen" postContent="Post Content by Husen" /></li>
                <li><Post postAuthor="Fatema" postContent="Post Content by Fatema" /></li>
                <li><Post postAuthor="Zehara" postContent="Post Content by Zehara" /></li>
            </ul>
        </>
    );
}
export default PostList;