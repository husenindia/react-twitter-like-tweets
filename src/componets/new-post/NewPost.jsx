import classes from './NewPost.module.css';

function NewPost() {
    function changeBodyHandler(event) {
        console.log(event.target.value);
    }
    return (
        <form className={classes.form}>
            <p>
                <label>Text</label>
                <textarea rows="3" onChange={changeBodyHandler }></textarea>
                {/* <textarea rows="3" onChange={(e) => { changeBodyHandler(e); }}></textarea> */}
            </p>
            <p>
                <label>Your name</label>
                <input type="text"/>
            </p>
        </form>
    );
}
export default NewPost;