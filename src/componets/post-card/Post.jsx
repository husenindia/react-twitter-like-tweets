import classes from './Post.module.css';

function Post({postAuthor, postContent}) {

    return (
        <>
            <h1 className={classes.blue_color}>Post by <span>{postAuthor}</span></h1>
            <p>{postContent}</p>
        </>
    )
}
export default Post;